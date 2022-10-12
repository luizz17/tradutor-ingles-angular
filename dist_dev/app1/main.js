"use strict";
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topo/topo.component */ 1793);
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel/painel.component */ 8907);




function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-painel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("encerrarJogo", function AppComponent_div_1_Template_app_painel_encerrarJogo_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.encerrarJogo($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function AppComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "GAME OVER!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_2_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.reiniciarJogo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "NOVO JOGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_ng_template_2_div_0_Template, 7, 0, "div", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.tipoEncerramento === "derrota")("ngIfElse", _r3);
} }
function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VICTORY!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.reiniciarJogo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "NOVO JOGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class AppComponent {
    constructor() {
        this.jogoEmAndamento = true;
    }
    encerrarJogo(tipo) {
        console.log(tipo);
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    }
    reiniciarJogo() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["fimDeJogo", ""], ["fimDeJogoVitoria", ""], [3, "encerrarJogo"], ["class", "container", "style", "margin-top:50px", 4, "ngIf", "ngIfElse"], [1, "container", 2, "margin-top", "50px"], [1, "row"], [1, "col"], [2, "text-align", "center", "color", "red"], [1, "btn", "btn-primary", 3, "click"], [2, "text-align", "center", "color", "green"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jogoEmAndamento)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _topo_topo_component__WEBPACK_IMPORTED_MODULE_0__.TopoComponent, _painel_painel_component__WEBPACK_IMPORTED_MODULE_1__.PainelComponent], styles: ["button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topo/topo.component */ 1793);
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel/painel.component */ 8907);
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tentativas/tentativas.component */ 6169);
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progresso/progresso.component */ 4513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _topo_topo_component__WEBPACK_IMPORTED_MODULE_2__.TopoComponent,
        _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__.PainelComponent,
        _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_4__.TentativasComponent,
        _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__.ProgressoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 3526:
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FRASES": () => (/* binding */ FRASES)
/* harmony export */ });
const FRASES = [
    { fraseEng: "I like to learn", frasePtBr: "Eu gosto de aprender" },
    { fraseEng: "I watch tv", frasePtBr: "Eu assisto tv" },
    { fraseEng: "How are you?", frasePtBr: "Como vai você?" },
    { fraseEng: "I eat bread", frasePtBr: "Eu como pão" }
];


/***/ }),

/***/ 8907:
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PainelComponent": () => (/* binding */ PainelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frases-mock */ 3526);
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tentativas/tentativas.component */ 6169);
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progresso/progresso.component */ 4513);





class PainelComponent {
    constructor() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_0__.FRASES;
        this.instrucao = 'Traduza a frase:';
        this.resposta = "";
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.atualizaRodada();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    atualizaResposta(resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    }
    verificarResposta() {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //Trocar pergunt da rodada
            this.rodada++;
            //Progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
            }
            //Atualiza o objeto rodadaFrase
            this.atualizaRodada();
        }
        else {
            //Diminuir a variável tentativas.
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
            }
        }
    }
    atualizaRodada() {
        //Definir a frase da rodada com basse
        this.rodadaFrase = this.frases[this.rodada];
        //Limpar a resposta
        this.resposta = '';
    }
}
PainelComponent.ɵfac = function PainelComponent_Factory(t) { return new (t || PainelComponent)(); };
PainelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PainelComponent, selectors: [["app-painel"]], outputs: { encerrarJogo: "encerrarJogo" }, decls: 21, vars: 5, consts: [[1, "container"], [1, "jumbotron"], [1, "row"], [1, "col-sm-6"], [3, "progresso"], [1, "d-flex", "justify-content-end"], [3, "tentativas"], [1, "vol-sm-6"], [1, "form-group"], ["rows", "3", 1, "form-control", 3, "value", "input"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function PainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-progresso", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-tentativas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 7)(10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8)(15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function PainelComponent_Template_textarea_input_15_listener($event) { return ctx.atualizaResposta($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "div", 10)(18, "div", 5)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_19_listener() { return ctx.verificarResposta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Verificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("progresso", ctx.progresso);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tentativas", ctx.tentativas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.instrucao);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.rodadaFrase.fraseEng);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.resposta);
    } }, dependencies: [_tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_1__.TentativasComponent, _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__.ProgressoComponent], styles: [".jumbotron[_ngcontent-%COMP%] {\n  margin: 20px;\n  background-color: #EEE9E9;\n  padding: 30px;\n  border-radius: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InBhaW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmp1bWJvdHJvbntcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUVFOUU5O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbjogMTVweDtcbn1cbi5kLWZsZXh7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59Il19 */"] });


