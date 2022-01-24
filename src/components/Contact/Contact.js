import {useState} from 'react'
import './contact.scss'

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [subject, setSubject] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const URI = `mailto:yefcode@gmail.com?subject=Portfolio%20Contact:%20${encodeURIComponent(firstName)}%20${encodeURIComponent(lastName)}&body=${encodeURIComponent(subject)}`;
        window.open(URI, "_blank");
    }
    return (
        <section className="pink">
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill-contact"
                    ></path>
                </svg>
            </div>
			<div className="section-content" id="contact">
                <div className="blob-content">
                    <h2 className="content-title">
                        Contact
                    </h2>
            
                    <p>yefcode@gmail.com 💌</p>
            
                    <form className="contact-content" id="contact-form" onSubmit={onSubmit}>
                        <label className="contact-input-label">First Name:</label>
                        <input
                        className="contact-input" 
                        type="text" 
                        name="firstName" 
                        placeholder="Write your name 😃"
                        onChange={(e) => setFirstName(e.target.value)}
                        required/>
            
                        <label className="contact-input-label">Last Name:</label>
                        <input 
                        className="contact-input" 
                        type="text" 
                        name="lastName" 
                        placeholder="Write your last Name 😃"
                        onChange={(e) => setLastName(e.target.value)}
                        required/>
            
                        <label className="contact-input-label">Subject:</label>
                        <textarea 
                            className="contact-input-textarea" 
                            name="subject"
                            placeholder="What is it about? 📎" 
                            onChange={(e) => setSubject(e.target.value)}
                        >
                        </textarea>
            
                        <input className="contact-submit-button" type="submit" value="Send!"/>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact