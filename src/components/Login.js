import "../css/Login.css";

function Login () {
    return(
        <div className="login-container">
            <div className="login-form">
                <p>Welcome to <span>Riskly</span></p>
                <button className="login-btn"><i className="fab fa-google"></i>Login with Google</button>
                <button className="login-btn"><i className="fab fa-github"></i>Login with Github</button>
            </div>
        </div>
    );
}

export default Login;