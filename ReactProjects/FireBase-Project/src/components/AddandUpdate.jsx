import PropTypes from 'prop-types';
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Model from "./Model";
import { Formik, Form, Field } from 'formik';

function AddandUpdate({ isOpen, onClose, contact, onSave }) {
    const addOrUpdateContact = async (values) => {
        try {
            let updatedContact;
            if (contact) {
                const contactDoc = doc(db, 'contacts', contact.id);
                await updateDoc(contactDoc, values);
                updatedContact = { id: contact.id, ...values };
            } else {
                const contactRef = collection(db, 'contacts');
                const docRef = await addDoc(contactRef, values);
                updatedContact = { id: docRef.id, ...values };
            }
            onSave(updatedContact);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Model 
            isOpen={isOpen}
            onClose={onClose}
        >
            <Formik
                initialValues={{
                    name: contact ? contact.name : "",
                    email: contact ? contact.email : "",
                }}
                onSubmit={(values) => {
                    addOrUpdateContact(values);
                }}
            >
                <Form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="h-10 border rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="h-10 border rounded-xl" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="border rounded-md bg-red-600 text-white px-3 py-1.5">
                            {contact ? "Update Contact" : "Add Contact"}
                        </button>
                    </div>
                </Form>
            </Formik>
        </Model>
    );
}

AddandUpdate.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    onSave: PropTypes.func.isRequired,
};

export default AddandUpdate;
