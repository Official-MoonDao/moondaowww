import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import {ImTwitter} from 'react-icons/im';
import {DiGithubAlt} from 'react-icons/di';
import DiscordSvg from '@site/static/img/Discord_alt.svg';
import LaunchSvg from '@site/static/img/undraw_launch_day_4e04.svg';

import '../css/global.scss';
import '../css/home.scss';
import Hero from '../Components/Hero';
import BlockParent from '../Components/BlockParent';
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
  const {siteConfig = {}} = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <meta charSet="UTF-8" />
      <div className="Home">
        <Hero />
        <BlockParent />
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
                    vote on proposals, lending us your brain power, or donating
                    to our treasury. Together we can build the world's first
                    decentralized public space program.
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
                  <div className="multisigDonation">
                    Donate to our treasury:
                    0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9
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
