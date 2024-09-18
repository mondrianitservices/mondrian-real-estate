import { ChevronRightRounded, HomeRounded } from '@mui/icons-material'
import { Box, Breadcrumbs, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Input, Link, Option, Select, Stack, Tab, TabList, Tabs, Textarea, Typography, tabClasses } from '@mui/joy'

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
                <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
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
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Card>
                    <Box sx={{ mb: 1 }}>
                        <Typography level='title-md'>Información General</Typography>
                        <Typography level='body-sm'>Agrega la información de tu propiedad</Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="column"
                        spacing={3}
                        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
                    >                        
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Nombre de Propiedad</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="Descripción breve de la propiedad a publicar" />
                                </FormControl>
                            </Stack>
                            <Stack spacing={1}>
                                <FormLabel>Descripción</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Textarea
                                        size="sm"
                                        minRows={3}
                                        defaultValue="Casa de habitación para familia grande con mascota."
                                    />
                                </FormControl>
                            </Stack>
                            <Stack spacing={1}>
                                <FormControl>
                                    <FormLabel>Dirección</FormLabel>
                                    <Input size="sm" placeholder='Col Miraflores' />
                                </FormControl>
                            </Stack>
                        </Stack>
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancelar
                            </Button>
                            <Button size="sm" variant="solid">
                                Guardar
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>
            </Stack>
        </Box>
    )
}
