/* eslint-disable camelcase */
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {

    const {users} = props;
    const {
        public_repos,
        followers,
        following
    } = users;

    return (
        <Paper elevation={12}>
            <Stack 
                direction='row' 
                alignItems='center' 
                justifyContent='space-around' 
                p='15px' 
                mb='35px' 
                sx={{ background: '#121f3d', borderRadius: '3px' }}
            >
                <Stack alignItems='center'>
                    <Typography
                        sx={{
                            color: '#1976d2',
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '16px'
                        }}
                    >
                        Repos
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            fontFamily: 'Ubuntu, sans-serif',
                            fontSize: '14px'
                        }}
                    >
                        {public_repos}
                    </Typography>
                </Stack>

                <Stack alignItems='center'>
                    <Typography
                        sx={{
                            color: '#1976d2',
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '16px'
                        }}
                    >
                        Followers
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            fontFamily: 'Ubuntu, sans-serif',
                            fontSize: '14px'
                        }}
                    >
                        {followers}
                    </Typography>
                </Stack>

                <Stack alignItems='center'>
                    <Typography
                        sx={{
                            color: '#1976d2',
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '16px'
                        }}
                    >
                        Following
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            fontFamily: 'Ubuntu, sans-serif',
                            fontSize: '14px'
                        }}
                    >
                        {following}
                    </Typography>
                </Stack>

            </Stack>
        </Paper>
    )
}

export default PaperInformation;