import { Box } from "@mui/joy"
import { SidebarMenu, Header } from "../components"
import { AppTheme } from "../../theme/AppTheme";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <AppTheme>
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <SidebarMenu />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </AppTheme>

  )
}
