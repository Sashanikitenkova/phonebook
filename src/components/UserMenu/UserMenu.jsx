import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Stack spacing={2} direction="row">
          <p>Welcome, {user.name}</p>
          <Button variant="text" type="button" onClick={() => dispatch(logOut())}> Logout</Button>
      </Stack>
    </div>
  );
};


// {/* <div className={css.wrapper}>
// <p className={css.username}>Welcome, {user.name}</p>
// <button type="button" onClick={() => dispatch(logOut())}>
//   Logout
// </button>
// </div> */}