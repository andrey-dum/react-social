import React from 'react';
import { RiEditLine } from "react-icons/ri";
// const ProfileStatus = (props) => {
//     return (
//         <div>
//             <div>
//                 <div>{props.status}</div>
//                 <div><input value={props.status} type="text" /></div>
//             </div>
//         </div>
//     )
// }


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
       
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
       if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
       }
    }

    render () {
        return (
            <div>
                <div>
                    { !this.state.editMode && <div >{this.props.status || '...'} <span onClick={this.activateEditMode}><RiEditLine /></span> </div> }

                    { this.state.editMode && <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" /></div> }
                    
                </div>
            </div>
        )
    }
}

export default ProfileStatus;