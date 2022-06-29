import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import { ImTwitter } from 'react-icons/im';
import { DiGithubAlt } from 'react-icons/di';
import DiscordSvg from '@site/static/img/Discord_alt.svg';
import LaunchSvg from '@site/static/img/undraw_launch_day_4e04.svg';

import '../css/global.scss';
import '../css/home.scss';
import Hero from '../Components/Hero';
import runCountdown from '../Components/Countdown';
import ScrolldownArrow from '../Components/ScrolldownArrow';

// Juicebox TerminalV1 address.
const JUICEBOX_ADDRESS = '0xd569d3cce55b71a8a3f3c418c329a66e5f714431';

// MoonDAO Multsig Wallet address.
const MULTISIG_ADDRESS = '0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9';

const ETHERSCAN_API_BASE = 'https://api.etherscan.io/api';

const ETHERSCAN_API_KEY = 'TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS';

// Target USD amount for the initial MoonDAO funds raised.
const TARGET_USD = 8_888_888;

// Final ETH amount raised on juicebox
const RAISED_ETH = 2503.78;

// Get the ETH balance for the Juicbox contract.
async function getJuiceboxBalance(axios) {
  // balanceOf(199)
  const data =
    '0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7';
  const url =
    ETHERSCAN_API_BASE +
    '?module=proxy' +
    '&action=eth_call' +
    `&to=${JUICEBOX_ADDRESS}` +
    `&data=${data}` +
    '&tag=latest' +
    `&apikey=${ETHERSCAN_API_KEY}`;
  console.log('getJuiceboxBalance - Request: ', url);
  const response = await axios.get(url);
  console.log('getJuiceboxBalance - Response: ', response);

  if (response && response.data && response.data.result) {
    const wei = hexToInt(response.data.result);
    return weiToEth(wei);
  }
  return 0;
}

// Get the ETH balance from the Multisig wallet.
async function getMultisigBalance(axios) {
  const url =
    ETHERSCAN_API_BASE +
    '?module=account' +
    '&action=balance' +
    `&address=${MULTISIG_ADDRESS}` +
    '&tag=latest' +
    `&apikey=${ETHERSCAN_API_KEY}`;
  console.log('getMultisigBalance - Request: ', url);
  const response = await axios.get(url);
  console.log('getMultisigBalance - Response: ', response);

  if (response && response.data && response.data.result) {
    return weiToEth(response.data.result);
  }
  console.error('getMultisigBalance - Failed');
  return 0;
}

// Get the conversion rate for ETH to USD.
async function getEthToUsd(axios) {
  const url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
  console.log('getEthToUsd - Request: ', url);
  const response = await axios.get(url);
  console.log('getEthToUsd - Response: ', response);
  if (response && response.data && response.data.USD) {
    return response.data.USD;
  }
  return 0;
}

// Convert hex to int.
function hexToInt(hex) {
  return parseInt(hex, 16);
}

// Convert Wei to ETH.
function weiToEth(wei) {
  return wei / 1000000000000000000;
}

