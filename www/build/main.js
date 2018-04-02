webpackJsonp([29],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardHelper; });
/* unused harmony export PRIMARY_CARD */
/* unused harmony export NOT_PRI_CARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREDIT_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEPOSIT_CARD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardHelper = /** @class */ (function () {
    function CardHelper(service) {
        var _this = this;
        this.service = service;
        this.cards = new Array();
        this.service.currentCards.subscribe(function (data) {
            _this.cards = data;
        });
    }
    // 获取主卡
    CardHelper.prototype.getPrimaryCard = function (t) {
        var c;
        this.cards.forEach(function (card) {
            if (parseInt(card.type) === t && parseInt(card.primary) === PRIMARY_CARD) {
                c = card;
            }
        });
        return c;
    };
    // 获取一张卡片
    CardHelper.prototype.getCardById = function (id) {
        var c;
        this.cards.forEach(function (card) {
            if (card.id === id) {
                c = card;
            }
        });
        return c;
    };
    // 根据类型刷选卡片
    CardHelper.prototype.filterCard = function (t) {
        var cards = this.cards;
        cards.filter(function (card) {
            return parseInt(card.type) === t;
        });
        return cards;
    };
    // 设置主卡
    CardHelper.prototype.setPrimary = function (t, id) {
        var _this = this;
        this.cards.forEach(function (card, k) {
            if (parseInt(card.type) === t) {
                if (card.id === id) {
                    _this.cards[k].primary = PRIMARY_CARD.toString();
                }
                else {
                    _this.cards[k].primary = NOT_PRI_CARD.toString();
                }
            }
        });
        this.service.updateCards(this.cards);
    };
    // 删除卡片
    CardHelper.prototype.delCard = function (id) {
        var _this = this;
        this.cards.forEach(function (v, k) {
            if (v.id === id) {
                _this.cards.splice(k, 1);
            }
        });
        this.service.updateCards(this.cards);
    };
    CardHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]) === "function" && _a || Object])
    ], CardHelper);
    return CardHelper;
    var _a;
}());

// 主卡
var PRIMARY_CARD = 1;
var NOT_PRI_CARD = 0;
// 信用卡
var CREDIT_CARD = 0;
// 储蓄卡
var DEPOSIT_CARD = 1;
//# sourceMappingURL=card-helper.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pub_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__ = __webpack_require__(338);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TAuthService = /** @class */ (function (_super) {
    __extends(TAuthService, _super);
    function TAuthService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.App = window.App;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        return _this;
    }
    Object.defineProperty(TAuthService.prototype, "currentUser", {
        // 获取当前登录用户
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // 更新用户数据
    TAuthService.prototype.updateUser = function (user) {
        this.subject.next(Object.assign({}, user));
    };
    // 登录
    TAuthService.prototype.Login = function (Tel, Password) {
        this.SetParam('mobile', Tel.toString());
        this.SetParam('password', this.Md5T(Password).toString());
        this.Post('kpay/api/login');
    };
    // 校验找回密码短信验证码
    TAuthService.prototype.GetFindPwdData = function (tel, VCode) {
        this.SetParam('mobile', tel.toString());
        this.SetParam('veriCode', VCode);
        return this.Post('kpay/api/checkPwdVeriCode');
    };
    // 获取找回密码短信验证码
    TAuthService.prototype.GetResetPwdData = function (tel) {
        this.SetParam('mobile', tel.toString());
        return this.Post('kpay/api/getPwdVericode');
    };
    // 修改用户密码
    TAuthService.prototype.GetchangePsdData = function (tel, pwd, VCode) {
        this.SetParam('mobile', tel.toString());
        this.SetParam('password', this.Md5T(pwd).toString());
        this.SetParam('veriCode', VCode);
        return this.Post('kpay/api/user/changePassword');
    };
    // 获取修改密码验证码
    TAuthService.prototype.getPwdVericode = function (mobile) {
        this.SetParam('mobile', mobile);
        return this.Post('kpay/api/getPwdVericode');
    };
    // 注册
    TAuthService.prototype.SignIn = function (Tel, Password, Code, Recommend) {
        this.SetParam('mobile', Tel.toString());
        this.SetParam('password', this.Md5T(Password).toString());
        this.SetParam('veriCode', Code);
        if (Recommend) {
            this.SetParam('referee', Recommend);
        }
        return this.Post('kpay/api/register');
    };
    // 获取注册验证码
    TAuthService.prototype.GetVerifyCode = function (Tel) {
        this.SetParam('mobile', Tel.toString());
        return this.Post('kpay/api/getVericode');
    };
    // 验证注册验证码
    TAuthService.prototype.CheckVerifyCode = function (Tel, VCode) {
        this.SetParam('mobile', Tel.toString());
        this.SetParam('veriCode', VCode);
        return this.Post('kpay/api/checkRegVeriCode');
    };
    // 退出登陆
    TAuthService.prototype.Logout = function () {
        localStorage.removeItem('token');
        App.UserInfo = null;
        App.DisableHardwareBackButton();
        App.Nav.push(App.RootPage.StartPage);
    };
    Object.defineProperty(TAuthService.prototype, "IsLogin", {
        // 判断登录
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(localStorage.getItem('token'));
        },
        enumerable: true,
        configurable: true
    });
    // 校验token有效性
    TAuthService.prototype.CheckToken = function () {
        return this.Post('kpay/api/checkToken');
    };
    // 修改用户信息
    TAuthService.prototype.ModifyUserInfo = function (json) {
        for (var k in json) {
            this.SetParam(k, json[k]);
        }
        this.Post('kpay/api/user/modify').subscribe(function (data) {
            console.log(data);
        });
    };
    // 获取用户信息
    TAuthService.prototype.GetUserData = function () {
        var _this = this;
        return this.Post('kpay/api/user/info').map(function (resp) {
            var userData = resp.data;
            _this.updateUser(userData);
        })
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    // 第三方登录
    TAuthService.prototype.thirdPartyLogin = function (mobile, key) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__["a" /* CredentialHelper */].setMobile(mobile);
        __WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__["a" /* CredentialHelper */].setSecret(key);
        this.SetParam('mobile', mobile);
        this.SetParam('key', key);
        return this.Post('kpay/api/login/partner').subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__["a" /* CredentialHelper */].setToken(data.data.token);
            _this.GetUserData();
            App.Nav.push('CreditCardPage');
        }, function (error) {
            console.error(error);
        });
    };
    TAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TAuthService);
    return TAuthService;
}(__WEBPACK_IMPORTED_MODULE_4__pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		483,
		26
	],
	"../pages/findpassword/findpassword.module": [
		484,
		25
	],
	"../pages/home/addcreditcard/addcreditcard.module": [
		485,
		24
	],
	"../pages/home/adddeposit/adddeposit.module": [
		486,
		23
	],
	"../pages/home/branchcard/branchcard.module": [
		487,
		22
	],
	"../pages/home/cardinfor/cardinfor.module": [
		488,
		21
	],
	"../pages/home/changecards/changecards.module": [
		489,
		20
	],
	"../pages/home/checkout/checkout.module": [
		490,
		19
	],
	"../pages/home/confirminfo/confirminfo.module": [
		491,
		18
	],
	"../pages/home/creditcard/creditcard.module": [
		492,
		17
	],
	"../pages/home/finalpay/finalpay.module": [
		493,
		16
	],
	"../pages/home/home.module": [
		494,
		15
	],
	"../pages/home/listofbank/listofbank.module": [
		495,
		14
	],
	"../pages/home/resetpassword/resetpassword.module": [
		496,
		13
	],
	"../pages/loan/loan.module": [
		497,
		12
	],
	"../pages/login/login.module": [
		498,
		11
	],
	"../pages/modifypassword/modifypassword.module": [
		499,
		10
	],
	"../pages/register/register.module": [
		500,
		28
	],
	"../pages/setpassword/setpassword.module": [
		501,
		9
	],
	"../pages/start/start.module": [
		502,
		8
	],
	"../pages/tabs/tabs.module": [
		503,
		7
	],
	"../pages/thirdparty/thirdparty.module": [
		504,
		27
	],
	"../pages/ucenter/VIPmembers/VIPmembers.module": [
		511,
		6
	],
	"../pages/ucenter/mycard/mycard.module": [
		505,
		5
	],
	"../pages/ucenter/orders/orders.module": [
		506,
		4
	],
	"../pages/ucenter/records/records.module": [
		507,
		3
	],
	"../pages/ucenter/ucenter.module": [
		508,
		2
	],
	"../pages/ucenter/uinfo/uinfo.module": [
		509,
		1
	],
	"../pages/ucenter/usetup/usetup.module": [
		510,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(27);
/**
 *  https://github.com/apache/cordova-plugin-splashscreen
 *      cordova plugin add cordova-plugin-splashscreen --save
 */

var SplashScreen = /** @class */ (function () {
    function SplashScreen() {
    }
    SplashScreen.show = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(navigator.splashscreen)) {
            console.error('SplashScreen Plugin not Installed.');
            return;
        }
        navigator.splashscreen.show();
    };
    SplashScreen.hide = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(navigator.splashscreen)) {
            console.error('SplashScreen Plugin not Installed.');
            return;
        }
        navigator.splashscreen.hide();
    };
    return SplashScreen;
}());

//# sourceMappingURL=SplashScreen.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(27);
/**
 *  https://github.com/apache/cordova-plugin-statusbar
 *      cordova plugin add cordova-plugin-statusbar --save
 */

var StatusBar = /** @class */ (function () {
    function StatusBar() {
    }
    /** iOS */
    StatusBar.overlaysWebView = function (Overlay) {
        if (Overlay === void 0) { Overlay = true; }
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.overlaysWebView(Overlay);
    };
    StatusBar.styleDefault = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleDefault();
    };
    /** iOS, WP */
    StatusBar.styleLightContent = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleLightContent();
    };
    /** iOS, WP */
    StatusBar.styleBlackTranslucent = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleBlackTranslucent();
    };
    /** iOS, WP */
    StatusBar.styleBlackOpaque = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleBlackOpaque();
    };
    /** iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing. */
    StatusBar.backgroundColorByName = function (colorName) {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.backgroundColorByName(colorName);
    };
    /** iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing. */
    StatusBar.backgroundColorByHexString = function (hexString) {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.backgroundColorByHexString(hexString);
    };
    StatusBar.hide = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.hide();
    };
    StatusBar.show = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.show();
    };
    Object.defineProperty(StatusBar, "isVisible", {
        get: function () {
            if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
                console.error('StatusBar Plugin not Installed.');
                return false;
            }
            return window.StatusBar.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    return StatusBar;
}());

