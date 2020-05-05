import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import MessageComponent from './messageComponent';
import { positions, types } from './options';

function Message({ variant, ...rest }) {
  const [messages, setMessages] = useState([]);
  const timersId = [];

  useEffect(() => {
    return () => {
      timersId.forEach(clearTimeout);
    };
  }, []);

  const remove = (messageToBeDeleted) => {
    setMessages((currentMessages) => {
      const filteredMessages = currentMessages.filter(
        (message) => message.id !== messageToBeDeleted.id
      );
      return filteredMessages;
    });
  };

  const splitMessages = (array, fn) => {
    if (array) {
      return array.reduce((result, item) => {
        const key = fn(item);
        if (!result[key]) result[key] = [];
        result[key].push(item);
        return result;
      }, {});
    }
  };

  const classifyMessages = (options, type) => {
    let messageOptions = { ...options };
    let defaultTimeOut = 2000;
    const { timeOut } = options;
    if (!options.placement) {
      messageOptions = { ...messageOptions, placement: 'top-right' };
    }
    const id = Math.random().toString(36).substr(2, 9);
    const message = {
      id,
      options: messageOptions,
      type,
    };
    setMessages([...messages, message]);
    if (timeOut !== undefined) {
      defaultTimeOut = timeOut;
    }
    if (defaultTimeOut !== 0) {
      const timerId = setTimeout(() => {
        remove(message);
        timersId.splice(timersId.indexOf(timerId), 1);
      }, defaultTimeOut);
      timersId.push(timerId);
    }
  };
  Message.info = (options) => {
    classifyMessages(options, types.INFO);
  };
  Message.success = (options) => {
    classifyMessages(options, types.SUCCESS);
  };
  Message.warning = (options) => {
    classifyMessages(options, types.WARNING);
  };
  Message.error = (options) => {
    classifyMessages(options, types.ERROR);
  };
  Message.show = (options) => {
    classifyMessages(options, types.SHOW);
  };
  const messageByPositions = splitMessages(
    messages,
    (message) => message.options.placement
  );
  return (
    <Box>
      {messages.length > 0 &&
        Object.keys(positions).map((position) => {
          const currentPosition = positions[position];
          return messageByPositions[currentPosition] ? (
            <MessageComponent
              position={currentPosition}
              messages={messageByPositions[currentPosition]}
              key={currentPosition}
              removeMessage={remove}
              variant={variant}
              {...rest}
            />
          ) : null;
        })}
    </Box>
  );
}
Message.propTypes = {
  variant: PropTypes.string.isRequired,
};
const MessageContext = ({ children, variant }) => (
  <Box>
    <Message variant={variant} />
    {children}
  </Box>
);
MessageContext.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
MessageContext.defaultProps = {
  variant: 'primary',
};
function useMessage() {
  return {
    info: (options) => Message.info(options),
    success: (options) => Message.success(options),
    error: (options) => Message.error(options),
    warning: (options) => Message.warning(options),
    show: (options) => Message.show(options),
  };
}

export { MessageContext, useMessage };
