import React from "react";
import "./Footer.scss";

import AtPlayStore from "../../assets/images/OnlineDeal_App_on_Playstore.png";
import AtIosStore from "../../assets/images/OnlineDeal_App_on_ios_store.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <p className="footer__title">Customer Support</p>
          <ul>
            <li>
              Call us at <span>9800000000</span>
            </li>
          </ul>
          <ul>
            <li>Online Deal Customer Service Hours:</li>
            <li>Sunday-Friday: 9 Am to 6 PM</li>
            <li>Saturday: 10 AM to 4 PM</li>
          </ul>
          <ul>
            <li>You can also mail us at</li>
            <li>
              <span>support@onlinedeal.com</span>
            </li>
          </ul>
        </div>
        <div className="footer__body">
          <p className="footer__title">Follow us on</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer__body">
          <p className="footer__title">Information</p>
          <ul>
            <li>FAQ</li>
            <li>Return & Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer__body">
          <p className="footer__title">About Us</p>
          <ul>
            <li>About OnlineDeal</li>
          </ul>
        </div>
        <div className="footer__body">
          <p className="footer__title">Download App</p>
          <ul>
            <li>
              <img src={AtPlayStore} alt="" />
            </li>
            <li>
              <img src={AtIosStore} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__base">
        <p>OnlineDeal Pvt.Ltd, Kathmandu, Nepal</p>
      </div>
    </div>
  );
}

export default Footer;
