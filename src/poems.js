import React from 'react'

export default function Poems (props) {
  return (
    <div className='poems-list'>
      {props.allPoems.map(poem =>
        <div key={poem.week}
          className='poem'
        >
          <div className='poem-title'>
            {poem.title}
          </div>
          <div className='poem-body'>
            <p>{poem.text.join(<br />)}</p>
          </div>
        </div>
      )}
    </div>
  )
}