//# sourceMappingURL=StatusBar.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TApplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_root__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TApplication = /** @class */ (function (_super) {
    __extends(TApplication, _super);
    function TApplication(Injector, auth) {
        var _this = _super.call(this, Injector) || this;
        _this.auth = auth;
        // 用户信息
        _this.UserInfo = {};
        // 银行卡信息
        _this.Cards = new Array();
        // 是否VIP会员
        _this.IsVip = false;
        // 是否可以交易标识
        _this.CanTrade = true;
        // 当前信用卡
        _this.CurrentCreditCards = {};
        // 当前储蓄卡
        _this.CurrentDepositCard = {};
        _this.RootPage = __WEBPACK_IMPORTED_MODULE_2__shared_root__;
        _this.HardwareBackButtonDisabled = false;
        _this.BackButtonPressed = false;
        window.App = _this;
        _this.Platform.ready().then(function () {
            _this.Platform.registerBackButtonAction(function () {
                if (_this.HardwareBackButtonDisabled) {
                    return;
                }
                if (App.Nav.canGoBack()) {
                    App.Nav.pop();
                    return;
                }
                if (_this.BackButtonPressed) {
                    _this.Platform.exitApp();
                }
                else {
                    _this.ShowToast('再按一次退出5u卡贝');
                    _this.BackButtonPressed = true;
                    setTimeout(function () {
                        _this.BackButtonPressed = false;
                    }, 2000);
                }
            });
            if (_this.IsAndroid) {
                window.addEventListener('native.keyboardshow', _this.keyboardShowHandler.bind(_this));
                window.addEventListener('native.keyboardhide', _this.keyboardHideHandler.bind(_this));
            }
            _this.auth.currentUser.subscribe(function (data) {
                console.log('User Data');
                console.log(data);
                _this.UserInfo = data;
            });
        });
        return _this;
    }
    TApplication.prototype.keyboardShowHandler = function (e) {
        if (window.scrollY < 100) {
            window.scrollTo(0, e.keyboardHeight);
        }
    };
    TApplication.prototype.keyboardHideHandler = function (e) {
        if (window.scrollY != 0) {
            window.scrollTo(0, 0);
        }
    };
    TApplication.prototype.DisableHardwareBackButton = function () {
        this.HardwareBackButtonDisabled = true;
    };
    TApplication.prototype.EnableHardwareBackButton = function () {
        this.HardwareBackButtonDisabled = false;
    };
    TApplication.prototype.ShowToast = function (MsgOrConfig) {
        if (MsgOrConfig instanceof Object) {
            return _super.prototype.ShowToast.call(this, MsgOrConfig);
        }
        else {
            return _super.prototype.ShowToast.call(this, { message: MsgOrConfig, position: 'middle', cssClass: 'toast-default', duration: 1500 });
        }
    };
    TApplication.prototype.ShowLoading = function (MsgOrConfig) {
        if (MsgOrConfig instanceof Object) {
            return _super.prototype.ShowLoading.call(this, MsgOrConfig);
        }
        else {
            return _super.prototype.ShowLoading.call(this, { spinner: 'ios-small', content: MsgOrConfig, cssClass: 'loading-default' });
        }
    };
    TApplication.prototype.ShowError = function (err, duration, position) {
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'middle'; }
        return _super.prototype.ShowError.call(this, err, {
            duration: duration, position: position,
            style: 'toast-error', prefix_lang: 'hint.'
        });
    };
    Object.defineProperty(TApplication.prototype, "UserFace", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(localStorage.getItem('imageface'))) {
                var avatar = localStorage.getItem('imageface');
                return { backgroundImage: "url(" + avatar + ")" };
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    TApplication.prototype.IsReal = function (page) {
        return false;
        // if (App.UserInfo.idAuthed !== 1) {
        //   App.Nav.push(App.RootPage.NoldentifyPage);
        // } else if(page) {
        //   App.Nav.push(page);
        // } else {
        //   return;
        // }
    };
    Object.defineProperty(TApplication.prototype, "IsIdAuthed", {
        // 是否已完成身份认证
        get: function () {
            return false;
            // return App.UserInfo.idAuthed > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TApplication.prototype, "IsBankcardAuthed", {
        // 是否完成储蓄卡验证
        get: function () {
            return false;
            // return App.UserInfo.bankcardAuthed > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TApplication.prototype, "IsCompleteAuthed", {
        // 是否已完成身份认证
        get: function () {
            return this.IsIdAuthed && this.IsBankcardAuthed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TApplication.prototype, "IconFace", {
        get: function () {
            // if(this.UserFace === null && this.UserInfo.sex === '男') {
            //   return true;
            // }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TApplication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* TAuthService */]])
    ], TApplication);
    return TApplication;
}(__WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__["a" /* TAppController */]));

//# sourceMappingURL=application.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pub_service__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var _ = __webpack_require__(339);

var HomeService = /** @class */ (function (_super) {
    __extends(HomeService, _super);
    function HomeService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        return _this;
    }
    // 身份证认证
    HomeService.prototype.VerifyId = function (idcardNo, name, mobile) {
        this.SetParam('idcardNo', idcardNo);
        this.SetParam('name', name);
        if (mobile) {
            this.SetParam('mobile', mobile);
        }
        return this.Post('kpay/api/idcard/auth');
    };
    // 获取当日分润明细
    HomeService.prototype.GetProfitToday = function () {
        return this.Post('kpay/api/user/myprofit/today');
    };
    // 获取银行卡列表
    HomeService.prototype.GetCardList = function () {
        var _this = this;
        return this.Post('kpay/api/bankcard/list').map(function (resp) {
            var cards = resp.data;
            _this.updateCards(cards);
        }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(HomeService.prototype, "currentCards", {
        // 用户当前卡片
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // 更新卡片数据
    HomeService.prototype.updateCards = function (cards) {
        this.subject.next(_.concat(new Array(), cards));
    };
    // 设置银行卡主卡
    HomeService.prototype.SetPrimCard = function (cardId) {
        this.SetParam('cardId', cardId);
        return this.Post('kpay/api/bankcard/setPrimary');
    };
    // 添加信用卡
    HomeService.prototype.AddCreditCard = function (cardNo, mobile) {
        this.SetParam('cardNo', cardNo);
        this.SetParam('mobile', mobile);
        return this.Post('kpay/api/bankcard/addCredit');
    };
    // 添加储蓄卡
    HomeService.prototype.AddDeposiCard = function (cardNo, bankName, bankNo, branchName, mobile) {
        this.SetParam('cardNo', cardNo);
        this.SetParam('bankName', bankName);
        this.SetParam('bankNo', bankNo);
        this.SetParam('branchName', branchName);
        this.SetParam('mobile', mobile);
        return this.Post('kpay/api/bankcard/addDeposit');
    };
    // 删除银行卡
    HomeService.prototype.DelCard = function (cardId) {
        this.SetParam('cardId', cardId);
        return this.Post('kpay/api/bankcard/del');
    };
    // 获取银行总行信息
    HomeService.prototype.GetTolBanks = function () {
        return this.Post('kpay/api/bank/info');
    };
    //获取银行支行信息
    HomeService.prototype.GetBranchBanks = function (massage) {
        this.SetParam('name', massage);
        return this.PostNoLoading('kpay/api/bank/list');
    };
    // 取现可用返现券
    HomeService.prototype.GetAvaCash = function (amount) {
        this.SetParam('amount', amount);
        return this.Post('kpay/api/cash/cashback/available');
    };
    // 获取银行取现列表
    HomeService.prototype.GetBankPage = function (cardId, enterCardId, amount, cashbackId) {
        this.SetParam('cardId', cardId);
        this.SetParam('enterCardId', enterCardId);
        this.SetParam('amount', Math.round(amount * 100));
        this.SetParam('token', localStorage.getItem('token'));
        if (cashbackId) {
            this.SetParam('cashbackId', cashbackId);
        }
        return this.Post('kpay/api/trade/quickPay/request');
    };
    // 快捷取现获取验证码
    HomeService.prototype.GetVerifyode = function (acctNo, cvn2, expDate, mobile, amount, cashbackId) {
        this.SetParam('acctNo', acctNo);
        this.SetParam('cvn2', cvn2);
        this.SetParam('amount', Math.round(amount * 100));
        this.SetParam('mobile', mobile);
        this.SetParam('expDate', expDate);
        if (cashbackId) {
            this.SetParam('cashbackId', cashbackId);
        }
        App.ShowLoading('验证中...');
        return this.Post('kpay/api/trade/quickPay/sendVericode');
    };
    // 快捷取现确认
    HomeService.prototype.ConfirmResult = function (orderNo, smsCode) {
        this.SetParam('orderNo', orderNo);
        this.SetParam('smsCode', smsCode);
        return this.Post('kpay/api/trade/quickPay/confirm');
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], HomeService);
    return HomeService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=homeservice.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fileservice__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthPage = /** @class */ (function () {
    function AuthPage(fileService) {
        this.fileService = fileService;
        this.CardFront = 'front';
        this.CardBack = 'back';
        this.ExampleFront = '';
        this.ExampleBank = '';
        this.HeadTitle = '身份认证';
        this.PreviewFiles = {
            back: '',
            front: ''
        };
        this.DefaultImg = 'assets/imgs/zhengm.png';
        this.PreviewFiles[this.CardFront] = this.PreviewFiles[this.CardBack] = this.DefaultImg;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.formGroupCard = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            idCardNo: this.idCardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/)
            ]),
            username: this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(2)
            ])
        });
    };
    // 选择文件
    AuthPage.prototype.OnChangeFile = function (cardType, e) {
        var _this = this;
        console.log(cardType);
        this.fileService.showAddImage().then(function (rst) {
            _this.PreviewFiles[cardType] = rst.base64;
            _this.ouploadFile(cardType, rst.file);
        }).catch(function (error) {
            console.log(error);
        });
    };
    // 上传文件
    AuthPage.prototype.ouploadFile = function (cType, file) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileService.IdentityAuth(file, cType)];
                    case 1:
                        res = _a.sent();
                        if (false === res && cType == this.CardFront) {
                            App.ShowError('识别身份证失败，请手动输入');
                        }
                        if (false !== res && cType == this.CardFront) {
                            this.idCardNo.setValue(res.idno);
                            this.username.setValue(res.name);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\auth\auth.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="auth-page">\n\n	<ion-grid class="page-content">\n\n		<ion-row p-t-5>\n\n			<ion-col col-12>\n\n				<ion-label f-13 no-margin>证件照片</ion-label>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-6 (click)="OnChangeFile(CardFront, $event)">\n\n				<div class="d-flex justify-content-center card border-1px">\n\n					<img class="img" [src]="PreviewFiles[CardFront]" *ngIf="PreviewFiles[CardFront] != DefaultImg" />\n\n					<button class="bg-transparent" icon-only *ngIf="PreviewFiles[CardFront] == DefaultImg">\n\n						<ion-icon name="ios-add-circle-outline" color="primary"></ion-icon>\n\n					</button>\n\n					<ion-label class="desc" *ngIf="PreviewFiles[CardFront] == DefaultImg">身份证反面照片</ion-label>\n\n				</div>\n\n			</ion-col>\n\n			<ion-col col-6 (click)="OnChangeFile(CardBack, $event)">\n\n				<div class="d-flex justify-content-center card border-1px">\n\n					<img class="img" [src]="PreviewFiles[CardBack]" *ngIf="PreviewFiles[CardBack] != DefaultImg" />\n\n					<button class="bg-transparent" icon-only *ngIf="PreviewFiles[CardBack] == DefaultImg">\n\n						<ion-icon name="ios-add-circle-outline" color="primary"></ion-icon>\n\n					</button>\n\n					<ion-label class="desc" *ngIf="PreviewFiles[CardBack] == DefaultImg">身份证反面照片</ion-label>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<!-- 示例 -->\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<div class="d-flex justify-content-start align-items-start card example border-1px">\n\n					<ion-badge color="primary" class="badge">示例</ion-badge>\n\n					<img class="img" src="assets/imgs/zhengm.png" />\n\n				</div>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex justify-content-start align-items-start card example border-1px">\n\n					<ion-badge color="primary" class="badge">示例</ion-badge>\n\n					<img class="img" src="assets/imgs/zhengm.png" />\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<div class="page-content" m-t-10>\n\n		<form novalidate [formGroup]="formGroupCard" m-t-10>\n\n	    <ion-grid>\n\n	      <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n\n	        <ion-col col-4>姓名</ion-col>\n\n	        <ion-col col-8><ion-input type="text" placeholder="请输入姓名" formControlName="username"></ion-input></ion-col>\n\n	      </ion-row>\n\n\n\n	      <ion-row class="d-flex align-items-center form-ctrl">\n\n	        <ion-col col-4>身份证号</ion-col>\n\n	        <ion-col col-8><ion-input type="text" placeholder="请输入身份证号" formControlName="idCardNo"></ion-input></ion-col>\n\n	      </ion-row>\n\n	    </ion-grid>\n\n	  </form>\n\n  </div>\n\n  <ion-grid>\n\n  	<ion-row>\n\n  		<ion-col col-12>\n\n  			<button type="button" ion-button color="primary" full>立即认证</button>\n\n  		</ion-col>\n\n  	</ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\auth\auth.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_fileservice__["b" /* FileService */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindPasswordPage = /** @class */ (function () {
    function FindPasswordPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = '找回密码';
        this.VCodeText = '获取验证码';
    }
    FindPasswordPage.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            tel: this.tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
        });
    };
    // 倒计时
    FindPasswordPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = count + 's' + '后重新获取';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    FindPasswordPage.prototype.GetCode = function () {
        this.Service.GetResetPwdData(this.formGroup.value.tel).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    FindPasswordPage.prototype.GetTelCode = function () {
        this.Service.GetFindPwdData(this.formGroup.value.tel, this.formGroup.value.VCode);
    };
    Object.defineProperty(FindPasswordPage.prototype, "FindDisabled", {
        get: function () {
            if (this.tel.invalid || this.VCode.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FindPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findpwd',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\findpassword\findpassword.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n      <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <div>\n\n      <ion-grid text-center>\n\n        <form novalidate [formGroup]="formGroup" autocomplete="off">\n\n          <ion-row class="reg-line">\n\n            <ion-col col-12>\n\n              <ion-input type="number" placeholder="请输入手机号码" formControlName="tel" required></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="reg-line">\n\n            <ion-col col-7>\n\n              <ion-input type="text" placeholder="请输入验证码" formControlName="VCode" required></ion-input>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button outline (click)="GetCode()" [disabled]="tel.invalid">\n\n                <span ion-text f-13>{{VCodeText}}</span>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n        <ion-row m-t-30>\n\n          <ion-col col-12>\n\n              <button ion-button full color="primary" [class.btn-disabled]="FindDisabled" [disabled]="FindDisabled" (click)=" GetTelCode()">下一步</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\findpassword\findpassword.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], FindPasswordPage);
    return FindPasswordPage;
}());

//# sourceMappingURL=findpassword.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeInfo; });
/* TypeInfo namespace */
var TypeInfo;
(function (TypeInfo) {
    TypeInfo.UNDEFINED = typeof (void 0);
    TypeInfo.BOOLEAN = typeof true;
    TypeInfo.NUMBER = typeof 0;
    TypeInfo.STRING = typeof '';
    TypeInfo.OBJECT = typeof {};
    TypeInfo.FUNCTION = typeof function () { };
    /**
     * Returns true if the value Assigned (defined and not null)
     * @param value
     * @returns {boolean}
     */
    function Assigned(value) {
        return (typeof value !== TypeInfo.UNDEFINED) && (value !== null);
    }
    TypeInfo.Assigned = Assigned;
    /**
     * Returns true if the value defined
     * @param value
     * @returns {boolean}
     */
    function Defined(value) {
        return (typeof value !== TypeInfo.UNDEFINED);
    }
    TypeInfo.Defined = Defined;
    /**
     * Returns true if the value is ture null
     * @param value
     * @returns {boolean}
     */
    function IsNull(value) {
        return (typeof value !== TypeInfo.UNDEFINED) && (value === null);
    }
    TypeInfo.IsNull = IsNull;
    /**
     * Returns true if the value parameter is a true/false
     * @param value
     * @returns {boolean}
     */
    function IsBoolean(value) {
        return typeof value === TypeInfo.BOOLEAN;
    }
    TypeInfo.IsBoolean = IsBoolean;
    /**
     * Returns true if the value parameter is a number.
     * @param value
     * @param allowNaN Default is true.
     * @returns {boolean}
     */
    function IsNumber(value, allowNaN) {
        if (allowNaN === void 0) { allowNaN = true; }
        return typeof value === TypeInfo.NUMBER && (allowNaN || !isNaN(value));
    }
    TypeInfo.IsNumber = IsNumber;
    /**
     * Returns true if is a number and is NaN.
     * @param value
     * @returns {boolean}
     */
    function IsTrueNaN(value) {
        return typeof value === TypeInfo.NUMBER && isNaN(value);
    }
    TypeInfo.IsTrueNaN = IsTrueNaN;
    /**
     * Returns true if the value parameter is a string.
     * @param value
     * @returns {boolean}
     */
    function IsString(value) {
        return typeof value === TypeInfo.STRING;
    }
    TypeInfo.IsString = IsString;
    /**
     * Returns true if the value is a boolean, string, number, null, or undefined.
     * @param value
     * @returns {boolean}
     */
    function IsPrimitive(value) {
        var t = typeof value;
        switch (t) {
            case TypeInfo.BOOLEAN:
            case TypeInfo.STRING:
            case TypeInfo.NUMBER:
            case TypeInfo.UNDEFINED:
                return true;
            case TypeInfo.OBJECT:
                return value === null;
        }
        return false;
    }
    TypeInfo.IsPrimitive = IsPrimitive;
    /**
     * Returns true if the value parameter is a function.
     * @param value
     * @returns {boolean}
     */
    function IsFunction(value) {
        return typeof value === TypeInfo.FUNCTION;
    }
    TypeInfo.IsFunction = IsFunction;
    /**
     * Returns true if the value parameter is an object.
     * @param value
     * @param allowNull If false (default) null is not considered an object.
     * @returns {boolean}
     */
    function IsObject(value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return typeof value === TypeInfo.OBJECT && (allowNull || value !== null);
    }
    TypeInfo.IsObject = IsObject;
    function IsArrayLike(instance) {
        /*
        * NOTE:
        *
        * Functions:
        * Enumerating a function although it has a .length property will yield nothing or unexpected results.
        * Effectively, a function is not like an array.
        *
        * Strings:
        * Behave like arrays but don't have the same exact methods.
        */
        return Assigned(instance) && ((instance instanceof Array) ||
            IsString(instance) ||
            (!IsFunction(instance) && HasMember(instance, 'length')));
    }
    TypeInfo.IsArrayLike = IsArrayLike;
    function ZeroArray(ary) {
        if (ary.fill) {
            ary.fill(0);
        }
        else {
            for (var I = 0; I < ary.length; I++)
                ary[I] = 0;
        }
    }
    TypeInfo.ZeroArray = ZeroArray;
    function ArrayCopy(Dst, Src, SrcOffset, Count, DstOffset) {
        if (DstOffset === void 0) { DstOffset = 0; }
        if (Src.subarray && Dst.subarray) {
            Dst.set(Src.subarray(SrcOffset, SrcOffset + Count), DstOffset);
        }
        else {
            for (var i = 0; i < Count; i++)
                Dst[DstOffset + i] = Src[SrcOffset + i];
        }
    }
    TypeInfo.ArrayCopy = ArrayCopy;
    /**
     *  Guarantees a number value or NaN instead.
     *  @param value
     *  @returns {number}
     */
    function NumberOrNaN(value) {
        return isNaN(value) ? NaN : value;
    }
    TypeInfo.NumberOrNaN = NumberOrNaN;
    /**
     */
    function HasMember(value, property) {
        return Assigned(value) && !IsPrimitive(value) && (property in value);
    }
    TypeInfo.HasMember = HasMember;
    /**
     */
    function HasMemberOfType(instance, property, type) {
        return HasMember(instance, property) && typeof (instance[property]) === type;
    }
    TypeInfo.HasMemberOfType = HasMemberOfType;
    function Create(Creater) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Creater(args);
    }
    TypeInfo.Create = Create;
    /* Decorator */
    /** Class Decorator:
     *      seal class for futher extendion or add properties
     */
    function Sealed() {
        return function (Cls) {
            Object.seal(Cls);
            Object.seal(Cls.prototype);
        };
    }
    TypeInfo.Sealed = Sealed;
    /** Class Decorator:
     *      static implements decorator
     *
     *      interface FooStatic
     *      {
     *          function bar();
     *      }
     *
     *      @StaticImplements<FooStatic>
     *      class Foo
     *      {
     *          static function bar() {};   // shows error if not implements this
     *      }
     */
    function StaticImplements() {
        return function (constructor) { };
    }
    TypeInfo.StaticImplements = StaticImplements;
})(TypeInfo || (TypeInfo = {}));
Object.freeze(TypeInfo);
//# sourceMappingURL=TypeInfo.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddCreditCardPage = /** @class */ (function () {
    function AddCreditCardPage(Service, navParams, Auth, fileService) {
        this.Service = Service;
        this.navParams = navParams;
        this.Auth = Auth;
        this.fileService = fileService;
        this.App = window.App;
        this.HeadTitle = "添加信用卡";
        this.AddWrong = false;
        this.WrongMsg = '';
        this.BankCardFront = __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["a" /* BANKCARD_FRONT */];
        this.GetIdCard(App.UserInfo.idCardNo);
    }
    AddCreditCardPage.prototype.ngOnInit = function () {
        this.Form_Group_Card = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            CardNo: this.CardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(16)
            ]),
            Mobile: this.Mobile = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ])
        });
    };
    Object.defineProperty(AddCreditCardPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CardNo.invalid || this.Mobile.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AddCreditCardPage.prototype.GetIdCard = function (IdNo) {
        if (__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(IdNo)) {
            this.ShowIDCard = IdNo.substr(0, 6);
            for (var i = 0; i < (IdNo.length - 10); i++) {
                this.ShowIDCard += '*';
            }
            this.ShowIDCard += IdNo.substr(-4);
        }
    };
    // 提交数据
    AddCreditCardPage.prototype.AddCard = function () {
        var _this = this;
        this.Service.AddCreditCard(this.Form_Group_Card.value.CardNo, this.Form_Group_Card.value.Mobile).subscribe(function (res) {
            _this.Auth.currentUser.subscribe(function () { return App.Nav.push(App.RootPage[_this.navParams.data]); });
        });
    };
    // 选择文件
    AddCreditCardPage.prototype.OnChangeFile = function (e) {
        var _this = this;
        this.fileService.showAddImage().then(function (rst) {
            console.log(rst);
            _this.uploadFile(rst.file, __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["a" /* BANKCARD_FRONT */]);
        }).catch(function (error) {
            console.log(error);
        });
    };
    // 保存文件
    AddCreditCardPage.prototype.uploadFile = function (file, cType) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileService.OcrUpload('file', file, cType)];
                    case 1:
                        res = _a.sent();
                        if (false !== res) {
                            this.CardNo.setValue(res.cardNo.replace(/\s*/g, ''));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddCreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcreditcard',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\addcreditcard\addcreditcard.html"*/'<ion-header no-border>\n\n  <!-- 添加信用卡 -->\n\n  <ion-toolbar no-padding>\n\n      <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="adddepositcam-page">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <span ion-text f-13 text-gray>请绑定持卡人的具有银联标识信用卡，此信用卡用于付款刷卡</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content">\n\n    <ion-row class="d-flex align-items-center form-ctrlborder-bottom-1px">\n\n      <ion-col col-3>持卡人</ion-col>\n\n      <ion-col>{{App.UserInfo.name}}</ion-col>\n\n    </ion-row>\n\n    <ion-row class="d-flex align-items-center form-ctrl">\n\n      <ion-col col-3>身份证</ion-col>\n\n      <ion-col>{{ShowIDCard}}</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="page-content" m-t-15>\n\n    <form novalidate [formGroup]="Form_Group_Card">\n\n      <ion-grid>\n\n        <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n\n          <ion-col col-3>卡号</ion-col>\n\n          <ion-col col-7><ion-input type=\'number\' placeholder="请输信用卡卡号" formControlName="CardNo"></ion-input></ion-col>\n\n          <ion-col col-2>\n\n            <button ion-button icon-only class="bg-transparent btn-h-auto btn-no-shadow" (click)="onChangeFile(BankCardFront)">\n\n              <ion-icon name="qr-scanner" text-black-light></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="d-flex align-items-center form-ctrl">\n\n          <ion-col col-3>手机号</ion-col>\n\n          <ion-col> <ion-input type=\'number\' placeholder="请输银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n  <ion-row justify-content-center m-t-15>\n\n    <ion-col col-11>\n\n      <button class="bgc-grad-primary bgc-header" \n\n        ion-button round block f-1-6 \n\n        [disabled]="CompleteBtnIsDisabled" \n\n        [class.btn-disabled]="CompleteBtnIsDisabled"\n\n        (click)="AddCard()">保存</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\addcreditcard\addcreditcard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["b" /* FileService */]])
    ], AddCreditCardPage);
    return AddCreditCardPage;
}());

