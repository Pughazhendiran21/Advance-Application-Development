
import '../assets/css/Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  
  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516616210665-8e05839c5c8f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="inner">
          <div className="image-holder">
            <img
              src="https://images.unsplash.com/photo-1505079403222-b5bbf1484f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1pbmRmdWxuZXNzfGVufDB8MXwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <form action="">
            <h3>Login Form</h3>
            <br />
            <br />
            <br />
            <br /> <br />
            <div className="form-wrappers">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
             required />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
             required  name='password'/>
            </div>
            <Link to="/home" name='password' >
              <button aria-required>Login</button>
            </Link>{' '}
            <br />
            <p>
              Dont have an Account &nbsp;<Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login  