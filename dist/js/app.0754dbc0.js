(function(){"use strict";var e={5738:function(e,t,n){var o=n(9963),r=n(6252);function a(e,t,n,o,a,i){const l=(0,r.up)("TableDataGrid");return(0,r.wg)(),(0,r.j4)(l)}const i={id:"app-container"};function l(e,t,n,o,a,l){const s=(0,r.up)("DxColumn"),u=(0,r.up)("DxTexts"),c=(0,r.up)("DxEditing"),d=(0,r.up)("DxGroupPanel"),p=(0,r.up)("DxSearchPanel"),f=(0,r.up)("DxFilterRow"),m=(0,r.up)("DxPaging"),h=(0,r.up)("DxDataGrid"),D=(0,r.up)("DxButton");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(h,{id:"dataGrid","data-source":a.employees,"key-expr":"ID","allow-column-reordering":!0,ref:e.dataGridRefKey},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{"data-field":"Name",caption:"Название","allow-editing":!1}),(0,r.Wm)(s,{"data-field":"Description",caption:"Описание","allow-editing":!1}),(0,r.Wm)(s,{"data-field":"Value",caption:"Значение"}),(0,r.Wm)(s,{"data-field":"Permissions",caption:"Разрешения","allow-editing":!1}),(0,r.Wm)(c,{mode:"row","allow-updating":!0},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{editRow:"Изменить",saveRowChanges:"Сохранить",cancelRowChanges:"Отменить"})])),_:1}),(0,r.Wm)(d,{visible:!0,emptyPanelText:"Перенесите заголовок сюда что бы сгруппировать содержимое"}),(0,r.Wm)(p,{visible:!0,placeholder:"Поиск..."}),(0,r.Wm)(f,{visible:!0}),(0,r.Wm)(m,{"page-size":10})])),_:1},8,["data-source"]),(0,r.Wm)(D,{text:"Сохранить",onClick:l.saveChanges},null,8,["onClick"])])}var s=n(2032),u=n(8143),c=n.n(u);const d="myDataGrid";var p={name:"TableDataGrid",components:{DxDataGrid:s.DxDataGrid,DxColumn:s.DxColumn,DxEditing:s.DxEditing,DxButton:c(),DxGroupPanel:s.DxGroupPanel,DxSearchPanel:s.DxSearchPanel,DxFilterRow:s.DxFilterRow,DxTexts:s.DxTexts,DxPaging:s.DxPaging},data(){return{employees:[]}},methods:{saveChanges(){let e={},t=BX24.placement.info().placement.split("_")[1].toLowerCase(),n=BX24.placement.info().options.ID;for(let o in this.employees)e[this.employees[o].Name]=this.employees[o].Value;BX24.callMethod(`crm.${t}.update`,{id:n,fields:e,params:{REGISTER_SONET_EVENT:"Y"}},(function(e){e.error()?console.error(e.error()):console.info(e.data())}))}},computed:{dataGrid:function(){return this.$refs[d].instance}},created(){let e=[];class t{constructor(e,t,n,o,r){this.Name=e,this.Description=t,this.Value=n,this.Permissions=o,this.ID=r}}let n=()=>{let n,o,r,a,i=BX24.placement.info().placement.split("_")[1].toLowerCase(),l=BX24.placement.info().options.ID;BX24.callMethod(`crm.${i}.fields`,{},(s=>{if(s.error())console.error(s.error());else{console.log("поля:"),console.log(s.data());let u=Object.keys(s.data());for(let i in u)n=u[i],o=s.data()[u[i]].title,a=s.data()[u[i]].isDynamic?"Динамичный":s.data()[u[i]].isImmutable?"Неизменный":s.data()[u[i]].isMultiple?"Множественный":s.data()[u[i]].isReadOnly?"Только для чтения":s.data()[u[i]].isRequired?"Обязательное":"",e[Number(i)]=new t(n,o,r,a,i);this.employees=e,BX24.callMethod(`crm.${i}.get`,{id:l},(e=>{if(e.error())console.error(e.error());else{console.log("значения:"),console.log(e.data());let t=[],n=this.employees;Object.keys(e.data()).forEach((function(e){t.push(this[e]);for(let t in n)n[t].Name===e&&(Array.isArray(this[e])?(n[t].Value="",this[e].forEach((e=>{n[t].Value+=e.VALUE,n[t].Value+=" "}))):n[t].Value=this[e])}),e.data())}}))}}))};BX24.init(n)}},f=n(3744);const m=(0,f.Z)(p,[["render",l]]);var h=m,D={name:"App",components:{TableDataGrid:h}};const x=(0,f.Z)(D,[["render",a]]);var g=x;(0,o.ri)(g).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkapp_for_bitrix"]=self["webpackChunkapp_for_bitrix"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5738)}));o=n.O(o)})();
//# sourceMappingURL=app.0754dbc0.js.map