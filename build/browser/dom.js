/*! browser-util v0.0.2 | MIT | © Hannes Dröse https://github.com/hd-code/web-snippets */
export function $(t,e,n){const o="string"!=typeof t?t:document,s="string"==typeof t?t:e,l="string"==typeof e?n:e,y=o.querySelectorAll(s);return l&&y.forEach(l),y};export function hide(t){t.style.display="none"};export function show(t){t.style.display=""};export function toggle(t){"none"===t.style.display?t.style.display="":t.style.display="none"};