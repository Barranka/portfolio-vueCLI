(function(t){function s(s){for(var a,r,c=s[0],o=s[1],l=s[2],u=0,_=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(e,r)&&e[r]&&_.push(e[r][0]),e[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(s);while(_.length)_.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,s=0;s<n.length;s++){for(var i=n[s],a=!0,c=1;c<i.length;c++){var o=i[c];0!==e[o]&&(a=!1)}a&&(n.splice(s--,1),t=r(r.s=i[0]))}return t}var a={},e={app:0},n=[];function r(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,s,i){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(i,a,function(s){return t[s]}.bind(null,a));return i},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var p=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"16ab":function(t,s,i){"use strict";var a=i("4b70"),e=i.n(a);e.a},"3cd1":function(t,s,i){"use strict";var a=i("c701"),e=i.n(a);e.a},"4b70":function(t,s,i){},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper"},[i("header",[i("div",{staticClass:"navbar"},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-content"},[i("a",{staticClass:"logo-link",attrs:{href:"./"}},[i("div",{staticClass:"logo-link__title",domProps:{innerHTML:t._s("Ekaterina&nbsp;Khripunova")}})]),i("div",{staticClass:"burger",class:{active:t.isActive},on:{click:function(s){t.isActive=!t.isActive}}},[i("span",{staticClass:"burger__line"}),i("span",{staticClass:"burger__line"}),i("span",{staticClass:"burger__line"})]),i("ul",{staticClass:"navbar-list"},t._l(t.links,(function(s){return i("li",{key:s.title,staticClass:"navbar-item"},[i("router-link",{staticClass:"navbar-link",attrs:{title:s.title,to:s.url}},[t._v(t._s(s.title))])],1)})),0),t.isActive?i("div",{staticClass:"menu-wrapper",on:{click:function(s){return s.target!==s.currentTarget?null:t.closeMenu()}}},[t.isActive?i("ul",{staticClass:"menu-nav",class:{menuActive:t.isActive}},t._l(t.links,(function(s){return i("li",{key:s.title,staticClass:"menu-nav__item",on:{click:function(s){t.isActive=!t.isActive}}},[i("router-link",{staticClass:"navbar-link",attrs:{title:s.title,to:s.url}},[t._v(t._s(s.title))])],1)})),0):t._e()]):t._e()])])])]),i("router-view"),i("footerComp")],1)},n=[],r=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",[i("div",{staticClass:"container"},[i("div",{staticClass:"footer"},[i("div",{staticClass:"footer__item"},[t._m(0),i("div",{staticClass:"footer__web"},t._l(t.links,(function(s){return i("a",{key:s.png,attrs:{href:s.link,target:"_blank"}},[i("img",{staticClass:"footer__web-link",attrs:{src:""+t.src+s.png,alt:t.links.png}})])})),0)])])])])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer__sign"},[i("p",{staticClass:"footer__sign-text"},[t._v("© 2020, Ekaterina Khripunova")])])}],o=i("5530"),l=i("2f62"),p={data:function(){return{links:[{png:"/img/vk.png",link:"https://vk.com/id5915922"},{png:"/img/linkedin.png",link:"https://www.linkedin.com/in/ekaterina-khripunova-b19022189/"},{png:"/img/github.png",link:"https://github.com/Barranka"}]}},computed:Object(o["a"])({},Object(l["b"])({src:function(t){return t.posts.src}}))},u=p,_=i("2877"),g=Object(_["a"])(u,r,c,!1,null,null,null),d=g.exports,v={components:{footerComp:d},data:function(){return{links:[{title:"Главная",url:"/"},{title:"Портфолио",url:"/portfolio"},{title:"Контакты",url:"/contact"}],isActive:!1}},methods:{closeMenu:function(){this.isActive=!1}}},m=v,f=Object(_["a"])(m,e,n,!1,null,null,null),b=f.exports,C=i("8c4f"),h=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[t._m(0),i("aboutMe"),i("skills"),i("prePortfolio"),i("certificates")],1)},k=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"fullscreen"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content banner-content"},[i("div",{staticClass:"banner"},[i("p",{staticClass:"banner__item-A"},[t._v("Hello")]),i("p",{staticClass:"banner__item-B"},[t._v("World!")])]),i("div",{staticClass:"banner-another"},[i("p",{staticClass:"banner-another__item-A"},[t._v("Hello")]),i("p",{staticClass:"banner-another__item-B"},[t._v("World!")])])])])])}],w=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"fullscreen"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("div",{staticClass:"info"},[i("img",{staticClass:"info__avatar-adapt",attrs:{src:t.image,alt:"me.jpg"}}),t._m(0),i("img",{staticClass:"info__avatar",attrs:{src:t.image,alt:"me.jpg"}})])])])])},x=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"info__text"},[i("p",[i("strong",[t._v("Меня зовут Екатерина Хрипунова!")])]),i("p",[t._v("Проживаю в Москве. И в настоящее время нахожусь в поиске работы на позицию Frontend Developer (VUE).")]),i("p",[t._v("Моя цель - дальше развиваться в этом направлении и улучшать свои навыки.")]),i("p",[t._v("С моим портфолио можно ознакомиться на этом сайте. А также найти контактные данные для связи.")]),i("p",[t._v("Жду ваших предложений и всегда открыта для сотрудничества. Давайте знакомиться!")])])}],S={data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])({src:function(t){return t.posts.src}})),{},{image:function(){return"".concat(this.src,"/img/me.jpg")}})},j=S,P=Object(_["a"])(j,w,x,!1,null,null,null),y=P.exports,I=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("h2",{staticClass:"title"},[t._v("Навыки:")]),i("div",{staticClass:"image-icon"},[i("img",{attrs:{src:t.src+"/img/skill.png",alt:"skills.png"}})]),i("div",{staticClass:"skills"},[i("div",{staticClass:"skills__wrapper"},[i("div",{staticClass:"skills__card"},[i("h3",{staticClass:"skills__card-title"},[t._v("Frontend Development:")]),i("p",{staticClass:"skills__card-descr",domProps:{innerHTML:t._s(t.frontend)}})])]),i("div",{staticClass:"skills__wrapper"},[i("div",{staticClass:"skills__card"},[i("h3",{staticClass:"skills__card-title"},[t._v("Сборка:")]),i("p",{staticClass:"skills__card-descr",domProps:{innerHTML:t._s(t.assembly)}})])]),i("div",{staticClass:"skills__wrapper"},[i("div",{staticClass:"skills__card"},[i("h3",{staticClass:"skills__card-title"},[t._v("Other:")]),i("p",{staticClass:"skills__card-descr",domProps:{innerHTML:t._s(t.other)}})])])])])])])},O=[],A={computed:Object(o["a"])({},Object(l["b"])({frontend:function(t){return t.skills.skills.frontend},assembly:function(t){return t.skills.skills.assembly},design:function(t){return t.skills.skills.design},other:function(t){return t.skills.skills.other},src:function(t){return t.posts.src}}))},L=A,E=Object(_["a"])(L,I,O,!1,null,null,null),H=E.exports,M=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("h2",{staticClass:"title"},[t._v("Портфолио:")]),i("div",{staticClass:"image-icon"},[i("img",{attrs:{src:t.src+"/img/port.png",alt:"port.png"}})]),i("div",{staticClass:"posts"},[i("carousel",{attrs:{perPageCustom:[[1280,3],[980,2],[320,1]],paginationEnable:!0,navigationEnabled:!0,paginationColor:"#b3b3b3",paginationActiveColor:"#494ce8"}},t._l(t.posts,(function(s){return i("slide",{key:s.title,staticClass:"post"},[i("div",{staticClass:"post__wrapper"},[i("div",{staticClass:"post__img"},[i("img",{staticClass:"post__img_active",attrs:{src:""+t.src+s.postWeb,alt:"post.postWeb"}}),i("img",{staticClass:"post__img_hover",attrs:{src:""+t.src+s.postWebHover,alt:"post.postWebHover"}})]),i("div",{staticClass:"post__info"},[i("div",{staticClass:"post__head"},[i("h3",{staticClass:"post__title",domProps:{innerHTML:t._s(s.title)}},[i("strong")]),i("div",{staticClass:"post__web"},[i("a",{staticClass:"post__link",attrs:{href:s.gitLinks.link,target:"_blank"}},[i("img",{staticClass:"post__link-icon",attrs:{src:""+t.src+s.postIcon1,alt:"www.png"}})]),i("a",{staticClass:"post__link",attrs:{href:s.gitLinks.github,target:"_blank"}},[i("img",{staticClass:"post__link-icon",attrs:{src:""+t.src+s.postIcon2,alt:"git.png"}})])])]),i("hr",{staticClass:"hr",attrs:{color:"#ececec",width:"320px",align:"left",size:"1px"}}),i("div",{staticClass:"post__props"},[i("div",{staticClass:"card__i"},[i("div",{staticClass:"card__i-tr"},[i("strong",[t._v("Тип:")])]),i("div",{staticClass:"card__i-tr"},[i("strong",[t._v("Технологии:")])])]),i("div",{staticClass:"card__i"},[i("div",{staticClass:"card__i-td",domProps:{innerHTML:t._s(s.postProps.type)}}),i("div",{staticClass:"card__i-td",domProps:{innerHTML:t._s(s.postProps.tech)}})])]),i("hr",{staticClass:"hr",attrs:{color:"#ececec",width:"320px",align:"left",size:"1px"}}),i("p",{staticClass:"post__descr"},[t._v(t._s(s.postProps.postDescr))])])])])})),1)],1)])])])},V=[],T=i("0a63"),W=i.n(T),$={components:{Carousel:T["Carousel"],Slide:T["Slide"]},computed:Object(o["a"])({},Object(l["b"])({posts:function(t){return t.posts.posts},src:function(t){return t.posts.src}}))},B=$,R=(i("ed7e"),Object(_["a"])(B,M,V,!1,null,null,null)),D=R.exports,N=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("h2",{staticClass:"title"},[t._v("Сертификаты:")]),i("div",{staticClass:"image-icon"},[i("img",{attrs:{src:t.src+"/img/edu.png",alt:"edu.png"}})]),i("div",{staticClass:"gallery"},[i("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(s){t.index=null}}}),t._l(t.images,(function(s,a){return i("div",{key:a,staticClass:"image",style:{backgroundImage:"url("+s+")",width:"280px",height:"390px"},on:{click:function(s){t.index=a}}})}))],2)])])])},J=[],F=i("067c"),U=i.n(F),z={components:{gallery:U.a},data:function(){return{images:["/portfolio-vueCLI/img/certificate/vue.png","/portfolio-vueCLI/img/certificate/js.jpg","/portfolio-vueCLI/img/certificate/1C-admin.jpg","/portfolio-vueCLI/img/certificate/1C-content.png"]}},computed:Object(o["a"])({},Object(l["b"])({src:function(t){return t.posts.src}}))},G=z,K=(i("b8be"),Object(_["a"])(G,N,J,!1,null,"439a05c6",null)),X=K.exports,q={components:{aboutMe:y,skills:H,prePortfolio:D,certificates:X}},Q=q,Y=Object(_["a"])(Q,h,k,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[i("section",[i("img",{attrs:{src:"",alt:""}}),i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("Страница не найдена!")]),i("p",[t._v("Перейти "),i("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("на главную?")])],1)])])])},st=[],it=(i("16ab"),{}),at=Object(_["a"])(it,tt,st,!1,null,"1d3047ef",null),et=at.exports,nt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper-content"},[i("portfolio")],1)},rt=[],ct=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("h2",{staticClass:"title"},[t._v("Портфолио:")]),i("div",{staticClass:"image-icon"},[i("img",{attrs:{src:t.src+"/img/port.png",alt:"port.png"}})]),i("div",{staticClass:"cards"},t._l(t.posts,(function(s){return i("div",{key:s.title,staticClass:"cards__wrapper"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card__img"},[i("img",{staticClass:"card__img_active",attrs:{src:""+t.src+s.postWeb,alt:"post.postWeb"}}),i("img",{staticClass:"card__img_hover",attrs:{src:""+t.src+s.postWebHover,alt:"post.postWebHover"}})]),i("div",{staticClass:"card__info"},[i("div",{staticClass:"card__head"},[i("h3",{staticClass:"card__title",domProps:{innerHTML:t._s(s.title)}},[i("strong")]),i("div",{staticClass:"card__web"},[i("a",{staticClass:"card__link",attrs:{href:s.gitLinks.github,target:"_blank"}},[i("img",{staticClass:"card__link-icon",attrs:{src:""+t.src+s.postIcon2,alt:"git.png"}})]),i("a",{staticClass:"card__link",attrs:{href:s.gitLinks.link,target:"_blank"}},[i("img",{staticClass:"card__link-icon",attrs:{src:""+t.src+s.postIcon1,alt:"www.png"}})])])]),i("hr",{attrs:{color:"#ececec",width:"320px",align:"left",size:"1px"}}),i("div",{staticClass:"card__props"},[t._m(0,!0),i("div",{staticClass:"card__i"},[i("div",{staticClass:"card__i-td",domProps:{innerHTML:t._s(s.postProps.type)}}),i("div",{staticClass:"card__i-td",domProps:{innerHTML:t._s(s.postProps.tech)}})])]),i("hr",{attrs:{color:"#ececec",width:"320px",align:"left",size:"1px"}}),i("p",{staticClass:"card__descr"},[t._v(" "+t._s(s.postProps.postDescr)+" ")])])])])})),0)])])])},ot=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card__i"},[i("div",{staticClass:"card__i-tr"},[i("strong",[t._v("Тип:")])]),i("div",{staticClass:"card__i-tr"},[i("strong",[t._v("Технологии:")])])])}],lt={computed:Object(o["a"])({},Object(l["b"])({posts:function(t){return t.posts.posts},src:function(t){return t.posts.src}}))},pt=lt,ut=Object(_["a"])(pt,ct,ot,!1,null,null,null),_t=ut.exports,gt={components:{portfolio:_t}},dt=gt,vt=Object(_["a"])(dt,nt,rt,!1,null,null,null),mt=vt.exports,ft=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper-content"},[i("contacts")],1)},bt=[],Ct=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"fullscreen"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container-content"},[i("h2",{staticClass:"title"},[t._v("Контакты:")]),i("div",{staticClass:"image-icon"},[i("img",{attrs:{src:t.src+"/img/about.png",alt:"contact.png"}})]),i("div",{staticClass:"contact"},[i("div",{staticClass:"contact__wrapper"},[i("div",{staticClass:"contact__item"},[i("div",{staticClass:"contact__item-img"},[i("img",{attrs:{src:t.src+"/img/email.png",alt:"email.png"}})]),i("div",{staticClass:"contact__item-descr"},[i("p",{staticClass:"contact__card-descr"},[t._v("Телефон:")]),i("p",{staticClass:"contact__card-descr",domProps:{innerHTML:t._s("+7 (964) 575 29 30")}})])]),i("div",{staticClass:"contact__item"},[i("div",{staticClass:"contact__item-img"},[i("img",{attrs:{src:t.src+"/img/phone.png",alt:"email.png"}})]),t._m(0)]),i("div",{staticClass:"contact__item-link"},[i("div",{staticClass:"contact__icon"},[i("a",{attrs:{href:"https://vk.com/id5915922",target:"_blank"}},[i("img",{attrs:{src:t.src+"/img/vk2.png",alt:"vk.png"}})])]),i("div",{staticClass:"contact__icon"},[i("a",{attrs:{href:"https://www.linkedin.com/in/ekaterina-khripunova-b19022189/",target:"_blank"}},[i("img",{attrs:{src:t.src+"/img/in.png",alt:"in.png"}})])]),i("div",{staticClass:"contact__icon"},[i("a",{attrs:{href:"https://github.com/Barranka",target:"_blank"}},[i("img",{attrs:{src:t.src+"/img/github_icon.png",alt:"github.png"}})])])])])])])])])},ht=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"contact__item-descr"},[i("p",{staticClass:"contact__card-descr"},[t._v("Почта:")]),i("p",{staticClass:"contact__card-descr"},[t._v("cat123_93@mail.ru")])])}],kt={computed:Object(o["a"])({},Object(l["b"])({src:function(t){return t.posts.src}}))},wt=kt,xt=(i("3cd1"),Object(_["a"])(wt,Ct,ht,!1,null,"690cff02",null)),St=xt.exports,jt={components:{contacts:St}},Pt=jt,yt=Object(_["a"])(Pt,ft,bt,!1,null,null,null),It=yt.exports;a["a"].use(C["a"]);var Ot=new C["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:Z},{path:"/portfolio",name:"portfolio",component:mt},{path:"/contact",name:"contact",component:It},{path:"*",name:"notFound",component:et}]}),At={state:{skills:{frontend:"VUE JS, Nuxt.js, Axios, JavaScript, ES6, Node.js, JSON, AJAX, SASS, CSS, HTML, BEM ",assembly:"VUE CLI, Nuxt",other:"1C-Bitrix, HostCMS, Photoshop, English language (pre-intermediate)"}}},Lt={state:{src:"/portfolio-vueCLI",posts:[{title:"SSR блог на Nuxt.js",postWeb:"/img/portfolio/blog.png",postWebHover:"/img/portfolio/blog.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Блог с админкой",tech:"Nuxt.js, Axios, Vuex, Showdown, Codemirror, SASS, Firebase",postDescr:'Современный блог на nuxt.js + vue.js с рендерингом и админкой, полным SEO и небольшой CRM системой внутри, которая будет показывать все комментарии с возможностью сменять статус "опубликован/не опубликован", а также удалять "спам".'},gitLinks:{github:"https://github.com/Barranka/blog-nuxt",link:"https://barranka.github.io/blog-nuxt/"}},{title:"Приложение <br/> Shop",postWeb:"/img/portfolio/shop.png",postWebHover:"/img/portfolio/shop.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Интернет-магазин ",tech:"VueCLI, Vuex, Vue-router, Vue-carousel, SASS",postDescr:"Работа с Vue-Router, создание динамических маршрутов, хранение и взаимодействие с данными через Vuex, работа с общим стейтом приложения. Подгрузка единичного товара через отдельный компонент. Подключение слайдера и подгрузка картинок в слайд из отдельного хранилища."},gitLinks:{github:"https://github.com/Barranka/shop-vue",link:"https://barranka.github.io/shop-vue/"}},{title:"Формы и модалки",postWeb:"/img/portfolio/modals.png",postWebHover:"/img/portfolio/modals.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Переиспользоваемые модальные окна",tech:"VueCLI, Vuelidate, Vue-router, SASS",postDescr:'Шаблон модальных окон, который можно быстро и удобно переиспользовать на последующих проектах. Динамические атрибуты, использование слотов на практике. Валидация входящих параметров, связь дочерних компонентов, директива "v-show" и "v-if", построение сложных анимаций.'},gitLinks:{github:"https://github.com/Barranka/modals-components",link:"https://barranka.github.io/modals-components/"}},{title:"Заметки на&nbsp;VueCLI",postWeb:"/img/portfolio/notes.png",postWebHover:"/img/portfolio/notes.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Заметками",tech:"VueCLI, Vuex, SASS",postDescr:'Использование знаний из "Основы vue.js": вывод HTML кода, работа с CSS классами, динамическая смена классов, работа со списками, сбросы и валидация, оптимизация приложения с computed. Компонентный подход, доступ к DOM элементам, работа с компонентами, отслеживание изменений с watch, обработка ошибок.'},gitLinks:{github:"https://github.com/Barranka/notes",link:"https://barranka.github.io/notes/"}},{title:"Users&nbsp;CRM",postWeb:"/img/portfolio/userscrm.png",postWebHover:"/img/portfolio/userscrm.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Приложение с REST API",tech:"VueCLI, REST API, Axios, Vuex, Vue-router, SASS",postDescr:'В приложении выводится список users по средствам REST API, с использованием Axios и Vuex. Отправка POST и GET запросов, подгрузка данных со стороннего API. Методы "then" и обработка ответов, "catch" и обработка ошибок. Сортировка полученных данных по возрасту, полу и имени и одновременное использование пагинации.'},gitLinks:{github:"https://github.com/Barranka/usersCRM",link:"https://barranka.github.io/usersCRM/#/"}},{title:"GitHub Finder",postWeb:"/img/portfolio/gitfinder.png",postWebHover:"/img/portfolio/gitfinder.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Приложение с REST API GitHub",tech:"VueCLI, REST API, Axios, Vuex, Vue-router, SASS",postDescr:"Использование API GitHub. Подключение к API, cоздание UI компонента для поиска, cлежка за данными из инпута, отправка запроса с пользовательскими данными, обработка запрос-ответа, отрисовка полученных данных, вывод репозиториев пользователей и обработка ошибок."},gitLinks:{github:"https://github.com/Barranka/github-finder",link:"https://barranka.github.io/github-finder/"}},{title:"Приложение <br/> Notify",postWeb:"/img/portfolio/notify.png",postWebHover:"/img/portfolio/notify.gif",postIcon1:"/img/www.png",postIcon2:"/img/cat.png",postProps:{type:"Новостная лента с подгрузкой данных",tech:"VueCLI, REST API, CORS, Axios, Vuex, Vue&nbsp;-&nbsp;router, SASS",postDescr:'Создание своего API и работа с CORS. Возможность делиться своим API. "Load More" - постепенная подгрузка содержимого и "ленивая" подгрузка. Хранение данных полученных с API в Vuex. Возможность переиспользования компонента новостной ленты в следующих проектах.'},gitLinks:{github:"https://github.com/Barranka/notify",link:"https://barranka.github.io/notify/"}}]}};a["a"].use(l["a"]);var Et=new l["a"].Store({modules:{skills:At,posts:Lt}});i("c1c3");a["a"].use(W.a),a["a"].config.productionTip=!1,new a["a"]({router:Ot,store:Et,render:function(t){return t(b)}}).$mount("#app")},"7ce4":function(t,s,i){},"96ad":function(t,s,i){},b8be:function(t,s,i){"use strict";var a=i("96ad"),e=i.n(a);e.a},c1c3:function(t,s,i){},c701:function(t,s,i){},ed7e:function(t,s,i){"use strict";var a=i("7ce4"),e=i.n(a);e.a}});