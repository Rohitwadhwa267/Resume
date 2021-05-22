(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\webDev\AngularJS\myProfile\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IsLe":
/*!******************************************************!*\
  !*** ./src/app/mid-section/mid-section.component.ts ***!
  \******************************************************/
/*! exports provided: MidSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidSectionComponent", function() { return MidSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MidSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MidSectionComponent.ɵfac = function MidSectionComponent_Factory(t) { return new (t || MidSectionComponent)(); };
MidSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MidSectionComponent, selectors: [["app-mid-section"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "profileSection"], ["src", "../../assets/img/profile.jpg", "alt", "Rohit Wadhwa profile"], [1, "textSection"], [1, "o"]], template: function MidSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "It's R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "hit Wadhwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I am a Front End Developer...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\r\n  background-image: url('signature.png');\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 95%;\r\n  height: 80vh;\r\n  margin: auto;\r\n}\r\n.profileSection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.profileSection[_ngcontent-%COMP%], .textSection[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n.profileSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding: 2px;\r\n  float: right;\r\n  width: 40vh;\r\n  height: auto;\r\n  border: 2px solid aquamarine;\r\n  border-radius: 10%;\r\n}\r\n.textSection[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: auto 1vh;\r\n}\r\n.textSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: aquamarine;\r\n  width: 62%;\r\n  padding: 5px;\r\n}\r\n.textSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  width: 62%;\r\n  border: 1px solid aquamarine;\r\n}\r\n.o[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  \r\n  section[_ngcontent-%COMP%] {\r\n    background: black;\r\n  }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  \r\n  section[_ngcontent-%COMP%] {\r\n    background: black;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 12vh 0;\r\n  }\r\n  .profileSection[_ngcontent-%COMP%], .textSection[_ngcontent-%COMP%] {\r\n    width: 99%;\r\n    text-align: center;\r\n    margin: 3vh 0;\r\n  }\r\n\r\n  .profileSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 2px;\r\n    float: none;\r\n    width: 25vh;\r\n    height: auto;\r\n    border: 2px solid aquamarine;\r\n    border-radius: 10%;\r\n  }\r\n\r\n  .textSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: black;\r\n    background-color: aquamarine;\r\n    width: 75%;\r\n    font-size: 15px;\r\n    margin: 2vh auto;\r\n  }\r\n  .textSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin: auto;\r\n    text-align: center;\r\n    border: 1px solid aquamarine;\r\n    font-size: 25px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBdUQ7QUFDekQ7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoibWlkLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvc2lnbmF0dXJlLnBuZ1wiKTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ucHJvZmlsZVNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnByb2ZpbGVTZWN0aW9uLFxyXG4udGV4dFNlY3Rpb24ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9maWxlU2VjdGlvbiBpbWcge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0MHZoO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4udGV4dFNlY3Rpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG8gMXZoO1xyXG59XHJcbi50ZXh0U2VjdGlvbiBoNCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgd2lkdGg6IDYyJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRleHRTZWN0aW9uIGgxIHtcclxuICB3aWR0aDogNjIlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbn1cclxuLm8ge1xyXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC8qIHByb2ZpbGUgc2VjdGlvbiAgKi9cclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8qIHByb2ZpbGUgc2VjdGlvbiAgKi9cclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEydmggMDtcclxuICB9XHJcbiAgLnByb2ZpbGVTZWN0aW9uLFxyXG4gIC50ZXh0U2VjdGlvbiB7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzdmggMDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlU2VjdGlvbiBpbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIC50ZXh0U2VjdGlvbiBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMnZoIGF1dG87XHJcbiAgfVxyXG4gIC50ZXh0U2VjdGlvbiBoMSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYXF1YW1hcmluZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'myProfile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mid-section/mid-section.component */ "IsLe");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 65, vars: 0, consts: [[1, "body"], [1, "infoSection"], [1, "AECSection"], [1, "aboutMe", "sections"], [1, "education", "sections"], [1, "certificate", "sections"], [1, "contactSection"], [1, "contactMe"], ["src", "../../assets/img/linkedin.png", "alt", "LinkedIn"], ["href", "https://www.linkedin.com/in/rohit--wadhwa/"], ["src", "../../assets/img/Whatsapp.png", "alt", "WhatsApp"], ["href", ""], ["src", "../../assets/img/gmail.png", "alt", "GMail"], ["src", "../../assets/img/Instagram.png", "alt", "Instagram"], ["href", "https://www.instagram.com/r0hit.wadhwa/"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mid-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rohit Wadhwa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Date of Birth : 1st January 2000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Gender : Male. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Marital Status : Single. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Persuing MCA ( 2020 \u2013 2022 ) from MAIMT Jagadhri, Haryana. Affiliated by Kurukshetra University. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " BCA ( 2017 \u2013 2020 ) from Govt. P.G. College Ambala Cantt, Haryana. Affiliated by Kurukshetra University. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "12Th (2017) from Board of School Education Haryana.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "10Th (2015) from Board of School Education Haryana.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Responsive Web Design from FreeCodeCamp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "HTML5, CSS3 From Udemy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Rohit Wadhwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+91 8295326552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "rohitwadhwa267@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Rohit Wadhwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_1__["MidSectionComponent"]], styles: [".body[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 95%;\r\n  margin: auto;\r\n}\r\n\r\n.profileSection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.profileSection[_ngcontent-%COMP%], .textSection[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  margin: 2vh 0;\r\n}\r\n\r\n.profileSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding: 2px;\r\n  float: right;\r\n  width: 40vh;\r\n  height: auto;\r\n  border: 2px solid aquamarine;\r\n  border-radius: 10%;\r\n}\r\n\r\n.textSection[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: auto 1vh;\r\n}\r\n\r\n.textSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: aquamarine;\r\n  width: 62%;\r\n  padding: 5px;\r\n}\r\n\r\n.textSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  width: 62%;\r\n  border: 1px solid aquamarine;\r\n}\r\n\r\n.o[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n\r\n  border-bottom: 5px solid aquamarine;\r\n\r\n  margin: 0 auto;\r\n  color: aquamarine;\r\n}\r\n\r\n\r\n\r\n.AECSection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 3vh;\r\n}\r\n\r\n.sections[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  height: 40vh;\r\n  color: white;\r\n  margin: auto;\r\n}\r\n\r\n.sections[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n  margin: 3vh 5vh;\r\n}\r\n\r\n.sections[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: 2vh 5vh;\r\n}\r\n\r\n.sections[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 2vh 5vh;\r\n}\r\n\r\n.sections[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n}\r\n\r\n\r\n\r\n.contactSection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 35%;\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.contactMe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n}\r\n\r\n.contactMe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  margin: 1vh;\r\n}\r\n\r\n.contactMe[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\n.contactMe[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n  margin: 0 1vh;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 0;\r\n  }\r\n  .profileSection[_ngcontent-%COMP%], .textSection[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n  .profileSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 2px;\r\n    width: 20vh;\r\n    height: auto;\r\n  }\r\n  .textSection[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .textSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: 70%;\r\n    font-size: small;\r\n  }\r\n  .textSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    font-size: medium;\r\n  }\r\n\r\n  \r\n\r\n  .AECSection[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n  .sections[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    margin: auto;\r\n  }\r\n\r\n  .sections[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: aquamarine;\r\n    margin: 3vh 5vh;\r\n  }\r\n\r\n  .sections[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sections[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin: 2vh 5vh;\r\n  }\r\n\r\n  .sections[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 2vh 5vh;\r\n  }\r\n\r\n  .sections[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: aquamarine;\r\n  }\r\n\r\n  .contactSection[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 3vh;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n  .contactMe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    margin: 1vh;\r\n  }\r\n\r\n  .contactMe[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n  }\r\n\r\n  .contactMe[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: small;\r\n    color: white;\r\n    margin: 0 1vh;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBOztFQUVFLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFVBQVU7O0VBRVYsbUNBQW1DOztFQUVuQyxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUdBLGtCQUFrQjs7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7O0FBRWY7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQSxrQkFBa0I7O0VBRWxCO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnByb2ZpbGVTZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5wcm9maWxlU2VjdGlvbixcclxuLnRleHRTZWN0aW9uIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMnZoIDA7XHJcbn1cclxuXHJcbi5wcm9maWxlU2VjdGlvbiBpbWcge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0MHZoO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4udGV4dFNlY3Rpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG8gMXZoO1xyXG59XHJcbi50ZXh0U2VjdGlvbiBoNCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgd2lkdGg6IDYyJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRleHRTZWN0aW9uIGgxIHtcclxuICB3aWR0aDogNjIlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbn1cclxuLm8ge1xyXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbmhyIHtcclxuICB3aWR0aDogNzUlO1xyXG5cclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYXF1YW1hcmluZTtcclxuXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcblxyXG4vKiBBYm91dCBzZWN0aW9uICovXHJcbi5BRUNTZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcbi5zZWN0aW9ucyB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VjdGlvbnMgaDMge1xyXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIG1hcmdpbjogM3ZoIDV2aDtcclxufVxyXG4uc2VjdGlvbnMgcCxcclxuLnNlY3Rpb25zIGg1IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAydmggNXZoO1xyXG59XHJcbi5zZWN0aW9ucyBoNCB7XHJcbiAgbWFyZ2luOiAydmggNXZoO1xyXG59XHJcbi5zZWN0aW9ucyBsaSB7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbi8qIENvbnRhY3QgTWUgKi9cclxuXHJcbi5jb250YWN0U2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY29udGFjdE1lIGgyIHtcclxuICBjb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG4uY29udGFjdE1lIGltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbn1cclxuLmNvbnRhY3RNZSBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uY29udGFjdE1lIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIDF2aDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8qIHByb2ZpbGUgc2VjdGlvbiAgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5wcm9maWxlU2VjdGlvbixcclxuICAudGV4dFNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGVTZWN0aW9uIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB3aWR0aDogMjB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLnRleHRTZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dFNlY3Rpb24gaDQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG4gIC50ZXh0U2VjdGlvbiBoMSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG5cclxuICAvKiBBYm91dCBzZWN0aW9uICovXHJcblxyXG4gIC5BRUNTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5zZWN0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbnMgaDMge1xyXG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBtYXJnaW46IDN2aCA1dmg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbnMgcCxcclxuICAuc2VjdGlvbnMgaDUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAydmggNXZoO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25zIGg0IHtcclxuICAgIG1hcmdpbjogMnZoIDV2aDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9ucyBsaSB7XHJcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0U2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIC5jb250YWN0TWUgaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxdmg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdE1lIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdE1lIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAxdmg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mid-section/mid-section.component */ "IsLe");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_5__["MidSectionComponent"],
                },
                {
                    path: 'home',
                    component: _mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_5__["MidSectionComponent"],
                },
                {
                    path: 'profile',
                    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                },
                {
                    path: 'skills',
                    component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _mid_section_mid_section_component__WEBPACK_IMPORTED_MODULE_5__["MidSectionComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/skills"]; };
const _c2 = function () { return ["/profile"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 8, consts: [[1, "d-flex", "justify-content-between", "header"], [1, "logo", "bd-highlight", "d-inline-flex", "float-start", "text-light"], ["routerLinkActive", "router-link-active", 1, "text-decoration-none", 3, "routerLink"], [1, "text-light"], [1, "o"], [1, "tabs", "bd-highlight", "d-inline-flex", "float-end", "text-light"], [1, "navbar-nav", "nav"], [1, "list-inline"], [1, "list-inline-item"], ["routerLinkActive", "router-link-active", 1, "text-light", "text-decoration-none", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "hit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid aquamarine;\r\n  background-color: black;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  padding: 1vh 5vh;\r\n  letter-spacing: 5px;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  padding: 2vh;\r\n}\r\n.o[_ngcontent-%COMP%] {\r\n  color: aquamarine;\r\n}\r\n.o[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\nh1[_ngcontent-%COMP%]:hover {\r\n  -webkit-text-decoration: double !important;\r\n          text-decoration: double !important;\r\n  color: aquamarine !important;\r\n}\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: aquamarine;\r\n  border-radius: 20%;\r\n  color: black !important;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    margin: 1vh 0;\r\n    font-size: large;\r\n    font-weight: bolder;\r\n  }\r\n  li[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    font-size: small;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuaDEge1xyXG4gIHBhZGRpbmc6IDF2aCA1dmg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5saSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufVxyXG4ubyB7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuLm86aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5oMTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBkb3VibGUgIWltcG9ydGFudDtcclxuICBjb2xvcjogYXF1YW1hcmluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5saSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMXZoIDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "sections"], ["src", "../../assets/img/TechnicalSkill.ico", "alt", "Technical Skills"], ["src", "../../assets/img/skills.png", "alt", "Skills"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Technical Skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Front-End Designing (HTML5, CSS3,JavaScript).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Java.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "C and C++.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GitHub.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Skills/Strengths.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Deep understanding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confident.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Creative design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Team Leader.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Good Motivator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Motivational Attitude.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Solution Oriented.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n}\r\n.sections[_ngcontent-%COMP%] {\r\n  color: white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 5vh auto;\r\n}\r\n.sections[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  padding: 8px;\r\n  background-color: aquamarine;\r\n  border-radius: 25%;\r\n  margin: 0 auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.sections[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 1vh;\r\n  color: aquamarine;\r\n}\r\n.sections[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 1vh;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  section[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  .sections[_ngcontent-%COMP%] {\r\n\r\n    text-align: center;\r\n  }\r\n  .sections[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 2vh;\r\n  }\r\n  .sections[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 3vh;\r\n    color: aquamarine;\r\n  }\r\n  .sections[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 1vh;\r\n    border-bottom: 1px solid white;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDO0FBQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VjdGlvbnMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNXZoIGF1dG87XHJcbn1cclxuLnNlY3Rpb25zIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWN0aW9ucyBoMyB7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuLnNlY3Rpb25zIGxpIHtcclxuICBtYXJnaW46IDF2aDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuc2VjdGlvbnMge1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlY3Rpb25zIGltZyB7XHJcbiAgICBtYXJnaW46IDJ2aDtcclxuICB9XHJcbiAgLnNlY3Rpb25zIGgzIHtcclxuICAgIG1hcmdpbjogM3ZoO1xyXG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgfVxyXG4gIC5zZWN0aW9ucyBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxdmg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "A"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Design can be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "rt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: white;\r\n  border-top: 2px solid aquamarine;\r\n  background-color: black;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  line-height: 8vh;\r\n  text-align: end;\r\n  padding: 1vh 2vh;\r\n  word-spacing: 1vh;\r\n}\r\n.A[_ngcontent-%COMP%]{\r\n  color: aquamarine;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuaDIge1xyXG4gIGxpbmUtaGVpZ2h0OiA4dmg7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmc6IDF2aCAydmg7XHJcbiAgd29yZC1zcGFjaW5nOiAxdmg7XHJcbn1cclxuLkF7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map