async function fetchAndUpdateProgress() {
  const axios = require('axios');
  const juiceBoxBalance = await getJuiceboxBalance(axios);
  const multisigBalance = await getMultisigBalance(axios);
  const usdToEth = await getEthToUsd(axios);

  const eth = juiceBoxBalance + multisigBalance;
  console.log('ETH: ' + eth);
  const usdRaised = (RAISED_ETH * usdToEth).toFixed(0);
  const percentRaised = (usdRaised / TARGET_USD) * 100;
  const ethReadable = eth.toFixed(2);
  const usdReadable = usdRaised
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const targetUSDreadble = TARGET_USD.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
  const ethGoal = (TARGET_USD / usdToEth).toFixed(2);
  //document.getElementById('endRaise').textContent = '2495.15 ETH ' + String.fromCodePoint(0x23E9) + ' $' + usdReadable;
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <meta charSet="UTF-8" />
      <div className="Home">
        <Hero />
        <div className="Block_PrimaryBg" id="mission">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--100">
                <h5 className="daoColor">
                  <Translate>Mission</Translate>
                </h5>
                <h2>
                  <Translate>MoonDAO is going to the moon.</Translate>
                </h2>
                <p>
                  <Translate>
                    MoonDAO is an international collective of people united by
                    the mission of decentralizing access to space research and
                    exploration. We are currently living at the inflection point
                    of a privatized space race, and the implications of this
                    moment will define our future. Making life multi-planetary
                    is one of the most inspiring and important missions in our
                    lifetime. The big question is: how? We believe that an
                    international, decentralized, inclusive, and transparent
                    organization would be much better aligned with the needs of
                    the everyday person.
                  </Translate>
                </p>
                <blockquote>
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
        <div className="Goal_Block" id="objectives">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--100">
                <h5 className="daoColor">
                  <Translate>2022 Objectives</Translate>
                </h5>
                <h3>
                  <Translate>
                    Our plan to send a MoonDAO member to space in 2022:
                  </Translate>
                </h3>
                <ol>
                  <li>
                    <Translate
                      values={{
                        token: (
                          <Link to="/docs/token">
                            $MOONEY governance tokens
                          </Link>
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
                      Release the Ticket To Space NFT collection. These NFTs
                      will give you a chance to fly to space in 2022.
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
        <div className="Values_Block" id="values">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--100">
                <h5 className="daoColor">
                  <Translate>Values</Translate>
                </h5>
                <h3>
                  <Translate>
                    Space should be in the hands of the people.
                  </Translate>
                </h3>
                <p>
                  <Translate>
                    We uphold values of inclusion, peace, transparency, freedom
                    of organization and speech. Space should be in the hands of
                    the people, not any one nation or private entity.
                  </Translate>
                </p>
                <p>
                  <Translate>
                    As such, MoonDAO will support funding for individuals to go
                    to space and fund future space research and exploration as
                    it fits into the mission of becoming a governing body for
                    the moon and other celestial bodies.
                  </Translate>
                </p>
                <p>
                  <Translate>
                    It is very important to note that the core team has not
                    pre-mined any tokens for ourselves. We have not given
                    “special terms” to any Venture Capitalists, Influencers,
                    Angel Investors, Rich Friends or Family, or any other
                    person. We are all being treated equally.
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
        <div className="Roadmap_Block" id="MoonPhase">
          <div className="Block__Contents">
            <h5 className="daoColor">
              <Translate>Moon Phases</Translate>
            </h5>
            <h3>
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
                    Every investor, builder, or fren, big or small, has gotten
                    the same terms. No special treatment for anyone. This is
                    unusual for an Ethereum project, but we thought it would be
                    more fair for everyone involved that we did not airdrop or
                    pre-mine any number of tokens for people ahead of time. We
                    are not VC funded, we are community organized and led, this
                    is very important to us!
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
                    tickets are have gone up for auction for over $28M. The
                    range is large. MoonDAO wants to help create a world where
                    anyone can fly to space regardless of their financial
                    situation. We hope that this can be a meaningful and
                    inspirational first step in decentralizing space
                    exploration.
                  </Translate>
                </p>
                <p className="small">
                  <Translate>
                    So far in history, space exploration has been gated to the
                    rest of the world — accessible to only the privileged.
                    MoonDAO changes this for the first time in history.
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
                    against each other like the last space race. After all,
                    aren't we all just curious earthlings that want to explore
                    the unknown? Now, Web 3.0 represents a technology that can
                    unify earthlings and decentralize space exploration.
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
                    space. In this treaty it states that no national
                    appropriation of the Moon can take place. However, a DAO is
                    not a nation — it is an international collective of frens.
                  </Translate>
                </p>
                <p className="small">
                  <Translate>
                    We have the opportunity to use these new governance and
                    coordination tools in order to form a more perfect union as
                    we extend the rights and liberties of every human on earth
                    into the solar system.
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
                    They're gonna be sweet. BYOB but we'll provide
                    transportation.
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

        <div className="Block" id="community">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h3>
                  <Translate>Join our mission.</Translate>
                </h3>
                <p>
                  <Translate>
                    Contribute to our efforts by buying our governance token to
                    fund our treasury, or lend us your brain power and help us
                    build the world's first decentralized public space program.
                  </Translate>
                </p>
                <div id="community_actions" className="Row AlignCenter">
                  <div>
                    <a
                      href="https://moondao.com/docs/contribute"
                      className="Button Primary Outlined">
                      <Translate>Contribute</Translate>
                    </a>
                    <a
                      href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x20d4DB1946859E2Adb0e5ACC2eac58047aD41395&chain=mainnet"
                      className="Button Primary Outlined">
                      <Translate>Buy $MOONEY</Translate>
                    </a>
                  </div>
                  <div className="Social">
                    <a
                      href="https://discord.gg/5nAu7K9aES"
                      target="_blank"
                      rel="noopener noreferrer">
                      <DiscordSvg />
                    </a>
                    <a
                      href="https://github.com/Official-MoonDao"
                      target="_blank"
                      rel="noopener noreferrer">
                      <DiGithubAlt />
                    </a>
                    <a
                      href="https://twitter.com/OfficialMoonDAO"
                      target="_blank"
                      rel="noopener noreferrer">
                      <ImTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="Column--50">
                <p className="center">
                  <img
                    width="75%"
                    src="img/undraw_launch_day_4e04.svg"
                    alt="illustration of astronaut in space with moon in distance"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
