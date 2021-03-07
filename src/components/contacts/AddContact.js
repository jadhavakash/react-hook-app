import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {addContact}from '../../actions/ContactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
const AddContact = () => {

let history = useHistory();
const dispatch = useDispatch();
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");

const createContact= e =>{
    e.preventDefault();
    // console.log(name,email,phone);
     const new_contact = {
        id:shortid.generate(),
        name:name,
        phone:phone,
        email:email
     }
     dispatch(addContact(new_contact));
     history.push("/");
};
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) =>createContact(e)}> 
                    <div className="form-group">
                        <input type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="form-control"/>
                       
                    </div>
                    <div className="form-group">
                        <input type="text"
                        placeholder="Enter your Phone"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="form-control"/>
                    </div>
                    <button className="btn btn-primary" type="submit">Create a Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
