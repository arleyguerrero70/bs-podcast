import axios from 'axios';

const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_REGION = import.meta.env.VITE_MAILCHIMP_REGION || 'us5';

const MAILCHIMP_API_URL = `https://${MAILCHIMP_REGION}.api.mailchimp.com/3.0`;

/**
 * Suscribir un email a Mailchimp
 * @param {string} email 
 * @param {object} mergeFields - Campos adicionales (firstName, lastName, etc)
 * @returns {Promise}
 */
export const subscribeToMailchimp = async (email, mergeFields = {}) => {
  try {
    const response = await axios.post(
      `${MAILCHIMP_API_URL}/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: mergeFields.firstName || '',
          LNAME: mergeFields.lastName || '',
          COMPANY: mergeFields.company || '',
          PHONE: mergeFields.phone || '',
          ...mergeFields,
        },
      },
      {
        auth: {
          username: 'anystring',
          password: MAILCHIMP_API_KEY,
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (error.response?.status === 400 && error.response?.data?.title === 'Member Exists') {
      return {
        success: true,
        message: 'Email already subscribed',
        data: error.response.data,
      };
    }

    return {
      success: false,
      error: error.response?.data?.detail || error.message,
    };
  }
};

/**
 * Validar que la configuración de Mailchimp esté completa
 */
export const validateMailchimpConfig = () => {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
    console.warn(
      'Mailchimp configuration incomplete. Set VITE_MAILCHIMP_API_KEY and VITE_MAILCHIMP_AUDIENCE_ID in .env'
    );
    return false;
  }
  return true;
};
