"use strict";(self.webpackChunkDashBoard=self.webpackChunkDashBoard||[]).push([[513],{3513:(k,m,i)=>{i.r(m),i.d(m,{SettingComponent:()=>C});var p=i(6814),g=i(8784),h=i(1120),s=i(95),e=i(4769),c=i(9862);let f=(()=>{class a{constructor(t){this._HttpClient=t}updateUserData(t){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/updateMe/",t)}addAddress(t){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/addresses",t)}getAddresss(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/addresses")}removeAddress(t){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${t}`)}updataPass(t){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",t)}static#e=this.\u0275fac=function(r){return new(r||a)(e.LFG(c.eN))};static#t=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var _=i(9483);function w(a,d){1&a&&(e.TgZ(0,"p",33),e._uU(1," Name Updated ! "),e.qZA())}function I(a,d){if(1&a&&(e.TgZ(0,"p",33),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.mailUpdated," ")}}function b(a,d){if(1&a&&(e.TgZ(0,"p",33),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.addressUpdated," ")}}function U(a,d){if(1&a&&(e.TgZ(0,"p",33),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.ageUpdated," ")}}function Z(a,d){if(1&a&&(e.TgZ(0,"p",33),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.numberUpdated," ")}}function v(a,d){1&a&&(e.TgZ(0,"p",30),e._uU(1," Password must be atleast 6 chars "),e.qZA())}function x(a,d){if(1&a&&(e.TgZ(0,"div",34),e.YNc(1,v,2,0,"p",31),e.qZA()),2&a){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.resetPassword.get("currentPassword"))?null:r.getError("pattern"))}}function A(a,d){1&a&&(e.TgZ(0,"p",30),e._uU(1," Password must be atleast 6 chars and no special chars "),e.qZA())}function S(a,d){if(1&a&&(e.TgZ(0,"div",34),e.YNc(1,A,2,0,"p",31),e.qZA()),2&a){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.resetPassword.get("password"))?null:r.getError("pattern"))}}function P(a,d){1&a&&(e.TgZ(0,"p",30),e._uU(1," RePassword must be match Password "),e.qZA())}function T(a,d){if(1&a&&(e.TgZ(0,"div",34),e.YNc(1,P,2,0,"p",31),e.qZA()),2&a){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.resetPassword.get("rePassword"))?null:r.getError("missMatch"))}}function N(a,d){if(1&a&&(e.TgZ(0,"p",30),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.passMsg," ")}}let C=(()=>{class a{constructor(t,r){this._UserService=t,this._AuthService=r,this.photo="./assets/images/user.jpg",this.selectedFile=null,this.message="",this.userName="",this.userEmail="",this.usernumber="01111111111",this.userPhone="Add Your Number",this.userAdress=[],this.userAdres="Add Your Adress",this.userId="",this.userAge="Add Your Age",this.nameUpdated=!1,this.mailUpdated="",this.ageUpdated="",this.numberUpdated="",this.addressUpdated="",this.passMsg="",this.updateName=new s.cw({name:new s.NI("",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(20)])}),this.registerForm=new s.cw({name:new s.NI("",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(20)]),email:new s.NI("",[s.kI.required,s.kI.email]),phone:new s.NI("",[s.kI.required,s.kI.pattern(/^01[0125][0-9]{8}$/)])}),this.address=new s.cw({details:new s.NI("",[s.kI.minLength(10),s.kI.maxLength(40),s.kI.required])}),this.age=new s.cw({age:new s.NI("",[s.kI.required,s.kI.pattern(/^(1[0-9]|2[0-9]|[3-5][0-9]|60)$/)])}),this.number=new s.cw({phone:new s.NI("",[s.kI.pattern(/^01[0125][0-9]{8}$/)])}),this.resetPassword=new s.cw({currentPassword:new s.NI("",[s.kI.required,s.kI.pattern(/^\w{6,12}$/)]),password:new s.NI("",[s.kI.required,s.kI.pattern(/^\w{6,12}$/)]),rePassword:new s.NI("")},{validators:[this.confirmPass]})}ngOnInit(){if(this._AuthService.saveUserData(),localStorage.getItem("eToken")){let t=localStorage.getItem("eToken"),r=(0,g.o)(t);this.Dataaa=r,this.userId=this.Dataaa.id,console.log(this.Dataaa.name),this.userName=localStorage.getItem(`${this.userId} name `),this.userEmail=localStorage.getItem("mail")}this.userName=this.Dataaa.name,this.userEmail=localStorage.getItem("mail"),localStorage.getItem(`${this.userId} name `)&&(this.userName=localStorage.getItem(`${this.userId} name `)),localStorage.getItem(`${this.userId} address `)&&(this.userAdres=localStorage.getItem(`${this.userId} address `)),localStorage.getItem(`${this.userId} age `)&&(this.userAge=localStorage.getItem(`${this.userId} age `)),localStorage.getItem(`${this.userId} phone `)&&(this.userPhone=localStorage.getItem(`${this.userId} phone `)),this.photo=localStorage.getItem(this.Dataaa.id)?localStorage.getItem(this.Dataaa.id):"./assets/images/user.jpg"}changeName(){const t=document.getElementById("name");this.userName=t.value,console.log(this.userName),localStorage.setItem(`${this.userId} name `,this.userName),t.value="",this.nameUpdated=!0}updateEmail(){this.mailUpdated="",this._UserService.updateUserData({name:this.userName,email:this.registerForm.value.email,phone:this.usernumber}).subscribe({next:r=>{const o=document.getElementById("mail");this.userName=r.user.name,this.userEmail=r.user.email,this.mailUpdated=r.message,console.log(r),localStorage.setItem("mail",this.userEmail),o.value=""},error:r=>{this.mailUpdated=r.error.errors.msg,console.log(r)}})}addAddress(){this.addressUpdated="",this._UserService.addAddress({name:this.userName,details:this.address.value.details,phone:this.usernumber,city:"cairo"}).subscribe({next:r=>{this.address.reset(),this.userAdress=r.data,this.addressUpdated=r.message,console.log(r),localStorage.setItem(`${this.userId} address `,this.getLastElement(this.userAdress).details),this.userAdres=localStorage.getItem(`${this.userId} address `)}})}getLastElement(t){return 0===t.length?"Add your Address":t[t.length-1]}addAge(){const t=document.getElementById("age");this.ageUpdated="",this.age.invalid?this.ageUpdated="Valid Age 10 to 60":(this.userAge=t.value,localStorage.setItem(`${this.userId} age `,this.userAge),this.ageUpdated="Updated",t.value="")}addnumber(){const t=document.getElementById("phone");this.numberUpdated="",this.number.invalid?this.numberUpdated="Enter a valid number":(this.userPhone=t.value,localStorage.setItem(`${this.userId} phone `,this.userPhone),this.numberUpdated="Updated",t.value="")}confirmPass(t){const r=t.get("password"),o=t.get("rePassword");""==o?.value?o?.setErrors({required:!0}):r?.value!=o?.value&&o?.setErrors({missMatch:!0})}resetPass(){const t=this.resetPassword.value;this.passMsg="",this.passMsg="",this._UserService.updataPass(t).subscribe({next:r=>{console.log(r),localStorage.setItem("eToken",r.token),this.passMsg=r.message,this.resetPassword.reset(),localStorage.setItem("eToken",r.token),localStorage.setItem(`${this.userId} name `,r.user.name)},error:r=>{console.log(r),this.passMsg=r.error.errors.msg}})}static#e=this.\u0275fac=function(r){return new(r||a)(e.Y36(f),e.Y36(_.e))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-setting"]],standalone:!0,features:[e.jDz],decls:71,vars:23,consts:[[1,"bg-gray-300","dark:bg-[#15191d]","dark:text-white","py-5"],[1,"container","mx-auto","flex","md:justify-evenly","lg:flex-row","flex-col","items-center","min-h-[95vh]"],[1,"flex","flex-col","p-5","mt-5","w-full","lg:w-[40%]","shadow-xl","shadow-slate-400","bg-slate-100","rounded-xl","dark:bg-slate-800","dark:shadow-none"],[1,"font-bold","md:text-[40px]"],[3,"formGroup","ngSubmit"],["for","name",1,"font-bold"],["formControlName","name","type","text","id","name",1,"input","placeholder:text-slate-600","font-bold","placeholder:font-light",3,"placeholder"],["class","font-bold text-slate-500 py-2 dark:text-white",4,"ngIf"],[1,"btn-set",3,"disabled"],[1,"pt-6"],["for","mail",1,"font-bold"],["formControlName","email","type","text","id","mail",1,"input","placeholder:text-slate-600","font-bold","placeholder:font-light",3,"placeholder"],[1,"btn-set"],["for","details",1,"font-bold"],["formControlName","details","type","text","id","details",1,"input","placeholder:text-slate-600","font-bold","placeholder:font-light",3,"placeholder"],["for","age",1,"font-bold"],["formControlName","age","type","tel","id","age",1,"input","placeholder:text-slate-600","font-bold","placeholder:font-light",3,"placeholder"],["for","phone",1,"font-bold"],["formControlName","phone","type","tel","id","phone",1,"input","placeholder:text-slate-600","font-bold","placeholder:font-light",3,"placeholder"],[1,"flex","flex-col","relative","w-full","p-5","mt-5","lg:w-[40%]","shadow-xl","shadow-slate-400","bg-slate-100","rounded-xl","dark:bg-slate-800","dark:shadow-none"],[1,"pt-5"],[1,"font-bold",3,"formGroup","ngSubmit"],[1,"py-4"],["for","oldPass"],["type","password","id","oldPass","placeholder","Current Password","formControlName","currentPassword",1,"input"],["class","text-slate-600 text-center dark:text-slate-100",4,"ngIf"],["for","newPass",1,""],["type","password","id","newPass","placeholder","New Password","formControlName","password",1,"input"],["for","confirmPass"],["type","password","id","confirmPass","formControlName","rePassword","placeholder","Re New Password",1,"pt-4","input"],[1,""],["class","",4,"ngIf"],["routerLink","/profile",1,"btn-set","absolute","hidden","lg:block","md:bottom-[-100px]","left-[50%]","translate-x-[-50%]"],[1,"font-bold","text-slate-500","py-2","dark:text-white"],[1,"text-slate-600","text-center","dark:text-slate-100"]],template:function(r,o){if(1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),e._uU(5,"Personal Information"),e.qZA(),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return o.changeName()}),e.TgZ(7,"label",5),e._uU(8,"Name : "),e.qZA(),e._UZ(9,"input",6),e.YNc(10,w,2,0,"p",7),e.TgZ(11,"button",8),e._uU(12," Update "),e.qZA()()(),e.TgZ(13,"div",9)(14,"form",4),e.NdJ("ngSubmit",function(){return o.updateEmail()}),e.TgZ(15,"label",10),e._uU(16,"Eamil : "),e.qZA(),e._UZ(17,"input",11),e.YNc(18,I,2,1,"p",7),e.TgZ(19,"button",12),e._uU(20,"Update"),e.qZA()()(),e.TgZ(21,"div",9)(22,"form",4),e.NdJ("ngSubmit",function(){return o.addAddress()}),e.TgZ(23,"label",13),e._uU(24,"Address : "),e.qZA(),e._UZ(25,"input",14),e.YNc(26,b,2,1,"p",7),e.TgZ(27,"button",8),e._uU(28,"Update"),e.qZA()()(),e.TgZ(29,"div",9)(30,"form",4),e.NdJ("ngSubmit",function(){return o.addAge()}),e.TgZ(31,"label",15),e._uU(32,"Age : "),e.qZA(),e._UZ(33,"input",16),e.YNc(34,U,2,1,"p",7),e.TgZ(35,"button",12),e._uU(36,"Update"),e.qZA()()(),e.TgZ(37,"div",9)(38,"form",4),e.NdJ("ngSubmit",function(){return o.addnumber()}),e.TgZ(39,"label",17),e._uU(40,"Phone : "),e.qZA(),e._UZ(41,"input",18),e.YNc(42,Z,2,1,"p",7),e.TgZ(43,"button",12),e._uU(44,"Update"),e.qZA()()()(),e.TgZ(45,"div",19)(46,"h2",3),e._uU(47,"Privacy"),e.qZA(),e.TgZ(48,"div",20)(49,"form",21),e.NdJ("ngSubmit",function(){return o.resetPass()}),e.TgZ(50,"div",22)(51,"label",23),e._uU(52,"Password : "),e.qZA(),e._UZ(53,"input",24),e.qZA(),e.YNc(54,x,2,1,"div",25),e.TgZ(55,"div",22)(56,"label",26),e._uU(57,"NewPassword : "),e.qZA(),e._UZ(58,"input",27),e.qZA(),e.YNc(59,S,2,1,"div",25),e.TgZ(60,"div",22)(61,"label",28),e._uU(62,"Confirm New Password : "),e.qZA(),e._UZ(63,"input",29),e.qZA(),e.YNc(64,T,2,1,"div",25),e.TgZ(65,"button",8),e._uU(66," Update "),e.qZA(),e.TgZ(67,"div",30),e.YNc(68,N,2,1,"p",31),e.qZA()()(),e.TgZ(69,"button",32),e._uU(70," Back To Profile "),e.qZA()()()()),2&r){let n,l,u;e.xp6(6),e.Q6J("formGroup",o.updateName),e.xp6(3),e.Q6J("placeholder",o.userName),e.xp6(1),e.Q6J("ngIf",o.nameUpdated),e.xp6(1),e.Q6J("disabled",o.updateName.invalid),e.xp6(3),e.Q6J("formGroup",o.registerForm),e.xp6(3),e.Q6J("placeholder",o.userEmail),e.xp6(1),e.Q6J("ngIf",o.mailUpdated),e.xp6(4),e.Q6J("formGroup",o.address),e.xp6(3),e.Q6J("placeholder",o.userAdres),e.xp6(1),e.Q6J("ngIf",o.addressUpdated),e.xp6(1),e.Q6J("disabled",o.address.invalid),e.xp6(3),e.Q6J("formGroup",o.age),e.xp6(3),e.Q6J("placeholder",o.userAge),e.xp6(1),e.Q6J("ngIf",o.ageUpdated),e.xp6(4),e.Q6J("formGroup",o.number),e.xp6(3),e.Q6J("placeholder",o.userPhone),e.xp6(1),e.Q6J("ngIf",o.numberUpdated),e.xp6(7),e.Q6J("formGroup",o.resetPassword),e.xp6(5),e.Q6J("ngIf",((null==(n=o.resetPassword.get("currentPassword"))?null:n.touched)||""!=(null==(n=o.resetPassword.get("currentPassword"))?null:n.value))&&(null==(n=o.resetPassword.get("currentPassword"))?null:n.errors)),e.xp6(5),e.Q6J("ngIf",((null==(l=o.resetPassword.get("password"))?null:l.touched)||""!=(null==(l=o.resetPassword.get("password"))?null:l.value))&&(null==(l=o.resetPassword.get("password"))?null:l.errors)),e.xp6(5),e.Q6J("ngIf",((null==(u=o.resetPassword.get("rePassword"))?null:u.touched)||""!=(null==(u=o.resetPassword.get("rePassword"))?null:u.value))&&(null==(u=o.resetPassword.get("rePassword"))?null:u.errors)),e.xp6(1),e.Q6J("disabled",o.resetPassword.invalid),e.xp6(3),e.Q6J("ngIf",o.passMsg)}},dependencies:[p.ez,p.O5,h.rH,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}return a})()}}]);