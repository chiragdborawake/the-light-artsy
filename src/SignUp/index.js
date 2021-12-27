import './index.css';
import TextField from '@mui/material/TextField';
export default function SignUp() {
  return (
    <div >
      <div>
        <h2>Our Philosophy</h2>
        <h3>"We believe lights can change the vibe of a place and we are here to help you do that."</h3>
      </div>
      <div className='sign-up-div'>
        <h3>Get on the list </h3>
        <h4>Gain access to exclusive offers and be the first to know more about new arrivals</h4>
        <TextField id="full-name" label="Full Name" /><br />
        <div className='sign-up'>
          <TextField id="email-id" label="Enter your email address " />
          <button>SIGN UI</button>
        </div>
      </div>
    </div>)
}