import { encryptPassword } from '../../auth/utils/passwordManager';
import { createResource } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import mercadopago from 'mercadopago';
// import { PreferenceItem, CreatePreferencePayload } from 'mercadopago';

/**
 *
 * @param {object} userRequest
 * @returns
 */
export const createPreferenceService = async (
  products: any[]
): Promise<any> => {
  try {
    console.log(process.env.MP_TOKEN);
    mercadopago.configure({
      access_token: `${process.env.MP_TOKEN}`,
    });

    let preference: any = {
      items: products,

      back_urls: {
        success: 'http://localhost:3000/feedback',
        failure: 'http://localhost:3000/feedback',
        pending: 'http://localhost:3000/feedback',
      },
      auto_return: 'approved',
    };

    const { response } = await mercadopago.preferences.create(preference);
    return response.sandbox_init_point;
  } catch (error: any) {
    console.log(error);
    logger.error(`error creating preference mercadopago`, {
      service: 'createUserService',
      trace: error.message,
    });
    throw new Error(`error creating preference mercadopago`);
  }
};
