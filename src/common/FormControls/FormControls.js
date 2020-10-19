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
    type,
    meta: { touched, error, warning }
  }) => {
    return (
        <div className={touched && error && 'error'}>
            <textarea {...input}  />
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
    meta: { touched, error, warning }
  }) => {
    return (
        <div className={touched && error && 'error'}>
            <input {...input} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}
