import './index.css';
export default function Footer1() {
  return (
    <footer>
      <div className="customer-service">
        <img src={process.env.PUBLIC_URL + '/Images/FooterLogo/FooterLogo.png'} alt='LightArtsy logo' />
      </div>
      <div className="help-customer-support">
        <h3>HELP  CUSTOMER SUPPORT</h3>
        <ul>
          <li>
            Contact Us
          </li>
          <li>
            <p>Shipping Policy</p>
          </li>
          <li>
            <p>Return exchange</p>
          </li>
          <li>
            <p>Terms  Conditions</p>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Gift Cards</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
        </ul>
      </div>
      <div className="customer-service">
        <h3>CUSTOMER SERVICE HOURS</h3>
        <ul>
          <li>
            <p>Monday - Friday</p>
          </li>
          <li>
            <p>10am - 5pm IST</p>
          </li>
          <li>
            <p>+91 82087 83910</p>
          </li>
          <li>
            <p>hello@lightartsy.com</p>
          </li>
        </ul>
      </div>
      <div className='copy-right'>
        ©{
          new Date().getFullYear()
        }&nbsp;The Light Artsy
      </div>
    </footer>
  )
}

