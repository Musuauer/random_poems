import React from 'react'

export default function RandomButton (props) {
  return (
    <div className='random-button'
      onClick={props.shuffleNow}>
      <h2>Another week</h2>
    </div>
  )
}
