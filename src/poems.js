import React from 'react'

export default function Poems (props) {
  return (
    <div className='poems-list'>
      {console.log(props.allPoems)}
      {props.allPoems.map(poem =>
        <div key={poem.week}
          className='poem'
        >
          <div className='poem-week'>
            <h1>Week: {poem.week}</h1>
          </div>
          <div className='poem-title'>
            <p>{poem.title}</p>
          </div>
          <div className='poem-body'>
            {poem.text.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      )}
    </div>
  )
}
