"use strict";(self.webpackChunkDashBoard=self.webpackChunkDashBoard||[]).push([[290],{5290:(f,p,c)=>{c.r(p),c.d(p,{CartComponent:()=>U});var u=c(6814),m=c(1120),t=c(4769),g=c(7422),_=c(2425);function h(r,a){1&r&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"div",7)(4,"h2",8),t._uU(5," Your Cart is empty. "),t.qZA(),t.TgZ(6,"button",9),t._uU(7," Go To Shopping "),t.qZA()()())}function i(r,a){1&r&&(t.ynx(0),t._UZ(1,"i",21),t.BQk())}function d(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div")(3,"i",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.removeCartItem(s.product._id))}),t.qZA()(),t.TgZ(4,"div",15)(5,"h2",16),t._uU(6),t.qZA(),t._UZ(7,"img",17),t.qZA(),t.TgZ(8,"div",18)(9,"h2",19),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"h2",19),t._uU(13,"20% SALE"),t.qZA()(),t.TgZ(14,"div")(15,"span"),t.YNc(16,i,2,0,"ng-container",20),t.qZA()()()()}if(2&r){const e=a.$implicit,o=t.oxw(2);t.xp6(6),t.hij(" ",e.product.title.split(" ").slice(0,2).join(" ")," "),t.xp6(1),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(3),t.hij(" ",t.xi3(11,5,e.price," EGP ")," "),t.xp6(6),t.Q6J("ngForOf",o.generateRatingArray(e.product.ratingsAverage))}}function x(r,a){if(1&r&&(t.TgZ(0,"div",10),t.YNc(1,d,17,8,"div",11),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.cartDetails.products)}}function C(r,a){1&r&&(t.TgZ(0,"span"),t._uU(1," -20% "),t.qZA())}function v(r,a){1&r&&(t.TgZ(0,"span"),t._uU(1," -16% "),t.qZA())}function b(r,a){1&r&&(t.TgZ(0,"span"),t._uU(1," -12% "),t.qZA())}function Z(r,a){1&r&&(t.ynx(0),t._UZ(1,"i",21),t.BQk())}function T(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"tr",15)(1,"td",37)(2,"i",38),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.removeCartItem(s.product._id))}),t.qZA()(),t.TgZ(3,"td",39),t._UZ(4,"img",40),t.qZA(),t.TgZ(5,"td",41),t._uU(6),t.qZA(),t.TgZ(7,"td",42),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td",42)(11,"div",43)(12,"button",44),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.updateCount(s.product._id,s.count-1))}),t._uU(13," - "),t.qZA(),t.TgZ(14,"span",45),t._uU(15),t.qZA(),t.TgZ(16,"button",46),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.updateCount(s.product._id,s.count+1))}),t._uU(17," + "),t.qZA()()(),t.TgZ(18,"td",42),t._uU(19),t.ALo(20,"currency"),t.qZA(),t.TgZ(21,"td",47),t.YNc(22,C,2,0,"span",3),t.YNc(23,v,2,0,"span",3),t.YNc(24,b,2,0,"span",3),t.qZA(),t.TgZ(25,"td",37)(26,"div",48)(27,"span"),t.YNc(28,Z,2,0,"ng-container",20),t.qZA()()()()}if(2&r){const e=a.$implicit,o=t.oxw(2);t.xp6(4),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(2),t.hij(" ",e.product.title.split(" ").slice(0,2).join(" ")," "),t.xp6(2),t.hij(" ",t.xi3(9,11,e.price," EGP ")," "),t.xp6(4),t.Q6J("disabled",1==e.count),t.xp6(3),t.hij(" ",e.count," "),t.xp6(4),t.hij(" ",t.xi3(20,14,e.price*e.count," EGP ")," "),t.xp6(3),t.Q6J("ngIf",e.price>3e3),t.xp6(1),t.Q6J("ngIf",e.price<3e3&&e.price>1500),t.xp6(1),t.Q6J("ngIf",e.price<1500),t.xp6(4),t.Q6J("ngForOf",o.generateRatingArray(e.product.ratingsAverage))}}function A(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div")(1,"div",22)(2,"table",23)(3,"thead",24)(4,"tr",25)(5,"th",26),t._uU(6,"DELETE"),t.qZA(),t.TgZ(7,"th",26),t._uU(8,"IMAGE"),t.qZA(),t.TgZ(9,"th",26),t._uU(10,"PRODUCT"),t.qZA(),t.TgZ(11,"th",26),t._uU(12,"PRICE"),t.qZA(),t.TgZ(13,"th",26),t._uU(14,"QUANTITY"),t.qZA(),t.TgZ(15,"th",26),t._uU(16,"TOTAL"),t.qZA(),t.TgZ(17,"th",26),t._uU(18,"SALE"),t.qZA(),t.TgZ(19,"th",26),t._uU(20,"RATING"),t.qZA()()(),t.TgZ(21,"tbody",27),t.YNc(22,T,29,17,"tr",28),t.qZA()()(),t.TgZ(23,"div",29)(24,"div",30)(25,"button",31)(26,"span"),t._uU(27," PAYMENT "),t._UZ(28,"i",32),t.qZA()(),t.TgZ(29,"button",33)(30,"span"),t._uU(31," CASH "),t._UZ(32,"i",34),t.qZA()()(),t.TgZ(33,"div",35)(34,"button",36),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clearCart())}),t._uU(35," CLEAR CART "),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(22),t.Q6J("ngForOf",e.cartDetails.products)}}let U=(()=>{class r{constructor(e,o){this._CartService=e,this._toastr=o,this.cartDetails={},this.empty={},this.numberOfItems=0,this.navCartNum=0}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{this.cartDetails=e.data,this.numberOfItems=e.numOfCartItems},error:e=>{console.log(e)}}),this._CartService.cartNubmer.subscribe({next:e=>{this.navCartNum=e}})}removeCartItem(e){this._CartService.removeItem(e).subscribe({next:o=>{console.log(o),this.cartDetails=o.data,console.log(this.numberOfItems),this._toastr.success(o.status),this.numberOfItems=o.numOfCartItems,this._CartService.cartNubmer.next(o.numOfCartItems)},error:o=>{console.log(o)}})}generateRatingArray(e){return Array.from({length:e},(o,n)=>n)}updateCount(e,o){this._CartService.updateCount(e,o).subscribe({next:n=>{console.log(n),this.cartDetails=n.data,this._toastr.success(n.status),this.numberOfItems=n.numOfCartItems},error:n=>{console.log(n)}})}clearCart(){this._CartService.clearCart().subscribe({next:e=>{console.log(e),"success"==e.message&&(this.cartDetails=this.empty,this.numberOfItems=0,this._toastr.success(e.message),this._CartService.cartNubmer.next(0))}})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g.N),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"pt-[10px]","lg:container","mx-auto"],["class","flex flex-col lg:flex-row items-center justify-center pt-12 h-[70vh]",4,"ngIf"],["class","md:hidden",4,"ngIf"],[4,"ngIf"],[1,"flex","flex-col","lg:flex-row","items-center","justify-center","pt-12","h-[70vh]"],[1,"lg:w-[60%]"],["src","./assets/images/24758680_tourist_va_03-removebg.png","alt","svg",1,"w-full"],[1,"pt-12","text-center"],[1,"font-extrabold","text-[30px]","text-slate-700","dark:text-white"],["routerLink","/home",1,"btn","bg-red-700","hover:bg-red-500","font-bold","text-white"],[1,"md:hidden"],["class","bg-white p-4 rounded-lg shadow dark:bg-[#15191d]",4,"ngFor","ngForOf"],[1,"bg-white","p-4","rounded-lg","shadow","dark:bg-[#15191d]"],[1,"flex","items-center","justify-between"],[1,"fa-solid","fa-trash","fa-lg","m-2","cursor-pointer",2,"color","#d74747",3,"click"],[1,"text-center"],[1,"text-black","font-bold","dark:text-white"],[1,"w-[100px]","h-[100px]",3,"src","alt"],[1,"text-center","text-red-500","dark:text-white"],[1,"font-bold"],[4,"ngFor","ngForOf"],[1,"fa-solid","fa-star","repeat_here",2,"color","#ff3b3b"],[1,"overflow-auto","rounded-lg","shadow","hidden","md:block"],[1,"w-full"],[1,"bg-gray-300","border-b-2","border-red-600","dark:text-white","dark:bg-slate-700"],[1,""],[1,"p-3","text-[20px]","font-bold","tracking-wide"],[1,"bg-gray-100","dark:bg-[#212529]","h-[70vh]"],["class","text-center",4,"ngFor","ngForOf"],[1,"flex","flex-col","md:flex-row","justify-between","p-5","bg-gray-100","dark:bg-[#212529]","rounded-lg","relative","top-[-20px]"],[1,"flex","flex-col","md:flex-row"],[1,"btn","bg-red-600","hover:bg-red-400","text-white","font-bold"],[1,"fa-brands","fa-cc-visa","text-[20px]",2,"color","#ffffff"],[1,"btn","bg-red-600","hover:bg-red-400","text-white","font-bold","md:mx-2","my-2","md:my-0"],[1,"fa-solid","fa-truck",2,"color","#ffffff"],[1,"flex","pt-5","md:pt-0"],[1,"btn","bg-red-600","hover:bg-red-400","font-bold","text-white","w-full",3,"click"],[1,"p-3","text-[16px]","text-gray-700"],[1,"fa-solid","fa-trash","fa-lg","text-red-500","cursor-pointer",3,"click"],[1,"p-3"],[1,"w-[100px]","h-[100px]","relative","lg:left-[40px]",3,"src","alt"],[1,"p-3","text-[20px]","font-bold","text-gray-700","dark:text-white"],[1,"p-3","text-[16px]","text-gray-700","font-bold","dark:text-white"],[1,"font-extrabold","text-[20px]"],[1,"w-[30px]","h-[30px]","bg-gray-600","hover:bg-gray-400","rounded-full","text-white",3,"disabled","click"],[1,"px-2"],[1,"w-[30px]","h-[30px]","bg-gray-600","hover:bg-gray-400","rounded-full","text-white",3,"click"],[1,"p-3","text-red-500","text-[20px]","font-extrabold","dark:text-white"],[1,"flex","items-center","justify-center","py-3"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0),t.YNc(1,h,8,0,"div",1),t.YNc(2,x,2,1,"div",2),t.YNc(3,A,36,1,"div",3),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",0==n.numberOfItems),t.xp6(1),t.Q6J("ngIf",0!=n.numberOfItems),t.xp6(1),t.Q6J("ngIf",0!=n.numberOfItems))},dependencies:[u.ez,u.sg,u.O5,u.H9,m.rH]})}return r})()},7422:(f,p,c)=>{c.d(p,{N:()=>g});var u=c(5619),m=c(4769),t=c(9862);let g=(()=>{class _{constructor(i){this._HttpClient=i,this.cartNubmer=new u.X(0)}addToCart(i){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:i})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeItem(i){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${i}`)}updateCount(i,d){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${i}`,{count:d})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart/")}checkOut(i,d){const x=encodeURIComponent("https://mohamed0ahmed.github.io/Fresh-Cart/#");return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${i}?url=${x}`,{shippingAddress:d})}getUserOrders(i){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${i}`)}static#t=this.\u0275fac=function(d){return new(d||_)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);