!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),s=a("2TvXO"),i=a("iU1Pc"),u=a("5IjG7"),c=a("8H72y"),l=a("86MAb"),f=document.querySelector(".search-form"),p=document.querySelector(".gallery"),d=new(0,c.PixabayAPI),y=new(e(u))(".gallery a",{captionsData:"alt",captionDelay:250});function h(){return(h=e(o)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.page+=1,e.prev=1,e.next=4,d.getPhotosByQuery();case 4:n=e.sent,d.page*d.per_page>n.data.totalHits&&g.unobserve(document.querySelector(".target-element")),p.insertAdjacentHTML("beforeend",(0,l.default)(n.data.hits)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var g=new IntersectionObserver((function(e,t){e[0].isIntersecting&&function(e){h.apply(this,arguments)}()}),{root:null,rootMargin:"600px",threshold:1});function v(){return(v=e(o)(e(s).mark((function t(r){var n;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),d.q=r.currentTarget.elements.searchQuery.value,d.page=1,t.prev=3,t.next=6,d.getPhotosByQuery();case 6:if(0!==(n=t.sent).data.hits.length){t.next=12;break}return e(i).Notify.failure("Sorry, there are no images matching your search query. Please try again."),p.innerHTML="",r.target.reset(),t.abrupt("return");case 12:if(e(i).Notify.success("'Hooray! We found ".concat(n.data.totalHits," images.'")),!(n.data.totalHits<=d.per_page)){t.next=17;break}return p.innerHTML=(0,l.default)(n.data.hits),y.refresh(),t.abrupt("return");case 17:p.innerHTML=(0,l.default)(n.data.hits),y.refresh(),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(3),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[3,21]])})))).apply(this,arguments)}f.addEventListener("submit",(function(e){return v.apply(this,arguments)}))}();
//# sourceMappingURL=infinity-scroll.60f3dccb.js.map
