// Drum.js
// description: Micro framework
// author: thenew.fr


/**
 * A small (<1kB) fill-in to add .hasClass(), .addClass(), .removeClass() and .toggleClass() to every HTML-Element.
 * https://github.com/EarMaster/CSSClass
 */

(function(){Array.prototype.CSSClassIndexOf=Array.prototype.indexOf||function(a){for(var b=this.length,e=0;e<b;e++)if(this[e]===a)return e;return-1};var d="classList"in document.createElement("a"),c=Element.prototype;d?(c.hasClass||(c.hasClass=function(a){var b=!0;Array.prototype.slice.call(this.classList);a=a.split(" ");for(var e=0;e<a.length;e++)this.classList.contains(a[e])||(b=!1);return b}),c.addClass||(c.addClass=function(a){a=a.split(" ");for(var b=0;b<a.length;b++)this.hasClass(a[b])||this.classList.add(a[b]);
return this}),c.removeClass||(c.removeClass=function(a){this.className.split(" ");a=a.split(" ");for(var b=0;b<a.length;b++)this.hasClass(a[b])&&this.classList.remove(a[b]);return this}),c.toggleClass||(c.toggleClass=function(a){a=a.split(" ");for(var b=0;b<a.length;b++)this.classList.toggle(a[b]);return this})):(c.hasClass||(c.hasClass=function(a){var b=!0,e=this.className.split(" ");a=a.split(" ");for(var c=0;c<a.length;c++)-1===e.CSSClassIndexOf(a[c])&&(b=!1);return b}),c.addClass||(c.addClass=
function(a){a=a.split(" ");for(var b=0;b<a.length;b++)this.hasClass(a[b])||(this.className=""!==this.className?this.className+" "+a[b]:a[b]);return this}),c.removeClass||(c.removeClass=function(a){var b=this.className.split(" ");a=a.split(" ");for(var c=0;c<a.length;c++)this.hasClass(a[c])&&b.splice(b.CSSClassIndexOf(a[c]),1);this.className=b.join(" ");return this}),c.toggleClass||(c.toggleClass=function(a){a=a.split(" ");for(var b=0;b<a.length;b++)this.hasClass(a[b])?this.removeClass(a[b]):this.addClass(a[b]);
return this}));d=NodeList.prototype;d.hasClass||(d.hasClass=function(a,b){void 0===b&&(b=!0);for(var c=0,d=b?!0:!1;(b&&!0===d||!b&&!1===d)&&c<this.length;++c)d=this[c].hasClass(a);return d});d.addClass||(d.addClass=function(a){for(var b=0;b<this.length;++b)this[b].addClass(a)});d.removeClass||(d.removeClass=function(a){for(var b=0;b<this.length;++b)this[b].removeClass(a)});d.toggleClass||(d.toggleClass=function(a){for(var b=0;b<this.length;++b)this[b].toggleClass(a)})})();

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
// ;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};

/**
 * A simple forEach() implementation for Arrays, Objects and NodeLists
 * https://gist.github.com/cferdinandi/42f985de9af4389e7ab3
 * @private
 * @param {Array|Object|NodeList} collection Collection of items to iterate
 * @param {Function} callback Callback function for each iteration
 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
 */
/*var forEach = function (collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (var prop in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                callback.call(scope, collection[prop], prop, collection);
            }
        }
    } else {
        for (var i = 0, len = collection.length; i < len; i++) {
            callback.call(scope, collection[i], i, collection);
        }
    }
};*/

/**
 * Get siblings of an element
 * https://gist.github.com/cferdinandi/6203237
 * @param  {Element} elem
 * @return {Object}
 */
var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for ( ; sibling; sibling = sibling.nextSibling )
       if ( sibling.nodeType == 1 && sibling != elem )
          siblings.push( sibling );
    return siblings;
}

/**
 * Remove whitespace from a string
 * @private
 * @param {String} string
 * @returns {String}
 */
var trim = function ( string ) {
    return string.replace(/^\s+|\s+$/g, '');
};
