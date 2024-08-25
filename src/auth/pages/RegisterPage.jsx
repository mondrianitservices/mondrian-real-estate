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

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form
      >
        <FormControl required>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" name="Nombre" />
        </FormControl>
        <FormControl required>
          <FormLabel>Apellidos</FormLabel>
          <Input type="text" name="Apellidos" />
        </FormControl>
        <FormControl required>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl required>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <FormControl required>
          <FormLabel>Confirmar Contraseña</FormLabel>
          <Input type="password" name="passwordConfirm" />
        </FormControl>
        <Stack gap={4} sx={{ mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
          </Box>
          <Button type="submit" fullWidth>
            Crear Cuenta
          </Button>
        </Stack>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage;