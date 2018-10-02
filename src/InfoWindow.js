import React from 'react'

export default function InfoWindow (props) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1 className='App-title'>50 poems</h1>
        <p className='App-intro'>
        Artists:
          <br />
          <a href='https://guillermogudino.com/'>
          Guillermo Gudiño
          </a> and <a href='http://www.georgiawall.com/'>
          Georgia Wall
          </a>
          <br />
          <br />
        Project timeline:
          <br />
        Monday, Jan 2. 2017 - Sunday, Dec 31. 2018
          <br />
          <br />
        Structure:
          <br />
        Monday... Guillermo Gudiño writes Georgia Wall a line of poetry using WhatsApp.
          <br />
        Tuesday... Georgia Wall responds by adding another line to the poem.
          <br />
        This continues; artists alternating adding a line to the poem each day of the week.
          <br />
        The 7-line poem ends on Sunday.
          <br />
        Next Monday... Georgia Wall will begin the next poem using the same structure as above.
          <br />
          <br />

        *Note: if an artist cannot contribute his/her line (because of lack of internet access or other extenuating circumstances) that line will be skipped.
          <br />
        This means that not all poems will necessarily follow the 7-line structures.
          <br />
          <br />
        </p>
      </div>
      <div
        className='info-button'
        onClick={props.toggleModal}>
      close
      </div>
    </div>
  )
}
