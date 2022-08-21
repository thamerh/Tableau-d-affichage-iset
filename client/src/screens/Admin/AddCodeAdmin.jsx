import React, { useState } from 'react'
import axios from 'axios';
import { useHistory,Link } from 'react-router-dom';

export  const AddAnotherAdmin = () => {
    const [cin, setCin] = useState('');
    const [code_previlege, setCodePrevilege] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/AddAdminAutorization', {
                cin: cin,
                code_previlege: code_previlege
            });
            alert("add successfully")
            history.push("/dashboardAdmin");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            }
        }
    }

    return (
        <section className=" is-fullheight is-fullwidth"  >
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6-desktop">
                    
                           <h1  className="text-center text-white FontFamily">Add Admin</h1>
                          
                            <form onSubmit={Auth} className="box">
                                <h1 className="has-text-centered google-font">Add Authorization For New Admin</h1>
                                <div className="field mt-5">
                                    <label className="label">CIN: </label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="CIN" value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Code Previlege</label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="Code Previlege" value={code_previlege} onChange={(e) => setCodePrevilege(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-info is-rounded is-fullwidth">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

