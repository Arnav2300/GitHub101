import React from 'react';
import './Visualizer.css';
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
       for(let i=0;i<1519;i++)
       {
           array.push(randIntInterval(2,721));
       }
       this.setState({array});
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
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
        </div>
      </div>
    );
  }
}

  
  function randIntInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

