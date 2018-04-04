import { Injectable } from '@angular/core';

import { HomeService } from '../../providers/homeservice';
import { CardModel } from '../../models/card-model';

@Injectable()
export class CardHelper
{
	private cards: Array<CardModel> = new Array<CardModel>();

	constructor(private service: HomeService) {
		this.service.GetCardList();
		this.service.currentCards.subscribe(
			data => {
				console.log('User card data: ', data);
				this.cards = data;
			}
		);
	}

	// 获取主卡
	public getPrimaryCard(t: number): CardModel {
		let c: CardModel;

		this.cards.forEach((card) => {
			if (parseInt(card.type) === t && parseInt(card.primary) === PRIMARY_CARD) {
				c = card;
			}
		});
		return c;
	}

	// 获取一张卡片
	public getCardById(id: number): CardModel {
		let c: CardModel;

		this.cards.forEach((card) => {
			if (card.id === id) {
				c = card;
			}
		});
		return c;
	}

	// 根据类型刷选卡片
	public filterCard(t: number): Array<CardModel> {
		let cards = this.cards;

		return cards.filter((card) => {
			console.log(t);
			return parseInt(card.type) === t;
		});
	}

	// 设置主卡
	public setPrimary(t: number, id: number): void {
		this.cards.forEach((card, k) => {
			if (parseInt(card.type) === t) {
				if (card.id === id) {
					this.cards[k].primary = PRIMARY_CARD.toString();
				} else {
					this.cards[k].primary = NOT_PRI_CARD.toString();
				}
			}
		});
		this.service.updateCards(this.cards);
	}

	// 删除卡片
	public delCard(id: number) {
		this.cards.forEach((v, k) => {
			if (v.id === id) {
				this.cards.splice(k, 1);
			}
		});
		this.service.updateCards(this.cards);
	}
}

// 主卡
export const PRIMARY_CARD: number = 1;

export const NOT_PRI_CARD: number = 0;

// 信用卡
export const CREDIT_CARD: number = 0;

// 储蓄卡
export const DEPOSIT_CARD: number = 1;