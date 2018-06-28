import React, { Component } from 'react';
import './DirectionButton.css';
import styled from 'styled-components';

class DirectionButton extends Component {
  render() {

    const DirectionButt= styled.div`
      width: 100px;
      height: 100px;
      background-color: grey;
      display:flex;
      align-items: center;
      justify-content:center;
      border: 1px solid red;
      cursor: pointer;
    `;

    function runScript(input){

    }

    return (
      <DirectionButt onClick={runScript(this.props.bashScript)}>
        {this.props.text}
      </DirectionButt>
    );
  }
}

export default DirectionButton;
