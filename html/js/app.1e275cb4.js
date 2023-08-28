(function(){"use strict";var t={3183:function(t,e,a){var r={};a.r(r),a.d(r,{reqBanner:function(){return Z},reqCheckedAllCart:function(){return Q},reqCheckedSomeCart:function(){return Y},reqFloors:function(){return F},reqGetShopCartList:function(){return M},reqLogout:function(){return at},reqOrderList:function(){return it},reqOrderPayInfo:function(){return nt},reqOrderTrade:function(){return rt},reqProductDatail:function(){return B},reqProductList:function(){return q},reqRegisterCode:function(){return W},reqRegisterUesr:function(){return X},reqRemoveChoiseCartList:function(){return V},reqRemoveShopCart:function(){return z},reqSearchList:function(){return K},reqSubmitOrder:function(){return st},reqUserInfo:function(){return et},reqUserLogin:function(){return tt},reqaddShopCart:function(){return J},reqmockAddress:function(){return ot}});var o=a(7754),s=a.n(o),n=a(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.isShow,expression:"$route.meta.isShow"}]})],1)},c=[],l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userInfo.name?e("p",[e("span",{staticStyle:{color:"#ea4a36"}},[t._v(t._s(t.userInfo.name))]),t._v("    "),e("a",{staticClass:"register",attrs:{href:"javascript:;"},on:{click:t.logOut}},[t._v("退出")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/Login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/Register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/Center"}},[t._v("订单中心")]),e("router-link",{attrs:{to:"/ShopCart"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/Home"}},[e("img",{attrs:{src:a(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{onsubmit:"return false;"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{autocomplete:"off",type:"text"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keygoSearch.apply(null,arguments)},click:t.openHistoryList,blur:t.clearHistoryList,input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v(" 搜索")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"inputHistory"},[t._l(this.searchData,(function(a,r){return e("ul",{key:r},[r<6?e("li",{on:{click:function(e){return t.historygoSearch(a)},mouseenter:t.openHistoryList}},[t._v(" "+t._s(a)+" "),e("i",{staticClass:"searchjilu"},[t._v("搜索记录")]),e("i",{staticClass:"remove",on:{click:function(e){return t.removeHistory(e,r)}}},[t._v("删除")])]):t._e()])})),e("li",{staticClass:"allDataRemove",on:{click:t.allDataRemove}},[t._v("全部删除")])],2)])])])])])},u=[],d=(a(7658),a(541),a(3822)),p={name:"HeaderCV",data(){return{keyword:"",searchData:{},isShow:!1,showI:!0}},methods:{goSearch(){if(""!=this.keyword&&void 0!=this.keyword&&null!=this.keyword){let t={name:"search",params:{keyword:this.keyword}};t.query=this.$route.query,this.$router.push(t),this.addDataToLocalstorage(),this.isShow=!1}else alert("抱歉输入不能为空")},keygoSearch(){this.goSearch()},historygoSearch(t){this.keyword=t,this.goSearch()},openHistoryList(){this.searchData.length>0||this.searchData.size>0?this.isShow=!0:this.isShow=!1},clearHistoryList(){setTimeout((()=>{this.isShow=!1}),200)},addDataToLocalstorage(){this.searchData=JSON.parse(localStorage.getItem("SEARCHDATA"))||[],this.searchData.unshift(this.keyword),this.searchData=new Set(this.searchData),localStorage.setItem("SEARCHDATA",JSON.stringify(Array.from(this.searchData)))},removeHistory(t,e){t.stopPropagation();let a=Array.from(this.searchData);this.searchData=a.splice(e,1),this.searchData=a,localStorage.setItem("SEARCHDATA",JSON.stringify(this.searchData))},allDataRemove(){localStorage.removeItem("SEARCHDATA"),this.searchData=JSON.parse(localStorage.getItem("SEARCHDATA"))||[]},async logOut(){try{await this.$store.dispatch("Login/Logout")}catch(t){alert(t)}}},mounted(){this.$bus.$on("clearkeyword",(()=>{this.keyword=void 0,delete this.$route.keyword})),this.$bus.$on("addkeyword",(t=>{this.keyword=t})),this.searchData=JSON.parse(localStorage.getItem("SEARCHDATA"))||[]},computed:{...(0,d.rn)("Login",["userInfo"])}},g=p,m=a(1001),h=(0,m.Z)(g,l,u,!1,null,"9b1fe2ac",null),f=h.exports,v=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:a(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])])}],_={name:"FooterCV"},C=_,k=(0,m.Z)(C,v,y,!1,null,null,null),S=k.exports,b={name:"App",components:{Header:f,Footer:S},mounted(){this.$store.dispatch("home/getShopList")}},w=b,I=(0,m.Z)(w,i,c,!1,null,null,null),L=I.exports,E=a(2631),P=[{path:"*",redirect:"/Home"},{path:"/Home",component:()=>Promise.all([a.e(781),a.e(404)]).then(a.bind(a,404)),meta:{isShow:!0,keepAlive:!0}},{path:"/Login",component:()=>a.e(818).then(a.bind(a,818)),meta:{keepAlive:!1}},{path:"/Register",component:()=>a.e(366).then(a.bind(a,5366)),meta:{keepAlive:!1}},{name:"search",path:"/Search/:keyword?",component:()=>a.e(684).then(a.bind(a,5684)),meta:{isShow:!0,keepAlive:!1}},{name:"detail",path:"/Detail/:id?",component:()=>Promise.all([a.e(781),a.e(699)]).then(a.bind(a,699)),meta:{isShow:!0,keepAlive:!1}},{name:"addcartsuccess",path:"/AddCartSuccess/:skuId?",component:()=>a.e(389).then(a.bind(a,6389)),beforeEnter:(t,e,a)=>{-1!==e.path.indexOf("/Detail")||-1!==e.path.indexOf("/Login")||-1!==e.path.indexOf("Search")?a():a(!1)}},{name:"shopcart",path:"/ShopCart/:Num?",component:()=>a.e(498).then(a.bind(a,7498))},{path:"/Center",component:()=>Promise.all([a.e(934),a.e(197)]).then(a.bind(a,2197)),redirect:"/Center/Myorder",children:[{name:"myorder",path:"Myorder",component:()=>Promise.all([a.e(934),a.e(103)]).then(a.bind(a,9103))},{name:"teamorder",path:"Teamorder",component:()=>Promise.all([a.e(934),a.e(851)]).then(a.bind(a,851))}]},{path:"/Pay",component:()=>a.e(491).then(a.bind(a,4491))},{path:"/PaySuccess",component:()=>a.e(99).then(a.bind(a,8099)),beforeEnter:(t,e,a)=>{-1!==e.path.indexOf("/Pay")||-1!==e.path.indexOf("/Login")?a():a(!1)}},{path:"/Trade",component:()=>a.e(171).then(a.bind(a,9171)),beforeEnter:(t,e,a)=>{-1!==e.path.indexOf("/ShopCart")||-1!==e.path.indexOf("/Login")||"/"==e.path?a():a(!1)}}],T=a(4311),O=a(536);const A=()=>{let t=localStorage.getItem("UUID_TOKEN")||(0,O.Z)();return localStorage.setItem("UUID_TOKEN",t),t},N=()=>localStorage.getItem("TOKEN"),D=t=>{localStorage.setItem("TOKEN",t)},x=()=>{localStorage.removeItem("TOKEN")};var R=a(530),j=a.n(R);const U=T.Z.create({baseURL:"/api",timeout:5e3});U.interceptors.request.use((t=>(j().start(),t.headers.userTempId=A(),t.headers.token=Xt.state.Login.token,t))),U.interceptors.response.use((t=>(j().done(),t.data)),(t=>console.log(t)));var $=U;const H=T.Z.create({baseURL:"/mock",timeout:1e4});H.interceptors.request.use((t=>t)),H.interceptors.response.use((t=>t.data),(t=>console.log(t)));var G=H;const q=()=>$({url:"/product/getBaseCategoryList",method:"get"}),Z=()=>G.get("/banner"),F=()=>G.get("/floors"),K=t=>$.post("/list",t),B=t=>$.get(`/item/${t}`),J=(t,e)=>$({url:`/cart/addToCart/${t}/${e}`,method:"post"}),M=()=>$.get("/cart/cartList"),z=t=>$["delete"](`/cart/deleteCart/${t}`),V=t=>$.post("/cart/batchDeleteCart",t),Y=(t,e)=>$.get(`/cart/checkCart/${t}/${e}`),Q=(t,e)=>$.post(`/cart/batchCheckCart/${t}`,e),W=t=>$.get(`/user/passport/sendCode/${t}`),X=t=>$.post("/user/passport/register",t),tt=t=>$.post("/user/passport/login",t),et=()=>$.get("/user/passport/auth/getUserInfo"),at=()=>$.get("/user/passport/logout"),rt=()=>$.get("/order/auth/trade"),ot=()=>G.get("/address"),st=(t,e)=>$.post(`/order/auth/submitOrder?tradeNo=${t}`,e),nt=t=>$.get(`/payment/weixin/createNative/${t}`),it=(t,e)=>$.get(`/order/auth/${t}/${e}`),ct={async getShopList(t){let e=await q();200==e.code&&t.commit("GETSHOPLIST",e.data)},async getBanner(t){let e=await Z();200==e.code&&t.commit("GETBANNER",e.data)},async getFloor(t){let e=await F();200==e.code&&t.commit("GETFLOOR",e.data)}},lt={GETSHOPLIST(t,e){t.shoplist=e},GETBANNER(t,e){t.bannerdata=e},GETFLOOR(t,e){t.floordata=e}},ut={shoplist:[],bannerdata:[],floordata:[]},dt={};var pt={namespaced:!0,actions:ct,mutations:lt,state:ut,getters:dt};const gt={async getSearchList(t,e){const a=await K(e);200==a.code&&t.commit("GETSEARCHLIST",a.data)}},mt={GETSEARCHLIST(t,e){t.searchData=e}},ht={searchData:[],uuid_token:A()},ft={attrsList(t){return t.searchData.attrsList||[]},goodsList(t){return t.searchData.goodsList||[]},trademarkList(t){return t.searchData.trademarkList||[]},Pagination(t){let{pageNo:e,pageSize:a,total:r,totalPages:o}=t.searchData;return{pageNo:e,pageSize:a,total:r,totalPages:o}}};var vt={namespaced:!0,actions:gt,mutations:mt,state:ht,getters:ft};const yt={async getProductDatail(t,e){const a=await B(e);200==a.code&&t.commit("GETPRODUCTDATAIL",a.data)}},_t={GETPRODUCTDATAIL(t,e){t.productDatail=e}},Ct={productDatail:{}},kt={categoryView(){return Ct.productDatail.categoryView||{}},skuInfo(){return Ct.productDatail.skuInfo||{}},spuSaleAttrList(){return Ct.productDatail.spuSaleAttrList||{}}};var St={namespaced:!0,actions:yt,mutations:_t,state:Ct,getters:kt};const bt={async addDataShopCart(t,{skuId:e,skuNum:a}){const r=await J(e,a);return console.log(r),200==r.code?"ok":Promise.reject("fail")},async getShopCartList(t){let e=await M();console.log(e),200==e.code&&t.commit("GETSHOPCARTLIST",e.data)},async removeShopCart(t,e){const a=await z(e);if(200==a.code)return"ok";Promise.reject("fail")},async removeChoiseShopList(t,e){let a=await V(e);return console.log(a),200==a.code?"ok":Promise.reject("fail")},async CheckedSomeShopping(t,{skuId:e,isChecked:a}){const r=await Y(e,a);return 200==r.code?"ok":Promise.reject("fail")},async CheckAllShopping(t,{isChecked:e,skuIdList:a}){let r=await Q(e,a);return console.log(e),console.log(a),200==r.code?"ok":Promise.reject("fail")}},wt={GETSHOPCARTLIST(t,e){t.shopcartlist=e}},It={shopcartlist:[]},Lt={cartList(t){return t.shopcartlist[0]||[]}};var Et={namespaced:!0,actions:bt,mutations:wt,state:It,getters:Lt};const Pt={async getOrderTrade(t){let e=await rt();return 200==e.code?(t.commit("GETORDER_TRADE",e.data),"ok"):Promise.reject("fail")},async getMockAddress(t){let e=await ot();200==e.code&&t.commit("GETMOCK_ADDRESS",e.data)},async getSubmitOrder(t,{tradeNo:e,orderDetails:a}){let r=await st(e,a);return console.log(r),200==r.code?r.data:Promise.reject("提交失败")}},Tt={GETORDER_TRADE(t,e){t.ordertrade=e},GETMOCK_ADDRESS(t,e){t.useraddres=e}},Ot={ordertrade:{},useraddres:[]},At={detailArrayList(t){return t.ordertrade.detailArrayList||[]},tradeTotalInfo(t){return{totalNum:t.ordertrade.totalNum||[],totalAmount:t.ordertrade.totalAmount||[],tradeNo:t.ordertrade.tradeNo||[]}}};var Nt={namespaced:!0,actions:Pt,mutations:Tt,state:Ot,getters:At};const Dt={async getOrderList(t,{page:e,limit:a}){let r=await it(e,a);if(200!=r.code)return Promise.reject("获取订单列表失败");t.commit("GETORDER_LIST",r.data)}},xt={GETORDER_LIST(t,e){t.orderlist=e}},Rt={orderlist:{}},jt={};var Ut={namespaced:!0,actions:Dt,mutations:xt,state:Rt,getters:jt};const $t={async getRegisterCode(t,e){const a=await W(e);if(200==a.code)return t.commit("GETREGISTERCODE",a.data),a.data},async RegisterUser(t,e){let a=await X(e);return console.log(a),200==a.code?"注册成功!":223==a.code?"手机号码已被注册!":Promise.reject("注册失败!")}},Ht={GETREGISTERCODE(t,e){t.regitercode=e}},Gt={regitercode:[]},qt={};var Zt={namespaced:!0,actions:$t,mutations:Ht,state:Gt,getters:qt};const Ft={async UserLogin(t,e){let a=await tt(e);return 200==a.code?(t.commit("USER_LOGIN",a.data.token),D(a.data.token),"ok"):Promise.reject("登录错误")},async getUserInfo(t){let e=await et();if(200!=e.code)return Promise.reject("获取失败");t.commit("GETUSERTOKEN",e.data)},async Logout(t){let e=await at();return 200==e.code?(t.commit("CLEAR_TOKEN"),"ok"):Promise.reject("fail")}},Kt={USER_LOGIN(t,e){t.token=e},GETUSERTOKEN(t,e){t.userInfo=e},CLEAR_TOKEN(t){t.token="",t.userInfo={},x()}},Bt={token:N(),userInfo:{}},Jt={};var Mt={namespaced:!0,actions:Ft,mutations:Kt,state:Bt,getters:Jt};const zt={async getOrderPayInfo(t,e){let a=await nt(e);if(200!=a.code)return Promise.reject("获取订单支付信息失败");t.commit("GETORDER_PAYINFO",a.data)}},Vt={GETORDER_PAYINFO(t,e){t.payinfo=e}},Yt={payinfo:{}},Qt={};var Wt={namespaced:!0,actions:zt,mutations:Vt,state:Yt,getters:Qt};n["default"].use(d.ZP);var Xt=new d.ZP.Store({modules:{home:pt,search:vt,datail:St,ShopCart:Et,Trade:Nt,Center:Ut,register:Zt,Login:Mt,Pay:Wt}});n["default"].use(E.ZP);const te=E.ZP.prototype.push;E.ZP.prototype.push=function(t){return te.call(this,t).catch((t=>t))};const ee=new E.ZP({routes:P,scrollBehavior(){return{y:0}}});ee.beforeEach((async(t,e,a)=>{let r=Xt.state.Login.token,o=Xt.state.Login.userInfo;if(r)if("/Login"==t.path)a("/");else if(o.name)a();else try{await Xt.dispatch("Login/getUserInfo"),a()}catch(s){await Xt.dispatch("Login/Logout"),a()}else-1!==t.path.indexOf("/Trade")||-1!==t.path.indexOf("/Pay")||-1!==t.path.indexOf("/Center")?(n["default"].prototype.$message({message:"您还未登录，请登录",center:!0,type:"warning"}),setTimeout((()=>{a("/Login?wantPath="+t.path)}),500)):a()}));var ae=ee,re=a(7634),oe=a.n(re),se=JSON.parse('[{"id":"1","imgUrl":"/images/九转大肠.jpg"},{"id":"2","imgUrl":"/images/小黑子1.jpg"},{"id":"3","imgUrl":"/images/卖瓜.jpg"},{"id":"4","imgUrl":"/images/banner1.jpg"},{"id":"5","imgUrl":"/images/banner2.jpg"},{"id":"6","imgUrl":"/images/banner3.jpg"}]'),ne=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门电器"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴","4K摄影","话费充值","HITI礼包","以旧换新","热门产品"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门手机"},{"url":"#","text":"智能手机"},{"url":"#","text":"平板电脑"},{"url":"#","text":"5G流量卡"},{"url":"#","text":"移动路由器"},{"url":"#","text":"老人手机"},{"url":"#","text":"手机维修"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]'),ie=JSON.parse('[{"consignee":"耳东木白人壬","fullAddress":"广东省湛江市廉江市塘山东一横巷9号","id":1,"isDefault":"1","isSelected":"1","phoneNum":"15218254132","provinceId":1,"regionId":1,"userAddress":"廉江市塘山东一横巷9号","userId":1},{"consignee":"余涛","fullAddress":"青岛猪肠省美食市九转大肠103号房","id":2,"isDefault":"0","isSelected":"0","phoneNum":"1366666666","provinceId":2,"regionId":2,"userAddress":"美食市九转大肠103号房","userId":2},{"consignee":"干嘛坤","fullAddress":"华盛顿篮球街Rap大街2路14号","id":3,"isDefault":"0","isSelected":"0","phoneNum":"ikun520666","provinceId":3,"regionId":3,"userAddress":"喜欢唱跳rap的屑","userId":3}]');oe().mock("/mock/banner",{code:200,data:se}),oe().mock("/mock/floors",{code:200,data:ne}),oe().mock("/mock/address",{code:200,data:ie});var ce=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.changePage(t.pageNo-1)}}},[e("i",[t._v(" < ")]),t._v(" 上一页 ")]),this.SEpage.start>1?e("button",{on:{click:function(e){return t.changePage(1)}}},[t._v("1")]):t._e(),this.SEpage.start>2?e("button",{staticClass:"active"},[t._v("•••")]):t._e(),t._l(this.TacklePage,(function(a,r){return e("button",{key:r,class:{active:t.pageNo==a},on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])})),this.SEpage.end<t.totalPages-1?e("button",{staticClass:"active"},[t._v("•••")]):t._e(),this.SEpage.end<t.totalPages?e("button",{on:{click:function(e){return t.changePage(t.totalPages)}}},[t._v(" "+t._s(t.totalPages)+" ")]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPages},on:{click:function(e){return t.changePage(t.pageNo+1)}}},[t._v(" 下一页 "),e("i",[t._v(" > ")])]),e("button",{staticClass:"cancelBtn",staticStyle:{"margin-left":"30px"}},[t._v(" 共 "+t._s(t.total)+" 条  到第 "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPage,expression:"inputPage"}],attrs:{type:"text"},domProps:{value:t.inputPage},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyCodeEmit.apply(null,arguments)},input:function(e){e.target.composing||(t.inputPage=e.target.value)}}}),t._v(" 页 ")]),e("button",{on:{click:function(e){return t.changePage(t.inputPage)}}},[t._v("确定")])],2)},le=[],ue={name:"Pagination",data(){return{inputPage:"1"}},props:["continues","pageNo","totalPages","changePageNo","pageSize","total"],computed:{SEpage(){const{totalPages:t,pageNo:e}=this;let a,r=0;return this.continues>t?(a=1,r=t):(a=e-parseInt(this.continues/2),r=e+parseInt(this.continues/2),a<1&&(a=1,r=this.continues),r>t&&(a=t-this.continues+1,r=t)),{start:a,end:r}},TacklePage(){let{start:t,end:e}=this.SEpage,a=[];for(let r=t;r<=e;r++)a.push(r);return a}},methods:{changePage(t){this.inputPage=t,t<=0||t>this.totalPages?alert("很抱歉，没有此页"):t!=this.pageNo&&this.$emit("changePageNo",t)},keyCodeEmit(){this.changePage(this.inputPage)}}},de=ue,pe=(0,m.Z)(de,ce,le,!1,null,"088bef5a",null),ge=pe.exports,me=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"all",on:{mouseenter:t.OpenList,mouseleave:t.CloseList}},[t._v(" 全部商品分类 ")]),t._m(0),e("transition",{attrs:{name:"sortActive"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort",on:{mouseenter:t.OpenList,mouseleave:t.CloseList}},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.shoplist,(function(a){return e("div",{key:a.categoryId,staticClass:"item"},[e("h3",[e("a",{attrs:{"data-Name":a.categoryName,"data-ID1":a.categoryId}},[t._v(t._s(a.categoryName))])]),e("div",{staticClass:"item-list clearfix"},t._l(a.categoryChild,(function(a){return e("div",{key:a.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-Name":a.categoryName,"data-ID2":a.categoryId}},[t._v(t._s(a.categoryName))])]),e("dd",t._l(a.categoryChild,(function(a){return e("em",{key:a.categoryId},[e("a",{attrs:{"data-Name":a.categoryName,"data-ID3":a.categoryId}},[t._v(t._s(a.categoryName))])])})),0)])])})),0)])})),0)])])],1)])])},he=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"javascript:;"}},[t._v("服装城")]),e("a",{attrs:{href:"javascript:;"}},[t._v("美妆馆")]),e("a",{attrs:{href:"javascript:;"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"javascript:;"}},[t._v("全球购")]),e("a",{attrs:{href:"javascript:;"}},[t._v("闪购")]),e("a",{attrs:{href:"javascript:;"}},[t._v("团购")]),e("a",{attrs:{href:"javascript:;"}},[t._v("有趣")]),e("a",{attrs:{href:"javascript:;"}},[t._v("秒杀")])])}],fe={name:"TypeNav",data(){return{show:!0}},mounted(){"/Home"!=this.$route.path&&(this.show=!1)},computed:{...(0,d.rn)("home",["shoplist"])},methods:{goSearch(t){let e=t.target,{name:a,id1:r,id2:o,id3:s}=e.dataset;if(a){let t={name:"search"},e={categoryName:a};r?e.category1Id=r:o?e.category2Id=o:e.category3Id=s,this.$route.params&&(t.params=this.$route.params,t.query=e,this.$router.push(t))}},OpenList(){"/Home"!=this.$route.path&&(this.show=!0)},CloseList(){"/Home"!=this.$route.path&&(this.show=!1)}}},ve=fe,ye=(0,m.Z)(ve,me,he,!1,null,null,null),_e=ye.exports,Ce={install(t){t.component("Pagination",ge),t.component("TypeNav",_e)}},ke=a(6112);n["default"].use(s()),n["default"].use(Ce),n["default"].use(r);const Se=a(2839),be=a(4232);n["default"].use(ke.ZP,{preLoad:1.3,error:be,loading:Se}),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(L),beforeCreate(){n["default"].prototype.$bus=this,n["default"].prototype.$API=r},router:ae,store:Xt}).$mount("#app")},2839:function(t,e,a){t.exports=a.p+"img/minbalckson.a58cc668.jpg"},4232:function(t,e,a){t.exports=a.p+"img/yutao.f07ca718.jpg"},2552:function(t,e,a){t.exports=a.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,a){t.exports=a.p+"img/logo.d600ca2b.png"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(i=!1,s<n&&(n=s));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{99:"0ca6f2fa",103:"5ddf7eac",171:"60880736",197:"6271e443",366:"fcb6c7d3",389:"83e7c207",404:"6ff06090",491:"90a90964",498:"6d6b44d6",684:"c83799de",699:"bf653119",781:"36f47eb9",818:"25749256",851:"1b841b49",934:"b75d57cc"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{99:"39b4a9a9",103:"68d6b1d4",171:"58c098c6",197:"b6436704",366:"9a1e72d8",389:"0dba8e78",404:"a3b43116",491:"4688872a",498:"dac9d2e9",684:"dbcd8af5",699:"e914517b",818:"4bf70afe"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue:";a.l=function(r,o,s,n){if(t[r])t[r].push(o);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+s),i.src=r),t[r]=[o];var p=function(e,a){i.onerror=i.onload=null,clearTimeout(g);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(a)})),e)return e(a)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(a){if(s.onerror=s.onload=null,"load"===a.type)r();else{var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=n,s.href=e,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){o=n[r],s=o.getAttribute("data-href");if(s===t||s===e)return o}},r=function(r){return new Promise((function(o,s){var n=a.miniCssF(r),i=a.p+n;if(e(n,i))return o();t(r,i,null,o,s)}))},o={143:0};a.f.miniCss=function(t,e){var a={99:1,103:1,171:1,197:1,366:1,389:1,404:1,491:1,498:1,684:1,699:1,818:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,r){var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(a,r){o=t[e]=[a,r]}));r.push(o[2]=s);var n=a.p+a.u(e),i=new Error,c=function(r){if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};a.l(n,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,n=r[0],i=r[1],c=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(e&&e(r);l<n.length;l++)s=n[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3183)}));r=a.O(r)})();