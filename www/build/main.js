webpackJsonp([29],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pub_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helper_credential_helper__ = __webpack_require__(55);
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



var _ = __webpack_require__(74);


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
        return this.Post('kpay/api/bankcard/list').subscribe(function (resp) {
            var cards = resp.data;
            _this.updateCards(cards);
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
        return this.Post('kpay/api/bank/list');
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
        this.SetParam('token', __WEBPACK_IMPORTED_MODULE_4__shared_helper_credential_helper__["a" /* CredentialHelper */].getToken());
        if (cashbackId) {
            this.SetParam('cashbackId', cashbackId);
        }
        this.SetResponseType('text');
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
        return this.Post('kpay/api/trade/quickPay/sendVericode');
    };
    // 快捷取现确认
    HomeService.prototype.ConfirmResult = function (orderNo, smsCode) {
        this.SetParam('orderNo', orderNo);
        this.SetParam('smsCode', smsCode);
        return this.Post('kpay/api/trade/quickPay/confirm');
    };
    // 获取支持银行列表
    HomeService.prototype.SupportBanks = function () {
        App.ShowLoading();
        return this.Post('kpay/api/trade/supportbanks');
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}(__WEBPACK_IMPORTED_MODULE_3__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=homeservice.js.map

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		455,
		26
	],
	"../pages/findpassword/findpassword.module": [
		454,
		25
	],
	"../pages/home/addcreditcard/addcreditcard.module": [
		453,
		8
	],
	"../pages/home/adddeposit/adddeposit.module": [
		458,
		1
	],
	"../pages/home/branchcard/branchcard.module": [
		457,
		24
	],
	"../pages/home/cardinfor/cardinfor.module": [
		456,
		23
	],
	"../pages/home/changecards/changecards.module": [
		459,
		7
	],
	"../pages/home/checkout/checkout.module": [
		460,
		6
	],
	"../pages/home/confirminfo/confirminfo.module": [
		461,
		22
	],
	"../pages/home/creditcard/creditcard.module": [
		463,
		5
	],
	"../pages/home/finalpay/finalpay.module": [
		462,
		0
	],
	"../pages/home/home.module": [
		465,
		28
	],
	"../pages/home/listofbank/listofbank.module": [
		464,
		21
	],
	"../pages/home/resetpassword/resetpassword.module": [
		467,
		20
	],
	"../pages/home/supportbank/supportbank.module": [
		466,
		19
	],
	"../pages/login/login.module": [
		470,
		18
	],
	"../pages/modifypassword/modifypassword.module": [
		469,
		17
	],
	"../pages/register/register.module": [
		468,
		16
	],
	"../pages/setpassword/setpassword.module": [
		471,
		15
	],
	"../pages/start/start.module": [
		472,
		14
	],
	"../pages/tabs/tabs.module": [
		474,
		13
	],
	"../pages/thirdparty/thirdparty.module": [
		475,
		27
	],
	"../pages/ucenter/VIPmembers/VIPmembers.module": [
		480,
		12
	],
	"../pages/ucenter/mycard/mycard.module": [
		473,
		4
	],
	"../pages/ucenter/profile/profile.module": [
		476,
		11
	],
	"../pages/ucenter/records/detail/recorddetail.module": [
		477,
		3
	],
	"../pages/ucenter/records/records.module": [
		478,
		2
	],
	"../pages/ucenter/ucenter.module": [
		479,
		10
	],
	"../pages/ucenter/usetup/usetup.module": [
		481,
		9
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingHleper; });
var LoadingHleper = /** @class */ (function () {
    function LoadingHleper() {
    }
    LoadingHleper.setShowLoading = function (loading) {
        this.loading = loading;
    };
    LoadingHleper.setLoadingText = function (text) {
        this.loadingText = text;
    };
    LoadingHleper.showLoading = function () {
        if (this.loading) {
            App.ShowLoading(this.loadingText);
        }
    };
    LoadingHleper.hideLoading = function () {
        App.HideLoading();
        this.loading = true;
        this.loadingText = '处理中';
    };
    LoadingHleper.loading = true;
    LoadingHleper.loadingText = '处理中';
    return LoadingHleper;
}());

//# sourceMappingURL=loading-helper.js.map

/***/ }),

