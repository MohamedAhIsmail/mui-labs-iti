import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup' 

export default function Register() {

  const [apiError, setApiError] = useState(null)

  let navigate = useNavigate()

  const initialValues = {
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmedPassword: "",
  };

  // function validate(values) {

  //   const errors = {};

  //   if(values.userName == '') {
  //     errors['userName'] = 'Required'
  //   } else if (values.userName.length > 15){
  //     errors['userName'] = 'max character is 15'
  //   }

  //   if(values.email == '') {
  //     errors['email'] = 'Required'
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  //     errors['email'] = 'Invalid Email Format'
  //   }

  //   if(values.phone == '') {
  //     errors['phone'] = 'Required'
  //   } else if (values.phone.length > 11){
  //     errors['phone'] = 'max character is 11'
  //   }

  //   if(values.password == '') {
  //     errors['password'] = 'Required'
  //   } else if (!/^[A-Z][a-z0-9]{3,8}$/i.test(values.password)){
  //     errors['password'] = 'Invalid Password'
  //   }

  //   if(values.confirmedPassword == '') {
  //     errors['confirmedPassword'] = 'Required'
  //   } else if (values.password != values.confirmedPassword){
  //     errors['confirmedPassword'] = 'Password and Confirmed Password shoud be the same'
  //   }

  //   console.log(errors)

  //   return errors

  // }

  
  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3, "Min Characters are 3").max(15, "Max Charcters are 15").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    phone: Yup.string().min(6, "Min Numbers 6").max(11, "Max Numbers 11").required("Required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/i, "Invalid Password").required("Required"),
    confirmedPassword: Yup.string().oneOf([Yup.ref('password')], "Password and confirmed password should be the same").required("Required"),
  })

  let registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: register
  });



  async function register(values) {
    try {
      setApiError(null)
      let {data} = await axios.post('http://localhost:8888/auth/signup', values)
      console.log(data)

      if(data.message == "created") {
        navigate("/login")
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
            <h2 className="mb-4">Register</h2>

            {apiError ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {apiError}
                </div>: ''}
            
            <form onSubmit={registerForm.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  id="userName"
                  placeholder="name@example.com"
                  value={registerForm.values.userName}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="floatingInput">User Name</label>

                {registerForm.errors.userName && registerForm.touched.userName ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {registerForm.errors.userName}
                </div>: ''}

              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={registerForm.values.email}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="floatingInput">Email address</label>
                {registerForm.errors.email && registerForm.touched.email ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {registerForm.errors.email}
                </div>: ''}

              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="01004274105"
                  value={registerForm.values.phone}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="floatingInput">Phone Number</label>
                {registerForm.errors.phone && registerForm.touched.phone ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {registerForm.errors.phone}
                </div>: ''}

              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={registerForm.values.password}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="floatingPassword">Password</label>

                {registerForm.errors.password && registerForm.touched.password ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {registerForm.errors.password}
                </div>: ''}

              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="confirmedPassword"
                  className="form-control"
                  id="rePassword"
                  placeholder="Password"
                  value={registerForm.values.confirmedPassword}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
                
                {registerForm.errors.confirmedPassword && registerForm.touched.confirmedPassword ? <div className="alert alert-danger mt-2 p-2" role="alert">
                {registerForm.errors.confirmedPassword}
                </div>: ''}

              </div>

              <button className="btn btn-outline-primary">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
