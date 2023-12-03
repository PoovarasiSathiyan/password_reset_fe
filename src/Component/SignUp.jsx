import React from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    let navigate = useNavigate()
  return <>
<Container maxWidth='sm'>

  <form>
    <div><center><h1>SignUP</h1></center></div>
  <div className="mb-4">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-4">
    
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-4">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>

 <center><button onClick={()=>navigate("/")} type="submit" className="btn btn-primary">Submit</button>
  
  </center>
</form>

</Container>    
    </>
  
}

export default SignUp