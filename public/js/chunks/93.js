(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{ev9J:function(t,a,n){"use strict";n.r(a);var e={head:{title:function(){return{inner:"Navigations"}}},data:function(){return{endpoint:"/datatable/navigation"}},methods:{destroy:function(t){axios.delete("/api/navigation/"+t).then((function(t){toast("Navigation successfully deleted.","success"),bus().$emit("refresh-datatable-navigation")}))}}},i=n("KHd+"),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("portal",{attrs:{to:"title"}},[n("page-title",{attrs:{icon:"anchor"}},[t._v("Navigation")])],1),t._v(" "),n("portal",{attrs:{to:"actions"}},[n("ui-button",{attrs:{to:{name:"navigation.create"},variant:"primary"}},[t._v("Create Navigation")])],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"content-container"},[n("ui-table",{key:"navigation_table",attrs:{endpoint:t.endpoint,id:"navigation","sort-by":"name","primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(a){return[n("router-link",{attrs:{to:{name:"navigation.nodes",params:{navigation:a.record.id}}}},[t._v(t._s(a.record.name))])]}},{key:"handle",fn:function(a){return[n("code",[t._v(t._s(a.record.handle))])]}},{key:"description",fn:function(a){return[n("p",[t._v(t._s(a.record.description))])]}},{key:"actions",fn:function(a){return[n("ui-actions",{key:"navigation_"+a.record.id+"_actions",attrs:{id:"navigation_"+a.record.id+"_actions"}},[n("ui-dropdown-link",{attrs:{to:{name:"navigation.nodes",params:{navigation:a.record.id}}}},[t._v("Manage")]),t._v(" "),n("ui-dropdown-link",{attrs:{to:{name:"navigation.edit",params:{navigation:a.record.id}}}},[t._v("Edit")]),t._v(" "),n("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",value:a.record,expression:"table.record",arg:"delete-navigation"}],attrs:{classes:"link--danger"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),t._v(" "),n("portal",{attrs:{to:"modals"}},[n("ui-modal",{key:"delete_navigation",attrs:{name:"delete-navigation",title:"Delete Navigation"},scopedSlots:t._u([{key:"footer",fn:function(a){return[n("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",arg:"delete-navigation"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(n){return t.destroy(a.data.id)}}},[t._v("Delete")]),t._v(" "),n("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",arg:"delete-navigation"}]},[t._v("Cancel")])]}}])},[n("p",[t._v("Are you sure you want to permenantly delete this navigation?")])])],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);