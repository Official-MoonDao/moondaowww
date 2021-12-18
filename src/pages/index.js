import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { ImTwitter } from "react-icons/im";
import { DiGithubAlt } from "react-icons/di";
import DiscordSvg from "@site/static/img/Discord_alt.svg";
import LaunchSvg from "@site/static/img/undraw_launch_day_4e04.svg";

import "../css/global.scss";
import "../css/home.scss";

// async function getMooney() {
//   axios.get("https://api.etherscan.io/api?module=account&action=balance&address=0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9&tag=latest&apikey=TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS")
//   .then(etherscanRawResponse => {
//     console.log(etherscanRawResponse.data);
//     const content = etherscanRawResponse.data;
//     return content;
//   });
//   // const etherscanRawResponse = await fetch("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xd569D3CCE55b71a8a3f3C418c329A66e5f714431&address=0xd569D3CCE55b71a8a3f3C418c329A66e5f714431&tag=latest&apikey=TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS");
//   // const content = await etherscanRawResponse.json();
//   // return content;
// } 

// async function getUSDExchangeRate() {
//   axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
//   .then(rawResponse => {
//     console.log(rawResponse.data);
//     const content = rawResponse.data;
//     return content;
//   });
//   // const rawResponse = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
//   // const content = await rawResponse.json();
//   // return content;
// }

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // getMooney().then((value) => {
  //   console.log(value);
  //   var ethStr = String(value['result']);
  //   ethStr = ethStr.substring(0, ethStr.length - 18) + "." + ethStr.substring(ethStr.length - 18, ethStr.length);
  //   console.log(ethStr);

  //   const ethVal = parseFloat(ethStr);

  //   getUSDExchangeRate().then((value) => {
  //     const exchangeRate = value['USD'];
  //     console.log(exchangeRate);

  //     const targetUSD = 450_000;
  //     const usdRaised = (ethVal*exchangeRate).toFixed(0);

  //     const percentRaised = (usdRaised / targetUSD) * 100;

  //     const ethReadable = (ethVal).toFixed(2);
  //     const usdReadable = usdRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //     const targetUSDreadble = targetUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  //     document.getElementById('progress-bar').style.width = `${percentRaised}%`;

  //     document.getElementById('moneyAmounts').textContent = '$' + usdReadable + ' / $' + targetUSDreadble + '  (' + ethReadable + ' ETH)';
  //   });
  // });

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className='Home'>
        <div className='HomeHero'>
          <div className='BigHero'>
            <div className='Block__Contents' id='homeTitle'>
              <h1 className='daoColor' id='homeTitle'>
                Buy $MOONEY to send a <br />
                MoonDAO member to space in 2022.
              </h1>
              <p className='BigP'>
                Our governance token launches on <strong>Friday, December 17, 2021</strong>. Join MoonDAO and get involved for a chance to be sent into low earth orbit in 2022!
              </p>
              <h2 className='daoColor' id='fundsRaised'>
                Funds Raised:
                <span id='moneyAmounts'>$111,032/$350,000 (28.17 ETH)</span>
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
                <h5>2022 goal</h5>
                <h3>Our goal in 2022 is to send a MoonDAO member to space.</h3>
                <p>
                  So far in history, space exploration has been gated to the rest of the world — accessible to only the privileged. MoonDAO fixes this.
                </p>
                <p>
                  How will we do this?
                </p>
                <p><ol>
                  <li>Offer governance tokens to begin decentralized community governance and fund our first mission of sending MoonDAO members to space. <strong>This will be our one and only token supply</strong> creation, and we will not create more tokens, yes our token will have fixed supply.</li>
                  <li>Release <em>Ticket to Space</em> NFT collection. These NFTs will put you into a lottery to be a candidate to fly to space in 2022.</li>
                  <li>The money raised from the sale of these NFTs will be used to buy tickets to space on a SpaceX/Blue Origin/Virgin Galactic etc. rocket ship.</li>
                  <li>Send MoonDAO member(s) to space in 2022.</li>
                </ol>
                </p>
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
                  Many coins talk about going to the moon, but what if we
                  <strong> literally </strong>sent MoonDAO members to the moon — and collectively governed our colony as a Decentralized Autonomous Organization?
                </p>
                <p>
                  Rather than have the moon and other celestial bodies lie in
                  the hands of a few private organizations (SpaceX, Blue
                  Origin), we believe that an international, decentralized,
                  inclusive, and transparent organization would be more
                  equitable and fair. We do not believe in "emperors of the
                  moon" or "CEOs of space," but instead we believe in
                  extending the unalienable rights of citizens of planet
                  earth to the solar system and beyond.
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
                  to space, acquisition and governance of symbolic assets (like
                  lunar asteroids, or the lunar manual used in the first space
                  mission), and fund future space research and exploration as
                  it fits into the mission of becoming a governing body for the
                  moon and other celestial bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='Roadmap Block PrimaryBg'>
          <div className='Block__Contents'>
            <h5>Moon Phases</h5>
            <h3>Our roadmap to the stars.</h3>
            <div className='Row AlignCenter'>
              <div className='Column--66'>
                <h4>Moon phase 1</h4>
                <p>
                  <strong>Raise funds to send people to space and progress space research
                  and exploration</strong>
                </p>
                <p className='small'>
                  We'll raise funds with a juicebox.money crowdfund that will
                  go into a multi-sig controlled by a trusted group of people,
                  in exchange you'll receive governance tokens for MoonDAO. The
                  money contributed is a donation, and there is no expectation
                  of profit, and you are not receiving fractionalized ownership
                  of our assets, but governance rights for the assets we hold
                  and governance of the DAO treasury.
                </p>
              </div>
              <div className='Column--33'>
                <p className='center roadmap-moon-icon'>
                  🌒 <br />
                </p>
              </div>

            </div>
            <div className='Row AlignCenter'>
              <div className='Column--66'>
                <h4>Moon phase 2</h4>
                <p>
                  <strong>Send a MoonDAO member to space.</strong>
                </p>
                <p className='small'>
                  We're in the midst of a privatized space race. Whether it's
                  SpaceX, Blue Origin or Virgin Galactic- we want front row
                  seats (literally!). Virgin Galactic has sold tickets for
                  $250K and it's been reported that Blue Origin will sell
                  tickets in the range of $300K-$400K. MoonDAO wants to help
                  create a world where anyone can fly to space &mdash; regardless of background. We hope that this can be a meaningful and inspirational first step in decentralizing space exploration.
                </p>
              </div>
              <div className='Column--33'>
               <p className='center roadmap-moon-icon'>
                 🌓 <br />
               </p>
              </div>
            </div>
            <div className='Row AlignCenter'>
              <div className='Column--66'>
                <h4>Moon phase 3</h4>
                <p>
                  <strong>Provide funding to space research and exploration.</strong>
                </p>
                <p className='small'>
                  The exploration of space should unify the world &mdash; not pit us against each other like the last space race. After all,
                  aren't we all just curious earthlings that want to explore
                  the unknown? Now, Web 3.0 represents a technology that can
                  unify earthlings and decentralize space exploration. Moon
                  Phase 4 begins MoonDAOs ambitious goal of being the DAO
                  that does just that.
                </p>
              </div>
              <div className='Column--33'>
              <p className='center roadmap-moon-icon'>
                🌔 <br />
              </p>
              </div>
            </div>
            <div className='Row AlignCenter'>
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
                  space. In this treaty it states that no
                  <strong> national </strong>
                  appropriation of the moon can take place. However, a DAO is
                  not a nation — it is an international collective.
                </p>
              </div>
              <div className='Column--33'>
              <p className='center roadmap-moon-icon'>
                🌕 <br />
              </p>
              </div>
            </div>
            <div className='Row AlignCenter'>
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
                      href='/docs/token'
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
                  <img width='75%' src='img/undraw_launch_day_4e04.svg' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
