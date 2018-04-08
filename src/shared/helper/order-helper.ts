export class OrderHelper
{
  // 已成功
  static StatusSuccess: number = 1;

  // 已失败
  static StatusFail: number = 0;

  // 处理中
  static StatusProcessing: number = 2;

  // 信用卡收款
  static TypeCreditCard: string = 'card';

  // 支付宝收款
  static TypeAliPay: string = 'alipay';

  // 微信收款
  static TypeWebChat: string = 'wechat';

  // 获取订单状态
  public static getStatusText(status: number) {
    let text = '未知';
    if (status == OrderHelper.StatusSuccess) {
      text = '收款成功';
    } else if (status == OrderHelper.StatusFail) {
      text = '收款失败';
    } else if (status == OrderHelper.StatusProcessing) {
      text = '处理中';
    }
    return text;
  }

  // 获取收款方式
  public static getTypeText(type: string) {
    let text = '未知';
    if (type == OrderHelper.TypeCreditCard) {
      text = '信用卡收款';
    } else if (type == OrderHelper.TypeAliPay) {
      text = '支付宝收款';
    } else if (type == OrderHelper.TypeWebChat) {
      text = '微信收款';
    }
    return text;
  }
}