import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className='footer has-background-black has-text-white-ter'
        style={{
          backgroundImage: "url(../img/background_footer.jpg)",
          backgroundSize: "cover",
        }}
      >
        {/*<div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>*/}
        <div className='content has-text-centered  has-text-white-ter'>
          <div className='container has-text-white-ter'>
            <div className='columns is-centered'>
              {/* <div className='column is-3'></div> */}
              <div className='column is-3'>
                <section className='menu'>
                  <ul className='menu-list special'>
                    <li style={{ marginTop: "-30px" }}>
                      <Link to='/' className='navbar-item has-text-centered'>
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='navbar-item has-text-centered'
                        to='/about'
                      >
                        A propos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='navbar-item has-text-centered'
                        to='/products'
                      >
                        Prestations
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-3' style={{ marginTop: "-30px" }}>
                <section>
                  <ul className='menu-list special'>
                    <li>
                      <Link
                        className='navbar-item has-text-centered'
                        to='/blog'
                      >
                        Actualités
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='navbar-item has-text-centered'
                        to='/contact'
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-3 social'>
                <a title='facebook' href='https://facebook.com'>
                  <img
                    src={facebook}
                    alt='Facebook'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title='twitter' href='https://twitter.com'>
                  <img
                    className='fas fa-lg'
                    src={twitter}
                    alt='Twitter'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title='instagram' href='https://instagram.com'>
                  <img
                    src={instagram}
                    alt='Instagram'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
