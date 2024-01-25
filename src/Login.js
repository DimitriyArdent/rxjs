import React from 'react'
import { useFormik } from 'formik';
import { validationSchema } from './validation/validation';

function Login() {
 

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      phone: ''
    },
    validationSchema: validationSchema,
    
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
            <label>name:</label>
            <input
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
            ></input>
             { formik.errors.name ? (
              <div>{formik.errors.name}</div>
              ) : null}


            <label>password:</label>
            <input
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
            ></input>
            {  formik.errors.password ? (
                 <div>{formik.errors.password}</div>
                  ) : null}

            <label>phone number:</label>
            <input
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
            ></input>
            {  formik.errors.phone ? (
                 <div>{formik.errors.phone}</div>
                  ) : null}


                <button type='submit'>submit</button>
      </form>
           
    </div>
  )
}

export default Login
