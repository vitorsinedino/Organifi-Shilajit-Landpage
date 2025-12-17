import Logo from '../assets/logo.png';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import PayMethods from './PayMethods';

function Footer() {
  return (
    <div className="section footer">
      <div className="container">
        <div className="footer-top">
          <div className="grid grid-cols-2">
            <div className="grid-col">
              <div className="email-form">
                <p>
                  Take an <strong>extra 15%</strong> off your first order.
                  We'll also send you delicious recipes, product
                  updates, and more.
                </p>
                <div className="input-group">
                  <input title="" placeholder="ENTER YOUR EMAIL" type="text" />
                  <button>ENTER</button>
                </div>
              </div>
              <div className="subscribe">
                <p>
                  SUBSCRIBE VIA SMS
                </p>
                <button>
                  SUBSCRIBE
                </button>
              </div>

            </div>
            <div className="grid-col flex flex-col items-end justify-between">
              <div>
                <img src={Logo} alt="Logo" />
                <div className="socials">
                  <a href="">
                    <FaFacebookSquare size={25} color="#142B46" />
                  </a>
                  <a href="">
                    <FaInstagram size={25} color="#142B46" />
                  </a>
                  <a href="">
                    <FaYoutube size={25} color="#142B46" />
                  </a>
                  <a href="">
                    <FaTiktok size={25} color="#142B46" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          <div className="grid grid-cols-2 mt-12 gap-8">
            <div className="grid-col">
              <div className="grid grid-cols-3 gap-8">
                <div className="link-list">
                  <a href="">
                    Account
                  </a>
                  <a href="">
                    manage
                    subscriptions
                  </a>
                  <a href="">
                    store locator
                  </a>
                  <a href="">
                    send $25, earn $25
                  </a>
                  <a href="">
                    Influencers &
                    Social Media
                  </a>
                  <a href="">
                    guarantee
                  </a>
                </div>
                <div className="link-list">
                  <a href="">
                    our story
                  </a>
                  <a href="">
                    green juice 101
                  </a>
                  <a href="">
                    blog
                  </a>
                  <a href="">
                    wholesale
                  </a>
                  <a href="">
                    Everflow Partners
                  </a>
                  <a href="">
                    careers
                  </a>
                </div>
                <div className="link-list">
                  <a href="">
                    FAQs
                  </a>
                  <a href="">
                    gift card
                  </a>
                  <a href="">
                    terms of service
                  </a>
                  <a href="">
                    refund policy
                  </a>
                  <a href="">
                    rewards
                  </a>
                  <a href="">
                    Military & First
                    Responders
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-col">
              <div className="flex flex-col items-end">
                <div className="contacts">
                  <p>
                    Phone: <a href="tel:1-760-487-8587">1-760-487-8587</a>
                  </p>
                  <p>
                    Email: <a href="mailto:support@organifi.com">support@organifi.com</a>
                  </p>
                  <p>
                    Hours: <span>Mon - Fri 7AM - 4PM PST</span>
                  </p>
                  <p>
                    Live Chat: <span>Click the Chat icon on the bottom right</span>
                  </p>
                </div>
                <div className="text-box">
                  *These statements have not been approved by the Food and Drug
                  Administration. This product is not intended to diagnose, treat, cure, or
                  prevent any disease.
                  <ol>
                    <li>
                      1. <a href="https://www.ncbi.nlm.nih.gov/pubmed/27055824">https://www.ncbi.nlm.nih.gov/pubmed/27055824</a>
                    </li>
                    <li>
                      2. <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-015-0104-9">https://jissn.biomedcentral.com/articles/10.1186/s12970-015-0104-9</a>
                    </li>
                  </ol>
                </div>
                <PayMethods />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-menu">
            <a href="https://www.organifishop.com/pages/terms-conditions">terms &amp; conditions</a>
            <a href="https://www.organifishop.com/pages/privacy-policy">privacy policy</a>
            <a href="https://www.organifishop.com/pages/health-disclaimer">health disclaimer</a>
            <a href="/pages/accessibility">Accessibility</a>
            <a href="/pages/privacy-policy#privacy-last-point">Your California Privacy Rights</a>
          </div>
          <div className="footer-copyright">
            © 2025 organifi. In accordance with the General Data Protection Regulation (GDPR), this
            website may appear differently to our European customers.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;