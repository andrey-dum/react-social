import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <form onSubmit={props.handleSubmit} >
            <div> <Field placeholder={"login"} name={"login"} component={"input"} type="text"/></div>
            <div><Field placeholder={"password"} name={"password"} component={"input"} type="text"/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxRorm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)


const Login = () => {
    const onLogin = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxRorm onSubmit={onLogin} />
        </div>
    )
}




export default Login;