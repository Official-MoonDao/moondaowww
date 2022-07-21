import React, {useState} from 'react';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Translate from '@docusaurus/Translate';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default class ActiveProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullOpacity: false};
  }
  BrowserOnlyJS = () => {
    return (
      <BrowserOnly fallback={<div></div>}>
        {() => {
          setInterval(() => {
            var currentPath = window.location.pathname;
            const navbar = document.querySelector('.navbar');
            if (
              currentPath.length === 0 ||
              currentPath === '/' ||
              currentPath.match(/^\/?index/)
            ) {
              navbar.classList.add('navbar-trans');
            } else {
              navbar.classList.remove('navbar-trans');
            }
          }, 10);
        }}
      </BrowserOnly>
    );
  };

  render() {
    var opacity = 1;
    if (!this.state.fullOpacity) {
      opacity = Math.min(
        this.props.currentScrollHeight / this.props.windowHeight,
        1,
      );
      if (opacity >= 1) {
        this.state.fullOpacity = true;
      }
    }

    return (
      <div
        className="DudePerfect"
        id="activeProject"
        style={{opacity: opacity}}>
        <video autoPlay muted playsInline loop id="dpVideo">
          <source src="/img/ModelRocketBattlleClip.mp4" type="video/mp4" />
        </video>
        <div className="Mobile_Opacity">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--100">
                <h3 className="titleText">
                  <Translate>Our 2022 Goal</Translate>
                </h3>
                <h2 className="subtitleText">
                  <Translate>Send MoonDAO members to space</Translate>
                </h2>
                <p className="descText">
                  <Translate>
                    MoonDAO has purchased two tickets to space with Blue Origin.
                    Our members voted with $MOONEY to select Dude Perfect for
                    one of the tickets, and selected another MoonDAO member at
                    random with our Ticket To Space NFT Collection.
                  </Translate>
                </p>
                <div className="buttonContainer">
                  <a
                    className="buttonCTA"
                    href="https://www.youtube.com/watch?v=venrE8gdz30">
                    Watch DP Video
                  </a>
                  <a
                    className="buttonCTA"
                    href="https://mirror.xyz/pmoncada.eth/HyA4_czQTchCx6x_BN_2zk87zED9w6_AtEGcWhF-vCg">
                    Our Selection Process
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <a href="#mission">
            <ScrolldownArrow />
          </a>
        </div>
      </div>
    );
  }
}
