(this["webpackJsonppick-food"]=this["webpackJsonppick-food"]||[]).push([[0],[,,function(e,t,a){e.exports={recipe:"recipe_recipe__1ThJq",image:"recipe_image__9rE-l",light_recipe:"recipe_light_recipe__2YSCS",dark_recipe:"recipe_dark_recipe__1ctx0"}},,function(e,t,a){e.exports={button_container:"ModeButton_button_container__3pD0Z",light:"ModeButton_light__2yreJ",dark:"ModeButton_dark__3gnNT"}},,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),o=a.n(r),i=(a(16),a(5)),l=a.n(i),s=a(8),u=a(3),m=(a(18),function(e){var t=e.submitSearch,a=e.search,c=e.setSearch,r=e.mode;return n.a.createElement("form",{className:"search_form "},n.a.createElement("input",{value:a,className:"search_bar ".concat(r?"light_search_bar":"dark_search_bar"),placeholder:"Search for some yummy",onChange:function(e){return c(e.target.value)}}),n.a.createElement("button",{className:"search_button ".concat(r?"light_search_button":"dark_search_button"),onClick:t},"Search"))}),p=a(2),d=a.n(p),_=function(e){var t=e.title,a=e.calories,c=e.image,r=e.ingredients,o=e.mode;return n.a.createElement("div",{className:"".concat(d.a.recipe,"  ").concat(o?d.a.light_recipe:d.a.dark_recipe)},n.a.createElement("img",{className:d.a.image,src:c,alt:"Food"}),n.a.createElement("h1",{style:{textAlign:"center"}},t),n.a.createElement("strong",null,"Calories: ",Math.round(a)),n.a.createElement("ul",null,r.map((function(e){return n.a.createElement("li",null,e.text)}))))},h=a(4),f=a.n(h),g=a(0),b=a(10),E=a(9),k=function(e){var t=e.toggleMode,a=e.mode;return n.a.createElement(g.b.Provider,{value:{color:"".concat(a?"#3f3f3f":"#757575"),className:"global-class-name",size:"".concat(a?"25px":"20px")}},n.a.createElement("div",{onClick:t,className:"".concat(f.a.button_container," ").concat(a?f.a.light:f.a.dark)},a?n.a.createElement(E.a,null):n.a.createElement(b.a,null)))};var v=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),p=i[0],d=i[1],h=Object(c.useState)("chicken"),f=Object(u.a)(h,2),g=f[0],b=f[1],E=Object(c.useState)(!0),v=Object(u.a)(E,2),S=v[0],j=v[1];Object(c.useEffect)((function(){x()}),[g]);var x=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("0d5cc5d4","&app_key=").concat("7dc40ea0fb8947cd4f15771445c2d3f1","&from=0&to=3&calories=591-722&health=alcohol-free"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"App ".concat(S?"light_app":"dark_app")},n.a.createElement(m,{search:p,submitSearch:function(e){e.preventDefault(),b(p),d("")},setSearch:d,mode:S}),n.a.createElement("div",{className:"recipes"},a?a.map((function(e){return n.a.createElement(_,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,mode:S})})):n.a.createElement("span",null,"Loading...")),n.a.createElement(k,{mode:S,toggleMode:function(){j(!S)}}))};o.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.13c40f1c.chunk.js.map