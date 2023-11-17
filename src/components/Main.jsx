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
                <h2>Try it free 7 days then $20/mo. thereafter</h2>
                <div className="card">
                    <form>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name </label>
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                        <div>
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="text" id="emailAddress" name="emailAddress" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" />
                        </div>
                        <button type="submit">Claim your free trial</button>
                        <p>By clicking the button, you are agreeing to our Terms and Services</p>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Main;