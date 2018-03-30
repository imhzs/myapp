webpackJsonp([0],{

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 19:
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
        // Fallback to ordinary array
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

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(74);
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



var HomeService = /** @class */ (function (_super) {
    __extends(HomeService, _super);
    function HomeService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    // 身份证认证
    HomeService.prototype.VerifyId = function (idcardNo, name, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('idcardNo', idcardNo);
                        this.SetParam('name', name);
                        if (mobile) {
                            this.SetParam('mobile', mobile);
                        }
                        App.ShowLoading('验证中...');
                        return [4 /*yield*/, this.Post('kpay/api/idcard/auth').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            App.HideLoading();
                            return [2 /*return*/, true];
                        }
                        else {
                            App.HideLoading();
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取当日分润明细
    HomeService.prototype.GetProfitToday = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/myprofit/today').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行卡列表
    HomeService.prototype.GetCardList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        // console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 设置银行卡主卡
    HomeService.prototype.SetPrimCard = function (cardId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('cardId', cardId);
                        return [4 /*yield*/, this.Post('kpay/api/bankcard/setPrimary').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 添加信用卡
    HomeService.prototype.AddCreditCard = function (cardNo, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('cardNo', cardNo);
                        this.SetParam('mobile', mobile);
                        return [4 /*yield*/, this.Post('kpay/api/bankcard/addCredit').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 添加储蓄卡
    HomeService.prototype.AddDeposiCard = function (cardNo, bankName, bankNo, branchName, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('cardNo', cardNo);
                        this.SetParam('bankName', bankName);
                        this.SetParam('bankNo', bankNo);
                        this.SetParam('branchName', branchName);
                        this.SetParam('mobile', mobile);
                        return [4 /*yield*/, this.Post('kpay/api/bankcard/addDeposit').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 删除银行卡
    HomeService.prototype.DelCard = function (cardId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('cardId', cardId);
                        return [4 /*yield*/, this.Post('kpay/api/bankcard/del').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行总行信息
    HomeService.prototype.GetTolBanks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bank/info').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取银行支行信息
    HomeService.prototype.GetBranchBanks = function (massage) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('name', massage);
                        return [4 /*yield*/, this.PostNoLoading('kpay/api/bank/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 取现可用返现券
    HomeService.prototype.GetAvaCash = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('amount', amount);
                        return [4 /*yield*/, this.Post('kpay/api/cash/cashback/available').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1 && result.data) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行取现列表
    HomeService.prototype.GetBankPage = function (cardId, enterCardId, amount, cashbackId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('cardId', cardId);
                        this.SetParam('enterCardId', enterCardId);
                        this.SetParam('amount', Math.round(amount * 100));
                        this.SetParam('token', localStorage.getItem('token'));
                        if (cashbackId) {
                            this.SetParam('cashbackId', cashbackId);
                        }
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/request').then(function (res) { return res.text(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 快捷取现获取验证码
    HomeService.prototype.GetVerifyode = function (acctNo, cvn2, expDate, mobile, amount, cashbackId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('acctNo', acctNo);
                        this.SetParam('cvn2', cvn2);
                        this.SetParam('amount', Math.round(amount * 100));
                        this.SetParam('mobile', mobile);
                        this.SetParam('expDate', expDate);
                        if (cashbackId) {
                            this.SetParam('cashbackId', cashbackId);
                        }
                        App.ShowLoading('验证中...');
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/sendVericode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.HideLoading();
                            App.ShowToast('验证码发送成功');
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.HideLoading();
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 快捷取现确认
    HomeService.prototype.ConfirmResult = function (orderNo, smsCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('orderNo', orderNo);
                        this.SetParam('smsCode', smsCode);
                        App.ShowLoading('确认中...');
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/confirm').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            App.HideLoading();
                            return [2 /*return*/, true];
                        }
                        else if (result.code === 0) {
                            App.HideLoading();
                            App.ShowError(result.msg);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=homeservice.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pub_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UltraCreation_Native_Network__ = __webpack_require__(483);
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





var TAuthService = /** @class */ (function (_super) {
    __extends(TAuthService, _super);
    function TAuthService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    TAuthService.prototype.judgeLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.IsLogin) return [3 /*break*/, 1];
                        return [2 /*return*/, App.RootPage.TabsPage];
                    case 1: return [4 /*yield*/, this.CheckToken()];
                    case 2:
                        if (!(_a.sent())) {
                            return [2 /*return*/, App.RootPage.TabsPage];
                            // return App.RootPage.StartPage;
                        }
                        else if (!__WEBPACK_IMPORTED_MODULE_4__UltraCreation_Native_Network__["a" /* Network */].IsOnline) {
                            return [2 /*return*/, App.RootPage.TabsPage];
                            // return App.RootPage.StartPage;
                        }
                        else {
                            // this.GetUserData();
                            return [2 /*return*/, App.RootPage.TabsPage];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 登录
    TAuthService.prototype.Login = function (Tel, Password) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', Tel.toString());
                        this.SetParam('password', this.Md5T(Password).toString());
                        return [4 /*yield*/, this.Post('kpay/api/login').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.EnableHardwareBackButton();
                            localStorage.setItem('token', result.data.token);
                            this.GetUserData().then(function () { return App.Nav.push(App.RootPage.TabsPage); });
                        }
                        else {
                            App.HideLoading();
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 校验找回密码短信验证码
    TAuthService.prototype.GetFindPwdData = function (tel, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', tel.toString());
                        this.SetParam('veriCode', VCode);
                        return [4 /*yield*/, this.Post('kpay/api/checkPwdVeriCode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.Nav.push(App.RootPage.ResetpwdPage, { mobile: tel, code: VCode });
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取找回密码短信验证码
    TAuthService.prototype.GetResetPwdData = function (tel) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', tel.toString());
                        return [4 /*yield*/, this.Post('kpay/api/getPwdVericode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 修改用户密码
    TAuthService.prototype.GetchangePsdData = function (tel, pwd, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', tel.toString());
                        this.SetParam('password', this.Md5T(pwd).toString());
                        this.SetParam('veriCode', VCode);
                        return [4 /*yield*/, this.Post('kpay/api/user/changePassword').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast('更改成功，请重新登陆');
                            App.Nav.push(App.RootPage.LoginPage);
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取修改密码验证码
    TAuthService.prototype.getPwdVericode = function (mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', mobile);
                        return [4 /*yield*/, this.Post('kpay/api/getPwdVericode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // 注册
    TAuthService.prototype.SignIn = function (Tel, Password, Code, Recommend) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', Tel.toString());
                        this.SetParam('password', this.Md5T(Password).toString());
                        this.SetParam('veriCode', Code);
                        if (Recommend) {
                            this.SetParam('referee', Recommend);
                        }
                        return [4 /*yield*/, this.Post('kpay/api/register').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast("注册成功,请登陆");
                            App.Nav.push(App.RootPage.LoginPage);
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取注册验证码
    TAuthService.prototype.GetVerifyCode = function (Tel) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', Tel.toString());
                        return [4 /*yield*/, this.Post('kpay/api/getVericode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // 验证注册验证码
    TAuthService.prototype.CheckVerifyCode = function (Tel, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('mobile', Tel.toString());
                        this.SetParam('veriCode', VCode);
                        return [4 /*yield*/, this.Post('kpay/api/checkRegVeriCode').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        // return result;
                        if (result.code === 1) {
                            App.Nav.push(App.RootPage.SetPwdPage, { mobile: Tel, code: VCode });
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 退出登陆
    TAuthService.prototype.Logout = function () {
        localStorage.removeItem('token');
        App.UserInfo = {};
        App.DisableHardwareBackButton();
        App.Nav.push(App.RootPage.StartPage);
    };
    Object.defineProperty(TAuthService.prototype, "IsLogin", {
        // 判断登录
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(localStorage.getItem('token'));
        },
        enumerable: true,
        configurable: true
    });
    // 校验token有效性
    TAuthService.prototype.CheckToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/checkToken').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1)
                            return [2 /*return*/, true];
                        return [2 /*return*/, false];
                }
            });
        });
    };
    // 修改用户信息
    TAuthService.prototype.ModifyUserInfo = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var k, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (k in json) {
                            this.SetParam(k, json[k]);
                        }
                        return [4 /*yield*/, this.Post('kpay/api/user/modify').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast('用户信息修改成功！');
                        }
                        else {
                            App.ShowError('result.msg');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户信息
    TAuthService.prototype.GetUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/info').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            result.data.canTrade = '1';
                            App.UserInfo = result.data;
                            result.data.vip === '1' ? App.IsVip = true : App.IsVip = false;
                            result.data.canTrade === '1' ? App.CanTrade = true : App.CanTrade = false;
                        }
                        else {
                            App.ShowError(result.msg).then(function () { return _this.Logout(); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TAuthService);
    return TAuthService;
}(__WEBPACK_IMPORTED_MODULE_3__pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(19);
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(19);
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(469);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__application__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appservice__ = __webpack_require__(508);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mineservice__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__mineservice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeservice__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__homeservice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileservice__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__fileservice__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkAppUpdate__ = __webpack_require__(510);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__checkAppUpdate__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home__ = __webpack_require__(473);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return __WEBPACK_IMPORTED_MODULE_1__pages_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_creditCard__ = __webpack_require__(475);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPage", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_home_creditCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_cardInfor__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardInforPage", function() { return __WEBPACK_IMPORTED_MODULE_3__pages_home_cardInfor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FinalpayPage", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo__ = __webpack_require__(481);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirminfoPage", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_addcredits__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddCreditPage", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_home_addcredits__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChangecardsPage", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepositPage", function() { return __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListofbankPage", function() { return __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BranchcardPage", function() { return __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_start__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return __WEBPACK_IMPORTED_MODULE_11__pages_start__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modifypwd__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModifypwdPage", function() { return __WEBPACK_IMPORTED_MODULE_12__pages_modifypwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_findpwd__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FindpwdPage", function() { return __WEBPACK_IMPORTED_MODULE_13__pages_findpwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_resetpwd__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPage", function() { return __WEBPACK_IMPORTED_MODULE_14__pages_home_resetpwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_checkout__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return __WEBPACK_IMPORTED_MODULE_15__pages_home_checkout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ucenter__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UcenterPage", function() { return __WEBPACK_IMPORTED_MODULE_16__pages_ucenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login__ = __webpack_require__(496);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return __WEBPACK_IMPORTED_MODULE_17__pages_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loan__ = __webpack_require__(497);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoanPage", function() { return __WEBPACK_IMPORTED_MODULE_18__pages_loan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_SetPwd__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SetPwdPage", function() { return __WEBPACK_IMPORTED_MODULE_19__pages_SetPwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_auth__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return __WEBPACK_IMPORTED_MODULE_20__pages_auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_orders__ = __webpack_require__(500);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_orders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_records__ = __webpack_require__(501);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPage", function() { return __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_records__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_uinfo__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UinfoPage", function() { return __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_uinfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_usetup__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UsetupPage", function() { return __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_usetup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_VIPmembers__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VIPmembersPage", function() { return __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_VIPmembers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_mycard__ = __webpack_require__(505);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPage", function() { return __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_mycard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_register__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return __WEBPACK_IMPORTED_MODULE_27__pages_register__["a"]; });
// import { from } from 'rxjs/observable/from';




























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(391);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UltraCreation_Native_StatusBar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UltraCreation_Native_SplashScreen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var config = {
    backButtonText: '',
    pageTransitionDelay: 0,
    swipeBackEnabled: false,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], config, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__pages__["a" /* PagesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_7__UltraCreation_Native_StatusBar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers__["e" /* TApplication */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["f" /* TAuthService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["b" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["d" /* MineService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["c" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["a" /* CheckAppUpdate */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(242);
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
    function MyApp(App, Auth, appUpdate) {
        var _this = this;
        this.Auth = Auth;
        this.appUpdate = appUpdate;
        App.Platform.ready().then(function () {
            _this.appUpdate.appUpdate();
            __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].show();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].hide();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].overlaysWebView(true);
            if (App.IsIos) {
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].styleBlackTranslucent();
            }
            else {
                // StatusBar.styleBlackTranslucent();
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].backgroundColorByHexString('#2D93F3');
            }
        })
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].hide();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].show();
        })
            .then(function () {
            _this.Auth.judgeLogin().then(function (root) { return _this.rootPage = root; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-nav #rootNavController [root]=\"rootPage\"></ion-nav>"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["e" /* TApplication */], __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* CheckAppUpdate */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TApplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_root__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
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
    function TApplication(Injector) {
        var _this = _super.call(this, Injector) || this;
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
                return { backgroundImage: 'url(' + localStorage.getItem('imageface') + ')' };
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    TApplication.prototype.IsReal = function (page) {
        if (parseInt(App.UserInfo.idAuthed) !== 1) {
            App.Nav.push(App.RootPage.NoldentifyPage);
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
            return parseInt(App.UserInfo.idAuthed) > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TApplication.prototype, "IsBankcardAuthed", {
        // 是否完成储蓄卡验证
        get: function () {
            return parseInt(App.UserInfo.bankcardAuthed) > 0;
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
            if (this.UserFace === null && this.UserInfo.sex === '男') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TApplication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TApplication);
    return TApplication;
}(__WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__["a" /* TAppController */]));

//# sourceMappingURL=application.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAppController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_popover_popover_controller__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Core_Exception__ = __webpack_require__(471);
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












var TAppController = /** @class */ (function () {
    function TAppController(Injector) {
        this.Injector = Injector;
        this.Instance = Injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */]);
        this.Platform = Injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */]);
        this.ToastCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]);
        this.AlertCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]);
        this.ModalCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]);
        this.LoadingCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]);
        this.ActionSheetCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]);
        this.PopoverCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_popover_popover_controller__["a" /* PopoverController */]);
        this.Translation = Injector.get(__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]);
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
            var trace, msg, lang_id, localize_msg, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config)) {
                            config = {};
                        }
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                            if (err instanceof Error) {
                                console.error(err.stack);
                            }
                            else {
                                trace = new Error();
                                console.error(trace.stack);
                            }
                        }
                        if (err instanceof __WEBPACK_IMPORTED_MODULE_11__Core_Exception__["a" /* EAbort */]) {
                            console.warn(err.message);
                            return [2 /*return*/];
                        }
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].IsString(err)) {
                            msg = err;
                        }
                        else if (err instanceof Error) {
                            msg = err.message;
                        }
                        else if (err instanceof __WEBPACK_IMPORTED_MODULE_11__Core_Exception__["b" /* Exception */]) {
                            msg = err.message;
                        }
                        else {
                            msg = '';
                        }
                        if (!(msg !== '')) return [3 /*break*/, 4];
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config) && __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config.prefix_lang)) {
                            lang_id = config.prefix_lang + msg;
                            localize_msg = this.Translate(lang_id);
                            if (localize_msg !== lang_id) {
                                msg = localize_msg;
                            }
                        }
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
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts.enableBackdropDismiss))
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
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Toast)) return [3 /*break*/, 2];
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
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading)) {
                            return [2 /*return*/];
                        }
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opt.spinner)) {
                            opt.spinner = 'ios';
                        }
                        this.IsManualHideLoading = false;
                        this.Loading = this.LoadingCtrl.create(opt);
                        this.Loading.onDidDismiss(function () {
                            if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Loading)) {
                                _this.Loading = undefined;
                            }
                            if (!_this.IsManualHideLoading && __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(timeout)) {
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
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading)) return [3 /*break*/, 5];
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
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts)) {
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
    /* langulage support */
    TAppController.prototype.SetDefaultLanguage = function (lang) {
        this.Translation.setDefaultLang(lang);
    };
    Object.defineProperty(TAppController.prototype, "Languages", {
        get: function () {
            return this.Translation.getLangs();
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.AddLanguage = function (Name, Translation, Merge) {
        if (Merge === void 0) { Merge = false; }
        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(Translation)) {
            this.Translation.setTranslation(Name, Translation, Merge);
        }
        else {
            this.Translation.addLangs([Name]);
        }
        if (this.Languages.length === 1) {
            this.Translation.setDefaultLang(Name);
        }
    };
    Object.defineProperty(TAppController.prototype, "Language", {
        get: function () {
            var RetVal = this.Translation.currentLang;
            if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(RetVal)) {
                return RetVal;
            }
            else {
                return 'en';
            }
        },
        set: function (Value) {
            this.Translation.use(Value);
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.Translate = function (Key) {
        return this.Translation.instant(Key);
    };
    TAppController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TAppController);
    return TAppController;
}());

//# sourceMappingURL=appcontroller.js.map

/***/ }),

/***/ 471:
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

/***/ 472:
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
        this.tab1Root = App.RootPage.HomePage;
        this.tab2Root = App.RootPage.LoanPage;
        this.tab3Root = App.RootPage.ApplycardPage;
        this.tab4Root = App.RootPage.UcenterPage;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\tabs\index.html"*/'<ion-tabs class="bottom-tabs">\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="tab-home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="借贷" tabIcon="tab-dr" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="办卡" tabIcon="tab-card" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="tab-mine" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\tabs\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
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
    function HomePage(zone, Service) {
        this.zone = zone;
        this.Service = Service;
        this.App = window.App;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\index.html"*/'<ion-header>\n\n  <ion-grid>\n\n    <ion-row class="border-bottom-1px">\n\n      <ion-col col-1>\n\n        <ion-icon name="volume-up"></ion-icon>\n\n      </ion-col>\n\n      <ion-col cil-11>我的通知</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n\n\n<ion-content class="home-page">\n\n  <ion-grid class="page-content">\n\n    <ion-row align-items-center justify-content-center class="border-bottom-1px" p-b-10>\n\n      <ion-col col-10 col-xs-8 col-md-6 col-lg-4>\n\n        <button type="button" class="btn-home-pay" ion-button full>刷卡收款</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row p-t-15>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.AuthPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/a-credit.png" alt="办信用卡" width="60" height="60" />\n\n          <label text-center>办信用卡</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.AddDepositCamPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="身份认证" width="60" height="60" />\n\n          <label text-center>身份认证</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" [navPush]="App.RootPage.MycardPage" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="会员福利" width="60" height="60" />\n\n          <label text-center>会员福利</label>\n\n        </a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>新手大礼包</ion-label>\n\n        <div>\n\n          <img src="assets/imgs/zhengm.png" />\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>  \n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>vip专区</ion-label>\n\n        <div>\n\n          <img src="assets/imgs/zhengm.png" />\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>  \n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-label>精选信用卡</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="办信用卡" width="60" height="60" />\n\n          <label text-center>办信用卡</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="身份认证" width="60" height="60" />\n\n          <label text-center>身份认证</label>\n\n        </a>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <a href="#" class="d-flex flex-column align-items-center">\n\n          <img src="assets/imgs/ca_per.png" alt="会员福利" width="60" height="60" />\n\n          <label text-center>会员福利</label>\n\n        </a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
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
    function CreditCardPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.CreditCards = new Array();
        this.DepositCards = new Array();
        this.HeadTitle = "刷卡提现";
        // 金额
        this.Amount = {
            InputAmount: undefined,
            OutputAmount: undefined
        };
        // 是否可以提交标识
        this.CanSubmited = false;
        // this.GetCardList();
        this.Rate = App.UserInfo.rate;
    }
    CreditCardPage_1 = CreditCardPage;
    CreditCardPage.prototype.ngOnInit = function () {
    };
    CreditCardPage.prototype.GetCardList = function () {
        var _this = this;
        this.Service.GetCardList().then(function (res) {
            if (!__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(res.length) || res.length === 0) {
                return;
            }
            _this.CardList = new Array();
            _this.CreditCards = new Array();
            _this.DepositCards = new Array();
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                _this.CardList.push(item);
                if (item.type === '0') {
                    _this.CreditCards.push(item);
                    if (item.primary === '1') {
                        App.CurrentCreditCards = _this.CurrentCreditCard = item;
                    }
                }
                if (item.type === '1') {
                    _this.DepositCards.push(item);
                    _this.CurrentDepositCard = item;
                }
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    CreditCardPage.prototype.InputAmount = function () {
        if (!this.Amount.InputAmount) {
            this.Amount.OutputAmount = undefined;
            return;
        }
        this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Rate / 100)) * 10) / 10;
    };
    CreditCardPage.prototype.ConfirmPay = function () {
        var _this = this;
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
        this.CanSubmited = true;
        this.Service.GetBankPage(this.CurrentCreditCard.id, this.CurrentDepositCard.id, this.Amount.InputAmount).then(function (res) {
            _this.CanSubmited = false;
            // 跳转银联页面
            if (res) {
                if (res.indexOf('<html>') == -1) {
                    var data = JSON.parse(res);
                    App.ShowError(data.respMsg);
                }
                else {
                    App.Nav.push(App.RootPage.FinalpayPage, { innerHtml: res });
                }
            }
            else {
                App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
            }
        });
    };
    CreditCardPage.prototype.ChangeCard = function () {
        var _this = this;
        App.ShowModal(App.RootPage.ChangecardsPage, this.CreditCards).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(data)) {
                    App.CurrentCreditCards = _this.CurrentCreditCard = data;
                    _this.CreditCards.forEach(function (item) {
                        if (item.id === data.id) {
                            item.primary = '1';
                        }
                        else {
                            item.primary = '0';
                        }
                    });
                }
            });
        });
    };
    CreditCardPage.prototype.AddCreditCard = function () {
        if (!App.IsIdAuthed) {
            App.Nav.push(App.RootPage.AuthCardPage);
        }
        else {
            App.Nav.push(App.RootPage.AddCreditPage, CreditCardPage_1);
        }
    };
    CreditCardPage = CreditCardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-creditCard',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\creditCard\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="h-creditcard-page">\n\n  <ion-grid class="page-content">\n\n    <ion-row justify-content-center>\n\n      <ion-col col-12>\n\n        <ion-label>付款信用卡</ion-label>\n\n      </ion-col>\n\n      <!-- 未添加信用卡 -->\n\n      <ion-col col-12 class="card no-card" text-center *ngIf="!CurrentCreditCard">\n\n        <button ion-button icon-left class="bg-transparent">\n\n          <ion-icon name="add-circle" color="primary"></ion-icon>\n\n          <span ion-text color="primary">添加信用卡</span>\n\n        </button>\n\n      </ion-col>\n\n      <!-- 未添加信用卡 -->\n\n\n\n      <!-- 已添加信用卡 -->\n\n      <ion-col col-12 class="d-flex flex-column justify-content-between card has-card" p-h-10 p-v-10 *ngIf="CurrentCreditCard">\n\n        <div class="d-flex justify-content-between">\n\n          <div class="flex-fill d-flex align-items-center justify-content-start">\n\n            <ion-img class="icon-bank" src="assets/banklogo/bank_308.png" alt="银行"></ion-img>\n\n            <span ion-text f-14 text-light m-l-5>招商银行</span>\n\n          </div>\n\n          <div class="flex-fill" text-right>\n\n            <button type="button" ion-button class="bg-transparent btn-change" no-padding no-margin>更换</button>\n\n          </div>\n\n        </div>\n\n        <div>\n\n          <span ion-text text-light>**** **** **** 1483</span>\n\n        </div>\n\n      </ion-col>\n\n      <!-- 已添加信用卡 -->\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-12>\n\n        <ion-label>收款储蓄卡</ion-label>\n\n      </ion-col>\n\n      <!-- 未添加储蓄卡 -->\n\n      <ion-col col-12 class="card no-card" text-center *ngIf="!CurrentDepositCard">\n\n        <button ion-button icon-left class="bg-transparent">\n\n          <ion-icon name="add-circle" color="primary"></ion-icon>\n\n          <span ion-text color="primary">收款储蓄卡</span>\n\n        </button>\n\n      </ion-col>\n\n      <!-- 未添加储蓄卡 -->\n\n\n\n      <!-- 已添加储蓄卡 -->\n\n      <ion-col col-12 class="d-flex flex-column justify-content-between card has-card" p-h-10 p-v-10 *ngIf="CurrentDepositCard">\n\n        <div class="d-flex justify-content-between">\n\n          <div class="flex-fill d-flex align-items-center justify-content-start">\n\n            <ion-img class="icon-bank" src="assets/banklogo/bank_308.png" alt="银行"></ion-img>\n\n            <span ion-text f-14 text-light m-l-5>招商银行</span>\n\n          </div>\n\n          <div class="flex-fill" text-right>\n\n            <button type="button" ion-button class="bg-transparent btn-change" no-padding no-margin>更换</button>\n\n          </div>\n\n        </div>\n\n        <div>\n\n          <span ion-text text-light>**** **** **** 1483</span>\n\n        </div>\n\n      </ion-col>\n\n      <!-- 已添加储蓄卡 -->\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="page-content" m-t-10 p-b-10>\n\n    <ion-row class="border-bottom-1px">\n\n      <ion-col>\n\n        <ion-label>收款金额(元)</ion-label>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-input type="number" name="amount" ([ngModel])="Amount.InputAmount" no-margin f-30 placeholder="500-20000"></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row p-t-5>\n\n      <ion-col class="l-h-d">\n\n        <p ion-text text-gray>费率：{{Rate}}%+3元，保底8元</p>\n\n        <p ion-text text-gray>交易时间：9:00-21:00，立即到账</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button type="button" ion-button full [disabled]="!CanSubmited" [class.btn-disabled]="!CanSubmited">下一步</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\creditCard\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], CreditCardPage);
    return CreditCardPage;
    var CreditCardPage_1;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInforPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
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
        this.Form_Group_Info = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            CVN: this.CVN = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3)
            ]),
            CardDate: this.CardDate = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            VerifyCode: this.VerifyCode = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)
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
        var _this = this;
        this.Service.GetAvaCash(this.Params.OutputAmount).then(function (res) {
            _this.Voucher = res;
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
                .then(function (res) {
                if (res) {
                    _this.OrderNo = res;
                    _this.times();
                }
            });
        }
        else {
            this.Service.GetVerifyode(this.Params.Code, this.Form_Group_Info.value.CVN, this.Form_Group_Info.value.CardDate, this.Params.Mobile, this.Params.OutputAmount)
                .then(function (res) {
                if (res) {
                    _this.OrderNo = res;
                    _this.times();
                }
            });
        }
    };
    CardInforPage.prototype.ConfirmCode = function () {
        var _this = this;
        if (!this.OrderNo) {
            App.ShowError('验证码输入不正确');
            return;
        }
        this.Service.ConfirmResult(this.OrderNo, this.Form_Group_Info.value.VerifyCode).then(function (res) {
            if (res) {
                App.Nav.push(App.RootPage.ConfirminfoPage, { InCard: _this.Params.DepositCard, FinalAmount: _this.Params.InputAmount, CardCode: _this.Params.DepositCode });
            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cardInfor',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\cardInfor\index.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n  <ion-toolbar no-padding>\n    <ion-grid class="list-grid-default bgc-grad-primary">\n      <ion-row padding-vertical>\n        <ion-col>\n          <ul class="list-row-inner">\n            <li class="title" text-center>\n              <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.OutputAmount}}</div>\n              <p class="color-fopacity-7">收款金额</p>\n            </li>\n            <li class="title" text-center>\n              <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.InputAmount}}</div>\n              <p class="color-fopacity-7">到账金额</p>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="grid-inforlist-default" m-b-10>\n    <ion-row class="border-last">\n      <ion-col col-4>收款储蓄卡</ion-col>\n      <ion-col>\n        <span class="bank-face"><img src="assets/banklogo/bank_{{Params.DepositCode}}.png"></span>\n        <span>{{Params.DepositCard}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form novalidate [formGroup]="Form_Group_Info">\n    <ion-grid class="grid-inforlist-default" m-b-10>\n      <ion-row>\n        <ion-col col-4>付款信用卡</ion-col>\n        <ion-col>\n          <span class="bank-face"><img src="assets/banklogo/bank_{{Params.CreditCode}}.png"></span>\n          <span>{{Params.CreditCard}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>CVN2</ion-col>\n        <ion-col col-6><ion-input type=\'number\' placeholder="卡片背面末三位数" formControlName="CVN"></ion-input></ion-col>\n        <ion-col (click)="ShowBackEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n      </ion-row>\n      <ion-row class="border-last">\n        <ion-col col-4>有效期</ion-col>\n        <ion-col col-6><ion-input type=\'number\' placeholder="卡片正面有效期" formControlName="CardDate"></ion-input></ion-col>\n        <ion-col (click)="ShowFrontEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="grid-inforlist-default" m-b-10 *ngIf="Voucher.length > 0">\n      <ion-row class="border-last" (click)="ClickUserVoucher()">\n        <ion-col col-4>抵扣券</ion-col>\n        <ion-col col-5><span ion-text color="orange">{{Voucher.length}}张可用</span></ion-col>\n        <ion-col text-right col-2>去使用</ion-col>\n        <ion-col text-right><ion-icon>&#xf3d1;</ion-icon></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="grid-inforlist-default" m-b-10>\n      <ion-row [ngStyle]="{\'padding\':\'6px 12px 5px 0\'}">\n        <ion-col col-4>手机号</ion-col>\n        <ion-col col-4>{{Params.Mobile}}</ion-col>\n        <ion-col text-right>\n          <button class="btn" ion-button p-l-5 p-r-5 f-1-5 [disabled]="VCodeBtnIsDisabled" (click)="GetVerifyCode()" tappable>{{VCodeText}}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="border-last">\n        <ion-col col-4>验证码</ion-col>\n        <ion-col><ion-input type=\'text\' placeholder="请输入验证码" formControlName="VerifyCode"></ion-input></ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-row justify-content-center m-t-10>\n    <ion-col col-11>\n      <button class="bgc-grad-primary bgc-header" ion-button block round f-1-6 [disabled]="CompleteBtnIsDisabled" (click)="ConfirmCode()" tappable>确认</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<!-- 确认信息阴影弹框正面 样式在grid.scss-->\n<div *ngIf="ShowFront">\n  <div class="shadow-bgc"></div>\n  <div class="shadow-cont">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-10 text-center>\n          <img src="assets/imgs/main1.png">\n          <div m-t-10 ion-text color="light">\n            <p no-margin>有效期为信用卡正面"VALID THRU"右侧日期</p>\n            <p no-margin>如输入"1210"</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row  justify-content-center class="banks-contC">\n        <ion-col col-5>\n          <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n\n<div *ngIf="ShowBack">\n  <div class="shadow-bgc"></div>\n  <!-- 确认信息阴影弹框反面 -->\n  <div class="shadow-cont">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-10 text-center>\n          <img src="assets/imgs/main2.png">\n          <div m-t-10 ion-text color="light">\n            <p no-margin>CVN2为信用卡背面末三位数字</p>\n            <p no-margin>如输入"267"</p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row  justify-content-center class="banks-contC">\n        <ion-col col-5>\n          <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\cardInfor\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], CardInforPage);
    return CardInforPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__(478);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paymentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FinalpayPage.prototype, "paymentForm", void 0);
    FinalpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finalpay',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\finalpay\index.html"*/'\n\n<ion-header>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="headTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <div class="progress" [hidden]="browser.isLoaded">\n\n    <div class="progress-inner" id="progress"></div>\n\n  </div>\n\n  <div *ngIf="flag">\n\n    <iframe [src]="browser.secUrl" id="iframe" class="iframe" \n\n      sandbox="allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-forms"\n\n      (load)="loaded()"\n\n      name="targetIframe">\n\n    </iframe>\n\n    <form [action]="formAction" #paymentForm name="pay_form" method="post" target="targetIframe">\n\n      <div [innerHtml]="htmltext"></div>\n\n    </form>\n\n  </div>\n\n  <div *ngIf="!flag" [innerHtml]="this_html"></div>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\finalpay\index.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FinalpayPage);
    return FinalpayPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirminfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirminfo',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\confirminfo\index.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <ion-row class="bgc-grad-primary grid-confirm-card">\n      <ion-col text-center>\n      <p><ion-icon f-5-0>&#xf2bc;</ion-icon><span f-3-0>收款成功</span></p>\n        <div><span f-1-5>￥</span><span f-5-0>{{Amount}}</span></div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="list-grid-default" m-b-10>\n    <ion-row align-items-center p-l-10>\n      <ion-col p-t-8 p-b-8>\n        <ul class="list-row-inner">\n          <li class="title infor">收款储蓄卡</li>\n          <li class="note">\n            <span class="bank-face"><img src="assets/banklogo/bank_{{CardCode}}.png"></span>\n            <span ion-text color="dark">{{CardInfo}}</span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="list-grid-default" m-b-10>\n    <ion-row align-items-center p-l-10>\n      <ion-col p-t-8 p-b-8>\n        <ul class="list-row-inner">\n          <li class="title infor">订单状态</li>\n          <li class="note" *ngIf="Status; then Done; else Failed">\n            <span ion-text color="orange">交易成功</span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center p-l-10>\n      <ion-col p-t-8 p-b-8>\n        <ul class="list-row-inner">\n          <li class="title infor">预计到账时间</li>\n          <li class="note"><span ion-text color="dark" >实时到账</span></li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row text-right p-r-10 ion-text color="gray"><ion-col>*如未实时到账，一般最晚第二个工作日可到账</ion-col></ion-row>\n  <ion-row justify-content-center m-t-50  [navPush]="App.RootPage.TabsPage">\n    <ion-col col-11><button class="bgc-grad-primary bgc-header" round ion-button block  f-1-6>完 成</button></ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\confirminfo\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirminfoPage);
    return ConfirminfoPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__ = __webpack_require__(75);
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







var AddCreditPage = /** @class */ (function () {
    function AddCreditPage(Service, navParams, Auth, fileService) {
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
    AddCreditPage.prototype.ngOnInit = function () {
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
    Object.defineProperty(AddCreditPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CardNo.invalid || this.Mobile.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AddCreditPage.prototype.GetIdCard = function (IdNo) {
        if (__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(IdNo)) {
            this.ShowIDCard = IdNo.substr(0, 6);
            for (var i = 0; i < (IdNo.length - 10); i++) {
                this.ShowIDCard += '*';
            }
            this.ShowIDCard += IdNo.substr(-4);
        }
    };
    // 提交数据
    AddCreditPage.prototype.AddCard = function () {
        var _this = this;
        this.Service.AddCreditCard(this.Form_Group_Card.value.CardNo, this.Form_Group_Card.value.Mobile).then(function (res) {
            if (false !== res) {
                App.ShowToast('信用卡添加成功');
                _this.Auth.GetUserData().then(function () { return App.Nav.push(App.RootPage[_this.navParams.data]); });
            }
        });
    };
    // 选择文件
    AddCreditPage.prototype.OnChangeFile = function (e) {
        var _this = this;
        this.fileService.showAddImage().then(function (rst) {
            console.log(rst);
            _this.uploadFile(rst.file, __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["a" /* BANKCARD_FRONT */]);
        }).catch(function (error) {
            console.log(error);
        });
    };
    // 保存文件
    AddCreditPage.prototype.uploadFile = function (file, cType) {
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
    AddCreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addcredit',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\addcredits\index.html"*/'<ion-header no-border>\n  <!-- 添加信用卡 -->\n  <ion-toolbar no-padding>\n      <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="adddepositcam-page">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <span ion-text f-13 text-gray>请绑定持卡人的具有银联标识信用卡，此信用卡用于付款刷卡</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="page-content">\n    <ion-row class="d-flex align-items-center form-ctrlborder-bottom-1px">\n      <ion-col col-3>持卡人</ion-col>\n      <ion-col>{{App.UserInfo.name}}</ion-col>\n    </ion-row>\n    <ion-row class="d-flex align-items-center form-ctrl">\n      <ion-col col-3>身份证</ion-col>\n      <ion-col>{{ShowIDCard}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="page-content" m-t-15>\n    <form novalidate [formGroup]="Form_Group_Card">\n      <ion-grid>\n        <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n          <ion-col col-3>卡号</ion-col>\n          <ion-col col-7><ion-input type=\'number\' placeholder="请输信用卡卡号" formControlName="CardNo"></ion-input></ion-col>\n          <ion-col col-2>\n            <button ion-button icon-only class="bg-transparent btn-h-auto" (click)="onChangeFile(BankCardFront)">\n              <ion-icon name="qr-scanner" text-black-light></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="d-flex align-items-center form-ctrl">\n          <ion-col col-3>手机号</ion-col>\n          <ion-col> <ion-input type=\'number\' placeholder="请输银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <ion-row justify-content-center m-t-15>\n    <ion-col col-11>\n      <button class="bgc-grad-primary bgc-header" \n        ion-button round block f-1-6 \n        [disabled]="CompleteBtnIsDisabled" \n        [class.btn-disabled]="CompleteBtnIsDisabled"\n        (click)="AddCard()">保存</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\addcredits\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["b" /* FileService */]])
    ], AddCreditPage);
    return AddCreditPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(19);
/**
 *  https://github.com/apache/cordova-plugin-network-information
 *      cordova plugin add cordova-plugin-network-information --save
 */

var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["bluetooth"] = 0] = "bluetooth";
    ConnectionType[ConnectionType["cellular"] = 1] = "cellular";
    ConnectionType[ConnectionType["ethernet"] = 2] = "ethernet";
    ConnectionType[ConnectionType["mixed"] = 3] = "mixed";
    ConnectionType[ConnectionType["none"] = 4] = "none";
    ConnectionType[ConnectionType["other"] = 5] = "other";
    ConnectionType[ConnectionType["unknown"] = 6] = "unknown";
    ConnectionType[ConnectionType["wifi"] = 7] = "wifi";
    ConnectionType[ConnectionType["wimax"] = 8] = "wimax";
})(ConnectionType || (ConnectionType = {}));
var Network = /** @class */ (function () {
    function Network() {
    }
    Object.defineProperty(Network, "Type", {
        get: function () {
            if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(navigator.connection)) {
                console.error('NetWork Plugin not Installed.');
                return ConnectionType[ConnectionType.unknown];
            }
            return navigator.connection.effectiveType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Network, "IsOnline", {
        get: function () {
            var Type = this.Type;
            return Type !== ConnectionType[ConnectionType.none];
        },
        enumerable: true,
        configurable: true
    });
    return Network;
}());

//# sourceMappingURL=Network.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangecardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
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
    function ChangecardsPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.HeadTitle = "我的信用卡";
        this.BankList = [];
    }
    ChangecardsPage.prototype.ngOnInit = function () {
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
        this.Service.SetPrimCard(item.id)
            .then(function () { return setTimeout(function () { return App.ActiveView.dismiss(item); }); })
            .catch(function (err) { return App.ShowError('接口异常...'); });
    };
    ChangecardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changecards',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\changecards\index.html"*/'<ion-header>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle" BtnIcon="&#xf273;" (BtnIconEvent)="AddCards()"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div padding-horizontal class="minus-margin" *ngFor="let item of BankList;">\n    <b class="bank-tick" (click)="SelectedCard(item)">\n      <ion-icon *ngIf="item.chose">&#xf2bc;</ion-icon>\n    </b>\n    <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow" [ngStyle]="{\'justify-content\':\'start\'}">\n      <ion-row class="banks-contA" [ngStyle]="{\'padding-top\':\'15px\'}">\n        <ion-col col-2 text-center>\n          <div class="face">\n            <img src="assets/banklogo/bank_{{item.code}}.png" alt="">\n          </div>\n        </ion-col>\n        <ion-col>\n          <h6 no-margin>{{item.bank}}</h6>\n          <span class="opacity-7">付款信用卡</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="banks-contB">\n        <ion-col></ion-col>\n        <ion-col>****</ion-col>\n        <ion-col>****</ion-col>\n        <ion-col>****</ion-col>\n        <ion-col>{{item.cardNo}}</ion-col>\n      </ion-row>\n      <div class="pic">\n        <img src="assets/banklogo/bank_{{item.code}}_0.png" alt="">\n      </div>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\changecards\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChangecardsPage);
    return ChangecardsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__ = __webpack_require__(75);
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
        if (!__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(App.UserInfo)) {
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
        if (!__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(IdNo)) {
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
        this.Service.AddDeposiCard(this.Form_Group.value.CardNo, this.BankName, this.TranCode, this.BranchName, this.Form_Group.value.Mobile).then(function (res) {
            if (res) {
                App.ShowToast('储蓄卡添加成功!');
                _this.Auth.GetUserData();
                App.Nav.push(App.RootPage[_this.navParams.data]);
            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adddeposit',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\adddeposit\index.html"*/'<ion-header>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="h-adddepositcam-page">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <span ion-text f-13 text-gray>请绑定持卡人本人储蓄卡，此储蓄卡用于收款</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="page-content" m-b-10>\n    <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n      <ion-col col-3>持卡人</ion-col>\n      <ion-col col-8>{{App.UserInfo.name}}</ion-col>\n    </ion-row>\n\n    <ion-row class="d-flex align-items-center form-ctrl">\n      <ion-col col-3>身份证</ion-col>\n      <ion-col col-8>{{IdCard}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form novalidate [formGroup]="Form_Group">\n    <div class="page-content">\n      <ion-grid>\n        <ion-row class="d-flex align-items-center border-bottom-1px form-ctrl">\n          <ion-col col-3>卡号</ion-col>\n          <ion-col col-7><ion-input type="number" placeholder="请输入储蓄卡卡号" formControlName="CardNo" no-margin></ion-input></ion-col>\n          <ion-col col-2>\n            <button ion-button icon-only class="bg-transparent btn-h-auto" (click)="onChangeFile(BankCardFront)">\n              <ion-icon name="qr-scanner" text-black-light></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row (click)="ClickOpenBank()" class="d-flex align-items-center border-bottom-1px form-ctrl">\n          <ion-col col-3>银行</ion-col>\n          <ion-col col-8>\n            <span ion-text text-gray>{{BankName}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="d-flex align-items-center border-bottom-1px form-ctrl" (click)="ClickBranchBank()">\n          <ion-col col-3>支行</ion-col>\n          <ion-col col-8>\n            <span ion-text text-gray>{{BranchName}}</span>\n          </ion-col>\n          <ion-col text-right text-black-light><ion-icon>&#xf3d1;</ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row class="d-flex align-items-center form-ctrl">\n          <ion-col col-3>手机号</ion-col>\n          <ion-col col-8><ion-input type="Tel" placeholder="请输入银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-row justify-content-center m-t-20>\n      <ion-col col-11>\n        <button class="bgc-grad-primary bgc-header" \n          [class.btn-disabled]="CompleteBtnIsDisabled" ion-button round block f-1-6 tappable \n          [disabled]="CompleteBtnIsDisabled" \n          (click)="Finish()">完成</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\adddeposit\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_fileservice__["b" /* FileService */]])
    ], AddDepositPage);
    return AddDepositPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListofbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(22);
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
        var _this = this;
        this.Service.GetTolBanks().then(function (res) {
            _this.BankList = res;
        });
    };
    ListofbankPage.prototype.SelectedBank = function (item) {
        App.ActiveView.dismiss({ name: item.bankName, code: item.id });
    };
    ListofbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listofbank',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\listofbank\index.html"*/'<ion-header>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class="bankcard-list">\n    <ion-item *ngFor="let item of BankList" (click)="SelectedBank(item)">\n      <ion-avatar item-start>\n        <img src="assets/banklogo/bank_{{item.id}}.png">\n      </ion-avatar>\n      <h2>{{item.bankName}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\listofbank\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], ListofbankPage);
    return ListofbankPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
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



var _ = __webpack_require__(489);
var BranchcardPage = /** @class */ (function () {
    function BranchcardPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "选择开户支行";
        this.BranchList = [];
    }
    BranchcardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.BankName = this.navParams.get('Bank');
        this.BankCode = this.navParams.get('Code');
        this.Service.GetBranchBanks(this.BankName).then(function (res) {
            _this.BranchList = res;
        });
        this.debounced = _.debounce(this.GetKey, 500);
    };
    BranchcardPage.prototype.GetKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var params;
            return __generator(this, function (_a) {
                params = this.BankName + ',' + this.KeyWord;
                this.Service.GetBranchBanks(params).then(function (res) {
                    _this.BranchList = res;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-branchcard',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\branchcard\index.html"*/'<ion-header>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n  <ion-toolbar class="search-bar">\n    <ion-searchbar  (ngModelChange)="SearchBank()" placeholder="请输关键字搜索,如\'福田\'" [(ngModel)]="KeyWord"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class="bankcard-list">\n    <ion-item *ngFor="let item of BranchList" (click)="SelectedBranch(item)">\n      <ion-avatar item-start>\n        <img src="assets/banklogo/bank_{{BankCode}}.png">\n      </ion-avatar>\n      <h2>{{item.bankName}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\branchcard\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], BranchcardPage);
    return BranchcardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 490:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\start\index.html"*/'<ion-content>\n  <div class="start-app">\n    <div class="wall" text-center>\n      <ion-row>\n        <ion-col><b>有资金需求，自己搞定</b></ion-col>\n      </ion-row>\n      <ion-row m-v-35>\n        <ion-col><img src="assets/imgs/start.png" alt="" width="70%"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><p>信用卡可提现   超低手续费</p><p>资金秒到账   安全有保障</p></ion-col>\n      </ion-row>\n    </div>\n    <ion-row class="action-btn" justify-content-center>\n      <ion-col col-5>\n        <button ion-button full  [navPush]="App.RootPage.RegisterPage">注册</button>\n      </ion-col>\n      <ion-col col-5>\n        <button class="active" ion-button full [navPush]="App.RootPage.LoginPage">登录</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\start\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifypwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifypwdPage = /** @class */ (function () {
    function ModifypwdPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "修改密码";
        this.VCodeText = '获取验证码';
        this.pwdVisible = false;
        this.pwdText = 'password';
        this.tel = "****";
    }
    ModifypwdPage.prototype.ngOnInit = function () {
        this.tel = App.UserInfo['mobile'].substr(0, 3) + this.tel + App.UserInfo['mobile'].substr(-4);
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            pwd: this.pwd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
    };
    //倒计时
    ModifypwdPage.prototype.times = function () {
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
    ModifypwdPage.prototype.GetTelCode = function () {
        var _this = this;
        this.Service.getPwdVericode(App.UserInfo['mobile']).then(function (res) {
            if (res.code === 1) {
                _this.times();
                return App.ShowToast('发送成功');
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    // 密码是否可看
    ModifypwdPage.prototype.pwdType = function () {
        this.pwdVisible = !this.pwdVisible;
        if (this.pwdVisible) {
            this.pwdText = 'text';
        }
        else {
            this.pwdText = 'password';
        }
    };
    Object.defineProperty(ModifypwdPage.prototype, "ConfirmBtnIsDisabled", {
        get: function () {
            if (this.VCode.invalid || this.pwd.invalid) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ModifypwdPage.prototype.ConfirmModify = function () {
        this.Service.GetchangePsdData(App.UserInfo['mobile'], this.Form_Group.value.pwd, this.Form_Group.value.VCode);
    };
    ModifypwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modifypwd',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\modifypwd\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <div>\n\n      <ion-grid text-center>\n\n        <ion-row class="reg-line">\n\n          <ion-col col-12>\n\n            <input type="Tel" [(ngModel)]="tel" readonly>\n\n          </ion-col>\n\n        </ion-row>\n\n        <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n          <ion-row class="reg-line">\n\n            <ion-col col-7>\n\n              <input type="text" placeholder="请输入验证码" formControlName="VCode" required>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button class="smbtn" (click)="GetTelCode()">{{VCodeText}}</button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="reg-line">\n\n            <ion-col col-12>\n\n              <input [attr.type]="pwdText" placeholder="请设置新密码"  formControlName="pwd" required/>\n\n              <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="pwdType()" *ngIf = "!pwdVisible">\n\n              <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="pwdType()" *ngIf = "pwdVisible" >\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n        <ion-row m-t-30>\n\n          <ion-col col-12>\n\n            <button class="bgc-grad-primary bgc-header " [disabled]="ConfirmBtnIsDisabled" (click)="ConfirmModify()">确认</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n    \n\n    '/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\modifypwd\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], ModifypwdPage);
    return ModifypwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindpwdPage = /** @class */ (function () {
    function FindpwdPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = '找回密码';
        this.VCodeText = '获取验证码';
    }
    FindpwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
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
    FindpwdPage.prototype.times = function () {
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
    FindpwdPage.prototype.GetCode = function () {
        var _this = this;
        this.Service.GetResetPwdData(this.Form_Group.value.tel).then(function (res) {
            if (res.code === 1) {
                _this.times();
                return App.ShowToast("发送成功");
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    FindpwdPage.prototype.GetTelCode = function () {
        this.Service.GetFindPwdData(this.Form_Group.value.tel, this.Form_Group.value.VCode);
    };
    Object.defineProperty(FindpwdPage.prototype, "FindDisabled", {
        get: function () {
            if (this.tel.invalid || this.VCode.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FindpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-findpwd',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\findpwd\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n      <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <div>\n\n      <ion-grid text-center>\n\n        <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n          <ion-row class="reg-line">\n\n            <ion-col col-12>\n\n              <input type="number" placeholder="请输入手机号码" formControlName="tel" required>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="reg-line">\n\n            <ion-col col-7>\n\n              <input type="text" placeholder="请输入验证码" formControlName="VCode" required>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button class="smbtn" (click)="GetCode()" [ngClass]="{\'disabled\': tel.invalid}" [disabled]="tel.invalid">{{VCodeText}}</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n        <ion-row m-t-30>\n\n          <ion-col col-12>\n\n              <button class="bgc-grad-primary bgc-header" [disabled]="FindDisabled" (click)=" GetTelCode()">下一步</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\findpwd\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], FindpwdPage);
    return FindpwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpwdPage = /** @class */ (function () {
    function ResetpwdPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.App = window.App;
        this.HeadTitle = "重置密码";
        this.tel = this.navParams.get('mobile');
        this.VCode = this.navParams.get('code');
    }
    ResetpwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pwd: this.pwd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    ResetpwdPage.prototype.clickgetlogin = function () {
        if (this.conpwd === this.Form_Group.value.pwd) {
            this.Service.GetchangePsdData(this.tel, this.Form_Group.value.pwd, this.VCode);
        }
        else {
            App.ShowError('两次输入密码不一致');
        }
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\resetpwd\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle" ></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <ion-grid text-center>\n\n      <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n        <ion-row class="reg-line">\n\n          <ion-col col-12>\n\n            <input type="password" placeholder="请输入密码" formControlName="pwd" required>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      <ion-row class="reg-line">\n\n        <ion-col col-12>\n\n          <input type="password" placeholder="请确认密码" [(ngModel)]="conpwd" >\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row m-t-30>\n\n        <ion-col col-12>\n\n          <button class="bgc-grad-primary bgc-header" (click)="clickgetlogin()" [ngClass]="{\'disabled\': pwd.invalid}" [disabled]="pwd.invalid">完成</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\resetpwd\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__ = __webpack_require__(22);
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
        this.PayAmount = this.navParams.get('payAmount');
        this.ReceiveAmount = this.navParams.get('receiveAmount');
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
        this.service.GetBankPage(this.CreditCard.id, this.DepositCard.id, this.PayAmount).then(function (res) {
            // 跳转银联页面
            if (res) {
                if (/^[http:\/\/|https:\/\/](.*)?/.test(res)) {
                    (new __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]()).create(encodeURI(res));
                }
                else if (res.indexOf('<html>') == -1) {
                    var data = JSON.parse(res);
                    App.ShowError(data.respMsg);
                }
                else {
                    App.Nav.push(App.RootPage.FinalpayPage, { innerHtml: res });
                }
            }
            else {
                App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
            }
        });
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\home\checkout\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="h-checkout-page">\n\n	<ion-grid class="page-content" p-h-40>\n\n		<ion-row align-items-center class="border-bottom-1px" p-b-5>\n\n			<ion-col col-12>\n\n				<div class="f-flex flex-fill flex-column justify-content-center align-items-center l-h-d pay-amount">\n\n					<p text-center><span ion-text f-13 text-black-light>支付金额(元)</span></p>\n\n					<p text-center><span ion-text f-20 class="amount">10000.00</span></p>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row align-items-center p-b-10>\n\n			<ion-col col-12>\n\n				<div class="f-flex flex-fill flex-column justify-content-center align-items-center receive-amount">\n\n					<p text-center><span ion-text f-13 text-black-light>到账金额(元)</span></p>\n\n					<p text-center><span ion-text f-35 class="amount">9950.00</span></p>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-grid class="page-content bank-wrp" m-t-10>\n\n		<ion-row align-items-center class="border-bottom-1px" p-v-10>\n\n			<ion-col col-6>\n\n				<p><span ion-text>付款信用卡</span></p>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex align-items-center justify-content-end">\n\n					<ion-img src="assets/banklogo/bank_308.png" class="img" alt="icon"></ion-img>\n\n					<span ion-text m-l-5>中信银行(1843)</span>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row align-items-center p-v-10>\n\n			<ion-col col-6>\n\n				<p><span ion-text>收款储蓄卡</span></p>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex align-items-center justify-content-end">\n\n					<ion-img src="assets/banklogo/bank_308.png" class="img" alt="icon"></ion-img>\n\n					<span ion-text m-l-5>招商银行(1843)</span>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-12>\n\n				<button type="button" ion-button full color="primary" \n\n					(cilck)="Pay()" [disabled]="!CanSubmited" \n\n					[class.btn-disabled]="!CanSubmited">去付款</button>\n\n			</ion-col>\n\n		</ion-row>		\n\n	</ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\home\checkout\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_homeservice__["a" /* HomeService */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 495:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ucenter',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar [Title]="HeadTitle" AppIcon="true" BtnIcon="&#xf103;" (BtnIconEvent)="App.Nav.push(App.RootPage.UsetupPage)"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="ucenter-page">\n\n  <div m-b-10>\n\n    <ion-card no-margin p-v-10>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/zfb.png">\n\n        </ion-avatar>\n\n        <h2>Marty McFly</h2>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <ion-card no-margin>\n\n    <ion-list>\n\n      <button ion-item class="border-bottom-1px">\n\n        <ion-icon name="cart" item-start></ion-icon>\n\n        <ion-label item-start f-14>收款记录</ion-label>\n\n        <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n      </button>\n\n\n\n      <button ion-item>\n\n        <ion-icon name="medical" item-start></ion-icon>\n\n        <span ion-text item-start f-14>我的卡片</span>\n\n        <span ion-text item-end f-13 text-gray>0张信用卡，0张储蓄卡</span>\n\n        <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <div m-t-10>\n\n    <ion-card no-margin>\n\n      <ion-list>\n\n        <button ion-item>\n\n          <ion-icon name="cart" item-start></ion-icon>\n\n          <ion-label item-start f-14>在线客服</ion-label>\n\n          <!-- <ion-icon name="ios-arrow-forward" item-end text-gray></ion-icon> -->\n\n        </button>\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n\n\n<!--  个人中心 -->\n\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UcenterPage);
    return UcenterPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
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
    function LoginPage(Auth) {
        this.Auth = Auth;
        this.App = window.App;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
    };
    Object.defineProperty(LoginPage.prototype, "LoginDisabled", {
        get: function () {
            if (this.Tel.invalid || this.Pass.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.Login = function () {
        this.Auth.Login(this.Form_Group.value.Tel, this.Form_Group.value.Pass);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\login\index.html"*/'<ion-content>\n  <div class="register">\n    <ion-row class="bgc-grad-primary back-btn">\n      <ion-col col-12 f-1-6>\n        <span>登 录\n          <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col class="col" col-3 p-v-40 text-center>\n        <img src="assets/imgs/58icon.png">\n      </ion-col>\n    </ion-row>\n    <div>\n      <ion-grid text-center>\n        <form novalidate [formGroup]="Form_Group" autocomplete="off">\n          <ion-row class="reg-line">\n            <ion-col col-12>\n              <input type="Tel" placeholder="请输入手机号" formControlName="Tel" required>\n            </ion-col>\n          </ion-row>\n          <ion-row class="reg-line">\n            <ion-col col-12>\n              <input type="password" placeholder="请输入密码" formControlName="Pass" required>\n            </ion-col>\n          </ion-row>\n          <ion-row m-t-30>\n            <ion-col col-12>\n              <button class="bgc-grad-primary bgc-header" (click)="Login()" [disabled]="LoginDisabled">登录</button>\n            </ion-col>\n          </ion-row>\n        </form>\n        <span ion-text color="primary" [navPush]="App.RootPage.FindpwdPage">忘记密码 ?</span>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\login\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loan',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\loan\index.html"*/'<ion-header no-border>\n\n    <ion-navbar class="app-navbar-primary">\n\n      <ion-title>{{browser.title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div class="progress" [hidden]="browser.isLoaded">\n\n        <div class="progress-inner" id="progress"></div>\n\n        </div>\n\n\n\n        <iframe id="iframe" class="iframe"\n\n                sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n                [src]="browser.secUrl"\n\n                (load)="loaded()">\n\n        </iframe>\n\n</ion-content>\n\n\n\n  '/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\loan\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoanPage);
    return LoanPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPwdPage = /** @class */ (function () {
    function SetPwdPage(Service, navParams) {
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
    SetPwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    SetPwdPage.prototype.PassType = function () {
        console.log(this.PassClear);
        this.PassClear = !this.PassClear;
        if (this.PassClear) {
            this.PassWordType = 'text';
        }
        else {
            this.PassWordType = "password";
        }
    };
    Object.defineProperty(SetPwdPage.prototype, "ResIsDisabled", {
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
    SetPwdPage.prototype.OnRegister = function () {
        if (this.ConPassWord != this.PassWord) {
            App.ShowError("两次输入的密码不一致");
            return;
        }
        this.Service.SignIn(this.Tel, this.Form_Group.value.Pass, this.VCode);
    };
    SetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-SetPwd',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\SetPwd\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="register">\n\n    <div>\n\n      <ion-grid text-center>\n\n        <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n          <ion-row class="reg-line">\n\n            <ion-col col-12>\n\n              <input [attr.type]="PassWordType" placeholder="请设置密码" formControlName="Pass" required [(ngModel)]="PassWord">\n\n              <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="PassType()" *ngIf="!PassClear">\n\n              <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="PassType()" *ngIf="PassClear">\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="reg-line">\n\n            <ion-col col-12>\n\n              <input [attr.type]="PassWordType" placeholder="请确认密码"  formControlName="Pass" required [(ngModel)]="ConPassWord">\n\n              <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="PassType()" *ngIf="!PassClear">\n\n              <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="PassType()" *ngIf="PassClear">\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row m-t-30>\n\n            <ion-col col-12>\n\n              <button class="bgc-grad-primary bgc-header" (click)="OnRegister()" [disabled]="ResIsDisabled">注册</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\SetPwd\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], SetPwdPage);
    return SetPwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fileservice__ = __webpack_require__(75);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\auth\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="auth-page">\n\n	<ion-grid class="page-content">\n\n		<ion-row p-t-5>\n\n			<ion-col col-12>\n\n				<ion-label f-13 no-margin>证件照片</ion-label>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-6 (click)="OnChangeFile(CardFront, $event)">\n\n				<div class="d-flex justify-content-center card border-1px">\n\n					<img class="img" [src]="PreviewFiles[CardFront]" *ngIf="PreviewFiles[CardFront] != DefaultImg" />\n\n					<button class="bg-transparent" icon-only *ngIf="PreviewFiles[CardFront] == DefaultImg">\n\n						<ion-icon name="ios-add-circle-outline" color="primary"></ion-icon>\n\n					</button>\n\n					<ion-label class="desc" *ngIf="PreviewFiles[CardFront] == DefaultImg">身份证反面照片</ion-label>\n\n				</div>\n\n			</ion-col>\n\n			<ion-col col-6 (click)="OnChangeFile(CardBack, $event)">\n\n				<div class="d-flex justify-content-center card border-1px">\n\n					<img class="img" [src]="PreviewFiles[CardBack]" *ngIf="PreviewFiles[CardBack] != DefaultImg" />\n\n					<button class="bg-transparent" icon-only *ngIf="PreviewFiles[CardBack] == DefaultImg">\n\n						<ion-icon name="ios-add-circle-outline" color="primary"></ion-icon>\n\n					</button>\n\n					<ion-label class="desc" *ngIf="PreviewFiles[CardBack] == DefaultImg">身份证反面照片</ion-label>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n		<!-- 示例 -->\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<div class="d-flex justify-content-start align-items-start card example border-1px">\n\n					<ion-badge color="primary" class="badge">示例</ion-badge>\n\n					<img class="img" src="assets/imgs/zhengm.png" />\n\n				</div>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<div class="d-flex justify-content-start align-items-start card example border-1px">\n\n					<ion-badge color="primary" class="badge">示例</ion-badge>\n\n					<img class="img" src="assets/imgs/zhengm.png" />\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<div class="page-content" m-t-10>\n\n		<form novalidate [formGroup]="formGroupCard" m-t-10>\n\n	    <ion-grid>\n\n	      <ion-row class="d-flex align-items-center form-ctrl border-bottom-1px">\n\n	        <ion-col col-4>姓名</ion-col>\n\n	        <ion-col col-8><ion-input type="text" placeholder="请输入姓名" formControlName="username"></ion-input></ion-col>\n\n	      </ion-row>\n\n\n\n	      <ion-row class="d-flex align-items-center form-ctrl">\n\n	        <ion-col col-4>身份证号</ion-col>\n\n	        <ion-col col-8><ion-input type="text" placeholder="请输入身份证号" formControlName="idCardNo"></ion-input></ion-col>\n\n	      </ion-row>\n\n	    </ion-grid>\n\n	  </form>\n\n  </div>\n\n  <ion-grid>\n\n  	<ion-row>\n\n  		<ion-col col-12>\n\n  			<button type="button" ion-button color="primary" full>立即认证</button>\n\n  		</ion-col>\n\n  	</ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\auth\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_fileservice__["b" /* FileService */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__ = __webpack_require__(76);
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
        this.Service.GetCashDetail(id).then(function (res) { return _this.OrderDetail = res; });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\orders\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="list-grid-default" m-b-10>\n        <ion-row padding-vertical>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-center>\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.amount/100}}</div>\n                        <p class="text-gray-600">收款金额</p>\n                    </li>\n                    <!-- <li class="title slash" text-center><span></span></li> -->\n                    <li class="title" text-center>\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.enterAmount/100}}</div>\n                        <p class="text-gray-600">到账金额</p>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class="list-grid-default no-border">\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">订单编号：</span></li>\n                    <li class="title" text-right>{{OrderDetail.orderNo}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner" [ngSwitch]="OrderDetail.status">\n                    <li class="title" text-left><span class="text-gray-600">订单状态：</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'1\'"><span ion-text color="orange">成功</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'0\'"><span ion-text color="danger">失败</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'2\'"><span ion-text color="primary">处理中</span></li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner"  [ngSwitch]="OrderDetail.type">\n                    <li class="title" text-left><span class="text-gray-600">收款方式：</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'card\'">信用卡收款</li>\n                    <li class="title" text-right *ngSwitchCase="\'alipay\'">支付宝收款</li>\n                    <li class="title" text-right *ngSwitchCase="\'wechat\'">微信收款</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">收款信用卡：</span></li>\n                    <li class="title" text-right>{{OrderDetail.payCard}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">到账储蓄卡：</span></li>\n                    <li class="title" text-right>{{OrderDetail.outCard}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">收款时间：</span></li>\n                    <li class="title" text-right>{{OrderDetail.time}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\orders\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__["a" /* MineService */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(76);
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
        this.Service.GetCashList().then(function (res) { return _this.DataProcess(res); });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-records',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\records\index.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-template [ngIf]="!DataEmpty">\n    <ion-grid class="bgc-light" no-padding>\n      <div *ngFor="let items of ListData">\n        <h5 p-h-10 p-v-5 [ngStyle]="{\'background\':\'aliceblue\',\'margin\':\'0\'}">\n          {{items.month}}成功收款\n          <span float-right>{{items.total/100}}元</span>\n        </h5>\n        <div *ngFor="let item of items.data">\n          <ion-row align-items-center p-h-5 [navPush]="App.RootPage.OrdersPage" [navParams]="item.id">\n            <ion-col col-1 text-center>\n              <img src="assets/imgs/vip.png">\n            </ion-col>\n            <ion-col col-5 [ngSwitch]="item.type">\n              <span *ngSwitchCase="\'card\'">信用卡收款</span>\n              <span *ngSwitchCase="\'alipay\'">支付宝收款</span>\n              <span *ngSwitchCase="\'wechat\'">微信收款</span>\n              <p no-margin ion-text color="light-dark">{{item.time}}</p>\n            </ion-col>\n            <ion-col col-3 [ngSwitch]="item.status">\n              <img *ngSwitchCase="\'0\'" src="assets/imgs/seal-3.png" style="max-width:none;width:60px;height:60px;">\n              <img *ngSwitchCase="\'1\'" src="assets/imgs/seal-1.png" style="max-width:none;width:60px;height:60px;">\n              <img *ngSwitchCase="\'2\'" src="assets/imgs/seal-2.png" style="max-width:none;width:60px;height:60px;">\n            </ion-col>\n            <ion-col col-3 text-nowrap>\n              <span f-1-0>￥</span>{{item.amount/100}}\n              <ion-icon [ngStyle]="{\'float\':\'right\',\'color\':\'#ccc\'}">&#xf3d1;</ion-icon>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </ion-grid>\n  </ng-template>\n  <ng-template [ngIf]="DataEmpty">\n    <div text-center p-t-50 p-b-50>\n      <img src="assets/imgs/nulldata.png" alt="" width="150px">\n      <p text-center text-gray-light f-1-6>你还没有收款记录哦</p>\n    </div>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\records\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(23);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uinfo',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\uinfo\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="list-grid-default">\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">头像</li>\n          <li text-right>                    \n            <span [class.face-sm-default]="App.IconFace" [class.face-sm-female]="!App.IconFace" text-gray-lighter></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner" (click)="ChangeNickName()">\n          <li class="title">昵称</li>\n          <li text-right class="text-gray-600">{{UserInfo.nickName}}</li>\n          <li class="icon-arrow"><ion-icon></ion-icon></li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">用户ID</li>\n          <li text-right class="text-gray-600">{{UserInfo.userId}}</li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">手机号</li>\n          <li text-right class="text-gray-600">{{ShowPhone}}</li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="list-grid-default" m-t-10>\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">姓名</li>\n          <li text-right class="text-gray-600">{{infoName}}</li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row m-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">身份证</li>\n          <li text-right class="text-gray-600">{{ShowID}}</li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\uinfo\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], UinfoPage);
    return UinfoPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(23);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usetup',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\usetup\index.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="bgc-light">\n    <ion-row justify-content-center>\n      <ion-col col-3 text-center p-t-30>\n        <img src="assets/imgs/58icon.png">\n        <p no-margin p-t-10>v1.0.0</p>\n      </ion-col>\n    </ion-row>\n    <div padding-horizontal m-b-20>\n      <h5 text-center m-t-10>关于我们</h5>\n      <ng-template [ngIf]="App.CanTrade || App.IsIos">\n        <span text-left ion-text color="dark">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58付是一种基于信用卡的收款（收单）方式，应用于个人之间的资金往来，以及小微商户的收款（收单）场景。 公司专注用户体验、网络安全与个人隐私保护以及服务质量，打造精品，服务客户。\n        </span>\n      </ng-template>\n    </div>\n  </ion-grid>\n\n\n\n  <ion-grid class="list-grid-default" m-t-10>\n    <ion-row p-l-10 [navPush]="App.RootPage.ModifypwdPage">\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">登录密码</li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-grid class="list-grid-default" m-t-10> -->\n    <!-- <ion-row p-l-10>\n      <ion-col>\n          <ul class="list-row-inner">\n            <li class="title">关于我们</li>\n            <li class="icon-arrow"><ion-icon></ion-icon></li>\n          </ul>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row p-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">用户反馈</li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row> -->\n  <!-- </ion-grid> -->\n  <ion-row justify-content-center margin-vertical>\n    <ion-col col-5>\n      <button class="bgc-grad-primary" ion-button block (click)="Logout()">退出账号</button>\n    </ion-col>\n  </ion-row>\n  <ion-row text-center>\n    <ion-col ion-text color="light-dark" f-1-6>\n      <p no-margin>Copyright ©2016-2018</p>\n      <span>深圳前海微融科技有限公司</span>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\usetup\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], UsetupPage);
    return UsetupPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VIPmembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.Service.GetVipList().then(function (res) {
            _this.VipList = res;
            for (var i = 0; i < _this.VipList.length; i++) {
                // let len = this.VipList[i].name.length;
                // this.VipList[i].name = this.VipList[i].name.substr(0, len-4);
                if (_this.VipList[i].name.indexOf(App.UserInfo['rank']) !== -1) {
                    _this.VipId = _this.VipList[i].id;
                }
            }
            _this.PayAmount = _this.VipList[_this.VipIndex].price;
            console.log(_this.VipList);
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
        this.Service.BuyVip(this.VipList[this.VipIndex].id).then(function (res) {
            new __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create(res.qrCode, '_system');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-VIPmembers',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\VIPmembers\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true"  [Title]="headTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<!-- <ion-header no-border class="bgc-gray-light">\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n        <div class="vip-toolbar bgc-grad-primary"></div> -->\n    <!-- </ion-toolbar>\n    <ion-toolbar no-padding>\n        <ion-grid class="grid-mine-header bgc-grad-primary no-padding">\n            <ion-row justify-content-center>\n                <ion-col col-5 text-center *ngIf="App.IsVip">\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n                    <span text-nowrap p-b-5>会员{{Deadline}}到期</span>\n                </ion-col>\n                <ion-col col-5 text-center *ngIf="!App.IsVip">\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n                    <span text-nowrap p-b-5>你还不是VIP会员</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header> -->\n<!-- <ion-content>\n    <div m-h-15 m-v-15>\n        <ion-grid class="vip-list" no-padding \n        [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n        [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n        (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n            <ion-row class="vip-item">\n                <ion-col col-9 text-left>\n                    <h4>{{item.name}}</h4>\n                    <div m-b-10>\n                        <p>无积分{{item.rate}}%，有积分{{item.rate1}}%</p>\n                        <p>直推返利：{{item.profitRate1}}%，间推返利：{{item.profitRate2}}%</p>\n                        <p>间推返利：{{item.profitRate2}}%</p> -->\n                        <!-- <p>有效期\n                            <span *ngIf="item.days == \'-1\'; then Infinit; else Days"></span>\n                            <ng-template #Infinit>永久有效</ng-template>\n                            <ng-template #Days>{{item.days}}天</ng-template>\n                        </p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 text-right>\n                    <b>￥{{item.price}}</b>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="vip-list pay list-grid-default" p-v-20 m-t-10>\n            <ion-row p-h-10>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n                            <span ion-text color="dark">支付宝支付</span>\n                        </li>\n                        <li class="title" text-right><i class="has-point active"></i></li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div> -->\n    <!-- <div [ngStyle]="{width: \'100%\', height: \'8%\', \'margin-top\': \'2%\'}"></div>\n    <div p-h-15>\n        <ion-grid class="grid-vip-cont grid-header-bar" p-v-20>\n            <div class="foor-face"><img src="assets/imgs/yyy.png" alt=""></div>\n            <ion-row class="face-cont face-cont-vip"\n                [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n                [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n                (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n                <ion-col>\n                    <b class="face-tab" [ngClass]="{\'face-active\': VipIndex == i}">\n                        <img class="face-nav" src="assets/imgs/zs{{item.id}}.png">\n                    </b>\n                </ion-col>\n                <ion-col col-2>\n                    <h5>{{item.Tname}}</h5>\n                    <h5>会员</h5>\n                </ion-col>\n                <ion-col col-2 class="border">\n                    <h6>费率</h6>\n                    <b>{{item.rate}}%</b>\n                </ion-col>\n                <ion-col col-2>\n                    <h6>有效期</h6>\n                    <b *ngIf="item.days == \'-1\'; then Infinit; else Days"></b>\n                    <ng-template #Infinit>永久有效</ng-template>\n                    <ng-template #Days>{{item.days}}天</ng-template>\n                </ion-col>\n                <ion-col col-3 ion-text color="red-dark">\n                    ￥<b f-2-5>{{item.price}}</b>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="grid-vip-cont list-grid-default" p-v-20 m-t-10>\n            <span>选择支付方式</span>\n            <ion-row>\n                <ion-col text-center>收款方式</ion-col>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n                            <span ion-text color="dark">支付宝支付</span>\n                        </li>\n                        <li class="title" text-right><i class="has-point active"></i></li>\n                    </ul>\n                </ion-col>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="title" text-right><i class="has-point"></i></li>\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/wx.png"></span>\n                            <span ion-text color="dark" >微信</span>\n                        </li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div> -->\n\n<!-- </ion-content>\n<ion-footer class="bgc-gray-light">\n    <ion-row justify-content-center m-h-10>\n        <ion-col>\n            <button ion-button block round class="bgc-grad-primary" (click)="Submit()">应付金额{{PayAmount}}元，去提交</button>\n        </ion-col>\n    </ion-row>\n</ion-footer> -->\n<ion-content>\n    <ion-grid class="list-grid-default">\n        <ion-row>\n            <ion-col col-12>\n                <h3>费率：</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row align-items-center justify-content-center>\n            <ion-row col-12>\n                <ion-col col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8>\n                    <p ion-text color="red">{{App.UserInfo.rate}}%+2元/笔</p>\n                </ion-col>\n                <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4>\n                    <p ion-text>无积分</p>\n                </ion-col>\n            </ion-row>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <p ion-text>即时到账，单笔上2万，交易时间8:00 - 22：00点</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\VIPmembers\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], VIPmembersPage);
    return VIPmembersPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__ = __webpack_require__(506);
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
    function MycardPage(Servie, Auth, navCtrl) {
        this.Servie = Servie;
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.App = window.App;
        // 标题
        this.HeadTitle = "我的卡片";
        // 信用卡
        this.CreditCards = new Array();
        // 储蓄卡
        this.DepositCards = new Array();
        this.CardSwitch = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["a" /* CREDIT_CARD */];
        // 信用卡标识
        this.CreditCard = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["a" /* CREDIT_CARD */];
        // 储蓄卡标识
        this.DepositCard = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["c" /* DEPOSIT_CARD */];
    }
    MycardPage.prototype.ionViewDidEnter = function () {
        this.CreditCards = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["b" /* CardHelper */].filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["a" /* CREDIT_CARD */]);
        this.DepositCards = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["b" /* CardHelper */].filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["c" /* DEPOSIT_CARD */]);
    };
    MycardPage.prototype.ngOnInit = function () {
        // this.selectedCreditCard = CardHelper.getPrimaryCard(CREDIT_CARD).id;
        // this.selectedDepositCard = CardHelper.getPrimaryCard(DEPOSIT_CARD).id;
    };
    // 删除信用卡
    MycardPage.prototype.DelCreditCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).then(function (res) {
            _this.CreditCards.splice(_this.CreditCards.indexOf(cardId), 1);
            if (res) {
                App.ShowToast('信用卡删除成功');
                App.CurrentCreditCards = {};
                _this.Auth.GetUserData();
            }
            else {
                App.ShowError('信用卡删除失败');
            }
        });
    };
    // 删除储蓄卡
    MycardPage.prototype.DelDepositCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).then(function (res) {
            _this.DepositCards.splice(_this.DepositCards.indexOf(cardId), 1);
            if (res) {
                App.ShowToast('储蓄卡删除成功');
                App.CurrentDepositCard = {};
                _this.Auth.GetUserData();
            }
            else {
                App.ShowError('信用卡删除失败');
            }
        });
    };
    // 设置主卡
    MycardPage.prototype.SetPrimaryCard = function (t, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Servie.SetPrimCard(id)];
                    case 1:
                        res = _a.sent();
                        if (false !== res) {
                            __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["b" /* CardHelper */].setPrimary(t, id);
                            this.CreditCards = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["b" /* CardHelper */].filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["a" /* CREDIT_CARD */]);
                            this.DepositCards = __WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["b" /* CardHelper */].filterCard(__WEBPACK_IMPORTED_MODULE_4__shared_helper_CardHelper__["c" /* DEPOSIT_CARD */]);
                        }
                        return [2 /*return*/];
                }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mycard',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\mycard\index.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="CardSwitch">\n\n    <ion-segment-button value="{{CreditCard}}">信用卡</ion-segment-button>\n\n    <ion-segment-button value="{{DepositCard}}">储蓄卡</ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="CardSwitch">\n\n    <!-- 信用卡 -->\n\n    <div *ngSwitchCase="CreditCard">\n\n      <!-- 已添加 -->\n\n      <ion-grid>\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <!-- 未添加 -->\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 text-center \n\n            (click)="AddCreditCard()">\n\n            <button ion-button icon-center full>\n\n              <ion-icon name="add-circle"></ion-icon>\n\n              <span ion-text m-l-5>添加信用卡</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- 储蓄卡 -->\n\n    <div *ngSwitchCase="DepositCard">\n\n      <!-- 已添加 -->\n\n      <ion-grid>\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row m-t-10>\n\n          <ion-col col-12 class="card page-content" p-h-10>\n\n            <div class="d-flex justify-content-between border-bottom-1px" p-v-10>\n\n              <div class="flex-fill d-flex align-items-center justify-content-start">\n\n                <img src="assets/banklogo/bank_308.png" width="30" height="30" alt="logo" />\n\n                <div class="d-flex flex-fill flex-column justify-content-center l-h-d" m-l-5>\n\n                  <p><label f-18>招商银行</label></p>\n\n                  <p><span ion-text f-12>**** **** **** 2632</span></p>\n\n                </div>\n\n              </div>\n\n              <div class="flex-fill" text-right>\n\n                <button type="button" ion-only class="bg-transparent btn-change" no-padding no-margin>\n\n                  <ion-icon f-26 name="trash"></ion-icon>\n\n                </button>\n\n              </div>\n\n            </div>\n\n            <div class="d-flex justify-content-between">\n\n              <ion-label class="flex-fill" ion-text text-left>王伟</ion-label>\n\n              <div class="d-flex flex-fill align-items-center justify-content-end">\n\n                <ion-checkbox color="primary" [checked]="true"></ion-checkbox>\n\n                <span ion-text m-l-5>设为主卡</span>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <!-- 未添加 -->\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 text-center \n\n            (click)="AddDepositCard()">\n\n            <button ion-button icon-center full>\n\n              <ion-icon name="add-circle"></ion-icon>\n\n              <span ion-text m-l-5>添加储蓄卡</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\ucenter\mycard\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], MycardPage);
    return MycardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardHelper; });
/* unused harmony export PRIMARY_CARD */
/* unused harmony export NOT_PRI_CARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREDIT_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEPOSIT_CARD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
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



var CardHelper = /** @class */ (function () {
    function CardHelper(service) {
        this.service = service;
        this.APP = window.App;
        if (!__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].IsArrayLike(App.Cards)) {
            this.initData();
        }
    }
    // 初始化数据
    CardHelper.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.GetCardList().then(function (resp) { return resp.json(); })];
                    case 1:
                        res = _a.sent();
                        if (false === res) {
                            App.Cards = new Array();
                        }
                        else {
                            App.Cards = res;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取主卡
    CardHelper.getPrimaryCard = function (t) {
        var cards = App.Cards;
        var c;
        cards.forEach(function (card) {
            if (parseInt(card.type) === t && parseInt(card.primary) === PRIMARY_CARD) {
                c = card;
            }
        });
        return c;
    };
    // 获取一张卡片
    CardHelper.getOneCard = function (t) {
        var cards = App.Cards;
        var c;
        cards.forEach(function (card) {
            if (parseInt(card.type) === t) {
                c = card;
            }
        });
        return c;
    };
    // 根据类型刷选卡片
    CardHelper.filterCard = function (t) {
        var cards = App.Cards;
        cards.filter(function (card) {
            return parseInt(card.type) === t;
        });
        return cards;
    };
    // 设置主卡
    CardHelper.setPrimary = function (t, id) {
        var cards = App.Cards;
        cards.forEach(function (card, k) {
            if (parseInt(card.type) === t) {
                if (card.id === id) {
                    cards[k].primary = PRIMARY_CARD.toString();
                }
                else {
                    cards[k].primary = NOT_PRI_CARD.toString();
                }
            }
        });
        App.Cards = cards;
    };
    CardHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], CardHelper);
    return CardHelper;
}());

// 主卡
var PRIMARY_CARD = 1;
var NOT_PRI_CARD = 0;
// 信用卡
var CREDIT_CARD = 0;
// 储蓄卡
var DEPOSIT_CARD = 1;
//# sourceMappingURL=CardHelper.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(23);
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
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
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
        var _this = this;
        this.Service.GetVerifyCode(this.Form_Group.value.Tel).then(function (res) {
            if (res.code === 1) {
                // this.CodeSend = true;
                _this.State = 1;
                _this.times();
                return App.ShowToast("发送成功");
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    RegisterPage.prototype.NextTable = function () {
        this.Service.CheckVerifyCode(this.Form_Group.value.Tel, this.Form_Group.value.VCode);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\pages\register\index.html"*/'<ion-content>\n  <div class=" register">\n    <ion-row class="bgc-grad-primary back-btn">\n      <ion-col col-12 f-1-6>\n        <span>注 册\n          <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col col-3 p-v-40 text-center>\n        <img src="assets/imgs/58icon.png">\n      </ion-col>\n    </ion-row>\n    <ion-grid text-center>\n      <form novalidate [formGroup]="Form_Group" autocomplete="off">\n        <ion-row class="reg-line">\n          <ion-col col-12>\n            <input type="Tel" placeholder="请输入手机号" formControlName="Tel" required>\n          </ion-col>\n        </ion-row>\n        <ion-row class="reg-line">\n          <ion-col col-7>\n            <input type="text" placeholder="请输入手机验证码" formControlName="VCode" required>\n          </ion-col>\n          <ion-col col-5>\n            <button class="smbtn" [disabled]="Tel.invalid" (click)="GetVeriyCode()">{{VCodeText}}</button>\n          </ion-col>\n        </ion-row>\n       <ion-row m-t-30 m-b-10>\n          <ion-col col-12>\n            <button class="bgc-grad-primary bgc-header" (click)="NextTable()"  [ngClass]="{\'disabled\':Tel.invalid || VCode.invalid}" [disabled]="Tel.invalid || VCode.invalid">下一步</button>\n          </ion-col>\n        </ion-row>\n        <span f-1-0>点击"下一步"即表示您同意</span><span ion-text color="primary">《58付用户使用协议》</span>\n      </form>\n    </ion-grid>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\pages\register\index.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_const__ = __webpack_require__(509);
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



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.CreateHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    AppService.prototype.Get = function (uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url + '/' + uri;
        var options = this.CreateHeader();
        return this.http.get(url, options).toPromise();
    };
    // 请求非接口地址使用
    AppService.prototype.Get2 = function (url) {
        var options = this.CreateHeader();
        return this.http.get(url, options).toPromise();
    };
    AppService.prototype.Post = function (data, uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.post(url, data, options).toPromise();
    };
    AppService.prototype.Put = function (data, uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.put(url, data, options).toPromise();
    };
    AppService.prototype.Delete = function (uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.delete(url, options).toPromise();
    };
    AppService.prototype.JSON2Uri = function (data) {
        //DONE: json对象转成uri, 数据传输时，都以JSON,转成key1=value1&key2=value格式
        var result = [];
        for (var key in data) {
            result.push(key + '=' + data[key]);
        }
        return result.join('&');
    };
    AppService.prototype.Request = function (method, uri, data) {
        return __awaiter(this, void 0, void 0, function () {
            var retval, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 15, , 16]);
                        retval = null;
                        _a = method;
                        switch (_a) {
                            case 'get': return [3 /*break*/, 1];
                            case 'post': return [3 /*break*/, 6];
                            case 'post2': return [3 /*break*/, 8];
                            case 'put': return [3 /*break*/, 10];
                            case 'delete': return [3 /*break*/, 12];
                        }
                        return [3 /*break*/, 14];
                    case 1:
                        if (!(data != undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.Get(uri + '/' + data).then(function (res) { return res.json(); })];
                    case 2:
                        //data => id
                        retval = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.Get(uri).then(function (res) { return res.json(); })];
                    case 4:
                        retval = _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 14];
                    case 6: return [4 /*yield*/, this.Post(data, uri).then(function (res) { return res.json(); })];
                    case 7:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 8: return [4 /*yield*/, this.Post(data, uri).then(function (res) { return res.text(); })];
                    case 9:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 10: return [4 /*yield*/, this.Put(data, uri).then(function (res) { return res.json(); })];
                    case 11:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this.Delete(uri + '/' + data).then(function (res) { return res.json(); })];
                    case 13:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/, retval];
                    case 15:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=appservice.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return const_data; });
var const_data;
(function (const_data) {
    const_data.host_url = 'http://39.104.113.132';
})(const_data || (const_data = {}));
//# sourceMappingURL=application-const.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAppUpdate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(247);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]])
    ], CheckAppUpdate);
    return CheckAppUpdate;
}());

//# sourceMappingURL=checkAppUpdate.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Chart_js__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_root__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["TabsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["HomePage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UcenterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoginPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoanPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["OrdersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RecordsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UinfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RegisterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VIPmembersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CreditCardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CardInforPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FinalpayPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ConfirminfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddCreditPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ChangecardsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddDepositPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ListofbankPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["BranchcardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["StartPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ModifypwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FindpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ResetpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["SetPwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CheckoutPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AuthPage"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["TabsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["HomePage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UcenterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoginPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoanPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["OrdersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RecordsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UinfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RegisterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VIPmembersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CreditCardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CardInforPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FinalpayPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ConfirminfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddCreditPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ChangecardsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddDepositPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ListofbankPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["BranchcardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["StartPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ModifypwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FindpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ResetpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["SetPwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CheckoutPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AuthPage"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 251,
	"./af.js": 251,
	"./ar": 252,
	"./ar-dz": 253,
	"./ar-dz.js": 253,
	"./ar-kw": 254,
	"./ar-kw.js": 254,
	"./ar-ly": 255,
	"./ar-ly.js": 255,
	"./ar-ma": 256,
	"./ar-ma.js": 256,
	"./ar-sa": 257,
	"./ar-sa.js": 257,
	"./ar-tn": 258,
	"./ar-tn.js": 258,
	"./ar.js": 252,
	"./az": 259,
	"./az.js": 259,
	"./be": 260,
	"./be.js": 260,
	"./bg": 261,
	"./bg.js": 261,
	"./bm": 262,
	"./bm.js": 262,
	"./bn": 263,
	"./bn.js": 263,
	"./bo": 264,
	"./bo.js": 264,
	"./br": 265,
	"./br.js": 265,
	"./bs": 266,
	"./bs.js": 266,
	"./ca": 267,
	"./ca.js": 267,
	"./cs": 268,
	"./cs.js": 268,
	"./cv": 269,
	"./cv.js": 269,
	"./cy": 270,
	"./cy.js": 270,
	"./da": 271,
	"./da.js": 271,
	"./de": 272,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 272,
	"./dv": 275,
	"./dv.js": 275,
	"./el": 276,
	"./el.js": 276,
	"./en-au": 277,
	"./en-au.js": 277,
	"./en-ca": 278,
	"./en-ca.js": 278,
	"./en-gb": 279,
	"./en-gb.js": 279,
	"./en-ie": 280,
	"./en-ie.js": 280,
	"./en-il": 281,
	"./en-il.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 284,
	"./es-do": 285,
	"./es-do.js": 285,
	"./es-us": 286,
	"./es-us.js": 286,
	"./es.js": 284,
	"./et": 287,
	"./et.js": 287,
	"./eu": 288,
	"./eu.js": 288,
	"./fa": 289,
	"./fa.js": 289,
	"./fi": 290,
	"./fi.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 292,
	"./fr-ca": 293,
	"./fr-ca.js": 293,
	"./fr-ch": 294,
	"./fr-ch.js": 294,
	"./fr.js": 292,
	"./fy": 295,
	"./fy.js": 295,
	"./gd": 296,
	"./gd.js": 296,
	"./gl": 297,
	"./gl.js": 297,
	"./gom-latn": 298,
	"./gom-latn.js": 298,
	"./gu": 299,
	"./gu.js": 299,
	"./he": 300,
	"./he.js": 300,
	"./hi": 301,
	"./hi.js": 301,
	"./hr": 302,
	"./hr.js": 302,
	"./hu": 303,
	"./hu.js": 303,
	"./hy-am": 304,
	"./hy-am.js": 304,
	"./id": 305,
	"./id.js": 305,
	"./is": 306,
	"./is.js": 306,
	"./it": 307,
	"./it.js": 307,
	"./ja": 308,
	"./ja.js": 308,
	"./jv": 309,
	"./jv.js": 309,
	"./ka": 310,
	"./ka.js": 310,
	"./kk": 311,
	"./kk.js": 311,
	"./km": 312,
	"./km.js": 312,
	"./kn": 313,
	"./kn.js": 313,
	"./ko": 314,
	"./ko.js": 314,
	"./ky": 315,
	"./ky.js": 315,
	"./lb": 316,
	"./lb.js": 316,
	"./lo": 317,
	"./lo.js": 317,
	"./lt": 318,
	"./lt.js": 318,
	"./lv": 319,
	"./lv.js": 319,
	"./me": 320,
	"./me.js": 320,
	"./mi": 321,
	"./mi.js": 321,
	"./mk": 322,
	"./mk.js": 322,
	"./ml": 323,
	"./ml.js": 323,
	"./mr": 324,
	"./mr.js": 324,
	"./ms": 325,
	"./ms-my": 326,
	"./ms-my.js": 326,
	"./ms.js": 325,
	"./mt": 327,
	"./mt.js": 327,
	"./my": 328,
	"./my.js": 328,
	"./nb": 329,
	"./nb.js": 329,
	"./ne": 330,
	"./ne.js": 330,
	"./nl": 331,
	"./nl-be": 332,
	"./nl-be.js": 332,
	"./nl.js": 331,
	"./nn": 333,
	"./nn.js": 333,
	"./pa-in": 334,
	"./pa-in.js": 334,
	"./pl": 335,
	"./pl.js": 335,
	"./pt": 336,
	"./pt-br": 337,
	"./pt-br.js": 337,
	"./pt.js": 336,
	"./ro": 338,
	"./ro.js": 338,
	"./ru": 339,
	"./ru.js": 339,
	"./sd": 340,
	"./sd.js": 340,
	"./se": 341,
	"./se.js": 341,
	"./si": 342,
	"./si.js": 342,
	"./sk": 343,
	"./sk.js": 343,
	"./sl": 344,
	"./sl.js": 344,
	"./sq": 345,
	"./sq.js": 345,
	"./sr": 346,
	"./sr-cyrl": 347,
	"./sr-cyrl.js": 347,
	"./sr.js": 346,
	"./ss": 348,
	"./ss.js": 348,
	"./sv": 349,
	"./sv.js": 349,
	"./sw": 350,
	"./sw.js": 350,
	"./ta": 351,
	"./ta.js": 351,
	"./te": 352,
	"./te.js": 352,
	"./tet": 353,
	"./tet.js": 353,
	"./tg": 354,
	"./tg.js": 354,
	"./th": 355,
	"./th.js": 355,
	"./tl-ph": 356,
	"./tl-ph.js": 356,
	"./tlh": 357,
	"./tlh.js": 357,
	"./tr": 358,
	"./tr.js": 358,
	"./tzl": 359,
	"./tzl.js": 359,
	"./tzm": 360,
	"./tzm-latn": 361,
	"./tzm-latn.js": 361,
	"./tzm.js": 360,
	"./ug-cn": 362,
	"./ug-cn.js": 362,
	"./uk": 363,
	"./uk.js": 363,
	"./ur": 364,
	"./ur.js": 364,
	"./uz": 365,
	"./uz-latn": 366,
	"./uz-latn.js": 366,
	"./uz.js": 365,
	"./vi": 367,
	"./vi.js": 367,
	"./x-pseudo": 368,
	"./x-pseudo.js": 368,
	"./yo": 369,
	"./yo.js": 369,
	"./zh-cn": 370,
	"./zh-cn.js": 370,
	"./zh-hk": 371,
	"./zh-hk.js": 371,
	"./zh-tw": 372,
	"./zh-tw.js": 372
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 542;

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_marquee__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_toolbar__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_panel__ = __webpack_require__(610);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__["a" /* SwiperComp */],
                __WEBPACK_IMPORTED_MODULE_4__component_toolbar__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_panel__["a" /* PagePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_marquee__["a" /* PageMarqueeComponent */],
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__["a" /* SwiperComp */],
                __WEBPACK_IMPORTED_MODULE_4__component_toolbar__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_panel__["a" /* PagePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_marquee__["a" /* PageMarqueeComponent */],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *  to get Swiper
 *  npm install swiper -S
 *  npm install @types/swiper -D
 */


var SwiperComp = /** @class */ (function () {
    function SwiperComp(Ref) {
        this.Ref = Ref;
        this.Initialized = false;
        // onInit(swiper)       function    Callback function, will be executed right after Swiper initialization
        // onDestroy(swiper)    function    Callback function, will be executed when you destroy Swiper
        this.OnSlideChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** 300ms delay */
        this.OnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** no delay */
        this.OnTap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnDoubleTap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnImagesReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**  will be executed when Swiper progress is changed, as second arguments it receives progress that is always from 0 to 1 */
        this.OnProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnReachBeginning = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnReachEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Same as onSlideChangeStart but caused by autoplay */
        this.OnAutoplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnAutoplayStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnAutoplayStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SwiperComp.prototype.ngAfterViewInit = function () {
        this.Wrapper = this.Ref.nativeElement.querySelector('.swiper-wrapper');
        this.Instance = new Swiper(this.Ref.nativeElement.querySelector('swiper > div'), this.Config);
        this.HookSwiperEvents();
    };
    SwiperComp.prototype.Update = function (Reset, AnimateSpeed) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(Reset))
            Reset = true;
        var Animate = !__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(AnimateSpeed) || AnimateSpeed > 0;
        if (!this.Updating) {
            this.Updating = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (Reset) {
                        if (Animate) {
                            _this.Instance.slideNext(false, 0);
                            _this.Instance.update(true);
                            _this.SlideTo(0);
                        }
                        else {
                            _this.Instance.update(true);
                            _this.Instance.slideTo(0, 0);
                        }
                    }
                    else
                        _this.Instance.update(true);
                    if (!_this.Initialized) {
                        _this.Initialized = true;
                        _this.OnSlideChanged.next(_this.ActiveIndex);
                    }
                    _this.Updating = undefined;
                    resolve();
                });
            });
        }
        return this.Updating;
    };
    Object.defineProperty(SwiperComp.prototype, "ActiveIndex", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Instance))
                return this.Instance.activeIndex;
            else
                return 0;
        },
        set: function (v) {
            setTimeout(this.SlideTo(v));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComp.prototype, "SlideCount", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Instance))
                return this.Instance.slides.length;
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComp.prototype.SlideTo = function (Idx, Speed) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slideTo(Idx, Speed);
        });
    };
    /**
     *  @param Speed
     *      default 300
     *  @param Slient
     *      transition will not produce OnSlideChange when true
     */
    SwiperComp.prototype.SlidePrev = function (Speed, Slient) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slidePrev(!Slient, Speed);
        });
    };
    /**
     *  @param Speed
     *      default 300
     *  @param Slient
     *      transition will not produce OnSlideChange when true
     */
    SwiperComp.prototype.SlideNext = function (Speed, Slient) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slideNext(!Slient, Speed);
        });
    };
    SwiperComp.prototype.HookSwiperEvents = function () {
        var _this = this;
        /* all these can not simply use to decide slide changed
        (this.Instance as any).on('slideChangeStart', (Inst: Swiper) => this.OnSlideChangeStart.next(Inst));
        (this.Instance as any).on('slideNextStart', (Inst: Swiper) => this.OnSlideNextStart.next(Inst));
        (this.Instance as any).on('slideNextEnd', (Inst: Swiper) => this.OnSlideNextEnd.next(Inst));
        (this.Instance as any).on('slidePrevStart', (Inst: Swiper) => this.OnSlidePrevStart.next(Inst));
        (this.Instance as any).on('slidePrevEnd', (Inst: Swiper) => this.OnSlidePrevEnd.next(Inst));
        (this.Instance as any).on('transitionStart', (Inst: Swiper) => this.OnTransitionStart.next(Inst));
        (this.Instance as any).on('transitionEnd', (Inst: Swiper) => this.OnTransitionEnd.next(Inst));

        (this.Instance as any).on('touchStart', (Inst: Swiper, ev: TouchEvent) => this.OnTouchStart.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchMove', (Inst: Swiper, ev: TouchEvent) => this.OnTouchMove.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchMoveOpposite', (Inst: Swiper, ev: TouchEvent) => this.OnTouchMoveOpposite.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('slidesMove', (Inst: Swiper, ev: TouchEvent) => this.OnSlidesMove.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchEnd', (Inst: Swiper, ev: TouchEvent) => this.OnTouchEnd.next({Inst: Inst, ev: ev}));
        */
        this.Instance.on('touchStart', function (Inst) {
            _this.TouchStartIdx = _this.ActiveIndex;
        });
        this.Instance.on('touchEnd', function (Inst) {
            if (_this.TouchStartIdx !== _this.ActiveIndex) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                    console.log('Swiper OnSlideChanged: touchEnd');
                _this.OnSlideChanged.next(Inst.activeIndex);
            }
        });
        this.Instance.on('slideChangeEnd', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper OnSlideChanged: slideChangeEnd');
            _this.OnSlideChanged.next(Inst.activeIndex);
        });
        this.Instance.on('click', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper click');
            _this.OnClick.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('tap', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper tap');
            _this.OnTap.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('doubleTap', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper doubleTap');
            _this.OnDoubleTap.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('imagesReady', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper imagesReady');
            _this.OnImagesReady.next(Inst);
        });
        this.Instance.on('progress', function (Inst, Progress) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper progress');
            _this.OnProgress.next({ Inst: Inst, Progress: Progress });
        });
        this.Instance.on('reachBeginning', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper reachBeginning');
            _this.OnReachBeginning.next(Inst);
        });
        this.Instance.on('reachEnd', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper reachEnd');
            _this.OnReachEnd.next(Inst);
        });
        this.Instance.on('autoplay', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplay');
            _this.OnAutoplay.next(Inst);
        });
        this.Instance.on('autoplayStart', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplayStart');
            _this.OnAutoplayStart.next(Inst);
        });
        this.Instance.on('autoplayStop', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplayStop');
            _this.OnAutoplayStop.next(Inst);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "Config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnSlideChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnTap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnDoubleTap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnImagesReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnReachBeginning", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnReachEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplayStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplayStop", void 0);
    SwiperComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'swiper',
            template: "<div [ngClass]=\"{'swiper-container': false}\">\n        <ng-content></ng-content></div>",
            styles: [':host {display: block; height: 100%;}', ':host > div {width: 100%; height: 100%; overflow: hidden}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SwiperComp);
    return SwiperComp;
}());

//# sourceMappingURL=swiper.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMarqueeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageMarqueeComponent = /** @class */ (function () {
    function PageMarqueeComponent() {
    }
    PageMarqueeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.Animate(); });
    };
    PageMarqueeComponent.prototype.Animate = function () {
        var speed = 10;
        var _MARQUEE = this.contentRef.nativeElement, _UL = _MARQUEE.querySelector('ul');
        _UL.innerHTML = _UL.innerHTML + _UL.innerHTML + _UL.innerHTML;
        if (!__WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Direction)) {
            var ContentWidth = _UL.getBoundingClientRect().width / 3;
            if (ContentWidth <= 0)
                return;
            _UL.style.animationDuration = ContentWidth / speed * 1000 + "ms";
        }
        else {
            var ContentHeight_1 = _UL.clientHeight, _NODES = _UL.children.length, _PERH_1 = ContentHeight_1 / _NODES, _TOP_1 = 0;
            var Animation_1 = function () {
                _TOP_1 -= _PERH_1;
                _UL.style.transform = 'translateY(' + _TOP_1 + 'px)';
                if (Math.abs(_TOP_1) === (ContentHeight_1 - _PERH_1))
                    _TOP_1 = _PERH_1;
                setTimeout(function () { return Animation_1(); }, 3000);
            };
            Animation_1();
        }
    };
    Object.defineProperty(PageMarqueeComponent.prototype, "_textColor", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.TextColor))
                return 'text-' + this.TextColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageMarqueeComponent.prototype, "Content", {
        set: function (data) {
            this._content = data;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageMarqueeComponent.prototype, "TextColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageMarqueeComponent.prototype, "Direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PageMarqueeComponent.prototype, "Content", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PageMarqueeComponent.prototype, "contentRef", void 0);
    PageMarqueeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-marquee',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\shared\component\marquee\index.html"*/'\n\n<ion-row class="bgc-light" m-b-10>\n\n    <ion-col col-3>本日分润</ion-col>\n\n    <ion-col col-9 id="roll-bar">\n\n        <div f-1-2>￥<span f-1-6>{{item.title}}</span><span></span>{{item.content}}</div>\n\n    </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\shared\component\marquee\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PageMarqueeComponent);
    return PageMarqueeComponent;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageToolbarComponent; });
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