//# sourceMappingURL=addcreditcard.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddDepositPage = /** @class */ (function () {
    function AddDepositPage(Service, navParams, Auth, fileService) {
        this.Service = Service;
        this.navParams = navParams;
        this.Auth = Auth;
        this.fileService = fileService;
        this.HeadTitle = "添加储蓄卡";
        this.BankName = '请选择开户银行';
        this.BranchName = '请选择具体开户支行';
        this.BranchCode = '';
        this.TranCode = '';
        this.BranchList = [];
        this.BankCode = '';
        this.BankCardFront = __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["a" /* BANKCARD_FRONT */];
        this.App = window.App;
    }
    AddDepositPage.prototype.ngOnInit = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(App.UserInfo)) {
            return;
        }
        this.GetIdCard(App.UserInfo['idCardNo']);
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            CardNo: this.CardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(16)
            ]),
            Mobile: this.Mobile = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ])
        });
    };
    Object.defineProperty(AddDepositPage.prototype, "CompleteBtnIsDisabled", {
        // 卡号是否符合规则
        get: function () {
            if (this.CardNo.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // 验证身份证
    AddDepositPage.prototype.GetIdCard = function (IdNo) {
        if (!__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(IdNo)) {
            return;
        }
        this.IdCard = IdNo.substr(0, 6);
        for (var i = 0; i < (IdNo.length - 10); i++) {
            this.IdCard += '*';
        }
        this.IdCard += IdNo.substr(-4);
    };
    // 选择开户行
    AddDepositPage.prototype.ClickOpenBank = function () {
        var _this = this;
        if (this.CardNo.invalid) {
            return App.ShowError('请先输入银行卡卡号');
        }
        App.ShowModal(App.RootPage.ListofbankPage).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.BankName = data.name;
                    _this.BankCode = data.code;
                    _this.BranchCode = '';
                    _this.BranchName = '请选择具体开户支行';
                }
            });
        });
    };
    // 选择支行
    AddDepositPage.prototype.ClickBranchBank = function () {
        var _this = this;
        if (!this.BankCode) {
            return App.ShowError('请先选择开户银行');
        }
        App.ShowModal(App.RootPage.BranchcardPage, { Bank: this.BankName, Code: this.BankCode }).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.BranchName = data.name;
                    _this.BranchCode = _this.BankCode;
                    _this.TranCode = data.bankCode;
                }
            });
        });
    };
    // 完成添加
    AddDepositPage.prototype.Finish = function () {
        var _this = this;
        this.Service.AddDeposiCard(this.Form_Group.value.CardNo, this.BankName, this.TranCode, this.BranchName, this.Form_Group.value.Mobile).subscribe(function (res) {
            _this.Auth.currentUser.subscribe(function (data) {
                App.Nav.push(App.RootPage[_this.navParams.data]);
            });
        });
    };
    // 选择文件
    AddDepositPage.prototype.onChangeFile = function (cType, e) {
        var _this = this;
        console.log(cType);
        this.fileService.showAddImage().then(function (rst) {
            console.log(rst);
            console.log(rst.file);
            _this.uploadFile(rst.file, cType);
        }).catch(function (error) {
            console.log(error);
        });
    };
    // 上传文件
    AddDepositPage.prototype.uploadFile = function (file, cType) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileService.OcrUpload('file', file, cType)];
                    case 1:
                        res = _a.sent();
                        if (false === res) {
                            return [2 /*return*/];
                        }
                        this.CardNo.setValue(res.cardNo.replace(/\s*/g, ''));
                        this.BankName = res.bank;
                        this.BankCode = '105';
                        return [2 /*return*/];
                }
            });
        });
    };
    AddDepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adddeposit',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\adddeposit\adddeposit.html"*/'<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="h-adddepositcam-page">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <span ion-text f-13 text-gray>请绑定持卡人本人储蓄卡，此储蓄卡用于收款</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-b-10>\n\n    <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n\n      <ion-col col-3>持卡人</ion-col>\n\n      <ion-col col-8>{{App.UserInfo.name}}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="d-flex align-items-center form-ctrl">\n\n      <ion-col col-3>身份证</ion-col>\n\n      <ion-col col-8>{{IdCard}}</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <form novalidate [formGroup]="Form_Group">\n\n    <div class="page-content">\n\n      <ion-grid>\n\n        <ion-row class="d-flex align-items-center border-bottom-1px form-ctrl">\n\n          <ion-col col-3>卡号</ion-col>\n\n          <ion-col col-7><ion-input type="number" placeholder="请输入储蓄卡卡号" formControlName="CardNo" no-margin></ion-input></ion-col>\n\n          <ion-col col-2>\n\n            <button ion-button icon-right class="bg-transparent btn-h-auto btn-no-shadow" (click)="onChangeFile(BankCardFront)">\n\n              <ion-icon name="qr-scanner" text-black-light></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row (click)="ClickOpenBank()" class="d-flex align-items-center border-bottom-1px form-ctrl">\n\n          <ion-col col-3>银行</ion-col>\n\n          <ion-col col-8>\n\n            <span ion-text text-gray>{{BankName}}</span>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="d-flex align-items-center border-bottom-1px form-ctrl" (click)="ClickBranchBank()">\n\n          <ion-col col-3>支行</ion-col>\n\n          <ion-col col-8>\n\n            <span ion-text text-gray>{{BranchName}}</span>\n\n          </ion-col>\n\n          <ion-col text-right text-black-light><ion-icon>&#xf3d1;</ion-icon></ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="d-flex align-items-center form-ctrl">\n\n          <ion-col col-3>手机号</ion-col>\n\n          <ion-col col-8><ion-input type="Tel" placeholder="请输入银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <ion-row justify-content-center m-t-20>\n\n      <ion-col col-11>\n\n        <button class="bgc-grad-primary bgc-header" \n\n          [class.btn-disabled]="CompleteBtnIsDisabled" ion-button round block f-1-6 tappable \n\n          [disabled]="CompleteBtnIsDisabled" \n\n          (click)="Finish()">完成</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\adddeposit\adddeposit.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["b" /* FileService */]])
    ], AddDepositPage);
    return AddDepositPage;
}());

//# sourceMappingURL=adddeposit.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var _ = __webpack_require__(339);
var BranchcardPage = /** @class */ (function () {
    function BranchcardPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "选择开户支行";
        this.BranchList = [];
    }
    BranchcardPage.prototype.ngOnInit = function () {
        this.BankName = this.navParams.get('Bank');
        this.BankCode = this.navParams.get('Code');
        this.Service.GetBranchBanks(this.BankName).then(function (res) {
            // this.BranchList = res;
        });
        this.debounced = _.debounce(this.GetKey, 500);
    };
    BranchcardPage.prototype.GetKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = this.BankName + ',' + this.KeyWord;
                this.Service.GetBranchBanks(params).then(function (res) {
                    // this.BranchList = res;
                });
                return [2 /*return*/];
            });
        });
    };
    BranchcardPage.prototype.SearchBank = function () {
        this.debounced();
    };
    BranchcardPage.prototype.SelectedBranch = function (item) {
        App.ActiveView.dismiss({ name: item.bankName, bankCode: item.bankCode });
    };
    BranchcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-branchcard',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\branchcard\branchcard.html"*/'<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n  <ion-toolbar class="search-bar">\n\n    <ion-searchbar  (ngModelChange)="SearchBank()" placeholder="请输关键字搜索,如\'福田\'" [(ngModel)]="KeyWord"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="bankcard-list">\n\n    <ion-item *ngFor="let item of BranchList" (click)="SelectedBranch(item)">\n\n      <ion-avatar item-start>\n\n        <img src="assets/banklogo/bank_{{BankCode}}.png">\n\n      </ion-avatar>\n\n      <h2>{{item.bankName}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\branchcard\branchcard.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], BranchcardPage);
    return BranchcardPage;
}());

//# sourceMappingURL=branchcard.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInforPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardInforPage = /** @class */ (function () {
    function CardInforPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "确认信息";
        this.VCodeText = '获取验证码';
        this.State = 0;
        this.ShowFront = false;
        this.ShowBack = false;
        this.Voucher = [];
        this.Params = {
            InputAmount: this.navParams.get('OutAmount'),
            OutputAmount: this.navParams.get('InAmount'),
            CreditCard: this.navParams.get('CreditCard'),
            DepositCard: this.navParams.get('DepositCard'),
            Code: this.navParams.get('Code'),
            CreditCode: this.navParams.get('CreditCode'),
            DepositCode: this.navParams.get('DepositCode'),
            Mobile: this.navParams.get('Mobile')
        };
    }
    CardInforPage.prototype.ngOnInit = function () {
        this.Form_Group_Info = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            CVN: this.CVN = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)
            ]),
            CardDate: this.CardDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            VerifyCode: this.VerifyCode = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
        this.GetAvaCash();
    };
    // 倒计时
    CardInforPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = '已发送' + count + 's';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    _this.State = 0;
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    // 获取可用优惠券
    CardInforPage.prototype.GetAvaCash = function () {
        this.Service.GetAvaCash(this.Params.OutputAmount).subscribe(function (res) {
            // this.Voucher = res;
        });
    };
    Object.defineProperty(CardInforPage.prototype, "VCodeBtnIsDisabled", {
        get: function () {
            if (this.CVN.invalid || this.CardDate.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardInforPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CVN.invalid || this.CardDate.invalid || this.VerifyCode.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CardInforPage.prototype.GetVerifyCode = function () {
        var _this = this;
        if (this.VoucherId) {
            this.Service.GetVerifyode(this.Params.Code, this.Form_Group_Info.value.CVN, this.Form_Group_Info.value.CardDate, this.Params.Mobile, this.Params.OutputAmount, this.VoucherId)
                .subscribe(function (res) {
                _this.times();
            });
        }
        else {
            this.Service.GetVerifyode(this.Params.Code, this.Form_Group_Info.value.CVN, this.Form_Group_Info.value.CardDate, this.Params.Mobile, this.Params.OutputAmount)
                .subscribe(function (res) {
                _this.times();
            });
        }
    };
    CardInforPage.prototype.ConfirmCode = function () {
        var _this = this;
        if (!this.OrderNo) {
            App.ShowError('验证码输入不正确');
            return;
        }
        this.Service.ConfirmResult(this.OrderNo, this.Form_Group_Info.value.VerifyCode).subscribe(function (res) {
            App.Nav.push(App.RootPage.ConfirminfoPage, { InCard: _this.Params.DepositCard, FinalAmount: _this.Params.InputAmount, CardCode: _this.Params.DepositCode });
        });
    };
    CardInforPage.prototype.ShowBackEmp = function () {
        this.ShowBack = true;
    };
    CardInforPage.prototype.ShowFrontEmp = function () {
        this.ShowFront = true;
    };
    CardInforPage.prototype.CloseCard = function () {
        this.ShowBack = this.ShowFront = false;
    };
    CardInforPage.prototype.ClickUserVoucher = function () {
    };
    CardInforPage.prototype.ClickUserChosen = function () {
    };
    CardInforPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardInfor',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\cardinfor\cardinfor.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n  <ion-toolbar no-padding>\n\n    <ion-grid class="list-grid-default bgc-grad-primary">\n\n      <ion-row padding-vertical>\n\n        <ion-col>\n\n          <ul class="list-row-inner">\n\n            <li class="title" text-center>\n\n              <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.OutputAmount}}</div>\n\n              <p class="color-fopacity-7">收款金额</p>\n\n            </li>\n\n            <li class="title" text-center>\n\n              <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.InputAmount}}</div>\n\n              <p class="color-fopacity-7">到账金额</p>\n\n            </li>\n\n          </ul>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class="grid-inforlist-default" m-b-10>\n\n    <ion-row class="border-last">\n\n      <ion-col col-4>收款储蓄卡</ion-col>\n\n      <ion-col>\n\n        <span class="bank-face"><img src="assets/banklogo/bank_{{Params.DepositCode}}.png"></span>\n\n        <span>{{Params.DepositCard}}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <form novalidate [formGroup]="Form_Group_Info">\n\n    <ion-grid class="grid-inforlist-default" m-b-10>\n\n      <ion-row>\n\n        <ion-col col-4>付款信用卡</ion-col>\n\n        <ion-col>\n\n          <span class="bank-face"><img src="assets/banklogo/bank_{{Params.CreditCode}}.png"></span>\n\n          <span>{{Params.CreditCard}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4>CVN2</ion-col>\n\n        <ion-col col-6><ion-input type=\'number\' placeholder="卡片背面末三位数" formControlName="CVN"></ion-input></ion-col>\n\n        <ion-col (click)="ShowBackEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n\n      </ion-row>\n\n      <ion-row class="border-last">\n\n        <ion-col col-4>有效期</ion-col>\n\n        <ion-col col-6><ion-input type=\'number\' placeholder="卡片正面有效期" formControlName="CardDate"></ion-input></ion-col>\n\n        <ion-col (click)="ShowFrontEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="grid-inforlist-default" m-b-10 *ngIf="Voucher.length > 0">\n\n      <ion-row class="border-last" (click)="ClickUserVoucher()">\n\n        <ion-col col-4>抵扣券</ion-col>\n\n        <ion-col col-5><span ion-text color="orange">{{Voucher.length}}张可用</span></ion-col>\n\n        <ion-col text-right col-2>去使用</ion-col>\n\n        <ion-col text-right><ion-icon>&#xf3d1;</ion-icon></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="grid-inforlist-default" m-b-10>\n\n      <ion-row [ngStyle]="{\'padding\':\'6px 12px 5px 0\'}">\n\n        <ion-col col-4>手机号</ion-col>\n\n        <ion-col col-4>{{Params.Mobile}}</ion-col>\n\n        <ion-col text-right>\n\n          <button class="btn" ion-button p-l-5 p-r-5 f-1-5 [disabled]="VCodeBtnIsDisabled" (click)="GetVerifyCode()" tappable>{{VCodeText}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="border-last">\n\n        <ion-col col-4>验证码</ion-col>\n\n        <ion-col><ion-input type=\'text\' placeholder="请输入验证码" formControlName="VerifyCode"></ion-input></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  <ion-row justify-content-center m-t-10>\n\n    <ion-col col-11>\n\n      <button class="bgc-grad-primary bgc-header" ion-button block round f-1-6 [disabled]="CompleteBtnIsDisabled" (click)="ConfirmCode()" tappable>确认</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<!-- 确认信息阴影弹框正面 样式在grid.scss-->\n\n<div *ngIf="ShowFront">\n\n  <div class="shadow-bgc"></div>\n\n  <div class="shadow-cont">\n\n    <ion-grid>\n\n      <ion-row justify-content-center>\n\n        <ion-col col-10 text-center>\n\n          <img src="assets/imgs/main1.png">\n\n          <div m-t-10 ion-text color="light">\n\n            <p no-margin>有效期为信用卡正面"VALID THRU"右侧日期</p>\n\n            <p no-margin>如输入"1210"</p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row  justify-content-center class="banks-contC">\n\n        <ion-col col-5>\n\n          <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="ShowBack">\n\n  <div class="shadow-bgc"></div>\n\n  <!-- 确认信息阴影弹框反面 -->\n\n  <div class="shadow-cont">\n\n    <ion-grid>\n\n      <ion-row justify-content-center>\n\n        <ion-col col-10 text-center>\n\n          <img src="assets/imgs/main2.png">\n\n          <div m-t-10 ion-text color="light">\n\n            <p no-margin>CVN2为信用卡背面末三位数字</p>\n\n            <p no-margin>如输入"267"</p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row  justify-content-center class="banks-contC">\n\n        <ion-col col-5>\n\n          <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\cardinfor\cardinfor.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */]])
    ], CardInforPage);
    return CardInforPage;
}());

//# sourceMappingURL=cardinfor.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangecardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangecardsPage = /** @class */ (function () {
    function ChangecardsPage(Service, navParams, viewCtrl) {
        this.Service = Service;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.HeadTitle = "我的信用卡";
        this.BankList = new Array();
    }
    ChangecardsPage.prototype.ngOnInit = function () {
        console.log(this.navParams.get('id'));
        this.BankList = [];
        for (var _i = 0, _a = this.navParams.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.primary === '1')
                item.chose = true;
            this.BankList.push(item);
        }
    };
    ChangecardsPage.prototype.AddCards = function () {
        App.Nav.push(App.RootPage.AddCreditPage);
    };
    ChangecardsPage.prototype.SelectedCard = function (item) {
        if (item.chose) {
            return;
        }
        for (var _i = 0, _a = this.BankList; _i < _a.length; _i++) {
            var i = _a[_i];
            i.chose = false;
        }
        item.chose = !item.chose;
        this.Service.SetPrimCard(item.id).subscribe(function (data) {
            App.ActiveView.dismiss(item);
        });
    };
    ChangecardsPage.prototype.confirmCard = function () {
        console.log(this.autoManufacturers);
        var data = { id: this.autoManufacturers };
        this.viewCtrl.dismiss(data);
    };
    ChangecardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changecards',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\changecards\changecards.html"*/'<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <!-- <app-toolbar HasBack="true" [Title]="HeadTitle" BtnIcon="&#xf273;" (BtnIconEvent)="AddCards()"></app-toolbar> -->\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle" BtnText="确定" (BtnTextEvent)="confirmCard()"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list radio-group [(ngModel)]="autoManufacturers">\n\n  \n\n    <ion-item>\n\n      <ion-label>Cord</ion-label>\n\n      <ion-radio value="cord"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Duesenberg</ion-label>\n\n      <ion-radio value="duesenberg"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Hudson</ion-label>\n\n      <ion-radio value="hudson"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Packard</ion-label>\n\n      <ion-radio value="packard"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Studebaker</ion-label>\n\n      <ion-radio value="studebaker"></ion-radio>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\changecards\changecards.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], ChangecardsPage);
    return ChangecardsPage;
}());

