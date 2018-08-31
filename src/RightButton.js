import React from 'react'

export default function RightButton (props) {
  return (
    <div className='right-button'
      onClick={props.nextRight}>
      <h2>▶</h2>
    </div>
  )
}
