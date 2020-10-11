import React, { useState } from 'react';
import Alert from './Alert'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [alert, setAlert] = useState({ show: false })
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log( name, email, subject, body );

        setAlert({ show: true, name })
        setTimeout(() => {
            setAlert({ show: false })
        }, 5000);

        setName(''); setEmail(''); setSubject(''); setBody('');
    }

    return (
        <form className="container my-5" onSubmit={handleSubmit}>
            { alert.show ? <Alert name={alert.name} /> : null}
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name" className="h5">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        autoFocus
                        required
                        value={name}
                        onChange={(e)=> setName(e.currentTarget.value)}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email" className="h5">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e)=> setEmail(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="subject" className="h5">Subject</label>
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e)=> setSubject(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="h5" htmlFor="textArea">Message</label>
                <textarea
                    className="form-control"
                    id="textArea"
                    placeholder="Message"
                    required
                    value={body}
                    onChange={(e)=> setBody(e.currentTarget.value)}
                />
            </div>
            <div className="text-center">
                <button type="submit"
                    className="btn btn-primary btn-lg"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}

export default Contact;
