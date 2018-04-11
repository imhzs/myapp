export class AuthHelper
{
  public static check() {
    if (!App.IsIdAuthed) {
      let alertOpts = {
        title: '温馨提示',
        message: '为了您的资金安全，首次刷卡收款时需要进行身份认证',
        cssClass: 'text-left',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              // App.Nav.push(App.pages.tabsPage);
            }
          },
          {
            text: '去认证',
            handler: () => {
              App.Nav.push(App.pages.authPage);
            }
          }
        ]
      };
      App.ShowAlert(alertOpts);
    }
  }
}