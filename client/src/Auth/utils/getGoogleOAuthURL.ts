export const getGoogleOAuthURL = () => {
  const rootUrl = process.env.REACT_APP_GOOGLE_ROOT_URL;

  const options = {
    redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URL as string,
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };
  console.log(options);
  const qs = new URLSearchParams(options);
  console.log(`${rootUrl}?${qs.toString()}`);
  return `${rootUrl}?${qs.toString()}`;
};
