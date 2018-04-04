import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const _ = require('lodash');

import { TBaseService } from '../providers/pub_service';
import { CardModel } from '../models/card-model';
import { CredentialHelper } from '../shared/helper/credential-helper';

@Injectable()
export class HomeService extends TBaseService
{
  public subject: Subject<Array<CardModel>> = new Subject<Array<CardModel>>();

  constructor(protected http: HttpClient) {
    super(http);
  }

  // 身份证认证
  VerifyId(idcardNo, name, mobile?: string) {
    this.SetParam('idcardNo', idcardNo);
    this.SetParam('name', name);
    if (mobile) {
      this.SetParam('mobile', mobile);
    }
    return this.Post('kpay/api/idcard/auth');
  }

  // 获取当日分润明细
  GetProfitToday() {
    return this.Post('kpay/api/user/myprofit/today');
  }

  // 获取银行卡列表
  GetCardList() {
    return this.Post('kpay/api/bankcard/list').map((resp: any) => {
      let cards: Array<CardModel> = resp.data;
      this.updateCards(cards);
    }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // 用户当前卡片
  get currentCards(): Observable<Array<CardModel>> {
    return this.subject.asObservable();
  }

  // 更新卡片数据
  public updateCards(cards) {
    this.subject.next(_.concat(new Array<CardModel>(), cards));
  }

  // 设置银行卡主卡
  SetPrimCard(cardId) {
    this.SetParam('cardId', cardId);
    return this.Post('kpay/api/bankcard/setPrimary');
  }

  // 添加信用卡
  AddCreditCard(cardNo, mobile) {
    this.SetParam('cardNo', cardNo);
    this.SetParam('mobile', mobile);
    return this.Post('kpay/api/bankcard/addCredit');
  }

  // 添加储蓄卡
  AddDeposiCard(cardNo, bankName, bankNo, branchName, mobile) {
    this.SetParam('cardNo', cardNo);
    this.SetParam('bankName', bankName);
    this.SetParam('bankNo', bankNo);
    this.SetParam('branchName', branchName);
    this.SetParam('mobile', mobile);

    return this.Post('kpay/api/bankcard/addDeposit');
  }

  // 删除银行卡
  DelCard(cardId) {
    this.SetParam('cardId', cardId);
    return this.Post('kpay/api/bankcard/del');
  }

  // 获取银行总行信息
  GetTolBanks() {
    return this.Post('kpay/api/bank/info');
  }

  //获取银行支行信息
  GetBranchBanks(massage) {
    this.SetParam('name', massage)
    return this.Post('kpay/api/bank/list');
  }

  // 取现可用返现券
  GetAvaCash(amount) {
    this.SetParam('amount', amount);
    return this.Post('kpay/api/cash/cashback/available');
  }

  // 获取银行取现列表
  GetBankPage(cardId, enterCardId, amount, cashbackId?) {
    this.SetParam('cardId', cardId);
    this.SetParam('enterCardId', enterCardId);
    this.SetParam('amount', Math.round(amount * 100));
    this.SetParam('token', CredentialHelper.getToken());
    if (cashbackId) {
      this.SetParam('cashbackId', cashbackId);
    }

    return this.Post('kpay/api/trade/quickPay/request');
  }

  // 快捷取现获取验证码
  GetVerifyode(acctNo, cvn2, expDate, mobile, amount, cashbackId?) {
    this.SetParam('acctNo', acctNo);
    this.SetParam('cvn2', cvn2);
    this.SetParam('amount', Math.round(amount * 100));
    this.SetParam('mobile', mobile);
    this.SetParam('expDate', expDate);
    
    if (cashbackId) {
      this.SetParam('cashbackId', cashbackId);    
    }

    return this.Post('kpay/api/trade/quickPay/sendVericode');
  }

  // 快捷取现确认
  ConfirmResult(orderNo, smsCode) {
    this.SetParam('orderNo', orderNo);
    this.SetParam('smsCode', smsCode);

    return this.Post('kpay/api/trade/quickPay/confirm');
  }
}
