import Image from 'next/image';
import styles from './userForm.module.css';

const UserForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label>
                    Fulde navn
                    <input type="text" name="name" />
                </label>
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
        </div>
    );
}

export default UserForm;