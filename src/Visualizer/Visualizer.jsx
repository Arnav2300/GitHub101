import React from 'react';
import {getMergeSortAnimations} from '../algos/algos.js';
import './Visualizer.css';

const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 1519;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'black';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'turquoise';

export default class Visualizer extends React.Component{
    constructor(){  
        super();
        this.state={
            array:[],
            
        };
          
   }
   componentDidMount(){
       this.resetArray();
       
   }
   
   resetArray(){
       const array=[]
       for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
       {
           array.push(randIntInterval(2,721));
       }
       this.setState({array});
   }

   mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    
  }

  heapSort() {
    
  }

  bubbleSort() {
    
  }

  
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randIntInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randIntInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

   render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: "red",
              height: `${value}px`,
            }}></div>
        ))}
        <div className="button">
        <button  onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div>
      </div>
    );
  }
}

  
  function randIntInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
