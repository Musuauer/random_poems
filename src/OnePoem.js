import React from 'react'

export default function OnePoem (props) {
  return (
    <div className='one-poem'>
      {(props.currentPoem.week != null) &&
      (
        <div
          className='poem'
        >
          <div className='poem-week'>
            <h1>Week {props.currentPoem.week}</h1>
          </div>
          <div className='poem-title'>
            <h3>{(props.currentPoem.title.length === 2)
              ? props.currentPoem.title.map((line, i) => <p key={i}>{line}</p>)
              : (props.currentPoem.title)
            }
            </h3>
          </div>
          <div className='poem-body'>
            {props.currentPoem.text.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      )
      }

    </div>
  )
}
