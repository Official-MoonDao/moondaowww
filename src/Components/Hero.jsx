import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import Countdown from './Countdown';

import VectorIcon from '../icons/icon-Vector.png';
import ArrowIcon from '../icons/icon-double_arrow.png';

const Hero = () => {
  const [showMintButton, setShowMintButton] = useState(false);
  return (
    <div className="HomeHero">
      <div className="BigHero">
        <div className="Block__Contents" id="homeTitle">
          <h1 id="homeTitle">
            <Translate>We are sending MoonDAO members to space!</Translate>
          </h1>
          <div id="NFTContainer" className="NFTContainer">
            <div id="NFTBox" className="NFTBox">
              <video
                id="NFTVideo"
                autoPlay
                muted
                playsInline
                src="img/Ticket_9060.mp4"
                onMouseEnter={(e) => e.target.play()}
                onLoadedData={(e) => e.target.play()}
                width={'100%'}
                height="auto"
              />
            </div>
            <div id="NFTInfo" className="NFTInfo">
              <p id="NFTInfoHeading">
                Win a chance to go to space with our Ticket To Space NFT!
              </p>
              {showMintButton ? (
                <a
                  href="https://nft.moondao.com"
                  target="_blank"
                  className="Mint-btn">
                  <img src={VectorIcon} alt="" />
                  MINT NOW
                  <img className="arrow-icon" src={ArrowIcon} alt="" />
                </a>
              ) : (
                <React.Fragment>
                  <p id="countdownLabel">
                    <Translate>NFT Minting Begins In...</Translate>
                  </p>
                  <Countdown onEnd={() => setShowMintButton(true)} />
                </React.Fragment>
              )}

              <div className="HeroButtonGroup">
                <a
                  href="https://mirror.xyz/pmoncada.eth/HyA4_czQTchCx6x_BN_2zk87zED9w6_AtEGcWhF-vCg"
                  target="_blank">
                  <Translate>Learn More</Translate>
                </a>
                <a
                  href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x20d4DB1946859E2Adb0e5ACC2eac58047aD41395&chain=mainnet"
                  target="_blank"
                  className="buyMooney">
                  <Translate>Buy $MOONEY</Translate>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
