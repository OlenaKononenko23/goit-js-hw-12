import{a as _,i as c,S as w}from"./assets/vendor-2cfd16ce.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function g(t,r){const a="43045088-79308e5151ececf264bff6e88",i="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:t,image_type:"photo",orientation:"horizontal",per_page:15,page:r,safesearch:!0}),s=`${i}?${e}`;return(await _.get(s)).data}function b(t){const{largeImageURL:r,webformatURL:a,tags:i,likes:e,views:s,comments:l,downloads:L}=t;return`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
          <img
              src="${a}"
              alt="${i}"
              width="360"
              height="200"
              class="gallery-img"
          />
          <ul class="gallery-descript">
          <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${s}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${l}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Downloads</span> ${L}</li>
       </ul>
      </a>
  </li>`}function v(t){return t.map(b).join("")}let n="",d=1,f=0,m=0;const p=document.querySelector(".form"),y=document.querySelector(".gallery"),o=document.querySelector(".load-more"),u=document.querySelector(".loader");p.addEventListener("submit",async t=>{if(t.preventDefault(),y.innerHTML="",n=t.target.elements.value.value,d=1,n){o.classList.add("is-hidden"),u.classList.remove("is-hidden");try{const r=await g(n,d);f=r.totalHits,m=0,h(r)}catch(r){console.log(r)}}else c.error({title:"Error",message:"The search field is empty. Please try again!"});p.reset()});o.addEventListener("click",async()=>{o.disabled=!0,u.classList.remove("is-hidden");try{const t=await g(n,++d);h(t)}catch(t){console.log(t)}o.disabled=!1});function h(t){m+=t.hits.length,t.hits.length?m>=f?(o.classList.add("is-hidden"),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):o.classList.remove("is-hidden"):c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const r=v(t.hits);y.insertAdjacentHTML("beforeend",r),u.classList.add("is-hidden");const a=document.querySelector(".gallery-item");if(a){const i=a.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}new w(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
