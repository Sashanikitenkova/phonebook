import Container from '@mui/material/Container';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
      <Container maxWidth="sm">
        <Typography sx={{ mt: 20, mb: 2 }} align='center' variant='h4' >
           <ContactPageIcon sx={{ fontSize: 120 }} />
           Contact book 
        </Typography>
      </Container>
    );
  };

  export default Home;