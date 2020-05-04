import React from 'react';
import PropTypes from 'prop-types';
import {
  MessagesContainer,
  MessageWrapper,
  Title,
  TitleContainer,
  Description,
  CloseIcon,
  IndicationImage,
} from './component';

const MessageComponent = ({ position, messages, removeMessage, variant }) => {
  const images = {
    info: 'https://img.icons8.com/color/64/000000/info.png',
    success: 'https://img.icons8.com/color/48/000000/checked--v1.png',
    warning: 'https://img.icons8.com/emoji/48/000000/warning-emoji.png',
    show: null,
    error: 'https://img.icons8.com/office/48/000000/cancel.png',
  };

  const closeHandler = (message) => {
    removeMessage(message);
  };

  return (
    <MessagesContainer position={position}>
      {messages.map((message) => {
        // const icon = icons[message.type];
        const imageSource = images[message.options.type];
        return (
          <MessageWrapper key={message.id} variant={variant}>
            <CloseIcon onClick={() => closeHandler(message)} variant={variant}>
              &times;
            </CloseIcon>
            <TitleContainer>
              {imageSource ? (
                <IndicationImage src={imageSource} variant={variant} />
              ) : null}
              <Title variant={variant}>{message.options.title}</Title>
            </TitleContainer>
            <Description variant={variant}>
              {message.options.description}
            </Description>
          </MessageWrapper>
        );
      })}
    </MessagesContainer>
  );
};

MessageComponent.propTypes = {
  position: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeMessage: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default MessageComponent;
