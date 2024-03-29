import React, { useState } from 'react'
import axios from 'axios';
import { useHistory} from 'react-router-dom';

export  const AddEtuCard = () => {
    const [cin, setCin] = useState('');
    const [num_insc, setNum_insc] = useState('');
    const [lib_class, setLib_class] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/AddCarteEtu', {
                cin:cin, 
                num_insc: num_insc,
                lib_class: lib_class
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
       
        <section className=" is-fullheight is-fullwidth" >
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">

                <h1  className="text-center text-white FontFamily">Add Student</h1>
                            <form onSubmit={Auth} className="box">
                                <h1 className="has-text-centered google-font">Add Student Card Data</h1>
                                <div className="field mt-5">
                                    <label className="label">CIN: </label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="CIN" value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Numero d'inscrit:</label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="Numero d'inscrit" value={num_insc} onChange={(e) => setNum_insc(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Class:</label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="Class" value={lib_class} onChange={(e) => setLib_class(e.target.value)} />
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

