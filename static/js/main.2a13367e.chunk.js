(this["webpackJsonppick-food"]=this["webpackJsonppick-food"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__SLY7F",image:"recipe_image__2bZxR",light_recipe:"recipe_light_recipe__2v77y",dark_recipe:"recipe_dark_recipe__1tpZI"}},function(e,t,a){e.exports={button_container:"ModeButton_button_container__1Vw-3",light:"ModeButton_light__325s7",dark:"ModeButton_dark__3BFY5"}},,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(7),i=a.n(n),o=(a(16),a(5)),s=a.n(o),l=a(8),u=a(2),m=(a(18),function(e){var t=e.submitSearch,a=e.search,c=e.setSearch,n=e.mode;return r.a.createElement("div",{className:"search_form"},r.a.createElement("form",{className:"form"},r.a.createElement("input",{value:a,className:"search_bar ".concat(n?"light_search_bar":"dark_search_bar"),placeholder:"Search for some yummy",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"search_button ".concat(n?"light_search_button":"dark_search_button"),onClick:t},"Search")))}),p=a(3),_=a.n(p),d=function(e){var t=e.title,a=e.calories,c=e.image,n=e.ingredients,i=e.mode;return r.a.createElement("div",{className:"".concat(_.a.recipe,"  ").concat(i?_.a.light_recipe:_.a.dark_recipe)},r.a.createElement("img",{className:_.a.image,src:c,alt:"Food"}),r.a.createElement("h1",{style:{textAlign:"center"}},t),r.a.createElement("strong",null,"Calories: ",Math.round(a)),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.text+e.weight},e.text)}))))};a(4),a(0),a(10),a(9);var h=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(null),o=Object(u.a)(i,2),p=o[0],_=o[1],h=Object(c.useState)(""),f=Object(u.a)(h,2),b=f[0],g=f[1],E=Object(c.useState)("chicken"),k=Object(u.a)(E,2),v=k[0],j=k[1],O=Object(c.useState)(!0),S=Object(u.a)(O,2),x=S[0],y=S[1];Object(c.useEffect)((function(){var e=localStorage.getItem("mode");y("true"===e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("mode",x)}),[x]),Object(c.useEffect)((function(){N()}),[v]);var N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("0d5cc5d4","&app_key=").concat("7dc40ea0fb8947cd4f15771445c2d3f1","&from=0&to=3&calories=591-722&health=alcohol-free"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,_(a.hits),n(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App ".concat(x?"light_app":"dark_app")},r.a.createElement(m,{search:b,submitSearch:function(e){e.preventDefault(),j(b),g("")},setSearch:g,mode:x}),r.a.createElement("div",{className:"recipes"},a?r.a.createElement("span",null,"Loading..."):p.map((function(e){return r.a.createElement(d,{key:e.recipe.label+e.recipe.calories,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,mode:x})}))))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.2a13367e.chunk.js.map