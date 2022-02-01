import React from 'react';
import './Main.css';
import main_shape_light from './main_shape_light.jpg'


function Main() {
  return <main id="main-page">
  <section className="main-section">
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-12 col-lg-6">
          <div className="main-section__info">
            <h1 className="section-title">Auction: Commemorative digital crypto coins to buy, collect and sell</h1>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="main-section__image-wrap"><img src={main_shape_light} alt="main shape"/></div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-section" id="about">
    <div className="container">
      <div className="about-section__title-row">
        <h2 className="section-title">What makes Auction so special?</h2>
        <div className="about-section__title-image">
          <img className="d-block d-md-none" src="/assets/images/about_shape_mobile.svg" alt="about"/>
          <img className="d-none d-md-block" src="/assets/images/about_shape.svg" alt="about"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="about-card">
            <h4 className="about-card__title">
              <span>Auction are NFTs</span>
              that are cryptographically protected based on Free TON technology
                
            </h4>
            <p className="about-card__description">
              Unlike physical coins, Auction are NFTs and are every bit as authentic and rare as regular coins, only they can never be duplicated or counterfeited thanks to cryptography
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="about-card">
            <h4 className="about-card__title">
              <span>CryptoNumiz </span>
               brings coin collecting into a whole new era
            </h4>
            <p className="about-card__description">
              Auction commemorate all sorts of interesting events and historical milestones. This means your Auction have a story. The events they commemorate are digital renditions created by recognized artists from all walks of life, from art to design to music to film, so besides collectibility, they are truly original works of art. CryptoNumiz takes coin collecting (numismatics) to a whole new era!

            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="about-card">
            <h4 className="about-card__title">
              <span>Front side is visible to everyone, the reverse side</span>
               is visible only to those who own it.
            </h4>
            <p className="about-card__description">
              Another fun feature is that only one side of a Numi is visible to everyone. The other side is only visible to the owner. What’s cool is the side others can’t see. Might be an image, animation, music, even a short film. Only way to know is to own one. By the way, the invisibility of one side of a Numi means an additional level of security to protect against forgery

            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="about-card">
            <h4 className="about-card__title">
              <span>Let your Numigination</span>
                be your guide
            </h4>
            <p className="about-card__description">
              No rules for design, so each one is unique. Auction don’t have to “look like a coin.” Shapes, sizes, designs, creativity - they’re all at the will of the Creator, which only adds to originality and rareness
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="buy-section" id="buy">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="section-title">CNZ token (soon)</h2>
          <div className="buy-section__info-row">
            <div className="buy-section__info-title">
              <h3 className="section-title">100$</h3>
              <h4 className="section-sub-title">+99%</h4>
            </div>
            <div className="month-select-wrap">
              <span>Show:</span>
              <div className="select-wrap month-select">
                <select className="form-select">
                  <option selected>Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                </select>
              </div>
            </div>
          </div>
          <div className="buy-section__graph-image">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          <canvas id="test-chart" 
            style={{display: 'block', height: '253px', width: '506px'}} 
            width="1518" height="759" className="chartjs-render-monitor"></canvas>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="buy-card">
            <h4 className="buy-card__title">Buy</h4>
            <div className="select-wrap coin-select no-arrow">
              <div className="dropdown bootstrap-select coin-select">
                <select className="coin-select selectpicker" title="Select currency">
                  <option className="bs-title-option" value=""></option>
                  <option 
                    value="1" 
                    data-content="<img src=&quot;/assets/images/diamond.svg&quot; alt=&quot;coin&quot;/><span>Free TON </span>" 
                    selected></option>
                </select>
                <button 
                  type="button" 
                  className="btn dropdown-toggle btn-light" 
                  data-toggle="dropdown" 
                  aria-controls=''
                  aria-owns="bs-select-1" 
                  aria-haspopup="listbox" 
                  aria-expanded="false" 
                  role="combobox" 
                  title="Free TON">
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">
                          <img src="/assets/images/diamond.svg" alt="coin"/>
                          <span>Free TON </span>
                        </div>
                      </div> 
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div className="inner show" role="listbox" id="bs-select-1">
                      <ul className="dropdown-menu inner show" role="presentation"></ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="input-wrap coin-input">
              <input className="form-control" type="email" name="coins" placeholder="944 coins"/>
              <p className="coin-count">
                0
                <img src="/assets/images/diamond.svg" alt="diamond"/>
              </p>
            </div>
            <button className="custom-button full-width" data-bs-toggle="modal" data-bs-target="#buyModal" disabled><span>Buy</span></button>
            <p className="buy-card__text">In the next step, you will need to scan the QR code through the TON Surf browser on your phone</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="advantage-section" id="advantage">
    <div className="container">
      <h2 className="section-title">Auction are awesome!</h2>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="advantage-card">
            <div className="advantage-card__icon"><img src="/assets/images/advantage_icon.svg" alt="advantage"/></div>
            <h4 className="advantage-card__title">Safe</h4>
            <p className="advantage-card__description">
              All transactions are performed through TON Surf (using Debot) so no app needed.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="advantage-card">
            <div className="advantage-card__icon"><img src="/assets/images/advantage_coins.svg" alt="advantage"/></div>
            <h4 className="advantage-card__title">Unique coins</h4>
            <p className="advantage-card__description">
              Auction are whatever the Creator (<a href="https://cryptonumiz.org/artists/">https://cryptonumiz.org/artists/</a>) envisions.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="advantage-card">
            <div className="advantage-card__icon"><img src="/assets/images/advantage_nft.svg" alt="advantage"/></div>
            <h4 className="advantage-card__title">Numismatics as NFTs</h4>
            <p className="advantage-card__description">
              Forget complicated mechanisms thanks to NFT based on Free TON.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="designers-section" id="designers">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="designers-section__info">
            <h2 className="section-title">I have skills. How do I make a Numi?</h2>
            <p className="designers-section__description">
              Think you're a creator? Awesome! Get started as a Ccreator and get paid once your Numi sells and then again and again each time it is resold through the CryptoNumiz smart contract… forever!
            </p>
            <button className="custom-button" onClick={() => window.location.href='/artists'} type="button"><span>Start</span></button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="designers-section__image"><img src="/assets/images/designer.svg" alt="designer"/></div>
        </div>
      </div>
    </div>
  </section>
</main>
}

export default Main;