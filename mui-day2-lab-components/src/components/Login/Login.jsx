import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import axios from 'axios';
import { useFormik } from "formik";
import { TokenContext } from '../../Context/TokenContext/TokenContext';
export default function Login() {

  const [apiError, setApiError] = useState(null)
  let {setToken} =useContext(TokenContext)
  let navigate = useNavigate()

  const initialValues = {
    
    email: "",
    password: "",
    
  };


  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/i, "Invalid Password").required("Required"),
  })

  let loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: login
  });



  async function login(values) {
    try {
      setApiError(null)
      let {data} = await axios.post('http://localhost:8888/auth/login', values)
      console.log(data)

      if(data.message == "welcome") {
        
        localStorage.setItem("userToken", data.token)
        setToken(data.token)

        navigate("/")

      }
    } catch (error) {
      console.log(error)
      setApiError(error.response.data.message)
    }
  }



  return (
    <>
      <div className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="mb-4">Login</h2>

            {apiError ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {apiError}
                </div>: ''}
            
            <form onSubmit={loginForm.handleSubmit}>

              

              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
                <label htmlFor="floatingInput">Email address</label>
                {loginForm.errors.email && loginForm.touched.email ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {loginForm.errors.email}
                </div>: ''}

              </div>


              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
                <label htmlFor="floatingPassword">Password</label>

                {loginForm.errors.password && loginForm.touched.password ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {loginForm.errors.password}
                </div>: ''}

              </div>

              

              <button className="btn btn-outline-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

