import React, { useState, Fragment } from "react";
import {Link} from 'react-router-dom';
import {
  ThemeProvider,
  Box,
  Hide,
  IconButton,
  Input,
  Textarea,
  ReadMore,
  Truncate,
  withBeforeAfter,
  Background,
  Absolute,
  Relative,
  Tooltip,
  Button,
  openModal,
  Modal,
  PortableModalContainer,
  ScrollableTable, Head, HeaderRow, HeaderCell, Body, Row, Cell
} from "cb-design-system";

import theme from "./theme";

const BoxWithBeforeAndAfter = withBeforeAfter(
  Box,
  {
    content: '""',
    display: "inline-block",
    width: 10,
    height: 10,
    backgroundColor: "tomato"
  },
  {
    content: '""',
    display: "inline-block",
    width: 10,
    height: 10,
    backgroundColor: "primary"
  }
);

const tabledata = [
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
  {val: [1,2,3]},
]

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <PortableModalContainer />
      <IconButton icon={<i>Hello</i>} iconFirst={false}>
        Hello
      </IconButton>

      <ReadMore numberOfChars={20}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter.
      </ReadMore>

      <Truncate>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </Truncate>

      <Input type="text" placeholder="type here..." />
      <br />
      <Input type="text" placeholder="type here........" />

      <Hide md>
        <h1>asdasdsd</h1>
      </Hide>

      <BoxWithBeforeAndAfter>Hello</BoxWithBeforeAndAfter>

      <Relative>
        <Background bgColor="red">background</Background>
        <Absolute left={"250px"} top="0">
          absolute
        </Absolute>
      </Relative>
      <br />
      <Textarea placeholder="type heree..." />
      <br />

      <Tooltip message="haiiii" bg="primary" color="warning">
        <BoxWithBeforeAndAfter>
          HelloHelloHelloHelloHelloHelloHelloHello
        </BoxWithBeforeAndAfter>
      </Tooltip>

      <div id="modal-container"></div>

      <Button onClick={() => openModal({
        header: 'Hello',
        body: (
          <Fragment>
            <Button onClick={() => openModal({
              header: 'Im inner modal',
            })}>
              Open Modal
            </Button>
            <Link to="/">Home</Link>
          </Fragment>
        ),
      })}>
        Open Modal
      </Button>
      <Modal open={true} header="Rendered" />

      <Box style={{width: '80%', margin: 'auto'}}>
        <ScrollableTable hoverable>
          <Head bg='primary'>
            <HeaderRow>
              <HeaderCell>Column 1</HeaderCell>
              <HeaderCell>Column 2</HeaderCell>
              <HeaderCell>Column 3</HeaderCell>
            </HeaderRow>
          </Head>
          <Body>
            <Row>
              <Cell isTruncated>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos libero omnis quisquam neque. Velit molestias alias voluptate laborum illo ipsum, eaque ullam nihil vitae, maxime error nisi? Nostrum, eos possimus.</Cell>
              <Cell>2</Cell>
              <Cell>3</Cell>
            </Row>
            {tabledata.map((value, i) => (
              <Row key={value.val[1]+i}>
                <Cell>{value.val[0]}</Cell>
                <Cell >{value.val[1]}</Cell>
                <Cell>{value.val[2]}</Cell>
              </Row>
            ))}
          </Body>
        </ScrollableTable>
    </Box>
    </ThemeProvider>
  );
};
