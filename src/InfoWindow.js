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
        Monday... artist 1 writes artist 2 a line of poetry using WhatsApp.
          <br />
        Tuesday... artist 2 responds by adding another line to the poem.
          <br />
        This continues; artists alternating adding a line to the poem each day of the week.
          <br />
        The 7-line poem ends on Sunday.
          <br />
        Next Monday... artist 2 will begin the next poem using the same structure as above.
          <br />
          <br />

        *Note: if an artist cannot contribute his/her line (because of lack of internet access or other extenuating circumstances) that line will be skipped.
          <br />
        This means that not all poems will necessarily follow the 7-line structures.
          <br />
          <br />

        Title:
          <br />
        The first line of the poem becomes the title of the poem.
          <br />
        The titles of the poem will act as our guidelines for the poem's content.
          <br />
        The titles should also take into consideration the title’s previous poems and may act as a link or overarching conversation between the artists.
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
