import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebase";
import ContactCard from "./ContactCard";
import AddandUpdate from "./AddandUpdate";
import useDisclose from "./hooks/useDisclose";

function SearchBar() {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { isOpen, onClose, onOpen } = useDisclose();
    const [selectedContact, setSelectedContact] = useState(null);

    const fetchContacts = async () => {
        try {
            const contactRef = collection(db, 'contacts');
            const contactSnapShot = await getDocs(contactRef);
            const contactList = contactSnapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setContacts(contactList);
            setFilteredContacts(contactList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        const results = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContacts(results);
    }, [searchTerm, contacts]);

    const handleAddOrUpdateContact = (updatedContact) => {
        if (selectedContact) {
            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact.id === updatedContact.id ? updatedContact : contact
                )
            );
        } else {
            setContacts((prevContacts) => [...prevContacts, updatedContact]);
        }
        setSelectedContact(null);
        onClose();
    };

    return (
        <>
            <div className="flex gap-2">
                <div className="relative flex items-center flex-grow gap-2">
                    <IoSearch className="absolute ml-2 text-white text-3xl p-1" />
                    <input 
                        type="text" 
                        className="flex-grow bg-transparent border pl-10 border-white rounded-md h-11 text-white text-xl"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <RiAddCircleLine 
                        onClick={() => { onOpen(); setSelectedContact(null); }} 
                        className="text-white text-4xl cursor-pointer" 
                    />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-col gap-4">
                    {filteredContacts.map((contact) => (
                        <ContactCard 
                            key={contact.id} 
                            contact={contact} 
                            onEdit={() => { onOpen(); setSelectedContact(contact); }}
                            onDelete={() => fetchContacts()}
                        />
                    ))}
                </div>
            </div>
            <AddandUpdate 
                isOpen={isOpen}
                onClose={onClose}
                contact={selectedContact}
                onSave={handleAddOrUpdateContact}
            />
        </>
    );
}

export default SearchBar;
