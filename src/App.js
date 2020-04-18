import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {random} from 'mathjs';
import quotesList from "./Text.js"

class App extends Component{
  constructor(props){
    super(props);


    console.log(quotesList);
    this.state = {
      activeQuote: "Click the atom to get a new quote!",
    }
    // this.myFunc = this.myFunc.bind(this);
  }

  setQuote = () => {
    let i = Math.round(random() * 102)
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
          {this.myFunc}
          {/* {console.log("hi")} */}


          <button onClick={()=>{
            console.log("hi");
            this.setQuote();
            }}>
            <img src={logo} className = "App-logo" />
          </button>



          {/* <input type="image" src={logo} className="App-logo" onClick={() => console.log("hi")}/> */}
          
          
          <p>
            {this.state.activeQuote}
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
