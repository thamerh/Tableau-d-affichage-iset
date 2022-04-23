import React, { useState } from 'react'
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';
const RegisterEtu = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [num_insc, setNum_insc] = useState('');
    const [cin, setCin] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const RegisterEtu = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/RegisterEtu', {
                name: name,
                email: email,
                num_insc: num_insc,
                cin: cin,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg)
               // setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={RegisterEtu} className="box">
                            <h1 className="has-text-centered  has-text-success has-text-weight-bold">Register</h1>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Numero d'insecrit:</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Numero d'insecrit"
                                            value={num_insc} onChange={(e) => setNum_insc(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">CIN:</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="CIN"
                                            value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                                
                                <div className="field mt-5 has-text-centered ">
                                    <Link to="/" className=" has-text-success">you have an account?</Link>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterEtu
