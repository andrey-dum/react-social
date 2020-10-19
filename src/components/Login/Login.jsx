import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../utils/validators/validator';
import { connect } from 'react-redux';

import { login } from '../../redux/authReducer';
import { Redirect } from "react-router-dom"

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field placeholder={"login"} validate={[required]} name={"email"} component={Input} type="text"/></div>
            <div><Field placeholder={"password"} validate={[required]} name={"password"} component={Input} type="password"/></div>
            <div><Field component={Input} validate={[required]} name={"rememberMe"} type="checkbox" /> remember me</div>
            { props.error && <div className="error">{props.error}</div> }
            <button>Login</button>
        </form>
    )
}

const LoginReduxRorm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)


const Login = (props) => {
    const onLogin = (formData) => {
        props.login( formData.email, formData.password, formData.rememberMe )
 
    }

    if (props.isAuth) return <Redirect to="/profile" />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxRorm onSubmit={onLogin} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);