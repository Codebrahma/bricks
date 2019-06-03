import React from 'react'
export const Props = ({of}) => {
  let props = of.propTypes;
  return (
    <ul>
        {Object.keys(props).map(element => <li key={element}>{element}</li>)
        }
    </ul>
  )
}