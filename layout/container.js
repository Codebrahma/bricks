import { jsx } from '../utils/'
import { Box } from './index'


export const Container = props => {
  return jsx(Box, {
      ...props,
      css: {
        width: '100%',
        minWidth: 0,
        maxWidth: 1024,
        mx: 'auto',
        variant: 'styles.Container',
      }
    })
}
Container.displayName = 'Container';

