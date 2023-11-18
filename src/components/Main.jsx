function Main() {
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
                    <form>
                        <div>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                        </div>
                        <div>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                        <div>
                            <input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address" />
                        </div>
                        <div>
                            <input type="text" id="password" name="password" placeholder="Password" />
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