/***/ 254:
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

/***/ 255:
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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TApplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_root__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__ = __webpack_require__(55);
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
        // 所有页面路由
        _this.pages = __WEBPACK_IMPORTED_MODULE_2__shared_root__;
        // 项目名称
        _this.AppName = '5U卡贝';
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
    TApplication.prototype.IsReal = function (page) {
        if (!this.IsIdAuthed) {
            App.Nav.push(App.pages.authPage);
        }
        else if (page) {
            App.Nav.push(page);
        }
        else {
            return;
        }
    };
    Object.defineProperty(TApplication.prototype, "IsIdAuthed", {
        // 是否已完成身份认证
        get: function () {
            return App.UserInfo.idAuthed > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TApplication.prototype, "IsBankcardAuthed", {
        // 是否完成储蓄卡验证
        get: function () {
            return App.UserInfo.bankcardAuthed > 0;
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
    Object.defineProperty(TApplication.prototype, "authenticated", {
        // 是否已登录
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(__WEBPACK_IMPORTED_MODULE_5__shared_helper_credential_helper__["a" /* CredentialHelper */].getToken());
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BANKCARD_FRONT; });
/* unused harmony export BANKCARD_BACK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lrz__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
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





var lodash = __webpack_require__(74);


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
        _this.targetWidth = 800;
        _this.targetHeight = 600;
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
    // 图片上传
    FileService.prototype.ImageUpload = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PostFile('kpay/api/image/upload', 'image1', file, {})];
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
                    case 2: return [4 /*yield*/, this.PostByXMLHttpReq(uri, fileKey, file, params)
                            .then(function (resp) { return resp; })
                            .catch(function (error) {
                            App.ShowToast(error);
                        })];
                    case 3:
                        resp = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (__WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(resp) && resp.code === 1) {
                            return [2 /*return*/, resp.data];
                        }
                        if (__WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(resp) && resp.msg) {
                            App.ShowError(resp.msg);
                        }
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
                    App.ShowLoading('处理中');
                    __WEBPACK_IMPORTED_MODULE_4_lrz___default()(input_1.files[0], {
                        quality: 0.6,
                        width: _this.targetWidth,
                        height: _this.targetHeight
                    })
                        .then(function (rst) {
                        // 处理成功会执行
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
    FileService.prototype.PostByXMLHttpReq = function (uri, fileKey, file, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        if (lodash.keys(params).length > 0) {
                            lodash.forEach(params, function (v, k) {
                                formData.append(k, v);
                            });
                        }
                        var BaseUrl = _this.BaseUrl;
                        var url = encodeURI(BaseUrl + "/" + uri);
                        App.ShowLoading();
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', window.URL.createObjectURL(file), true);
                        xhr.responseType = 'blob';
                        xhr.onload = function (e) {
                            if (xhr['status'] != 200) {
                                App.ShowError('您的浏览器不支持Blob');
                                console.error(e, xhr);
                                reject(e);
                            }
                            else {
                                var blob = xhr['response'];
                                var xhr2_1 = new XMLHttpRequest();
                                xhr2_1.timeout = 30000;
                                var suffix = file.type.split('/')[1];
                                var filename = (new Date()).getTime() + '.' + suffix;
                                formData.append(fileKey, blob, filename);
                                xhr2_1.onerror = function (e) {
                                    App.HideLoading();
                                    reject(e);
                                };
                                xhr2_1.onloadend = function () {
                                    App.HideLoading();
                                };
                                xhr2_1.ontimeout = function (e) {
                                    App.ShowError('请求超时，请稍后重试');
                                    App.HideLoading();
                                    reject(e);
                                };
                                xhr2_1.onreadystatechange = function () {
                                    App.HideLoading();
                                    if (xhr2_1.readyState === 4) {
                                        if (xhr2_1.status === 200) {
                                            resolve(JSON.parse(xhr2_1.response));
                                        }
                                        else {
                                            reject(xhr2_1);
                                        }
                                    }
                                };
                                xhr2_1.open('POST', url, true);
                                xhr2_1.setRequestHeader('Authorization', _this.getToken);
                                xhr2_1.send(formData);
                            }
                        };
                        xhr.send();
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(54);
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
        return this.Post('kpay/api/package/buy');
    };
    MineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MineService);
    return MineService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=mineservice.js.map

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
    /**
     * Returns true if the value parameter is an empty object.
     * @param value
     * @param allowNull If false (default) null is not considered an object.
     * @returns {boolean}
     */
    function IsEmptyObject(value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return this.IsObject(value, allowNull) && JSON.stringify(value) === '{}';
    }
    TypeInfo.IsEmptyObject = IsEmptyObject;
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(278);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__UltraCreation_Native_StatusBar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__UltraCreation_Native_SplashScreen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__http_interceptors__ = __webpack_require__(360);
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
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* ProviderModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/home/addcreditcard/addcreditcard.module#AddCreditCardPageModule', name: 'AddCreditCardPage', segment: 'addcreditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findpassword/findpassword.module#FindPasswordPageModule', name: 'FindPasswordPage', segment: 'findpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/cardinfor/cardinfor.module#CardInforPageModule', name: 'CardInforPage', segment: 'cardinfor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/branchcard/branchcard.module#BranchcardPageModule', name: 'BranchcardPage', segment: 'branchcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/adddeposit/adddeposit.module#AddDepositPageModule', name: 'AddDepositPage', segment: 'adddeposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/changecards/changecards.module#ChangecardsPageModule', name: 'ChangecardsPage', segment: 'changecards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/confirminfo/confirminfo.module#ConfirminfoPageModule', name: 'ConfirminfoPage', segment: 'confirminfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/finalpay/finalpay.module#FinalpayPageModule', name: 'FinalpayPage', segment: 'finalpay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/creditcard/creditcard.module#CreditCardPageModule', name: 'CreditCardPage', segment: 'creditcard', priority: 'low', defaultHistory: ['CreditCardPage'] },
                        { loadChildren: '../pages/home/listofbank/listofbank.module#ListofbankPageModule', name: 'ListofbankPage', segment: 'listofbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/supportbank/supportbank.module#ListofbankPageModule', name: 'SupportBankPage', segment: 'supportbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/resetpassword/resetpassword.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'resetpassword/:mobile/:vcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifypassword/modifypassword.module#ModifyPasswordPageModule', name: 'ModifyPasswordPage', segment: 'modifypassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setpassword/setpassword.module#SetPasswordPageModule', name: 'SetPasswordPage', segment: 'setpassword/:mobile/:code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/mycard/mycard.module#MyCardPageModule', name: 'MyCardPage', segment: 'mycard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thirdparty/thirdparty.module#ThirdPartyPageModule', name: 'ThirdPartyPage', segment: 'thirdLogin/:mobile/:key', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/profile/profile.module#UinfoPageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/records/detail/recorddetail.module#OrdersPageModule', name: 'OrderDetailPage', segment: 'record/detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/records/records.module#RecordsPageModule', name: 'RecordsPage', segment: 'records', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/ucenter.module#UcenterPageModule', name: 'UcenterPage', segment: 'ucenter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/VIPmembers/VIPmembers.module#VIPmembersPageModule', name: 'VIPmembersPage', segment: 'VIPmembers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ucenter/usetup/usetup.module#UsetupPageModule', name: 'UsetupPage', segment: 'usetup', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_15__http_interceptors__["a" /* httpInterceptorProviders */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);

var UserHelper = /** @class */ (function () {
    function UserHelper() {
    }
    // 格式化手机号
    UserHelper.formatMobile = function (mobile) {
        return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
    };
    // 格式化身份证号
    UserHelper.formatIdCard = function (idcard) {
        return idcard.replace(/(\d{5})(\d{5,})(\d{5})/, '$1*****$3');
    };
    // 格式化真实姓名
    UserHelper.formatRealName = function (realName) {
        var str = '';
        if (!__WEBPACK_IMPORTED_MODULE_0__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(realName)) {
            return str;
        }
        var last = realName.substr(-1);
        for (var i = 0; i < realName.length - 1; i++) {
            str += '*';
        }
        return "" + str + last;
    };
    return UserHelper;
}());

//# sourceMappingURL=user-helper.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_application__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(73);
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
        this.App = App;
        this.auth = auth;
        // 启动页
        this.rootPage = 'TabsPage';
        App.Platform.ready()
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].hide();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].show();
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].overlaysWebView(true);
            if (App.IsIos) {
                __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].styleBlackTranslucent();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].backgroundColorByHexString('#569af3');
            }
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].hide();
            __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Native_StatusBar__["a" /* StatusBar */].show();
        }).then(function () {
            if (!_this.auth.shouldPassThrough) {
                _this.auth.GetUserData();
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNavController'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav #rootNavController [root]="rootPage"></ion-nav>'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_application__["a" /* TApplication */], __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* TAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAppController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_popover_popover_controller__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Core_Exception__ = __webpack_require__(354);
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

/***/ 354:
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsPage", function() { return tabsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePage", function() { return homePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardPage", function() { return creditCardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardInforPage", function() { return cardInforPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalPayPage", function() { return finalPayPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmInfoPage", function() { return confirmInfoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCreditCardPage", function() { return addCreditCardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCardsPage", function() { return changeCardsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDepositPage", function() { return addDepositPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBankPage", function() { return listBankPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branchcardPage", function() { return branchcardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPage", function() { return startPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyPasswordPage", function() { return modifyPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPasswordPage", function() { return findPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordPage", function() { return resetPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutPage", function() { return checkoutPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportBankPage", function() { return supportBankPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucenterPage", function() { return ucenterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPage", function() { return loginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thirdLoginPage", function() { return thirdLoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordPage", function() { return setPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPage", function() { return authPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordsPage", function() { return recordsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordDetailPage", function() { return recordDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilePage", function() { return profilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usetupPage", function() { return usetupPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vipMembersPage", function() { return vipMembersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCardPage", function() { return myCardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPage", function() { return registerPage; });
var tabsPage = 'TabsPage';
var homePage = 'HomePage';
var creditCardPage = 'CreditCardPage';
var cardInforPage = 'CardInforPage';
var finalPayPage = 'FinalpayPage';
var confirmInfoPage = 'ConfirminfoPage';
var addCreditCardPage = 'AddCreditCardPage';
var changeCardsPage = 'ChangecardsPage';
var addDepositPage = 'AddDepositPage';
var listBankPage = 'ListofbankPage';
var branchcardPage = 'BranchcardPage';
var startPage = 'StartPage';
var modifyPasswordPage = 'ModifyPasswordPage';
var findPasswordPage = 'FindPasswordPage';
var resetPasswordPage = 'ResetPasswordPage';
var checkoutPage = 'CheckoutPage';
var supportBankPage = 'SupportBankPage';
var ucenterPage = 'UcenterPage';
var loginPage = 'LoginPage';
var thirdLoginPage = 'ThirdPartyPage';
var setPasswordPage = 'SetPasswordPage';
var authPage = 'AuthPage';
var recordsPage = 'RecordsPage';
var recordDetailPage = 'OrderDetailPage';
var profilePage = 'ProfilePage';
var usetupPage = 'UsetupPage';
var vipMembersPage = 'VIPmembersPage';
var myCardPage = 'MyCardPage';
var registerPage = 'RegisterPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mineservice__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeservice__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileservice__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkAppUpdate__ = __webpack_require__(357);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAppUpdate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(253);
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_interceptor__ = __webpack_require__(361);
/* "Barrel" of Http Interceptors */
// import { NgModule } from '@angular/core';


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__noop_interceptor__["a" /* NoopInterceptor */], multi: true },
];
// @NgModule({
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
//   ]
// })
// export class InterceptorModule { }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoopInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_util_TimeoutError__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_util_TimeoutError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_util_TimeoutError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_helper_credential_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_helper_loading_helper__ = __webpack_require__(201);
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
        __WEBPACK_IMPORTED_MODULE_8__shared_helper_loading_helper__["a" /* LoadingHleper */].showLoading();
        var jwtReq = req;
        if (!req.headers.has('Authorization')) {
            var token = __WEBPACK_IMPORTED_MODULE_7__shared_helper_credential_helper__["a" /* CredentialHelper */].getToken();
            jwtReq = req.clone({ headers: req.headers.set('Authorization', "Bearer " + token) });
        }
        return next.handle(jwtReq).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["timeout"])(15000)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                __WEBPACK_IMPORTED_MODULE_8__shared_helper_loading_helper__["a" /* LoadingHleper */].hideLoading();
                if (event.body.code == __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__["a" /* TBaseService */].SESSION_TIMEOUT) {
                    var mobile = __WEBPACK_IMPORTED_MODULE_7__shared_helper_credential_helper__["a" /* CredentialHelper */].getMobile();
                    var secret = __WEBPACK_IMPORTED_MODULE_7__shared_helper_credential_helper__["a" /* CredentialHelper */].getSecret();
                    __WEBPACK_IMPORTED_MODULE_7__shared_helper_credential_helper__["a" /* CredentialHelper */].removeToken();
                    if (__WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(mobile) && __WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(secret)) {
                        App.Nav.setPages([{ page: App.pages.tabsPage }, { page: App.pages.thirdLoginPage, params: { mobile: mobile, key: secret } }]);
                    }
                    else {
                        App.Nav.setPages([{ page: App.pages.tabsPage }, { page: App.pages.loginPage }]);
                    }
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('登录超时');
                }
                else if (event.body.code == __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__["a" /* TBaseService */].REQ_FAIL) {
                    if (__WEBPACK_IMPORTED_MODULE_6__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(event.body.msg)) {
                        App.ShowError(event.body.msg);
                    }
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('请求成功，返回失败值');
                }
            }
        })).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // 错误处理
    NoopInterceptor.prototype.handleError = function (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_util_TimeoutError__["TimeoutError"]) {
            App.ShowError('请求超时，请稍后重新');
            console.log("Request timeout: " + error.message);
        }
        else if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log("Backend returned code " + error.status + ", body was: " + error.error);
        }
        __WEBPACK_IMPORTED_MODULE_8__shared_helper_loading_helper__["a" /* LoadingHleper */].hideLoading();
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_ErrorObservable__["ErrorObservable"]('Something bad happened; please try again later.');
    };
    NoopInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

//# sourceMappingURL=noop-interceptor.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helper_credential_helper__ = __webpack_require__(55);
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





var API_URL = 'https://h5.5ucardpay.com';
var TBaseService = /** @class */ (function () {
    function TBaseService(http) {
        this.http = http;
        // 设置接收后台数据的类型
        this.responseType = 'json';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
    }
    Object.defineProperty(TBaseService.prototype, "BaseUrl", {
        // 获取base url
        get: function () {
            return API_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBaseService.prototype, "getToken", {
        // 获取当前用户token
        get: function () {
            var token = __WEBPACK_IMPORTED_MODULE_4__shared_helper_credential_helper__["a" /* CredentialHelper */].getToken();
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
        var responstType = this.responseType;
        this.SetResponseType('json');
        this.setNewParams();
        return this.http.post(url, params, { headers: this.headers, responseType: responstType });
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
    // 设置数据返回类型
    TBaseService.prototype.SetResponseType = function (responstType) {
        this.responseType = responstType;
    };
    // 重置请求参数
    TBaseService.prototype.setNewParams = function () {
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
    };
    // 获取图片
    TBaseService.prototype.getImage = function (fileId) {
        this.SetParam('fileId', fileId);
        this.SetResponseType('blob');
        return this.Post('kpay/api/image/show');
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

/***/ 55:
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
    CredentialHelper.removeToken = function () {
        return localStorage.removeItem(CredentialHelper.tokenKey);
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pub_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homeservice__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_helper_loading_helper__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_helper_user_helper__ = __webpack_require__(304);
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




var _ = __webpack_require__(74);







var TAuthService = /** @class */ (function (_super) {
    __extends(TAuthService, _super);
    function TAuthService(http, location, homeService, domSanitizer) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.location = location;
        _this.homeService = homeService;
        _this.domSanitizer = domSanitizer;
        _this.App = window.App;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
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
        var _this = this;
        this.SetParam('mobile', Tel.toString());
        this.SetParam('password', this.Md5T(Password).toString());
        __WEBPACK_IMPORTED_MODULE_9__shared_helper_loading_helper__["a" /* LoadingHleper */].setLoadingText('登录中');
        this.Post('kpay/api/login').subscribe(function (resp) {
            if (resp.code === __WEBPACK_IMPORTED_MODULE_6__pub_service__["a" /* TBaseService */].REQ_OK) {
                __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].setToken(resp.data.token);
                _this.GetUserData();
                _this.homeService.GetCardList();
                App.Nav.push(App.pages.creditCardPage);
            }
        }, function (error) {
            console.log(error);
        });
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
        __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].removeToken();
        App.UserInfo = null;
        App.DisableHardwareBackButton();
        App.Nav.setPages([{ page: App.pages.loginPage }]);
    };
    Object.defineProperty(TAuthService.prototype, "IsLogin", {
        // 判断登录
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(__WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].getToken());
        },
        enumerable: true,
        configurable: true
    });
    // 校验token有效性
    TAuthService.prototype.CheckToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_9__shared_helper_loading_helper__["a" /* LoadingHleper */].setShowLoading(false);
                        return [4 /*yield*/, this.Post('kpay/api/checkToken').toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 修改用户信息
    TAuthService.prototype.ModifyUserInfo = function (json) {
        var _this = this;
        for (var k in json) {
            this.SetParam(k, json[k]);
        }
        this.Post('kpay/api/user/modify').subscribe(function (resp) {
            if (resp.code === __WEBPACK_IMPORTED_MODULE_6__pub_service__["a" /* TBaseService */].REQ_OK) {
                _this.GetUserData();
            }
        });
    };
    // 获取用户信息
    TAuthService.prototype.GetUserData = function () {
        var _this = this;
        return this.Post('kpay/api/user/info').subscribe(function (resp) {
            var userData = resp.data;
            if (__WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(userData)) {
                userData.idCardNo = __WEBPACK_IMPORTED_MODULE_10__shared_helper_user_helper__["a" /* UserHelper */].formatIdCard(userData.idCardNo);
                userData.formatedMobile = __WEBPACK_IMPORTED_MODULE_10__shared_helper_user_helper__["a" /* UserHelper */].formatMobile(userData.mobile.toString());
                userData.name = __WEBPACK_IMPORTED_MODULE_10__shared_helper_user_helper__["a" /* UserHelper */].formatRealName(userData.name);
                if (__WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(userData.avatar)) {
                    _this.getImage(userData.avatar).subscribe(function (resp) {
                        userData.avatar = _this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(resp));
                        _this.updateUser(userData);
                    });
                }
                else {
                    userData.avatar = 'assets/imgs/user.png';
                }
                _this.updateUser(userData);
            }
        }, function (error) {
            console.log(error);
        });
    };
    // 第三方登录
    TAuthService.prototype.thirdPartyLogin = function (mobile, key) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].setMobile(mobile);
        __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].setSecret(key);
        this.SetParam('mobile', mobile);
        this.SetParam('key', key);
        __WEBPACK_IMPORTED_MODULE_9__shared_helper_loading_helper__["a" /* LoadingHleper */].setLoadingText('登录中');
        return this.Post('kpay/api/login/partner').subscribe(function (resp) {
            if (__WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(resp.data) && !__WEBPACK_IMPORTED_MODULE_5__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].IsEmptyObject(resp.data)) {
                __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].setToken(resp.data.token);
                _this.GetUserData();
                _this.homeService.GetCardList();
                App.Nav.setRoot(App.pages.creditCardPage);
            }
            else {
                App.Nav.setRoot(App.pages.loginPage);
            }
        }, function (error) {
            console.error(error);
        });
    };
    // 重新登录
    TAuthService.prototype.thirdPartyReLogin = function () {
        var mobile = __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].getMobile();
        var secret = __WEBPACK_IMPORTED_MODULE_8__shared_helper_credential_helper__["a" /* CredentialHelper */].getSecret();
        this.thirdPartyLogin(mobile, secret);
    };
    // 是否不需要登录
    TAuthService.prototype.shouldPassThrough = function () {
        var paths = ['/register', '/login', '/findpassword', '/home', '/tabs/0/home', '/thirdlogin'];
        return _.indexOf(paths, decodeURIComponent(this.location.path()).toLocaleLowerCase()) > -1;
    };
    TAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_7__homeservice__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TAuthService);
    return TAuthService;
}(__WEBPACK_IMPORTED_MODULE_6__pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=auth.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map