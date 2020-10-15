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
        editMode: false
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render () {
        return (
            <div>
                <div>
                    { !this.state.editMode && <div >{this.props.status} <span onClick={this.activateEditMode.bind(this)}><RiEditLine /></span> </div> }

                    { this.state.editMode && <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text" /></div> }
                    
                </div>
            </div>
        )
    }
}

export default ProfileStatus;