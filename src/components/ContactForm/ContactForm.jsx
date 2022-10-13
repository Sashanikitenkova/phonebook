import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/operations";
import { getContacts } from "redux/contacts/selectors";
import { nanoid } from "nanoid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmit  = ({name, number}) => {
        const findName = contacts.find(contact => 
          contact.name.toLowerCase() === name.toLowerCase()
        );
        if (findName) {
          console.log(findName);
          return alert(`${name} is already in contacts.`);
        };
    
        const findNumber = contacts.find(contact => 
          contact.number === number
        );
        if (findNumber) {
          return alert(`This phone number is already in use.`);
        };
    
        dispatch(addContacts({name, number})); 
      }

  const handleChange = e => {
      const { name, value } = e.currentTarget;

      switch (name) {
        case 'name':
          setName(value);
          break;
  
        case 'number':
          setNumber(value);
          break;
  
        default:
          break;
      }
  };

  const handleSubmit = e => {
      e.preventDefault();
      formSubmit({ name: name, number: number });
      reset();
  };

  const reset = () => {
      setName('');
      setNumber('');
  };

    return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { my: 3, mr: '20px', width: '240px'  },
      }}
      noValidate
      onSubmit={handleSubmit} 
      autoComplete="off"
    >
      <div>
        <TextField
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          id = {nameInputId}
          onChange={handleChange}
          required
          label="Name"
          variant="filled"
          type="text" 
          name="name"
        />
        <TextField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          id = {numberInputId}
          onChange={handleChange}
          label="Number"
          variant="filled"
        />

        <Stack spacing={2} direction="row">
        <Button type="submit" >Add contact</Button>
        </Stack>
      </div>
    </Box>
    );
}


// {/* <form onSubmit={handleSubmit} className={s.form}>
//           <label htmlFor={nameInputId} className={s.label}>Name</label>
//           <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//               id = {nameInputId}
//               onChange={handleChange}
//               className={s.input}
//           />

//           <label htmlFor={numberInputId} className={s.label}>Number</label>
//           <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//               id = {numberInputId}
//               onChange={handleChange}
//               className={s.input}
//           />
//           <button type="submit" className={s.button}>Add contact</button>
//      </form> */}