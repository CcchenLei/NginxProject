(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a51c79d"],{"40db":function(e,t,s){"use strict";s("fe46")},cee40:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"search"},[s("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入用户名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),s("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.searchUser}},[e._v("查询")]),s("el-button",{attrs:{icon:"el-icon-delete"},on:{click:e.clearSearchData}},[e._v("清空")])],1),s("div",{staticClass:"main"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加")]),s("el-button",{attrs:{type:"danger",disabled:e.selectionUser.length<1},on:{click:e.batchDeleteUser}},[e._v("批量删除")]),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.showLoding,expression:"showLoding"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{border:"",data:e.userList},on:{"selection-change":e.selectUser}},[s("el-table-column",{attrs:{type:"selection",label:"label",width:"60",align:"center"}}),s("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),s("el-table-column",{attrs:{prop:"username",label:"用户名",width:"200",align:"center"}}),s("el-table-column",{attrs:{prop:"nickName",label:"用户昵称",width:"200",align:"center"}}),s("el-table-column",{attrs:{prop:"roleName",label:"权限列表",width:"250",align:"center"}}),s("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间",width:"250",align:"center"}}),s("el-table-column",{attrs:{prop:"gmtModified",label:"更新时间",width:"250",align:"center"}}),s("el-table-column",{attrs:{prop:"operate",label:"操作",width:"width",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("el-button",{attrs:{type:"info",icon:"el-icon-s-custom"},on:{click:function(t){return e.viewRols(a)}}}),s("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(t){return e.editUser(a)}}}),s("el-popconfirm",{attrs:{title:"确定删除该用户吗?"},on:{onConfirm:function(t){return e.deleteUser(a)}}},[s("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)]}}])})],1),s("el-pagination",{staticStyle:{"text-align":"center","margin-top":"5px"},attrs:{"current-page":this.page,"page-sizes":[3,5,8,10],"page-size":this.limit,layout:"prev, pager, next, jumper,->,total,sizes",total:this.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),s("el-dialog",{attrs:{title:e.user.id?"修改用户":"添加用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:e.closeUserDialog}},[s("el-form",{attrs:{"label-width":"100px",model:e.user}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),s("el-form-item",{attrs:{label:"用户昵称"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off"},model:{value:e.user.nickName,callback:function(t){e.$set(e.user,"nickName",t)},expression:"user.nickName"}})],1),e.user.id?e._e():s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.cancel}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{visible:e.showRoleDialog},on:{"update:visible":function(t){e.showRoleDialog=t},closed:e.closeRoleDialog}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{disabled:!0},model:{value:e.roleNmae,callback:function(t){e.roleNmae=t},expression:"roleNmae"}})],1),s("el-form-item",{attrs:{label:"角色列表"}},[s("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.checkAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),s("div",{staticStyle:{margin:"15px 0"}}),s("el-checkbox-group",{on:{change:e.checkChange},model:{value:e.checkedPower,callback:function(t){e.checkedPower=t},expression:"checkedPower"}},e._l(e.power,(function(t){return s("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.roleName))])})),1)],1),s("el-form-item",[s("el-button",{staticStyle:{"margin-top":"10px"},attrs:{icon:"el-icon-refresh-right"},on:{click:e.returnUser}},[e._v("返回")])],1)],1)],1)],1)},r=[],n=s("5530"),i=s("c7eb"),o=s("1da1"),c=(s("d3b7"),s("159b"),{name:"",data:function(){return{isIndeterminate:!1,checkAll:!1,dialogFormVisible:!1,showRoleDialog:!1,showLoding:!1,Searched:!1,userName:"",page:1,limit:5,total:0,userId:"",userList:[],user:{nickName:"",password:"",username:""},selectionUser:[],power:[],checkedPower:[],roleNmae:""}},methods:{getUserList:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function s(){var a,r,n;return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.limit,r=t.page,s.next=3,t.$API.user.getUserPageList(r,a,e);case 3:n=s.sent,2e4==n.code?(t.showLoding=!1,t.userList=n.data.items,t.total=n.data.total,n.data.items.length<1&&t.$message({type:"warning",message:"抱歉,没有该用户"})):(t.showLoding=!1,t.$$message({type:"warning",message:"稍后再试"}));case 5:case"end":return s.stop()}}),s)})))()},searchUser:function(){this.showLoding=!0,this.Searched=!0,this.getUserList(this.userName)},clearSearchData:function(){""!=this.userName&&(this.Searched?(this.userName="",this.showLoding=!0,this.getUserList()):this.userName="")},sizeChange:function(e){this.limit=e,this.showLoding=!0,this.getUserList()},pageChange:function(e){this.page=e,this.showLoding=!0,this.getUserList()},addUser:function(){this.dialogFormVisible=!0},editUser:function(e){this.dialogFormVisible=!0,this.user=Object(n["a"])({},e)},cancel:function(){this.dialogFormVisible=!1,this.user=this.$options.data().user},saveUser:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var s,a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.user.id){t.next=7;break}return t.next=3,e.$API.user.updateUser(e.user);case 3:s=t.sent,2e4==s.code&&e.$message({type:"success",message:"修改成功"}),t.next=11;break;case 7:return t.next=9,e.$API.user.addUser(e.user);case 9:a=t.sent,2e4==a.code&&e.$message({type:"success",message:"添加成功"});case 11:e.dialogFormVisible=!1,e.showLoding=!0,e.getUserList(),e.user=e.$options.data().user;case 15:case"end":return t.stop()}}),t)})))()},closeUserDialog:function(){this.cancel()},deleteUser:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function s(){var a;return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$API.user.deleteUser(e.id);case 2:a=s.sent,2e4==a.code?(t.showLoding=!0,t.getUserList(),t.$message({type:"success",message:"删除成功"})):t.$message({type:"error",message:"删除失败"});case 4:case"end":return s.stop()}}),s)})))()},batchDeleteUser:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var s,a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=[],e.selectionUser.forEach((function(e){s.push(e.id)})),t.next=4,e.$API.user.ByIdBatchDeleteUser(s);case 4:a=t.sent,2e4==a.code?e.$message({type:"success",message:"批量删除成功"}):e.$message({type:"error",message:"批量删除失败,请稍后再试"}),e.showLoding=!0,e.getUserList();case 8:case"end":return t.stop()}}),t)})))()},selectUser:function(e){this.selectionUser=e},checkAllChange:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function s(){var a;return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.isIndeterminate=!1,e?(t.checkedPower=[],t.power.forEach((function(e){t.checkedPower.push(e.id)}))):t.checkedPower=[],s.next=4,t.$API.user.roleDoAssignPower({roleIdList:t.checkedPower,userId:t.userId});case 4:a=s.sent,2e4==a.code?(t.checkedPower.length<1?t.$message({type:"success",message:"所有权限已取消选择"}):t.$message({type:"success",message:"所有权限已选择"}),t.getUserList()):t.$message({type:"error",message:"设置失败"});case 6:case"end":return s.stop()}}),s)})))()},checkChange:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function s(){var a,r;return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.length,t.checkAll=a===t.power.length,t.isIndeterminate=a>0&&a<t.power.length,s.next=5,t.$API.user.roleDoAssignPower({roleIdList:e,userId:t.userId});case 5:r=s.sent,2e4==r.code?(t.$message({type:"success",message:"权限设置成功"}),t.getUserList()):t.$message({type:"error",message:"权限设置失败"});case 7:case"end":return s.stop()}}),s)})))()},viewRols:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function s(){var a;return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.roleNmae=e.username,t.showRoleDialog=!0,s.next=4,t.$API.user.ByUserGetRoleData(e.id);case 4:a=s.sent,console.log(a),2e4==a.code&&(t.power=a.data.allRolesList,a.data.assignRoles.forEach((function(e){t.checkedPower.push(e.id)})),t.userId=e.id,t.checkAll=t.checkedPower.length===t.power.length,t.isIndeterminate=t.checkedPower.length>0&&t.checkedPower<t.power.length);case 7:case"end":return s.stop()}}),s)})))()},closeRoleDialog:function(){this.power=this.$options.data().power,this.checkedPower=this.$options.data().checkedPower,this.isIndeterminate=this.$options.data().isIndeterminate,this.userId=this.$options.data().userId},returnUser:function(){this.showRoleDialog=!1,this.closeRoleDialog()}},mounted:function(){this.showLoding=!0,this.getUserList()}}),l=c,u=(s("40db"),s("2877")),d=Object(u["a"])(l,a,r,!1,null,"3a1ccebb",null);t["default"]=d.exports},fe46:function(e,t,s){}}]);