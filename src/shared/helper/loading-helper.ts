export class LoadingHleper
{
  private static loading: boolean = true;

  private static loadingText: string = '处理中';

  public static setShowLoading(loading: boolean) {
    this.loading = loading;
  }

  public static setLoadingText(text: string) {
    this.loadingText = text;
  }

  public static showLoading() {
    if (this.loading) {
      App.ShowLoading(this.loadingText);
    }
  }

  public static hideLoading() {
    App.HideLoading();
    this.loading = true;
    this.loadingText = '处理中';
  }
}