import styles from "./contactList.module.css";
import PropTypes from "prop-types";
const ContactList = ({ data, handleDelete }) => {
  return (
    <div className={styles.list__user}>
      <ul>
        {data.map((user) => (
          <li key={user.userId}>
            {user.name}: {user.number}
            <button
              className={styles.delete}
              onClick={() => handleDelete(user.userId)}
              id={user.userId}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
};
export default ContactList;
