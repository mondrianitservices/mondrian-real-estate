import { FileUploadRounded } from '@mui/icons-material'
import { AspectRatio, Card, Link, Typography } from '@mui/joy'
import React from 'react'

export const DropZone = ({ icon, sx, ...other }) => {
    return (
        <Card
            variant='soft'
            {...other}
            sx={[
                {
                    borderRadius: 'sm',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    px: 3,
                    flexGrow: 1,
                    boxShadow: 'none',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <AspectRatio
                ratio="1"
                variant='solid'
                color='primary'
                sx={{ minWidth: 32, borderRadius: '50%', '--Icon-fontSize': '16px' }}>
                <div>{icon ?? <FileUploadRounded />}</div>
            </AspectRatio>
            <Typography level="body-sm" sx={{ textAlign: 'center' }}>
                <Link component="button" overlay>
                    Click para cargar
                </Link>{' '}
                o arrastrar y soltar
                <br /> SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
        </Card>
    )
}
