import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "../constants/type";


//actions
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
};

// get contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})

// update a contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

//delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})