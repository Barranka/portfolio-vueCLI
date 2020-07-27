export default {
	state: {
		src: process.env.NODE_ENV === 'production' ? '/portfolio-vueCLI' : '',
		posts: [
			{
				title: 'SSR блог на Nuxt.js', postWeb: '/img/portfolio/blog.png', postWebHover: '/img/portfolio/blog.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Блог с админкой', tech: 'Nuxt.js, Axios, Vuex, Codemirror, SASS, Firebase', postDescr:'Современный блог на nuxt.js + vue.js с рендерингом и админкой, полным SEO и небольшой CRM системой внутри, которая будет показывать все комментарии с возможностью сменять статус "опубликован/не опубликован", а также удалять "спам".'}, gitLinks: { github: 'https://github.com/Barranka/blog-nuxt', link: 'https://barranka.github.io/blog-nuxt/'},
			},
			{
				title: 'Приложение <br/> Shop', postWeb: '/img/portfolio/shop.png', postWebHover: '/img/portfolio/shop.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Интернет-магазин ', tech: 'VueCLI, Vuex, Vue-router, Vue-carousel, SASS', postDescr:'Работа с Vue-Router, создание динамических маршрутов, хранение и взаимодействие с данными через Vuex, работа с общим стейтом приложения. Подгрузка единичного товара через отдельный компонент. Подключение слайдера и подгрузка картинок в слайд из отдельного хранилища.'}, gitLinks: { github: 'https://github.com/Barranka/shop-vue', link: 'https://barranka.github.io/shop-vue/'},
			},
			{
				title: 'Формы и модалки', postWeb: '/img/portfolio/modals.png', postWebHover: '/img/portfolio/modals.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Переиспользоваемые модальные окна', tech: 'VueCLI, Vuelidate, Vue-router, SASS', postDescr:'Шаблон модальных окон, который можно быстро и удобно переиспользовать на последующих проектах. Динамические атрибуты, использование слотов на практике. Валидация входящих параметров, связь дочерних компонентов, директива "v-show" и "v-if", построение сложных анимаций.'}, gitLinks: { github: 'https://github.com/Barranka/modals-components', link: 'https://barranka.github.io/modals-components/'},
			},
			{
				title: 'Заметки на&nbsp;VueCLI', postWeb: '/img/portfolio/notes.png', postWebHover: '/img/portfolio/notes.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Заметками', tech: 'VueCLI, Vuex, SASS', postDescr:'Использование знаний из "Основы vue.js": вывод HTML кода, работа с CSS классами, динамическая смена классов, работа со списками, сбросы и валидация, оптимизация приложения с computed. Компонентный подход, доступ к DOM элементам, работа с компонентами, отслеживание изменений с watch, обработка ошибок.'},gitLinks: { github: 'https://github.com/Barranka/notes', link: 'https://barranka.github.io/notes/'},
			},
			{
				title: 'Users&nbsp;CRM', postWeb: '/img/portfolio/userscrm.png', postWebHover: '/img/portfolio/userscrm.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Приложение с REST API', tech: 'VueCLI, REST API, Axios, Vuex, Vue-router, SASS', postDescr:'В приложении выводится список users по средствам REST API, с использованием Axios и Vuex. Отправка POST и GET запросов, подгрузка данных со стороннего API. Методы "then" и обработка ответов, "catch" и обработка ошибок. Сортировка полученных данных по возрасту, полу и имени и одновременное использование пагинации.'}, gitLinks: { github: 'https://github.com/Barranka/usersCRM', link: 'https://barranka.github.io/usersCRM/#/'},
			},
			{
				title: 'GitHub Finder', postWeb: '/img/portfolio/gitfinder.png', postWebHover: '/img/portfolio/gitfinder.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Приложение с REST API GitHub', tech: 'VueCLI, REST API, Axios, Vuex, Vue-router, SASS', postDescr:'Использование API GitHub. Подключение к API, cоздание UI компонента для поиска, cлежка за данными из инпута, отправка запроса с пользовательскими данными, обработка запрос-ответа, отрисовка полученных данных, вывод репозиториев пользователей и обработка ошибок.'}, gitLinks: { github: 'https://github.com/Barranka/github-finder', link: 'https://barranka.github.io/github-finder/'},
			},
			{
				title: 'Приложение <br/> Notify', postWeb: '/img/portfolio/notify.png', postWebHover: '/img/portfolio/notify.gif', postIcon1: '/img/www.png', postIcon2: '/img/cat.png', postProps: {  type: 'Новостная лента с подгрузкой данных', tech: 'VueCLI, REST API, CORS, Axios, Vuex, Vue&nbsp;-&nbsp;router, SASS', postDescr:'Создание своего API и работа с CORS. Возможность делиться своим API. "Load More" - постепенная подгрузка содержимого и "ленивая" подгрузка. Хранение данных полученных с API в Vuex. Возможность переиспользования компонента новостной ленты в следующих проектах.'},gitLinks: { github: 'https://github.com/Barranka/notify', link: 'https://barranka.github.io/notify/'}
			}
		]
	}
}