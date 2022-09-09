/* eslint-disable camelcase */
import { Avatar, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react'
import Description from '../containers/Description';

const User = (props) => {

    const {users} = props;
    const {
        avatar_url,
        name,
        created_at,
        login,
    } = users;

    const dateExact = `${created_at}`;
    const [date, _] = dateExact.split('T');

    return (
        <Grid 
            container
            spacing={ 3 }
        >
            <Grid item xs={3} >
                <Stack 
                    alignItems='center'
                >
                    <Avatar
                        alt={login}
                        src={avatar_url}
                        sx={{
                            width: "100%",
                            height: "auto",
                            boxShadow: 3,
                            border: '1px solid #ffffff65',
                            marginBottom: '15px'
                        }}
                    />
                    <Link
                        href={`https://github.com/${login}`}
                        target='_blank'
                        underline='none'
                        sx={{
                            color: 'white',
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '14px',
                            '&:hover': {
                                color:'#cecece'
                            }
                        }}
                    >@{login}</Link>
                </Stack>
            </Grid>
            <Grid item xs={9} >
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        sx={{ 
                            fontFamily: 'Barlow, sans-serif',
                            color: '#1976d2',
                            fontSize: '22px',
                        }}
                    >{name}</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Barlow, sans-serif',
                            color: '#cecece',
                            fontSize: '14px'  
                        }}
                    >{date}</Typography>
                </Stack>
                <Description users={users} />
            </Grid>
        </Grid>
    )
}

export default User;