var PageToolbarComponent = /** @class */ (function () {
    function PageToolbarComponent() {
        // @Input()  FlexEnd: Boolean = false;
        this.CoverColor = false;
        this.TitleAlign = 'center';
        this.AppIcon = false;
        this.BtnTextEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.BtnIconEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "CoverColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "HasBack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "Title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "TitleAlign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "AppIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "BtnIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "BtnText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PageToolbarComponent.prototype, "BtnTextEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PageToolbarComponent.prototype, "BtnIconEvent", void 0);
    PageToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-toolbar',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\shared\component\toolbar\index.html"*/'<div class="app-toolbar-primary" [class.cover-color]="CoverColor">\n  <div class="toolbar-buttons">\n    <ng-template [ngIf]="HasBack">\n      <button ion-button class="back-bar-button" navPop tappable></button>\n    </ng-template>\n  </div>\n  <div class="toolbar-title">\n    <span>{{Title}}</span>\n  </div>\n  <div class="toolbar-buttons">\n    <ng-template [ngIf]="BtnIcon">\n      <button ion-button (click)="BtnIconEvent.emit()" tappable>\n        <ion-icon [class.app-icon]="AppIcon" [innerHTML]="BtnIcon"></ion-icon>\n      </button>\n    </ng-template>\n    <ng-template [ngIf]="BtnText">\n      <button ion-button (click)="BtnTextEvent.emit()" tappable>\n        {{BtnText}}\n      </button>\n    </ng-template>\n  </div>\n</div>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\shared\component\toolbar\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PageToolbarComponent);
    return PageToolbarComponent;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePanelComponent; });
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

var PagePanelComponent = /** @class */ (function () {
    function PagePanelComponent() {
        this.BtnEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "Title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PagePanelComponent.prototype, "Opacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "BtnTxt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PagePanelComponent.prototype, "BtnEvent", void 0);
    PagePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-panel',template:/*ion-inline-start:"D:\xampp\htdocs\myapp\myapp\src\shared\component\panel\index.html"*/'<ion-grid class="bgc-grad-primary">\n    <ion-row column text-center class="cmp-panel" [ngStyle]="{\'opacity\':Opacity}">\n        <ion-col><span class="name">{{Name}}</span></ion-col>\n        <ion-col><span class="title" [innerHTML]="Title"></span></ion-col>\n        <ion-col>\n            <ng-template [ngIf]="BtnTxt">\n                <button ion-button small outline color="light" m-b-15 (click)="BtnEvent.emit()" tappable>{{BtnTxt}}</button>\n            </ng-template>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\xampp\htdocs\myapp\myapp\src\shared\component\panel\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PagePanelComponent);
    return PagePanelComponent;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
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
            if (__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(token)) {
                return "Bearer " + token;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBaseService.prototype, "CreateHeader", {
        get: function () {
            this.SetHeader('Authorization', this.getToken);
            this.setDefaultContentType();
            return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        },
        enumerable: true,
        configurable: true
    });
    TBaseService.prototype.setDefaultContentType = function () {
        if (!this.headers.has('Content-Type')) {
            this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        }
    };
    // 设置请求头
    TBaseService.prototype.SetHeader = function (name, value) {
        if (this.headers.has(name)) {
            this.headers.delete(name);
            this.headers.set(name, value);
        }
        else {
            this.headers.append(name, value);
        }
    };
    TBaseService.prototype.Md5T = function (Password) {
        return __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(Password.toString());
    };
    TBaseService.prototype.Get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + '/' + uri;
                        return [4 /*yield*/, this.http.get(url, this.CreateHeader).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TBaseService.prototype.Post = function (Uri, Data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        App.ShowLoading();
                        url = API_URL + '/' + Uri;
                        App.HideLoading();
                        params = this.params.toString();
                        this.setNewParams();
                        return [4 /*yield*/, this.http.post(url, params, this.CreateHeader).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TBaseService.prototype.PostNoLoading = function (Uri, Data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + '/' + Uri;
                        params = this.params.toString();
                        console.log(params);
                        this.setNewParams();
                        return [4 /*yield*/, this.http.post(url, params, this.CreateHeader).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TBaseService.prototype.SetParam = function (key, value) {
        if (this.params.has(key)) {
            this.params.set(key, value);
        }
        else {
            this.params.append(key, value);
        }
    };
    TBaseService.prototype.setNewParams = function () {
        this.params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
    };
    return TBaseService;
}());

//# sourceMappingURL=pub_service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IDCARD_HAND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BANKCARD_FRONT; });
/* unused harmony export BANKCARD_BACK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lrz___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lrz__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pub_service__ = __webpack_require__(74);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FileService);
    return FileService;
}(__WEBPACK_IMPORTED_MODULE_5__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=fileservice.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(19);
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




var MineService = /** @class */ (function (_super) {
    __extends(MineService, _super);
    function MineService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    // 获取我的分润
    MineService.prototype.MyProfit = function (keyword, month) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('span', keyword);
                        if (month) {
                            this.SetParam('month', month);
                        }
                        return [4 /*yield*/, this.Post('kpay/api/user/myprofit/stati').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取分润账户
    MineService.prototype.UserProfit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/myprofit').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //分润账户数据处理
    MineService.prototype.GetProfitList = function (keyword, month, len) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(month)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.MyProfit(keyword, month).then(function (res) {
                                return _this.ChartDataProcess(res, len);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.MyProfit(keyword).then(function (res) {
                            return _this.ListDataProcess(res);
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MineService.prototype.ChartDataProcess = function (data, len) {
        var tmp_arr = [];
        if (data.length == 0) {
            for (var i = 0; i < len; i++) {
                tmp_arr.push(0);
            }
        }
        else {
            for (var i = 1; i < len + 1; i++) {
                var flag = true;
                for (var j = 0; j < data.length; j++) {
                    if (data[j].date.substr(-2) == i) {
                        tmp_arr.push(data[j].profit / 100);
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    tmp_arr.push(0);
                }
            }
        }
        return tmp_arr;
    };
    MineService.prototype.ListDataProcess = function (data) {
        var tmp_data = [];
        if (data.length == 0) {
            return tmp_data;
        }
        var tmpMonth = data[0].date.split(' ')[0].substr(0, 7);
        tmp_data = [
            {
                month: tmpMonth,
                total: 0,
                close: false,
                data: []
            }
        ];
        for (var i = 0; i < data.length; i++) {
            var tmpJson = {
                profit: data[i].profit,
                date: data[i].date
            };
            if (tmpMonth == data[i].date.split(' ')[0].substr(0, 7)) {
                for (var j = 0; j < tmp_data.length; j++) {
                    if (tmp_data[j].month == tmpMonth) {
                        tmp_data[j].data.push(tmpJson);
                        tmp_data[j].total += Number(tmpJson.profit);
                        break;
                    }
                }
            }
            else {
                tmpMonth = data[i].date.split(' ')[0].substr(0, 7);
                tmp_data.push({
                    month: tmpMonth,
                    total: tmpJson.profit,
                    close: false,
                    data: [tmpJson]
                });
            }
        }
        tmp_data = this.GetBarWidth(tmp_data);
        return tmp_data;
    };
    MineService.prototype.GetBarWidth = function (data_arr) {
        var max = 0;
        for (var i = 0; i < data_arr.length; i++) {
            if (max < data_arr[i].total) {
                max = data_arr[i].total;
            }
        }
        for (var i = 0; i < data_arr.length; i++) {
            data_arr[i].barWidth = (100 - 100 * data_arr[i].total / max) + '%';
        }
        return data_arr;
    };
    //获取取现记录列表
    MineService.prototype.GetCashList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/getCashList').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取取现记录详情
    MineService.prototype.GetCashDetail = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('id', orderId);
                        return [4 /*yield*/, this.Post('kpay/api/cash/getCashDetail').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取红包礼券voucher
    MineService.prototype.GetVoucherList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/cashback/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取我的客户
    MineService.prototype.GetMyCustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/mycustomer').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取返现记录
    MineService.prototype.GetCashBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/trade/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取VIP套餐列表
    MineService.prototype.GetVipList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/package/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 购买Vip
    MineService.prototype.BuyVip = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.SetParam('packId', id);
                        return [4 /*yield*/, this.Post('kpay/api/package/buy', { packId: id }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MineService);
    return MineService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=mineservice.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map