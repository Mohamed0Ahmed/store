"use strict";(self.webpackChunkDashBoard=self.webpackChunkDashBoard||[]).push([[395],{7395:(f,p,o)=>{o.r(p),o.d(p,{ProfileComponent:()=>Z});var u=o(6814),m=o(8784),h=o(1120),e=o(4769),l=o(9483),v=o(7422);const s=["fileInput"];function n(t,d){if(1&t&&(e.TgZ(0,"div",24)(1,"span",17),e._uU(2),e.qZA(),e._UZ(3,"span"),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.usernumber)}}function g(t,d){1&t&&(e.TgZ(0,"div",24)(1,"span",25),e._uU(2,"Add +"),e.qZA()())}function x(t,d){if(1&t&&(e.TgZ(0,"div",24)(1,"span",17),e._uU(2),e.qZA(),e._UZ(3,"span"),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.userAge)}}function I(t,d){1&t&&(e.TgZ(0,"div",24)(1,"span",25),e._uU(2,"Add +"),e.qZA()())}function A(t,d){if(1&t&&(e.TgZ(0,"div",24)(1,"span",17),e._uU(2),e.qZA(),e._UZ(3,"span"),e.qZA()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.userAdress)}}function C(t,d){1&t&&(e.TgZ(0,"div",24)(1,"span",25),e._uU(2,"Add +"),e.qZA()())}let Z=(()=>{class t{constructor(i,a){this._AuthService=i,this._CartService=a,this.photo="./assets/images/user.jpg",this.selectedFile=null,this.message="",this.userName="",this.userEmail="",this.usernumber="",this.userAdress="",this.userId="",this.userAge=""}ngOnInit(){if(localStorage.getItem("eToken")){let i=localStorage.getItem("eToken"),a=(0,m.o)(i);this.Dataaa=a,console.log(this.Dataaa),this.userId=this.Dataaa.id,this.userEmail=this.Dataaa.id,this.userEmail=localStorage.getItem("mail")}this.userName=this.Dataaa.name,this.userEmail=localStorage.getItem("mail"),localStorage.getItem(`${this.userId} name `)&&(this.userName=localStorage.getItem(`${this.userId} name `)),localStorage.getItem(`${this.userId} address `)&&(this.userAdress=localStorage.getItem(`${this.userId} address `)),localStorage.getItem(`${this.userId} age `)&&(this.userAge=localStorage.getItem(`${this.userId} age `)),localStorage.getItem(`${this.userId} phone `)&&(this.usernumber=localStorage.getItem(`${this.userId} phone `)),this.photo=localStorage.getItem(this.Dataaa.id)?localStorage.getItem(this.Dataaa.id):"./assets/images/user.jpg"}logoutUser(){this._AuthService.logout()}onUploadClicked(){this.fileInput.nativeElement.click()}onFileSelected(i){this.message="";const a=i.target.files[0];if(a)if(a.type.match(/image.*/)){this.selectedFile=a;const r=new FileReader;r.onload=c=>{this._CartService.chgStr(c.target.result),this._CartService.strCurr.subscribe(_=>this.photo=_),localStorage.setItem(this.Dataaa.id,this.photo)},r.readAsDataURL(this.selectedFile)}else this.message="Please select an image file."}remove(){localStorage.removeItem(this.Dataaa.id),this._CartService.chgStr("./assets/images/user.jpg"),this._CartService.strCurr.subscribe(i=>this.photo=i)}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(l.e),e.Y36(v.N))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],viewQuery:function(a,r){if(1&a&&e.Gf(s,5),2&a){let c;e.iGM(c=e.CRH())&&(r.fileInput=c.first)}},standalone:!0,features:[e.jDz],decls:44,vars:9,consts:[[1,"flex","flex-col","md:flex-row","md:items-center","justify-center","min-h-[95vh]","bg-gray-300","dark:bg-[#15191d]"],[1,"lg-w[60%]","p-5","relative","flex","justify-center"],[1,"rounded-full","w-96","h-96","overflow-hidden","flex","items-center","justify-center"],["alt","user",1,"w-full",3,"src"],[1,"absolute","right-[60px]","bottom-[60px]","rounded-full","py-2","px-2","bg-[#232b28]","dark:bg-slate-500",3,"click"],[1,"fa-solid","fa-pencil","text-[25px]","text-slate-200","cursor-pointer"],["type","file","accept","image/*",1,"hidden",3,"change"],["fileInput",""],[1,"absolute","left-[60px]","bottom-[60px]","rounded-full","py-2","px-2","bg-[#232b28]","dark:bg-slate-500",3,"click"],[1,"fa-solid","fa-ban","text-[25px]","text-slate-200","cursor-pointer"],[1,"lg:m-w-[30%]","p-5","px-[50px]","shadow-xl","shadow-slate-600","bg-slate-100","rounded-xl","dark:bg-slate-800","dark:shadow-none"],[1,"text-[40px]","font-bold","py-6","text-slate-700","dark:text-white"],["routerLink","/setting",1,"fa-solid","fa-pencil","md:text-[25px]","mx-3","text-slate-700","dark:text-slate-100","cursor-pointer"],[1,"pt-6"],[1,"flex","flex-col"],[1,"my-3"],[1,"font-bold","text-[20px]","text-gray-500"],[1,"border-b","text-slate-700","font-bold","dark:text-gray-200"],[1,"pt-4","flex","items-center"],["class","mx-3",4,"ngIf"],[1,"pt-5","flex","items-center"],[1,"font-bold","text-[20px]","text-gray-500","me-6"],[1,"flex","justify-center","md:justify-end","pt-5"],["routerLink","/setting",1,"btn-set"],[1,"mx-3"],["routerLink","/setting",1,"font-bold","md:text-[20px]","text-slate-700","cursor-pointer","dark:text-gray-200"]],template:function(a,r){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"span",4),e.NdJ("click",function(){return r.onUploadClicked()}),e.TgZ(5,"i",5)(6,"input",6,7),e.NdJ("change",function(_){return r.onFileSelected(_)}),e.qZA()()(),e.TgZ(8,"span",8),e.NdJ("click",function(){return r.remove()}),e._UZ(9,"i",9),e.qZA()(),e.TgZ(10,"div",10)(11,"h2",11),e._uU(12," MY PROFILE "),e._UZ(13,"i",12),e.qZA(),e.TgZ(14,"div",13)(15,"div",14)(16,"div",15)(17,"h2",16),e._uU(18," Name : "),e.TgZ(19,"span",17),e._uU(20),e.qZA()()(),e.TgZ(21,"div",15)(22,"h2",16),e._uU(23," E-Mail : "),e.TgZ(24,"span",17),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",18)(27,"h2",16),e._uU(28,"Phone :"),e.qZA(),e.YNc(29,n,4,1,"div",19),e.YNc(30,g,3,0,"div",19),e.qZA(),e.TgZ(31,"div",20)(32,"h2",21),e._uU(33,"Age :"),e.qZA(),e.YNc(34,x,4,1,"div",19),e.YNc(35,I,3,0,"div",19),e.qZA(),e.TgZ(36,"div",18)(37,"h2",16),e._uU(38,"Address :"),e.qZA(),e.YNc(39,A,4,1,"div",19),e.YNc(40,C,3,0,"div",19),e.qZA()(),e.TgZ(41,"div",22)(42,"button",23),e._uU(43,"Go Settings"),e.qZA()()()()),2&a&&(e.xp6(3),e.Q6J("src",r.photo,e.LSH),e.xp6(17),e.Oqu(r.userName),e.xp6(5),e.Oqu(r.userEmail),e.xp6(4),e.Q6J("ngIf",r.usernumber),e.xp6(1),e.Q6J("ngIf",!r.usernumber),e.xp6(4),e.Q6J("ngIf",r.userAge),e.xp6(1),e.Q6J("ngIf",!r.userAge),e.xp6(4),e.Q6J("ngIf",r.userAdress),e.xp6(1),e.Q6J("ngIf",!r.userAdress))},dependencies:[u.ez,u.O5,h.rH]})}return t})()},7422:(f,p,o)=>{o.d(p,{N:()=>e});var u=o(5619),m=o(4769),h=o(9862);let e=(()=>{class l{constructor(s){this._HttpClient=s,this.cartNubmer=new u.X(0),this.strSrc=new u.X("./assets/images/user.jpg"),this.strCurr=this.strSrc.asObservable()}chgStr(s){this.strSrc.next(s)}addToCart(s){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:s})}getUserCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeItem(s){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${s}`)}updateCount(s,n){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${s}`,{count:n})}clearCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart/")}checkOut(s,n){const g=encodeURIComponent("https://mohamed0ahmed.github.io/store/#");return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${s}?url=${g}`,{shippingAddress:n})}cash(s,n){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${s}`,{shippingAddress:n})}getUserOrders(s){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${s}`)}static#e=this.\u0275fac=function(n){return new(n||l)(m.LFG(h.eN))};static#t=this.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);