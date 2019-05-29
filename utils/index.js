import *  as styledSystem from 'styled-system'
import theme from '../theme'

const {get: getKey, themeGet} = styledSystem

export const get = key => {
  return themeGet(key, getKey(theme, key))
}
