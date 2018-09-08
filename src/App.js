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

  componentDidMount = () => {
    this.setState(
      { allPoems },
      () => this.shuffleNow()
    )
  }

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

 toggleModal = () => {
   this.setState(prevState => ({
     showModal: !prevState.showModal
   }))
   console.log('modal toggled')
 }
 render () {
   return (
     <div className='App'
       onClick={this.shuffleNow}>

       <OnePoem
         currentPoem={this.state.currentPoem}
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