//# sourceMappingURL=changecards.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navParams, service) {
        this.navParams = navParams;
        this.service = service;
        // 标题
        this.HeadTitle = '确认收款';
        // 是否可提交标识
        this.CanSubmited = true;
        var amount = this.navParams.get('amount');
        this.PayAmount = amount.InputAmount;
        this.ReceiveAmount = amount.OutputAmount;
        this.CreditCard = this.navParams.get('creditCard');
        this.DepositCard = this.navParams.get('depositCard');
    }
    CheckoutPage.prototype.ionViewDidEnter = function () {
        this.CanSubmited = true;
    };
    // 确认付款
    CheckoutPage.prototype.Pay = function () {
        var date = new Date();
        var hour = date.getHours();
        if (hour < 9 || hour > 21) {
            App.ShowError('交易时间为9:00-21:00');
            return;
        }
        this.CanSubmited = false;
        this.service.GetBankPage(this.CreditCard.id, this.DepositCard.id, this.PayAmount).subscribe(function (data) {
            // 跳转银联页面
            if (/^[http:\/\/|https:\/\/](.*)?/.test(data)) {
                (new __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]()).create(encodeURI(data));
            }
            else if (data.indexOf('<html>') == -1) {
                App.ShowError(data.respMsg);
            }
            else {
                App.Nav.push(App.RootPage.FinalpayPage, { innerHtml: data });
            }
        });
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\checkout\checkout.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="h-checkout-page">\n\n	<ion-grid class="page-content" p-h-40>\n\n		<ion-row align-items-center class="border-bottom-1px" p-b-5>\n\n			<ion-col col-12>\n\n				<div class="f-flex flex-fill flex-column justify-content-center align-items-center l-h-d pay-amount">\n\n					<p text-center><span ion-text f-13 text-black-light>支付金额(元)</span></p>\n\n					<p text-center><span ion-text f-20 class="amount">10000.00</span></p>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row align-items-center p-b-10>\n\n			<ion-col col-12>\n\n				<div class="f-flex flex-fill flex-column justify-content-center align-items-center receive-amount">\n\n					<p text-center><span ion-text f-13 text-black-light>到账金额(元)</span></p>\n\n					<p text-center><span ion-text f-35 class="amount">9950.00</span></p>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-grid class="page-content bank-wrp" m-t-10>\n\n		<ion-row align-items-center class="border-bottom-1px" p-v-10>\n\n			<ion-col col-6>\n\n				<p><span ion-text>付款信用卡</span></p>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex align-items-center justify-content-end">\n\n					<ion-img src="assets/banklogo/bank_308.png" class="img" alt="icon"></ion-img>\n\n					<span ion-text m-l-5>中信银行(1843)</span>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row align-items-center p-v-10>\n\n			<ion-col col-6>\n\n				<p><span ion-text>收款储蓄卡</span></p>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex align-items-center justify-content-end">\n\n					<ion-img src="assets/banklogo/bank_308.png" class="img" alt="icon"></ion-img>\n\n					<span ion-text m-l-5>招商银行(1843)</span>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-12>\n\n				<button type="button" ion-button full color="primary" \n\n					(cilck)="Pay()" [disabled]="!CanSubmited" \n\n					[class.btn-disabled]="!CanSubmited">去付款</button>\n\n			</ion-col>\n\n		</ion-row>		\n\n	</ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\checkout\checkout.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirminfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirminfoPage = /** @class */ (function () {
    function ConfirminfoPage(navParams) {
        this.navParams = navParams;
        this.App = window.App;
        this.CardInfo = this.navParams.get('InCard');
        this.Amount = this.navParams.get('FinalAmount');
        this.CardCode = this.navParams.get('CardCode');
    }
    ConfirminfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirminfo',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\confirminfo\confirminfo.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <ion-row class="bgc-grad-primary grid-confirm-card">\n\n      <ion-col text-center>\n\n      <p><ion-icon f-5-0>&#xf2bc;</ion-icon><span f-3-0>收款成功</span></p>\n\n        <div><span f-1-5>￥</span><span f-5-0>{{Amount}}</span></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class="list-grid-default" m-b-10>\n\n    <ion-row align-items-center p-l-10>\n\n      <ion-col p-t-8 p-b-8>\n\n        <ul class="list-row-inner">\n\n          <li class="title infor">收款储蓄卡</li>\n\n          <li class="note">\n\n            <span class="bank-face"><img src="assets/banklogo/bank_{{CardCode}}.png"></span>\n\n            <span ion-text color="dark">{{CardInfo}}</span>\n\n          </li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="list-grid-default" m-b-10>\n\n    <ion-row align-items-center p-l-10>\n\n      <ion-col p-t-8 p-b-8>\n\n        <ul class="list-row-inner">\n\n          <li class="title infor">订单状态</li>\n\n          <li class="note" *ngIf="Status; then Done; else Failed">\n\n            <span ion-text color="orange">交易成功</span>\n\n          </li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row align-items-center p-l-10>\n\n      <ion-col p-t-8 p-b-8>\n\n        <ul class="list-row-inner">\n\n          <li class="title infor">预计到账时间</li>\n\n          <li class="note"><span ion-text color="dark" >实时到账</span></li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-row text-right p-r-10 ion-text color="gray"><ion-col>*如未实时到账，一般最晚第二个工作日可到账</ion-col></ion-row>\n\n  <ion-row justify-content-center m-t-50  [navPush]="App.RootPage.TabsPage">\n\n    <ion-col col-11><button class="bgc-grad-primary bgc-header" round ion-button block  f-1-6>完 成</button></ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\confirminfo\confirminfo.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfirminfoPage);
    return ConfirminfoPage;
}());

//# sourceMappingURL=confirminfo.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreditCardPage = /** @class */ (function () {
    function CreditCardPage(navCtrl, cardHelper, auth, homeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.cardHelper = cardHelper;
        this.auth = auth;
        this.homeService = homeService;
        this.App = window.App;
        this.CreditCards = new Array();
        this.DepositCards = new Array();
        this.HeadTitle = "刷卡提现";
        // 金额
        this.Amount = {
            InputAmount: undefined,
            OutputAmount: undefined
        };
        this.homeService.GetCardList();
        this.auth.currentUser.subscribe(function (data) {
            _this.InitData();
        });
    }
    CreditCardPage.prototype.ngOnInit = function () {
    };
    // 初始化数据
    CreditCardPage.prototype.InitData = function () {
        this.CreditCards = this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["a" /* CREDIT_CARD */]);
        this.DepositCards = this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["c" /* DEPOSIT_CARD */]);
        this.CurrentCreditCard = this.cardHelper.getPrimaryCard(__WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["a" /* CREDIT_CARD */]);
        this.CurrentDepositCard = this.cardHelper.getPrimaryCard(__WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["c" /* DEPOSIT_CARD */]);
        console.log('CurrentCreditCard', this.CurrentCreditCard);
        if (!__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.CurrentCreditCard) && this.CreditCards.length > 0) {
            this.CurrentCreditCard = this.CreditCards[0];
        }
        if (!__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.CurrentDepositCard) && this.DepositCards.length > 0) {
            this.CurrentCreditCard = this.DepositCards[0];
        }
    };
    // 计算到账金额
    CreditCardPage.prototype.InputAmount = function () {
        if (!this.Amount.InputAmount) {
            this.Amount.OutputAmount = undefined;
            return;
        }
        this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Rate / 100)) * 10) / 10;
    };
    // 确认提交
    CreditCardPage.prototype.ConfirmPay = function () {
        var date = new Date();
        var hour = date.getHours();
        if (hour < 9 || hour > 22) {
            App.ShowError('交易时间为9:00-22:00');
            return;
        }
        if (this.CreditCards.length == 0 || this.DepositCards.length == 0) {
            App.ShowError('请先添加银行卡和储蓄卡');
            return;
        }
        this.InputAmount();
        this.navCtrl.push('CheckoutPage', { creditCard: this.CurrentCreditCard, depositCard: this.CurrentDepositCard, amount: this.Amount });
    };
    // 更换信用卡
    CreditCardPage.prototype.ChangeCreditCard = function () {
        var _this = this;
        App.ShowModal('ChangecardsPage', { data: this.CreditCards, t: __WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["a" /* CREDIT_CARD */] }).then(function (modal) {
            modal.onDidDismiss(function (data) {
                _this.CurrentCreditCard = _this.cardHelper.getCardById(data.id);
            });
        });
    };
    // 更换储蓄卡
    CreditCardPage.prototype.ChangeDepositCard = function () {
        var _this = this;
        App.ShowModal('ChangecardsPage', { data: this.DepositCards, t: __WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["c" /* DEPOSIT_CARD */] }).then(function (modal) {
            modal.onDidDismiss(function (data) {
                _this.CurrentDepositCard = _this.cardHelper.getCardById(data.id);
            });
        });
    };
    // 添加信用卡
    CreditCardPage.prototype.AddCreditCard = function () {
        this.navCtrl.push('AddCreditCardPage');
    };
    // 添加储蓄卡
    CreditCardPage.prototype.AddDepositCard = function () {
        this.navCtrl.push('AddDepositPage');
    };
    Object.defineProperty(CreditCardPage.prototype, "CanGoNext", {
        // 是否可以点击下一步
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].IsObject(this.CurrentCreditCard) && __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].IsObject(this.CurrentDepositCard) && this.Amount.InputAmount > 100;
        },
        enumerable: true,
        configurable: true
    });
    CreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creditcard',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\creditcard\creditcard.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="h-creditcard-page">\n\n  <ion-grid class="page-content" p-h-10>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-12>\n\n        <ion-label>付款信用卡</ion-label>\n\n      </ion-col>\n\n      <!-- 未添加信用卡 -->\n\n      <ion-col col-12 class="card no-card" text-center *ngIf="!CurrentCreditCard">\n\n        <button ion-button icon-left class="bg-transparent" (click)="AddCreditCard()">\n\n          <ion-icon name="add-circle" color="primary"></ion-icon>\n\n          <span ion-text color="primary">添加信用卡</span>\n\n        </button>\n\n      </ion-col>\n\n      <!-- 未添加信用卡 -->\n\n\n\n      <!-- 已添加信用卡 -->\n\n      <ion-col col-12 class="d-flex flex-column justify-content-between card has-card" p-h-10 p-v-10 *ngIf="CurrentCreditCard">\n\n        <div class="d-flex justify-content-between">\n\n          <div class="flex-fill d-flex align-items-center justify-content-start">\n\n            <ion-img class="icon-bank" src="assets/banklogo/bank_308.png" alt="银行"></ion-img>\n\n            <span ion-text f-14 text-light m-l-5>招商银行</span>\n\n          </div>\n\n          <div class="flex-fill" text-right>\n\n            <button type="button" ion-button class="bg-transparent btn-change" (click)="ChangeCreditCard()" no-padding no-margin>更换</button>\n\n          </div>\n\n        </div>\n\n        <div>\n\n          <span ion-text text-light>**** **** **** 1483</span>\n\n        </div>\n\n      </ion-col>\n\n      <!-- 已添加信用卡 -->\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-12>\n\n        <ion-label>收款储蓄卡</ion-label>\n\n      </ion-col>\n\n      <!-- 未添加储蓄卡 -->\n\n      <ion-col col-12 class="card no-card" text-center *ngIf="!CurrentDepositCard">\n\n        <button ion-button icon-left class="bg-transparent" (click)="AddDepositCard()">\n\n          <ion-icon name="add-circle" color="primary"></ion-icon>\n\n          <span ion-text color="primary">添加储蓄卡</span>\n\n        </button>\n\n      </ion-col>\n\n      <!-- 未添加储蓄卡 -->\n\n\n\n      <!-- 已添加储蓄卡 -->\n\n      <ion-col col-12 class="d-flex flex-column justify-content-between card has-card" p-h-10 p-v-10 *ngIf="CurrentDepositCard">\n\n        <div class="d-flex justify-content-between">\n\n          <div class="flex-fill d-flex align-items-center justify-content-start">\n\n            <ion-img class="icon-bank" src="assets/banklogo/bank_308.png" alt="银行"></ion-img>\n\n            <span ion-text f-14 text-light m-l-5>招商银行</span>\n\n          </div>\n\n          <div class="flex-fill" text-right>\n\n            <button type="button" ion-button class="bg-transparent btn-change" (click)="ChangeDepositCard()" no-padding no-margin>更换</button>\n\n          </div>\n\n        </div>\n\n        <div>\n\n          <span ion-text text-light>**** **** **** 1483</span>\n\n        </div>\n\n      </ion-col>\n\n      <!-- 已添加储蓄卡 -->\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10 p-b-10>\n\n    <ion-row class="border-bottom-1px">\n\n      <ion-col>\n\n        <ion-label>收款金额(元)</ion-label>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-input type="number" name="amount" ([ngModel])="Amount.InputAmount" no-margin f-30 placeholder="500-20000" p-l-5></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row p-t-5>\n\n      <ion-col class="l-h-d">\n\n        <p ion-text class="text-fee">费率：{{Rate}}%+3元，保底8元</p>\n\n        <p ion-text class="text-t">交易时间：9:00-21:00，立即到账</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button type="button" ion-button full [disabled]="!CanGoNext" [class.btn-disabled]="!CanGoNext">下一步</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\creditcard\creditcard.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["b" /* CardHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_helper_card_helper__["b" /* CardHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */]) === "function" && _d || Object])
    ], CreditCardPage);
    return CreditCardPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=creditcard.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinalpayPage = /** @class */ (function () {
    function FinalpayPage(navParams, sanitizer) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.headTitle = '银联支付';
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: '',
            share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
        };
        this.flag = true;
        this.this_html = '';
        this.htmltext = '';
        this.formAction = '';
        // 分享控制的配置
        this.shareConfig = {
            isShow: false
        };
    }
    FinalpayPage.prototype.ngOnInit = function () {
        var bodyText = this.navParams.get('innerHtml').toString();
        if (bodyText.indexOf('form') == -1 && bodyText.indexOf('body') > -1) {
            this.flag = false;
            var tmp_html = bodyText.match(/<body[^>]*>(.*)?<\/body>/)[1];
            tmp_html = this.sanitizer.bypassSecurityTrustHtml(tmp_html);
            this.this_html = tmp_html;
        }
        else if (bodyText.indexOf('form') > -1) {
            this.flag = true;
            var arr = bodyText.match(/<form[^>]*>(.*)?<\/form>/);
            var tmpHtml = arr[1];
            this.formAction = this.getFormAction(arr[0]);
            // tmpHtml = tmpHtml.replace('<form', '<form target="targetIframe"');
            tmpHtml = this.sanitizer.bypassSecurityTrustHtml(tmpHtml);
            this.htmltext = tmpHtml;
        }
        var browser = this.navParams.get('browser');
        if (browser) {
            this.flag = false;
            this.browser.title = browser.title;
            this.browser.url = browser.url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
            if (browser.share) {
                this.browser.share = browser.share;
            }
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
    };
    FinalpayPage.prototype.ionViewDidEnter = function () {
        if (this.flag) {
            this.paymentForm.nativeElement.submit();
        }
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.onprogress();
    };
    FinalpayPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    FinalpayPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                Object(__WEBPACK_IMPORTED_MODULE_3_timers__["clearTimeout"])(timer);
            }
            else {
                // 随机进度
                _this.browser.progress += _this.random(1, 5);
                // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
                if (_this.browser.progress > 90) {
                    _this.browser.progress = 90;
                }
                _this.browser.proObj.style.width = _this.browser.progress + '%';
                _this.onprogress();
            }
        }, timeout);
    };
    // 如果iframe页面加载成功后
    FinalpayPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 重新加载页面
    FinalpayPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    FinalpayPage.prototype.getFormAction = function (s) {
        var arr = s.match(new RegExp(/action=['|"]([^'|"]*)/));
        if (arr.length > 1) {
            return arr[1];
        }
        return '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('paymentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FinalpayPage.prototype, "paymentForm", void 0);
    FinalpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finalpay',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\finalpay\finalpay.html"*/'\n\n<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="headTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <div class="progress" [hidden]="browser.isLoaded">\n\n    <div class="progress-inner" id="progress"></div>\n\n  </div>\n\n  <div *ngIf="flag">\n\n    <iframe [src]="browser.secUrl" id="iframe" class="iframe" \n\n      sandbox="allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-forms"\n\n      (load)="loaded()"\n\n      name="targetIframe">\n\n    </iframe>\n\n    <form [action]="formAction" #paymentForm name="pay_form" method="post" target="targetIframe">\n\n      <div [innerHtml]="htmltext"></div>\n\n    </form>\n\n  </div>\n\n  <div *ngIf="!flag" [innerHtml]="this_html"></div>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\finalpay\finalpay.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FinalpayPage);
    return FinalpayPage;
}());

//# sourceMappingURL=finalpay.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(zone, Service, nav) {
        this.zone = zone;
        this.Service = Service;
        this.nav = nav;
        this.App = window.App;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row class="border-bottom-1px">\n\n      <ion-col col-1>\n\n        <ion-icon name="volume-up"></ion-icon>\n\n      </ion-col>\n\n      <ion-col cil-11>我的通知</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n\n\n<ion-content class="home-page">\n\n  <ion-grid class="page-content">\n\n    <ion-row align-items-center justify-content-center class="border-bottom-1px" p-b-10>\n\n      <ion-col col-10 col-xs-8 col-md-6 col-lg-4>\n\n        <button type="button" class="btn-home-pay" ion-button full>刷卡收款</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row p-t-15>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.AuthPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/a-credit.png" alt="办信用卡" width="60" height="60" />\n\n          <label text-center>办信用卡</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.AddDepositCamPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="身份认证" width="60" height="60" />\n\n          <label text-center>身份认证</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.MycardPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="会员福利" width="60" height="60" />\n\n          <label text-center>会员福利</label>\n\n        </a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>新手大礼包</ion-label>\n\n        <div>\n\n          <img src="assets/imgs/zhengm.png" />\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>  \n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>vip专区</ion-label>\n\n        <div>\n\n          <img src="assets/imgs/zhengm.png" />\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>  \n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>精选信用卡</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="办信用卡" width="60" height="60" />\n\n          <label text-center>办信用卡</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="身份认证" width="60" height="60" />\n\n          <label text-center>身份认证</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="会员福利" width="60" height="60" />\n\n          <label text-center>会员福利</label>\n\n        </a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListofbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListofbankPage = /** @class */ (function () {
    function ListofbankPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "选择开户银行";
    }
    ListofbankPage.prototype.ngOnInit = function () {
        this.Service.GetTolBanks().subscribe(function (data) {
            // this.BankList = data;
        });
    };
    ListofbankPage.prototype.SelectedBank = function (item) {
        App.ActiveView.dismiss({ name: item.bankName, code: item.id });
    };
    ListofbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listofbank',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\listofbank\listofbank.html"*/'<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="bankcard-list">\n\n    <ion-item *ngFor="let item of BankList" (click)="SelectedBank(item)">\n\n      <ion-avatar item-start>\n\n        <img src="assets/banklogo/bank_{{item.id}}.png">\n\n      </ion-avatar>\n\n      <h2>{{item.bankName}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\listofbank\listofbank.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], ListofbankPage);
    return ListofbankPage;
}());

