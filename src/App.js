import React, { Component } from 'react'
import './App.css'
import allPoems from './allPoems'
import Poems from './Poems'

class App extends Component {
  state = {
    allPoems: []
  }

  componentDidMount = () => {
    this.setState({ allPoems })
  }

  render () {
    return (
      <div className='App'>
        {/* <header className='App-header'>

          <h1 className='App-title'>I'm still here</h1>
        </header> */}
        {/* <p className='App-intro'>
        Project timeline: Monday, Jan 2. 2017- Sunday, Dec 31. 2018
          <br />
        Artists:
          <br /> Guillermo Gudiño and Georgia Wall
          <br />
        Structure:
          <br />
        Monday artist 1 writes artist 2 a line of poetry using WhatsApp
        Tuesday artist 2 responds by adding another line to the poem
        This continues; artists alternating adding a line to the poem each day of the week
        The 7-line poem ends on Sunday.

        Monday artist 2 will begin the next poem using the same structure as above.

        *Note: if an artist cannot contribute his/her line (because of lack of internet access or other extenuating circumstances) that line will be skipped. This means that not all poems will necessarily follow the 7-line structures.

        Title:
        The first line of the poem becomes the title of the poem
        The titles of the poem will act as our guidelines for the poem's content
        The titles should also take into consideration the title’s previous poems and may act as a link or overarching conversation between the artists
        </p> */}

        <Poems
          allPoems={this.state.allPoems} />

      </div>
    )
  }
}

export default App
