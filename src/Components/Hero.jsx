import React, {useState} from 'react';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Translate from '@docusaurus/Translate';

export default class Hero extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const titleText = document.querySelector('.titleText');
    titleText.classList.remove('titleTextTransition');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition');
          return;
        }

        titleText.classList.remove('titleTextTransition');
      });
    });

    observer.observe(document.querySelector('.mainText'));
  }

  render() {
    return (
      <div className="HomeHero">
        <div className="mainText">
          <div className="titleText">We are going to the Moon</div>
          <div className="projectDescription">
            Check out our discord to see what's up
            <a href="https://discord.gg/5nAu7K9aES" target="_blank">
              <Translate>Join Now!</Translate>
            </a>
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
