import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Register =()=>{
    return <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"> NUST Workload System</span>
            <span className="title"> Register</span>
            <form>
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
              <input type="email" placeholder="Email"/> 
              <input type="tel" placeholder="Mobile Number"/>
              <input type="number" placeholder="Staff Number"/>
              <input type="password" placeholder="Password"/>
              <input type="text" placeholder="Faculty"/>
              <input type="text" placeholder="Department"/>
              <input type="text" placeholder="Rank"/>
              <input type="datalist" placeholder="Semester"/>
              <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <AddPhotoAlternateIcon />
            <span>Add an avatar</span>
          </label>
          <button >Sign up</button>
            </form>
        </div>
    </div>
}
export default Register;