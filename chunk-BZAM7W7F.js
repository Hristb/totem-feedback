import{$ as Ee,A as F,B as l,C as o,D as K,E as pe,F as fe,G as k,H as _,I as u,J as ge,K as c,L as me,M as D,N as _e,O as ve,P as ye,Q as X,R as Ce,S as be,U as Ve,V as De,W as j,X as v,Y,Z as Me,_ as Ae,a as h,b as f,c as oe,d as se,da as xe,e as ae,f as le,g as $,h as W,i as y,j as ce,k as q,l as C,m as ue,n as b,o as V,p as de,q as N,r as z,s as he,t as a,u as d,v as Z,w as T,x,y as m,z as p}from"./chunk-7QLZ7UWY.js";var Te=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(d(Z),d(z))}}static{this.\u0275dir=C({type:i})}}return i})(),Xe=(()=>{class i extends Te{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=de(i)))(r||i)}})()}static{this.\u0275dir=C({type:i,features:[x]})}}return i})(),ke=new y("");var Ye={provide:ke,useExisting:$(()=>H),multi:!0};function Je(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Qe=new y(""),H=(()=>{class i extends Te{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Je())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(d(Z),d(z),d(Qe,8))}}static{this.\u0275dir=C({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&_("input",function(g){return r._handleInput(g.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(g){return r._compositionEnd(g.target.value)})},features:[X([Ye]),x]})}}return i})();var et=new y(""),tt=new y("");function je(i){return i!=null}function Re(i){return be(i)?se(i):i}function Ge(i){let e={};return i.forEach(t=>{e=t!=null?h(h({},e),t):e}),Object.keys(e).length===0?null:e}function Be(i,e){return e.map(t=>t(i))}function it(i){return!i.validate}function Ue(i){return i.map(e=>it(e)?e:t=>e.validate(t))}function nt(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){return Ge(Be(t,e))}}function He(i){return i!=null?nt(Ue(i)):null}function rt(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){let n=Be(t,e).map(Re);return le(n).pipe(ae(Ge))}}function Le(i){return i!=null?rt(Ue(i)):null}function Fe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ot(i){return i._rawValidators}function st(i){return i._rawAsyncValidators}function J(i){return i?Array.isArray(i)?i:[i]:[]}function G(i,e){return Array.isArray(i)?i.includes(e):i===e}function we(i,e){let t=J(e);return J(i).forEach(r=>{G(t,r)||t.push(r)}),t}function Oe(i,e){return J(e).filter(t=>!G(i,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=He(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Q=class extends B{get formDirective(){return null}get path(){return null}},P=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ee=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},at={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ti=f(h({},at),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{class i extends ee{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(d(P,2))}}static{this.\u0275dir=C({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[x]})}}return i})();var w="VALID",R="INVALID",M="PENDING",O="DISABLED",E=class{},U=class extends E{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends E{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends E{constructor(e,t){super(),this.touched=e,this.source=t}},A=class extends E{constructor(e,t){super(),this.status=e,this.source=t}};function lt(i){return(L(i)?i.validators:i)||null}function ct(i){return Array.isArray(i)?He(i):i||null}function ut(i,e){return(L(e)?e.asyncValidators:i)||null}function dt(i){return Array.isArray(i)?Le(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var te=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=j(()=>this.statusReactive()),this.statusReactive=T(void 0),this._pristine=j(()=>this.pristineReactive()),this.pristineReactive=T(!0),this._touched=j(()=>this.touchedReactive()),this.touchedReactive=T(!1),this._events=new oe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(e){v(()=>this.statusReactive.set(e))}get valid(){return this.status===w}get invalid(){return this.status===R}get pending(){return this.status==M}get disabled(){return this.status===O}get enabled(){return this.status!==O}get pristine(){return v(this.pristineReactive)}set pristine(e){v(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(e){v(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(h({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(h({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=M;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new A(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(h({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(f(h({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,n)),this._events.next(new A(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(n=>{n.enable(f(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===M)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,t)),this._events.next(new A(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(h({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Re(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new A(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(R)?R:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=dt(this._rawAsyncValidators)}};var We=new y("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function ht(i,e){return[...e.path,i]}function pt(i,e,t=ie){gt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),mt(i,e),vt(i,e),_t(i,e),ft(i,e)}function Ie(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ft(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function gt(i,e){let t=ot(i);e.validator!==null?i.setValidators(Fe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=st(i);e.asyncValidator!==null?i.setAsyncValidators(Fe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function mt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&qe(i,e)})}function _t(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&qe(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function qe(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function vt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function yt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Ct(i){return Object.getPrototypeOf(i.constructor)===Xe}function bt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===H?t=s:Ct(s)?n=s:r=s}),r||n||t||null}function Se(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Pe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Vt=class extends te{constructor(e=null,t,n){super(lt(t),ut(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Dt={provide:P,useExisting:$(()=>ne)},Ne=Promise.resolve(),ne=(()=>{class i extends P{constructor(t,n,r,s,g,Ze){super(),this._changeDetectorRef=g,this.callSetDisabledState=Ze,this.control=new Vt,this._registered=!1,this.name="",this.update=new N,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=bt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),yt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){pt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ne.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&De(n);Ne.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ht(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(d(Q,9),d(et,10),d(tt,10),d(ke,10),d(Ve,8),d(We,8))}}static{this.\u0275dir=C({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[X([Dt]),x,ue]})}}return i})();var Mt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=W({})}}return i})();var ze=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:We,useValue:t.callSetDisabledState??ie}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=W({imports:[Mt]})}}return i})();function Et(i,e){if(i&1){let t=k();l(0,"button",6),_("click",function(){let r=b(t).$implicit,s=u();return V(s.seleccionarTab(r.id))}),c(1),K(2,"span",7),o()}if(i&2){let t=e.$implicit,n=e.index,r=u();F("active",t.activo),p("disabled",t.deshabilitado),a(),D(" ",t.titulo," "),a(),F("filled",t.activo||n<r.progreso)}}function xt(i,e){if(i&1){let t=k();l(0,"div",12),_("click",function(){let r=b(t).$implicit,s=u(2).$implicit,g=u();return V(g.seleccionarCard(r,s.id))}),K(1,"img",13),l(2,"div"),c(3),o()()}if(i&2){let t=e.$implicit;a(),ge("alt",t.titulo),p("src",t.imagen,he),a(2),me(t.titulo)}}function Ft(i,e){if(i&1){let t=k();l(0,"div",14)(1,"h3"),c(2,"\u270D\uFE0F Agrega un comentario"),o(),l(3,"div",15)(4,"textarea",16),ye("ngModelChange",function(r){b(t);let s=u(3);return ve(s.comentario,r)||(s.comentario=r),V(r)}),_("keyup.enter",function(){b(t);let r=u(3);return V(r.confirmarComentario())}),o(),l(5,"button",17),_("click",function(){b(t);let r=u(3);return V(r.confirmarComentario())}),c(6,"Enviar"),o()()()}if(i&2){let t=u(3);a(4),_e("ngModel",t.comentario)}}function wt(i,e){if(i&1&&(l(0,"div")(1,"h3"),c(2),o(),l(3,"div",9),m(4,xt,4,3,"div",10),o(),m(5,Ft,7,1,"div",11),o()),i&2){let t=u().$implicit,n=u();a(2),D("\u{1F4CC} ",t.titulo,""),a(2),p("ngForOf",t.cards)("ngForTrackBy",n.trackByFn),a(),p("ngIf",n.esUltimoTab(t.id))}}function Ot(i,e){if(i&1&&(pe(0),m(1,wt,6,4,"div",8),fe()),i&2){let t=e.$implicit;a(),p("ngIf",t.activo)}}function It(i,e){if(i&1&&(l(0,"p")(1,"strong"),c(2,"Card 1:"),o(),c(3),o()),i&2){let t=u(2);a(3),D(" ",t.seleccionados[0].titulo,"")}}function St(i,e){if(i&1&&(l(0,"p")(1,"strong"),c(2,"Card 2:"),o(),c(3),o()),i&2){let t=u(2);a(3),D(" ",t.seleccionados[1].titulo,"")}}function Pt(i,e){if(i&1&&(l(0,"div",18)(1,"h2"),c(2,"\u2705 Resumen de Selecci\xF3n"),o(),m(3,It,4,1,"p",8)(4,St,4,1,"p",8),l(5,"p")(6,"strong"),c(7,"Comentario:"),o(),c(8),o()()),i&2){let t=u();a(3),p("ngIf",t.seleccionados[0]),a(),p("ngIf",t.seleccionados[1]),a(4),D(" ",t.comentario,"")}}var re=class i{title="Home";comentario="";mostrarResumen=!1;seleccionados=[];progreso=0;tabs=[{id:1,titulo:"Animal",activo:!0,deshabilitado:!1,cards:[{id:1,titulo:"hormiga",descripcion:"Reconoces y utilizas eficazmente la fortaleza de los dem\xE1s",imagen:"../assets/img/animal-ant.png"},{id:2,titulo:"murci\xE9lago",descripcion:"Ves las oportunidades emergentes mejor que nadie",imagen:"../assets/img/animal-bat.png"},{id:3,titulo:"abeja",descripcion:"Demuestras una eficiencia extraordinaria",imagen:"../assets/img/animal-bee.png"},{id:4,titulo:"carib\xFA",descripcion:"No temes explorar nuevos caminos",imagen:"../assets/img/animal-caribou.png"},{id:5,titulo:"camale\xF3n",descripcion:"Te adaptas f\xE1cilmente a una variedad de situaciones",imagen:"../assets/img/animal-chameleon.png"},{id:6,titulo:"caballo",descripcion:"Permites que otros vayan m\xE1s r\xE1pido y m\xE1s lejos",imagen:"../assets/img/animal-horse.png"},{id:7,titulo:"colibr\xED",descripcion:"Haces todo con precisi\xF3n y consideraci\xF3n",imagen:"../assets/img/animal-humming.png"},{id:8,titulo:"leopardo",descripcion:"Act\xFAas r\xE1pidamente",imagen:"../assets/img/animal-leopard.png"},{id:9,titulo:"le\xF3n",descripcion:"Asumes naturalmente un rol de liderazgo",imagen:"../assets/img/animal-lion.png"},{id:10,titulo:"ave lira",descripcion:"Te llevas bien con todos",imagen:"../assets/img/animal-lyrebird.png"},{id:11,titulo:"monarca",descripcion:"Nunca te rindes antes de llegar a tu destino",imagen:"../assets/img/animal-monarch.png"},{id:12,titulo:"rat\xF3n",descripcion:"Prestas atenci\xF3n a los detalles",imagen:"../assets/img/animal-mouse.png"},{id:13,titulo:"b\xFAho",descripcion:"Escuchas de manera sincera y genuina",imagen:"../assets/img/animal-owl.png"},{id:14,titulo:"mapache",descripcion:"Clasificas y organizas las cosas con destreza",imagen:"../assets/img/animal-racoon.png"},{id:15,titulo:"rinoceronte",descripcion:"Te mantienes fiel y aut\xE9ntico en todas las situaciones",imagen:"../assets/img/animal-rhinoceros.png"},{id:16,titulo:"gallo",descripcion:"Siempre se puede contar contigo",imagen:"../assets/img/animal-rooster.png"},{id:17,titulo:"ardilla",descripcion:"Planificas h\xE1bilmente para responder a necesidades futuras",imagen:"../assets/img/animal-squirrel.png"},{id:18,titulo:"cisne",descripcion:"Te diferencias respetando a los dem\xE1s",imagen:"../assets/img/animal-swan.png"},{id:19,titulo:"tigre",descripcion:"Lideras de manera justa y equitativa",imagen:"../assets/img/animal-tiger.png"},{id:20,titulo:"ballena",descripcion:"Permaneces tranquilo en medio del caos",imagen:"../assets/img/animal-whale.png"},{id:21,titulo:"salvaje",descripcion:"Sabes c\xF3mo usar los problemas para mejorar tu vida",imagen:"../assets/img/animal-wild.png"}]},{id:2,titulo:"Cualidad",activo:!1,deshabilitado:!0,cards:[{id:1,titulo:"Altruista",descripcion:"Tu altruismo",imagen:"../assets/img/cualidades/altruistic.jpeg"},{id:2,titulo:"Elocuente",descripcion:"Tu don de la palabra",imagen:"../assets/img/cualidades/articulate.jpeg"},{id:3,titulo:"Valiente",descripcion:"Tu valent\xEDa",imagen:"../assets/img/cualidades/brave.jpeg"},{id:4,titulo:"Comprometido",descripcion:"Tu compromiso",imagen:"../assets/img/cualidades/committed.jpeg"},{id:5,titulo:"Creativo",descripcion:"Tu creatividad",imagen:"../assets/img/cualidades/creative.jpeg"},{id:6,titulo:"Emp\xE1tico",descripcion:"Tu empat\xEDa",imagen:"../assets/img/cualidades/empathetic.jpeg"},{id:7,titulo:"\xCDntegro",descripcion:"Tu integridad",imagen:"../assets/img/cualidades/ethical.jpeg"},{id:8,titulo:"Enfocado",descripcion:"Tu enfoque",imagen:"../assets/img/cualidades/focused.jpeg"},{id:9,titulo:"Influyente",descripcion:"Tu influencia",imagen:"../assets/img/cualidades/influential.jpeg"},{id:10,titulo:"Ingenioso",descripcion:"Tu ingenio",imagen:"../assets/img/cualidades/ingenious.jpeg"},{id:11,titulo:"Innovador",descripcion:"Tu capacidad de innovaci\xF3n",imagen:"../assets/img/cualidades/innovative.jpeg"},{id:12,titulo:"Perspicaz",descripcion:"Tu percepci\xF3n aguda",imagen:"../assets/img/cualidades/insightfull.jpeg"},{id:13,titulo:"Leal",descripcion:"Tu lealtad",imagen:"../assets/img/cualidades/loyal.jpeg"},{id:14,titulo:"Motivado",descripcion:"Tu motivaci\xF3n",imagen:"../assets/img/cualidades/motivated.jpeg"},{id:15,titulo:"De mente abierta",descripcion:"Tu mentalidad abierta",imagen:"../assets/img/cualidades/open-minded.jpeg"},{id:16,titulo:"Optimista",descripcion:"Tu optimismo",imagen:"../assets/img/cualidades/optimistic.jpeg"},{id:17,titulo:"Organizado",descripcion:"Tus habilidades organizativas",imagen:"../assets/img/cualidades/organized.jpeg"},{id:18,titulo:"Paciente",descripcion:"Tu paciencia",imagen:"../assets/img/cualidades/patient.jpeg"},{id:19,titulo:"Perseverante",descripcion:"Tu perseverancia",imagen:"../assets/img/cualidades/perseverant.jpeg"},{id:20,titulo:"Productivo",descripcion:"Tu productividad",imagen:"../assets/img/cualidades/productive.jpeg"},{id:21,titulo:"Respetuoso",descripcion:"Tu respeto",imagen:"../assets/img/cualidades/respectful.jpeg"},{id:22,titulo:"Colaborador",descripcion:"Tu esp\xEDritu de equipo",imagen:"../assets/img/cualidades/team-oriented.jpeg"},{id:23,titulo:"Vers\xE1til",descripcion:"Tu versatilidad",imagen:"../assets/img/cualidades/versatile.jpeg"},{id:24,titulo:"Sabio",descripcion:"Tu sabidur\xEDa",imagen:"../assets/img/cualidades/wise.jpeg"}]},{id:3,titulo:"Comentario",activo:!1,deshabilitado:!0,cards:[]}];seleccionarTab(e){this.tabs.forEach(t=>{t.activo=t.id===e,t.deshabilitado=t.id<e}),this.progreso=this.tabs.findIndex(t=>t.id===e)}seleccionarCard(e,t){this.seleccionados.findIndex(r=>r.id===e.id)===-1&&this.seleccionados.push(e),t<this.tabs.length&&this.seleccionarTab(t+1)}confirmarComentario(){this.comentario.trim()!==""&&this.seleccionados.length>=2&&(this.mostrarResumen=!0)}esUltimoTab(e){return e===this.tabs[this.tabs.length-1].id}trackByFn(e,t){return t.id}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ce({type:i,selectors:[["app-totem"]],standalone:!0,features:[Ce],decls:9,vars:5,consts:[[1,"tab-content"],[1,"descripcion"],[1,"tabs"],[3,"active","disabled","click",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","resumen",4,"ngIf"],[3,"click","disabled"],[1,"progress-line"],[4,"ngIf"],[1,"cards"],["class","card",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],["class","comentario-container",4,"ngIf"],[1,"card",3,"click"],[3,"src","alt"],[1,"comentario-container"],[1,"input-container"],["placeholder","Escribe tu comentario aqu\xED...","autocomplete","off",3,"ngModelChange","keyup.enter","ngModel"],[3,"click"],[1,"resumen"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"h1"),c(2,"TOTEM FEEDBACK"),o(),l(3,"p",1),c(4,"Selecciona una de las opciones que mejor te represente."),o(),l(5,"div",2),m(6,Et,3,6,"button",3),o(),m(7,Ot,2,1,"ng-container",4)(8,Pt,9,3,"div",5),o()),t&2&&(a(6),p("ngForOf",n.tabs)("ngForTrackBy",n.trackByFn),a(),p("ngForOf",n.tabs)("ngForTrackBy",n.trackByFn),a(),p("ngIf",n.mostrarResumen&&n.seleccionados.length))},dependencies:[Ee,Me,Ae,xe,ze,H,$e,ne],styles:[".tabs-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:auto;text-align:center}.tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:relative;margin-bottom:15px;overflow:hidden}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;padding:10px;border:none;background:transparent;cursor:pointer;font-size:14px;position:relative;text-align:center}.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#007bff;font-weight:700}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#ccc;cursor:not-allowed}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){color:#0056b3}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .progress-line[_ngcontent-%COMP%]{display:block;height:3px;background:#ccc;width:100%;position:absolute;bottom:0;left:0;transition:background .3s}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .progress-line.filled[_ngcontent-%COMP%]{background:#007bff}.tab-content[_ngcontent-%COMP%]{max-width:400px;margin:auto;padding:15px;border:1px solid #ddd;border-radius:5px;background:#f9f9f9;text-align:center}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;justify-content:center;margin-top:10px}@media (max-width: 600px){.cards[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);gap:2px}}.card[_ngcontent-%COMP%]{padding:15px;background:#fff;border:1px solid #ccc;border-radius:8px;box-shadow:2px 2px 10px #0000001a;cursor:pointer;transition:transform .2s,box-shadow .2s;max-width:100px;text-align:center}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:5px;margin-bottom:10px}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:4px 4px 15px #0003;background:#007bff;color:#fff}.resumen[_ngcontent-%COMP%]{max-width:400px;margin:20px auto auto;padding:20px;border-top:2px solid #ddd}.resumen[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px}.comentario-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-top:15px}.comentario-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.comentario-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.comentario-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{flex:1;min-height:40px;padding:8px;border:1px solid #ccc;border-radius:5px;resize:none}.comentario-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 15px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background .3s ease}.comentario-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.comentario-resumen[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:20px auto auto;padding:15px;border:1px solid #ccc;border-radius:5px;background:#eef;text-align:left}.comentario-resumen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px;color:#333}.comentario-resumen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:italic}"]})};export{re as default};
