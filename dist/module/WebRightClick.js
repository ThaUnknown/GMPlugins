parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../node_modules/react/cjs/react.development.js":[function(require,module,exports) {
"use strict";(function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),l=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),d=Symbol.iterator,y="@@iterator";function m(e){if(null===e||"object"!=typeof e)return null;var t=d&&e[d]||e[y];return"function"==typeof t?t:null}var h={current:null},v={transition:null},g={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},b={current:null},_={},w=null;function k(e){w=e}_.setExtraStackFrame=function(e){w=e},_.getCurrentStack=null,_.getStackAddendum=function(){var e="";w&&(e+=w);var t=_.getCurrentStack;return t&&(e+=t()||""),e};var S=!1,O=!1,C=!1,x=!1,R=!1,E={ReactCurrentDispatcher:h,ReactCurrentBatchConfig:v,ReactCurrentOwner:b};function j(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("warn",e,r)}function P(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("error",e,r)}function T(e,t,r){var n=E.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map(function(e){return String(e)});o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}E.ReactDebugCurrentFrame=_,E.ReactCurrentActQueue=g;var $={};function D(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;$[o]||(P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),$[o]=!0)}var L={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){D(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){D(e,"replaceState")},enqueueSetState:function(e,t,r,n){D(e,"setState")}},I=Object.assign,N={};function F(e,t,r){this.props=e,this.context=t,this.refs=N,this.updater=r||L}Object.freeze(N),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var A={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},M=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){j("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var V in A)A.hasOwnProperty(V)&&M(V,A[V]);function z(){}function U(e,t,r){this.props=e,this.context=t,this.refs=N,this.updater=r||L}z.prototype=F.prototype;var B=U.prototype=new z;B.constructor=U,I(B,F.prototype),B.isPureReactComponent=!0;var Y=Array.isArray;function q(e){return Y(e)}function H(e){return""+e}function W(e){if(function(e){try{return H(e),!1}catch(t){return!0}}(e))return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),H(e)}function G(e){return e.displayName||"Context"}function K(e){if(null==e)return null;if("number"==typeof e.tag&&P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case r:return"Fragment";case t:return"Portal";case o:return"Profiler";case n:return"StrictMode";case s:return"Suspense";case c:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case i:return G(e)+".Consumer";case a:return G(e._context)+".Provider";case u:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case l:var p=e.displayName||null;return null!==p?p:K(e.type)||"Memo";case f:var d=e,y=d._payload,m=d._init;try{return K(m(y))}catch(h){return null}}return null}var J,X,Q,Z=Object.prototype.hasOwnProperty,ee={key:!0,ref:!0,__self:!0,__source:!0};function te(e){if(Z.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function re(e){if(Z.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}Q={};var ne=function(t,r,n,o,a,i,u){var s={$$typeof:e,type:t,key:r,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function oe(e,t,r){var n,o={},a=null,i=null,u=null,s=null;if(null!=t)for(n in te(t)&&(i=t.ref,function(e){if("string"==typeof e.ref&&b.current&&e.__self&&b.current.stateNode!==e.__self){var t=K(b.current.type);Q[t]||(P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),Q[t]=!0)}}(t)),re(t)&&(W(t.key),a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)Z.call(t,n)&&!ee.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){J||(J=!0,P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),i&&function(e,t){var r=function(){X||(X=!0,P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ne(e,a,i,u,s,b.current,o)}function ae(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var ie=".",ue=":";var se=!1,ce=/\/+/g;function le(e){return e.replace(ce,"$&/")}function fe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(W(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36);var r,n}function pe(r,n,o,a,i){var u=typeof r;"undefined"!==u&&"boolean"!==u||(r=null);var s,c,l,f=!1;if(null===r)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(r.$$typeof){case e:case t:f=!0}}if(f){var p=r,d=i(p),y=""===a?ie+fe(p,0):a;if(q(d)){var h="";null!=y&&(h=le(y)+"/"),pe(d,n,h,"",function(e){return e})}else null!=d&&(ae(d)&&(!d.key||p&&p.key===d.key||W(d.key),s=d,c=o+(!d.key||p&&p.key===d.key?"":le(""+d.key)+"/")+y,d=ne(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),n.push(d));return 1}var v=0,g=""===a?ie:a+ue;if(q(r))for(var b=0;b<r.length;b++)v+=pe(l=r[b],n,o,g+fe(l,b),i);else{var _=m(r);if("function"==typeof _){var w=r;_===w.entries&&(se||j("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),se=!0);for(var k,S=_.call(w),O=0;!(k=S.next()).done;)v+=pe(l=k.value,n,o,g+fe(l,O++),i)}else if("object"===u){var C=String(r);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===C?"object with keys {"+Object.keys(r).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}}return v}function de(e,t,r){if(null==e)return e;var n=[],o=0;return pe(e,n,"","",function(e){return t.call(r,e,o++)}),n}var ye,me=-1,he=0,ve=1,ge=2;function be(e){if(e._status===me){var t=(0,e._result)();if(t.then(function(t){if(e._status===he||e._status===me){var r=e;r._status=ve,r._result=t}},function(t){if(e._status===he||e._status===me){var r=e;r._status=ge,r._result=t}}),e._status===me){var r=e;r._status=he,r._result=t}}if(e._status===ve){var n=e._result;return void 0===n&&P("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||P("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function _e(e){return"string"==typeof e||"function"==typeof e||(!!(e===r||e===o||R||e===n||e===s||e===c||x||e===p||S||O||C)||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===u||e.$$typeof===ye||void 0!==e.getModuleId))}function we(){var e=h.current;return null===e&&P("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ye=Symbol.for("react.module.reference");var ke,Se,Oe,Ce,xe,Re,Ee,je=0;function Pe(){}Pe.__reactDisabledLog=!0;var Te,$e=E.ReactCurrentDispatcher;function De(e,t,r){if(void 0===Te)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);Te=n&&n[1]||""}return"\n"+Te+e}var Le,Ie=!1,Ne="function"==typeof WeakMap?WeakMap:Map;function Fe(e,t){if(!e||Ie)return"";var r,n=Le.get(e);if(void 0!==n)return n;Ie=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=$e.current,$e.current=null,function(){if(0===je){ke=console.log,Se=console.info,Oe=console.warn,Ce=console.error,xe=console.group,Re=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}je++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(y){r=y}Reflect.construct(e,[],i)}else{try{i.call()}catch(y){r=y}e.call(i.prototype)}}else{try{throw Error()}catch(y){r=y}e()}}catch(m){if(m&&r&&"string"==typeof m.stack){for(var u=m.stack.split("\n"),s=r.stack.split("\n"),c=u.length-1,l=s.length-1;c>=1&&l>=0&&u[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(u[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||u[c]!==s[l]){var f="\n"+u[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Le.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{Ie=!1,$e.current=o,function(){if(0==--je){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:ke}),info:I({},e,{value:Se}),warn:I({},e,{value:Oe}),error:I({},e,{value:Ce}),group:I({},e,{value:xe}),groupCollapsed:I({},e,{value:Re}),groupEnd:I({},e,{value:Ee})})}je<0&&P("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?De(p):"";return"function"==typeof e&&Le.set(e,d),d}function Ae(e,t,r){if(null==e)return"";if("function"==typeof e)return Fe(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return De(e);switch(e){case s:return De("Suspense");case c:return De("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return Fe(e.render,!1);case l:return Ae(e.type,t,r);case f:var o=e,a=o._payload,i=o._init;try{return Ae(i(a),t,r)}catch(p){}}return""}Le=new Ne;var Me,Ve={},ze=E.ReactDebugCurrentFrame;function Ue(e){if(e){var t=e._owner,r=Ae(e.type,e._source,t?t.type:null);ze.setExtraStackFrame(r)}else ze.setExtraStackFrame(null)}function Be(e){if(e){var t=e._owner;k(Ae(e.type,e._source,t?t.type:null))}else k(null)}function Ye(){if(b.current){var e=K(b.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Me=!1;var qe={};function He(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Ye();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!qe[r]){qe[r]=!0;var n="";e&&e._owner&&e._owner!==b.current&&(n=" It was passed a child from "+K(e._owner.type)+"."),Be(e),P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Be(null)}}}function We(e,t){if("object"==typeof e)if(q(e))for(var r=0;r<e.length;r++){var n=e[r];ae(n)&&He(n,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var o=m(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ae(a.value)&&He(a.value,t)}}function Ge(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==l)return;t=r.propTypes}if(t){var n=K(r);!function(e,t,r,n,o){var a=Function.call.bind(Z);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){u=c}!u||u instanceof Error||(Ue(o),P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),Ue(null)),u instanceof Error&&!(u.message in Ve)&&(Ve[u.message]=!0,Ue(o),P("Failed %s type: %s",r,u.message),Ue(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!Me){Me=!0,P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",K(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ke(t,n,o){var a,i,u=_e(t);if(!u){var s="";(void 0===t||"object"==typeof t&&null!==t&&0===Object.keys(t).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c,l=null!=(a=n)&&void 0!==(i=a.__source)?"\n\nCheck your code at "+i.fileName.replace(/^.*[\\\/]/,"")+":"+i.lineNumber+".":"";s+=l||Ye(),null===t?c="null":q(t)?c="array":void 0!==t&&t.$$typeof===e?(c="<"+(K(t.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof t,P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var f=oe.apply(this,arguments);if(null==f)return f;if(u)for(var p=2;p<arguments.length;p++)We(arguments[p],t);return t===r?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Be(e),P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Be(null);break}}null!==e.ref&&(Be(e),P("Invalid attribute `ref` supplied to `React.Fragment`."),Be(null))}(f):Ge(f),f}var Je=!1;var Xe=!1,Qe=null;var Ze=0,et=!1;function tt(e){e!==Ze-1&&P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ze=e}function rt(e,t,r){var n=g.current;if(null!==n)try{ot(n),function(e){if(null===Qe)try{var t=("require"+Math.random()).slice(0,7),r=module&&module[t];Qe=r.call(module,"timers").setImmediate}catch(n){Qe=function(e){!1===Xe&&(Xe=!0,"undefined"==typeof MessageChannel&&P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}Qe(e)}(function(){0===n.length?(g.current=null,t(e)):rt(e,t,r)})}catch(P){r(P)}else t(e)}var nt=!1;function ot(e){if(!nt){nt=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(P){throw e=e.slice(t+1),P}finally{nt=!1}}}var at=Ke,it=function(e,t,r){for(var n=function(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=I({},e.props),i=e.key,u=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=t)for(n in te(t)&&(u=t.ref,l=b.current),re(t)&&(W(t.key),i=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)Z.call(t,n)&&!ee.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ne(e.type,i,u,s,c,l,a)}.apply(this,arguments),o=2;o<arguments.length;o++)We(arguments[o],n.type);return Ge(n),n},ut=function(e){var t=Ke.bind(null,e);return t.type=e,Je||(Je=!0,j("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return j("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},st={map:de,forEach:function(e,t,r){de(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return de(e,function(){t++}),t},toArray:function(e){return de(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};exports.Children=st,exports.Component=F,exports.Fragment=r,exports.Profiler=o,exports.PureComponent=U,exports.StrictMode=n,exports.Suspense=s,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,exports.cloneElement=it,exports.createContext=function(e){var t={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:a,_context:t};var r=!1,n=!1,o=!1,u={$$typeof:i,_context:t};return Object.defineProperties(u,{Provider:{get:function(){return n||(n=!0,P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(j("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=u,t._currentRenderer=null,t._currentRenderer2=null,t},exports.createElement=at,exports.createFactory=ut,exports.createRef=function(){var e={current:null};return Object.seal(e),e},exports.forwardRef=function(e){null!=e&&e.$$typeof===l?P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?P("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&P("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:u,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},exports.isValidElement=ae,exports.lazy=function(e){var t,r,n={$$typeof:f,_payload:{_status:me,_result:e},_init:be};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},exports.memo=function(e,t){_e(e)||P("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:l,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},exports.startTransition=function(e,t){var r=v.transition;v.transition={};var n=v.transition;v.transition._updatedFibers=new Set;try{e()}finally{v.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&j("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},exports.unstable_act=function(e){var t=Ze;Ze++,null===g.current&&(g.current=[]);var r,n=g.isBatchingLegacy;try{if(g.isBatchingLegacy=!0,r=e(),!n&&g.didScheduleLegacyUpdate){var o=g.current;null!==o&&(g.didScheduleLegacyUpdate=!1,ot(o))}}catch(P){throw tt(t),P}finally{g.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,i=!1,u={then:function(e,r){i=!0,a.then(function(n){tt(t),0===Ze?rt(n,e,r):e(n)},function(e){tt(t),r(e)})}};return et||"undefined"==typeof Promise||Promise.resolve().then(function(){}).then(function(){i||(et=!0,P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),u}var s=r;if(tt(t),0===Ze){var c=g.current;return null!==c&&(ot(c),g.current=null),{then:function(e,t){null===g.current?(g.current=[],rt(s,e,t)):e(s)}}}return{then:function(e,t){e(s)}}},exports.useCallback=function(e,t){return we().useCallback(e,t)},exports.useContext=function(e){var t=we();if(void 0!==e._context){var r=e._context;r.Consumer===e?P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},exports.useDebugValue=function(e,t){return we().useDebugValue(e,t)},exports.useDeferredValue=function(e){return we().useDeferredValue(e)},exports.useEffect=function(e,t){return we().useEffect(e,t)},exports.useId=function(){return we().useId()},exports.useImperativeHandle=function(e,t,r){return we().useImperativeHandle(e,t,r)},exports.useInsertionEffect=function(e,t){return we().useInsertionEffect(e,t)},exports.useLayoutEffect=function(e,t){return we().useLayoutEffect(e,t)},exports.useMemo=function(e,t){return we().useMemo(e,t)},exports.useReducer=function(e,t,r){return we().useReducer(e,t,r)},exports.useRef=function(e){return we().useRef(e)},exports.useState=function(e){return we().useState(e)},exports.useSyncExternalStore=function(e,t,r){return we().useSyncExternalStore(e,t,r)},exports.useTransition=function(){return we().useTransition()},exports.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})();
},{}],"../../node_modules/react/index.js":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.development.js");
},{"./cjs/react.development.js":"../../node_modules/react/cjs/react.development.js"}],"../../moduleWrappers/goosemod/reactUtils.js":[function(require,module,exports) {
module.exports=goosemodScope.reactUtils;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r=require("@goosemod/webpack"),t=require("@goosemod/patcher"),n=a(require("react")),o=require("@goosemod/reactUtils");function a(e){return e&&e.__esModule?e:{default:e}}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach(function(r){c(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=p(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}function f(e,r){return g(e)||v(e,r)||p(e,r)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}function g(e){if(Array.isArray(e))return e}function m(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(l){return void t(l)}i.done?r(c):Promise.resolve(c).then(n,o)}function y(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function u(e){m(a,n,o,u,i,"next",e)}function i(e){m(a,n,o,u,i,"throw",e)}u(void 0)})}}var b=[{label:"Copy",fn:function(){var e=y(regeneratorRuntime.mark(function e(r,t){var n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.href||t.target.src,e.next=3,fetch(n);case 3:return o=e.sent,e.next=6,o.blob();case 6:a=e.sent,navigator.clipboard.write([new ClipboardItem({"image/png":new Blob([a],{type:"image/png"})})]);case 8:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}(),id:"c_1",group:"image"},{label:"Save",fn:function(){var e=y(regeneratorRuntime.mark(function e(r,t){var n,o,a,u,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.href||t.target.src,e.next=3,fetch(n);case 3:return o=e.sent,e.next=6,o.blob();case 6:a=e.sent,u=document.createElement("a"),i=URL.createObjectURL(a),u.download=n.slice(n.lastIndexOf("/")+1,n.lastIndexOf(".")),u.href=i,u.click(),u.remove(),URL.revokeObjectURL(i);case 14:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}(),id:"c_2",group:"image"},{label:"Copy Link",fn:function(e,r){var t=r.target.href||r.target.src;navigator.clipboard.writeText(t)},id:"c_3",group:"link"},{label:"Open Link",fn:function(e,r){var t=r.target.href||r.target.src;open(t,"_blank")},id:"c_4",group:"link"}],h={goosemodHandlers:{onImport:function(){var a=(0,r.findByProps)("MenuItem");e=(0,t.patch)(a,"default",function(e){var r,t;if(!(e.length<1)){var u=f(e,1)[0],c=u.navId,s=u.children;if("message"!==c)return e;var p=w(c);if(!(null!=p&&null!==(r=p.target)&&void 0!==r&&r.href||null!=p&&null!==(t=p.target)&&void 0!==t&&t.src))return e;var d,v={image:[],link:[]},g=l(b);try{var m=function(){var e=d.value;if((0,o.findInReactTree)(s,function(r){var t;return(null==r?void 0:null===(t=r.props)||void 0===t?void 0:t.id)===e.id}))return"continue";e.action=function(){return e.fn(arguments,p)};var r=i({},e),t=n.default.createElement(a.MenuItem,r);v[e.group].push(t)};for(g.s();!(d=g.n()).done;)m()}catch(I){g.e(I)}finally{g.f()}for(var y=[],h=function(){var e=f(j[O],2),r=e[0],t=e[1];return(0,o.findInReactTree)(s,function(e){return e&&e.props&&e.props.group===r})?"continue":t.length?void y.push(n.default.createElement(a.MenuGroup,{group:r},t)):"continue"},O=0,j=Object.entries(v);O<j.length;O++)h();return s.push.apply(s,y),e}},!0)},onRemove:function(){e()}}};exports.default=h;var w=function(){try{return(0,o.getNodeInternals)((0,o.getOwnerInstance)(document.getElementById("message"))).return.return.memoizedProps}catch(e){return}};
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js","react":"../../node_modules/react/index.js","@goosemod/reactUtils":"../../moduleWrappers/goosemod/reactUtils.js"}]},{},["index.js"], null);parcelRequire('index.js').default