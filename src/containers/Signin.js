import React,{useState} from 'react';
import './css/signin.css';
import arrow from '.././images/Arrow.png';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import app from '../firebase';
import App from '../App';

const auth= getAuth(app);

const Signin = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [userr, setUser] = useState(null);

    const checkAuthState = () =>{
        onAuthStateChanged(auth, (user)=>{
            if(userr){
              setUser(user)
              return(
                  <App />
              )
            }
            else{
              setUser(null);
              return(<Signin />)
            }
          })
    }
    const signinUser =() =>{
        console.log("hey")
        signInWithEmailAndPassword(auth,email,password)
        .then((value)=>{
            alert("logged Successfully");
            checkAuthState();
        })
        .catch((e)=>console.log(e))
    }

  return (
    <div className='signinForm'>
         <div className="login">
            <div className="fill-form">
                <div className="form">
                    <div className="logo">
                    <h2>Shoppers Hub</h2>
                    <img src={arrow} alt='arrow'/>
                    </div>
                    <div>
                        <form action="">
                            <div>
                                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div>
                                <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <div>
                                <input type="submit" value="Log in" onClick={signinUser}/>
                            </div>
                        </form>
                        <div className="text">
                            <h4>Forgot your password?</h4>
                            <p>not registered on Shoppers Hub yet?</p>
                            <a href="/signup">create your account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin