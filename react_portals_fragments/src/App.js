import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Gnome extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  
  render() {
    return ReactDOM.createPortal(
              <Fragment>
                < div className = "gnome" > < /div> 
                <button > ESCONDER! < /button>
                </Fragment>,
                this.container
            );
  }
}


class App extends Component {

  state = { showGnome: false }

  toggleGnome = ()=> { this.setState({ showGnome: !this.state.showGnome })}

  render() {
    return (
      <Fragment>
        <h1> React demo </h1> 
        <div className = "house" onClick={this.toggleGnome}>
          <button> ESCONDER </button>
          {
            this.state.showGnome && <Gnome/>
          }
        </div>
        
      </Fragment>
    );
  }
}

export default App;
