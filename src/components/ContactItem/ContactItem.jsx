import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactListItem = ({ contact, onRemoveContact }) => {
  return (
    <li>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>

      <button
        className={css.button}
        type="button"
        onClick={() => onRemoveContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onRemoveContact: PropTypes.func,
};
