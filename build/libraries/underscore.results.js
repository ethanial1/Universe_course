define("underscore.results",["underscore"],function(o){return o.mixin({resultExtend:function(e,r,t,n){var c=e[r],a="function"==typeof c?c.call(n||e,r):o.result(e,r),s=a instanceof Array?"array":typeof a;if(!t)switch(s){case"array":return a.slice(0);case"object":return o.extend({},a);default:throw"Incorrect types in resultExtend"}r=t instanceof Array?"array":typeof t;if(!a)switch(r){case"array":a=[],s="array";break;case"object":a={},s="object";break;default:throw"Incorrect types in resultExtend"}if(s!==r)throw"Incorrect types in resultExtend";switch(s){case"array":return a.slice(0).concat(t);case"object":return o.extend({},a,t)}throw"Incorrect types in resultExtend"}}),o});