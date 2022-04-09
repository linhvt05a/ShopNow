import {AxiosResponse} from 'axios';
import BaseService from '.';
import {API} from '@src/constants/APIs';

export const AuthenService = {
  signUp: (email: string, phone: string): Promise<AxiosResponse['data']> =>
    BaseService.post(API.SIGN_UP, {
      email,
      phone,
    }),
};
