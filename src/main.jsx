import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/joy/styles';
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <JournalApp />
    </StyledEngineProvider>    
    </BrowserRouter>
  </React.StrictMode>,
)
