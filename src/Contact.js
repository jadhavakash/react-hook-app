import React, { useState, useEffect } from 'react';
import { db } from './Firebase';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert("Your message has been submitted👍");
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                <h2>Contact Us 🤳🔥🚀</h2>
            </div>
            <div className="card-body" style={{ height: "500px;" }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control" 
                        />
                    </div>
                    <button
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                        className="btn btn-primary"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact
