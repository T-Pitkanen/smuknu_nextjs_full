"use client";

import styles from "./userForm.module.css";
import { useState } from "react";

const UserForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.name.value === '') {
      setErrorMessage('Name is required');
    } else {
      setName(event.target.name.value);
      setShowModal(true);
    }
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Fulde navn
          <input type="text" name="name" />
        </label>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Ris og/eller ros
          <textarea name="comment" />
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
            <a href="/" className={styles.btn}>Til Forsiden</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;