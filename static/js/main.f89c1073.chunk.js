(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,function(e,t,n){},,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(4),r=n.n(c),o=(n(10),n(3),n(1));var l=function(){var e=Object(a.useState)(5),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(25),l=Object(o.a)(r,2),i=l[0],u=l[1],m=Object(a.useState)(1500),b=Object(o.a)(m,2),f=b[0],d=b[1],E=Object(a.useState)(!1),h=Object(o.a)(E,2),v=h[0],O=h[1],p=Object(a.useState)("session"),N=Object(o.a)(p,2),k=N[0],j=N[1],S=Object(a.useState)(60*n),g=Object(o.a)(S,2),w=g[0],C=g[1],D=Object(a.useRef)(null);console.log("session:",f,"break:",w,k),Object(a.useEffect)((function(){if(v&&f>0&&"session"===k){var e=setInterval((function(){d((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}v&&0===f&&w>0&&I()}),[v,f]);var I=function(){j("break"),console.log("break time!")};return Object(a.useEffect)((function(){if(v&&"break"===k&&w>0){var e=setInterval((function(){C((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}0===w&&v&&(j("session"),d(60*i),C(60*n),console.log("session time!"))}),[k,v,w]),Object(a.useEffect)((function(){0!==w&&0!==f||D.current.play()}),[j,k]),s.a.createElement("div",{className:"main"},s.a.createElement("h1",{id:"main-head",className:"session"===k?"main-head-session":"main-head-break"},"P O M O D O R O _ C L K"),s.a.createElement("div",{className:"counter-zone row"},s.a.createElement("div",{className:"break col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("h1",{id:"break-length"},n)),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-default",id:"break-increment",onClick:function(){c((function(e){return e<60?e+1:e})),C((function(e){return e<3600?e-60:e}))}},"Up")),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-default",id:"break-decrement",onClick:function(){c((function(e){return e>1?e-1:e})),C((function(e){return e>60?e-60:e}))}},"Down"))),s.a.createElement("h3",{id:"break-label"},"Break Length")),s.a.createElement("div",{className:"session col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("h1",{id:"session-length"},i)),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-default",id:"session-increment",onClick:function(){u((function(e){return e<60?e+1:e})),d((function(e){return e<3600?e+60:e}))}},"Up")),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-default",id:"session-decrement",onClick:function(){u((function(e){return e>1?e-1:e})),d((function(e){return e>60?e-60:e}))}},"Down"))),s.a.createElement("h3",{id:"session-label"},"Session Length"))),s.a.createElement("div",{className:"timer-zone"},s.a.createElement("h3",{id:"timer-label",className:"session"===k?"timer-label-session":"timer-label-break"},"session"===k?"S e s s i o n":"B R E A K  T I M E !!!!!"),s.a.createElement("h1",{id:"time-left"},function(e){var t=Math.floor(e/60),n=e-60*t;return(t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)}("session"===k?f:w)),s.a.createElement("button",{className:"btn btn-default",id:"start_stop",onClick:function(){return O((function(e){return!e}))}},v?"stop":"start"),s.a.createElement("button",{className:"btn btn-default",id:"reset",onClick:function(e){e.preventDefault(),j("session"),O(!1),c(5),u(25),d(1500),C(300)}},"reset"),s.a.createElement("audio",{id:"beep",src:"session"===k?"https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/African%20Vocals%20Sung/225[kb]chorus-hi-ya-heh.wav.mp3":"https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/MALE%20MISC%20and%20SPOKEN%20WORD/80[kb]ah_yeah!.aif.mp3",ref:D},"audio for you")))};n(11);var i=function(){return s.a.createElement("div",{className:"app container"},s.a.createElement(l,null))};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(i,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f89c1073.chunk.js.map