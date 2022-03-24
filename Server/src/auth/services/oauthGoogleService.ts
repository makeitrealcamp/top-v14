import { getOneUserByEmail } from '../../users/services';
import { createUserService } from '../../users/services/createUserService';
import { authCreateTokenService } from './authCreateTokenService';
import { getGoogleOAuthTokenService } from './getGoogleOAuthTokenService';
import { getGoogleUserService } from './getGoogleUserService';

interface Tokens {
  authToken: string;
  refreshToken: string;
}

export const oauthGoogleService = async (
  code: any
): Promise<Tokens | undefined> => {
  try {
    console.log('*-*-*-*-*-*-*-*-*-*-*code *-*-*-*-*-*-*-*-*-*');
    console.log(code);
    const { id_token, access_token } = await getGoogleOAuthTokenService(code);
    const { email, verified_email } = await getGoogleUserService({
      id_token,
      access_token,
    });
    if (!verified_email) throw new Error('Not verified email');

    const user = await getOneUserByEmail(email);

    if (!user) {
      const password = '234';
      const user = await createUserService({
        email,
        password,
        valid: verified_email,
      });

      return await authCreateTokenService(user.id);
    }

    return await authCreateTokenService(user.id);
  } catch (error: any) {
    console.log(error);
    new Error(error);
  }
};
