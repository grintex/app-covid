// Paginas do aplicativo
import AboutCovidPage from '../pages/about-covid.f7.html';
import InfectedPage from '../pages/infected.f7.html';
import InfectedQuizPage from '../pages/infected-quiz.f7.html';
import MaskPage from '../pages/mask.f7.html';
import NewsPage from '../pages/news.f7.html';
import PreventionPage from '../pages/prevention.f7.html';
import RiskGroupPage from '../pages/risk-group.f7.html';
import StatsPage from '../pages/stats.f7.html';
import SymptomsPage from '../pages/symptoms.f7.html';
import WhereHelpPage from '../pages/where-help.f7.html';

import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
    {
        path: '/',
        component: HomePage,
    },

    // Page with buttons asking if the target is adult or child
    {
        path: '/infected/',
        component: InfectedPage
    },

    // Page with symptoms quiz
    {
        path: '/infected/:age/',
        component: InfectedQuizPage,
        on: {
            pageInit: function(event, page) {
                console.log(page.route.params.age);
            },
        },
    },

    {
        path: '/about-covid/',
        component: AboutCovidPage
    },

    {
        path: '/symptoms/',
        component: SymptomsPage
    },

    {
        path: '/risk-group/',
        component: RiskGroupPage
    },

    {
        path: '/prevention/',
        component: PreventionPage
    },

    {
        path: '/where-help/',
        component: WhereHelpPage
    },

    {
        path: '/stats/',
        component: StatsPage
    },

    {
        path: '/news/',
        component: NewsPage
    },

    {
        path: '/mask/',
        component: MaskPage
    },

    {
        path: '/about/',
        component: AboutPage
    },

    {
        path: '/form/',
        component: FormPage,
    },

    {
        path: '/catalog/',
        component: CatalogPage,
    },

    {
        path: '/product/:id/',
        component: ProductPage,
    },

    {
        path: '/settings/',
        component: SettingsPage,
    },

    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },

    {
        path: '/request-and-load/user/:userId/',
        async: function(routeTo, routeFrom, resolve, reject) {
            // Router instance
            var router = this;

            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            // User ID from request
            var userId = routeTo.params.userId;

            // Simulate Ajax Request
            setTimeout(function() {
                // We got user data from request
                var user = {
                    firstName: 'Vladimir',
                    lastName: 'Kharlampidi',
                    about: 'Hello, i am creator of Framework7! Hope you like it!',
                    links: [{
                            title: 'Framework7 Website',
                            url: 'http://framework7.io',
                        },
                        {
                            title: 'Framework7 Forum',
                            url: 'http://forum.framework7.io',
                        },
                    ]
                };
                // Hide Preloader
                app.preloader.hide();

                // Resolve route to load page
                resolve({
                    component: RequestAndLoad,
                }, {
                    context: {
                        user: user,
                    }
                });
            }, 1000);
        },
    },

    {
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;
