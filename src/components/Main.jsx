import { useState } from 'react';

function Main() {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <main id="main-content">
            <div className="text-content">
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                    but understanding how developers think is invaluable.
                </p>
            </div>
            <div className="form-content">
                <div className="box">
                    <p><strong>Try it free 7 days </strong> then $20/mo. thereafter</p>
                </div>
                <div id="card" className="card">
                    <form onSubmit={handleSubmitForm}>
                        <div>
                            <input type="text" id="firstName" name="firstName" value={firstNameInput} placeholder="First Name" onChange={(e) => setFirstNameInput(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="lastName" name="lastName" value={lastNameInput} placeholder="Last Name" onChange={(e) => setLastNameInput(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="emailAddress" name="emailAddress" value={emailInput} placeholder="Email Address" onChange={(e) => setEmailInput(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="password" name="password" value={passwordInput} placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} />
                        </div>
                        <button type="submit">Claim your free trial</button>
                        <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Main;