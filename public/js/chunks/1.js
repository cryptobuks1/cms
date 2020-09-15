(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5vXo":function(e,t,r){"use strict";r.r(t);var n=r("L2JU");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={head:{title:function(){return{inner:"Users"}}},data:function(){return{roles:[],role:this.$route.params.role||null}},computed:o(o({},Object(n.c)({user:"auth/getUser"})),{},{filteredRoles:function(){return _.filter(this.roles,(function(e){return"Guest"!==e.name}))},endpoint:function(){return this.role?"/datatable/users/"+this.role:"/datatable/users"},current:function(){var e=this,t=_.findIndex(this.roles,(function(t){return t.name==e.role}));return-1!=t?this.roles[t]:{name:"all",label:"All"}}}),watch:{$route:function(e,t){this.role=e.params.role||null}},beforeRouteEnter:function(e,t,r){axios.get("/api/roles").then((function(e){r((function(t){return t.roles=e.data.data}))})).catch((function(e){r((function(e){return console.log(error)}))}))},methods:{destroy:function(e){axios.delete("/api/users/"+e).then((function(e){toast("User successfully deleted.","success"),bus().$emit("refresh-datatable-users")}))}}},u=r("KHd+"),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-page"},[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"users"}},[e._v("Users - "+e._s(e.current?e.current.label:""))])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("ui-button",{key:"create-user-btn",attrs:{to:{name:"users.create"},variant:"primary"}},[e._v("Create User")])],1),e._v(" "),r("div",{staticClass:"content-container"},[r("ui-table",{key:"users_table",staticClass:"user-table",attrs:{id:"users",endpoint:e.endpoint,"sort-by":"name"},scopedSlots:e._u([{key:"toolbarPrepend",fn:function(){return[r("ui-toolbar-group",[r("ui-dropdown",{attrs:{id:"user-roles"},scopedSlots:e._u([{key:"menu",fn:function(){return[r("ui-dropdown-link",{attrs:{to:{name:"users"},exact:""}},[e._v("All")]),e._v(" "),r("ui-dropdown-divider"),e._v(" "),e._l(e.filteredRoles,(function(t){return r("ui-dropdown-link",{key:t.id,attrs:{to:{name:"users.role",params:{role:t.name}},exact:""}},[e._v("\n                                "+e._s(t.label)+"\n                            ")])}))]},proxy:!0}])},[r("span",[e._v("Roles")])])],1)]},proxy:!0},{key:"name",fn:function(t){return[r("div",{staticClass:"flex items-center"},[r("ui-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),r("router-link",{attrs:{to:{name:"users.show",params:{user:t.record.id}}}},[e._v(e._s(t.record.name))])],1)]}},{key:"email",fn:function(t){return[e._v("\n                "+e._s(t.record.email)+"\n            ")]}},{key:"role",fn:function(t){return[r("ui-badge",[e._v(e._s(t.record.role.label))])]}},{key:"created_at",fn:function(t){return[e._v("\n                "+e._s(e.$moment(t.record.created_at).format("Y-MM-DD"))+"\n            ")]}},{key:"email_verified_at",fn:function(t){return[t.record.email_verified_at?r("ui-badge",{attrs:{variant:"success"}},[e._v("Yes")]):r("ui-badge",{attrs:{variant:"danger"}},[e._v("No")])]}},{key:"actions",fn:function(t){return[r("ui-table-actions",{key:"user_"+t.record.id+"_actions",attrs:{id:"user_"+t.record.id+"_actions"}},[r("ui-dropdown-link",{attrs:{to:{name:"users.show",params:{user:t.record.id}}}},[e._v("View")]),e._v(" "),r("ui-dropdown-link",{attrs:{to:{name:"users.edit",params:{user:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),r("ui-dropdown-divider"),e._v(" "),r("ui-dropdown-link",{attrs:{href:"#"}},[e._v("Resend Verification")]),e._v(" "),r("ui-dropdown-link",{attrs:{href:"#"}},[e._v("Reset Password")]),e._v(" "),t.record.id!=e.user.id?r("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-user",value:t.record,expression:"table.record",arg:"delete-user"}],staticClass:"danger",on:{click:function(e){e.preventDefault()}}},[e._v("\n                        Delete\n                    ")]):e._e()],1)]}}])})],1),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("ui-modal",{attrs:{name:"delete-user",title:"Delete User"},scopedSlots:e._u([{key:"footer",fn:function(t){return[r("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[r("p",[e._v("Are you sure you want to permenantly delete this user?")])])],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);