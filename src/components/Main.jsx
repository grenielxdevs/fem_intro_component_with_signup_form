import { useState } from 'react';

function Main() {
    const [input, setInput] = useState({
        firstNameInput: '',
        lastNameInput: '',
        emailInput: '',
        passwordInput: ''
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();


        console.log(input.firstNameInput);
        console.log(input.lastNameInput);
        console.log(input.emailInput);
        console.log(input.passwordInput);

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
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" value={input.firstNameInput} onChange={(e) => setInput({ firstNameInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={input.lastNameInput} onChange={(e) => setInput({ lastNameInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address" value={input.emailInput} onChange={(e) => setInput({ emailInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="password" name="password" placeholder="Password" value={input.passwordInput} onChange={(e) => setInput({ passwordInput: e.target.value})} />
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