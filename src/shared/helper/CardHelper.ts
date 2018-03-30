import { Injectable } from '@angular/core';

import { HomeService } from '../../providers/homeservice';
import { CardOptions } from '../../providers/types/card';
import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';

@Injectable()
export class CardHelper
{
	APP = <any>window.App;

	constructor(private service: HomeService) {
		if (!TypeInfo.IsArrayLike(App.Cards)) {
			this.initData();
		}
	}

	// 初始化数据
	async initData() {
		let res = await this.service.GetCardList().then((resp) => resp.json());
		if (false === res) {
			App.Cards = new Array<CardOptions>();
		} else {
			App.Cards = res;
		}
	}

	// 获取主卡
	public static getPrimaryCard(t: number): CardOptions {
		let cards = App.Cards;
		let c: CardOptions;

		cards.forEach((card) => {
			if (parseInt(card.type) === t && parseInt(card.primary) === PRIMARY_CARD) {
				c = card;
			}
		});
		return c;
	}

	// 获取一张卡片
	public static getOneCard(t: number): CardOptions {
		let cards = App.Cards;
		let c: CardOptions;

		cards.forEach((card) => {
			if (parseInt(card.type) === t) {
				c = card;
			}
		});
		return c;
	}

	// 根据类型刷选卡片
	public static filterCard(t: number): Array<CardOptions> {
		let cards = App.Cards;

		cards.filter((card) => {
			return parseInt(card.type) === t;
		});
		return cards;
	}

	// 设置主卡
	public static setPrimary(t: number, id: number): void {
		let cards = App.Cards;

		cards.forEach((card, k) => {
			if (parseInt(card.type) === t) {
				if (card.id === id) {
					cards[k].primary = PRIMARY_CARD.toString();
				} else {
					cards[k].primary = NOT_PRI_CARD.toString();
				}
			}
		});
		App.Cards = cards;
	}
}

// 主卡
export const PRIMARY_CARD: number = 1;

export const NOT_PRI_CARD: number = 0;

// 信用卡
export const CREDIT_CARD: number = 0;

// 储蓄卡
export const DEPOSIT_CARD: number = 1;