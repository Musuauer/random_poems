import React, { Component } from 'react'
import './App.css'
import allPoems from './allPoems'
// import Poems from './Poems'
import OnePoem from './OnePoem'
import RandomButton from './RandomButton'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

class App extends Component {
  state = {
    allPoems: [],
    currentPoem: {}
  }

  componentDidMount = () => {
    this.setState(
      { allPoems },
      () => this.shuffleNow()
    )
  }

  shuffleNow = () => {
    const allPoemsCopy = this.state.allPoems.slice(0)
    const shuffledPoems = this.shuffle(allPoemsCopy)
    console.log('shuffled', allPoemsCopy)
    console.log('all', this.state.allPoems)
    this.setState({ currentPoem: shuffledPoems[24] })
  }

 shuffle = (array) => {
   let currentIndex = array.length
   let temporaryValue, randomIndex

   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex)
     currentIndex -= 1
     temporaryValue = array[currentIndex]
     array[currentIndex] = array[randomIndex]
     array[randomIndex] = temporaryValue
   }
   return array
 }

 nextLeft = () => {
   const currentNumber = this.state.currentPoem.week
   const decreasedNumber = currentNumber - 2
   const nextPoem = this.state.allPoems[decreasedNumber]
   this.setState({ currentPoem: nextPoem })
 }
 nextRight = () => {
   const currentNumber = this.state.currentPoem.week
   const nextPoem = this.state.allPoems[currentNumber]
   this.setState({ currentPoem: nextPoem })
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

       {/* <Poems
         allPoems={this.state.allPoems}
         /> */}

       <OnePoem
         currentPoem={this.state.currentPoem}
       />

       <RandomButton
         shuffleNow={this.shuffleNow}
       />

       <LeftButton
         nextLeft={this.nextLeft}
       />

       <RightButton
         nextRight={this.nextRight}
       />

     </div>
   )
 }
}

export default App
