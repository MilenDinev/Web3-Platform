"use strict";(self.webpackChunkjaxworld_dapp=self.webpackChunkjaxworld_dapp||[]).push([[9017],{99017:function(t,e,r){r.r(e),r.d(e,{Split:function(){return f}});var n=r(29439),a=r(37762),s=r(74165),c=r(15861),i=r(15671),u=r(43144),o=r(56986),p=r(43027),d=r(49242),h=r(19560),l=r(39707),f=(r(64166),r(62349),r(7605),r(60862),r(89806),r(79955),function(){function t(e,r,n){var a=this;(0,i.Z)(this,t);var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.dz(e,r,d,u);(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"abi",void 0),(0,o._)(this,"metadata",void 0),(0,o._)(this,"app",void 0),(0,o._)(this,"encoder",void 0),(0,o._)(this,"estimator",void 0),(0,o._)(this,"events",void 0),(0,o._)(this,"roles",void 0),(0,o._)(this,"interceptor",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"withdraw",(0,p.ds)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p.aV,t.t1=a.contractWrapper,t.next=4,(0,p.cH)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"release(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),(0,o._)(this,"withdrawToken",(0,p.ds)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p.aV,t.t1=a.contractWrapper,t.next=4,(0,p.cH)(r);case 4:return t.t2=t.sent,t.next=7,(0,p.cH)(e);case 7:return t.t3=t.sent,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"release(address,address)",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),(0,o._)(this,"distribute",(0,p.ds)((0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p.aV.fromContractWrapper({contractWrapper:a.contractWrapper,method:"distribute()",args:[]}));case 1:case"end":return t.stop()}}),t)}))))),(0,o._)(this,"distributeToken",(0,p.ds)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p.aV,t.t1=a.contractWrapper,t.next=4,(0,p.cH)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"distribute(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),this._chainId=h,this.abi=p.e.parse(d||[]),this.contractWrapper=l,this.storage=n,this.metadata=new p.ag(this.contractWrapper,p.dQ,this.storage),this.app=new p.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new p.ah(this.contractWrapper,t.contractRoles),this.encoder=new p.af(this.contractWrapper),this.estimator=new p.aP(this.contractWrapper),this.events=new p.aQ(this.contractWrapper),this.interceptor=new p.aR(this.contractWrapper)}return(0,u.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=h.O$.from(0),t.next=4,this.contractWrapper.readContract.payeeCount();case 4:n=t.sent;case 5:if(!r.lt(n)){t.next=27;break}return t.prev=6,t.next=9,this.contractWrapper.readContract.payee(r);case 9:return a=t.sent,t.t0=e,t.next=13,this.getRecipientSplitPercentage(a);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),r=r.add(1),t.next=25;break;case 18:if(t.prev=18,t.t2=t.catch(6),!("method"in t.t2)||!t.t2.method.toLowerCase().includes("payee(uint256)")){t.next=24;break}return t.abrupt("break",27);case 24:throw t.t2;case 25:t.next=5;break;case 27:return t.abrupt("return",e);case 28:case"end":return t.stop()}}),t,this,[[6,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,c,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllRecipients();case 2:e=t.sent,r={},n=(0,a.Z)(e),t.prev=5,n.s();case 7:if((c=n.n()).done){t.next=14;break}return i=c.value,t.next=11,this.balanceOf(i.address);case 11:r[i.address]=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t,this,[[5,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfTokenAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,n,c,i,u,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.cH)(e);case 2:return r=t.sent,t.next=5,this.getAllRecipients();case 5:n=t.sent,c={},i=(0,a.Z)(n),t.prev=8,i.s();case 10:if((u=i.n()).done){t.next=17;break}return o=u.value,t.next=14,this.balanceOfToken(o.address,r);case 14:c[o.address]=t.sent;case 15:t.next=10;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),i.e(t.t0);case 22:return t.prev=22,i.f(),t.finish(22);case 25:return t.abrupt("return",c);case 26:case"end":return t.stop()}}),t,this,[[8,19,22,25]])})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,n,a,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.cH)(e);case 2:return r=t.sent,t.next=5,this.contractWrapper.readContract.provider.getBalance(this.getAddress());case 5:return n=t.sent,t.next=8,this.contractWrapper.readContract["totalReleased()"]();case 8:return a=t.sent,c=n.add(a),t.t0=this,t.t1=r,t.t2=c,t.next=15,this.contractWrapper.readContract["released(address)"](r);case 15:return t.t3=t.sent,t.abrupt("return",t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3));case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r){var n,a,c,i,u,o,h;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.cH)(r);case 2:return n=t.sent,t.next=5,(0,p.cH)(e);case 5:return a=t.sent,c=new l.CH(n,d,this.contractWrapper.getProvider()),t.next=9,c.balanceOf(this.getAddress());case 9:return i=t.sent,t.next=12,this.contractWrapper.readContract["totalReleased(address)"](n);case 12:return u=t.sent,o=i.add(u),t.t0=this,t.t1=a,t.t2=o,t.next=19,this.contractWrapper.readContract["released(address,address)"](n,a);case 19:return t.t3=t.sent,t.next=22,t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3);case 22:return h=t.sent,t.next=25,(0,p.b9)(this.contractWrapper.getProvider(),n,h);case 25:return t.abrupt("return",t.sent);case 26:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getRecipientSplitPercentage",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,a,c,i,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.cH)(e);case 2:return r=t.sent,t.next=5,Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(e)]);case 5:return a=t.sent,c=(0,n.Z)(a,2),i=c[0],u=c[1],t.abrupt("return",{address:r,splitPercentage:u.mul(h.O$.from(1e7)).div(i).toNumber()/1e5});case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_pendingPayment",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){var a,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.t1=this.contractWrapper.readContract,t.next=4,(0,p.cH)(e);case 4:return t.t2=t.sent,t.next=7,t.t1.shares.call(t.t1,t.t2);case 7:return t.t3=t.sent,a=t.t0.mul.call(t.t0,t.t3),t.t4=a,t.next=12,this.contractWrapper.readContract.totalShares();case 12:return t.t5=t.sent,c=t.t4.div.call(t.t4,t.t5),t.abrupt("return",c.sub(n));case 15:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,n));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),t}());(0,o._)(f,"contractRoles",["admin"])}}]);