//# sourceMappingURL=listofbank.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.App = window.App;
        this.HeadTitle = "重置密码";
        this.tel = this.navParams.get('mobile');
        this.VCode = this.navParams.get('code');
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pwd: this.pwd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    ResetPasswordPage.prototype.clickgetlogin = function () {
        if (this.conpwd === this.formGroup.value.pwd) {
            this.Service.GetchangePsdData(this.tel, this.formGroup.value.pwd, this.VCode);
        }
        else {
            App.ShowError('两次输入密码不一致');
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\home\resetpassword\resetpassword.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle" ></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <ion-grid text-center>\n\n      <form novalidate [formGroup]="formGroup" autocomplete="off">\n\n        <ion-row class="border-bottom-1px">\n\n          <ion-col col-12>\n\n            <ion-input type="password" placeholder="请输入密码" formControlName="pwd" required></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      <ion-row class="border-bottom-1px">\n\n        <ion-col col-12>\n\n          <ion-input type="password" placeholder="请确认密码" [(ngModel)]="conpwd"></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row m-t-30>\n\n        <ion-col col-12>\n\n          <button ion-button full color="primary" (click)="clickgetlogin()" [class.btn-disabled]="pwd.invalid" [disabled]="pwd.invalid">完成</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\home\resetpassword\resetpassword.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoanPage = /** @class */ (function () {
    function LoanPage(sanitizer) {
        this.sanitizer = sanitizer;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: '',
            share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
        };
        this.shareConfig = {
            isShow: false
        }; // 分享控制的配置
        var browser_url = 'http://www.werunpay.com/h5/carefreeFinance-ibox/index.html?source=1124';
        if (browser_url) {
            this.browser.title = '借贷';
            this.browser.url = browser_url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser_url);
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
    }
    LoanPage.prototype.ionViewDidLoad = function () {
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.onprogress();
    };
    // 生成随机数
    LoanPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    LoanPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    LoanPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 显示Popver选项
    LoanPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var cb = {
            refresh: function () {
                _this.reload();
            },
            close: function () {
                App.Nav.pop();
            },
            share: null
        };
        if (this.browser.share) {
            cb.share = function () {
                _this.share();
            };
        }
    };
    // 重新加载页面
    LoanPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    // 分享页面（作为popover的回调）
    LoanPage.prototype.share = function () {
        this.shareConfig.isShow = true;
        /*if(this.browser.share) {
          SocialSharing.share(this.browser.share.title, this.browser.share.content, '', this.browser.share.url).then(() => {
    
          }, (err) => {
            // Error!
            alert('错误：分享失败！' + err);
          });
        }*/
    };
    LoanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loan',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\loan\loan.html"*/'<ion-header no-border>\n\n  <ion-navbar class="app-navbar-primary">\n\n    <ion-title>{{browser.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="progress" [hidden]="browser.isLoaded">\n\n  <div class="progress-inner" id="progress"></div>\n\n  </div>\n\n\n\n  <iframe id="iframe" class="iframe"\n\n    sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n    [src]="browser.secUrl"\n\n    (load)="loaded()">\n\n  </iframe>\n\n</ion-content>\n\n\n\n  '/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\loan\loan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoanPage);
    return LoanPage;
}());

//# sourceMappingURL=loan.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(Auth, navParams, nav) {
        this.Auth = Auth;
        this.navParams = navParams;
        this.nav = nav;
        this.App = window.App;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
    };
    Object.defineProperty(LoginPage.prototype, "LoginDisabled", {
        get: function () {
            if (this.Tel.invalid || this.Pass.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.Login = function () {
        this.Auth.Login(this.formGroup.value.Tel, this.formGroup.value.Pass);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\login\login.html"*/'<ion-content>\n\n  <div class="register">\n\n    <ion-row class="bgc-grad-primary back-btn">\n\n      <ion-col col-12 f-1-6>\n\n        <span>登 录\n\n          <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <ion-col class="col" col-3 p-v-40 text-center>\n\n        <img src="assets/imgs/58icon.png">\n\n      </ion-col>\n\n    </ion-row>\n\n    <div>\n\n      <ion-grid text-center>\n\n        <form novalidate [formGroup]="formGroup" autocomplete="off">\n\n          <ion-row class="border-bottom-1px">\n\n            <ion-col col-12>\n\n              <ion-input type="Tel" placeholder="请输入手机号" formControlName="Tel" required></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="border-bottom-1px">\n\n            <ion-col col-12>\n\n              <ion-input type="password" placeholder="请输入密码" formControlName="Pass" required></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row m-t-30>\n\n            <ion-col col-12>\n\n              <button ion-button full (click)="Login()" [class.btn-disabled]="LoginDisabled" [disabled]="LoginDisabled">登录</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n        <button ion-button outline no-border [navPush]="App.RootPage.FindPasswordPage" ion-text color="primary" p-t-5>忘记密码 ?</button>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\login\login.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyPasswordPage = /** @class */ (function () {
    function ModifyPasswordPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "修改密码";
        this.VCodeText = '获取验证码';
        this.pwdVisible = false;
        this.tel = "****";
    }
    ModifyPasswordPage.prototype.ngOnInit = function () {
        if (App.UserInfo.mobile) {
            this.tel = App.UserInfo.mobile.toString().substr(0, 3) + this.tel + App.UserInfo.mobile.toString().substr(-4);
        }
        this.FormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            Password: this.Password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
    };
    //倒计时
    ModifyPasswordPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = count + 's' + '后重新获取';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    ModifyPasswordPage.prototype.GetTelCode = function () {
        this.Service.getPwdVericode(App.UserInfo.mobile).subscribe(function (res) {
        });
    };
    Object.defineProperty(ModifyPasswordPage.prototype, "ConfirmBtnIsDisabled", {
        get: function () {
            if (this.VCode.invalid || this.Password.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ModifyPasswordPage.prototype.ConfirmModify = function () {
        this.Service.GetchangePsdData(App.UserInfo.mobile, this.FormGroup.value.Password, this.FormGroup.value.VCode);
    };
    ModifyPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifypwd',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\modifypassword\modifypassword.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="page-content">\n\n    <ion-grid text-center>\n\n      <ion-row class="border-bottom-1px form-ctrl">\n\n        <ion-col col-12>\n\n          <ion-input type="Tel" [(ngModel)]="tel" readonly></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n      <form novalidate [formGroup]="FormGroup" autocomplete="off">\n\n        <ion-row class="border-bottom-1px form-ctrl">\n\n          <ion-col col-7>\n\n            <ion-input type="text" placeholder="请输入验证码" formControlName="VCode" required></ion-input>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            <button ion-button class="btn-no-shadow btn-form" (click)="GetTelCode()">\n\n              <span ion-text>{{VCodeText}}</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="border-bottom-1px form-ctrl">\n\n          <ion-col col-12>\n\n            <ion-input type="password" placeholder="请设置新密码"  formControlName="Password" required></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      <ion-row m-t-30>\n\n        <ion-col col-12>\n\n          <button ion-button full color="primary" [class.btn-disabled]="ConfirmBtnIsDisabled" [disabled]="ConfirmBtnIsDisabled" (click)="ConfirmModify()">确认</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n    \n\n    '/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\modifypassword\modifypassword.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]) === "function" && _a || Object])
    ], ModifyPasswordPage);
    return ModifyPasswordPage;
    var _a;
}());

//# sourceMappingURL=modifypassword.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.State = 0;
        this.VCodeText = "获取验证码";
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ])
        });
    };
    // 倒计时
    RegisterPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = '已发送' + count + 's';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    _this.State = 0;
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    // 验证手机号码以及验证码
    RegisterPage.prototype.GetVeriyCode = function () {
        this.Service.GetVerifyCode(this.formGroup.value.Tel).subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterPage.prototype.NextTable = function () {
        this.Service.CheckVerifyCode(this.formGroup.value.Tel, this.formGroup.value.VCode).subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\register\register.html"*/'<ion-content>\n\n  <div class=" register">\n\n    <ion-row class="bgc-grad-primary back-btn">\n\n      <ion-col col-12 f-1-6>\n\n        <span>注 册\n\n          <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-3 p-v-40 text-center>\n\n        <img src="assets/imgs/58icon.png">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-grid text-center>\n\n      <form novalidate [formGroup]="formGroup" autocomplete="off">\n\n        <ion-row class="reg-line border-bottom-1px">\n\n          <ion-col col-12>\n\n            <ion-input type="Tel" placeholder="请输入手机号" formControlName="Tel" required></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="reg-line border-bottom-1px">\n\n          <ion-col col-7>\n\n            <ion-input type="text" placeholder="请输入手机验证码" formControlName="VCode" required></ion-input>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            <button ion-button outline [disabled]="Tel.invalid" (click)="GetVeriyCode()">{{VCodeText}}</button>\n\n          </ion-col>\n\n        </ion-row>\n\n       <ion-row m-t-30 m-b-10>\n\n          <ion-col col-12>\n\n            <button ion-button full color="primary" (click)="NextTable()" [class.btn-disabled]="Tel.invalid || VCode.invalid" [disabled]="Tel.invalid || VCode.invalid">下一步</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <span f-1-0>点击"下一步"即表示您同意</span><span ion-text color="primary">《5u卡贝用户使用协议》</span>\n\n      </form>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\register\register.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPasswordPage = /** @class */ (function () {
    function SetPasswordPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.App = window.App;
        this.PassClear = false;
        this.PassWord = '';
        this.ConPassWord = '';
        this.PassWordType = 'password';
        this.HeadTitle = "设定密码";
        this.Tel = this.navParams.get('mobile');
        this.VCode = this.navParams.get('code');
    }
    SetPasswordPage.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    SetPasswordPage.prototype.PassType = function () {
        console.log(this.PassClear);
        this.PassClear = !this.PassClear;
        if (this.PassClear) {
            this.PassWordType = 'text';
        }
        else {
            this.PassWordType = "password";
        }
    };
    Object.defineProperty(SetPasswordPage.prototype, "ResIsDisabled", {
        get: function () {
            if (this.Pass.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // 注册 
    SetPasswordPage.prototype.OnRegister = function () {
        if (this.ConPassWord != this.PassWord) {
            App.ShowError("两次输入的密码不一致");
            return;
        }
        this.Service.SignIn(this.Tel, this.formGroup.value.Pass, this.VCode);
    };
    SetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setpwd',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\setpassword\setpassword.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="page-content">\n\n    <ion-grid>\n\n      <form novalidate [formGroup]="formGroup" autocomplete="off">\n\n        <ion-row class="border-bottom-1px">\n\n          <ion-col cil-12>\n\n            <ion-input type="password" [attr.type]="PassWordType" placeholder="请设置密码" formControlName="Pass" required [(ngModel)]="PassWord"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="border-bottom-1px">\n\n          <ion-col col-12>\n\n            <ion-input type="password" [attr.type]="PassWordType" placeholder="请确认密码"  formControlName="Pass" required [(ngModel)]="ConPassWord"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row m-t-30>\n\n          <ion-col col-12>\n\n            <button ion-button full color="primary" [class.btn-disabled]="ResIsDisabled" (click)="OnRegister()" [disabled]="ResIsDisabled">注册</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\setpassword\setpassword.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], SetPasswordPage);
    return SetPasswordPage;
}());

//# sourceMappingURL=setpassword.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartPage = /** @class */ (function () {
    function StartPage() {
        this.App = window.App;
    }
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\start\start.html"*/'<ion-content>\n\n  <div class="start-app">\n\n    <div class="wall" text-center>\n\n      <ion-row>\n\n        <ion-col><b>有资金需求，自己搞定</b></ion-col>\n\n      </ion-row>\n\n      <ion-row m-v-35>\n\n        <ion-col><img src="assets/imgs/start.png" alt="" width="70%"></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col><p>信用卡可提现   超低手续费</p><p>资金秒到账   安全有保障</p></ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <ion-row class="action-btn" justify-content-center>\n\n      <ion-col col-5>\n\n        <button [navPush]="App.RootPage.RegisterPage" ion-button full color="primary">注册</button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button [navPush]="App.RootPage.LoginPage" class="active" ion-button full color="primary">登录</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\start\start.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.App = window.App;
        // tab1Root =  App.RootPage.HomePage;
        // tab2Root =  App.RootPage.LoanPage
        // tab4Root =  App.RootPage.UcenterPage;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'LoanPage';
        this.tab4Root = 'UcenterPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\tabs\tabs.html"*/'<ion-tabs class="bottom-tabs">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="tab-home" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="借贷" tabIcon="tab-dr" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="tab-mine" tabsHideOnSubPages="true"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MycardPage = /** @class */ (function () {
    function MycardPage(Servie, Auth, navCtrl, cardHelper) {
        this.Servie = Servie;
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.cardHelper = cardHelper;
        this.App = window.App;
        // 标题
        this.HeadTitle = "我的卡片";
        // 信用卡
        this.CreditCards = new Array();
        // 储蓄卡
        this.DepositCards = new Array();
        this.CardSwitch = __WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["a" /* CREDIT_CARD */];
        // 信用卡标识
        this.CreditCard = __WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["a" /* CREDIT_CARD */];
        // 储蓄卡标识
        this.DepositCard = __WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["c" /* DEPOSIT_CARD */];
    }
    MycardPage.prototype.ionViewDidEnter = function () {
        this.CreditCards = this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["a" /* CREDIT_CARD */]);
        this.DepositCards = this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["c" /* DEPOSIT_CARD */]);
    };
    MycardPage.prototype.ngOnInit = function () {
    };
    // 删除信用卡
    MycardPage.prototype.DelCreditCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).subscribe(function (res) {
            _this.cardHelper.delCard(cardId);
            _this.CreditCards = _this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["a" /* CREDIT_CARD */]);
            App.ShowToast('信用卡删除成功');
            App.CurrentCreditCards = {};
            _this.Auth.GetUserData();
        });
    };
    // 删除储蓄卡
    MycardPage.prototype.DelDepositCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).subscribe(function (data) {
            _this.cardHelper.delCard(cardId);
            _this.DepositCards = _this.cardHelper.filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["c" /* DEPOSIT_CARD */]);
            App.ShowToast('储蓄卡删除成功');
            App.CurrentDepositCard = {};
            _this.Auth.GetUserData();
        });
    };
    // 设置主卡
    MycardPage.prototype.SetPrimaryCard = function (t, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.Servie.SetPrimCard(id);
                return [2 /*return*/];
            });
        });
    };
    // 添加信用卡
    MycardPage.prototype.AddCreditCard = function () {
        App.Nav.push(App.RootPage.AddCreditPage, App.RootPage.MycardPage);
    };
    // 添加储蓄卡
    MycardPage.prototype.AddDepositCard = function () {
        App.Nav.push(App.RootPage.AddDepositPage, App.RootPage.MycardPage);
    };
    MycardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mycard',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\mycard\mycard.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="u-mycard">\n\n  <ion-segment [(ngModel)]="CardSwitch">\n\n    <ion-segment-button value="{{CreditCard}}">信用卡</ion-segment-button>\n\n    <ion-segment-button value="{{DepositCard}}">储蓄卡</ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="CardSwitch">\n\n    <!-- 信用卡 -->\n\n    <div *ngSwitchCase="CreditCard">\n\n      <!-- 已添加 -->\n\n      <ion-grid>\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <!-- 未添加 -->\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 text-center \n\n            (click)="AddCreditCard()">\n\n            <button ion-button icon-center full>\n\n              <ion-icon name="add-circle"></ion-icon>\n\n              <span ion-text m-l-5>添加信用卡</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- 储蓄卡 -->\n\n    <div *ngSwitchCase="DepositCard">\n\n      <!-- 已添加 -->\n\n      <ion-grid>\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <!-- 未添加 -->\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 text-center \n\n            (click)="AddDepositCard()">\n\n            <button ion-button icon-center full>\n\n              <ion-icon name="add-circle"></ion-icon>\n\n              <span ion-text m-l-5>添加储蓄卡</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\mycard\mycard.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__shared_helper_card_helper__["b" /* CardHelper */]])
    ], MycardPage);
    return MycardPage;
}());

