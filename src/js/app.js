import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';
// Import analytics stuff 
import Abalytics from './abalytics.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
    root: '#app', // App root element
    component: App, // App main component
    id: 'cc.uffs.extension.covid', // App bundle ID
    name: 'coronavirus-chapeco', // App name
    theme: 'auto', // Automatic theme detection

    // App routes
    routes: routes,

    // Register service worker
    serviceWorker: Framework7.device.cordova ? {} : {
        path: '/service-worker.js',
    },

    // Input settings
    input: {
        scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
        scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
    },
    on: {
        init: function() {
            var f7 = this;
            if (f7.device.cordova) {
                // Init cordova APIs (see cordova-app.js)
                cordovaApp.init(f7);
            } else {
                // Save context to allow 'Add to home screen'
                f7.deferredInstallPrompt = null;

                window.addEventListener('beforeinstallprompt', function(e) {
                    // Stash the event so it can be triggered later.
                    f7.deferredInstallPrompt = e;
                    console.log('Saving beforeinstallprompt: ', e);
                });
            }

            Abalytics.init(f7);
        },
    },
});
