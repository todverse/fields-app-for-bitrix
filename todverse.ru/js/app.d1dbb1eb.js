(function(){"use strict";var e={5345:function(e,t,o){var n=o(9963),r=o(6252);function a(e,t,o,n,a,i){const l=(0,r.up)("TableDataGrid");return(0,r.wg)(),(0,r.j4)(l)}var i=o(3577);const l={id:"app-container"},s={onmouseover:'this.style.wordWrap = "break-word";this.style.overflow = "wrap";this.style.whiteSpace = "normal";',onmouseout:'this.style.wordWrap = "";this.style.overflow = "";this.style.whiteSpace = "";'};function u(e,t,o,n,a,u){const c=(0,r.up)("DxColumn"),d=(0,r.up)("DxTexts"),p=(0,r.up)("DxEditing"),f=(0,r.up)("DxGroupPanel"),m=(0,r.up)("DxSearchPanel"),h=(0,r.up)("DxFilterRow"),D=(0,r.up)("DxPaging"),g=(0,r.up)("DxDataGrid"),v=(0,r.up)("DxButton");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(g,{id:"dataGrid","data-source":a.employees,"key-expr":"ID","allow-column-reordering":!0,ref:e.dataGridRefKey},{"grid-cell":(0,r.w5)((({data:e})=>[(0,r._)("div",s,(0,i.zw)(e.value),1)])),default:(0,r.w5)((()=>[(0,r.Wm)(c,{"data-field":"Name",caption:"Название","allow-editing":!1}),(0,r.Wm)(c,{"data-field":"Description",caption:"Описание","allow-editing":!1}),(0,r.Wm)(c,{"data-field":"Value",caption:"Значение","cell-template":"grid-cell"}),(0,r.Wm)(c,{"data-field":"Permissions",caption:"Разрешения","allow-editing":!1}),(0,r.Wm)(p,{mode:"row","allow-updating":!0},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{editRow:"Изменить",saveRowChanges:"Сохранить",cancelRowChanges:"Отменить"})])),_:1}),(0,r.Wm)(f,{visible:!0,emptyPanelText:"Перенесите заголовок сюда что бы сгруппировать содержимое"}),(0,r.Wm)(m,{visible:!0,placeholder:"Поиск..."}),(0,r.Wm)(h,{visible:!0}),(0,r.Wm)(D,{"page-size":10})])),_:1},8,["data-source"]),(0,r.Wm)(v,{text:"Сохранить",onClick:u.saveChanges},null,8,["onClick"])])}var c=o(2032),d=o(8143),p=o.n(d);const f="myDataGrid";var m={name:"TableDataGrid",components:{DxDataGrid:c.DxDataGrid,DxColumn:c.DxColumn,DxEditing:c.DxEditing,DxButton:p(),DxGroupPanel:c.DxGroupPanel,DxSearchPanel:c.DxSearchPanel,DxFilterRow:c.DxFilterRow,DxTexts:c.DxTexts,DxPaging:c.DxPaging},data(){return{employees:[]}},methods:{saveChanges(){let e={},t=BX24.placement.info().placement.split("_")[1].toLowerCase(),o=BX24.placement.info().options.ID;for(let n in this.employees)e[this.employees[n].Name]=this.employees[n].Value;BX24.callMethod(`crm.${t}.update`,{id:o,fields:e,params:{REGISTER_SONET_EVENT:"Y"}},(function(e){e.error()?console.error(e.error()):console.info(e.data())}))}},computed:{dataGrid:function(){return this.$refs[f].instance}},created(){let e=[],t={WORK:"Рабочий",MOBILE:"Мобильный",FAX:"Факс",HOME:"Домашний",PAGER:"Пейджер",MAILING:"Для рассылок",OTHER:"Другой",OPENLINE:"Онлайн-чат",IMOL:"Открытая линия"};class o{constructor(e,t,o,n,r){this.Name=e,this.Description=t,this.Value=o,this.Permissions=n,this.ID=r}}let n=()=>{let n,r,a,i,l=BX24.placement.info().placement.split("_")[1].toLowerCase(),s=BX24.placement.info().options.ID;BX24.callMethod(`crm.${l}.fields`,{},(u=>{if(u.error())console.error(u.error());else{console.log("поля:"),console.log(u.data());let c=Object.keys(u.data());for(let t in c)n=c[t],r=u.data()[c[t]].title,i=u.data()[c[t]].isDynamic?"Динамичный":u.data()[c[t]].isImmutable?"Неизменный":u.data()[c[t]].isMultiple?"Множественный":u.data()[c[t]].isReadOnly?"Только для чтения":u.data()[c[t]].isRequired?"Обязательное":"",e[Number(t)]=new o(n,r,a,i,t);this.employees=e,BX24.callMethod(`crm.${l}.get`,{id:s},(e=>{if(e.error())console.error(e.error());else{console.log("значения:"),console.log(e.data());let o=[],n=this.employees;Object.keys(e.data()).forEach((function(e){o.push(this[e]);for(let o in n)n[o].Name===e&&(Array.isArray(this[e])?(n[o].Value="",this[e].forEach((e=>{t[e.VALUE_TYPE]?n[o].Value+=`${t[e.VALUE_TYPE]}: ${e.VALUE}, `:n[o].Value+=`${e.VALUE_TYPE}: ${e.VALUE}, `}))):n[o].Value=this[e])}),e.data())}}))}}))};BX24.init(n)}},h=o(3744);const D=(0,h.Z)(m,[["render",u]]);var g=D,v={name:"App",components:{TableDataGrid:g}};const x=(0,h.Z)(v,[["render",a]]);var w=x;(0,n.ri)(w).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],l=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var c=s(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkapp_for_bitrix"]=self["webpackChunkapp_for_bitrix"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5345)}));n=o.O(n)})();
//# sourceMappingURL=app.d1dbb1eb.js.map