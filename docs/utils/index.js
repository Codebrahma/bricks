import React from 'react'
export const Props = ({of}) => {
  let props = of.propTypes;
  console.log(props)
  return (
    <ul>
        {props && Object.keys(props).map(element => <li key={element}>{element}</li>)
        }
    </ul>
  )
}