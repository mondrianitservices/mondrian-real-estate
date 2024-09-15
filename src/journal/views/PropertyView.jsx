import { ChevronRightRounded, HomeRounded } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Stack, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy'

export const PropertyView = () => {
    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRounded fontSize="sm" />}
                        sx={{ pl: 0 }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            href="#some-link"
                            aria-label="Home"
                        >
                            <HomeRounded />
                        </Link>
                        <Link
                            underline="hover"
                            color="neutral"
                            href="#some-link"
                            sx={{ fontSize: 12, fontWeight: 500 }}
                        >
                            Propiedades
                        </Link>
                        <Typography color='primary' sx={{ fontWeight: 500, fontSize: 12 }}>
                            Crear Propiedad
                        </Typography>
                    </Breadcrumbs>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Crear Propiedad
                    </Typography>
                </Box>
                <Tabs defaultValue={0} sx={{bgcolor:'transparent'}}>
                    <TabList
                    tabFlex={1}
                    size="sm"
                    sx={{
                        pl: { xs: 0, md: 4 },
                        justifyContent: 'left',
                        [`&& .${tabClasses.root}`]: {
                          fontWeight: '600',
                          flex: 'initial',
                          color: 'text.tertiary',
                          [`&.${tabClasses.selected}`]: {
                            bgcolor: 'transparent',
                            color: 'text.primary',
                            '&::after': {
                              height: '2px',
                              bgcolor: 'primary.500',
                            },
                          },
                        },
                      }}
                    >
                        <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                            Información General
                        </Tab>
                        <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
                            Mis Propiedades
                        </Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Stack>

            </Stack>
        </Box>
    )
}
