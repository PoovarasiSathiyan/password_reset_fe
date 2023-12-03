import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Login() {
    let navigate = useNavigate()
  return <>
  <Container>
  <form>
    <center><div><h1>Login</h1></div></center>
  <div className="mb-3">
    
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
<center>
    <div>
  <button type="submit" className="btn btn-primary" onClick={()=>navigate("/dashboard")}>Submit</button></div><br/>
<div className='pointer' onClick={()=> navigate("/forgotpassword")}>Forgot Password </div><br />
<div className='pointer' onClick={()=> navigate("/signup")}> New User? Sign Up </div>
  </center>
</form>
        </Container>
    </>
  
}

export default Login