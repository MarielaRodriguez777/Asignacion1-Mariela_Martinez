import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import '../../styles/css/SignIn/signIn.css'

export class Loading extends Component {
  render() {
  return (
      <div className="div_centrado">
        <Spinner size={200} spinnercolor={"#25CED1"} spinnerwidth={5} visible={true} />
      </div>
    );
  }
}