//# sourceMappingURL=mycard.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersPage = /** @class */ (function () {
    function OrdersPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.HeadTitle = "订单详情";
        this.OrderDetail = {};
        var orderId = navParams.data;
        this.GetCashDetail(orderId);
    }
    OrdersPage.prototype.GetCashDetail = function (id) {
        var _this = this;
        this.Service.GetCashDetail(id).subscribe(function (data) { return _this.OrderDetail = data.data; });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\orders\orders.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid class="list-grid-default" m-b-10>\n\n        <ion-row padding-vertical>\n\n            <ion-col>\n\n                <ul class="list-row-inner">\n\n                    <li class="title" text-center>\n\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.amount/100}}</div>\n\n                        <p class="text-gray-600">收款金额</p>\n\n                    </li>\n\n                    <!-- <li class="title slash" text-center><span></span></li> -->\n\n                    <li class="title" text-center>\n\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.enterAmount/100}}</div>\n\n                        <p class="text-gray-600">到账金额</p>\n\n                    </li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="list-grid-default no-border">\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner">\n\n                    <li class="title" text-left><span class="text-gray-600">订单编号：</span></li>\n\n                    <li class="title" text-right>{{OrderDetail.orderNo}}</li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner" [ngSwitch]="OrderDetail.status">\n\n                    <li class="title" text-left><span class="text-gray-600">订单状态：</span></li>\n\n                    <li class="title" text-right *ngSwitchCase="\'1\'"><span ion-text color="orange">成功</span></li>\n\n                    <li class="title" text-right *ngSwitchCase="\'0\'"><span ion-text color="danger">失败</span></li>\n\n                    <li class="title" text-right *ngSwitchCase="\'2\'"><span ion-text color="primary">处理中</span></li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner"  [ngSwitch]="OrderDetail.type">\n\n                    <li class="title" text-left><span class="text-gray-600">收款方式：</span></li>\n\n                    <li class="title" text-right *ngSwitchCase="\'card\'">信用卡收款</li>\n\n                    <li class="title" text-right *ngSwitchCase="\'alipay\'">支付宝收款</li>\n\n                    <li class="title" text-right *ngSwitchCase="\'wechat\'">微信收款</li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner">\n\n                    <li class="title" text-left><span class="text-gray-600">收款信用卡：</span></li>\n\n                    <li class="title" text-right>{{OrderDetail.payCard}}</li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner">\n\n                    <li class="title" text-left><span class="text-gray-600">到账储蓄卡：</span></li>\n\n                    <li class="title" text-right>{{OrderDetail.outCard}}</li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ul class="list-row-inner">\n\n                    <li class="title" text-left><span class="text-gray-600">收款时间：</span></li>\n\n                    <li class="title" text-right>{{OrderDetail.time}}</li>\n\n                </ul>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\orders\orders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__["a" /* MineService */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordsPage = /** @class */ (function () {
    function RecordsPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = '收款记录';
        this.GetCashList();
    }
    RecordsPage.prototype.GetCashList = function () {
        var _this = this;
        this.Service.GetCashList().subscribe(function (data) { return _this.DataProcess(data.data); });
    };
    RecordsPage.prototype.DataProcess = function (data) {
        if (data.length == 0)
            return this.DataEmpty = true;
        this.DataEmpty = false;
        this.ListData = new Array();
        var tmpMonth = data[0].time.split(' ')[0].substr(0, 7);
        this.ListData = [
            {
                month: tmpMonth,
                total: 0,
                data: []
            }
        ];
        for (var i = 0; i < data.length; i++) {
            var tmpJson = data[i];
            if (tmpMonth == data[i].time.split(' ')[0].substr(0, 7)) {
                for (var j = 0; j < this.ListData.length; j++) {
                    if (this.ListData[j].month == tmpMonth) {
                        this.ListData[j].data.push(tmpJson);
                        // 成功订单统计
                        if (tmpJson.status == '1') {
                            this.ListData[j].total += Number(tmpJson.amount);
                        }
                    }
                }
            }
            else {
                tmpMonth = data[i].time.split(' ')[0].substr(0, 7);
                this.ListData.push({
                    month: tmpMonth,
                    total: tmpJson.amount,
                    data: [tmpJson]
                });
            }
        }
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\records\records.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ng-template [ngIf]="!DataEmpty">\n\n    <ion-grid class="bgc-light" no-padding>\n\n      <div *ngFor="let items of ListData">\n\n        <h5 p-h-10 p-v-5 [ngStyle]="{\'background\':\'aliceblue\',\'margin\':\'0\'}">\n\n          {{items.month}}成功收款\n\n          <span float-right>{{items.total/100}}元</span>\n\n        </h5>\n\n        <div *ngFor="let item of items.data">\n\n          <ion-row align-items-center p-h-5 [navPush]="App.RootPage.OrdersPage" [navParams]="item.id">\n\n            <ion-col col-1 text-center>\n\n              <img src="assets/imgs/vip.png">\n\n            </ion-col>\n\n            <ion-col col-5 [ngSwitch]="item.type">\n\n              <span *ngSwitchCase="\'card\'">信用卡收款</span>\n\n              <span *ngSwitchCase="\'alipay\'">支付宝收款</span>\n\n              <span *ngSwitchCase="\'wechat\'">微信收款</span>\n\n              <p no-margin ion-text color="light-dark">{{item.time}}</p>\n\n            </ion-col>\n\n            <ion-col col-3 [ngSwitch]="item.status">\n\n              <img *ngSwitchCase="\'0\'" src="assets/imgs/seal-3.png" style="max-width:none;width:60px;height:60px;">\n\n              <img *ngSwitchCase="\'1\'" src="assets/imgs/seal-1.png" style="max-width:none;width:60px;height:60px;">\n\n              <img *ngSwitchCase="\'2\'" src="assets/imgs/seal-2.png" style="max-width:none;width:60px;height:60px;">\n\n            </ion-col>\n\n            <ion-col col-3 text-nowrap>\n\n              <span f-1-0>￥</span>{{item.amount/100}}\n\n              <ion-icon [ngStyle]="{\'float\':\'right\',\'color\':\'#ccc\'}">&#xf3d1;</ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n    </ion-grid>\n\n  </ng-template>\n\n  <ng-template [ngIf]="DataEmpty">\n\n    <div text-center p-t-50 p-b-50>\n\n      <img src="assets/imgs/nulldata.png" alt="" width="150px">\n\n      <p text-center text-gray-light f-1-6>你还没有收款记录哦</p>\n\n    </div>\n\n  </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\records\records.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UcenterPage = /** @class */ (function () {
    function UcenterPage() {
        this.App = window.App;
        this.HeadTitle = "我 的";
        this.ShowPhone = "****";
        this.ImgData = { ImgSrc: void 0 };
        this.InitUserInfo();
    }
    UcenterPage.prototype.ngOnInit = function () {
        // this.authText = App.IsIdAuthed ? '已完成' : '未完成';
    };
    UcenterPage.prototype.InitUserInfo = function () {
        console.log(App.UserInfo);
        // this.ShowPhone = App.UserInfo.mobile.substr(0,3) + this.ShowPhone + App.UserInfo.mobile.substr(-4);
    };
    UcenterPage.prototype.OnAuthClick = function () {
    };
    UcenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ucenter',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\ucenter.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar [Title]="HeadTitle" AppIcon="true" BtnIcon="&#xf103;" (BtnIconEvent)="App.Nav.push(App.RootPage.UsetupPage)"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="ucenter-page">\n\n  <div m-b-10>\n\n    <ion-card no-margin p-v-10>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/zfb.png">\n\n        </ion-avatar>\n\n        <h2>Marty McFly</h2>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <ion-card no-margin>\n\n    <ion-list>\n\n      <button ion-item class="border-bottom-1px">\n\n        <ion-icon name="cart" item-start></ion-icon>\n\n        <ion-label item-start f-14>收款记录</ion-label>\n\n        <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n      </button>\n\n\n\n      <button ion-item>\n\n        <ion-icon name="medical" item-start></ion-icon>\n\n        <span ion-text item-start f-14>我的卡片</span>\n\n        <span ion-text item-end f-13 text-gray>0张信用卡，0张储蓄卡</span>\n\n        <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <div m-t-10>\n\n    <ion-card no-margin>\n\n      <ion-list>\n\n        <button ion-item>\n\n          <ion-icon name="cart" item-start></ion-icon>\n\n          <ion-label item-start f-14>在线客服</ion-label>\n\n          <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n        </button>\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n\n\n<!--  个人中心 -->\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\ucenter.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UcenterPage);
    return UcenterPage;
}());

//# sourceMappingURL=ucenter.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UinfoPage = /** @class */ (function () {
    function UinfoPage(Auth) {
        this.Auth = Auth;
        this.App = window.App;
        this.ImgData = { ImgSrc: void 0 };
        this.HeadTitle = "个人资料";
        this.UserInfo = [];
        this.ShowPhone = "****";
        this.ShowID = "********";
        this.infoName = " ";
        this.InitUserInfo();
    }
    UinfoPage.prototype.InitUserInfo = function () {
        this.UserInfo = App.UserInfo;
        console.log(this.UserInfo);
        if (this.UserInfo.mobile !== null)
            this.ShowPhone = this.UserInfo.mobile.substr(0, 3) + this.ShowPhone + this.UserInfo.mobile.substr(-4);
        if (this.UserInfo.idCardNo !== null)
            this.ShowID = this.UserInfo.idCardNo.substr(0, 6) + this.ShowID + this.UserInfo.idCardNo.substr(-4);
        this.ImgData.ImgSrc = App.UserFace;
        if (this.UserInfo.name !== null) {
            this.infoName = this.UserInfo.name.substr(-1);
            var str = '';
            for (var i = 0; i < this.UserInfo.name.length - 1; i++) {
                str += '*';
            }
            this.infoName = str + this.infoName;
        }
    };
    UinfoPage.prototype.ChangeNickName = function () {
        var _this = this;
        var _alertOption = {
            title: '昵称',
            inputs: [
                {
                    name: 'nickName',
                    value: this.UserInfo.nickName
                },
            ],
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '保存',
                    handler: function (data) {
                        // 请求接口保存新昵称
                        _this.UserInfo.nickName = data.nickName;
                        _this.Auth.ModifyUserInfo({ nickName: data.nickName });
                    }
                }
            ]
        };
        App.ShowAlert(_alertOption).then(function (modal) {
            return modal.onDidDismiss(function () {
            });
        });
    };
    UinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uinfo',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\uinfo\uinfo.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class="list-grid-default">\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">头像</li>\n\n          <li text-right>                    \n\n            <span [class.face-sm-default]="App.IconFace" [class.face-sm-female]="!App.IconFace" text-gray-lighter></span>\n\n          </li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner" (click)="ChangeNickName()">\n\n          <li class="title">昵称</li>\n\n          <li text-right class="text-gray-600">{{UserInfo.nickName}}</li>\n\n          <li class="icon-arrow"><ion-icon></ion-icon></li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">用户ID</li>\n\n          <li text-right class="text-gray-600">{{UserInfo.userId}}</li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">手机号</li>\n\n          <li text-right class="text-gray-600">{{ShowPhone}}</li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="list-grid-default" m-t-10>\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">姓名</li>\n\n          <li text-right class="text-gray-600">{{infoName}}</li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row m-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">身份证</li>\n\n          <li text-right class="text-gray-600">{{ShowID}}</li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\uinfo\uinfo.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], UinfoPage);
    return UinfoPage;
}());

//# sourceMappingURL=uinfo.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsetupPage = /** @class */ (function () {
    function UsetupPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "设 置";
    }
    UsetupPage.prototype.ChangeNickName = function () {
        var _alertOption = {
            title: '密码',
            inputs: [
                {
                    name: 'PassWord',
                },
            ],
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '保存',
                    handler: function (data) {
                        // 请求接口保存新昵称
                        // this.UserInfo.nickName = data.nickName;
                        // this.Auth.ModifyUserInfo({nickName: data.nickName});
                    }
                }
            ]
        };
        App.ShowAlert(_alertOption).then(function (modal) {
            return modal.onDidDismiss(function () {
            });
        });
    };
    UsetupPage.prototype.Logout = function () {
        this.Service.Logout();
    };
    UsetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usetup',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\usetup\usetup.html"*/'<ion-header no-border>\n\n  <ion-toolbar>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class="bgc-light">\n\n    <ion-row justify-content-center>\n\n      <ion-col col-3 text-center p-t-30>\n\n        <img src="assets/imgs/58icon.png">\n\n        <p no-margin p-t-10>v1.0.0</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div padding-horizontal m-b-20>\n\n      <h5 text-center m-t-10>关于我们</h5>\n\n      <ng-template [ngIf]="App.CanTrade || App.IsIos">\n\n        <span text-left ion-text color="dark">\n\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58付是一种基于信用卡的收款（收单）方式，应用于个人之间的资金往来，以及小微商户的收款（收单）场景。 公司专注用户体验、网络安全与个人隐私保护以及服务质量，打造精品，服务客户。\n\n        </span>\n\n      </ng-template>\n\n    </div>\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <ion-grid class="list-grid-default" m-t-10>\n\n    <ion-row p-l-10 [navPush]="App.RootPage.ModifypwdPage">\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">登录密码</li>\n\n          <li class="icon-arrow">\n\n            <ion-icon></ion-icon>\n\n          </li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- <ion-grid class="list-grid-default" m-t-10> -->\n\n    <!-- <ion-row p-l-10>\n\n      <ion-col>\n\n          <ul class="list-row-inner">\n\n            <li class="title">关于我们</li>\n\n            <li class="icon-arrow"><ion-icon></ion-icon></li>\n\n          </ul>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <!-- <ion-row p-l-10>\n\n      <ion-col>\n\n        <ul class="list-row-inner">\n\n          <li class="title">用户反馈</li>\n\n          <li class="icon-arrow">\n\n            <ion-icon></ion-icon>\n\n          </li>\n\n        </ul>\n\n      </ion-col>\n\n    </ion-row> -->\n\n  <!-- </ion-grid> -->\n\n  <ion-row justify-content-center margin-vertical>\n\n    <ion-col col-5>\n\n      <button class="bgc-grad-primary" ion-button block (click)="Logout()">退出账号</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row text-center>\n\n    <ion-col ion-text color="light-dark" f-1-6>\n\n      <p no-margin>Copyright ©2016-2018</p>\n\n      <span>深圳前海微融科技有限公司</span>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\usetup\usetup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], UsetupPage);
    return UsetupPage;
}());

//# sourceMappingURL=usetup.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VIPmembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { InAppBrowser } from '@ionic-native/in-app-browser';

