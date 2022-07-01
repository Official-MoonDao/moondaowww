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

    const joinDiscord = document.querySelector('#joinDiscord');
    joinDiscord.classList.remove('buttonCTATransition');

    const learnMore = document.querySelector('#learnMore');
    learnMore.classList.remove('buttonCTATransition');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition');
          setTimeout(() => {
            learnMore.classList.add('buttonCTATransition');
          }, 1000);
          setTimeout(() => {
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
          <div className="titleText">We are going to the Moon</div>
          <div className="buttonContainer">
            <div className="buttonCTA" id="learnMore">
              <a href="#mission">
                <Translate>Learn More</Translate>
              </a>
            </div>
            <div className="buttonCTA" id="joinDiscord">
              <a href="https://discord.gg/5nAu7K9aES" target="_blank">
                <Translate>Join our Discord</Translate>
              </a>
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
