!function(){function e(e){var t=document.documentElement.classList;e?t.add("__dark_theme"):t.remove("__dark_theme"),window.__dark_theme=e}try{var t=window.navigator.userAgent;if(function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}("darkmode"))return void e(!0);if(!/iPhone|iPad|iPod|Android/i.test(t)||!/mobile/i.test(t))return;if(/Android/i.test(t)&&/ColorScheme\/Dark/.test(t))e(!0);else if(window.matchMedia){var r=window.matchMedia("(prefers-color-scheme: dark)");r.matches&&e(!0),r.addListener((function(t){e(!!t.matches)}))}}catch(e){}}();