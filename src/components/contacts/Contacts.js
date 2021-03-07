import React from 'react';
import {useSelector} from 'react-redux';
import Contact from './Contact'
const Contacts = () => {
const contacts = useSelector((state)=>state.contact.contacts);
// console.log(contacts);
    return (
        <div>
           <table className="table shadow">
                <thead className="table bg-dark text-white">
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact =>(
                            <Contact contact={contact} key={contact.id}/>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
