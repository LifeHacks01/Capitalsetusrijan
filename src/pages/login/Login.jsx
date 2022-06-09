import "./login.scss"
export default function Login() {
    return (
    <div className="login">
        <div className="top">
        <div className="wrapper">
                <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158" alt="" />            
                </div>
        </div>
        <div className="container">
        
        <form>
           <h1>Sign In</h1>
           <input type="email" placeholder="Email or phone number"></input>
           <input type="password" placeholder="Password"></input>
           <button className="loginButton">Sign In</button>
           <span>New to Netflix?  <b> Sign up Now</b></span>
           <small>
                This page is protected by Google reCAPTHA to ensure you're not a bot.<b>Learn more</b>

           </small>

        
        </form>
        
        </div>
      
      
    </div>
  )
}
