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
                  href="https://mint.moondao.com"
                  target="_blank"
                  className="Mint-btn">
                  Buy $MOONEY
                </a>
              ) : (
                <React.Fragment>
                  <p id="countdownLabel">
                    <Translate>NFT Minting Begins In...</Translate>
                  </p>
                  <Countdown onEnd={() => setShowMintButton(true)} />
                </React.Fragment>
              )}
              <div className="buyMooneyDesc">
                Buy $MOONEY to vote which KOL we will be sending to space on our{' '}
                <a
                  classname="snapshotLink"
                  href="https://snapshot.org/#/tomoondao.eth/proposal/0xdec77b14a0f7a6405d42a57661a0e9ee297b37d3d03e6d9387f0ad4d339b9840">
                  Snapshot
                </a>
              </div>

              <div className="HeroButtonGroup">
                <a
                  className="buttonClass"
                  href="https://mirror.xyz/pmoncada.eth/HyA4_czQTchCx6x_BN_2zk87zED9w6_AtEGcWhF-vCg"
                  target="_blank">
                  <Translate>Learn More</Translate>
                </a>
                <a
                  className="buttonClass"
                  href="https://app.verisoul.xyz/moondao"
                  target="_blank"
                  className="buyMooney">
                  <Translate>Join MoonList</Translate>
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
