import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
<<<<<<< HEAD
    // If there is a token and it's not expired, return `true`
=======
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
<<<<<<< HEAD
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
=======
    const decoded = decode(token);
    if (decoded.exp < Date.now()) {
      localStorage.removeItem('id_token');
      return true;
    }
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

<<<<<<< HEAD
export default new AuthService();
=======
export default new AuthService();
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
