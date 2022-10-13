import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);

    return (
        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
            <List>
            {contacts.map(({id, name, number}) => (
                <ContactItem 
                    key={id} 
                    id={id}
                    name={name}
                    number={number}
                />
                ))}
            </List> 
            </Box>
    )
} 



// {/* <ul className={s.contactList}>
//            {contacts.map(({id, name, number}) => (
//                 <ContactItem 
//                     key={id} 
//                     id={id}
//                     name={name}
//                     number={number}
//                 />
//         ))}
//       </ul>  */}



// {/* <List>
//             {contacts.map(({id, name, number}) => (
//                 <ContactItem 
//                     key={id} 
//                     id={id}
//                     name={name}
//                     number={number}
//                 />
//                 ))}
//             </List> */}