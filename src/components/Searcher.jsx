import React, {useState} from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {

  const {setInputUser} = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value)
  }
  const handleSearch = (e) => {
      e.preventDefault();
      setInputUser(inputValue)
  };
  
  const inputProps = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          onClick={ handleSearch }
          size='small'
          type='submit'
        >
          <SearchIcon color='primary' />
        </IconButton>
      </InputAdornment>
    )
  }

  return (

    <TextField 
      label='Github User'
      id= 'outlined-basic'
      variant='outlined'
      placeholder='Octocat'
      color='primary'
      value={inputValue}
      onChange={ handleChange }
      InputProps={inputProps}
      sx={{
        borderRadius: '4px',
        height: '40px',
        marginTop: '15px',
        marginBottom:'20px',
        background: '#00000061',
        '& .MuiOutlinedInput-root': {
          color: '#ffffff'
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #ffffff5c'
        },
        '& .MuiFormLabel-root': {
          color: '#ffffff5c'
        }
      }}
      size='small'
    />

  )
}

export default Searcher;