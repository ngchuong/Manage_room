import React, { useState, useEffect } from 'react';
import './Dialog.scss';

import Button from '../../core/button/button.js';
import { Modal } from 'react-responsive-modal';

const Dialog = ({ message }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (message !== null) {
			setIsOpen(true);
		}
	}, [message])

	function closeDialog() {
		setIsOpen(false);
	}
	return (
		<div className="dialog-container">
			<Modal open={isOpen} onClose={closeDialog} center>
				<div className="content-dialog">
					{message}
				</div>
				<div className="footer-dialog">
					<Button
						handleClick={closeDialog}
						cls={'btn-submit'}
						title="OK" />
				</div>
			</Modal>
		</div>
	)
}

export default Dialog;
