import React from 'react'

export default function LeftButton (props) {
  return (
    <div className='left-button'
      onClick={props.nextLeft}>
      <h2>◀</h2>
    </div>
  )
}
