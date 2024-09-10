import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import PropTypes from 'prop-types';

function ContactCard({ contact, onEdit, onDelete }) {
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, 'contacts', id));
            onDelete(); // Refresh the contacts after deletion
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-between rounded-lg items-center bg-yellow p-2">
            <div className="flex gap-2">
                <HiOutlineUserCircle className="text-orange text-5xl" />
                <div>
                    <h2 className="font-semibold">{contact.name}</h2>
                    <p className="text-sm">{contact.email}</p>
                </div>
            </div>
            <div className="flex text-4xl gap-2">
                <RiEditCircleLine onClick={onEdit} />
                <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
            </div>
        </div>
    );
}

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactCard;
