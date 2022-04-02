import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { CssContext } from './context/cssContext';

const Image = (props) => {
  const { cssStyle, setCssStyle } = useContext(CssContext);

  return (
    <>
      <Avatar
        style={cssStyle.profileImage}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
    </>
  );
};

export default Image;
