const domain = window.location.hostname;
const portNumber = window.location.port;
const { pathname } = window.location;

window.MFE_VTO.init({
    config: {
        libraryInfo: {
            maskPrefix: 'https://cms-webservice.modiface.com/data/mask_images/cross/',
            domain: 'duvjrttn4d5tj.cloudfront.net',
            path: '/libmfelivemakeup-web/',
            version: '4.1.0',
        },
        moduleMode: 'Makeup',
    },
});
