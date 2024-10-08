import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';
import { Typography } from '@mui/joy';
import GoogleIcon from './GoogleIcon';

export const LoginPage = () => {
  const headerContent = (
    <>
      <Stack gap={1}>
        <Typography component="h1" level="h3">
          Iniciar Sesión
        </Typography>
        <Typography level="body-sm">
          ¿Aún no tienes una cuenta?{' '}
          <Link component={RouterLink} to="/auth/register">
            Registrate
          </Link>
        </Typography>
      </Stack>
      <Link component={RouterLink} to="/">
        <Button
          variant="soft"
          color="neutral"
          fullWidth
          startDecorator={<GoogleIcon />}
        >
          Iniciar Sesión con Google
        </Button>
      </Link>
    </>
  );
  return (
    <AuthLayout title='Iniciar Sesión' headerContent={headerContent}>
      <form
      >
        <FormControl required>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl required>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Stack gap={4} sx={{ mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* <Checkbox size="sm" label="Recordar Sesión" name="persistent" />
            <Link level="title-sm" href="#replace-with-a-link">
              ¿Olvidaste tu contraseña?
            </Link> */}
          </Box>
          <Link component={RouterLink} to="/">
            <Button type="submit" fullWidth>
              Iniciar Sesión
            </Button>
          </Link>
        </Stack>
      </form>
    </AuthLayout>
  )
}
