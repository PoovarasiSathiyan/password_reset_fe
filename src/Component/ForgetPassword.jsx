import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    let navigate = useNavigate()
  return <>
 
  <Container>
  <form>
    <center><div><h1>Forgot Password</h1></div></center>
  <div className="mb-3">
    
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div>
  <center><button type="submit" className="btn btn-primary" onClick={()=> navigate("/resetpassword")}>Forgot Password</button></center>
  </div>
  
</form>
    </Container>
  </>
}

export default ForgetPassword