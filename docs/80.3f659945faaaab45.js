"use strict";(self.webpackChunkDashBoard=self.webpackChunkDashBoard||[]).push([[80],{5080:(A,a,n)=>{n.r(a),n.d(a,{WishlistComponent:()=>b});var l=n(6814),d=n(1120),t=n(4769),p=n(7409),h=n(2425),g=n(7422);function x(i,o){1&i&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"div",7)(4,"h2",8),t._uU(5," Your Wishlist is empty. "),t.qZA(),t.TgZ(6,"button",9),t._uU(7," Go To Shopping "),t.qZA()()())}function u(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1," -20% "),t.qZA())}function m(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1," -16% "),t.qZA())}function f(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1," -12% "),t.qZA())}function v(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr",17)(1,"td",18)(2,"i",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.remove(c.id))}),t.qZA()(),t.TgZ(3,"td",20),t._UZ(4,"img",21),t.qZA(),t.TgZ(5,"td",22),t._uU(6),t.qZA(),t.TgZ(7,"td",23),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td",24),t.YNc(11,u,2,0,"span",2),t.YNc(12,m,2,0,"span",2),t.YNc(13,f,2,0,"span",2),t.qZA(),t.TgZ(14,"td",18)(15,"button",25),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.addCart(c.id))}),t._uU(16," Add + "),t.qZA()()()}if(2&i){const e=o.$implicit;t.xp6(4),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(2),t.hij(" ",e.title.split(" ").slice(0,3).join(" ")," "),t.xp6(2),t.hij(" ",t.xi3(9,7,e.price," EGP ")," "),t.xp6(3),t.Q6J("ngIf",e.price>3e3),t.xp6(1),t.Q6J("ngIf",e.price<3e3&&e.price>1500),t.xp6(1),t.Q6J("ngIf",e.price<1500)}}function Z(i,o){if(1&i&&(t.TgZ(0,"div")(1,"div",10)(2,"table",11)(3,"thead",12)(4,"tr",13)(5,"th",14),t._uU(6,"DELETE"),t.qZA(),t.TgZ(7,"th",14),t._uU(8,"IMAGE"),t.qZA(),t.TgZ(9,"th",14),t._uU(10,"PRODUCT"),t.qZA(),t.TgZ(11,"th",14),t._uU(12,"PRICE"),t.qZA(),t.TgZ(13,"th",14),t._uU(14,"SALE"),t.qZA(),t.TgZ(15,"th",14),t._uU(16,"ADD TO CART"),t.qZA()()(),t.TgZ(17,"tbody",15),t.YNc(18,v,17,10,"tr",16),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(18),t.Q6J("ngForOf",e.productData)}}function T(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"div")(3,"i",30),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.remove(c.id))}),t.qZA()(),t.TgZ(4,"div",17)(5,"h2",31),t._uU(6),t.qZA(),t._UZ(7,"img",32),t.qZA(),t.TgZ(8,"div",33)(9,"h2",34),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"h2",34),t._uU(13,"20% SALE"),t.qZA()(),t.TgZ(14,"div")(15,"button",25),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.addCart(c.id))}),t._uU(16," ADD "),t.qZA()()()()}if(2&i){const e=o.$implicit;t.xp6(6),t.hij(" ",e.title.split(" ").slice(0,2).join(" ")," "),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(3),t.hij(" ",t.xi3(11,4,e.price," EGP ")," ")}}function C(i,o){if(1&i&&(t.TgZ(0,"div",26),t.YNc(1,T,17,7,"div",27),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.productData)}}let b=(()=>{class i{constructor(e,s,r){this._WishlistService=e,this._toastr=s,this._CartService=r,this.productData=[],this.numberOfItems=0}ngOnInit(){this._WishlistService.getWishlist().subscribe({next:e=>{console.log(e),this.productData=e.data,this.numberOfItems=e.count}})}remove(e){this._WishlistService.removeWishlist(e).subscribe({next:s=>{console.log(s),this._toastr.success(s.message),this._WishlistService.wishNumber.next(s.data.length),this.productData=this.productData.filter(r=>r._id!==e),this.numberOfItems=this.productData.length}})}addCart(e){this._CartService.addToCart(e).subscribe({next:s=>{console.log(s),console.log(s.numOfCartItems),this._toastr.success(s.message),this._CartService.cartNubmer.next(s.numOfCartItems)},error:s=>{console.log(s)}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(p.M),t.Y36(h._W),t.Y36(g.N))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"pt-[10px]","container","mx-auto"],["class","flex flex-col lg:flex-row items-center justify-center pt-12 h-[70vh]",4,"ngIf"],[4,"ngIf"],["class","md:hidden",4,"ngIf"],[1,"flex","flex-col","lg:flex-row","items-center","justify-center","pt-12","h-[70vh]"],[1,"lg:w-[60%]"],["src","./assets/images/22676355_80_cmVtb3RlX3dvcmtpbmctMDg-removebg-preview.png","alt","svg",1,"w-full"],[1,"pt-12","text-center"],[1,"font-extrabold","text-[30px]","text-slate-700","dark:text-white"],["routerLink","/home",1,"btn","bg-red-700","hover:bg-red-500","font-bold","text-white"],[1,"overflow-auto","rounded-lg","shadow","hidden","md:block"],[1,"w-full"],[1,"bg-gray-300","border-b-2","border-red-600","dark:text-white","dark:bg-slate-700"],[1,""],[1,"p-3","text-[20px]","font-bold","tracking-wide"],[1,"bg-gray-100","dark:bg-[#111111]","h-[80vh]"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],[1,"p-3","text-[16px]","text-gray-700"],[1,"fa-solid","fa-trash","fa-lg","text-red-500","cursor-pointer",3,"click"],[1,"p-3"],[1,"w-[100px]","h-[100px]","relative","left-[20px]","2xl:left-[35px]",3,"src","alt"],[1,"p-3","text-[20px]","font-bold","text-gray-700","dark:text-white"],[1,"p-3","text-[16px]","text-red-500","font-bold","dark:text-white"],[1,"p-3","text-red-500","text-[20px]","font-extrabold","dark:text-white"],[1,"btn","bg-red-600","hover:bg-red-500","text-white",3,"click"],[1,"md:hidden"],["class","bg-white p-4 rounded-lg shadow dark:bg-[#1e1e1e]",4,"ngFor","ngForOf"],[1,"bg-white","p-4","rounded-lg","shadow","dark:bg-[#1e1e1e]"],[1,"flex","items-center","justify-between"],[1,"fa-solid","fa-trash","fa-lg","m-2","cursor-pointer",2,"color","#d74747",3,"click"],[1,"text-black","font-bold","dark:text-white"],[1,"w-[100px]","h-[100px]",3,"src","alt"],[1,"text-center","text-red-500","dark:text-white"],[1,"font-bold"]],template:function(s,r){1&s&&(t.TgZ(0,"section",0),t.YNc(1,x,8,0,"div",1),t.YNc(2,Z,19,1,"div",2),t.YNc(3,C,2,1,"div",3),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",0==r.productData.length),t.xp6(1),t.Q6J("ngIf",0!=r.productData.length),t.xp6(1),t.Q6J("ngIf",0!=r.productData.length))},dependencies:[l.ez,l.sg,l.O5,l.H9,d.rH]})}return i})()}}]);