/***/ }),

/***/ 4513:
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressoComponent": () => (/* binding */ ProgressoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgressoComponent {
    constructor() {
        this.progresso = 0;
    }
    ngOnInit() {
    }
}
ProgressoComponent.ɵfac = function ProgressoComponent_Factory(t) { return new (t || ProgressoComponent)(); };
ProgressoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressoComponent, selectors: [["app-progresso"]], inputs: { progresso: "progresso" }, decls: 2, vars: 3, consts: [[1, "progress"]], template: function ProgressoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar w-", ctx.progresso, "");
    } }, styles: [".progress[_ngcontent-%COMP%] {\n  background: #eef8da;\n  border: solid 1px #99ce28;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background: #99ce28;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJvZ3Jlc3NvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVmOGRhO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM5OWNlMjhcbn1cblxuLnByb2dyZXNzLWJhcntcbiAgICBiYWNrZ3JvdW5kOiAjOTljZTI4OyAgIFxufSJdfQ== */"] });


/***/ }),

/***/ 2100:
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coracao": () => (/* binding */ Coracao)
/* harmony export */ });
class Coracao {
    constructor(cheio, urlCoracaoCheio = '/assets/coracaoCheio.png', urlCoracaoVazio = '/assets/coracaoVazio.png') {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }
}


/***/ }),

/***/ 6169:
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TentativasComponent": () => (/* binding */ TentativasComponent)
/* harmony export */ });
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/coracao.model */ 2100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function TentativasComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
} if (rf & 2) {
    const coracao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", coracao_r1.exibeCoracao(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class TentativasComponent {
    constructor() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__.Coracao(true)
        ];
        console.log(this.coracoes);
    }
    ngOnChanges(changes) {
        //this.tentativas
        //tis.coracoes.length
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
        console.log('Tentativasrecebidas do painel: ', this.tentativas);
    }
    ngOnInit() {
    }
}
TentativasComponent.ɵfac = function TentativasComponent_Factory(t) { return new (t || TentativasComponent)(); };
TentativasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TentativasComponent, selectors: [["app-tentativas"]], inputs: { tentativas: "tentativas" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "src", 4, "ngFor", "ngForOf"], [3, "src"]], template: function TentativasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TentativasComponent_img_0_Template, 1, 1, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coracoes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbnRhdGl2YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InRlbnRhdGl2YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6IDQwcHg7IFxuICAgIGhlaWdodDogNDBweDsgXG59Il19 */"] });


/***/ }),

/***/ 1793:
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopoComponent": () => (/* binding */ TopoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TopoComponent {
    constructor() {
        this.titulo = 'Apredendo Ingês';
    }
}
TopoComponent.ɵfac = function TopoComponent_Factory(t) { return new (t || TopoComponent)(); };
TopoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopoComponent, selectors: [["app-topo"]], decls: 4, vars: 1, consts: [[1, "navbar"], [1, "container-fluid"], [1, "navbar-brand", "mb-0", "h1"]], template: function TopoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    } }, styles: [".navbar[_ngcontent-%COMP%]{\n    background: #1cb0f6;\n    margin: 30px;\n    border-radius: 10px;\n}\n\n.container-fluid[_ngcontent-%COMP%]{\n    text-align:center;\n    display:inline-block;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-family: 'Times New Roman', Times, serif;\n    color:white;\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoidG9wby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kOiAjMWNiMGY2O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map