(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("e+qc"),n("L1EO");var a={userInput:document.querySelector(".user-input"),daysSpan:document.querySelector("span[data-value=days]"),hoursSpan:document.querySelector("span[data-value=hours]"),minsSpan:document.querySelector("span[data-value=mins]"),secsSpan:document.querySelector("span[data-value=secs]"),startBtn:document.querySelector("button[data-action=start]"),pauseBtn:document.querySelector("button[data-action=pause]"),resetBtn:document.querySelector("button[data-action=reset]")},s=new(n("o5Q/").a.Modal)("#myModal"),i=a.userInput,r=a.daysSpan,o=a.hoursSpan,u=a.minsSpan,c=a.secsSpan,l=a.startBtn,d=a.pauseBtn,v=a.resetBtn,p=null,h=new(function(){function t(t){var e=t.onTick;this.intervalId=null,this.isActive=!1,this.onTick=e}var e=t.prototype;return e.start=function(){var t=this;this.isActive||(null!==p?(this.isActive=!0,l.disabled=!0,d.disabled=!1,this.intervalId=setInterval((function(){var e=Date.now(),n=function(t){var e=f(Math.floor(t/864e5)),n=f(Math.floor(t%864e5/36e5)),a=f(Math.floor(t%36e5/6e4)),s=f(Math.floor(t%6e4/1e3));return{days:e,hours:n,mins:a,secs:s}}(p-e);t.onTick(n)}),1e3)):s.show())},e.pause=function(){d.disabled=!0,this.isActive=!1,l.disabled=!1,clearInterval(this.intervalId)},e.reset=function(){clearInterval(this.intervalId),i.value=null,p=null,d.disabled=!1,l.disabled=!1,r.textContent="00",o.textContent="00",u.textContent="00",c.textContent="00",this.intervalId=null,this.isActive=!1},t}())({targetDate:new Date,onTick:function(t){var e=t.days,n=t.hours,a=t.mins,s=t.secs;r.textContent=e,o.textContent=n+":",u.textContent=a+":",c.textContent=s}});function f(t){return String(t).padStart(2,"0")}i.addEventListener("input",(function(t){p=new Date(t.currentTarget.value)})),l.addEventListener("click",(function(){h.start()})),d.addEventListener("click",(function(){h.pause()})),v.addEventListener("click",(function(){h.reset()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.daa92286fabcdbbf9fa5.js.map