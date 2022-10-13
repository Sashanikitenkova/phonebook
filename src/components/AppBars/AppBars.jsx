import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const AppBars = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit" >
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation />
      </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  </Box>
  </header>
  );
};