var VIPmembersPage = /** @class */ (function () {
    function VIPmembersPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "我的费率";
        this.VipIndex = 0;
        this.GetVipDeadLine(10);
    }
    VIPmembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Service.GetVipList().subscribe(function (resp) {
            _this.VipList = resp.data;
            for (var i = 0; i < _this.VipList.length; i++) {
                if (_this.VipList[i].name.indexOf(App.UserInfo['rank']) !== -1) {
                    _this.VipId = _this.VipList[i].id;
                }
            }
            _this.PayAmount = _this.VipList[_this.VipIndex].price;
        });
        if (App.UserInfo['vip']) {
            this.GetVipDeadLine(App.UserInfo['packageDays']);
        }
    };
    VIPmembersPage.prototype.ChooseVIP = function (ind) {
        if (this.VipList[ind].name == App.UserInfo['rank'])
            return;
        this.VipIndex = ind;
        this.PayAmount = this.VipList[ind].price;
    };
    VIPmembersPage.prototype.Submit = function () {
        this.Service.BuyVip(this.VipList[this.VipIndex].id).subscribe(function (resp) {
        });
    };
    VIPmembersPage.prototype.GetVipDeadLine = function (days) {
        var TDate = new Date().getTime();
        var stamp = days * 864e5;
        var DeadStamp = TDate + stamp;
        var DeadTime = new Date(DeadStamp);
        var Year = DeadTime.getFullYear();
        var Month = DeadTime.getMonth() + 1;
        var Day = DeadTime.getDate();
        this.Deadline = Year + '-' + Month + '-' + Day;
    };
    VIPmembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-VIPmembers',template:/*ion-inline-start:"D:\projects\myapp\myapp\src\pages\ucenter\VIPmembers\VIPmembers.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true"  [Title]="headTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<!-- <ion-header no-border class="bgc-gray-light">\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n        <div class="vip-toolbar bgc-grad-primary"></div> -->\n\n    <!-- </ion-toolbar>\n\n    <ion-toolbar no-padding>\n\n        <ion-grid class="grid-mine-header bgc-grad-primary no-padding">\n\n            <ion-row justify-content-center>\n\n                <ion-col col-5 text-center *ngIf="App.IsVip">\n\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n\n                    <span text-nowrap p-b-5>会员{{Deadline}}到期</span>\n\n                </ion-col>\n\n                <ion-col col-5 text-center *ngIf="!App.IsVip">\n\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n\n                    <span text-nowrap p-b-5>你还不是VIP会员</span>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-toolbar>\n\n</ion-header> -->\n\n<!-- <ion-content>\n\n    <div m-h-15 m-v-15>\n\n        <ion-grid class="vip-list" no-padding \n\n        [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n\n        [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n\n        (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n\n            <ion-row class="vip-item">\n\n                <ion-col col-9 text-left>\n\n                    <h4>{{item.name}}</h4>\n\n                    <div m-b-10>\n\n                        <p>无积分{{item.rate}}%，有积分{{item.rate1}}%</p>\n\n                        <p>直推返利：{{item.profitRate1}}%，间推返利：{{item.profitRate2}}%</p>\n\n                        <p>间推返利：{{item.profitRate2}}%</p> -->\n\n                        <!-- <p>有效期\n\n                            <span *ngIf="item.days == \'-1\'; then Infinit; else Days"></span>\n\n                            <ng-template #Infinit>永久有效</ng-template>\n\n                            <ng-template #Days>{{item.days}}天</ng-template>\n\n                        </p>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-3 text-right>\n\n                    <b>￥{{item.price}}</b>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-grid class="vip-list pay list-grid-default" p-v-20 m-t-10>\n\n            <ion-row p-h-10>\n\n                <ion-col>\n\n                    <ul class="list-row-inner">\n\n                        <li class="note" text-left>\n\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n\n                            <span ion-text color="dark">支付宝支付</span>\n\n                        </li>\n\n                        <li class="title" text-right><i class="has-point active"></i></li>\n\n                    </ul>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div> -->\n\n    <!-- <div [ngStyle]="{width: \'100%\', height: \'8%\', \'margin-top\': \'2%\'}"></div>\n\n    <div p-h-15>\n\n        <ion-grid class="grid-vip-cont grid-header-bar" p-v-20>\n\n            <div class="foor-face"><img src="assets/imgs/yyy.png" alt=""></div>\n\n            <ion-row class="face-cont face-cont-vip"\n\n                [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n\n                [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n\n                (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n\n                <ion-col>\n\n                    <b class="face-tab" [ngClass]="{\'face-active\': VipIndex == i}">\n\n                        <img class="face-nav" src="assets/imgs/zs{{item.id}}.png">\n\n                    </b>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <h5>{{item.Tname}}</h5>\n\n                    <h5>会员</h5>\n\n                </ion-col>\n\n                <ion-col col-2 class="border">\n\n                    <h6>费率</h6>\n\n                    <b>{{item.rate}}%</b>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <h6>有效期</h6>\n\n                    <b *ngIf="item.days == \'-1\'; then Infinit; else Days"></b>\n\n                    <ng-template #Infinit>永久有效</ng-template>\n\n                    <ng-template #Days>{{item.days}}天</ng-template>\n\n                </ion-col>\n\n                <ion-col col-3 ion-text color="red-dark">\n\n                    ￥<b f-2-5>{{item.price}}</b>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-grid class="grid-vip-cont list-grid-default" p-v-20 m-t-10>\n\n            <span>选择支付方式</span>\n\n            <ion-row>\n\n                <ion-col text-center>收款方式</ion-col>\n\n                <ion-col>\n\n                    <ul class="list-row-inner">\n\n                        <li class="note" text-left>\n\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n\n                            <span ion-text color="dark">支付宝支付</span>\n\n                        </li>\n\n                        <li class="title" text-right><i class="has-point active"></i></li>\n\n                    </ul>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ul class="list-row-inner">\n\n                        <li class="title" text-right><i class="has-point"></i></li>\n\n                        <li class="note" text-left>\n\n                            <span class="bank-face"><img src="assets/imgs/wx.png"></span>\n\n                            <span ion-text color="dark" >微信</span>\n\n                        </li>\n\n                    </ul>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div> -->\n\n\n\n<!-- </ion-content>\n\n<ion-footer class="bgc-gray-light">\n\n    <ion-row justify-content-center m-h-10>\n\n        <ion-col>\n\n            <button ion-button block round class="bgc-grad-primary" (click)="Submit()">应付金额{{PayAmount}}元，去提交</button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-footer> -->\n\n<ion-content>\n\n    <ion-grid class="list-grid-default">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <h3>费率：</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center justify-content-center>\n\n            <ion-row col-12>\n\n                <ion-col col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8>\n\n                    <p ion-text color="red">{{App.UserInfo.rate}}%+2元/笔</p>\n\n                </ion-col>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4>\n\n                    <p ion-text>无积分</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <p ion-text>即时到账，单笔上2万，交易时间8:00 - 22：00点</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projects\myapp\myapp\src\pages\ucenter\VIPmembers\VIPmembers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], VIPmembersPage);
    return VIPmembersPage;
}());

//# sourceMappingURL=VIPmembers.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__UltraCreation_Native_StatusBar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__UltraCreation_Native_SplashScreen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__http_interceptors__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var config = {
    backButtonText: '',
    pageTransitionDelay: 0,
    swipeBackEnabled: false,
    preloadModules: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__http_interceptors__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* ProviderModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findpassword/findpassword.module#FindPasswordPageModule', name: 'FindPasswordPage', segment: 'findpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/addcreditcard/addcreditcard.module#AddCreditCardPageModule', name: 'AddCreditCardPage', segment: 'addcreditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/adddeposit/adddeposit.module#AddDepositPageModule', name: 'AddDepositPage', segment: 'adddeposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/branchcard/branchcard.module#BranchcardPageModule', name: 'BranchcardPage', segment: 'branchcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/cardinfor/cardinfor.module#CardInforPageModule', name: 'CardInforPage', segment: 'cardinfor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/changecards/changecards.module#ChangecardsPageModule', name: 'ChangecardsPage', segment: 'changecards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/confirminfo/confirminfo.module#ConfirminfoPageModule', name: 'ConfirminfoPage', segment: 'confirminfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/creditcard/creditcard.module#CreditCardPageModule', name: 'CreditCardPage', segment: 'creditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/finalpay/finalpay.module#FinalpayPageModule', name: 'FinalpayPage', segment: 'finalpay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/listofbank/listofbank.module#ListofbankPageModule', name: 'ListofbankPage', segment: 'listofbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/resetpassword/resetpassword.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loan/loan.module#LoanPageModule', name: 'LoanPage', segment: 'loan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifypassword/modifypassword.module#ModifyPasswordPageModule', name: 'ModifyPasswordPage', segment: 'modifypassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setpassword/setpassword.module#SetPasswordPageModule', name: 'SetPasswordPage', segment: 'setpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thirdparty/thirdparty.module#ThirdPartyPageModule', name: 'ThirdPartyPage', segment: 'thirdLogin/:mobile/:key', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/mycard/mycard.module#MycardPageModule', name: 'MycardPage', segment: 'mycard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/records/records.module#RecordsPageModule', name: 'RecordsPage', segment: 'records', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/ucenter.module#UcenterPageModule', name: 'UcenterPage', segment: 'ucenter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/uinfo/uinfo.module#UinfoPageModule', name: 'UinfoPage', segment: 'uinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/usetup/usetup.module#UsetupPageModule', name: 'UsetupPage', segment: 'usetup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/VIPmembers/VIPmembers.module#VIPmembersPageModule', name: 'VIPmembersPage', segment: 'VIPmembers', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_13__UltraCreation_Native_StatusBar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialHelper; });
var CredentialHelper = /** @class */ (function () {
    function CredentialHelper() {
    }
    CredentialHelper.setToken = function (v) {
        localStorage.setItem(CredentialHelper.tokenKey, v);
    };
    CredentialHelper.setMobile = function (v) {
        localStorage.setItem(CredentialHelper.mobileKey, v);
    };
    CredentialHelper.setSecret = function (v) {
        localStorage.setItem(CredentialHelper.secretKey, v);
    };
    CredentialHelper.getToken = function () {
        return localStorage.getItem(CredentialHelper.tokenKey);
    };
    CredentialHelper.getMobile = function () {
        return localStorage.getItem(CredentialHelper.mobileKey);
    };
    CredentialHelper.getSecret = function () {
        return localStorage.getItem(CredentialHelper.secretKey);
    };
    CredentialHelper.tokenKey = 'token';
    CredentialHelper.mobileKey = 'mobile';
    CredentialHelper.secretKey = 'third_party_secret';
    return CredentialHelper;
}());

//# sourceMappingURL=credential-helper.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_application__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(App, auth) {
        var _this = this;
        this.auth = auth;
        // 启动页
        this.rootPage = 'TabsPage';
        App.Platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].show();
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].hide();
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].overlaysWebView(true);
            if (App.IsIos) {
                __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].styleBlackTranslucent();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].backgroundColorByHexString('#2D93F3');
            }
        })
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].hide();
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].show();
        }).then(function () {
            _this.auth.GetUserData();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNavController'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav #rootNavController [root]=\"rootPage\"></ion-nav>"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_application__["a" /* TApplication */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* TAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAppController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_popover_popover_controller__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Core_Exception__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import {TranslateService} from '@ngx-translate/core';










var TAppController = /** @class */ (function () {
    function TAppController(Injector) {
        this.Injector = Injector;
        this.Instance = Injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__["a" /* App */]);
        this.Platform = Injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__["a" /* Platform */]);
        this.ToastCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]);
        this.AlertCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]);
        this.ModalCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]);
        this.LoadingCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]);
        this.ActionSheetCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]);
        this.PopoverCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_popover_popover_controller__["a" /* PopoverController */]);
        // this.Translation = Injector.get(TranslateService);
    }
    Object.defineProperty(TAppController.prototype, "IsAndroid", {
        get: function () {
            return this.Platform.is('android');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "IsIos", {
        get: function () {
            return this.Platform.is('ios');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "IsWindowPhone", {
        get: function () {
            return this.Platform.is('wp');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "Nav", {
        get: function () {
            return this.Instance.getActiveNavs()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "ActiveView", {
        get: function () {
            return this.Nav.getActive(true);
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.IconFont = function (Index) {
        return String.fromCharCode(Index);
    };
    TAppController.prototype.ShowError = function (err, config) {
        return __awaiter(this, void 0, void 0, function () {
            var trace, msg, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config)) {
                            config = {};
                        }
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
                            if (err instanceof Error) {
                                console.error(err.stack);
                            }
                            else {
                                trace = new Error();
                                console.error(trace.stack);
                            }
                        }
                        if (err instanceof __WEBPACK_IMPORTED_MODULE_10__Core_Exception__["a" /* EAbort */]) {
                            console.warn(err.message);
                            return [2 /*return*/];
                        }
                        if (__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].IsString(err)) {
                            msg = err;
                        }
                        else if (err instanceof Error) {
                            msg = err.message;
                        }
                        else if (err instanceof __WEBPACK_IMPORTED_MODULE_10__Core_Exception__["b" /* Exception */]) {
                            msg = err.message;
                        }
                        else {
                            msg = '';
                        }
                        if (!(msg !== '')) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.ShowToast({ message: msg, position: config.position, duration: config.duration,
                                cssClass: config.style })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @params PageType class of PageType
     *  @param opts: ModalOptions
     *      showBackdrop?: boolean;
     *      enableBackdropDismiss?: boolean;
    */
    TAppController.prototype.ShowModal = function (PageType, data, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.ModalCtrl.create(PageType, data, opts);
                        return [4 /*yield*/, modal.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, modal];
                }
            });
        });
    };
    /**
     *  Display an alert with a title, inputs, and buttons
     *
     *  @param opts: AlertOptions
     *      title?: string;
     *      subTitle?: string;
     *      message?: string;
     *      cssClass?: string;
     *      inputs?: Array<AlertInputOptions>;
     *      buttons?: Array<any>;
     *      enableBackdropDismiss?: boolean;
     *
     *  @param opts.inputs
     *      type?: string;
     *      name?: string;
     *      placeholder?: string;
     *      value?: string;
     *      label?: string;
     *      checked?: boolean;
     *      disabled?: boolean;
     *      id?: string;
     *
     *  @param opt.buttons
     *      text?: string;
     *      icon?: icon;
     *      handler?: any;  // function false => dismiss
     *      cssClass: string;
     *      role: 'destructive' | 'cancel'
     */
    TAppController.prototype.ShowAlert = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts.enableBackdropDismiss))
                            opts.enableBackdropDismiss = false;
                        alert = this.AlertCtrl.create(opts);
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    TAppController.prototype.ShowToast = function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Toast)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Toast.dismiss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.Toast = this.ToastCtrl.create(opt);
                        this.Toast.onDidDismiss(function () { return _this.Toast = undefined; });
                        return [4 /*yield*/, this.Toast.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.Toast];
                }
            });
        });
    };
    TAppController.prototype.ShowLoading = function (opt, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading)) {
                            return [2 /*return*/];
                        }
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opt.spinner)) {
                            opt.spinner = 'ios';
                        }
                        this.IsManualHideLoading = false;
                        this.Loading = this.LoadingCtrl.create(opt);
                        this.Loading.onDidDismiss(function () {
                            if (__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Loading)) {
                                _this.Loading = undefined;
                            }
                            if (!_this.IsManualHideLoading && __WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(timeout)) {
                                timeout();
                            }
                        });
                        return [4 /*yield*/, this.Loading.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.Loading];
                }
            });
        });
    };
    TAppController.prototype.HideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading)) return [3 /*break*/, 5];
                        this.IsManualHideLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Loading.dismiss()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.Loading = undefined;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @param opt: ActionSheetOptions
     *      title?: string;
     *      subTitle?: string;
     *      cssClass?: string;
     *      buttons?: Array<any>;
     *      enableBackdropDismiss?: boolean;
     *
     *  @param opt.buttons
     *      text?: string;
     *      icon?: icon;
     *      handler?: any;  // function false => dismiss
     *      cssClass: string;
     *      role: 'destructive' | 'cancel'
     */
    TAppController.prototype.ShowActionSheet = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts)) {
                            opts = {};
                        }
                        actionSheet = this.ActionSheetCtrl.create(opts);
                        return [4 /*yield*/, actionSheet.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, actionSheet];
                }
            });
        });
    };
    /**
     *  @params PageType class of PageType
     *  @params event to get the top and left prop of current page
     *  @param opts: ModalOptions
     *      cssClass?: string;
     *      showBackdrop?: boolean;
     *      enableBackdropDismiss?: boolean;
    */
    TAppController.prototype.ShowPopover = function (PageType, event, data, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        popover = this.PopoverCtrl.create(PageType, data, opts);
                        return [4 /*yield*/, popover.present({ ev: event })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, popover];
                }
            });
        });
    };
    TAppController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TAppController);
    return TAppController;
}());

//# sourceMappingURL=appcontroller.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAbort; });
/* unused harmony export EInvalidArg */
/* unused harmony export ENotImplemented */
/* unused harmony export EUsage */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *  TODO: how to extend or implement a Error ?
 *      this simple task impossable to done in JSP
 *
 *  more information:
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 *  predefined errors:
 *      EvalError
 *          Creates an instance representing an error that occurs regarding the global function eval().
 *      InternalError
 *          Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
 *      RangeError
 *          Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
 *      ReferenceError
 *          Creates an instance representing an error that occurs when de-referencing an invalid reference.
 *      SyntaxError
 *          Creates an instance representing a syntax error that occurs while parsing code in eval().
 *      TypeError
 *          Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
 *      URIError
 *          Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
 */
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception(message) {
        var _newTarget = this.constructor;
        if (message === void 0) { message = ''; }
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    Exception.Throw = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw this.Create.apply(this, args);
    };
    Exception.Create = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = this).bind.apply(_a, [void 0].concat(args)))();
        var _a;
    };
    Exception.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return Exception;
}(Error));

/**
 *  abort executing only
 */
