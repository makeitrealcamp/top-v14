import qs from 'qs';
import logger from '../../shared/logger/appLogger';
import axios from 'axios';

interface GoogleTokensResult {
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  id_token: string;
}
export const getGoogleOAuthTokenService = async (
  code: string
): Promise<GoogleTokensResult> => {
  const url = 'https://oauth2.googleapis.com/token';
  console.log('******************');
  console.log(code);
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.GOOGLE_REDIRECT_URL}`,
    grant_type: 'authorization_code',
  };

  try {
    const { data } = await axios.post<GoogleTokensResult>(
      url,
      qs.stringify(values),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return data;
  } catch (error: any) {
    logger.error('Error Failed to fetch Google Oauth Tokens', {
      instance: 'services',
      fn: 'getGoogleOAuthTokens',
      trace: error.message,
    });

    throw new Error(error.message);
  }
};
