(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/cover.bbdb1e35.png"},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(14),n(3)),s=n(4),l=n(7),u=n(5),h=n(8),d=(n(15),n(16),function(e){return o.a.createElement("div",{className:"card-container",key:e.robot.id},o.a.createElement("img",{src:"https://robohash.org/".concat(e.robot.id,"?set=set5&size=200x200")}),o.a.createElement("h2",null,e.robot.name),o.a.createElement("p",null,e.robot.email))}),m=function(e){return o.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return o.a.createElement(d,{robot:e})})))},b=(n(17),function(e){var t=e.handleChanges,n=e.placeholder;return o.a.createElement("input",{className:"search",type:"search",onChange:t,placeholder:n})}),f=n(6),p=n.n(f),v=(n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChanges=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("img",{width:"200",src:p.a,alt:"Smiley face"})),o.a.createElement(b,{placeholder:"Search Robot",handleChanges:this.handleChanges}),o.a.createElement(m,{robots:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a6e56b88.chunk.js.map