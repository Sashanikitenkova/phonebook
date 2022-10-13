import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="sm">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  my: 3, mr: '20px', width: '240px' },
      }}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <TextField
          required
          label="Name"
          variant="filled"
          type="text" 
          name="name"
        />
        <TextField
          required
          label="Email"
          variant="filled"
          type="email" 
          name="email"
        />
         <TextField
          label="Password"
          autoComplete="current-password"
          variant="filled"
          type="password" 
          name="password" 
        />

        <Stack spacing={2} direction="row">
        <Button type="submit" >Register</Button>
        </Stack>
      </div>
    </Box>
    </Container>
  );
};



//  <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <Stack spacing={2} direction="row">
//          <Button variant="outlined" type="submit" >Register</Button>
//       </Stack>
//     </form>