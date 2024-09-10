import { useState } from 'react';

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentContact, setCurrentContact] = useState(null);

    const onOpen = (contact = null) => {
        setCurrentContact(contact);
        setIsOpen(true);
    };
    const onClose = () => {
        setCurrentContact(null);
        setIsOpen(false);
    };

    return { isOpen, onOpen, onClose, currentContact };
};

export default useDisclose;
