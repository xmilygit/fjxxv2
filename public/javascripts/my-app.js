var theme = 'ios';
if (location.href.indexOf('theme=md') >= 0) theme = 'md';


var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'school manger',
    theme: theme,
    // App id
    id: '',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [{
        path: '/accountmng/',
        url: './pages/Accountmng',
        on: {
            pageAfterIn: function(event, page) {
                // create searchbar
                var searchbar = app.searchbar.create({
                    el: '.searchbar',
                    searchContainer: '.list',
                    searchIn: '.item-title',
                    on: {
                        search(sb, query, previousQuery) {
                            console.log(query, previousQuery);
                        }
                    }
                });
            }
        }
    }, ],
    // ... other parameters
});



var mainView = app.views.create('.view-main');