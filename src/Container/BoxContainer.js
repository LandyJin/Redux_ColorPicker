import React, { Component } from 'react';
import '../App.css';
import Box from '../Components/Box';

// Import Redux
import { connect } from 'react-redux';
import * as actionCreators from '../Actions/RootAction';

export class BoxContainer extends Component {
  render() {
    return (
      <div 
        className="boxContainer" 
        style={{backgroundColor: this.props.color}}
      >
        <Box 
            handleClick={this.props.loadColor} // loadColor is the Name of the Action
        />
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect (mapStateToProps, actionCreators) (BoxContainer)
