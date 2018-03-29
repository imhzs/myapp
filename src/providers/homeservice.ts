import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TBaseService } from '../providers/pub_service';

@Injectable()
export class HomeService extends TBaseService
{
  constructor(public http: Http)
  {
    super(http);
  }

  // 身份证认证
  async VerifyId(idcardNo, name, mobile?: string)
  {
    this.SetParam('idcardNo', idcardNo);
    this.SetParam('name', name);
    if (mobile) {
      this.SetParam('mobile', mobile);
    }

    App.ShowLoading('验证中...');
    const result = await this.Post('kpay/api/idcard/auth').then(res => res.json());
    console.log(result);
    if (result.code === 1) {
      App.HideLoading();
      return true;
    } else{
      App.HideLoading();
      return false;
    }
  }

  // 获取当日分润明细
  async GetProfitToday()
  {
    let result = await this.Post('kpay/api/user/myprofit/today').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      return [];
    }
  }

  // 获取银行卡列表
  async GetCardList()
  {
    const result = await this.Post('kpay/api/bankcard/list').then(res => res.json());
    // console.log(result);

    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      return [];
    }
  }

  // 设置银行卡主卡
  async SetPrimCard(cardId)
  {
    this.SetParam('cardId', cardId);
    const result = await this.Post('kpay/api/bankcard/setPrimary').then(res => res.json());

    console.log(result)
    if (result.code === 1) {
      return true;
    } else {
      return false;
    }
  }

  // 添加信用卡
  async AddCreditCard(cardNo, mobile)
  {
    this.SetParam('cardNo', cardNo);
    this.SetParam('mobile', mobile);
    const result = await this.Post('kpay/api/bankcard/addCredit').then(res => res.json());
    console.log(result);
    if (result.code === 1) {
      return true;
    } else {
      App.ShowError(result.msg);
    }
  }

  // 添加储蓄卡
  async AddDeposiCard(cardNo, bankName, bankNo, branchName, mobile)
  {
    this.SetParam('cardNo', cardNo);
    this.SetParam('bankName', bankName);
    this.SetParam('bankNo', bankNo);
    this.SetParam('branchName', branchName);
    this.SetParam('mobile', mobile);

    const result = await this.Post('kpay/api/bankcard/addDeposit').then(res => res.json());
    console.log(result);
    
    if (result.code === 1) {
      return true;
    } else {
      App.ShowError(result.msg)
    }
  }

  // 删除银行卡
  async DelCard(cardId)
  {
    this.SetParam('cardId', cardId);
    const result = await this.Post('kpay/api/bankcard/del').then(res => res.json());
    if (result.code === 1) {
      return true;
    } else {
      return false;
    }
  }

  // 获取银行总行信息
  async GetTolBanks()
  {
    const result = await this.Post('kpay/api/bank/info').then(res => res.json());
    console.log(result)
    if (result.code === 1){
      return result.data;
    } else {
      App.ShowError(result.msg);
    }
  }

  //获取银行支行信息
  async GetBranchBanks(massage)
  {
    this.SetParam('name', massage)
    const result = await this.PostNoLoading('kpay/api/bank/list').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
    }
  }


  // 取现可用返现券
  async GetAvaCash(amount)
  {
    this.SetParam('amount', amount);
    const result = await this.Post('kpay/api/cash/cashback/available').then(res => res.json());
    if (result.code === 1 && result.data) {
      return result.data;
    } else {
      return [];
    }
  }

  // 获取银行取现列表
  async GetBankPage(cardId, enterCardId, amount, cashbackId?)
  {
    this.SetParam('cardId', cardId);
    this.SetParam('enterCardId', enterCardId);
    this.SetParam('amount', Math.round(amount * 100));
    this.SetParam('token', localStorage.getItem('token'));
    if (cashbackId) {
      this.SetParam('cashbackId', cashbackId);
    }

    return await this.Post('kpay/api/trade/quickPay/request').then(res => res.text());
  }

  // 快捷取现获取验证码
  async GetVerifyode(acctNo, cvn2, expDate, mobile, amount, cashbackId?)
  {
    this.SetParam('acctNo', acctNo);
    this.SetParam('cvn2', cvn2);
    this.SetParam('amount', Math.round(amount * 100));
    this.SetParam('mobile', mobile);
    this.SetParam('expDate', expDate);
    
    if (cashbackId) {
      this.SetParam('cashbackId', cashbackId);    
    }
    App.ShowLoading('验证中...');

    const result = await this.Post('kpay/api/trade/quickPay/sendVericode').then(res => res.json());

    if (result.code === 1) {
      App.HideLoading();
      App.ShowToast('验证码发送成功')
      return result.data;
    } else {
      App.HideLoading();
      App.ShowError(result.msg);
    }
  }

  // 快捷取现确认
  async ConfirmResult(orderNo, smsCode)
  {
    this.SetParam('orderNo', orderNo);
    this.SetParam('smsCode', smsCode);

    App.ShowLoading('确认中...');
    const result = await this.Post('kpay/api/trade/quickPay/confirm').then(res => res.json());
    console.log(result);
    if (result.code === 1) {
      App.HideLoading();
      return true;
    } else if (result.code === 0) {
      App.HideLoading();
      App.ShowError(result.msg)
      return false;
    }
  }
}
