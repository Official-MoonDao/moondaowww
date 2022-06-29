import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Link from '@docusaurus/Link';
import {render} from 'react-dom';

export default class Values extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullOpacity: false};
  }

  componentDidMount() {
    const titleText = document.querySelector('.titleText4');
    titleText.classList.remove('titleTextTransition4');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition4');
          return;
        }

        titleText.classList.remove('titleTextTransition4');
      });
    });

    observer.observe(document.querySelector('.titleText4'));
  }

  render() {
    var opacity = 1;
    if (!this.state.fullOpacity) {
      opacity = Math.min(
        this.props.currentScrollHeight / window.innerHeight - 2,
        1,
      );
      if (opacity >= 1) {
        this.state.fullOpacity = true;
      }
    }

    return (
      <div className="Values_Block" id="values" style={{opacity: opacity}}>
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--100">
              <h5 className="daoColor">
                <Translate>Values</Translate>
              </h5>
              <h3 className="titleText4">
                <Translate>
                  Space should be in the hands of the people.
                </Translate>
              </h3>
              <p>
                <Translate>
                  We uphold values of inclusion, peace, transparency, freedom of
                  organization and speech. Space should be in the hands of the
                  people, not any one nation or private entity.
                </Translate>
              </p>
              <p>
                <Translate>
                  As such, MoonDAO will support funding for individuals to go to
                  space and fund future space research and exploration as it
                  fits into the mission of becoming a governing body for the
                  moon and other celestial bodies.
                </Translate>
              </p>
              <p>
                <Translate>
                  It is very important to note that the core team has not
                  pre-mined any tokens for ourselves. We have not given “special
                  terms” to any Venture Capitalists, Influencers, Angel
                  Investors, Rich Friends or Family, or any other person. We are
                  all being treated equally.
                </Translate>
              </p>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <a href="#MoonPhase">
            <ScrolldownArrow />
          </a>
        </div>
      </div>
    );
  }
}
