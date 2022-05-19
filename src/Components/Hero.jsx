import React from 'react';
import Translate from '@docusaurus/Translate';
import Countdown from '../Components/Countdown';
import NewCount from './Countdown';

const Hero = () => {
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
              <p id="countdownLabel">
                <Translate>NFT Minting Begins In...</Translate>
              </p>
              <Countdown />
              <div className="HeroButtonGroup">
                <a
                  href="https://mirror.xyz/pmoncada.eth/HyA4_czQTchCx6x_BN_2zk87zED9w6_AtEGcWhF-vCg"
                  target="_blank">
                  <Translate>Learn More</Translate>
                </a>
                <a
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
