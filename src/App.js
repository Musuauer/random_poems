import React, { Component } from 'react'
import './App.css'
import allPoems from './allPoems'
import OnePoem from './OnePoem'
import InfoWindow from './InfoWindow'

class App extends Component {
  state = {
    allPoems: [],
    currentPoem: {},
    showModal: false
  }

  // load all poems from JSON file and shuffle them
  componentDidMount = () => {
    this.setState(
      { allPoems },
      () => this.shuffleNow()
    )
  }

  // shuffle a copy of the poems in state and set one (#25, the one in the middle) as the current poem
  shuffleNow = () => {
    const allPoemsCopy = this.state.allPoems.slice(0)
    const shuffledPoems = this.shuffle(allPoemsCopy)
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

  //  show or hidde modal changing the state
 toggleModal = () => {
   this.setState(prevState => ({
     showModal: !prevState.showModal
   }))
 }

 render () {
   return (
     <div className='App'>

       <OnePoem
         currentPoem={this.state.currentPoem}
         onClick={this.shuffleNow}
       />

       <div
         onClick={this.toggleModal}
         className='info-button'>
         <h2>info</h2>
       </div>

       {
         this.state.showModal &&
         <InfoWindow
           toggleModal={this.toggleModal}
         />
       }

     </div>
   )
 }
}

export default App
