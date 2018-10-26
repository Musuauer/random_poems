import React from 'react'

export default function OnePoem ({ currentPoem, shuffle }) {
  return (
    <div className='one-poem'
      onClick={shuffle}>
      {(currentPoem.week != null) &&
      (
        <div
          className='poem'
        >
          <div className='poem-week'>
            <h1>Week {currentPoem.week}</h1>
          </div>
          <div className='poem-title'>
            <h3>{(currentPoem.title.length === 2)
              ? currentPoem.title.map((line, i) => <p key={i}>{line}</p>)
              : (currentPoem.title)
            }
            </h3>
          </div>
          <div className='poem-body'>
            {currentPoem.text.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      )
      }

    </div>
  )
}
