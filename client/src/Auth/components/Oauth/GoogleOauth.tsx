import axios from 'axios';
import React from 'react';
import { getGoogleOAuthURL } from '../../utils/getGoogleOAuthURL';

export const GoogleOauth = () => {
  const oauth = async () => {
    await axios.get(getGoogleOAuthURL());
  };
  return (
    <>
      <a href={getGoogleOAuthURL()}>Login with Google</a>

      <button onClick={oauth}>Login with google</button>
    </>
  );
};
