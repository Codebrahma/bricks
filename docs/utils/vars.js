import { jsx } from '@emotion/core'
import { H2 } from '../../bricks'
/**@jsx jsx */
export const links = [
  {title: 'Contact', link: '/contact'},
  {title: 'Pricing', link: '/pricing'},
  {title: 'FAQ', link: '/faq'},
  {title: 'Journal', link: '/journal'},
];
export const Logo = ({title}) => (
      <H2 marginTop={[0,0]}>
          {title}
      </H2>
    )