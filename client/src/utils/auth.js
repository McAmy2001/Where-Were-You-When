// imports jwt-decode for use below
import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // check to see if there is a valid saved token before logging in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  // checks if toek is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
  // get token from local storage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // when user logs in, save user token to localStorage
  login(idToken) {
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }
  // when user logs out, clears user token and other data from localStorage
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
