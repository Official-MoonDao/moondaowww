import React from 'react';
import Translate from '@docusaurus/Translate';

const Hero = () => {
  return (
    <div className="HomeHero">
      <div className="BigHero">
        <div className="Block__Contents" id="homeTitle">
          <h1 id="homeTitle">
            <Translate>We are sending MoonDAO members to space!</Translate>
          </h1>
          <div className="NFTContainer">
            <div className="NFTBox">
              <video
                src="img/NFTTicketV3.mp4"
                onMouseOver={(e) => e.target.play()}
                width={'100%'}
                height="auto"
              />
            </div>
            <div className="NFTInfo">
              <p>Win a chance to go to space with a MoonDAO ticket!</p>
              <div className="NFTPrice">10,000 NFTs</div>
              <div className="NFTPrice">0.1 ETH</div>
              <div className="HeroButtonGroup">
                <a
                  href="https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8"
                  target="_blank">
                  <Translate>Learn More</Translate>
                </a>
                <a href="#">
                  <Translate>Mint NFT</Translate>
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
