import{D as u,t as m,r as h,o as p,c as _,w as t,y as f,a as e,i as n,B as g,E as y,G as V,h as k,H as x}from"./index-198900e6.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const i=u(),{users:o}=m(i),v={data(){return{search:"",itemsPerPage:5,headers:[{title:"No",align:"start",key:"no"},{title:"Username",align:"start",key:"username"},{title:"UserId",align:"start",key:"user_id"},{title:"Total Project",align:"start",key:"shills"},{title:"Actions",key:"actions",sortable:!1}],users:[]}},created(){o.value.length===0?i.getAll().then(()=>{this.users=o.value}):this.users=o.value},computed:{itemsWithSno(){return this.users.map((l,s)=>({...l,no:s+1}))}},methods:{async update(){await settingStore.update(this.banMode,this.shillMode)}}};function S(l,s,T,U,a,d){const c=h("v-data-table");return p(),_(f,null,{default:t(()=>[e(V,null,{default:t(()=>[n(" User List "),e(g),e(y,{modelValue:a.search,"onUpdate:modelValue":s[0]||(s[0]=r=>a.search=r),label:"Search",class:"mt-2",density:"compact","append-inner-icon":"mdi-magnify","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1}),e(x,null,{default:t(()=>[e(c,{headers:a.headers,items:d.itemsWithSno,"sort-by":[{key:"no",order:"asc"}],search:a.search},{"item.actions":t(({item:r})=>[e(k,{icon:"mdi-information-variant",to:`/user-management/${r.raw.user_id}`,color:"blue",size:"x-small"},null,8,["to"])]),"no-data":t(()=>[n(" no data ")]),_:1},8,["headers","items","search"])]),_:1})]),_:1})}const B=b(v,[["render",S]]);export{B as default};
