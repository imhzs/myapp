import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';

export class UserHelper
{
  // 格式化手机号
  public static formatMobile(mobile: string): string {
    return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
  }

  // 格式化身份证号
  public static formatIdCard(idcard: string): string {
    return idcard.replace(/(\d{5})(\d{5,})(\d{5})/, '$1*****$3');
  }

  // 格式化真实姓名
  public static formatRealName(realName: string): string {
    let str = '';
    if (!TypeInfo.Assigned(realName)) {
      return str;
    }

    let last = realName.substr(-1);
    for (let i = 0; i < realName.length - 1; i++) {
      str += '*';
    }
    return `${str}${last}`;
  }
}