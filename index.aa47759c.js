const t=document.querySelector(".button"),e=document.querySelector(".message-start"),n=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),s=document.querySelectorAll(".field-cell"),o=document.querySelector(".game-score"),l=document.querySelector(".add-points"),i=()=>.1>=Math.random()?4:2,d=()=>{let t;do t=Math.floor(Math.random()*s.length);while(""!==s[t].textContent)return t},r=()=>{s.forEach(t=>{switch(t.classList.remove("field-cell--2","field-cell--4","field-cell--8","field-cell--16","field-cell--32","field-cell--64","field-cell--128","field-cell--256","field-cell--512","field-cell--1024","field-cell--2048"),t.textContent){case"":break;case"2":t.classList.add("field-cell--2");break;case"4":t.classList.add("field-cell--4");break;case"8":t.classList.add("field-cell--8");break;case"16":t.classList.add("field-cell--16");break;case"32":t.classList.add("field-cell--32");break;case"64":t.classList.add("field-cell--64");break;case"128":t.classList.add("field-cell--128");break;case"256":t.classList.add("field-cell--256");break;case"512":t.classList.add("field-cell--512");break;case"1024":t.classList.add("field-cell--1024");break;case"2048":t.classList.add("field-cell--2048"),n.classList.remove("hidden")}})};t.addEventListener("click",()=>{t.classList.remove("start"),t.textContent="Restart",t.classList.add("restart"),e.classList.add("hidden"),n.classList.add("hidden"),a.classList.add("hidden"),o.textContent="0";for(let t=0;t<s.length;t++)s[t].textContent="";let l=Math.floor(Math.random()*s.length),d=(()=>{let t;do t=Math.floor(Math.random()*s.length);while(t===l)return t})();s[l].textContent=`${i()}`,s[d].textContent=`${i()}`,r()}),document.addEventListener("keydown",t=>{let e;t.preventDefault();let n="0",c=()=>{l.classList.contains("animationScore")&&l.classList.remove("animationScore"),l.offsetWidth,l.classList.remove("hidden"),l.textContent=`+${n}`,l.classList.add("animationScore"),l.addEventListener("animationend",()=>{l.classList.add("hidden")})};for(let t of s)if(""!==t.textContent){e=!0;break}if("ArrowUp"===t.key&&!0===e){let t=!1;for(let e=0;e<s.length;e++){let a=e,l=()=>{a>3&&""!==s[a].textContent&&""===s[a-4].textContent?(s[a-4].textContent=s[a].textContent,s[a].textContent="",a-=4,t=!0,l()):a>3&&""!==s[a].textContent&&s[a-4].textContent===s[a].textContent&&!s[a-4].classList.contains("reserved")&&(s[a-4].textContent*=2,s[a].textContent="",s[a-4].classList.add("animationMerge"),s[a-4].classList.add("reserved"),n=`${+n+ +s[a-4].textContent}`,s[a-4].addEventListener("animationend",()=>{s[a-4].classList.remove("animationMerge")}),t=!0,o.textContent=`${+s[a-4].textContent+ +o.textContent}`,c())};l()}if(t){let t=d();s[t].textContent=`${i()}`,s[t].classList.add("animationAppear"),s[t].addEventListener("animationend",()=>{s[t].classList.remove("animationAppear")})}r()}if("ArrowDown"===t.key&&!0===e){let t=!1;for(let e=s.length-1;e>=0;e--){let a=e,l=()=>{a<12&&""!==s[a].textContent&&""===s[a+4].textContent?(s[a+4].textContent=s[a].textContent,s[a].textContent="",a+=4,t=!0,l()):a<12&&""!==s[a].textContent&&s[a+4].textContent===s[a].textContent&&!s[a+4].classList.contains("reserved")&&(s[a+4].textContent*=2,s[a].textContent="",s[a+4].classList.add("animationMerge"),s[a+4].classList.add("reserved"),n=`${+n+ +s[a+4].textContent}`,s[a+4].addEventListener("animationend",()=>{s[a+4].classList.remove("animationMerge")}),t=!0,o.textContent=`${+s[a+4].textContent+ +o.textContent}`,c())};l()}if(t){let t=d();s[t].textContent=`${i()}`,s[t].classList.add("animationAppear"),s[t].addEventListener("animationend",()=>{s[t].classList.remove("animationAppear")})}r()}if("ArrowLeft"===t.key&&!0===e){let t=!1;for(let e=0;e<s.length;e++){let a=e,l=()=>{a%4!=0&&""!==s[a].textContent&&""===s[a-1].textContent?(s[a-1].textContent=s[a].textContent,s[a].textContent="",a-=1,t=!0,l()):a%4==0||""===s[a].textContent||s[a-1].textContent!==s[a].textContent||s[a-1].classList.contains("reserved")||(s[a-1].textContent*=2,s[a].textContent="",s[a-1].classList.add("animationMerge"),s[a-1].classList.add("reserved"),n=`${+n+ +s[a-1].textContent}`,s[a-1].addEventListener("animationend",()=>{s[a-1].classList.remove("animationMerge")}),t=!0,o.textContent=`${+s[a-1].textContent+ +o.textContent}`,c())};l()}if(t){let t=d();s[t].textContent=`${i()}`,s[t].classList.add("animationAppear"),s[t].addEventListener("animationend",()=>{s[t].classList.remove("animationAppear")})}r()}if("ArrowRight"===t.key&&!0===e){let t=!1;for(let e=s.length-1;e>=0;e--){let a=e,l=()=>{(a-3)%4!=0&&""!==s[a].textContent&&""===s[a+1].textContent?(s[a+1].textContent=s[a].textContent,s[a].textContent="",a+=1,t=!0,l()):(a-3)%4==0||""===s[a].textContent||s[a+1].textContent!==s[a].textContent||s[a+1].classList.contains("reserved")||(s[a+1].textContent*=2,s[a].textContent="",s[a+1].classList.add("animationMerge"),s[a+1].classList.add("reserved"),n=`${+n+ +s[a+1].textContent}`,s[a+1].addEventListener("animationend",()=>{s[a+1].classList.remove("animationMerge")}),t=!0,o.textContent=`${+s[a+1].textContent+ +o.textContent}`,c())};l()}if(t){let t=d();s[t].textContent=`${i()}`,s[t].classList.add("animationAppear"),s[t].addEventListener("animationend",()=>{s[t].classList.remove("animationAppear")})}r()}let x=(()=>{let t=!0;for(let e of s)""===e.textContent&&(t=!1);return t})(),C=!0;for(let t=4;t<s.length-4;t++)(s[t].textContent===s[t-4].textContent||s[t].textContent===s[t+4].textContent)&&(C=!1);for(let t=0;t<s.length;t++)t%4!=0?s[t].textContent===s[t-1].textContent&&(C=!1):(t-3)%4!=0&&s[t].textContent===s[t+1].textContent&&(C=!1);for(let t of(!0===x&&!0===C&&a.classList.remove("hidden"),s))t.classList.remove("reserved")});
//# sourceMappingURL=index.aa47759c.js.map
