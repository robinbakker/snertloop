import{options as n,Component as r}from"/@npm/preact";import{useMemo as t,useRef as e,useEffect as i}from"/@npm/preact/hooks";import{signal as o,computed as u,Signal as f,effect as a}from"/@npm/@preact/signals-core";export{Signal,batch,computed,effect,signal}from"/@npm/@preact/signals-core";var c,_;function s(r,t){n[r]=t.bind(null,n[r]||function(){})}function l(n){_&&_(),_=n&&n.S()}function p(n){var r=this,e=n.data,i=useSignal(e);i.value=e;var o=t((function(){for(var n=r.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return r.__$u.c=function(){r.base.data=o.peek()},u((function(){var n=i.value.value;return 0===n?0:!0===n?"":n||""}))}),[]);return o.value}function d(n,r,t,e){var i=r in n&&void 0===n.ownerSVGElement,u=o(t);return{o:function(n,r){u.value=n,e=r},d:a((function(){var t=u.value.value;e[r]!==t&&(e[r]=t,i?n[r]=t:t?n.setAttribute(r,t):n.removeAttribute(r))}))}}function useSignal(n){return t((function(){return o(n)}),[])}function useComputed(n){var r=e(n);return r.current=n,c.__$f|=4,t((function(){return u((function(){return r.current()}))}),[])}function useSignalEffect(n){var r=e(n);r.current=n,i((function(){return a((function(){r.current()}))}),[])}p.displayName="_st",Object.defineProperties(f.prototype,{constructor:{configurable:!0},type:{configurable:!0,value:p},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),s("__b",(function(n,r){if("string"==typeof r.type){var t,e=r.props;for(var i in e)if("children"!==i){var o=e[i];o instanceof f&&(t||(r.__np=t={}),t[i]=o,e[i]=o.peek())}}n(r)})),s("__r",(function(n,r){l();var t,e=r.__c;e&&(e.__$f&=-2,void 0===(t=e.__$u)&&(e.__$u=t=function(n){var r;return a((function(){r=this})),r.c=function(){e.__$f|=1,e.setState({})},r}())),c=e,l(t),n(r)})),s("__e",(function(n,r,t,e){l(),c=void 0,n(r,t,e)})),s("diffed",(function(n,r){var t;if(l(),c=void 0,"string"==typeof r.type&&(t=r.__e)){var e=r.__np,i=r.props;if(e){var o=t.U;if(o)for(var u in o){var f=o[u];void 0===f||u in e||(f.d(),o[u]=void 0)}else t.U=o={};for(var a in e){var _=o[a],v=e[a];void 0===_?(_=d(t,a,v,i),o[a]=_):_.o(v,i)}}}n(r)})),s("unmount",(function(n,r){if("string"==typeof r.type){var t=r.__e;if(t){var e=t.U;if(e)for(var i in t.U=void 0,e){var o=e[i];o&&o.d()}}}else{var u=r.__c;if(u){var f=u.__$u;f&&(u.__$u=void 0,f.d())}}n(r)})),s("__h",(function(n,r,t,e){e<3&&(r.__$f|=2),n(r,t,e)})),r.prototype.shouldComponentUpdate=function(n,r){var t=this.__$u;if(!(t&&void 0!==t.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var e in r)return!0;for(var i in n)if("__source"!==i&&n[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in n))return!0;return!1};export{useComputed,useSignal,useSignalEffect};