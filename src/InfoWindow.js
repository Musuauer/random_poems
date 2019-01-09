import React from 'react'

export default function InfoWindow (props) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1 className='App-title'>50 weeks</h1>
        <div className='App-intro'>
          <h2>
            Artists
          </h2>

          <p>
            <a href='https://guillermogudino.com/'>
              Guillermo Gudiño
            </a> and <a href='http://www.georgiawall.com/'>
              Georgia Wall
            </a>
          </p>

          <h2>
            Project timeline
          </h2>

          <p>
            Monday, Jan 2. 2017 - Sunday, Dec 31. 2018
          </p>

          <h2>
            Structure
          </h2>

          <p>
            Monday... Guillermo Gudiño writes Georgia Wall a line of poetry using WhatsApp.
          </p>

          <p>
            Tuesday... Georgia Wall responds by adding another line to the poem.
          </p>

          <p>
            This continues; artists alternating adding a line to the poem each day of the week.
          </p>

          <p>
            The 7-line poem ends on Sunday.
          </p>

          <p>
            Next Monday... Georgia Wall will begin the next poem using the same structure as above.
          </p>

          <p>
            *Note: if an artist cannot contribute his/her line (because of lack of internet access or other extenuating circumstances) that line will be skipped.
          </p>

          <p>
            This means that not all poems will necessarily follow the 7-line structures.
          </p>

          <h2>
            Description
          </h2>

          <p>
            “50 weeks” is a piece of Electronic Literature written by Georgia Wall and Guillermo Gudino. It is a series of collaborative poems produced over the course of a year, using the mobile app WhatsApp. Each poem was created over the course of a week with the two artists alternating to add one line a day in their chat. During the year in which “50 weeks” was written, the two artists, who have been collaborating since 2011, communicated solely through these poetry exchanges. When the project was completed in early 2018, the poems were transcribed and a website was built to house the collection.
          </p>

          <p>
             Georgia Wall is a native New Yorker living and working in Queens. Guillermo Gudiño is a Mexican artist living and working in Berlin. The two met in graduate school at The School of The Art Institute of Chicago and began collaborating after graduating in 2011. “50 weeks” is Wall and Gudiño’s second durational, long-distance collaborative project.
          </p>

        </div>
      </div>

      <div
        className='info-button'
        onClick={props.toggleModal}>
      close
      </div>

    </div>
  )
}
