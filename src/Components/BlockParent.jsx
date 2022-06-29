import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Mission from './Mission';
import Objectives from './Objectives';
import Values from './Values';
import Roadmap from './Roadmap';
import {render} from 'react-dom';

export default class BlockParent extends React.Component {
  constructor() {
    super();
    this.state = {currentScrollHeight: 0};
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = window.scrollY;
      this.setState({currentScrollHeight: newScrollHeight});
      console.log(window.innerHeight);
      console.log(newScrollHeight);
    };
  }

  render() {
    return (
      <div>
        <Mission currentScrollHeight={this.state.currentScrollHeight} />
        <Objectives currentScrollHeight={this.state.currentScrollHeight} />
        <Values currentScrollHeight={this.state.currentScrollHeight} />
        <Roadmap currentScrollHeight={this.state.currentScrollHeight} />
      </div>
    );
  }
}
