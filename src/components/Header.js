// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import {
  Typography
} from '@mui/material'
import React from "react";
import "./Header.css";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <div className="headerApp">
        <Typography variant='h4' className='title'>Call a Friend</Typography>
        <Typography variant='subtitle1' className='sub-title'>Your friendly contact app</Typography>
      </div>
    </>
  );
};

export default Header;
