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


export const LoginPage = () => {
  return (
    <AuthLayout title='Iniciar Sesión'>
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
            <Checkbox size="sm" label="Recordar Sesión" name="persistent" />
            <Link level="title-sm" href="#replace-with-a-link">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <Button type="submit" fullWidth>
            Iniciar Sesión
          </Button>
        </Stack>
      </form>
    </AuthLayout>
  )
}
