import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import {render} from 'react-dom';

export default class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullOpacity: false};
  }

  componentDidMount() {
    const titleText = document.querySelector('.titleText2');
    titleText.classList.remove('titleTextTransition2');

    const quote = document.querySelector('.quote');
    quote.classList.remove('quoteTransition');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition2');
          setTimeout(() => {
            quote.classList.add('quoteTransition');
          }, 2000);
          return;
        }

        titleText.classList.remove('titleTextTransition2');
        quote.classList.remove('quoteTransition');
      });
    });

    observer.observe(document.querySelector('.titleText2'));
  }

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
      <div className="Block_PrimaryBg" id="mission" style={{opacity: opacity}}>
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--100">
              <h5 className="daoColor">
                <Translate>Mission</Translate>
              </h5>
              <h2 className="titleText2">
                <Translate>MoonDAO is going to the moon.</Translate>
              </h2>
              <p>
                <Translate>
                  MoonDAO is an international collective of people united by the
                  mission of decentralizing access to space research and
                  exploration. We are currently living at the inflection point
                  of a privatized space race, and the implications of this
                  moment will define our future. Making life multi-planetary is
                  one of the most inspiring and important missions in our
                  lifetime. The big question is: how? We believe that an
                  international, decentralized, inclusive, and transparent
                  organization would be much better aligned with the needs of
                  the everyday person.
                </Translate>
              </p>
              <blockquote className="quote">
                <p>
                  "
                  <Translate>
                    All civilizations become either spacefaring or extinct.
                  </Translate>
                  "
                </p>
                <p className="attribution">&mdash; Carl Sagan</p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <a href="#objectives">
            <ScrolldownArrow />
          </a>
        </div>
      </div>
    );
  }
}
