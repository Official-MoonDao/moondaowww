import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from '@docusaurus/BrowserOnly';

import { ImTwitter } from "react-icons/im";
import { DiGithubAlt } from "react-icons/di";
import DiscordSvg from "@site/static/img/Discord_alt.svg";
import LaunchSvg from "@site/static/img/undraw_launch_day_4e04.svg";

import "../css/global.scss";
import "../css/home.scss";

const BrowserOnlyAxios = () => {
  return (
    <BrowserOnly fallback={<div> Loading... </div>}>
      {() => {
        const axios = require('axios');
        // const Web3 = require('web3');
        // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

        // var JBContract = web3.eth.contract(abi);
        // var JBContractInstance = JBContract.at('0xd569D3CCE55b71a8a3f3C418c329A66e5f714431');

        // console.log(JBContractInstance);

        axios.get("https://api.etherscan.io/api?module=account&action=balance&address=0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9&tag=latest&apikey=TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS")
          .then(etherscanRawResponse => {
            console.log(etherscanRawResponse.data);
            var ethStr = etherscanRawResponse.data.result;

            ethStr = ethStr.substring(0, ethStr.length - 18) + "." + ethStr.substring(ethStr.length - 18, ethStr.length);
            console.log(ethStr);

            // const ethVal = parseFloat(ethStr);
            const ethVal = 62.43;

            axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
              .then(rawResponse => {
                console.log(rawResponse.data);
                const exchangeRate = rawResponse.data.USD;

                console.log(exchangeRate);

                const targetUSD = 450_000;
                const usdRaised = (ethVal * exchangeRate).toFixed(0);

                const percentRaised = (usdRaised / targetUSD) * 100;

                const ethReadable = (ethVal).toFixed(2);
                const usdReadable = usdRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                const targetUSDreadble = targetUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

                document.getElementById('progress-bar').style.width = `${percentRaised}%`;

                document.getElementById('moneyAmounts').textContent = '$' + usdReadable + ' / $' + targetUSDreadble + '  (' + ethReadable + ' ETH)';
              });
          });
      }}
    </BrowserOnly>
  )
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <BrowserOnlyAxios>
      </BrowserOnlyAxios>
      <div className='Home'>
        <div className='HomeHero'>
          <div className='BigHero'>
            <div className='Block__Contents' id='homeTitle'>
              <h1 className='daoColor' id='homeTitle'>
                Send a MoonDAO member to space
              </h1>
              <p className='BigP'>
                Buy $MOONEY to join MoonDAO and send a fren to space in 2022!
              </p>
              <h2 className='daoColor' id='fundsRaised'>
                Funds Raised:
                <span id='moneyAmounts'> </span>
              </h2>
              <div className='progress'>
                <span className='progress-bar' id='progress-bar'></span>
              </div>
              <div className='HeroButtonGroup'>
                <a
                  href='https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8'
                  target="_blank"
                  className='Button Big Primary Outlined'
                  id='heroButton'
                >
                  Learn more
                </a>
                <a
                  href='https://juicebox.money/#/p/moondao'
                  className='Button Big Primary Outlined'
                  id='heroButton'
                >
                  Buy token
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='Goal Block'>
          <div className='Block__Contents'>
            <div className='Row'>
              <div className='Column--100'>
                <h3>Our plan to send a MoonDAO member to space in 2022:</h3>
                <ol>
                  <li>Offer governance tokens to begin decentralized community governance of MoonDAO. <strong> This will be our only supply of tokens.</strong></li>
                  <li>Release the <strong>Ticket to Space</strong> NFT collection. These NFTs will give you a chance to fly to space in 2022.</li>
                  <li>Buy a ticket(s) to space on a SpaceX/Blue Origin/Virgin Galactic etc. rocket ship.</li>
                  <li>Send MoonDAO member(s) to space in 2022.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className='Block PrimaryBg'>
          <div className='Block__Contents'>
            <div className='Row'>
              <div className='Column--100'>
                <h5 className='daoColor'>Mission</h5>
                <h2>
                  MoonDAO is going to the moon.
                </h2>
                <p>
                  MoonDAO is an international collective of people united by
                  the mission of decentralizing access to space research and
                  exploration. We are currently living at the inflection point
                  of a privatized space race, and the implications of this
                  moment will define our future. Making life multi-planetary
                  is one of the most inspiring and important missions in our lifetime. The big question is: how? We believe that an international, decentralized, inclusive, and transparent organization would be much better aligned with the needs of the everyday person.
                </p>
                <blockquote>
                  <p>
                    "All civilizations become either spacefaring or extinct."
                  </p>
                  <p className='attribution'>&mdash; Carl Sagan</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className='Values Block'>
          <div className='Block__Contents'>
            <div className='Row'>
              <div className='Column--100'>
                <h5>Values</h5>
                <h3>Space should be in the hands of the
                people.</h3>
                <p>
                  We uphold values of inclusion, peace, transparency, freedom of
                  organization and speech. Space should be in the hands of the
                  people, not any one nation or private entity.
                </p>
                <p>
                  As such, MoonDAO will support funding for individuals to go
                  to space and fund future space research and exploration as
                  it fits into the mission of becoming a governing body for the
                  moon and other celestial bodies.
                </p>
                <p>
                  It is very important to note that the core team has not pre-mined
                  any tokens for ourselves. We have not given “special terms” to any
                  Venture Capitalists, Influencers, Angel Investors, Rich Friends or
                  Family, or any other person. We are all being treated equally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='Roadmap Block PrimaryBg' id='MoonPhase'>
          <div className='Block__Contents'>
            <h5>Moon Phases</h5>
            <h3>Our roadmap to the stars.</h3>
            <div className='Row AlignCenter'>
              <div className='Column--66'>
                <h4>Moon phase 1</h4>
                <p>
                  <strong>Deploy a token for decentralized governance of MoonDAO.</strong>
                </p>
                <p className='small'>
                  In order to be a DAO, we need a governance token for decision making.
                  This is our first step. There is no expectation of profit with this token,
                  this token’s purpose is to coordinate our governance.
                </p>
                <p className='small'>
                  Every investor, builder, or fren, big or small, has gotten the same terms.
                  No special treatment for anyone. This is unusual for an Ethereum project,
                  but we thought it would be more fair for everyone involved that we did not
                  airdrop or pre-mine any number of tokens for people ahead of time. We are
                  not VC funded, we are community organized and led, this is very important to us!
                </p>
              </div>
              <div className='Column--33'>
                <p className='center roadmap-moon-icon'>
                  🌒 <br />
                </p>
              </div>

            </div>
            <div className='Row AlignCenter' id='MoonPhase'>
              <div className='Column--66'>
                <h4>Moon phase 2</h4>
                <p>
                  <strong>Send a MoonDAO member to space.</strong>
                </p>
                <p className='small'>
                  Virgin Galactic advertises its tickets will be sold for “as low as” $450K
                  and it has been reported that Blue Origin’s tickets are have gone up for
                  auction for over $28M. The range is large. MoonDAO wants to help create a
                  world where anyone can fly to space regardless of their financial situation.
                  We hope that this can be a meaningful and inspirational first step in
                  decentralizing space exploration.
                </p>
                <p className='small'>
                  So far in history, space exploration has been gated to the rest of the world
                  — accessible to only the privileged. MoonDAO changes this for the first time
                  in history.
                </p>
              </div>
              <div className='Column--33'>
               <p className='center roadmap-moon-icon'>
                 🌓 <br />
               </p>
              </div>
            </div>
            <div className='Row AlignCenter' id='MoonPhase'>
              <div className='Column--66'>
                <h4>Moon phase 3</h4>
                <p>
                  <strong>Provide funding to space research and exploration.</strong>
                </p>
                <p className='small'>
                  We don’t want to just take a ride on someone else’s rockets,
                  we’d like to fund and coordinate our own plans. We think an
                  international collective could move much faster than any red-taped
                  organization, and we can contract out certain aspects of rocket
                  development to private companies -- just like NASA.
                </p>
                <p className='small'>
                  The exploration of space should unify the world, not pit us against
                  each other like the last space race. After all, aren't we all just
                  curious earthlings that want to explore the unknown? Now, Web 3.0
                  represents a technology that can unify earthlings and decentralize
                  space exploration.
                </p>
              </div>
              <div className='Column--33'>
              <p className='center roadmap-moon-icon'>
                🌔 <br />
              </p>
              </div>
            </div>
            <div className='Row AlignCenter' id='MoonPhase'>
              <div className='Column--66'>
                <h4>Moon phase 4</h4>
                <p>
                  <strong>Put a MoonDAO colony on the moon.</strong>
                </p>
                <p className='small'>
                  That's one small step for man, one giant leap for mankind.
                </p>
                <p className='small'>
                  The 1967 Space Treaty forms the basis for all law concerning
                  space. In this treaty it states that no national appropriation
                  of the Moon can take place. However, a DAO is not a nation — it
                  is an international collective of frens.
                </p>
                <p className='small'>
                  We have the opportunity to use these new governance and coordination
                  tools in order to form a more perfect union as we extend the rights
                  and liberties of every human on earth into the solar system.
                </p>
              </div>
              <div className='Column--33'>
              <p className='center roadmap-moon-icon'>
                🌕 <br />
              </p>
              </div>
            </div>
            <div className='Row AlignCenter' id='MoonPhase5'>
              <div className='Column--66'>
                <h4>Moon phase 5</h4>
                <p>
                  <strong>Have sweet moon parties (everyone's invited).</strong>
                </p>
                <p className='small'>
                  They're gonna be sweet. BYOB but we'll provide transportation.
                </p>
              </div>
              <div className='Column--33'>
              <p className='center roadmap-moon-icon'>
                🌝 <br />
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className='Block' id='community'>
          <div className='Block__Contents'>
            <div className='Row'>
              <div className='Column--50'>
                <h3>
                  Join our mission.
                </h3>
                <p>
                  Contribute to our efforts by buying our governance token to
                  fund our treasury, or lend us your brain power and help us build the world's first decentralized public
                  space program.
                </p>
                <div id='community_actions' className='Row AlignCenter'>
                  <div>
                    <a
                      href='https://juicebox.money/#/p/moondao'
                      className='Button Primary Outlined'
                    >
                      Buy token
                    </a>
                  </div>
                  <div className='Social'>
                    <a
                      href='https://discord.gg/5nAu7K9aES'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <DiscordSvg />
                    </a>
                    <a
                      href='https://github.com/Official-MoonDao'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <DiGithubAlt />
                    </a>
                    <a
                      href='https://twitter.com/OfficialMoonDAO'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ImTwitter />
                    </a>
                  </div>
                </div>



              </div>
              <div className='Column--50'>
                <p className='center'>
                  <img width='75%' src='img/undraw_launch_day_4e04.svg' alt='moondao logo'/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
