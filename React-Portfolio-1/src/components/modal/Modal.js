import React,{useState} from 'react';
import Modal from 'react-modal';
function modal() {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    return(
        <div>
            <Modal isOpen={modalIsOpen}></Modal>
        </div>
    )
}
export default modal