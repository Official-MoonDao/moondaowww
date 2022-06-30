import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Mission from './Mission';
import Objectives from './Objectives';
import Values from './Values';
import Roadmap from './Roadmap';
import {render} from 'react-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default class BlockParent extends React.Component {
  constructor() {
    super();
    this.state = {currentScrollHeight: 0};
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = window.scrollY;
      if (screen.width < 768) {
        this.setState({currentScrollHeight: 10000000});
      } else {
        this.setState({currentScrollHeight: newScrollHeight});
      }
      console.log(window.innerHeight);
      console.log(newScrollHeight);
    };
  }

  BrowserOnlyJS = () => {
    return (
      <BrowserOnly fallback={<div></div>}>
        {() => {
          this.state.windowHeight = window.innerHeight;
          window.onscroll = () => {
            const newScrollHeight = window.scrollY;
            if (screen.width < 768) {
              this.setState({currentScrollHeight: 10000000});
            } else {
              this.setState({currentScrollHeight: newScrollHeight});
            }
          };
        }}
      </BrowserOnly>
    );
  };

  render() {
    return (
      <div>
        <this.BrowserOnlyJS></this.BrowserOnlyJS>
        <Mission
          currentScrollHeight={this.state.currentScrollHeight}
          windowHeight={this.state.windowHeight}
        />
        <Objectives
          currentScrollHeight={this.state.currentScrollHeight}
          windowHeight={this.state.windowHeight}
        />
        <Values
          currentScrollHeight={this.state.currentScrollHeight}
          windowHeight={this.state.windowHeight}
        />
        <Roadmap
          currentScrollHeight={this.state.currentScrollHeight}
          windowHeight={this.state.windowHeight}
        />
      </div>
    );
  }
}
