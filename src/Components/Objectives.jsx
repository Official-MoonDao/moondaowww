import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import ScrolldownArrow from '../Components/ScrolldownArrow';
import Link from '@docusaurus/Link';
import {render} from 'react-dom';

export default class Objectives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullOpacity: false};
  }

  componentDidMount() {
    const titleText = document.querySelector('.titleText3');
    titleText.classList.remove('titleTextTransition3');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleText.classList.add('titleTextTransition3');
          return;
        }

        titleText.classList.remove('titleTextTransition3');
      });
    });

    observer.observe(document.querySelector('.titleText3'));
  }

  render() {
    var opacity = 1;
    if (!this.state.fullOpacity) {
      opacity = Math.min(
        this.props.currentScrollHeight / window.innerHeight - 1,
        1,
      );
      if (opacity >= 1) {
        this.state.fullOpacity = true;
      }
    }

    return (
      <div className="Goal_Block" id="objectives" style={{opacity: opacity}}>
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--100">
              <h5 className="daoColor">
                <Translate>Current Objectives</Translate>
              </h5>
              <h3 className="titleText3">
                <Translate>
                  Our plan to send a MoonDAO member to space in 2022:
                </Translate>
              </h3>
              <ol>
                <li>
                  <Translate
                    values={{
                      token: (
                        <Link to="/docs/token">$MOONEY governance tokens</Link>
                      ),
                    }}>
                    {
                      'Offer {token} to begin decentralized community governance of MoonDAO.'
                    }
                  </Translate>
                  &nbsp;
                  <strong>
                    <Translate>
                      This will be our only supply of tokens.
                    </Translate>
                  </strong>
                  <span> &#x2705; </span>
                </li>
                <li>
                  <Translate
                    values={{
                      ticketToSpace: (
                        <strong>
                          <Translate>Ticket to Space</Translate>
                        </strong>
                      ),
                    }}>
                    {'Purchase a ticket to space with Blue Origin!'}
                  </Translate>
                  <span> &#x2705; </span>
                </li>
                <li>
                  <Translate>
                    Release the Ticket To Space NFT collection. These NFTs will
                    give you a chance to fly to space in 2022.
                  </Translate>
                  <span> &#x2705; </span>
                </li>
                <li>
                  <Translate>
                    Send MoonDAO member(s) to space in 2022.
                  </Translate>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <a href="#values">
            <ScrolldownArrow />
          </a>
        </div>
      </div>
    );
  }
}
