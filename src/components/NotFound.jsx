import React from 'react';
import {Stack, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const NotFound = () => {
  return (
    <Stack 
      direction='column' 
      alignItems='center'
      spacing={3} 
      sx={{
        marginTop: '30px',
      }}
    >
        <Typography
          sx={{
            fontFamily: 'Barlow, sans-serif',
            color: 'white',
            fontSize: '22px',
          }}
        >
          User Not Found
        </Typography>

        <GitHubIcon 
          sx={{
            width: '150px',
            height: '150px',
            color: '#121f3d',
            '&:hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
        
    </Stack>
  )
}

export default NotFound