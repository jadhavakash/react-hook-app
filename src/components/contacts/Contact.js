import React from 'react'
import Avtar from 'react-avatar';
import {Link} from 'react-router-dom';
import {deleteContact} from '../../actions/ContactAction';
import {useDispatch} from 'react-redux';
const Contact = ({contact}) => {
const dispatch = useDispatch();
const {name,email,phone,id} = contact;
    return (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"></label>
                    </div>
                </td>
                <td><Avtar name ={name} size="45" round={true} className="mr-3"/>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${id}`} className="material-icons mr-2">
                        edit
                    </Link>
                    <span className="material-icons text-danger" 
                    onClick={() => dispatch(deleteContact(id))}>
                        remove_circle
                    </span>
                </td>
            </tr> 
    );
};

export default Contact
