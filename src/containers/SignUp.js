import React, { useState } from 'react';
import './css/signup.css';
import arrow from '.././images/Arrow.png';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase';

const auth= getAuth(app);

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const SignUpUser =()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((value) => alert("Successful"))
      }
  return (
    <div className='signupPage'>
         <div className="signup">
            <div className="fill-form">
                <div className="form">
                    <div className="logo">
                    <h2>Shoppers Hub</h2>
                    <img src={arrow} alt='arrow'/>
                    </div>
                    <div>
                        <form action="">
                            <div>
                                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div>
                                <input type="password" placeholder="New password" />
                            </div>
                            <div>
                                <input type="password" placeholder="Confirm password"  onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                            <div>
                                <input type="submit" value="Sign Up" onClick={SignUpUser}/>
                            </div>
                        </form>
                        <div className="text">
                            <p>Already on Shoppers Hub?</p>
                            <a href="/">Login to your account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp