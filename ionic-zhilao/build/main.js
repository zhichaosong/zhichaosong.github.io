webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
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
var BaseUI = /** @class */ (function () {
    function BaseUI() {
    }
    /**
     * loading加载页面
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadingCtrl.create({
                            content: message,
                            duration: 2000
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loader];
                }
            });
        });
    };
    /**
     * Toast全局提示
     * @param {ToastController} toastCtrl
     * @param {string} message
     * 'bottom','top','middle'
     * @returns {toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message, position) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toastCtrl.create({
                            message: message,
                            duration: 2000,
                            position: position
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_header__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_detail_question_detail__ = __webpack_require__(53);
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







var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.questionList = [
            {
                title: '为什么年轻人不愿意从事养老护理',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '老年抑郁症是指年龄在55或60岁以上的抑郁症患者，狭义的也可以是指首次起病年龄在55或60岁之上的抑郁症患者，无论是哪一种，都有着诸多老年期的特点。',
                mainImg: '',
                date: '1559139750004',
            },
            {
                title: '为何年轻人不愿意缴纳养老保险，这5大理由阐释了具体原因！',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '随着我国人口老龄化程度不断加剧，养老服务供需矛盾近年来日益突出。长期关注养老问题的全国人大会议，我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainImg: 'assets/imgs/image1.png',
                date: '1559139750004',
            },
            {
                title: '为何年轻人不愿意缴纳养老保险，这5大理由阐释了具体原因！',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainVideo: 'https://dwz.cn/HDS4Hq2i',
                mainImg: 'assets/imgs/image2.png',
                date: '1559139750004',
            },
            {
                title: '为什么年轻人不愿意从事养老护理',
                author: '匿名用户',
                headImg: 'assets/imgs/logo.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainImg: 'assets/imgs/image1.png',
                date: '1559139750004',
            },
            {
                title: '为什么年轻人不愿意从事养老护理',
                author: '匿名用户',
                headImg: 'assets/imgs/logo.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainVideo: 'http://www.w3school.com.cn/i/movie.mp4',
                mainImg: 'assets/imgs/animal.jpg',
                date: '1559139750004',
            }
        ];
        _this.goSearch = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */], { index: 1 }, { animate: false });
        };
        _this.more = function () {
            alert('more');
        };
        return _this;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */].changeTab(1);
        // var inputArr = document.getElementsByTagName('input');
        // console.log(inputArr);
        // inputArr[0].focus();
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goDetail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__question_detail_question_detail__["a" /* QuestionDetailPage */], obj);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/home/home.html"*/'<ion-header (click)="goSearch()">\n  <common-header></common-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-card (click)="goDetail(item)" *ngFor="let item of questionList; let i = index">\n    <ion-card-header [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n      {{item.title}}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row style="align-items: center;padding-bottom: 5px">\n        <ion-row col-10 style="align-items: center;">\n          <img class="headImg" src="{{item.headImg}}">\n          <span class="author">{{item.author}}</span>\n        </ion-row>\n        <ion-row (click)="more()" col-2>\n          <ion-icon style="margin-left: auto" name="more"></ion-icon>\n        </ion-row>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-card-content>\n      {{item.content}}\n    </ion-card-content>\n\n    <ion-card-content *ngIf="!item.mainVideo && item.mainImg">\n      <div class="mainImg" [ngStyle]="{\'background-image\': \'url(\'+ item.mainImg + \')\'}"></div>\n    </ion-card-content>\n    <ion-card-content *ngIf="item.mainVideo">\n      <video class="mainVideo" src="{{item.mainVideo}}" poster="{{item.mainImg}}" controls="controls">\n        您的浏览器不支持 video 标签。\n      </video>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__common_header__["a" /* HeaderPage */]
            ],
            exports: [],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ask_ask__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_detail_question_detail__ = __webpack_require__(53);
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





// @IonicPage()
var SearchResultPage = /** @class */ (function (_super) {
    __extends(SearchResultPage, _super);
    function SearchResultPage(navCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.questionList = [
            {
                title: '为什么年轻人不愿意从事养老护理',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainImg: ''
            },
            {
                title: '为何年轻人不愿意缴纳养老保险，这5大理由阐释了具体原因！',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '随着我国人口老龄化程度不断加剧，养老服务供需矛盾近年来日益突出。长期关注养老问题的全国人大会议，我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
            },
            {
                title: '为何年轻人不愿意缴纳养老保险，这5大理由阐释了具体原因！',
                author: '匿名用户',
                headImg: 'assets/imgs/image3.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
            },
            {
                title: '为什么年轻人不愿意从事养老护理',
                author: '匿名用户',
                headImg: 'assets/imgs/logo.png',
                content: '我国是世界上人口最多的国家，随着我国人口老龄化程度的不断加深，老年人口数量占全国总人口数量的比重将不断增长。一国人口生育率的迅速下降在造成人口老龄化加速的同时，也将导致少儿抚养比例迅速下降，劳动年龄人口比例上升。在老年人口比例达到较高水平之前，将形成一个劳动力资源相对丰富、抚养负担轻、对经济发展十分有利的“黄金时期”，这一现象被称为“人口红利”。',
                mainImg: 'assets/imgs/image1.png'
            }
        ];
        _this.ask = function () {
            if (this.searchValue) {
                // alert('提问' + this.searchValue);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ask_ask__["a" /* AskPage */], { words: this.searchValue });
            }
            else {
                this.navCtrl.pop({ animate: false });
            }
        };
        _this.wrong = function () {
            this.searchValue = '';
        };
        _this.searchValue = navParams.get('words');
        _this.navCtrl.remove(1, 1);
        return _this;
    }
    SearchResultPage.prototype.ionViewDidLoad = function () {
    };
    SearchResultPage.prototype.goDetail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__question_detail_question_detail__["a" /* QuestionDetailPage */], obj);
    };
    SearchResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-result',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/search-result/search-result.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row style="width: 75%;" class="center">\n        <ion-input id="search-input" placeholder="请输入您的问题" [(ngModel)]="searchValue"></ion-input>\n        <img class="search-button" [ngStyle]="{\'left\':searchValue?\'10%\':\'22%\'}" src="../../assets/icon/icon-search.png" alt="">\n        <img class="wrong-button" *ngIf="searchValue" (click)="wrong()" src="../../assets/icon/icon-wrong.png" alt="">\n        <!--<ion-icon name="search" class="search-button" [ngStyle]="{\'left\':searchValue?\'30px\':\'70px\'}"-->\n        <!--color="font-grey"></ion-icon>-->\n      </ion-row>\n      <ion-row col-3 class="center" (click)="ask()">\n        <!--<ion-icon class="ask-button" name="create" color="white"></ion-icon>-->\n        <img *ngIf="searchValue" class="ask-button" src="../../assets/icon/icon-edit.png" alt="">\n        <span class="ask-text">{{searchValue? \'提问\' : \'取消\'}}</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-card (click)="goDetail(item)" *ngFor="let item of questionList; let i = index">\n    <ion-card-header [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n      {{item.title}}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row style="align-items: center;padding-bottom: 5px">\n        <ion-row col-10 style="align-items: center;">\n          <img class="headImg" src="{{item.headImg}}">\n          <span class="author">{{item.author}}</span>\n        </ion-row>\n        <ion-row (click)="more()" col-2>\n          <ion-icon style="margin-left: auto" name="more"></ion-icon>\n        </ion-row>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-card-content>\n      {{item.content}}\n    </ion-card-content>\n\n    <ion-card-content *ngIf="!item.mainVideo && item.mainImg">\n      <div class="mainImg" [ngStyle]="{\'background-image\': \'url(\'+ item.mainImg + \')\'}"></div>\n    </ion-card-content>\n    <ion-card-content *ngIf="item.mainVideo">\n      <video class="mainVideo" src="{{item.mainVideo}}" poster="{{item.mainImg}}" controls="controls">\n        您的浏览器不支持 video 标签。\n      </video>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/search-result/search-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SearchResultPage);
    return SearchResultPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ask_type_ask_type__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @IonicPage()
var AskPage = /** @class */ (function () {
    function AskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.back = function () {
            this.navCtrl.pop();
        };
        this.next = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ask_type_ask_type__["a" /* AskTypePage */]);
        };
        this.searchValue = navParams.get('words');
    }
    AskPage.prototype.ionViewDidLoad = function () {
    };
    AskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask/ask.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">提问</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content style="background: #F6F6F6">\n  <ion-row padding style="background: #ffffff">\n    <input class="ask-title" [(ngModel)]="searchValue" type="text" placeholder="请输入您的问题">\n    <textarea class="ask-content" name="" id="" cols="30" rows="10" placeholder="请输入问题描述"></textarea>\n  </ion-row>\n  <ion-row padding>\n    <button (click)="next()" class="block-button">下一步</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask/ask.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AskPage);
    return AskPage;
}());

//# sourceMappingURL=ask.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ask_publish_ask_publish__ = __webpack_require__(202);
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
 * Generated class for the AskTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AskTypePage = /** @class */ (function () {
    function AskTypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typeList = ['养老理念', '护理技巧', '生活经验', '老年心理', '老年社交', '老年情感'];
        this.selectIndex = 0;
        this.searchValue = navParams.get('words');
        this.searchContent = navParams.get('content');
    }
    AskTypePage.prototype.ionViewDidLoad = function () {
    };
    AskTypePage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ask_publish_ask_publish__["a" /* AskPublishPage */]);
    };
    AskTypePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AskTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask-type',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask-type/ask-type.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">提问</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content style="background: #F6F6F6">\n  <div padding style="background: #ffffff; padding-bottom: 8rem">\n    <ion-row>\n      <span class="ask-title">问题类别</span>\n    </ion-row>\n    <ion-row style="margin: 0 -0.5rem">\n      <ion-col *ngFor="let item of typeList; let i = index" col-4>\n        <button\n          [ngClass]="i ==selectIndex?\'type-button-select\':\'type-button-normal\'"\n          (click)="selectIndex=i">{{item}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row padding>\n    <button (click)="submit()" class="block-button">提交</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask-type/ask-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AskTypePage);
    return AskTypePage;
}());

//# sourceMappingURL=ask-type.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskPublishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_detail_question_detail__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @IonicPage()
var AskPublishPage = /** @class */ (function () {
    function AskPublishPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionList = [
            {
                title: '老年抑郁症状是什么？',
                author: '苏明玉',
                date: '1559139754000',
                praise: 55,
                comment: 82
            },
            {
                title: '老年人要社交吗？',
                author: '蔡根花',
                date: '1559139754000',
                praise: 156,
                comment: 34
            },
            {
                title: '老年人会得抑郁症吗？',
                author: '苏大强',
                date: '1559139750004',
                praise: 11,
                comment: 23
            }
        ];
        this.sameList = [
            {
                title: '老年抑郁症状是什么？'
            },
            {
                title: '老年人要社交吗？'
            }
        ];
        this.navCtrl.remove(1, 3);
    }
    AskPublishPage.prototype.ionViewDidLoad = function () {
    };
    AskPublishPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AskPublishPage.prototype.goDetail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question_detail_question_detail__["a" /* QuestionDetailPage */], obj);
    };
    AskPublishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask-publish',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask-publish/ask-publish.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">已发布</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content style="background: #F6F6F6">\n  <div padding style="background: #ffffff">\n\n    <ion-card (click)="goDetail(item)" *ngFor="let item of questionList; let i = index">\n      <ion-card-header [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n        {{item.title}}\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row style="align-items: center;padding-bottom: 5px;margin-left: -5px">\n          <ion-row col-7 style="align-items: center;">\n            <img class="little-icon" src="assets/icon/icon-comment.png" alt="">\n            <span class="author">{{item.comment}}</span>\n            <img class="little-icon" style="margin-left: 15px" src="assets/icon/icon-heart.png" alt="">\n            <span class="author">{{item.praise}}</span>\n          </ion-row>\n          <ion-row col-5>\n            <span class="author" style="margin-left: auto">{{item.author}}</span>\n            <span class="author" style="margin-left: 0.5rem">{{item.date | date:"yyyy-MM-dd"}}</span>\n          </ion-row>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row>\n      <span class="ask-title">相似问题</span>\n    </ion-row>\n\n    <ion-card *ngFor="let item of sameList; let i = index">\n      <ion-card-header class="little-header" [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n        {{item.title}}\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/ask-publish/ask-publish.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AskPublishPage);
    return AskPublishPage;
}());

//# sourceMappingURL=ask-publish.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_header__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lesson_detail_lesson_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lesson_me_lesson_me__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LessonPage = /** @class */ (function () {
    function LessonPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categoryList = [{ name: '我的课程', icon: 'assets/icon/icon-video.png' },
            { name: '最受欢迎课程', icon: 'assets/icon/icon-hot.png' },
            { name: '最新课程', icon: 'assets/icon/icon-book.png' }];
        this.lessonList = [
            [{
                    id: 1,
                    title: '养老护理职业知识(1课时)',
                    mainImg: 'assets/imgs/animal.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 56,
                    hits: 1544
                }, {
                    id: 2,
                    title: '老年人慢性病症状与并发症及预防措施',
                    mainImg: 'assets/imgs/school.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 32,
                    hits: 1120
                }],
            [{
                    id: 3,
                    title: '养老护理职业知识(1课时)',
                    mainImg: 'assets/imgs/animal.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 44,
                    hits: 1544
                }, {
                    id: 4,
                    title: '老年人慢性病症状与并发症及预防措施',
                    mainImg: 'assets/imgs/school.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 88,
                    hits: 1120
                }],
            [{
                    id: 5,
                    title: '养老护理职业知识(1课时)',
                    mainImg: 'assets/imgs/animal.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 11,
                    hits: 1544
                }, {
                    id: 6,
                    title: '老年人慢性病症状与并发症及预防措施',
                    mainImg: 'assets/imgs/school.jpg',
                    intro: '一直以来社会对养老护理工作都存在认知偏见，通过本课程学习，帮助养老护理专业人员重新认识自己的工作。',
                    outline: ['社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见', '社会对养老护理工作存在认知偏见'],
                    progress: 100,
                    hits: 1120
                }],
        ];
        this.more = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__lesson_me_lesson_me__["a" /* LessonMePage */]);
        };
        this.goSearch = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], { index: 2 }, { animate: false });
        };
    }
    LessonPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */].changeTab(2);
    };
    LessonPage.prototype.goDetail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lesson_detail_lesson_detail__["a" /* LessonDetailPage */], obj);
    };
    LessonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson/lesson.html"*/'<ion-header (click)="goSearch()">\n  <common-header></common-header>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let list of lessonList; let i = index" [attr.data-index]="i">\n    <ion-card-header [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;padding: 0;">\n          <img class="headImg" src="{{categoryList[i].icon}}">\n          <span style="padding-left: 10px">{{categoryList[i].name}}</span>\n        </ion-row>\n        <ion-row (click)="more()" col-2 class="header-more">更多 ></ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content (click)="goDetail(item)" *ngFor="let item of list">\n      <ion-row style="align-items: center;">\n        <ion-row col-4 style="align-items: center;flex: 15">\n          <div class="mainImg" [ngStyle]="{\'background-image\': \'url(\'+ item.mainImg + \')\'}"></div>\n          <ion-row class="progress-bar">\n            <div class="progress-left" [ngStyle]="{\'width\': item.progress + \'%\'}"></div>\n            <div class="progress-right" [ngStyle]="{\'width\': 100-item.progress + \'%\'}"></div>\n          </ion-row>\n        </ion-row>\n        <ion-col col-8 style="height: 90px;flex: 24">\n          <ion-row class="title" col-12  style="height: 50%; align-items: flex-start">{{item.title}}</ion-row>\n          <ion-row class="description"  style="height: 50%; align-items: flex-end">\n            <ion-col col-6>完成进度{{item.progress}}%</ion-col>\n            <ion-col col-6 style="text-align: right;">点击量{{item.hits}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson/lesson.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__common_header__["a" /* HeaderPage */]
            ],
            exports: [],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LessonPage);
    return LessonPage;
}());

//# sourceMappingURL=lesson.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the LessonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var LessonDetailPage = /** @class */ (function () {
    function LessonDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lessonDetail = navParams.data;
    }
    LessonDetailPage.prototype.ionViewDidLoad = function () {
    };
    LessonDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    LessonDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson-detail',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson-detail/lesson-detail.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">课程简介</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-row style="align-items: center;">\n        <ion-row col-4 style="align-items: center;">\n          <div class="mainImg" [ngStyle]="{\'background-image\': \'url(\'+ lessonDetail.mainImg + \')\'}"></div>\n          <ion-row class="progress-bar">\n            <div class="progress-left" [ngStyle]="{\'width\': lessonDetail.progress + \'%\'}"></div>\n            <div class="progress-right" [ngStyle]="{\'width\': 100-lessonDetail.progress + \'%\'}"></div>\n          </ion-row>\n        </ion-row>\n        <ion-col col-8 style="height: 90px">\n          <ion-row class="title" col-12 style="height: 50%; align-items: flex-start">{{lessonDetail.title}}</ion-row>\n          <ion-row class="description" style="height: 50%; align-items: flex-end">\n            <ion-col col-6>完成进度{{lessonDetail.progress}}%</ion-col>\n            <ion-col col-6 style="text-align: right;">{{lessonDetail.hits}}人学习</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      课程简介\n    </ion-card-header>\n    <ion-card-content style="padding: 10px 0">\n      {{lessonDetail.intro}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      课程大纲\n    </ion-card-header>\n    <div style="padding: 10px">\n      <ion-card-content *ngFor="let item of lessonDetail.outline;let i = index;">\n        <span>{{i+1}}</span> {{item}}\n      </ion-card-content>\n    </div>\n  </ion-card>\n  <ion-row>\n    <button class="block-button">开始学习</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson-detail/lesson-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LessonDetailPage);
    return LessonDetailPage;
}());

//# sourceMappingURL=lesson-detail.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonMePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage()
var LessonMePage = /** @class */ (function () {
    function LessonMePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LessonMePage.prototype.ionViewDidLoad = function () {
    };
    LessonMePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    LessonMePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson-me',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson-me/lesson-me.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">我的课程</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      我的课程\n    </ion-card-header>\n    <ion-card-content style="padding: 10px 0">\n      <ion-grid style="margin: -5px;">\n        <ion-row >\n          <ion-col>\n            <img class="mainImg" src="../../assets/imgs/lesson1.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col>\n            <img class="mainImg" src="../../assets/imgs/lesson2.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <img class="mainImg" src="../../assets/imgs/lesson3.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col>\n            <img class="mainImg" src="../../assets/imgs/lesson4.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      热门课程\n    </ion-card-header>\n    <ion-card-content style="padding: 10px 0">\n      <ion-grid style="margin: -5px;">\n        <ion-row size="12" >\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson1.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson2.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n        <ion-row size="12">\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson3.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson4.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      最新课程\n    </ion-card-header>\n    <ion-card-content style="padding: 10px 0">\n      <ion-grid style="margin: -5px;">\n        <ion-row size="12" >\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson1.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson2.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n        <ion-row size="12">\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson3.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n          <ion-col size="6">\n            <img class="mainImg" src="../../assets/imgs/lesson4.png" alt="">\n            为什么年轻人不愿意从事养老护理\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/lesson-me/lesson-me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LessonMePage);
    return LessonMePage;
}());

//# sourceMappingURL=lesson-me.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_header__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_me_notification_me__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categoryList = [{ name: '我的通知', icon: 'assets/icon/icon-horn.png' },
            { name: '我的消息', icon: 'assets/icon/icon-bell.png' },
            { name: '我的私信', icon: 'assets/icon/icon-info.png' }];
        this.notificationList = [
            [{
                    id: 1,
                    title: '关于组织学习老年人护理的通知',
                    content: '为提升我院护理人员知识水平，先请全体学员学习 “老年护具”使用课程。',
                    time: '1559119750004',
                    sender: '苏明哲',
                    readed: true
                }, {
                    id: 2,
                    title: '关于组织学习的饮食搭配通知',
                    content: '为提升我院护理人员知识水平，先请全体学员学习 “老年护具”使用课程。',
                    time: '1559129750004',
                    sender: '杨晓琼',
                    readed: false
                }, {
                    id: 3,
                    title: '关于组织学习的保健按摩通知',
                    content: '为提升我院护理人员知识水平，先请全体学员学习 “老年护具”使用课程。',
                    time: '1559159750004',
                    sender: '李洪明',
                    readed: true
                }],
            [{
                    id: 4,
                    content: '您的话题“老年抑郁症状有哪些”已有唐山养老院、河北养老院等25人回答',
                }, {
                    id: 5,
                    content: '您回复的“老年人饮食健康”已有30人点赞',
                }],
            [{
                    id: 6,
                    content: '唐山养老院发来一条私信',
                }],
        ];
        this.more = function () {
            alert('more');
        };
        this.goSearch = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], { index: 3 }, { animate: false });
        };
    }
    NotificationPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */].changeTab(3);
    };
    NotificationPage.prototype.goDetail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_me_notification_me__["a" /* NotificationMePage */], obj);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification/notification.html"*/'<ion-header (click)="goSearch()">\n  <common-header></common-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let list of notificationList; let i = index" [attr.data-index]="i">\n    <ion-card-header [ngStyle]="{\'margin-top\':i==0?\'-10px\':\'0\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;padding: 0;">\n          <img class="headImg" src="{{categoryList[i].icon}}">\n          <span style="padding-left: 10px">{{categoryList[i].name}}</span>\n        </ion-row>\n        <ion-row (click)="more()" col-2 class="header-more">更多 ></ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content (click)="goDetail(item)" *ngFor="let item of list">\n      <ion-row *ngIf="item.title" class="title" col-12>{{item.title}}</ion-row>\n      <ion-row *ngIf="item.title" class="description" style="height: 50%; align-items: flex-end">\n        <ion-col col-5>{{item.time | date:"yyyy-MM-dd HH:mm"}}</ion-col>\n        <ion-col col-4>发送人:{{item.sender}}</ion-col>\n        <ion-col col-3 style="text-align: right;">{{item.readed?\'已读\':\'未读\'}}</ion-col>\n      </ion-row>\n      <ion-row *ngIf="!item.title && item.content" class="font-normal" col-12>{{item.content}}</ion-row>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification/notification.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__common_header__["a" /* HeaderPage */]
            ],
            exports: [],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationMePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the NotificationMePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NotificationMePage = /** @class */ (function () {
    function NotificationMePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detail = navParams.data;
    }
    NotificationMePage.prototype.ionViewDidLoad = function () {
    };
    NotificationMePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NotificationMePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-me',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification-me/notification-me.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">我的消息</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content style="background: #F6F6F6">\n  <div padding style="background: #ffffff">\n    <ion-card>\n      <ion-card-header [ngStyle]="{\'margin-top\':\'-20px\'}">\n        {{detail.title}}\n      </ion-card-header>\n\n      <ion-card-content>\n        亲爱的学员：<br>\n        {{detail.content}}\n      </ion-card-content>\n      <ion-card-content style="text-align: right;">\n        <p class="date">{{detail.sender}}</p>\n        <p class="date">{{detail.time | date:"yyyy-MM-dd"}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-row padding>\n    <button (click)="back()" class="block-button">确定</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification-me/notification-me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationMePage);
    return NotificationMePage;
}());

//# sourceMappingURL=notification-me.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__me_student_me_student__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__me_account_me_account__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_send_notification_send__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MePage = /** @class */ (function () {
    function MePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.categoryList = [{ name: '我的学员', icon: 'assets/icon/icon-persons.png' },
            { name: '我的账户', icon: 'assets/icon/icon-account.png' },
            { name: '我的通知', icon: 'assets/icon/icon-horn-green.png' },
            { name: '设置', icon: 'assets/icon/icon-setting.png' }];
        this.studentList = [
            {
                id: 1,
                name: '徐涛',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '70',
                start: '2019-04-23'
            },
            {
                id: 2,
                name: '赵江南',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '28',
                start: '2019-04-23'
            }
        ];
        this.noticeList = [{
                id: 4,
                title: '关于开展护理知识的通知',
                hits: 101,
                reply: 24
            },
            {
                id: 5,
                title: '关于开展老年人饮食健康知识的通知',
                hits: 101,
                reply: 24
            }];
        this.userInfo = {
            name: '郭明浩',
            period: '一年',
            start: '2019-05-01',
            end: '2020-05-01'
        };
        this.count = 10;
        this.addNotice = function () {
            this.noticeList.push({
                id: this.count++,
                title: '关于开展护理通知' + this.count,
                hits: 101,
                reply: 24
            });
            __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */].changeTab(5);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_send_notification_send__["a" /* NotificationSendPage */]);
        };
        this.deleteNotice = function (id) {
            console.log(id);
            var index = 0;
            for (var i = 0; i < this.noticeList.length; i++) {
                if (this.noticeList[i].id == id) {
                    index = i;
                }
            }
            this.noticeList.splice(index, 1);
            this.presentToast('成功删除 1 条通知');
        };
        this.goMyStudent = function () {
            __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */].changeTab(5);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__me_student_me_student__["a" /* MeStudentPage */]);
        };
        this.goMeAccount = function () {
            __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */].changeTab(5);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__me_account_me_account__["a" /* MeAccountPage */]);
        };
    }
    MePage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */].changeTab(4);
    };
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me/me.html"*/'<!--<ion-header>-->\n  <!--<ion-navbar>-->\n    <!--<ion-title>-->\n      <!--me-->\n    <!--</ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content padding>\n  <!--头像-->\n  <ion-card>\n    <ion-card-header [ngStyle]="{\'margin-top\':\'-10px\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;" (click)="goMeAccount()">\n          <img class="head-icon" src="assets/imgs/logo.png">\n          <span style="padding-left: 10px" class="head-title">知老内测用户</span>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n  <!--我的学员-->\n  <ion-card>\n    <ion-card-header [ngStyle]="{\'margin-top\':\'-10px\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <img class="headImg" src="{{categoryList[0].icon}}">\n          <span style="padding-left: 10px">{{categoryList[0].name}}</span>\n          <span style="padding-left: 10px;" class="description">(55/100)</span>\n        </ion-row>\n        <ion-row (click)="goMyStudent()" col-2 class="header-more">\n          <ion-icon style="margin-left: auto;padding-right: 5px" name="add"></ion-icon>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-2 class="title">姓名</ion-col>\n        <ion-col col-2 class="title">单位</ion-col>\n        <ion-col col-3 class="title">课程</ion-col>\n        <ion-col col-2 class="title">进度</ion-col>\n        <ion-col col-3 class="title" style="text-align: right">报名日期</ion-col>\n      </ion-row>\n      <ion-row *ngFor = "let item of studentList">\n        <ion-col col-2 class="description">{{item.name}}</ion-col>\n        <ion-col col-2 class="description">{{item.company}}</ion-col>\n        <ion-col col-3 class="description">{{item.lesson}}</ion-col>\n        <ion-col col-2 class="description">{{item.progress}}%</ion-col>\n        <ion-col col-3 class="description" style="text-align: right">{{item.start}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!--我的账户-->\n  <ion-card>\n    <ion-card-header>\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <img class="headImg" src="{{categoryList[1].icon}}">\n          <span style="padding-left: 10px">{{categoryList[1].name}}</span>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-3 class="title">账户名</ion-col>\n        <ion-col col-3 class="title">有效期</ion-col>\n        <ion-col col-3 class="title">开始日期</ion-col>\n        <ion-col col-3 class="title" style="text-align: right">终止日期</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3 class="description">{{userInfo.name}}</ion-col>\n        <ion-col col-3 class="description">{{userInfo.period}}</ion-col>\n        <ion-col col-3 class="description">{{userInfo.start}}</ion-col>\n        <ion-col col-3 class="description" style="text-align: right">{{userInfo.end}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!--我的通知-->\n  <ion-card>\n    <ion-card-header>\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <img class="headImg" src="{{categoryList[2].icon}}">\n          <span style="padding-left: 10px">{{categoryList[2].name}}</span>\n        </ion-row>\n        <ion-row (click)="addNotice()" col-2 class="header-more">\n          <ion-icon style="margin-left: auto;padding-right: 5px" name="add"></ion-icon>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row *ngFor="let item of noticeList">\n        <ion-col col-7 class="normal">{{item.title}}</ion-col>\n        <ion-col col-4 class="description">阅读量 {{item.reply}}/{{item.hits}}</ion-col>\n        <ion-col col-1 class="description" (click) = "deleteNotice(item.id)" style="text-align: right">\n          <ion-icon name="trash" style="padding-right: 5px;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!--设置-->\n  <ion-card>\n    <ion-card-header>\n      <ion-row style="align-items: center;">\n        <ion-row col-12 style="align-items: center;">\n          <img class="headImg" src="{{categoryList[3].icon}}">\n          <span style="padding-left: 10px">{{categoryList[3].name}}</span>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row (click)="goMeAccount()" class="normal" col-12>账号与安全</ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me/me.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], MePage);
    return MePage;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage()
var MeStudentPage = /** @class */ (function () {
    function MeStudentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchValue = '';
        this.studentList = [
            {
                id: 1,
                name: '徐涛',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '70',
                start: '2019-04-23'
            },
            {
                id: 2,
                name: '赵江南',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '28',
                start: '2019-04-23'
            }
        ];
        this.addStudent = function () {
            this.studentList.push({
                id: this.count++,
                name: '学员' + this.count,
                company: '护理-p' + this.count,
                work: '护理员' + this.count,
                lesson: '职业认知' + this.count,
                progress: 28 + this.count,
                start: '2019-04-23'
            });
            this.presentToast('成功添加 1 位学员');
        };
    }
    MeStudentPage.prototype.ionViewDidLoad = function () {
    };
    MeStudentPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MeStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me-student',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me-student/me-student.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">我的学员</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <!--查找学员-->\n  <ion-grid class="search-header" style="background-color: white">\n    <ion-row>\n      <ion-row style="width: 100%;" class="center">\n        <ion-input placeholder="查找用户名或实名" [(ngModel)]="searchValue"></ion-input>\n        <img class="search-img" [ngStyle]="{\'left\':searchValue?\'10%\':\'22%\'}" src="../../assets/icon/icon-search.png" alt="">\n        <!--<ion-icon name="search" class="search-button" [ngStyle]="{\'left\':searchValue?\'30px\':\'70px\'}"-->\n        <!--color="font-grey"></ion-icon>-->\n      </ion-row>\n<!--      <ion-row col-3 class="center" (click)="">-->\n        <!--<ion-icon class="ask-button" name="create" color="white"></ion-icon>-->\n        <!--<img class="ask-button" src="../../assets/icon/icon-edit.png" alt="">-->\n<!--        <span class="ask-text">查找</span>-->\n<!--      </ion-row>-->\n    </ion-row>\n  </ion-grid>\n  <!--我的学员-->\n  <ion-card>\n    <ion-card-header [ngStyle]="{\'margin-top\':\'-10px\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <span>我的学员</span>\n          <span style="padding-left: 10px;" class="description">(55/100)</span>\n        </ion-row>\n        <ion-row (click)="addStudent()" col-2 class="header-more">\n          <ion-icon style="margin-left: auto;padding-right: 5px;" name="add"></ion-icon>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-2 class="title">姓名</ion-col>\n        <ion-col col-2 class="title">单位</ion-col>\n        <ion-col col-3 class="title">课程</ion-col>\n        <ion-col col-3 class="title">报名日期</ion-col>\n        <ion-col col-2 class="title" style="text-align: right;padding-right: 5px;">操作</ion-col>\n      </ion-row>\n      <ion-row *ngFor = "let item of studentList | pipeStudent:searchValue">\n        <ion-col col-2 class="description">{{item.name}}</ion-col>\n        <ion-col col-2 class="description">{{item.company}}</ion-col>\n        <ion-col col-3 class="description">{{item.lesson}}</ion-col>\n        <ion-col col-3 class="description">{{item.start}}</ion-col>\n        <ion-col col-2 class="title" style="text-align: right;">\n          <ion-icon name="trash" style="padding-right: 5px;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me-student/me-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MeStudentPage);
    return MeStudentPage;
}());

//# sourceMappingURL=me-student.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the MeAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MeAccountPage = /** @class */ (function () {
    function MeAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.studentList = [
            {
                id: 1,
                name: '徐涛',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '70',
                start: '2019-04-23'
            },
            {
                id: 2,
                name: '赵江南',
                company: '护理-p',
                work: '护理员',
                lesson: '职业认知',
                progress: '28',
                start: '2019-04-23'
            }
        ];
    }
    MeAccountPage.prototype.ionViewDidLoad = function () {
    };
    MeAccountPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MeAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me-account',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me-account/me-account.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">我的账户</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <!--我的账户-->\n  <ion-card>\n    <ion-card-header [ngStyle]="{\'margin-top\':\'-10px\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <span>我的账户</span>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-4 class="title">姓名</ion-col>\n        <ion-col col-4 class="title">注册时间</ion-col>\n        <ion-col col-4 class="title" style="text-align: right;padding-right: 5px;">在线时长</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4 class="description">郭明浩</ion-col>\n        <ion-col col-4 class="description">2019.01.12</ion-col>\n        <ion-col col-4 class="title" style="text-align: right;">01:20:45</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!--我的组织-->\n  <ion-card>\n    <ion-card-header [ngStyle]="{\'margin-top\':\'-10px\'}">\n      <ion-row style="align-items: center;">\n        <ion-row col-10 style="align-items: center;">\n          <span>我的组织</span>\n        </ion-row>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-2 class="title">账户名</ion-col>\n        <ion-col col-2 class="title">姓名</ion-col>\n        <ion-col col-3 class="title">注册时间</ion-col>\n        <ion-col col-3 class="title">在线时长</ion-col>\n        <ion-col col-2 class="title" style="text-align: right;">进度</ion-col>\n      </ion-row>\n      <ion-row *ngFor = "let item of studentList">\n        <ion-col col-2 class="description">{{item.name}}</ion-col>\n        <ion-col col-2 class="description">{{item.company}}</ion-col>\n        <ion-col col-3 class="description">{{item.lesson}}</ion-col>\n        <ion-col col-3 class="description">{{item.start}}</ion-col>\n        <ion-col col-2 class="title" style="text-align: right;">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <button (click)="back()" class="block-button">退出登录</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/me-account/me-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MeAccountPage);
    return MeAccountPage;
}());

//# sourceMappingURL=me-account.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationSendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(104);
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




/**
 * Generated class for the NotificationSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NotificationSendPage = /** @class */ (function (_super) {
    __extends(NotificationSendPage, _super);
    function NotificationSendPage(navCtrl, navParams, toastCtrl, loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.typeDataArr = [{ id: 1, type: '所有人' }, { id: 2, type: '我的学生' }];
        _this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function () { return console.log('Clicked Save!'); }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
        return _this;
    }
    NotificationSendPage.prototype.ionViewDidLoad = function () {
    };
    NotificationSendPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NotificationSendPage.prototype.send = function () {
        this.showToast(this.toastCtrl, '发布成功', 'top');
    };
    /*选择select的value*/
    NotificationSendPage.prototype.switchType = function () {
        console.log(this.typeTxt);
    };
    NotificationSendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-send',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification-send/notification-send.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">发布通知</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <div class="font-normal" style="display: flex">\n    <div style="flex: 1">发布通知</div>\n    <div style="flex: 4">\n      <textarea name="" id="" cols="30" rows="10"></textarea>\n    </div>\n  </div>\n  <div class="font-normal" style="display: flex; align-items: center;">\n    <div style="flex: 1">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;效</div>\n    <div style="flex: 1">\n      <ion-item>\n        <ion-datetime [pickerOptions]="customPickerOptions" placeholder="选择期限"\n                      displayFormat="YYYY-MM-DD"></ion-datetime>\n      </ion-item>\n    </div>\n    <div style="flex: 1">范&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;围</div>\n    <div style="flex: 1">\n      <ion-item style="margin-top: -15px;">\n        <ion-label stacked></ion-label>\n        <ion-select [(ngModel)]="typeTxt" (ngModelChange)="switchType()" interface="popover" style="width:100%"\n                    placeholder="请选择">\n          <ion-option value="0">请选择</ion-option>\n          <div *ngFor="let typeData of typeDataArr">\n            <ion-option value="{{typeData?.id}}">{{typeData?.type}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-row>\n    <button (click)="send()" class="block-button">提交</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/notification-send/notification-send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], NotificationSendPage);
    return NotificationSendPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=notification-send.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lesson_lesson__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_me_me__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_common_header__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_search__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_result_search_result__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ask_ask__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ask_type_ask_type__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ask_publish_ask_publish__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_question_detail_question_detail__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_lesson_detail_lesson_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notification_me_notification_me__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lesson_me_lesson_me__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_me_student_me_student__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_pipe_student_pipe_student__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_me_account_me_account__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_send_notification_send__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lesson_lesson__["a" /* LessonPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_common_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ask_ask__["a" /* AskPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ask_type_ask_type__["a" /* AskTypePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ask_publish_ask_publish__["a" /* AskPublishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_question_detail_question_detail__["a" /* QuestionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lesson_detail_lesson_detail__["a" /* LessonDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notification_me_notification_me__["a" /* NotificationMePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lesson_me_lesson_me__["a" /* LessonMePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_me_student_me_student__["a" /* MeStudentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_pipe_student_pipe_student__["a" /* PipeStudentPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pages_me_account_me_account__["a" /* MeAccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_send_notification_send__["a" /* NotificationSendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    // backButtonText: '返回',
                    tabsPlacement: 'bottom',
                    tabsHideOnSubPages: 'true' // 隐藏全部子页面tabs
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lesson_lesson__["a" /* LessonPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_common_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ask_ask__["a" /* AskPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ask_type_ask_type__["a" /* AskTypePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ask_publish_ask_publish__["a" /* AskPublishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_question_detail_question_detail__["a" /* QuestionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lesson_detail_lesson_detail__["a" /* LessonDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notification_me_notification_me__["a" /* NotificationMePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lesson_me_lesson_me__["a" /* LessonMePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_me_student_me_student__["a" /* MeStudentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_me_account_me_account__["a" /* MeAccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_send_notification_send__["a" /* NotificationSendPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(33);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeStudentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PipeStudentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PipeStudentPipe = /** @class */ (function () {
    function PipeStudentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PipeStudentPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var searchValue = args[0];
        // console.log(searchValue);
        var arr = [];
        value.forEach(function (item) {
            // console.log(item)
            var str = JSON.stringify(item);
            if (str.indexOf(searchValue) >= 0) {
                arr.push(item);
            }
        });
        return arr;
    };
    PipeStudentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pipeStudent',
        })
    ], PipeStudentPipe);
    return PipeStudentPipe;
}());

//# sourceMappingURL=pipe-student.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_lesson__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__me_me__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(102);
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
    function TabsPage(statusBar) {
        this.statusBar = statusBar;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__lesson_lesson__["a" /* LessonPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__me_me__["a" /* MePage */];
        // let status bar overlay webview
        // this.statusBar.overlaysWebView(true);
        TabsPage_1.sb = this.statusBar;
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#13AE67');
        this.statusBar.styleLightContent();
    }
    TabsPage_1 = TabsPage;
    TabsPage.changeTab = function (i) {
        if (4 == i) {
            TabsPage_1.sb.backgroundColorByHexString('#ffffff');
        }
        else {
            TabsPage_1.sb.backgroundColorByHexString('#13AE67');
        }
        // console.log(i);
    };
    TabsPage = TabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="tab-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="课程" tabIcon="tab-lesson"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="消息" tabIcon="tab-bell"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="tab-me"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]])
    ], TabsPage);
    return TabsPage;
    var TabsPage_1;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.colors = ['#13AE67', '#3C9C7F', '#023436', '#4AA950', '#2F7F26', '#1E5C29', '#097C49', '#008B60'];
        this.ask = function () {
            // alert('search');
        };
    }
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'common-header',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/common/header.html"*/'<ion-grid class="search-header">\n  <ion-row>\n    <ion-row style="width: 75%;" class="center">\n      <ion-input placeholder="请输入您的问题" [(ngModel)]="searchValue"></ion-input>\n      <img class="search-button" [ngStyle]="{\'left\':searchValue?\'10%\':\'22%\'}" src="../../assets/icon/icon-search.png" alt="">\n      <!--<ion-icon name="search" class="search-button" [ngStyle]="{\'left\':searchValue?\'30px\':\'70px\'}"-->\n                <!--color="font-grey"></ion-icon>-->\n    </ion-row>\n    <ion-row col-3 class="center" (click)="ask()">\n      <!--<ion-icon class="ask-button" name="create" color="white"></ion-icon>-->\n      <img class="ask-button" src="../../assets/icon/icon-edit.png" alt="">\n      <span class="ask-text">提问</span>\n    </ion-row>\n  </ion-row>\n</ion-grid>\n\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/common/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_search_result__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchHistory = ['护理人员', '老年人', '老年护理', '养老', '养老院', '人口老龄化'];
        this.ask = function () {
            if (this.searchValue) {
                // alert('提问' + this.searchValue);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_result_search_result__["a" /* SearchResultPage */], { words: this.searchValue });
            }
            else {
                this.navCtrl.pop({ animate: false });
            }
        };
        this.wrong = function () {
            this.searchValue = '';
        };
        this.trash = function () {
            this.searchHistory = [];
        };
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var ionInput = document.getElementById('search-input');
        var input = ionInput.children[0];
        input.focus();
        setTimeout(function () {
            input.focus();
        }, 500);
    };
    SearchPage.prototype.ionViewDidEnter = function () {
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/search/search.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row style="width: 75%;" class="center">\n        <ion-input id="search-input" placeholder="请输入您的问题" [(ngModel)]="searchValue"></ion-input>\n        <img class="search-button" [ngStyle]="{\'left\':searchValue?\'10%\':\'22%\'}" src="../../assets/icon/icon-search.png" alt="">\n        <img class="wrong-button" *ngIf="searchValue" (click)="wrong()" src="../../assets/icon/icon-wrong.png" alt="">\n        <!--<ion-icon name="search" class="search-button" [ngStyle]="{\'left\':searchValue?\'30px\':\'70px\'}"-->\n        <!--color="font-grey"></ion-icon>-->\n      </ion-row>\n      <ion-row col-3 class="center" (click)="ask()">\n        <!--<ion-icon class="ask-button" name="create" color="white"></ion-icon>-->\n        <img *ngIf="searchValue" class="ask-button" src="../../assets/icon/icon-edit.png" alt="">\n        <span class="ask-text">{{searchValue? \'搜索\' : \'取消\'}}</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class="header-title" col-11>最近搜索</ion-col>\n    <ion-row (click)="trash()" col-1 class="trash-row">\n      <!--<ion-icon style="margin-left: auto" name="trash"></ion-icon>-->\n      <img class="trash-button" src="../../assets/icon/icon-trash.png" alt="">\n    </ion-row>\n  </ion-row>\n  <ion-row>\n    <div *ngFor = "let item of searchHistory" class="words" (click)="searchValue = item">{{item}}</div>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the QuestionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var QuestionDetailPage = /** @class */ (function () {
    function QuestionDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commentList = [
            {
                content: '老年抑郁症是指年龄在55或60岁以上的抑郁症患者，狭义的也可以是指首次起病年龄在55或60岁之上的抑郁症患者。',
                author: '苏明玉',
                headImg: 'assets/imgs/image3.png',
                date: '1559139754000',
                praise: 55,
                comment: 82
            },
            {
                content: '老年抑郁症是指年龄在55或60岁以上的抑郁症患者，狭义的也可以是指首次起病年龄在55或60岁之上的抑郁症患者。',
                author: '蔡根花',
                headImg: 'assets/imgs/image3.png',
                date: '1559139754000',
                praise: 156,
                comment: 34
            },
            {
                content: '老年抑郁症是指年龄在55或60岁以上的抑郁症患者，狭义的也可以是指首次起病年龄在55或60岁之上的抑郁症患者。',
                author: '苏大强',
                headImg: 'assets/imgs/image3.png',
                date: '1559139750004',
                praise: 11,
                comment: 23
            }
        ];
        this.questionDetail = navParams.data;
    }
    QuestionDetailPage.prototype.ionViewDidLoad = function () {
    };
    QuestionDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    QuestionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-detail',template:/*ion-inline-start:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/question-detail/question-detail.html"*/'<ion-header>\n  <ion-grid class="search-header">\n    <ion-row>\n      <ion-row col-12 class="center">\n        <div class="search-left" (click)="back()">\n          <img class="search-button" src="../../assets/icon/icon-left.png" alt="">\n        </div>\n        <span class="mytitle">问题详情</span>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content style="background: #F6F6F6">\n  <div padding style="background: #ffffff">\n    <ion-card>\n      <ion-card-header [ngStyle]="{\'margin-top\':\'-20px\'}">\n        {{questionDetail.title}}\n      </ion-card-header>\n\n      <ion-card-content>\n        {{questionDetail.content}}\n      </ion-card-content>\n      <ion-card-content style="text-align: right;">\n        <p class="date">妇幼保健院 神经内科主任</p>\n        <p class="date">{{questionDetail.date | date:"yyyy-MM-dd"}}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card-header>\n      评论\n    </ion-card-header>\n    <ion-card *ngFor="let item of commentList; let i = index">\n      <ion-card-content>\n        <div style="display: flex;flex-direction: row;align-items: center;margin-bottom: 10px">\n          <img class="headImg" src="{{item.headImg}}">\n          <span class="author">{{item.author}}</span>\n        </div>\n      </ion-card-content>\n      <ion-card-content>\n        {{item.content}}\n      </ion-card-content>\n      <ion-card-content style="text-align: right;">\n        <p class="date">{{item.date | date:"yyyy-MM-dd"}}</p>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/song/Documents/ionic3/zhilao/ionic4/src/pages/question-detail/question-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuestionDetailPage);
    return QuestionDetailPage;
}());

//# sourceMappingURL=question-detail.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map