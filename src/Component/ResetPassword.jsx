import React from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
function ResetPassword() {
    let navigate = useNavigate()
  return <>
  <Container>
  <form>
    <center><div><h1>Reset Password</h1></div></center>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">New Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
<center>
    <div>
  <button type="submit" className="btn btn-primary" onClick={()=> navigate("/")}>Submit</button></div><br/>

  </center>
</form>
        </Container>
  </>
}

export default ResetPassword