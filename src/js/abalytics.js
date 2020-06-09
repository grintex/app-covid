import $$ from 'dom7';

/**
 * Analytics with a grain of salt. Integrates Google Analytics into Framework7.
 * 
 * @author Fernando Bevilacqua <dovyski@gmail.com>
 * @license MIT
 */
var Abalytics = {
    f7: null,
    
    trackScreenView: function(screenName) {
        Abalytics.track('event', 'screen_view', {
            'screen_name': screenName
        });
    },

    addScreenTracking: function() {
        $$(document).on('page:afterin', function (e) {
            var page = e.detail;

            if(!page || page.direction != 'forward') {
                return;
            }

            Abalytics.trackScreenView(page.name);
        });
      },

    track: function(type, label, data) {
        if(type != 'event') {
            console.error('invalid event type: ' + type);
            return;
        }

        if(!gtag) {
            console.warn('gtag is not present, unable to track Abalytics:', type, label, data);
            return;
        }

        console.log('[Abalytics] ' + type + ' | ' + label + ': ', data);
        gtag(type, label, data);
    },

    init: function (f7) {
        // Save f7 instance
        Abalytics.f7 = f7;
        f7.abalytics = Abalytics;

        // Track things
        Abalytics.addScreenTracking();
    },
};

export default Abalytics;
