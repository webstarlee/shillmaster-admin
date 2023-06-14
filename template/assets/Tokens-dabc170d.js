import{R as P,t as T,r as x,o as C,c as w,w as a,y as g,a as t,i as r,G as f,J as n,h as m,P as V,S as U,T as I,U as S,E as i,I as B,g as b,H as _,m as j,n as p,p as d,W as D,C as A,B as H}from"./index-53d5e09e.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const k=P(),{tokens:c}=T(k),F={data(){return{itemsPerPage:10,search:"",headers:[{title:"User",align:"start",key:"username"},{title:"Symbol",align:"start",key:"symbol"},{title:"Shared Marketcap",align:"start",key:"marketcap"},{title:"Current Marketcap",align:"start",key:"current_marketcap"},{title:"ATH",align:"start",key:"ath"},{title:"Action",align:"end",key:"action"}],tokens:[],loading:!0,totalItems:0,page:1,sortBy:{key:"created_at",order:"asc"},symbol:"",dialog:!1,editedIndex:-1,token:{ath:"",chain:"",created_at:"",current_marketcap:"",group_id:"",marketcap:"",no:1,pair_address:"",pair_url:"",status:"",symbol:"",token:"",user_id:"",username:""},defaultToken:{ath:"",chain:"",created_at:"",current_marketcap:"",group_id:"",marketcap:"",no:1,pair_address:"",pair_url:"",status:"",symbol:"",token:"",user_id:"",username:""}}},methods:{async loadProjects({page:o,itemsPerPage:s,sortBy:h}){this.loading=!0,h.length>0&&(this.sortBy=h[0]),this.page=o,this.itemsPerPage=s,k.getPageData(this.page,this.itemsPerPage,this.sortBy.key,this.sortBy.order,this.search).then(()=>{this.tokens=c.value.projects,this.totalItems=c.value.total_count,this.loading=!1})},editToken(o){this.editedIndex=this.tokens.indexOf(o),this.token=Object.assign({},o),this.dialog=!0},close(){this.dialog=!1,this.$nextTick(()=>{this.token=Object.assign({},this.defaultToken),this.editedIndex=-1})},save(){this.editedIndex>-1?k.update(this.token).then(()=>{this.token=Object.assign({},this.defaultToken),this.editedIndex=-1,this.loading=!0,k.getPageData(this.page,this.itemsPerPage,this.sortBy.key,this.sortBy.order,this.search).then(()=>{this.tokens=c.value.projects,this.totalItems=c.value.total_count,this.loading=!1})}):console.log("HIHI"),this.close()}}},O=b("span",null,"Edit Token",-1),W={class:"text-h6"};function E(o,s,h,N,l,u){const y=x("v-data-table-server");return C(),w(g,null,{default:a(()=>[t(f,null,{default:a(()=>[r(" Project List ")]),_:1}),t(_,null,{default:a(()=>[t(y,{"items-per-page":l.itemsPerPage,"onUpdate:itemsPerPage":s[10]||(s[10]=e=>l.itemsPerPage=e),headers:l.headers,"items-length":l.totalItems,items:l.tokens,loading:l.loading,search:l.search,"item-value":"name","onUpdate:options":u.loadProjects},{"item.username":a(({item:e})=>[r(" @"+n(e.raw.username),1)]),"item.symbol":a(({item:e})=>[t(m,{variant:"plain",href:e.raw.pair_url,target:"blink",class:"pl-0"},{default:a(()=>[r(n(e.raw.symbol)+" ",1),t(V,{activator:"parent",scrim:"",location:"top"},{default:a(()=>[r(n(e.raw.token),1)]),_:2},1024)]),_:2},1032,["href"])]),"item.marketcap":a(({item:e})=>[r(n(o.$numFormatWithDollar(e.raw.marketcap)),1)]),"item.current_marketcap":a(({item:e})=>[r(n(o.$isActive(e.raw.status)?`${o.$numFormatWithDollar(e.raw.current_marketcap)}
                                        (${o.$getMultiple(e.raw.current_marketcap,e.raw.marketcap)})`:"removed"),1)]),"item.ath":a(({item:e})=>[r(n(o.$numFormatWithDollar(e.raw.ath))+" ("+n(o.$getMultiple(e.raw.ath,e.raw.marketcap))+") ",1)]),"item.action":a(({item:e})=>[t(V,{location:"top"},{activator:a(({props:v})=>[t(m,U({icon:""},v,{size:"x-small",color:"blue",onClick:R=>u.editToken(e.raw)}),{default:a(()=>[t(I,{color:"grey-lighten-1"},{default:a(()=>[r(" mdi-pencil ")]),_:1})]),_:2},1040,["onClick"])]),default:a(()=>[O]),_:2},1024)]),"no-data":a(()=>[r(" no data ")]),top:a(()=>[t(S,{color:"transparent",height:"50"},{default:a(()=>[t(i,{modelValue:l.search,"onUpdate:modelValue":s[0]||(s[0]=e=>l.search=e),label:"Search",class:"mt-2",density:"compact","append-inner-icon":"mdi-magnify","hide-details":"","single-line":""},null,8,["modelValue"]),t(B,{modelValue:l.dialog,"onUpdate:modelValue":s[9]||(s[9]=e=>l.dialog=e),persistent:"","max-width":"500px"},{default:a(()=>[t(g,null,{default:a(()=>[t(f,{class:"pt-5"},{default:a(()=>[b("span",W,"Edit "+n(l.token.symbol)+" Token",1)]),_:1}),t(_,null,{default:a(()=>[t(j,{class:"px-0 py-0"},{default:a(()=>[t(p,null,{default:a(()=>[t(d,{cols:"6 py-0",sm:"6",md:"3"},{default:a(()=>[t(i,{modelValue:l.token.username,"onUpdate:modelValue":s[1]||(s[1]=e=>l.token.username=e),color:"blue",disabled:"",label:"Username",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1}),t(d,{cols:"6 py-0",sm:"6",md:"3"},{default:a(()=>[t(i,{modelValue:l.token.symbol,"onUpdate:modelValue":s[2]||(s[2]=e=>l.token.symbol=e),disabled:"",color:"blue",label:"Symbol",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1}),t(d,{cols:"6 py-0",sm:"6",md:"3"},{default:a(()=>[t(i,{prefix:"$",modelValue:l.token.marketcap,"onUpdate:modelValue":s[3]||(s[3]=e=>l.token.marketcap=e),disabled:"",color:"blue",label:"Marketcap",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1}),t(d,{cols:"6 py-0",sm:"6",md:"3"},{default:a(()=>[t(i,{prefix:"$",modelValue:l.token.current_marketcap,"onUpdate:modelValue":s[4]||(s[4]=e=>l.token.current_marketcap=e),disabled:"",color:"blue",label:"Current",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:a(()=>[t(d,{cols:"12 py-0"},{default:a(()=>[t(i,{modelValue:l.token.token,"onUpdate:modelValue":s[5]||(s[5]=e=>l.token.token=e),color:"blue",disabled:"",label:"Token Address",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:a(()=>[t(d,{cols:"12 py-0"},{default:a(()=>[t(i,{modelValue:l.token.pair_address,"onUpdate:modelValue":s[6]||(s[6]=e=>l.token.pair_address=e),color:"blue",disabled:"",label:"Pair address",variant:"plain","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t(p,null,{default:a(()=>[t(d,{cols:"12",sm:"6",md:"6"},{default:a(()=>[t(i,{prefix:"$",modelValue:l.token.ath,"onUpdate:modelValue":s[7]||(s[7]=e=>l.token.ath=e),color:"blue",label:"ATH",variant:"underlined"},null,8,["modelValue"])]),_:1}),t(d,{cols:"12",sm:"6",md:"6"},{default:a(()=>[t(D,{modelValue:l.token.status,"onUpdate:modelValue":s[8]||(s[8]=e=>l.token.status=e),items:["active","remove"],label:"Status",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(A,null,{default:a(()=>[t(H),t(m,{color:"red",variant:"text",onClick:u.close},{default:a(()=>[r(" Cancel ")]),_:1},8,["onClick"]),t(m,{color:"success",variant:"text",onClick:u.save},{default:a(()=>[r(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["items-per-page","headers","items-length","items","loading","search","onUpdate:options"])]),_:1})]),_:1})}const J=M(F,[["render",E]]);export{J as default};
