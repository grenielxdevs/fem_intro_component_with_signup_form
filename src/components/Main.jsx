import { useState } from 'react';

function Main() {
    const [input, setInput] = useState({
        firstNameInput: '',
        lastNameInput: '',
        emailInput: '',
        passwordInput: ''
    })

    function handleSubmitForm(e) {
        e.preventDefault();

        for(let inputEl in input) {
            if(!input[inputEl]) {
                console.log('wrong')
            }
        }

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
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" defaultValue={input.firstNameInput} onChange={(e) => setInput({ firstNameInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" defaultValue={input.lastNameInput || ''} onChange={(e) => setInput({ lastNameInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address" defaultValue={input.emailInput || ''} onChange={(e) => setInput({ emailInput: e.target.value})} />
                        </div>
                        <div>
                            <input type="text" id="password" name="password" placeholder="Password" defaultValue={input.passwordInput || ''} onChange={(e) => setInput({ passwordInput: e.target.value})} />
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