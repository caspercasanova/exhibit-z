import React from "react";
import Portal from "@reach/portal";
import styles from "./Modal.module.scss";
export default function Modal({ children, open, onClose }) {
	return (
		<Portal>
			{open ? (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<div className={styles.modalHeader}>
							<button onClick={onClose}>Close</button>
						</div>
						{children}
					</div>
				</div>
			) : null}
		</Portal>
	);
}
