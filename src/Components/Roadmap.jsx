import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Link from '@docusaurus/Link';
import {render} from 'react-dom';

export default class Roadmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullOpacity: false};
  }

  componentDidMount() {
    const titleText = document.querySelector('.titleText5');
    titleText.classList.remove('titleTextTransition5');

    // Create the observer, same as before:
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition5');
          return;
        }

        titleText.classList.remove('titleTextTransition5');
      });
    });

    observer.observe(document.querySelector('.titleText5'));
  }

  render() {
    var opacity = 1;
    if (!this.state.fullOpacity) {
      opacity = Math.min(
        this.props.currentScrollHeight / window.innerHeight - 3,
        1,
      );
      if (opacity >= 1) {
        this.state.fullOpacity = true;
      }
    }

    return (
      <div className="Roadmap_Block" id="MoonPhase" style={{opacity: opacity}}>
        <div className="Block__Contents">
          <h5 className="daoColor">
            <Translate>Moon Phases</Translate>
          </h5>
          <h3 className="titleText5">
            <Translate>Our roadmap to the stars.</Translate>
          </h3>
          <div className="Row AlignCenter">
            <div className="Column--66">
              <h4 className="daoColor2">
                <Translate>Moon phase 1</Translate>
              </h4>
              <p>
                <strong>
                  <Translate>
                    Deploy a token for decentralized governance of MoonDAO.
                  </Translate>
                </strong>
              </p>
              <p className="small">
                <Translate
                  values={{
                    token: (
                      <Link to="/docs/token">$MOONEY governance tokens</Link>
                    ),
                  }}>
                  {
                    'In order to be a DAO, we need a governance token for decision making. Launching the {token} is our first step. There is no expectation of profit with this token, this token’s purpose is to coordinate our governance.'
                  }
                </Translate>
              </p>
              <p className="small">
                <Translate>
                  Every investor, builder, or fren, big or small, has gotten the
                  same terms. No special treatment for anyone. This is unusual
                  for an Ethereum project, but we thought it would be more fair
                  for everyone involved that we did not airdrop or pre-mine any
                  number of tokens for people ahead of time. We are not VC
                  funded, we are community organized and led, this is very
                  important to us!
                </Translate>
              </p>
            </div>
            <div className="Column--33">
              <p className="center roadmap-moon-icon" id="moonIcon">
                🌒 <br />
              </p>
            </div>
          </div>
          <div className="Row AlignCenter" id="MoonPhase">
            <div className="Column--66">
              <h4 className="daoColor2">
                <Translate>Moon phase 2</Translate>
              </h4>
              <p>
                <strong>
                  <Translate>Send a MoonDAO member to space.</Translate>
                </strong>
              </p>
              <p className="small">
                <Translate>
                  Virgin Galactic advertises its tickets will be sold for “as
                  low as” $450K and it has been reported that Blue Origin’s
                  tickets are have gone up for auction for over $28M. The range
                  is large. MoonDAO wants to help create a world where anyone
                  can fly to space regardless of their financial situation. We
                  hope that this can be a meaningful and inspirational first
                  step in decentralizing space exploration.
                </Translate>
              </p>
              <p className="small">
                <Translate>
                  So far in history, space exploration has been gated to the
                  rest of the world — accessible to only the privileged. MoonDAO
                  changes this for the first time in history.
                </Translate>
              </p>
            </div>
            <div className="Column--33">
              <p className="center roadmap-moon-icon" id="moonIcon">
                🌓 <br />
              </p>
            </div>
          </div>
          <div className="Row AlignCenter" id="MoonPhase">
            <div className="Column--66">
              <h4 className="daoColor2">
                <Translate>Moon phase 3</Translate>
              </h4>
              <p>
                <strong>
                  <Translate>
                    Provide funding to space research and exploration.
                  </Translate>
                </strong>
              </p>
              <p className="small">
                <Translate>
                  We don’t want to just take a ride on someone else’s rockets,
                  we’d like to fund and coordinate our own plans. We think an
                  international collective could move much faster than any
                  red-taped organization, and we can contract out certain
                  aspects of rocket development to private companies -- just
                  like NASA.
                </Translate>
              </p>
              <p className="small">
                <Translate>
                  The exploration of space should unify the world, not pit us
                  against each other like the last space race. After all, aren't
                  we all just curious earthlings that want to explore the
                  unknown? Now, Web 3.0 represents a technology that can unify
                  earthlings and decentralize space exploration.
                </Translate>
              </p>
            </div>
            <div className="Column--33">
              <p className="center roadmap-moon-icon" id="moonIcon">
                🌔 <br />
              </p>
            </div>
          </div>
          <div className="Row AlignCenter" id="MoonPhase">
            <div className="Column--66">
              <h4 className="daoColor2">
                <Translate>Moon phase 4</Translate>
              </h4>
              <p>
                <strong>
                  <Translate>Put a MoonDAO colony on the moon.</Translate>
                </strong>
              </p>
              <p className="small">
                <Translate>
                  That's one small step for man, one giant leap for mankind.
                </Translate>
              </p>
              <p className="small">
                <Translate>
                  The 1967 Space Treaty forms the basis for all law concerning
                  space. In this treaty it states that no national appropriation
                  of the Moon can take place. However, a DAO is not a nation —
                  it is an international collective of frens.
                </Translate>
              </p>
              <p className="small">
                <Translate>
                  We have the opportunity to use these new governance and
                  coordination tools in order to form a more perfect union as we
                  extend the rights and liberties of every human on earth into
                  the solar system.
                </Translate>
              </p>
            </div>
            <div className="Column--33">
              <p className="center roadmap-moon-icon" id="moonIcon">
                🌕 <br />
              </p>
            </div>
          </div>
          <div className="Row AlignCenter" id="MoonPhase5">
            <div className="Column--66">
              <h4 className="daoColor2">
                <Translate>Moon phase 5</Translate>
              </h4>
              <p>
                <strong>
                  <Translate>
                    Have sweet moon parties (everyone's invited).
                  </Translate>
                </strong>
              </p>
              <p className="small">
                <Translate>
                  They're gonna be sweet. BYOB but we'll provide transportation.
                </Translate>
              </p>
            </div>
            <div className="Column--33">
              <p className="center roadmap-moon-icon" id="moonIcon">
                🌝 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
