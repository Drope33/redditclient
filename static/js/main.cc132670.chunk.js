(this.webpackJsonpredditclient=this.webpackJsonpredditclient||[]).push([[0],{15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),i=n.n(a),o=(n(15),n(8)),u=n(1);var s=function(e){return Object(u.jsx)("article",{children:Object(u.jsx)("a",{href:"https://reddit.com"+e.article.permalink,target:"_blank",children:Object(u.jsx)("h3",{children:e.article.title})})})};var l=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("webdev"),i=Object(o.a)(a,2),l=i[0],d=i[1];return Object(r.useEffect)((function(){fetch("https://www.reddit.com/r/"+l+".json").then((function(e){200==e.status?e.json().then((function(e){null!=e&&c(e.data.children)})):console.log("erroooor")}))}),[l]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("input",{type:"text",className:"input",value:l,onChange:function(e){return d(e.target.value)}})}),Object(u.jsx)("div",{className:"articles",children:null!=n?n.map((function(e,t){return Object(u.jsx)(s,{article:e.data},t)})):""})]})},d=n(2),j=n(6),h=n.n(j),f=n(9);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var m=Object(d.b)("counter/fetchCount",function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(d.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.status="loading"})).addCase(m.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),v=p.actions,O=(v.increment,v.decrement,v.incrementByAmount,p.reducer),w=Object(d.a)({reducer:{counter:O}}),x=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x.a,{store:w,children:Object(u.jsx)(l,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.cc132670.chunk.js.map