import { Box, GlobalStyles, IconButton, List, ListItem, ListItemButton, ListItemContent, Sheet, Typography } from '@mui/joy'
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from 'react'
import {closeSidebar} from '../utils/toggleSidebar'

// Conversión de Toggler a JavaScript
function Toggler({ defaultExpanded = false, renderToggle, children }) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
      <React.Fragment>
        {renderToggle({ open, setOpen })}
        <Box
          sx={[
            {
              display: "grid",
              transition: "0.2s ease",
              "& > *": {
                overflow: "hidden",
              },
            },
            open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
          ]}
        >
          {children}
        </Box>
      </React.Fragment>
    );
  }

export const SidebarMenu = () => {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant="soft" color="primary" size="sm">
        <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography level="title-lg">Logo</Typography>
        {/* <ColorSchemeToggle sx={{ ml: "auto" }} /> */}
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected>
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Ordenes</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Tareas</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : {
                            transform: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>Todas</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Backlog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>En Progreso</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Hecho</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
          

        </List>
        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        ></List>
      </Box>
    </Sheet>
  )
}
