import { authCreateTokenService } from './authCreateTokenService';
import { getGoogleOAuthTokens } from './googleAuthTokenService';
import { getGoogleUser } from './googleAuthUserService';

const oauthGoogleService = async (code: string) => {
  try {
    // get the id and access token with the code
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });

    // get user with tokens
    const googleUser = await getGoogleUser({ id_token, access_token });

    console.log({ googleUser });

    if (!googleUser.verified_email) {
      return res.status(403).send('Google account is not verified');
    }

    // upsert the user
    const user = await findAndUpdateUser(
      {
        email: googleUser.email,
      },
      {
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
      },
      {
        upsert: true,
        new: true,
      }
    );

    // create an access token

    const tokens = await authCreateTokenService(user);

    // const accessToken = signJwt(
    //   { ...user.toJSON(), session: session._id },
    //   { expiresIn: config.get('accessTokenTtl') } // 15 minutes
    // );

    // // create a refresh token
    // const refreshToken = signJwt(
    //   { ...user.toJSON(), session: session._id },
    //   { expiresIn: config.get('refreshTokenTtl') } // 1 year
    // );

    // // set cookies
    // res.cookie('accessToken', accessToken, accessTokenCookieOptions);

    // res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions);

    // redirect back to client
  } catch (error) {
    log.error(error, 'Failed to authorize Google user');
    return res.redirect(`${config.get('origin')}/oauth/error`);
  }
};
