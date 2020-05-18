import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {random} from 'mathjs';
import quotesList from "./Text.js"

class App extends Component{
  constructor(props){
    super(props);

//Don't leave console.logs in final submissions
    console.log(quotesList);
    this.state = {
      activeQuote: "Click the atom to get a new quote!",
    }
    //If we use arrow functions like you did for setQuote then you don't need to worry about bind this
    //Arrow functions are the preferred syntax so good job
    // this.myFunc = this.myFunc.bind(this);
  }

  setQuote = () => {
    let i = Math.round(random() * 102)
    //Because you don't use prevState in your return, no need to include as an argument. Instead you can write
    //this.setState({activeQuote: quotesList[i]});
    /*I use prevState most commonly when I have a variable in state that holds a true or false value and I call a 
    function to set a true value to false or a false value to true (so the opposite of current state) and I write this
    like !prevState.showQuotes (instead of !this.state.showQuotes which you might see sometimes)*/
    this.setState(prevState => {
      return {
        activeQuote: quotesList[i] // TODO 
      }
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3>Inspirational Quotes</h3>
          <br/> <br/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //Don't need this.myFunc
          {this.myFunc}
          {/* {console.log("hi")} */}


          <button onClick={()=>{
            console.log("hi");
            this.setQuote();
            }}>
              //Fun idea
            <img src={logo} className = "App-logo" />
          </button>



          {/* <input type="image" src={logo} className="App-logo" onClick={() => console.log("hi")}/> */}
          
          
          <p>
            {this.state.activeQuote}
          </p>
          //Change your settings so when you do cmd S for saving, your document will auto format
        </header>
      </div>
    );
  }
}

export default App;
