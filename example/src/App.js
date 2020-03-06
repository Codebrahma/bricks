import React from 'react'
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
  Table, Head, HeaderRow, HeaderCell, Body, Row, Cell,
} from 'cb-design-system'
import theme from './theme';

const BoxWithBeforeAndAfter = withBeforeAfter(Box, {
  content: '""',
  display: 'inline-block',
  width: 10,
  height: 10,
  backgroundColor: 'tomato',
}, {
  content: '""',
  display: 'inline-block',
  width: 10,
  height: 10,
  backgroundColor: 'primary',
});

export default () => (
  <ThemeProvider theme={theme}>
    <IconButton icon={<i>Hello</i>} iconFirst={false}>
      Hello
    </IconButton>

    <ReadMore numberOfChars={20}>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.
    </ReadMore>

    <Truncate>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
    </Truncate>
  
    <Input type='text' placeholder='type here...'  />
  
    <Hide md><h1>asdasdsd</h1></Hide>
    
    <BoxWithBeforeAndAfter>Hello</BoxWithBeforeAndAfter>

    <Relative>
      <Background bgColor='red'>background</Background>
      <Absolute left={'250px'} top='0'>
        absolute
      </Absolute>
    </Relative>
    <br/>
    <Textarea placeholder='type heree...' />
    <br/>

    <Tooltip message="haiiii" bg="primary" color="warning">
      <BoxWithBeforeAndAfter>HelloHelloHelloHelloHelloHelloHelloHello</BoxWithBeforeAndAfter>
    </Tooltip>
    <Box style={{width: '80%', margin: 'auto'}}>
      <Table hoverable>
        <Head >
          <HeaderRow>
            <HeaderCell>Column 1</HeaderCell>
            <HeaderCell>Column 2</HeaderCell>
            <HeaderCell>Column 3</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </Row>
          <Row>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </Row>
          <Row>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </Row>
          <Row>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </Row>
        </Body>
      </Table>
    </Box>
  </ThemeProvider>
)
