import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../utils/validators/validator';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field placeholder={"login"} validate={[required]} name={"login"} component={Input}/></div>
            <div><Field placeholder={"password"} validate={[required]} name={"password"} component={Input}/></div>
            <div><Field component={Input} validate={[required]} name={"rememberMe"} type="checkbox" /> remember me</div>
            
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