'use client';

import styles from './userForm.module.css';
import { useState } from 'react';

const UserForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (event.target.name.value === '') {
			setErrorMessage('Name is required');
		} else {
			const [name, email, comment] = event.target.elements;

			setName(name.value);
			setEmail(email.value);
			setComment(comment.value);
			setShowModal(true);

			const response = await fetch('/api/subscriber', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name.value,
					email: email.value,
					comment: comment.value,
				}),
			});
			const data = await response.json();
			setName(data.data.name);
			console.log('User', data);
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label>
					Fulde navn
					<input
						type="text"
						name="name"
						value={name}
						//when user types, update name state with the current value
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
				<label>
					Email
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Ris og/eller ros
					<textarea
						name="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</label>
				<input type="submit" value="Opret" />
			</form>

			{showModal && (
				<div className={styles.modal}>
					<div className={styles.modalContainer}>
						<h1 className={styles.modalHeader}>TAK!</h1>
						<span>{name}</span>
						<p>Vi er enormt glade for at få dig som medlem.</p>
						<img src="/products/product_1213213211.jpg" alt="Blomst" />
						<p>Kig I din inbox. Vi har sendt en lille velkomst gave.</p>
						<a href="/" className={styles.btn}>
							Til Forsiden
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserForm;
