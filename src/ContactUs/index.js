import './index.css'
import Footer from '../Footer'
export default function ContactUs() {
  return (
    <>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <img src={process.env.PUBLIC_URL + '/Images/ContactUs/contactUs.png'} alt='Light Artsy logo' />
        <p>
          <p>If you have questions for us, reach out to us at following:</p>
          <p><strong>Email:</strong> hello@lightartsy.com</p>
          <p><strong>Contact No:</strong>  +91 82087 83910</p>
          <p><strong>Business Hours:</strong></p>
          <p>Monday - Friday</p>
          <p>10AM - 6PM</p>
          <p><strong>Registered Office Address:</strong></p>
          <p>High Propel Technologies (OPC) Pvt Ltd.</p>
          <p>1-19-115, Shahu Nagar,</p>
          <p>Nanded, MH, India 431602</p>
          <p><strong>Contact Number:</strong>  +91 82087 83910</p>
          <p><strong>Email:</strong> hello@lightartsy.com</p>
          <p>You can also fill the form below with your concern, and we'll get back to you within 48 hours.</p>
        </p>
        <div className='feedback'>
          <div className='name-container'>
            <div>
              <label>NAME</label>
            </div>
            <div>
              <input type="text"></input>
            </div>
          </div>
          <div className='email-container'>
            <div>
              <label>EMAIL</label>
            </div>
            <div>
              <input type="text"></input>
            </div>
          </div>
          <div className='feedback-message'>
            <div>
              <labe>MASSAGE</labe>
            </div>
            <div>
              <textarea></textarea>
            </div>
            <div className='send-button'>
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}