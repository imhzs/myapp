export class CredentialHelper
{
  private static tokenKey = 'token';

  private static mobileKey = 'mobile';

  private static secretKey = 'third_party_secret';

  public static setToken(v: string) {
    localStorage.setItem(CredentialHelper.tokenKey, v);
  }

  public static setMobile(v: string) {
    localStorage.setItem(CredentialHelper.mobileKey, v);
  }

  public static setSecret(v: string) {
    localStorage.setItem(CredentialHelper.secretKey, v);
  }

  public static getToken() {
    return localStorage.getItem(CredentialHelper.tokenKey);
  }

  public static getMobile() {
    return localStorage.getItem(CredentialHelper.mobileKey);
  }

  public static getSecret() {
    return localStorage.getItem(CredentialHelper.secretKey);
  }
}