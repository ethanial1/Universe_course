!function(){const e="development"!==window.ADAPT_BUILD_TYPE;function r(e,r){if(e&&"string"==typeof e){const o=document.createElement("script");o.onload=r,o.src=e,document.getElementsByTagName("head")[0].appendChild(o)}}function o(){void 0===window.jQuery?setTimeout(o,100):function(){Modernizr.touch=Modernizr.touchevents;var e=Modernizr.touch?"touch":"no-touch";$("html").addClass(e),require(["handlebars","underscore","regenerator-runtime","core-js","underscore.results","backbone","backbone.controller","backbone.controller.results","backbone.es6","velocity","imageReady","inview","jqueryMobile","libraries/jquery.resize","scrollTo","bowser","enum","react","react-dom","html-react-parser","semver"],i)}()}function i(e,r){window._=r,window.Handlebars=e,require(["events/touch"],n)}function n(){require(["templates"],s)}function s(){$.ajaxPrefilter(function(e){e.crossDomain=!0}),r("adapt/js/adapt.min.js")}!function(){const n="adapt/css/adapt.css",i="adapt.css";function e(){var e=function(){var o=document.querySelectorAll("link");for(let e=0,r=o.length;e<r;e++){const i=o[e];if(i.href.substr(-n.length)===n)return i}}();e&&function(e){console.warn("WARN: DEPRECATED - CSS location needs updating from",n,"to",i);const r=e.parentNode;r.removeChild(e);const o=document.createElement("link");o.href=i,o.rel="stylesheet",r.appendChild(o)}(e)}document.body?e():document.addEventListener("DOMContentLoaded",e)}(),(window.__loadScript=r)("libraries/require.min.js",function(){requirejs.config({map:{"*":{coreJS:"core/js",coreViews:"core/js/views",coreModels:"core/js/models",coreCollections:"core/js/collections"}},paths:{"regenerator-runtime":"libraries/regenerator-runtime.min","core-js":"libraries/core-js.min",jquery:"libraries/jquery.min",underscore:"libraries/underscore.min","underscore.results":"libraries/underscore.results",backbone:"libraries/backbone.min","backbone.controller":"libraries/backbone.controller","backbone.controller.results":"libraries/backbone.controller.results","backbone.es6":"libraries/backbone.es6",handlebars:"libraries/handlebars.min",velocity:"libraries/velocity.min",imageReady:"libraries/imageReady",inview:"libraries/inview",scrollTo:"libraries/scrollTo.min",bowser:"libraries/bowser",enum:"libraries/enum",jqueryMobile:"libraries/jquery.mobile.custom.min",react:e?"libraries/react.production.min":"libraries/react.development","react-dom":e?"libraries/react-dom.production.min":"libraries/react-dom.development","html-react-parser":"libraries/html-react-parser.min",semver:"libraries/semver"}}),r("libraries/jquery.min.js",o)})}();