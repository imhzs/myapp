import { Injectable } from '@angular/core';

import { HomeService } from '../../providers/homeservice';
import { CardModel } from '../../models/card-model';
import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';

@Injectable()
export class CardHelper
{
	APP = <any>window.App;

	constructor(private service: HomeService) {
		if (!TypeInfo.IsArrayLike(App.Cards) || App.Cards.length <= 0) {
			this.initData();
		}
	}

	// 初始化数据
	async initData() {
		await this.service.GetCardList().subscribe(
			data => {
				App.Cards = data;
			},
			error => {
				App.Cards = new Array<CardModel>();
			}
		);
	}

	// 获取主卡
	public getPrimaryCard(t: number): CardModel {
		let cards = App.Cards;
		let c: CardModel;

		cards.forEach((card) => {
			if (parseInt(card.type) === t && parseInt(card.primary) === PRIMARY_CARD) {
				c = card;
			}
		});
		return c;
	}

	// 获取一张卡片
	public getCardById(id: number): CardModel {
		let cards = App.Cards;
		let c: CardModel;

		cards.forEach((card) => {
			if (card.id === id) {
				c = card;
			}
		});
		return c;
	}

	// 根据类型刷选卡片
	public filterCard(t: number): Array<CardModel> {
		let cards = App.Cards;

		cards.filter((card) => {
			return parseInt(card.type) === t;
		});
		return cards;
	}

	// 设置主卡
	public setPrimary(t: number, id: number): void {
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

	// 删除卡片
	public delCard(id: number) {
		let cards = App.Cards;
		cards.forEach((v, k) => {
			if (v.id === id) {
				cards.splice(k, 1);
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