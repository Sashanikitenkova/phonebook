import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import Container from '@mui/material/Container';

export default function Contacts () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Container maxWidth="sm">
      <ContactForm />
      <Filter />
       <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
      </Container>
    );
  };
