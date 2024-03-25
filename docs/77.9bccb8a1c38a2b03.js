"use strict";(self.webpackChunkDashBoard=self.webpackChunkDashBoard||[]).push([[77],{8077:(g,m,s)=>{s.r(m),s.d(m,{UserLayoutComponent:()=>x});var p=s(6814),c=s(1120),h=s(8784),t=s(4769),a=s(9483),f=s(7422),e=s(7409);function u(o,C){if(1&o&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.hij(" ",i.wishlistNum," ")}}function d(o,C){if(1&o&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.hij(" ",i.cart," ")}}let v=(()=>{class o{constructor(i,n,r,l){this._AuthService=i,this._CartService=n,this._WishlistService=r,this._Router=l,this.menuOpen=!0,this.userOpen=!0,this.cart=0,this.wishlistNum=0,this.windowWidth=0,this.photo="./assets/images/user.jpg",this.scrolled=!1}toggleNav(){this.menuOpen=!this.menuOpen}togglemenu(){this.userOpen=!this.userOpen}logout(){this._AuthService.logout()}profile(){this._Router.navigate(["/profile"]),this.userOpen=!this.userOpen}setting(){this._Router.navigate(["/setting"]),this.userOpen=!this.userOpen}ngOnInit(){if(localStorage.getItem("eToken")){let i=localStorage.getItem("eToken"),n=(0,h.o)(i);this.Dataaa=n}this._CartService.getUserCart().subscribe({next:i=>{this.cart=i.numOfCartItems}}),this._CartService.cartNubmer.subscribe({next:i=>{this.cart=i}}),this._WishlistService.wishNumber.subscribe({next:i=>{this.wishlistNum=i}}),this._WishlistService.getWishlist().subscribe({next:i=>{this.wishlistNum=i.count}}),this.userOpen=!1,this.photo=localStorage.getItem(this.Dataaa.id)?localStorage.getItem(this.Dataaa.id):"./assets/images/user.jpg"}onWindowScroll(){this.photo=localStorage.getItem(this.Dataaa.id)?localStorage.getItem(this.Dataaa.id):"./assets/images/user.jpg"}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(a.e),t.Y36(f.N),t.Y36(e.M),t.Y36(c.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-nav-user"]],hostBindings:function(n,r){1&n&&t.NdJ("scroll",function(){return r.onWindowScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:39,vars:7,consts:[[1,"py-5","bg-slate-900","fixed","top-0","left-0","right-0","z-40","border-b-4","border-b-red-600","dark:bg-[#313b4b]"],[1,"lg:container","px-3","md:px-0","mx-auto","text-white","flex","items-center","justify-between"],["routerLink","home",1,"tracking-widest","text-3xl","cursor-pointer","font-bold"],[1,"text-red-500"],[1,"links","dark:bg-[#313b4b]"],[1,"flex","md:flex-row","flex-col","items-center","md:gap-[1vw]","gap-6"],["li","",1,"tracking-wide","font-medium","text-1xl","hover:text-gray-500","transition",3,"click"],["routerLink","home"],[1,"tracking-wide","transition","md:ms-6","cursor-pointer","hover:text-gray-500",3,"click"],["routerLink","wishlist",1,"flex","flex-col","items-center"],[1,"fa-regular","fa-heart","text-[20px]","relative",2,"color","#ffffff"],["class","absolute bg-red-600 px-[5px] py-[3px] rounded-full text-[12px] top-[-10px] font-bold",4,"ngIf"],[1,"font-bold","text-[8px]"],[1,"tracking-wide","transition","cursor-pointer","hover:text-gray-500",3,"click"],["routerLink","cart",1,"flex","flex-col","items-center"],[1,"fa-solid","fa-cart-shopping","text-[20px]","relative",2,"color","#ffffff"],[1,"text-center","flex","relative"],[1,"mx-3",3,"click"],["alt","user",1,"w-[40px]","rounded-full",3,"src"],[1,"absolute","top-[50px]","left-[-50px]","w-[150px]","bg-slate-200","dark:bg-slate-950","rounded-lg","text-white","p-3","flex","flex-col","opacity-0"],[1,"py-1","px-3","bg-slate-800","hover:bg-slate-600","transition","rounded-lg","font-bold","my-2",3,"click"],[1,"md:hidden"],[3,"click"],[1,"fa-solid","fa-bars","text-3xl",2,"color","#ffffff"],[1,"absolute","bg-red-600","px-[5px]","py-[3px]","rounded-full","text-[12px]","top-[-10px]","font-bold"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div")(3,"h1",2),t._uU(4," STORE"),t.TgZ(5,"span",3),t._uU(6,"."),t.qZA()()(),t.TgZ(7,"div",4)(8,"ul",5)(9,"li",6),t.NdJ("click",function(){return r.toggleNav()}),t.TgZ(10,"a",7),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",8),t.NdJ("click",function(){return r.toggleNav()}),t.TgZ(13,"span",9)(14,"span")(15,"i",10),t.YNc(16,u,2,1,"span",11),t.qZA()(),t.TgZ(17,"span",12),t._uU(18,"Your Wishlist"),t.qZA()()(),t.TgZ(19,"li",13),t.NdJ("click",function(){return r.toggleNav()}),t.TgZ(20,"span",14)(21,"span")(22,"i",15),t.YNc(23,d,2,1,"span",11),t.qZA()(),t.TgZ(24,"span",12),t._uU(25,"Your Cart"),t.qZA()()()()(),t.TgZ(26,"div",16)(27,"button",17),t.NdJ("click",function(){return r.togglemenu()}),t._UZ(28,"img",18),t.qZA(),t.TgZ(29,"div",19)(30,"button",20),t.NdJ("click",function(){return r.profile()}),t._uU(31," Profile "),t.qZA(),t.TgZ(32,"button",20),t.NdJ("click",function(){return r.setting()}),t._uU(33," Setting "),t.qZA(),t.TgZ(34,"button",20),t.NdJ("click",function(){return r.logout()}),t._uU(35," Sign Out "),t.qZA()(),t.TgZ(36,"div",21)(37,"button",22),t.NdJ("click",function(){return r.toggleNav()}),t._UZ(38,"i",23),t.qZA()()()()()),2&n&&(t.xp6(7),t.ekj("hidden",r.menuOpen),t.xp6(9),t.Q6J("ngIf",r.wishlistNum>0),t.xp6(7),t.Q6J("ngIf",r.cart>0),t.xp6(5),t.Q6J("src",r.photo,t.LSH),t.xp6(1),t.ekj("opacity-100",r.userOpen))},dependencies:[p.ez,p.O5,c.rH]})}return o})();var _=s(7913);let x=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-user-layout"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"min-h-[100vh]","pt-[75px]"]],template:function(n,r){1&n&&(t._UZ(0,"app-nav-user"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"))},dependencies:[p.ez,v,c.lC,_.c]})}return o})()},7422:(g,m,s)=>{s.d(m,{N:()=>t});var p=s(5619),c=s(4769),h=s(9862);let t=(()=>{class a{constructor(e){this._HttpClient=e,this.cartNubmer=new p.X(0)}addToCart(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:e})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeItem(e){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${e}`)}updateCount(e,u){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${e}`,{count:u})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart/")}checkOut(e,u){const d=encodeURIComponent("https://mohamed0ahmed.github.io/Fresh-Cart/#");return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${e}?url=${d}`,{shippingAddress:u})}getUserOrders(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${e}`)}static#t=this.\u0275fac=function(u){return new(u||a)(c.LFG(h.eN))};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},7409:(g,m,s)=>{s.d(m,{M:()=>t});var p=s(5619),c=s(4769),h=s(9862);let t=(()=>{class a{constructor(e){this._HttpClient=e,this.wishNumber=new p.X(0),this.wishlistData=[]}addToWishlist(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:e})}getWishlist(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist")}removeWishlist(e){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${e}`)}static#t=this.\u0275fac=function(u){return new(u||a)(c.LFG(h.eN))};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);