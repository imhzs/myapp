export class AuthHelper
{
  public static check() {
    if (!App.IsIdAuthed) {
      let alertOpts = {
        title: '温馨提示',
        message: '为了您的资金安全，首次刷卡需先完成身份认证',
        cssClass: 'text-left',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              App.Nav.push('HomePage');
            }
          },
          {
            text: '确认',
            handler: () => {
              App.Nav.push('AuthPage');
            }
          }
        ]
      };
      App.ShowAlert(alertOpts);
    }
  }
}