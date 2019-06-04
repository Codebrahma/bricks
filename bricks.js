import { css } from 'theme-ui'
export { css } from 'theme-ui'
export { ThemeProvider } from 'theme-ui'

export { Box, Flex, Container } from './layout'
export {  H1, H2, H3, H4, H5 } from './typography/heading'
export { P, B, I, HorizontalRule, Text}  from './typography/index'
export { InputButton, InputText } from './components'

export const dummy = (a)=> {
  let z = css({color:'red'});
  console.log('inside dummy')
  return (a)=>{console.log('sda'+a);return z(a)};
}