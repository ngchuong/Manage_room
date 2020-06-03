import React, { useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalRender = ({isOpen}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onClose = () => {
        setIsOpenModal(false);
    }
    return (
        <div>
            <Modal open={isOpen} onClose={onClose} center>
                aaaa
            </Modal>
        </div>
    )
}

export default ModalRender;