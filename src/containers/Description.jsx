import { Typography } from '@mui/material';
import React from 'react'
import ContactInformation from '../components/ContactInformation';
import PaperInformation from '../components/PaperInformation';

const Description = (props) => {

  const {users} = props;
  const {
    bio
  } = users;


  return (
    <>
      {
        bio !== null
            ?<Typography
              sx={{
                margin: '15px 0',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Ubuntu, sans-serif'
              }}
            >
              {bio}
            </Typography>
            :<Typography
              sx={{
                margin: '15px 0',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Ubuntu, sans-serif'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque, esse vitae sequi nobis dicta corporis hic itaque praesentium aliquid.
            </Typography>
      }

      <PaperInformation users={users}/>
      <ContactInformation  users={users}/>
    </>
  )
}

export default Description;	