// Paginas do aplicativo
import AboutCovidPage from '../pages/about-covid.f7.html';
import InfectedPage from '../pages/infected.f7.html';
import InfectedQuizPage from '../pages/infected-quiz.f7.html';
import DiagnosisPage from '../pages/diagnosis.f7.html';
import MaskPage from '../pages/mask.f7.html';
import NewsPage from '../pages/news.f7.html';
import PreventionPage from '../pages/prevention.f7.html';
import RiskGroupPage from '../pages/risk-group.f7.html';
import RiskGroupQuizPage from '../pages/risk-group-quiz.f7.html';
import RiskGroupDescriptionPage from '../pages/risk-group-description.f7.html';
import StatsPage from '../pages/stats.f7.html';
import SymptomsPage from '../pages/symptoms.f7.html';
import WhereHelpPage from '../pages/where-help.f7.html';
import WhenHelpPage from '../pages/when-help.f7.html';
import PlacesHelpPage from '../pages/places-help.f7.html';
import OtherPlacesHelpPage from '../pages/other-places-help.f7.html';
import UsefulPhonesPage from '../pages/useful-phones.f7.html';

import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';

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
        options: {
            context: {
                age: '{{age}}',
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
        path: '/risk-group-quiz/:age/:symptoms',
        component: RiskGroupQuizPage,
        options: {
            context: {
                age: '{{age}}',
                symptoms: '{{symptoms}}'
            },
        },

        on: {
            pageInit: function (event, page) {
                console.log(page.route.params.age);
            }
        }
    },

    {
        path: '/risk-group/',
        component: RiskGroupPage,
    },

    {
        path: '/risk-group-description/:age/',
        component: RiskGroupDescriptionPage,
        options: {
            context: {
                age: '{{age}}',
            }
        },
    },

    {
        path: '/diagnosis/:diagnosis',
        component: DiagnosisPage,
        options: {
            context: {
                diagnosis: '{{diagnosis}}'
            }
        }
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
        path: '/when-help/',
        component: WhenHelpPage
    },

    {
        path: '/places-help/',
        component: PlacesHelpPage
    },

    {
        path: '/other-places-help/',
        component: OtherPlacesHelpPage
    },

    {
        path: '/useful-phones/',
        component: UsefulPhonesPage
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
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;
