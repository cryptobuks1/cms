(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{prFS:function(t,n,i){"use strict";i.r(n),i.d(n,"getModels",(function(){return s}));function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;axios.all([axios.get("/api/updates?page=".concat(n))]).then(axios.spread((function(n){t(null,n.data.data,n.data.meta)}))).catch((function(n){t(new Error("The requested resource could not be found"))}))}var e={name:"updates",data:function(){return{version:!1,versions:[],pagination:[]}},computed:{current:function(){return"v".concat(this.$store.state.fusion.version)},id:function(){return this.findBy("title",this.current).id},isConfirming:function(){return!!this.version}},methods:{findBy:function(t,n){return _.find(this.versions,(function(i){return i[t]==n}))},changePage:function(t){this.refresh(t)},upgrade:function(t){this.version=this.findBy("id",t)},confirm:function(){axios.post("/api/updates",{version:this.version}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},close:function(){this.version=!1},refresh:function(t){var n=this;s((function(t,i,s){t?toast(t.toString(),"danger"):(n.versions=i,n.pagination=s)}),t)}},beforeRouteEnter:function(t,n,i){s((function(t,n,s){i(t?function(n){return toast(t.toString(),"danger")}:function(t){t.versions=n,t.pagination=s})}))}},a=i("KHd+"),o=Object(a.a)(e,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("portal",{attrs:{to:"title"}},[i("page-title",{attrs:{icon:"download"}},[t._v("Updates")])],1),t._v(" "),i("portal",{attrs:{to:"actions"}},[i("a",{attrs:{href:"https://beta.getfusioncms.com/changelog",title:"Changelog",target:"_blank"}},[t._v(t._s(t.current))])]),t._v(" "),t._l(t.versions,(function(n,s){return i("div",{key:s,staticClass:"card"},[i("div",{staticClass:"card__header flex items-center justify-between"},[i("h3",{staticClass:"card__title"},[t._v("\n                "+t._s(n.title)+"\n\n                "),i("span",{staticClass:"text-xs block"},[t._v("\n                    Released "+t._s(t.$moment(n.date_published).format("MMM Do, YYYY"))+"\n                ")])]),t._v(" "),i("div",{staticClass:"flex items-center justify-start"},[n._isCurrent?i("ui-button",{attrs:{disabled:""}},[t._v("\n                    Current version\n                ")]):t._e(),t._v(" "),t._l(n.attachments,(function(t,n){return i("a",{key:"attachment-"+s+"-"+n,staticClass:"button button--icon ml-1",attrs:{href:t.url,title:t.mime_type}},[i("fa-icon",{staticClass:"icon",attrs:{icon:"download"}})],1)})),t._v(" "),i("a",{staticClass:"button button--icon ml-1",attrs:{href:"https://github.com/fusioncms/fusioncms/releases/tag/"+n.title,title:"View on Github",target:"_blank"}},[i("fa-icon",{staticClass:"icon",attrs:{icon:"code"}})],1)],2)]),t._v(" "),i("div",{staticClass:"card__body"},[i("p",[t._v(t._s(t.versions.content_text))]),t._v(" "),t._l(n._changelog,(function(n,s){return i("div",{key:s},t._l(n,(function(n,e){return i("div",{key:e,staticClass:"row"},[i("div",{staticClass:"col"},[i("span",{staticClass:"badge"},[t._v(t._s(s))])]),t._v(" "),i("div",{staticClass:"col"},[t._v("\n                        "+t._s(e)+"\n\n                        "),t._l(n,(function(n){return i("a",{key:n,staticClass:"mr-1 text-xs",attrs:{href:"https://github.com/fusioncms/fusioncms/issues/"+n,target:"_blank"}},[t._v("\n                            #"+t._s(n)+"\n                        ")])}))],2)])})),0)}))],2)])})),t._v(" "),t.pagination.total>1?i("div",{staticClass:"mt-6"},[i("ui-pagination",{attrs:{total:t.pagination.last_page,value:t.pagination.current_page},on:{input:function(n){return t.changePage(n)}}})],1):t._e(),t._v(" "),i("portal",{attrs:{to:"modals"}},[i("ui-modal",{key:"updater_modal",attrs:{name:"updater",title:"Update to "+t.version.title},model:{value:t.isConfirming,callback:function(n){t.isConfirming=n},expression:"isConfirming"}},[i("p",[t._v("Are you sure you want to update to version "+t._s(t.version.title)+"?")]),t._v(" "),i("template",{slot:"footer"},[i("ui-button",{staticClass:"button button--primary",attrs:{type:"button"},on:{click:t.confirm}},[t._v("Confirm")]),t._v(" "),i("ui-button",{staticClass:"mr-3",attrs:{type:"button"},on:{click:t.close}},[t._v("Cancel")])],1)],2)],1)],2)}),[],!1,null,null,null);n.default=o.exports}}]);