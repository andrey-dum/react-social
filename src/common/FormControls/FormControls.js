import React from 'react'
import './index.scss';

// const FormControl = ({input, mate, ...props}) => {
//     return (
//         <div className={touched && error && 'error'}>
//             {props.children}
//             {touched &&
//                 ((error && <span>{error}</span>))}
//         </div>
//     )
// }


export const Textarea = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => {
    return (
        <div className={error && 'error'}>
            <textarea {...input} placeholder={placeholder} />
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}


export const Input = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) => {
    return (
        <div className={error && 'error'}>
            <input {...input} type={type} placeholder={placeholder} />
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}
