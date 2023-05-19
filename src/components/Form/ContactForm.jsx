import PropTypes from 'prop-types';
import css from './Form.module.css';

export const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label}>Name</label>
      <input
        type="text"
        name="name"
        pattern="/^[a-zA-Zа-яА-Я\s]+$/"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      ></input>
      <label className={css.label}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
