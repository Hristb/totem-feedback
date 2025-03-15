import{a as ce,b as de,c as fe,d as u,f as z,g as D,h as E,i as c,j as ue}from"./chunk-P2LRWJC7.js";import{d as X,f as Z}from"./chunk-GY3EEGHA.js";import{a as ee,b as I,c as te,d as ie,e as ne,f as oe,g as le,h as ae,i as re,j as se,k as pe}from"./chunk-HABO7IB4.js";import"./chunk-MYF7UUOU.js";import{$ as p,$a as $,Ea as y,Fa as g,Ga as L,Gb as F,Ha as v,Ia as N,Ib as W,N as d,O as b,Pa as K,Qa as x,Ra as B,Sa as S,T as r,Ta as l,Ua as a,Va as C,Y as G,Za as k,a as m,aa as H,ab as M,eb as s,ia as A,kb as f,na as q,nb as U,pb as J,va as h,xb as Q,ya as Y,za as T}from"./chunk-S4WCWVDQ.js";var me=(()=>{class e extends c{name="common";static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),w=(()=>{class e{document=r(Q);platformId=r(q);el=r(A);injector=r(H);cd=r(U);renderer=r(Y);config=r(ue);baseComponentStyle=r(me);baseStyle=r(c);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=fe("pc");themeChangeListeners=[];_getHostInstance(i){if(i)return i?this.hostName?i.name===this.hostName?i:this._getHostInstance(i.parentInstance):i.parentInstance:void 0}_getOptionValue(i,t="",n={}){return de(i,t,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(i){if(this.document&&!W(this.platformId)){let{dt:t}=i;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(i=>z.off("theme:change",i))}_loadStyles(){let i=()=>{E.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),E.setLoadedStyleName("base")),this._loadThemeStyles()};i(),this._themeChangeListener(()=>i())}_loadCoreStyles(){!E.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),E.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!D.isStyleNameLoaded("common")){let{primitive:i,semantic:t,global:n,style:_}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(i?.css,m({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,m({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,m({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(m({name:"global-style"},this.styleOptions),_),D.setLoadedStyleName("common")}if(!D.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:i,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(i,m({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(m({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),D.setLoadedStyleName(this.componentStyle?.name)}if(!D.isStyleNameLoaded("layer-order")){let i=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(i,m({name:"layer-order",first:!0},this.styleOptions)),D.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(i){let{css:t}=this.componentStyle?.getPresetTheme?.(i,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(t,m({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(i=()=>{}){E.clearLoadedStyleNames(),z.on("theme:change",i),this.themeChangeListeners.push(i)}cx(i,t){let n=this.parent?this.parent.componentStyle?.classes?.[i]:this.componentStyle?.classes?.[i];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:i}sx(i){let t=this.componentStyle?.inlineStyles?.[i];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:m({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||e)};static \u0275dir=L({type:e,inputs:{dt:"dt"},features:[f([me,c]),G]})}return e})();var $e=["*"],Me=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,De={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},be=(()=>{class e extends c{name="floatlabel";theme=Me;classes=De;static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var P=(()=>{class e extends w{_componentStyle=r(be);variant="over";static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(t,n){t&2&&x("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},features:[f([be]),v],ngContentSelectors:$e,decls:1,vars:0,template:function(t,n){t&1&&($(),M(0))},dependencies:[F,u],encapsulation:2,changeDetection:0})}return e})(),he=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=b({imports:[P,u,u]})}return e})();var ge=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=b({imports:[F,u,Z,u]})}return e})();var je=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Te={root:({instance:e,props:o})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},ye=(()=>{class e extends c{name="inputtext";theme=je;classes=Te;static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var ve=(()=>{class e extends w{ngModel;variant;fluid;pSize;filled;_componentStyle=r(ye);get hasFluid(){let t=this.el.nativeElement.closest("p-fluid");return ce(this.fluid)?!!t:this.fluid}constructor(i){super(),this.ngModel=i}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(t){return new(t||e)(T(ne,8))};static \u0275dir=L({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(t,n){if(t&1&&k("input",function(we){return n.onInput(we)}),t&2){let _;x("p-filled",n.filled)("p-variant-filled",((_=n.variant)!==null&&_!==void 0?_:n.config.inputStyle()||n.config.inputVariant())==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",J],pSize:"pSize"},features:[f([ye]),v]})}return e})(),Se=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=b({})}return e})();var Le=["*"],Be={root:"p-inputicon"},xe=(()=>{class e extends c{name="inputicon";classes=Be;static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})(),O=(()=>{class e extends w{styleClass;get hostClasses(){return this.styleClass}_componentStyle=r(xe);static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(t,n){t&2&&(B(n.hostClasses),x("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[f([xe]),v],ngContentSelectors:Le,decls:1,vars:0,template:function(t,n){t&1&&($(),M(0))},dependencies:[F,u],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=b({imports:[O,u,u]})}return e})();var ze=["*"],Pe=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,Oe={root:"p-iconfield"},Fe=(()=>{class e extends c{name="iconfield";theme=Pe;classes=Oe;static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var R=(()=>{class e extends w{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=r(Fe);static \u0275fac=(()=>{let i;return function(n){return(i||(i=p(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(t,n){t&2&&(B(n._styleClass),x("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[f([Fe]),v],ngContentSelectors:ze,decls:1,vars:0,template:function(t,n){t&1&&($(),M(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Ie=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=b({imports:[R]})}return e})();function Ve(e,o){e&1&&(l(0,"small",8),s(1,"El nombre es obligatorio."),a())}function Ge(e,o){e&1&&(l(0,"small",8),s(1,"M\xEDnimo 3 caracteres."),a())}function He(e,o){e&1&&(l(0,"small",8),s(1,"El correo es obligatorio."),a())}function Ae(e,o){e&1&&(l(0,"small",8),s(1,"Formato de correo inv\xE1lido."),a())}function qe(e,o){e&1&&(l(0,"small",8),s(1,"La contrase\xF1a es obligatoria."),a())}function Ye(e,o){e&1&&(l(0,"small",8),s(1,"M\xEDnimo 6 caracteres."),a())}function Ke(e,o){e&1&&(l(0,"small",8),s(1,"Confirmar contrase\xF1a es obligatorio."),a())}function Ue(e,o){e&1&&(l(0,"small",8),s(1,"Las contrase\xF1as no coinciden."),a())}var V=class e{constructor(o,i){this.fb=o;this.router=i;this.registerForm=this.fb.group({username:["",[I.required,I.minLength(3)]],email:["",[I.required,I.email]],password:["",[I.required,I.minLength(6)]],confirmPassword:["",I.required]},{validator:this.passwordMatchValidator})}registerForm;submitted=!1;passwordMatchValidator(o){let i=o.get("password")?.value,t=o.get("confirmPassword")?.value;return i===t?null:{mismatch:!0}}get f(){return this.registerForm.controls}onSubmit(){this.submitted=!0,!this.registerForm.invalid&&(console.log("Formulario v\xE1lido",this.registerForm.value),this.router.navigate(["/totem/feedback"]))}static \u0275fac=function(i){return new(i||e)(T(re),T(X))};static \u0275cmp=y({type:e,selectors:[["app-register"]],decls:50,vars:9,consts:[[1,"register","max-w-md","mx-auto","p-6","bg-white","shadow-md","rounded-lg"],[1,"text-3xl","font-bold","text-center","mb-6"],[3,"ngSubmit","formGroup"],[1,"card","flex","justify-center","mb-4"],["variant","on",1,"w-full"],[1,"pi","pi-user"],["pInputText","","id","username","formControlName","username",1,"w-full"],["for","username",1,"text-sm"],[1,"text-red-500"],[1,"pi","pi-envelope"],["pInputText","","type","email","id","email","formControlName","email",1,"w-full"],["for","email",1,"text-sm"],[1,"pi","pi-lock"],["pInputText","","type","password","id","password","formControlName","password",1,"w-full"],["for","password",1,"text-sm"],["pInputText","","type","password","id","confirmPassword","formControlName","confirmPassword",1,"w-full"],["for","confirmPassword",1,"text-sm"],[1,"bg-blue-600","text-white","font-semibold","py-2","px-4","rounded-md","w-full","hover:bg-blue-700","transition"],[1,"relative","flex","items-center","my-6"],[1,"flex-grow","border-t","border-gray-300"],[1,"px-3","text-gray-500"],[1,"flex","justify-center"],[1,"flex","items-center","justify-center","gap-2","rounded-md","px-4","py-2","cursor-pointer","border","border-gray-300"],["src","https://www.svgrepo.com/show/355037/google.svg","alt","Google",1,"w-5","h-5"]],template:function(i,t){i&1&&(l(0,"div",0)(1,"h1",1),s(2,"Crea tu Perfil"),a(),l(3,"form",2),k("ngSubmit",function(){return t.onSubmit()}),l(4,"div",3)(5,"p-floatlabel",4)(6,"p-iconfield"),C(7,"p-inputicon",5)(8,"input",6),a(),l(9,"label",7),s(10,"Nombre de usuario"),a()()(),N(11,Ve,2,0,"small",8)(12,Ge,2,0,"small",8),l(13,"div",3)(14,"p-floatlabel",4)(15,"p-iconfield"),C(16,"p-inputicon",9)(17,"input",10),a(),l(18,"label",11),s(19,"Correo"),a()()(),N(20,He,2,0,"small",8)(21,Ae,2,0,"small",8),l(22,"div",3)(23,"p-floatlabel",4)(24,"p-iconfield"),C(25,"p-inputicon",12)(26,"input",13),a(),l(27,"label",14),s(28,"Contrase\xF1a"),a()()(),N(29,qe,2,0,"small",8)(30,Ye,2,0,"small",8),l(31,"div",3)(32,"p-floatlabel",4)(33,"p-iconfield"),C(34,"p-inputicon",12)(35,"input",15),a(),l(36,"label",16),s(37,"Confirmar Contrase\xF1a"),a()()(),N(38,Ke,2,0,"small",8)(39,Ue,2,0,"small",8),l(40,"button",17),s(41," Registrarse "),a()(),l(42,"div",18),C(43,"div",19),l(44,"span",20),s(45,"o"),a(),C(46,"div",19),a(),l(47,"div",21)(48,"button",22),C(49,"img",23),a()()()),i&2&&(h(3),K("formGroup",t.registerForm),h(8),S(t.submitted&&(t.f.username.errors!=null&&t.f.username.errors.required)?11:-1),h(),S(t.submitted&&(t.f.username.errors!=null&&t.f.username.errors.minlength)?12:-1),h(8),S(t.submitted&&(t.f.email.errors!=null&&t.f.email.errors.required)?20:-1),h(),S(t.submitted&&(t.f.email.errors!=null&&t.f.email.errors.email)?21:-1),h(8),S(t.submitted&&(t.f.password.errors!=null&&t.f.password.errors.required)?29:-1),h(),S(t.submitted&&(t.f.password.errors!=null&&t.f.password.errors.minlength)?30:-1),h(8),S(t.submitted&&(t.f.confirmPassword.errors!=null&&t.f.confirmPassword.errors.required)?38:-1),h(),S(t.submitted&&(t.f.confirmPassword.errors!=null&&t.f.confirmPassword.errors.mismatch)?39:-1))},dependencies:[Ce,O,Ie,R,he,P,se,oe,ee,te,ie,ge,Se,ve,pe,le,ae],encapsulation:2})};export{V as default};
