/* eslint-disable camelcase */
import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';

const ContactInformation = (props) => {

    const {users} = props;
    const {
        location,
        twitter_username,
        blog, 
        company
    } = users;

    return (
        <Grid container spacing={2} marginBottom='50px' alignItems='center'>
            <Grid item xs={6} >
                <Stack direction='row' alignItems='center' spacing={1}>
                    <LocationOnIcon sx={{ color: 'red'}} />
                    <Typography
                        sx={{
                            color: 'white',
                            fontFamily: 'Barlow, sans-serif'
                        }}
                    >{location}</Typography>
                </Stack>
            </Grid> 
            <Grid item xs={6}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <TwitterIcon sx={{color:'#1da1f2'}}/>
                    {
                        twitter_username
                            ?   <Link 
                                    href={`https://twitter.com/${twitter_username}`}
                                    target='_blank'
                                    underline='none'
                                    sx={{
                                        color: 'white',
                                        fontFamily: 'Barlow, sans-serif',
                                        '&:hover': {
                                            color: '#cecece'
                                        }
                                    }}
                                >
                                    @{twitter_username}
                                </Link>
                            : <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Barlow, sans-serif'
                                }}
                            >Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <LanguageIcon sx={{color:'#1da1f2'}} />
                    <Link
                        href={blog}
                        underline='none'
                        target='_blank'
                        sx={{
                            color: 'white', 
                            fontFamily:'Barlow, sans-serif', 
                            '&:hover': {
                                color: '#cecece'
                            }
                        }}
                    >
                        Web
                    </Link>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <BusinessIcon sx={{color: '#1da1f2'}} />
                    {
                        company
                            ? <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Barlow, sans-serif'
                                }}
                            >{company}</Typography>
                            : <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Barlow, sans-serif'
                                }}
                            >
                                Not Available
                            </Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ContactInformation;