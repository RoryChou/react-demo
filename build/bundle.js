webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2017/1/17.
	 */
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(32);
	var Router = __webpack_require__(178).Router;
	var Route = __webpack_require__(178).Route;
	var IndexRoute = __webpack_require__(178).IndexRoute;
	var hashHistory = __webpack_require__(178).hashHistory;
	var FooterNav = __webpack_require__(233);
	var HomePage = __webpack_require__(239);
	var FenleiPage = __webpack_require__(246);

	__webpack_require__(247);

	ReactDOM.render((React.createElement(Router, {history: hashHistory}, 
	                    React.createElement(Route, {path: "/", component: FooterNav}, 
	                        React.createElement(IndexRoute, {component: HomePage}), 
	                        React.createElement(Route, {path: "/home", component: HomePage}), 
	                        React.createElement(Route, {path: "/fenlei", component: FenleiPage})
	                    )
	                )),document.querySelector('#content'));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var style = __webpack_require__(234);
	var $ = __webpack_require__(238);


	var FooterNav = React.createClass({displayName: "FooterNav",
	    componentDidMount: function () {
	      $('li').click(function(){
	          console.log($(this));
	          $(this).addClass('current').siblings().removeClass('current')
	      })
	    },
	    render: function () {
	        return(
	            React.createElement("div", null, 
	                this.props.children, 
	                React.createElement("footer", {className: style.head}, 
	                    React.createElement("ul", {className: style.ul}, 
	                        React.createElement("li", {className: style.li}, 
	                            React.createElement("a", {href: "#/home", className: style.a}, "首页")
	                        ), 
	                        React.createElement("li", {className: style.li}, 
	                            React.createElement("a", {href: "#/fenlei", className: style.a}, "分类")
	                        ), 
	                        React.createElement("li", {className: style.li}, 
	                            React.createElement("a", {href: "#/cart", className: style.a}, "购物车")
	                        )
	                    )
	                )
	            )
	        )
	    }
	});

	module.exports = FooterNav;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(235);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, "._1ClI_rVOVP_19i1oos4gKR {\r\n  height: 0.85rem;\r\n  background-color: #e63569;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0; }\r\n\r\n._32kybYDzVv3Uguqbws06nF {\r\n  display: flex;\r\n  height: 100%;\r\n  background-color: #484850; }\r\n\r\n.OogDx-egUV3pww755e4Ae {\r\n  flex: 1;\r\n  height: 100%;\r\n  padding-top: 0.05rem; }\r\n\r\n._3stDtwufDjUipRvZ81Cov7 {\r\n  display: block;\r\n  line-height: 0.85rem;\r\n  height: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: #484850; }\r\n\r\n/*# sourceMappingURL=index.css.map */\r\n", ""]);

	// exports
	exports.locals = {
		"head": "_1ClI_rVOVP_19i1oos4gKR",
		"ul": "_32kybYDzVv3Uguqbws06nF",
		"li": "OogDx-egUV3pww755e4Ae",
		"a": "_3stDtwufDjUipRvZ81Cov7"
	};

/***/ },

