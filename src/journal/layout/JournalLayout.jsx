import { Box } from "@mui/system"
import {SidebarMenu, Header} from "../components"
import { Toolbar } from "@mui/material";

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
      <Header/>
      <SidebarMenu/>
        {/* <NavBar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/> */}
        <Box 
            component='main'
            sx={{flexGrow:1,p:3}}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
