import styles from "./filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ onSearchChange }) => {
  return (
    <>
      <div className={styles.filter__container}>
        <label htmlFor="searchInput">
          <h3>Find contacts by name</h3>
        </label>

        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          onChange={onSearchChange}
          placeholder=""
        />
      </div>
    </>
  );
};

Filter.propTypes = {
    onSearchChange: PropTypes.func,
  };

export default Filter;
