import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contacts/selectors';
import s from './ContactList.module.css'

export const ContactList = () => {
    // const contacts = useSelector(state => state.contacts.contacts);
    const contacts = useSelector(getFilteredContacts);

    return (
      <ul className={s.contactList}>
           {contacts.map(({id, name, number}) => (
                <ContactItem 
                    key={id} 
                    id={id}
                    name={name}
                    number={number}
                />
        ))}
      </ul> 
    )
} 





// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getFilteredContacts } from 'redux/selector';
// import ContactItem from 'components/ContactItem/ContactItem';
// import s from './ContactList.module.css'

// const ContactList = () => {
//     // const contacts = useSelector(state => state.contacts.contacts);
//     const contacts = useSelector(getFilteredContacts);

//     return (
//       <ul className={s.contactList}>
//            {contacts.map(({id, name, phone}) => (
//                 <ContactItem 
//                     key={id} 
//                     id={id}
//                     name={name}
//                     number={phone}
//                 />
//         ))}
//       </ul> 
//     )
// } 

// export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string.isRequired,
//           name: PropTypes.string.isRequired,
//           number: PropTypes.string.isRequired,
//         })
//       ), 
// };

