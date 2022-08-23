import React, {useState} from 'react';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Translate from '@docusaurus/Translate';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default class Hero extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const titleText = document.querySelector('.titleText');
    titleText.classList.remove('titleTextTransition');
    const subTextContainer = document.querySelector('.subTextContainer');
    subTextContainer.classList.remove('subTextTransition');
    const joinDiscord = document.querySelector('#joinDiscord');
    joinDiscord.classList.remove('buttonCTATransition');
    const learnMore = document.querySelector('#learnMore');
    learnMore.classList.remove('buttonCTATransition');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition');
          setTimeout(() => {
            subTextContainer.classList.add('subTextTransition');
          }, 1000);
          setTimeout(() => {
            learnMore.classList.add('buttonCTATransition');
            joinDiscord.classList.add('buttonCTATransition');
          }, 2000);
          return;
        }
      });
    });
    observer.observe(document.querySelector('.mainText'));
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
    return (
      <div className="HomeHero">
        <this.BrowserOnlyJS></this.BrowserOnlyJS>
        <div className="mainText">
          <div className="titleText">Let's decentralize access to space</div>
          <div className="subTextContainer">
            MoonDAO’s mission is to create a self-sustaining, self-governing
            colony on the Moon to act as a launch point for humanity to explore
            the cosmos.
          </div>
          <div className="buttonContainer">
            <a
              href="https://discord.com/invite/5nAu7K9aES"
              target="_blank"
              className="buttonCTA"
              id="joinDiscord">
              <Translate>Join Us</Translate>
            </a>
            <a
              href="https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8"
              className="buttonCTA"
              id="learnMore">
              <Translate>Learn More</Translate>
            </a>
          </div>
        </div>
        <div className="downArrow">
          <a href="#activeProject">
            <ScrolldownArrow />
          </a>
        </div>
      </div>
    );
  }
}
