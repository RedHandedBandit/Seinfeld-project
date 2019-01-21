import React, { Component } from 'react';
import './App.css';
import Cast from './components/Cast'
import Functional from './components/Functional'
import Delete from './components/Delete'


// import axios from 'axios'

class App extends Component {
  

  
  // componentDidMount(){  //frontend endpoints
  //   axios.get('/api/(endpoint)')
  // }




  render() {
    
    
      
    return (
      <div>
      {/* // <div style={{ height: 60, width: '50vw', background: '#10BDF0', border: "1px black solid", margin: '15px auto', paddingTop: '10px' }}> */}
        <Functional />
        
        <h2> Seinfeld Main Cast </h2>
        <Cast updateList={this.updateName}
              deletedObj={this.deleteCastMember}/>
          <Delete /> 
        
      <img alt= "" className="The Kramer" src="https://images-na.ssl-images-amazon.com/images/I/61gHTIfckeL._SL1000_.jpg"></img> 
      </div>
    );
  }
}

export default App;

