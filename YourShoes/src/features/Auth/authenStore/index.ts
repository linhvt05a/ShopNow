import {flow, types} from 'mobx-state-tree';
import {AuthenService} from '@src/services/AuthenServices';

const AuthStore = types
  .model({
    email: types.string,
    phone: types.string,
  })
  .views(self => ({
    get getFullName() {
      return self.email + self.phone;
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
      try {
        const res = yield AuthenService.signUp(email, phone);
        self.setEmail(res.email || 'hoang');
        self.setPhone(res.phone || 'linh');
      } catch (e) {
        console.log('', e);
      }
    }),
  }))
  .create({
    email: '',
    phone: '',
  });
export default AuthStore;
