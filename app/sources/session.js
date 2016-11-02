import config from 'config';
import request from 'lib/request';
import requestAuth from 'lib/requestAuth';

export default class SessionSource {
  static signInPath = `${config.apiTarget}/users/sign_in`
  static signOutPath = `${config.apiTarget}/users/sign_out`

  static create(user) {
    return request(this.signInPath, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(result => result.json());
  }

  static delete(user) {
    return requestAuth(this.signOutPath, {
      method: 'DELETE'
    });
  }
}