/***/ 236:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var HeaderComponent = __webpack_require__(240);
	var BannerComponent = __webpack_require__(243);
	var GoodsListComponent = __webpack_require__(249);

	var HomePage = React.createClass({displayName: "HomePage",

	    render: function () {
	        return(
	            React.createElement("div", null, 
	                React.createElement(HeaderComponent, null), 
	                React.createElement(BannerComponent, null), 
	                React.createElement("div", null, "我是首页")
	            )
	        )
	    }
	});

	module.exports = HomePage;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var style = __webpack_require__(241);

	var HeaderComponent = React.createClass({displayName: "HeaderComponent",
	   render: function(){
	       return(
	            React.createElement("header", {className: style.header}, 
	                React.createElement("p", {className: style.p}, "返回"), 
	                React.createElement("p", {className: style.mid}, "走秀网"), 
	                React.createElement("p", {className: style.p}, "注册")
	            )
	       )
	   }
	});

	module.exports = HeaderComponent;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, "._1pg6YwYtVLVjRwrBGsQoaQ {\r\n    height: 0.85rem;\r\n    background-color: #e63569;\r\n    padding: 0 0.5rem;\r\n    display: flex;\r\n}\r\n\r\n._3Pk9lD8sqenQKDYmkK_iuk {\r\n    flex: 1;\r\n    text-align: center;\r\n    line-height: 0.85rem;\r\n    color: #fff;\r\n}\r\n\r\n._3UurtO1DAKxbtayb9vOT7s {\r\n    flex: 3;\r\n}", ""]);

	// exports
	exports.locals = {
		"header": "_1pg6YwYtVLVjRwrBGsQoaQ",
		"p": "_3Pk9lD8sqenQKDYmkK_iuk",
		"mid": "_3UurtO1DAKxbtayb9vOT7s _3Pk9lD8sqenQKDYmkK_iuk"
	};

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var style = __webpack_require__(244);
	var $ = __webpack_require__(238);
	var Swiper = __webpack_require__(248);

	var BannerComponent = React.createClass({displayName: "BannerComponent",
	    getInitialState: function () {
	      return {
	          imgList: []
	      }
	    },
	    componentWillMount: function () {
	        //ajax 获取banner图片
	        $.ajax({
	            url: 'http://datainfo.duapp.com/shopdata/getBanner.php',
	            dataType: 'jsonp',
	            success: function (res) {
	                /*if(!res){
	                    $('.loading').html('已经到底啦')
	                };*/
	                for( var i in res){
	                    var img = JSON.parse(res[i].goodsBenUrl)[0];
	                    this.state.imgList.push(img);
	                    this.setState({imgList: this.state.imgList});
	                }
	                console.log(this.state.imgList)
	            }.bind(this)
	        });
	    },
	    componentDidMount: function () {
	        var mySwiper = new Swiper ('.swiper-container', {
	            // 如果需要分页器
	            pagination: '.swiper-pagination',
	            autoplay : 3000,
	            loop: true

	        })
	    },
	    render: function(){
	        return(
	            React.createElement("div", {className: "banner swiper-container"}, 
	                React.createElement("div", {className: "swiper-wrapper"}, 
	                    React.createElement("div", {className: "swiper-slide"}, 
	                        React.createElement("a", {href: "javascript:;"}, 
	                            React.createElement("img", {src: this.state.imgList[0], alt: "", className: style.img})
	                        )
	                    ), 
	                    React.createElement("div", {className: "swiper-slide"}, 
	                        React.createElement("a", {href: "javascript:;"}, 
	                            React.createElement("img", {src: this.state.imgList[1], alt: "", className: style.img})
	                        )
	                    ), 
	                    React.createElement("div", {className: "swiper-slide"}, 
	                        React.createElement("a", {href: "javascript:;"}, 
	                            React.createElement("img", {src: this.state.imgList[2], alt: "", className: style.img})
	                        )
	                    ), 
	                    React.createElement("div", {className: "swiper-slide"}, 
	                        React.createElement("a", {href: "javascript:;"}, 
	                            React.createElement("img", {src: this.state.imgList[3], alt: "", className: style.img})
	                        )
	                    )
	                ), 
	                React.createElement("div", {className: "swiper-pagination"})
	            )
	        )
	    }
	});

	module.exports = BannerComponent;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(245);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, ".o-Dm_W8Ak_2XoM8bxnT5Y {\r\n    height: 2.5rem;\r\n    width: 100%;\r\n}", ""]);

	// exports
	exports.locals = {
		"img": "o-Dm_W8Ak_2XoM8bxnT5Y"
	};

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var HeaderComponent = __webpack_require__(240);


	var FenleiPage = React.createClass({displayName: "FenleiPage",
	    render: function () {
	        return(
	            React.createElement("div", null, 
	                React.createElement(HeaderComponent, null), 
	                React.createElement("div", null, "我是分类")
	            )
	        )
	    }
	});

	module.exports = FenleiPage;

/***/ },

/***/ 247:
/***/ function(module, exports) {

	/**
	 * Created by rory on 2016/12/28.
	 * 11:32
	 */

	/* root element font-size calculate*/
	module.exports = (function () {
	    //iphone 4 :width=320px; 1rem = 100px; dpr = 2;
	    var doc = document.documentElement; //获取根元素的dom节点;
	    var curDeviceWidth = doc.clientWidth || window.innerWidth; //拿到当前设备的宽度
	    //动态的改变根元素字体大小：
	    doc.style.fontSize = curDeviceWidth/2 * (100/320) + 'px';
	})();

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var $ = __webpack_require__(238);

	var GoodsListComponent = React.createClass({displayName: "GoodsListComponent",
	    getInitialState: function () {
	        return{
	            gid: "",
	            goodsListImg: '',
	            goodsName: '',
	            price: '',
	            imgsUrl: ''
	        }
	    },
	    componentWillMount: function () {
	        $.ajax({
	            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
	            data: {
	                linenumber:9,
	                pageCode: 0
	            },
	            dataType: 'jsonp',
	            success: function (res) {
	                console.log(res)
	            }
	        })
	    },
	   render: function () {
	       return(
	           React.createElement("li", null, 
	                React.createElement("div", null, 
	                    React.createElement("img", {src: "", alt: ""})
	                ), 
	                React.createElement("div", null, 
	                    React.createElement("h3", null), 
	                    React.createElement("div", null, 
	                        React.createElement("span", null), 
	                        React.createElement("span", null), 
	                        React.createElement("p", null)
	                    ), 
	                    React.createElement("div", null, 
	                        React.createElement("img", {src: "", alt: ""})
	                    )
	                )
	           )
	       )
	   }
	});

	module.exports = GoodsListComponent;

/***/ }

});