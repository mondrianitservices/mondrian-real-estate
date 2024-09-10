import * as React from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

export const AppTheme = ({children}) => {
  return (
    <CssVarsProvider disableTransitionOnChange>
        <CssBaseline/>
        {children}
    </CssVarsProvider>
  )
}
