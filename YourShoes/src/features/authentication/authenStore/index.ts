import {flow, types} from 'mobx-state-tree';
import {AuthenService} from '@src/services/AuthenServices';

export const AuthStore = types
  .model({
    email: types.string,
    phone: types.string,
  })
  .views(self => ({
    get getFullName() {
      const fullName = self.phone + self.email;
      return fullName.toString();
    },
  }))
  .actions(self => ({
    setEmail(email: string) {
      self.email = email;
    },
    setPhone(phone: string) {
      self.phone = phone;
    },
  }))
  .actions(self => ({
    signUp: flow(function* signUp(email: string, phone: string) {
      self.setEmail(email);
      self.setPhone(phone);
      try {
        yield AuthenService.signUp(email, phone);
      } catch (e) {
        console.log('', e);
      }
    }),
  }))
  .create({
    email: '',
    phone: '',
  });
