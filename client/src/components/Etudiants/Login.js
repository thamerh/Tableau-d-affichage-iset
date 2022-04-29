import React, { useState } from 'react'
import axios from 'axios';
import '../../App.css'
import { useHistory,Link } from 'react-router-dom';
import {Footer} from "../LandingPage";

export const LoginEtu = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/LoginEtu', {
                email: email,
                password: password
            });
            history.push("/dashboardEtu");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            }
        }
    }

    return (
        <div style={ HeaderStyle }>
        <section className=" is-fullheight is-fullwidth" >
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <h1 className="has-text-centered google-font">Log In</h1>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email </label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-info is-rounded is-fullwidth">Login</button>
                                </div>
                                <div className="field mt-5 has-text-centered ">
                                <Link to="/registerEtu" className="has-text-grey">Don't have an account?</Link> <br/>
                                <Link to="/" className="has-text-grey">Back to Homepage</Link>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
        
    )
}

export const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}