import React from 'react';
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { ReactComponent as MarketplaceLogo } from "../../images/logo/marketplace-logo.svg";

function Footer() {
  const footerList = data.footer;
  const {sitemap, otherStores, socials} = footerList;
  return (
    <>
      <section className="detail-site-map">
        <ul>
          <h3 className="footer-menu-title">Sitemap</h3>
          {
            
            sitemap?.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link to={`${item.toLocaleLowerCase()}`}>{item}</Link>
                </li>
              );
            })
          }
        </ul>

        <ul>
          <h3 className="footer-menu-title">Other Stores</h3>
          {
            
            otherStores?.map((store, idx) => {
              const {link, name} = store;
              return (
                <li key={idx}>
                  <a
                    href={`https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} link`}
                  >
                    {name}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
      <section className="logo-container">
          <MarketplaceLogo className="logo"/>
      </section>
      <hr />
      <section className="social-icons-and-copyright">
        <div className="social-icons-wrapper">
          {
            socials?.map((social, idx) => {
              const {link, icon, name} = social;
              return (
                <a
                  href={`https://${link}`}
                  aria-label={`${name} link`}
                  title={`${name} of CDU Marketplace`}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })
          }
        </div>
        <p className="copyright-text">
          Copyright © 2021 CDU Marketplace Store. All Rights Reserved.
        </p>
      </section>
    </>
  );
}

export default Footer;