var EAbort = /** @class */ (function (_super) {
    __extends(EAbort, _super);
    function EAbort(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_abort';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EAbort;
}(Exception));

/**
 *  invalid argument
 */
var EInvalidArg = /** @class */ (function (_super) {
    __extends(EInvalidArg, _super);
    function EInvalidArg(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_invalid_arg';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EInvalidArg;
}(Exception));

/**
 *  not implemented yet.
 */
var ENotImplemented = /** @class */ (function (_super) {
    __extends(ENotImplemented, _super);
    function ENotImplemented(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_not_implemented';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return ENotImplemented;
}(Exception));

/**
 *  not use by this way...
 */
var EUsage = /** @class */ (function (_super) {
    __extends(EUsage, _super);
    function EUsage(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_usage';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EUsage;
}(Exception));

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_creditcard_creditcard__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPage", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_home_creditcard_creditcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_cardinfor_cardinfor__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardInforPage", function() { return __WEBPACK_IMPORTED_MODULE_3__pages_home_cardinfor_cardinfor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay_finalpay__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FinalpayPage", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay_finalpay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo_confirminfo__ = __webpack_require__(276);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirminfoPage", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo_confirminfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_addcreditcard_addcreditcard__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddCreditCardPage", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_home_addcreditcard_addcreditcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards_changecards__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChangecardsPage", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards_changecards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit_adddeposit__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepositPage", function() { return __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit_adddeposit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank_listofbank__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListofbankPage", function() { return __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank_listofbank__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard_branchcard__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BranchcardPage", function() { return __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard_branchcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_start_start__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return __WEBPACK_IMPORTED_MODULE_11__pages_start_start__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modifypassword_modifypassword__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPasswordPage", function() { return __WEBPACK_IMPORTED_MODULE_12__pages_modifypassword_modifypassword__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_findpassword_findpassword__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FindPasswordPage", function() { return __WEBPACK_IMPORTED_MODULE_13__pages_findpassword_findpassword__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_resetpassword_resetpassword__ = __webpack_require__(281);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return __WEBPACK_IMPORTED_MODULE_14__pages_home_resetpassword_resetpassword__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_checkout_checkout__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return __WEBPACK_IMPORTED_MODULE_15__pages_home_checkout_checkout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ucenter_ucenter__ = __webpack_require__(292);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UcenterPage", function() { return __WEBPACK_IMPORTED_MODULE_16__pages_ucenter_ucenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loan_loan__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoanPage", function() { return __WEBPACK_IMPORTED_MODULE_18__pages_loan_loan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_setpassword_setpassword__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPage", function() { return __WEBPACK_IMPORTED_MODULE_19__pages_setpassword_setpassword__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_auth_auth__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return __WEBPACK_IMPORTED_MODULE_20__pages_auth_auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_orders_orders__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_orders_orders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_records_records__ = __webpack_require__(291);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPage", function() { return __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_records_records__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_uinfo_uinfo__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UinfoPage", function() { return __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_uinfo_uinfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_usetup_usetup__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UsetupPage", function() { return __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_usetup_usetup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_VIPmembers_VIPmembers__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VIPmembersPage", function() { return __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_VIPmembers_VIPmembers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_mycard_mycard__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPage", function() { return __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_mycard_mycard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_register_register__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return __WEBPACK_IMPORTED_MODULE_27__pages_register_register__["a"]; });
// import { from } from 'rxjs/observable/from';




























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mineservice__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileservice__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkAppUpdate__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_0__application__["a" /* TApplication */], __WEBPACK_IMPORTED_MODULE_1__mineservice__["a" /* MineService */], __WEBPACK_IMPORTED_MODULE_2__homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_4__fileservice__["b" /* FileService */], __WEBPACK_IMPORTED_MODULE_5__checkAppUpdate__["a" /* CheckAppUpdate */]]
        })
    ], ProviderModule);
    return ProviderModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAppUpdate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckAppUpdate = /** @class */ (function () {
    function CheckAppUpdate(http, appVersion, fileTransfer, device) {
        this.http = http;
        this.appVersion = appVersion;
        this.fileTransfer = fileTransfer;
        this.device = device;
        this.curVersion = 0;
        this.App = window.App;
        this.file = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]();
        this.fileOpener = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */]();
    }
    // 检查更新
    CheckAppUpdate.prototype.appUpdate = function () {
        var _this = this;
        if (!App.IsAndroid) {
            return;
        }
        this.setCurVersion();
        this.setUpdateInfo().then(function () {
            if (_this.hasNewVersion()) {
                var opts = {
                    title: '版本升级',
                    message: '发现新版本，是否升级？',
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('已取消升级');
                            }
                        },
                        {
                            text: '确定',
                            handler: function () {
                                _this.download();
                            }
                        }
                    ]
                };
                App.ShowAlert(opts);
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    // 获取版本配置信息
    CheckAppUpdate.prototype.setUpdateInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://58mpay.com/pay/update.xml').toPromise()
                .then(function (resp) {
                console.log(resp.text());
                _this.xml = resp.text();
                _this.setVersion(parseInt(_this.getFromXml('version')));
                _this.setApkUrl(_this.getFromXml('url'));
                resolve();
            })
                .catch(function (error) {
                reject(error);
                console.log(error);
            });
        });
    };
    // 设置新版本
    CheckAppUpdate.prototype.setVersion = function (version) {
        this.version = version;
    };
    // apk下载路径
    CheckAppUpdate.prototype.setApkUrl = function (url) {
        this.apkUrl = url;
    };
    // 从xml中获取值
    CheckAppUpdate.prototype.getFromXml = function (key) {
        var arr = this.xml.match('<(' + key + ')>([^<>]+)<\/' + key + '>');
        if (arr.length > 2) {
            return arr[2];
        }
        return '';
    };
    // 当前版本
    CheckAppUpdate.prototype.setCurVersion = function () {
        var _this = this;
        this.appVersion.getVersionCode()
            .then(function (no) {
            _this.curVersion = parseInt(no);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    // 是否有版本更新
    CheckAppUpdate.prototype.hasNewVersion = function () {
        return this.curVersion > 0 && (this.curVersion < this.version);
    };
    // 下载apk
    CheckAppUpdate.prototype.download = function () {
        var _this = this;
        var apkName = '58pay.apk';
        var fileTransfer = this.fileTransfer.create();
        this.showProcess();
        fileTransfer.onProgress(function (progress) {
            var downloadProgress = (progress.loaded / progress.total) * 100;
            _this.showProcess();
            if (downloadProgress > 99) {
                App.HideLoading();
            }
        });
        this.file.createFile(this.getStoragePath, apkName, true).then(function (fileEntry) {
            fileTransfer.download(_this.apkUrl, fileEntry.toInternalURL(), true).then(function (entry) {
                _this.fileOpener.open(entry.toInternalURL(), 'application/vnd.android.package-archive')
                    .then(function (entry) {
                    console.log('打开成功');
                })
                    .catch(function (e) {
                    console.log('打开文件失败');
                    console.log(e);
                });
                ;
                App.HideLoading();
                console.log('download complete: ' + entry.toURL());
            })
                .catch(function (e) {
                console.log(e);
            });
        })
            .catch(function (e) {
            console.log('创建文件失败');
            console.log(e);
        });
    };
    // 显示下载进度条
    CheckAppUpdate.prototype.showProcess = function () {
        App.ShowLoading({ content: '下载中...' });
    };
    Object.defineProperty(CheckAppUpdate.prototype, "getStoragePath", {
        get: function () {
            if (App.IsAndroid && this.device.version > '7') {
                return this.file.dataDirectory;
            }
            return this.file.externalDataDirectory;
        },
        enumerable: true,
        configurable: true
    });
    CheckAppUpdate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]])
    ], CheckAppUpdate);
    return CheckAppUpdate;
}());

//# sourceMappingURL=checkAppUpdate.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_interceptor__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* "Barrel" of Http Interceptors */



/** Http interceptor providers in outside-in order */
/*export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];*/
var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_2__noop_interceptor__["a" /* NoopInterceptor */], multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoopInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pub_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/** Pass untouched request through to the next request handler. */
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        var jwtReq = req;
        if (!req.headers.has('Authorization')) {
            var token = localStorage.getItem('token');
            jwtReq = req.clone({ headers: req.headers.set('Authorization', "Bearer " + token) });
        }
        return next.handle(jwtReq).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (event) {
            console.log('response');
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                if (event.body.code === __WEBPACK_IMPORTED_MODULE_4__providers_pub_service__["a" /* TBaseService */].SESSION_TIMEOUT) {
                    App.Nav.push('LoginPage');
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('登录超时');
                }
                else if (event.body.code === __WEBPACK_IMPORTED_MODULE_4__providers_pub_service__["a" /* TBaseService */].REQ_FAIL) {
                    if (__WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(event.body.msg)) {
                        App.ShowError(event.body.msg);
                    }
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('请求失败');
                }
            }
        }));
    };
    // 错误处理
    NoopInterceptor.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log("Backend returned code " + error.status + ", body was: " + error.error);
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('Something bad happened; please try again later.');
    };
    NoopInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

//# sourceMappingURL=noop-interceptor.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var API_URL = 'http://39.104.113.132';
var TBaseService = /** @class */ (function () {
    function TBaseService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
    }
    Object.defineProperty(TBaseService.prototype, "BaseUrl", {
        get: function () {
            return API_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBaseService.prototype, "getToken", {
        get: function () {
            var token = localStorage.getItem('token');
            if (__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(token)) {
                return "Bearer " + token;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    // 设置请求头
    TBaseService.prototype.SetHeader = function (name, value) {
        this.headers.set(name, value);
    };
    // md5加密
    TBaseService.prototype.Md5T = function (Password) {
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(Password.toString());
    };
    // get请求
    TBaseService.prototype.Get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + '/' + uri;
                        return [4 /*yield*/, this.http.get(url, { headers: this.headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 发送POST请求
    TBaseService.prototype.Post = function (Uri, Data) {
        var url = API_URL + "/" + Uri;
        var params = this.params.toString();
        this.setNewParams();
        return this.http.post(url, params, { headers: this.headers });
    };
    TBaseService.prototype.PostNoLoading = function (Uri, Data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + '/' + Uri;
                        params = this.params.toString();
                        this.setNewParams();
                        return [4 /*yield*/, this.http.post(url, params, { headers: this.headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 设置参数
    TBaseService.prototype.SetParam = function (key, value) {
        if (this.params.has(key)) {
            this.params.set(key, value);
        }
        else {
            this.params.append(key, value);
        }
    };
    // 重置请求参数
    TBaseService.prototype.setNewParams = function () {
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
    };
    // 请求失败
    TBaseService.REQ_OK = 1;
    // 请求成功
    TBaseService.REQ_FAIL = 0;
    // 登录超时
    TBaseService.SESSION_TIMEOUT = 2;
    return TBaseService;
}());

//# sourceMappingURL=pub_service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IDCARD_HAND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BANKCARD_FRONT; });
/* unused harmony export BANKCARD_BACK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lrz__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// 附件类型-手持身份证
var IDCARD_HAND = 'idcard_hand';
// 附件类型-银行卡正面
var BANKCARD_FRONT = 'bankcard_front';
// 附件类型-银行卡反面
var BANKCARD_BACK = 'bankcard_back';
var FileService = /** @class */ (function (_super) {
    __extends(FileService, _super);
    function FileService(http, camera, fileTransfer) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.camera = camera;
        _this.fileTransfer = fileTransfer;
        _this.targetWidth = 532;
        _this.targetHeight = 292;
        _this.params = new FormData();
        return _this;
    }
    // 附件上传
    FileService.prototype.OcrUpload = function (fileKey, file, cType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PostFile('kpay/api/ocr/upload', fileKey, file, { 'type': cType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 身份认证
    FileService.prototype.IdentityAuth = function (file, cType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PostFile('kpay/api/ocr/idcard', 'file', file, { 'type': cType })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FileService.prototype.PostFiles = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PostByXMLHttpReq(uri).then(function (resp) { return resp; })];
                    case 1:
                        resp = _a.sent();
                        if (resp.code === 1) {
                            return [2 /*return*/, resp.data];
                        }
                        App.ShowError(resp.msg);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    FileService.prototype.PostFile = function (uri, fileKey, file, params) {
        return __awaiter(this, void 0, void 0, function () {
            var k, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (k in params) {
                            this.SetParam(k, params[k]);
                        }
                        this.SetParam(fileKey, file);
                        if (!window['cordova']) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PostByFileTransfer(uri, fileKey, file, params)
                                .then(function (resp) { return resp; })
                                .catch(function (error) {
                                App.ShowToast(error);
                            })];
                    case 1:
                        resp = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.PostByXMLHttpReq(uri, fileKey, file)
                            .then(function (resp) { return resp; })
                            .catch(function (error) {
                            App.ShowToast(error);
                        })];
                    case 3:
                        resp = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (resp.code === 1) {
                            return [2 /*return*/, resp.data];
                        }
                        App.ShowError(resp.msg);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    FileService.prototype.showAddImage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!window['cordova']) {
                var input_1 = document.createElement('input');
                input_1.type = 'file';
                input_1.accept = "image/png,image/jpeg,image/jpg,image/x-png";
                input_1.click();
                input_1.onchange = function () {
                    console.log(input_1.files[0]);
                    App.ShowLoading('处理中');
                    __WEBPACK_IMPORTED_MODULE_4_lrz___default()(input_1.files[0], {
                        quality: 0.5,
                        width: _this.targetWidth,
                        height: _this.targetHeight
                    })
                        .then(function (rst) {
                        // 处理成功会执行
                        console.log(rst);
                        var file = _this.dataURLtoFile(rst.base64, input_1.files[0].name);
                        var result = {
                            'file': file,
                            'base64': rst.base64,
                            'blob': window.URL.createObjectURL(file)
                        };
                        resolve(result);
                    })
                        .catch(function (err) {
                        // 处理失败会执行
                        console.log('LRZ: Compress image failed.');
                        console.log(err);
                    })
                        .always(function () {
                        // 不管是成功失败，都会执行
                        App.HideLoading();
                    });
                };
            }
            else {
                new Promise(function (resolve, reject) {
                    var actionSheetConfig = {
                        title: '添加图片',
                        buttons: [
                            {
                                text: '相册',
                                handler: function () {
                                    resolve(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                }
                            },
                            {
                                text: '相机',
                                handler: function () {
                                    resolve(_this.camera.PictureSourceType.CAMERA);
                                }
                            },
                            {
                                text: '取消',
                                role: 'cancel',
                                handler: function () {
                                    reject();
                                }
                            }
                        ]
                    };
                    App.ShowActionSheet(actionSheetConfig);
                }).then(function (sourceType) {
                    if (!window['cordova']) {
                        return;
                    }
                    var options = {
                        quality: 50,
                        sourceType: sourceType,
                        saveToPhotoAlbum: false,
                        correctOrientation: true,
                        targetWidth: _this.targetWidth,
                        targetHeight: _this.targetHeight
                    };
                    _this.camera.getPicture(options).then(function (imageData) {
                        if (imageData.indexOf('?') > -1) {
                            var arr = imageData.match(new RegExp(/[^?]+/, 'ig'));
                            if (arr.length > 0) {
                                imageData = arr[0];
                            }
                        }
                        var result = {
                            'file': imageData,
                            'base64': imageData,
                            'blob': imageData
                        };
                        resolve(result);
                    });
                }).catch(function (error) {
                    console.log('Camera failed.');
                    App.ShowToast('获取图片失败');
                    reject(error);
                });
            }
        });
    };
    FileService.prototype.dataURLtoBlob = function (dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    };
    FileService.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { 'type': mime });
    };
    FileService.prototype.PostByFileTransfer = function (uri, fileKey, file, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var BaseUrl = _this.BaseUrl;
            var url = BaseUrl + "/" + uri;
            if (window['cordova']) {
                var options = {
                    fileKey: fileKey,
                    fileName: file,
                    headers: {
                        'Authorization': _this.getToken
                    }
                };
                if (params) {
                    options.params = params;
                }
                var fileTransfer = _this.fileTransfer.create();
                // url = 'http://agent.hzspro.com/test.php';
                fileTransfer.upload(file, url, options)
                    .then(function (data) {
                    resolve(JSON.parse(data.response));
                })
                    .catch(function (error) {
                    App.ShowToast('上传失败');
                    reject(error);
                });
            }
        });
    };
    FileService.prototype.PostByXMLHttpReq = function (uri, fileKey, file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var BaseUrl = _this.BaseUrl;
                        var url = BaseUrl + "/" + uri;
                        if (fileKey && file) {
                            _this.SetParam(fileKey, file);
                        }
                        if (window.fetch) {
                            var opts = {
                                method: 'POST',
                                headers: {
                                    'Authorization': _this.getToken
                                },
                                body: _this.params
                            };
                            fetch(url, opts)
                                .then(function (resp) {
                                App.HideLoading();
                                resolve(resp.json());
                            })
                                .catch(function (error) {
                                App.HideLoading();
                                reject(error);
                            });
                        }
                        else {
                            var xhr_1 = new XMLHttpRequest();
                            xhr_1.onreadystatechange = function () {
                                if (xhr_1.readyState === 4) {
                                    if (xhr_1.status === 200) {
                                        resolve(JSON.parse(xhr_1.response));
                                    }
                                    else {
                                        reject(xhr_1);
                                    }
                                }
                            };
                            xhr_1.onloadend = function () {
                                App.HideLoading();
                            };
                            xhr_1.open('POST', url, true);
                            xhr_1.setRequestHeader('Authorization', _this.getToken);
                            xhr_1.send(_this.params);
                        }
                    })];
            });
        });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FileService);
    return FileService;
}(__WEBPACK_IMPORTED_MODULE_5__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=fileservice.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MineService = /** @class */ (function (_super) {
    __extends(MineService, _super);
    function MineService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    //获取取现记录列表
    MineService.prototype.GetCashList = function () {
        return this.Post('kpay/api/cash/getCashList');
    };
    // 获取取现记录详情
    MineService.prototype.GetCashDetail = function (orderId) {
        this.SetParam('id', orderId);
        return this.Post('kpay/api/cash/getCashDetail');
    };
    // 获取红包礼券voucher
    MineService.prototype.GetVoucherList = function () {
        return this.Post('kpay/api/cash/cashback/list');
    };
    // 获取我的客户
    MineService.prototype.GetMyCustomer = function () {
        return this.Post('kpay/api/user/mycustomer');
    };
    // 获取返现记录
    MineService.prototype.GetCashBack = function () {
        return this.Post('kpay/api/trade/list');
    };
    // 获取VIP套餐列表
    MineService.prototype.GetVipList = function () {
        return this.Post('kpay/api/package/list');
    };
    // 购买Vip
    MineService.prototype.BuyVip = function (id) {
        this.SetParam('packId', id);
        return this.Post('kpay/api/package/buy', { packId: id });
    };
    MineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MineService);
    return MineService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=mineservice.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map