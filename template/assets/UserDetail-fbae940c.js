import{D as B,t as W,o,v as u,a as l,w as s,y as b,I as V,F as f,G as v,g as e,J as a,K as T,L as m,i,H as N,M as I,N as g,O as k,x,C as w,B as y,h as c,P as U}from"./index-b35fae4e.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const p=B(),{user:D}=W(p),R={data(){return{user:{},tab:null,warnDialog:!1,banDialog:!1,group_id:null,user_id:null}},created(){const r=this.$route.params.user_id;p.getById(r).then(()=>{this.user=D.value})},methods:{openWarnDialog(r){this.group_id=r,this.user_id=this.user.user_id,this.warnDialog=!0},openBanDialog(r){this.group_id=r,this.user_id=this.user.user_id,this.banDialog=!0},async removeWarn(){await p.removeWarning(this.user_id,this.group_id),p.getById(this.user_id).then(()=>{this.user=D.value}),this.group_id=null,this.user_id=null,this.warnDialog=!1,this.banDialog=!1},async removeBan(){await p.userUnban(this.user_id,this.group_id),p.getById(this.user_id).then(()=>{this.user=D.value}),this.group_id=null,this.user_id=null,this.warnDialog=!1,this.banDialog=!1},cancelRemove(){this.group_id=null,this.user_id=null,this.warnDialog=!1,this.banDialog=!1}}},F={class:"text-subtitle-1 text-medium-emphasis"},G={class:"text-subtitle-1 text-medium-emphasis"},M={class:"text-subtitle-1 text-medium-emphasis"},S={class:"text-subtitle-1 text-medium-emphasis"},j=e("thead",null,[e("tr",null,[e("th",{id:"no_column",class:"text-left"},"No"),e("th",{id:"symbol_column",class:"text-left"},"Symbol"),e("th",{id:"shared_marketcap_column",class:"text-left"},"Shared Marketcap"),e("th",{id:"current_marketcap_column",class:"text-left"},"Current Marketcap"),e("th",{id:"ath_column",class:"text-left"},"ATH")])],-1),E={key:0},P={key:1},z=e("thead",null,[e("tr",null,[e("th",{id:"group_no_column",class:"text-left"},"No"),e("th",{id:"group_title_column",class:"text-left"},"Title"),e("th",{id:"group_id_column",class:"text-left"},"Group Id")])],-1),H={key:1},L=e("td",{colspan:"3",class:"text-center"},"No Groups",-1),O=[L],J=e("thead",null,[e("tr",null,[e("th",{id:"warn_no_column",class:"text-left"},"No"),e("th",{id:"warn_title_column",class:"text-left"},"Title"),e("th",{id:"warn_group_id_column",class:"text-left"},"Group Id"),e("th",{id:"warn_count_column",class:"text-left"},"Count"),e("th",{id:"warn_action_column",class:"text-left"},"Action")])],-1),K={key:1},q=e("td",{colspan:"5",class:"text-center"},"No Warns",-1),Q=[q],X=e("thead",null,[e("tr",null,[e("th",{id:"ban_no_column",class:"text-left"},"No"),e("th",{id:"ban_title_column",class:"text-left"},"Title"),e("th",{id:"ban_group_id_column",class:"text-left"},"Group Id"),e("th",{id:"warn_action_column",class:"text-left"},"Action")])],-1),Y={key:1},Z=e("td",{colspan:"4",class:"text-center"},"No Bans",-1),$=[Z];function ee(r,d,te,le,n,h){return o(),u(f,null,[l(b,null,{default:s(()=>[l(v,null,{default:s(()=>[e("div",F,"Fullname: "+a(n.user.fullname),1),e("div",G,"Username: "+a(n.user.username),1),e("div",M,"User Id: "+a(n.user.user_id),1),e("div",S,"Total Projects: "+a(n.user.total_shills),1)]),_:1}),l(T,{modelValue:n.tab,"onUpdate:modelValue":d[0]||(d[0]=t=>n.tab=t),"bg-color":"blue"},{default:s(()=>[l(m,{value:"latest_projects"},{default:s(()=>[i("All Projects")]),_:1}),l(m,{value:"groups"},{default:s(()=>[i("Groups")]),_:1}),l(m,{value:"warns"},{default:s(()=>[i("Warns")]),_:1}),l(m,{value:"bans"},{default:s(()=>[i("Bans")]),_:1})]),_:1},8,["modelValue"]),l(N,null,{default:s(()=>[l(I,{modelValue:n.tab,"onUpdate:modelValue":d[1]||(d[1]=t=>n.tab=t)},{default:s(()=>[l(g,{value:"latest_projects"},{default:s(()=>[l(k,{"fixed-header":"",height:"500px"},{default:s(()=>[j,e("tbody",null,[(o(!0),u(f,null,x(n.user.latest_shills,(t,_)=>(o(),u("tr",{key:t.no},[e("td",null,a(_+1),1),e("td",null,[l(c,{variant:"plain",href:t.pair_url,target:"blink"},{default:s(()=>[i(a(t.symbol)+" ",1),l(U,{activator:"parent",scrim:"",location:"top"},{default:s(()=>[i(a(t.token),1)]),_:2},1024)]),_:2},1032,["href"])]),e("td",null,a(r.$numFormatWithDollar(t.marketcap)),1),r.$isActive(t.status)?(o(),u("td",E,a(r.$numFormatWithDollar(t.current_marketcap))+" ("+a(r.$getMultiple(t.current_marketcap,t.marketcap))+")",1)):(o(),u("td",P,"REMOVED")),e("td",null,a(r.$numFormatWithDollar(t.ath))+" ("+a(r.$getMultiple(t.ath,t.marketcap))+")",1)]))),128))])]),_:1})]),_:1}),l(g,{value:"groups"},{default:s(()=>[l(k,null,{default:s(()=>[z,e("tbody",null,[n.user.groups.length>0?(o(!0),u(f,{key:0},x(n.user.groups,(t,_)=>(o(),u("tr",{key:t.no},[e("td",null,a(_+1),1),e("td",null,a(t.title),1),e("td",null,a(t.group_id),1)]))),128)):(o(),u("tr",H,O))])]),_:1})]),_:1}),l(g,{value:"warns"},{default:s(()=>[l(k,null,{default:s(()=>[J,e("tbody",null,[n.user.warns.length>0?(o(!0),u(f,{key:0},x(n.user.warns,(t,_)=>(o(),u("tr",{key:t.no},[e("td",null,a(_+1),1),e("td",null,a(t.title),1),e("td",null,a(t.group_id),1),e("td",null,a(t.count),1),e("td",null,[l(c,{color:"red",icon:"mdi-delete",onClick:C=>h.openWarnDialog(t.group_id),title:"Remove Warning",size:"x-small"},null,8,["onClick"])])]))),128)):(o(),u("tr",K,Q))])]),_:1})]),_:1}),l(g,{value:"bans"},{default:s(()=>[l(k,null,{default:s(()=>[X,e("tbody",null,[n.user.bans.length>0?(o(!0),u(f,{key:0},x(n.user.bans,(t,_)=>(o(),u("tr",{key:t.no},[e("td",null,a(_+1),1),e("td",null,a(t.title),1),e("td",null,a(t.group_id),1),e("td",null,[l(c,{color:"red",icon:"mdi-delete",onClick:C=>h.openBanDialog(t.group_id),title:"Remove Warning",size:"x-small"},null,8,["onClick"])])]))),128)):(o(),u("tr",Y,$))])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(V,{modelValue:n.warnDialog,"onUpdate:modelValue":d[2]||(d[2]=t=>n.warnDialog=t),persistent:"",width:"auto"},{default:s(()=>[l(b,null,{default:s(()=>[l(v,{class:"text-h5"},{default:s(()=>[i(" Do you want to remove warning? ")]),_:1}),l(w,null,{default:s(()=>[l(y),l(c,{color:"green-darken-1",variant:"text",onClick:h.cancelRemove},{default:s(()=>[i(" Disagree ")]),_:1},8,["onClick"]),l(c,{color:"red",variant:"text",onClick:h.removeWarn},{default:s(()=>[i(" Agree ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(V,{modelValue:n.banDialog,"onUpdate:modelValue":d[3]||(d[3]=t=>n.banDialog=t),persistent:"",width:"auto"},{default:s(()=>[l(b,null,{default:s(()=>[l(v,{class:"text-h5"},{default:s(()=>[i(" Do you want to unBan this user? ")]),_:1}),l(w,null,{default:s(()=>[l(y),l(c,{color:"green-darken-1",variant:"text",onClick:h.cancelRemove},{default:s(()=>[i(" Disagree ")]),_:1},8,["onClick"]),l(c,{color:"red",variant:"text",onClick:h.removeBan},{default:s(()=>[i(" Agree ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ne=A(R,[["render",ee]]);export{ne as default};
