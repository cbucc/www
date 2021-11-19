/*! For license information please see index.b2ea2690.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[6566],{58984:function(e,t,n){var o;t.Z=void 0;var r=((o=n(45355))&&o.__esModule?o:{default:o}).default;t.Z=r},45355:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),r=d(n(39586)),a=d(n(45697)),u=d(n(25665)),i=d(n(18261)),l=d(n(46343)),c=d(n(42051)),f=d(n(89899)),p=d(n(22286)),s=d(n(76559));function d(e){return e&&e.__esModule?e:{default:e}}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return"function"==typeof t?t(e):"object"!==_(e)?e:e[t]}function P(e,t){var n=t.valueType,o=t.multiple,r=t.optionKey,a=[];return void 0===e||((a=o&&Array.isArray(e)?e:[e])[0]||0===a[0]||(a=[]),"data"===n&&(a=a.map((function(e){return x(e,r)})))),a}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,a=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=S(t);if(n){var r=S(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return C(this,e)});function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),j(w(t=a.call(this,e)),"refInputComponent",null),j(w(t),"refPopup",null),j(w(t),"isSelected",(function(e){return t.state.value.indexOf(e)>-1})),j(w(t),"onClick",(function(){var e=t.props.disabled,n=t.state.filterAble;e||t.setState({popupShow:!!n||!t.state.popupShow})})),j(w(t),"onCarretClick",(function(e){e.stopPropagation(),t.props.disabled||(t.refInputComponent.focusInput(),t.setState({popupShow:!t.state.popupShow}))})),j(w(t),"onOptionClick",(function(e){var n=t.props,o=n.multiple,r=n.max,a=n.onSelect,u=t.state,i=u.value,l=u.keyDataMap[e].data,c=!0,f=h(t.state.value);if(o){var p=i.indexOf(e);if(-1===p)for(f.push(e);r&&f.length>r;)f.shift();else c=!1,f.splice(p,1);t.refInputComponent.clearFilter()}else f=[e],t.onPopupHide();a&&a(l,c),t.refInputComponent.focusInput(),t.update(f)})),j(w(t),"onTagDelete",(function(e){var n=t.state.value.filter((function(t){return t!==e}));t.update(n)})),j(w(t),"onFilter",(function(e){var n=t.props,o=n.onFilter;if(n.filterOption){var r=t.getFilteredOptions(e).filteredOptions;t.setStateSafely({filteredOptions:r})}t.setStateSafely({filterText:e}),o&&o(e)})),j(w(t),"onSelectKeyDown",(function(e){var n,o=t.state,r=o.popupShow,a=o.focusIndex,u=o.filteredOptions,i=t.getActionCount()+u.length,l=e.keyCode;if(r)switch(l){case 13:a<i&&a>=0?t.onOptionEnter(a):t.onPopupHide();break;case 38:n=a<=0?i-1:a-1,t.setState({focusIndex:n}),e.preventDefault();break;case 40:n=a>=i-1?0:a+1,t.setState({focusIndex:n}),e.preventDefault()}else 13===l&&t.onPopupShow()})),j(w(t),"onInputFocus",(function(e){var n=t.props.onFocus;"function"==typeof n&&n(e)})),j(w(t),"onInputBlur",(function(e){var n=t.props.onBlur;"function"==typeof n&&n(e),t.onPopupHide()})),j(w(t),"onPopupHide",(function(){if(t.state.popupShow){var e=t.props.options;t.setStateSafely({popupShow:!1,filteredOptions:e,filterText:"",focusIndex:0}),t.refInputComponent.clearFilter()}})),j(w(t),"onPopupShow",(function(){t.props.disabled||t.setState({popupShow:!0,focusIndex:0})})),j(w(t),"onClear",(function(){var e=t.props.onClear;t.update([]),e&&e()}));var n=e.initialValue,o=e.optionKey,r=e.optionText,i=P(n,e),l={};return"data"===e.valueType&&"initialValue"in e&&(Array.isArray(n)?n:[n]).forEach((function(e){var t=x(e,o);l[t]={data:e,text:x(e,r)}})),t.state={value:i,keyDataMap:l,focusIndex:0,propOptionsKeys:[],popupShow:!1,filterText:"",filteredOptions:h(e.options)},t}return g(u,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value,o=e.optionKey,r=e.optionText,a=e.optionDisabled,u=e.onFilter,i=e.filterOption,l={filterAble:u||i};if(e.options!==t.propOptions&&(l.propOptions=e.options,l.filteredOptions=e.options,l.propOptionsKeys=[],l.keyDataMap=m({},t.keyDataMap),e.options.forEach((function(e){var t,n,u=x(e,o);l.keyDataMap[u]={data:e,text:x(e,r),disabled:(t=e,n=a,"function"==typeof n?n(t):!("object"!==_(t)||!n)&&t[n])},l.propOptionsKeys.push(u)}))),"value"in e){var c=P(n,e);if("data"===e.valueType){var f=Array.isArray(n)?n:[n];l.keyDataMap=l.keyDataMap||m({},t.keyDataMap),f.forEach((function(e){var t=x(e,o);l.keyDataMap[t]={data:e,text:x(e,r)}}))}l.value=c}return l}}]),g(u,[{key:"getFilteredOptions",value:function(e){var t=e.trim(),n=this.props.filterOption,o=this.state,r=o.propOptions,a=o.propOptionsKeys,u=o.keyDataMap,i=r;return!0===n?i=r.filter((function(e,n){var o=a[n],r=u[o].text;return!!(r&&r.indexOf(t)>-1)})):"function"==typeof n&&(i=r.filter((function(e){return!!n(t,e)}))),{filteredOptions:i}}},{key:"onCreate",value:function(e){var t=this.props.multiple,n=this.props.onCreate;n&&(n(e),t?(this.refInputComponent.clearFilter(),this.refInputComponent.focusInput()):this.onPopupHide())}},{key:"onOptionEnter",value:function(e){if(this.refPopup){var t=this.refPopup.querySelectorAll(".ten-select-option");t[e]&&t[e].click()}}},{key:"update",value:function(e){var t=this.props,n=t.multiple,o=t.options,r=t.onChange,a=t.valueType,u=this.state.keyDataMap,i=e.map((function(e){return u[e].data})),l=n?e:e[0],c=n?i:i[0];this.setState({filterText:"",filteredOptions:o}),"value"in this.props||this.setState({value:e}),"data"===a?r&&r(c):r&&r(l,c)}},{key:"getActionCount",value:function(){return this.isCreatableShow()?1:0}},{key:"isCreatableShow",value:function(){var e=this.props,t=e.loading,n=e.creatable,o=e.optionKey,r=this.state,a=r.keyDataMap,u=r.filterText,i=r.filteredOptions,l=u.trim();return n&&!t&&l&&i.every((function(e){var t=x(e,o);return a[t].text!==l}))}},{key:"renderInput",value:function(){var e=this,t=this.state,n=t.keyDataMap,a=t.value,u=t.filterText,i=t.popupShow,f=t.filterAble,p=this.props,s=(p.loading,p.emptyTip,p.options,p.multiple),d=(p.children,p.onChange,p.onSelect,p.initialValue,p.value,p.valueType,p.size),h=(p.creatable,p.onCreate,p.renderCreate,p.clearable),b=(p.onClear,p.onFilter,p.filterOption,p.className),v=(p.renderOption,p.optionKey,p.optionText,p.optionDisabled,p.suffixIcon),m=(p.optionCheckbox,function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(p,["loading","emptyTip","options","multiple","children","onChange","onSelect","initialValue","value","valueType","size","creatable","onCreate","renderCreate","clearable","onClear","onFilter","filterOption","className","renderOption","optionKey","optionText","optionDisabled","suffixIcon","optionCheckbox"])),O=(0,r.default)(b,"ten-select  ten-select-input",{"ten-select-input--popupshow":i}),g=v||o.default.createElement(c.default,{type:"carret_down",onClick:this.onCarretClick});return o.default.createElement(l.default,y({},m,{ref:function(t){e.refInputComponent=t},size:d,multiple:s,className:O,value:a,filterValue:u,onFilter:f?this.onFilter:void 0,onClick:this.onClick,getSelectedText:function(e){return n[e]?n[e].text:""},onTagDelete:this.onTagDelete,onFocus:this.onInputFocus,onBlur:this.onInputBlur,onKeyDown:this.onSelectKeyDown,suffixIcon:g,getInput:function(t){e.inputElem=t},readOnly:!i,onClear:h?this.onClear:void 0}))}},{key:"renderCreate",value:function(){var e=this,t=this.props.renderCreate,n=this.state,a=n.filterText,u=n.focusIndex,i=a.trim();return this.isCreatableShow()?o.default.createElement("div",{className:(0,r.default)("ten-select__create","ten-select-option",{"ten-select-option--focused":0===u}),onClick:function(){return e.onCreate(i)},onMouseEnter:function(){e.setState({focusIndex:0})}},t?t(a):"���� ".concat(a)):null}},{key:"renderOption",value:function(e){var t=this.props,n=t.optionText,o=t.renderOption;return o?o(e):x(e,n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.multiple,a=t.optionKey,u=t.size,l=t.optionCheckbox,c=t.loading,s=t.emptyTip,d=this.state,y=d.keyDataMap,h=d.popupShow,b=d.filteredOptions,v=d.focusIndex,m=this.getActionCount(),O=(0,r.default)("ten-select__popup","ten-select__popup--size-".concat(u),{"ten-select__popup--loading":c}),g=b.length>0?o.default.createElement("ul",{className:"ten-select-options"},b.map((function(t,u){var i=x(t,a),c=y[i],p=e.isSelected(i);return o.default.createElement("li",{key:i,role:"option","aria-selected":p,className:(0,r.default)("ten-select-option",{"ten-select-option--disabled":c.disabled,"ten-select-option--selected":p,"ten-select-option--focused":v===u+m}),onClick:function(){!c.disabled&&e.onOptionClick(i)},onMouseEnter:function(){e.setState({focusIndex:u+m})}},n&&l?o.default.createElement(f.default,{checked:p}):null,e.renderOption(t))}))):null,k=o.default.createElement("div",{role:"listbox",className:"ten-select__popup-content",ref:function(t){e.refPopup=t}},this.renderCreate(),g,!c&&0===b.length&&o.default.createElement("div",{className:"ten-select__empty"},s),c&&o.default.createElement(p.default,{type:"block"}));return o.default.createElement(i.default,{className:O,content:k,show:(b.length>0||c||s)&&h,width:function(e){return e.offsetWidth},direction:"bottom left",triggerType:"manual",onHide:this.onPopupHide,onShow:this.onPopupShow},this.renderInput())}}]),u}(u.default);j(I,"propTypes",{options:a.default.array,disabled:a.default.bool,emptyTip:a.default.node,size:a.default.oneOf(["default","small"]),multiple:a.default.bool,max:a.default.number,placeholder:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number,a.default.object,a.default.array]),initialValue:a.default.oneOfType([a.default.string,a.default.number,a.default.object,a.default.array]),valueType:a.default.oneOf(["key","data"]),optionKey:a.default.oneOfType([a.default.func,a.default.string]),optionText:a.default.oneOfType([a.default.func,a.default.string]),renderOption:a.default.func,optionDisabled:a.default.oneOfType([a.default.func,a.default.string]),onChange:a.default.func,onSelect:a.default.func,onFilter:a.default.func,loading:a.default.bool,creatable:a.default.bool,onCreate:a.default.func,renderCreate:a.default.func,filterOption:a.default.oneOfType([a.default.func,a.default.bool]),suffixIcon:a.default.node,optionCheckbox:a.default.bool,clearable:a.default.bool,onClear:a.default.func,onBlur:a.default.func,onFocus:a.default.func}),j(I,"defaultProps",{disabled:!1,multiple:!1,optionKey:function(e){return e},optionText:function(e){return e},optionDisabled:"disabled",filterOption:!1,emptyTip:o.default.createElement(s.default.Empty,null),size:"default",valueType:"key",optionCheckbox:!0});var T=I;t.default=T},16512:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.icon,n=e.message,u=void 0===n?(0,a.t)("noData"):n,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["icon","message"]);return o.default.createElement(r.default,i({type:"empty",icon:t,message:u},l))};var o=u(n(67294)),r=u(n(23580)),a=n(75676);function u(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}},76559:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(23580)),r=a(n(16512));function a(e){return e&&e.__esModule?e:{default:e}}o.default.Empty=r.default;var u=o.default;t.default=u},23580:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,a,i=e.type,l=e.className,c=e.icon,f=e.message,p=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["type","className","icon","message"]),s=(0,r.default)(l,"ten-status",(t={},n="ten-status--type-".concat(i),a=i,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t));return o.default.createElement("div",u({className:s},p),c&&o.default.createElement("div",{className:"ten-status__icon"},c),f&&o.default.createElement("div",{className:"ten-status__message"},f))};var o=a(n(67294)),r=a(n(39586));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}},29374:function(e,t,n){var o;t.Z=void 0;var r=((o=n(90874))&&o.__esModule?o:{default:o}).default;t.Z=r},90874:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),r=i(n(45697)),a=i(n(39586)),u=i(n(42051));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(v,e);var t,n,r,i,l,b=(i=v,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(i);if(l){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),h(d(t=b.call(this,e)),"onClick",(function(e){var n=t.props.onClick;t.setState({checked:e.target.checked}),n&&n(e)})),h(d(t),"onChange",(function(e){var n=t.props.onChange;n&&n(e)})),t.state={checked:t.props.defaultChecked},t}return t=v,r=[{key:"getDerivedStateFromProps",value:function(e){var t=e.isChecked;return"boolean"==typeof t?{checked:t}:null}}],(n=[{key:"render",value:function(){var e=this.props,t=e.disabled,n=(e.defaultChecked,e.className),r=e.checkedVal,i=e.unCheckedVal,l=e.checkedIcon,f=e.unCheckedIcon,p=(e.onClick,e.onChange,e.isChecked,function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["disabled","defaultChecked","className","checkedVal","unCheckedVal","checkedIcon","unCheckedIcon","onClick","onChange","isChecked"])),s=this.state.checked,d=(0,a.default)(n,"ten-switch",{"ten-switch--disabled":t,"ten-switch--ischecked":s,"ten-switch--unchecked":!s}),y=o.default.createElement("span",{className:"ten-switch__text"},l&&o.default.createElement(u.default,{type:l})," ",r),h=o.default.createElement("span",{className:"ten-switch__text"},f&&o.default.createElement(u.default,{type:f})," ",i);return o.default.createElement("button",c({className:d},p),o.default.createElement("input",{className:"ten-switch__checkinput",type:"checkbox",checked:s,onChange:this.onChange,onClick:this.onClick,disabled:t}),s?y:h)}}])&&f(t.prototype,n),r&&f(t,r),v}(o.default.Component);h(b,"propTypes",{defaultChecked:r.default.bool,disabled:r.default.bool,checkedVal:r.default.string,unCheckedVal:r.default.string,checkedIcon:r.default.string,unCheckedIcon:r.default.string,onClick:r.default.func,onChange:r.default.func,isChecked:r.default.bool}),h(b,"defaultProps",{disabled:!1,defaultChecked:!1});var v=b;t.default=v}}]);
//# sourceMappingURL=index.b2ea2690.js.map