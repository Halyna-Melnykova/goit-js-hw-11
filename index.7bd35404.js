!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var s=a("bpxeT"),i=a("2TvXO"),o=a("iU1Pc"),c=a("5IjG7"),u=a("8H72y"),l=a("86MAb"),d=document.querySelector(".search-form"),f=document.querySelector(".gallery"),p=document.querySelector(".load-more"),h=new(0,u.PixabayAPI),y=new(e(c))(".gallery a",{captionsData:"alt",captionDelay:250});function g(){return(g=e(s)(e(i).mark((function t(r){var n;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),h.q=r.currentTarget.elements.searchQuery.value,h.page=1,t.prev=3,t.next=6,h.getPhotosByQuery();case 6:if(0!==(n=t.sent).data.hits.length){t.next=13;break}return e(o).Notify.failure("Sorry, there are no images matching your search query. Please try again."),f.innerHTML="",p.classList.add("is-hidden"),r.target.reset(),t.abrupt("return");case 13:if(e(o).Notify.success("'Hooray! We found ".concat(n.data.totalHits," images.'")),!(n.data.totalHits<=h.per_page)){t.next=20;break}return f.innerHTML=(0,l.default)(n.data.hits),p.classList.add("is-hidden"),y.refresh(),m(),t.abrupt("return");case 20:f.innerHTML=(0,l.default)(n.data.hits),p.classList.remove("is-hidden"),y.refresh(),m(),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(3),console.log(t.t0);case 29:case"end":return t.stop()}}),t,null,[[3,26]])})))).apply(this,arguments)}function v(){return(v=e(s)(e(i).mark((function t(r){var n;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h.page+=1,t.prev=1,t.next=4,h.getPhotosByQuery();case 4:n=t.sent,h.page*h.per_page>n.data.totalHits?(p.classList.add("is-hidden"),e(o).Notify.info("We are sorry, but you have reached the end of search results.")):p.classList.remove("is-hidden"),f.insertAdjacentHTML("beforeend",(0,l.default)(n.data.hits)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(){var e=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}d.addEventListener("submit",(function(e){return g.apply(this,arguments)})),p.addEventListener("click",(function(e){return v.apply(this,arguments)}))}();
//# sourceMappingURL=index.7bd35404.js.map
