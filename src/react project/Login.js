import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Login(props) {
  const Navigate = useNavigate();
  const object = {
    Name: 'test',
    Nassword: 'test'
  }

  const [isSubmitting, setIsSubmitting] = useState(false);




  const validateForm = values => {

    const errors = {};
    if (!values.name) {
      errors.name = 'User Name is required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!values.password) {
      errors.password = 'Password must be 6 characters long.';
    } else if (values.password.length > 6) {
      errors.password = 'Must be 6 characters or less';
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setSubmitting(false);
      return;
    }
    console.log("handle submit values :",values)
    console.log('object:',object.Name)
    if (values.name === object.Name && values.password === object.Nassword) {
      props.handleSubmit();

      Navigate('/Accounts');
    }
    setSubmitting(false);


  };
  console.log(Formik)


  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {(formik, isSubmitting) => (
        <Form>
          <div className='container h-50 mt-4'>
            <div className="row d-flex justify-content-center align-items-center h-75">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-info text-dark">
                  <div className="card-body p-5">

                    <div className="mb-md-3 mt-md-2 pb-2">
                      <h2 className="fw-bold mb-2 text-uppercase text-center">Sign in</h2>

                      <div className="form-group">
                        <label htmlFor="name">UserName</label>
                        <Field name="name" className={(formik.touched.name && formik.errors.name) ? 'form-control is-invalid' : 'form-control'} type="text" />

                        {formik.touched.name && formik.errors.name ? (
                          <div className="invalid-feedback">{formik.errors.name}</div>
                        ) : null}

                      </div>

                      <div className="form-group">
                        <label htmlFor="password">password</label>
                        <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />

                        {formik.touched.password && formik.errors.password ? (
                          <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <button type="submit" className="btn btn-outline-dark btn-lg px-5 mt-2" disabled={formik.isSubmitting || isSubmitting}>
                          {isSubmitting ? "Please wait..." : "Submit"}
                        </button>                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )
      }
    </Formik >
  );
};
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => dispatch({ type: "ACCEPT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);