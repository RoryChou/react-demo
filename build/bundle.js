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
	var FenleiPage = __webpack_require__(255);

	__webpack_require__(256);

	ReactDOM.render((React.createElement(Router, {history: hashHistory}, 
	                    React.createElement(Route, {path: "/", component: FooterNav}, 
	                        React.createElement(IndexRoute, {component: HomePage}), 
	                        React.createElement(Route, {path: "/", component: HomePage}), 
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
	        //默认点击首页效果
	        $('li').eq(0).addClass('current');
	      $('li').click(function(){
	          $(this).addClass('current').siblings().removeClass('current')
	      })
	    },
	    render: function () {
	        return(
	            React.createElement("div", null, 
	                this.props.children, 
	                React.createElement("footer", {className: style.head, id: "footer-nav"}, 
	                    React.createElement("ul", {className: style.ul}, 
	                        React.createElement("li", {className: style.li}, 
	                            React.createElement("a", {href: "#/", className: style.a}, "首页")
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
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css");
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
	var Search = __webpack_require__(243);
	var BannerComponent = __webpack_require__(246);
	var GoodsListComponent = __webpack_require__(250);
	//var iScroll = require('iScroll');
	var $ = __webpack_require__(238)
	var style = __webpack_require__(253);

	var HomePage = React.createClass({displayName: "HomePage",
	    iscrollHeightCalc: function(params){
	        var args = arguments;
	        var otherH = 0;
	        for (var i in args){
	            otherH += $(args[i]).height()
	        }
	        var deviceH = document.documentElement.clientHeight;
	        var diff = deviceH - otherH;
	        return diff
	    },
	    getInitialState: function(){
	        return {
	            pageCode:0
	        }
	    },
	    componentDidMount: function(){
	       $('#container').height(this.iscrollHeightCalc($('#header'),$('#search'),$('#footer-nav')))
	        $(function(){
	            var dis = false;
	            var myIscroll = new iScroll('container',{
	                topOffset: 60,
	                onScrollMove: function(){
	                    dis = false;
	                    if(myIscroll.y >= 20){
	                        dis = true;
	                    }
	                },
	                onScrollEnd: function () {
	                    //判断是否到顶部
	                    if( myIscroll.y === -60){
	                        //flag = false;
	                        //show loading bar

	                        //刷新页面
	                        //window.location.reload(true);
	                        if(dis){
	                            window.location.reload(true);
	                        }
	                    }
	                    //判断是否触底
	                    if(myIscroll.scrollerH+myIscroll.y <= myIscroll.wrapperH){
	                        //flag = false;
	                        $('#loadBar').show();

	                        
	                        myIscroll.refresh();
	                        myIscroll.scrollToElement('.loading');
	                        //调用goodslist组件的ajax
	                        this.setState({pageCode:1})
	                    }
	                }.bind(this)
	            })  
	        }.bind(this))
	        
	        //add iscroll
	       /* window.onload = function(){
	            console.log('window.onload')
	            var myIscroll = new iScroll('container',{
	                onScrollMove: function (e) {
	                    if(myIscroll.y>0){
	                        $('.reload').show();
	                    }
	                },
	                onScrollEnd: function () {
	                    //判断是否到顶部
	                    if( myIscroll.y === 0){
	                        //flag = false;
	                        //show loading bar

	                        //刷新页面
	                        //window.location.reload(true);
	                    }
	                    //判断是否触底
	                    if(myIscroll.scrollerH+myIscroll.y <= myIscroll.wrapperH){
	                        //flag = false;
	                        $('#loadBar').show();

	                        
	                        myIscroll.refresh();
	                        myIscroll.scrollToElement('.loading');
	                        //调用goodslist组件的ajax
	                        this.setState({pageCode:1})
	                    }
	                }.bind(this)
	            })  
	        }.bind(this)*/

	    },
	    render: function () {
	        return(
	            React.createElement("div", null, 
	                React.createElement(HeaderComponent, null), 
	                React.createElement(Search, null), 
	                React.createElement("div", {id: "container", className: style.container}, 
	                    
	                    React.createElement("div", null, 
	                        React.createElement("div", {className: style.reload+ ' reload'}, "松手刷新"), 
	                        React.createElement(BannerComponent, null), 
	                        React.createElement(GoodsListComponent, {pageCode: this.state.pageCode}), 
	                        React.createElement("div", {className: style.loadBar+ ' loadBar'}, "正在加载")
	                    )
	                    
	                )
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
	            React.createElement("header", {className: style.header, id: "header"}, 
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
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css");
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

	var Search = React.createClass({displayName: "Search",

	    render: function () {
	        return(
	            React.createElement("div", {className: style.div, id: "search"}, 
	            	React.createElement("input", {type: "text", placeholder: "请输入搜索内容", className: style.input+' searchIcon'})
	            )
	        )
	    }
	});

	module.exports = Search;


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
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./search.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./search.css");
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
	exports.push([module.id, "._9F6fhqtaznGBy4i8X8u9U {\r\n\tbackground-color: #52525a;\r\n    height: 0.86rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n._39W_XdaeWK-Et3FW-OdJPR {\r\n\t\r\n    background-color: #fff;\r\n    background-size: 0.34rem 0.38rem;\r\n    background-position-x: 0.27rem;\r\n    padding-left: 0.74rem;\r\n    display: block;\r\n    height: 0.56rem;\r\n    border-radius: 0.28rem;\r\n    border: 0;\r\n    width: 5.16rem;\r\n}", ""]);

	// exports
	exports.locals = {
		"div": "_9F6fhqtaznGBy4i8X8u9U",
		"input": "_39W_XdaeWK-Et3FW-OdJPR"
	};

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var style = __webpack_require__(247);
	var $ = __webpack_require__(238);
	var Swiper = __webpack_require__(249);

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
	        window.onload = function(){
	            var mySwiper = new Swiper ('.swiper-container', {
	                // 如果需要分页器
	                pagination: '.swiper-pagination',
	                autoplay : 3000,
	                loop: true

	            })
	        }
	    },
	    componentDidUpdate: function(){
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

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, ".o-Dm_W8Ak_2XoM8bxnT5Y {\r\n    height: 2.5rem;\r\n    width: 100%;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"img": "o-Dm_W8Ak_2XoM8bxnT5Y"
	};

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	  var React = __webpack_require__(1);
	var $ = __webpack_require__(238);
	var style = __webpack_require__(251)

	var GoodsListComponent = React.createClass({displayName: "GoodsListComponent",
	    getInitialProps:function(){
	      return {
	        pageCode:0
	      }
	    },
	    getInitialState: function () {
	        return{
	          list:[],
	        }
	    },
	    componentWillMount: function () {
	      console.log('mount',this.props.pageCode)
	        $.ajax({
	            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
	            data: {
	                linenumber:9,
	                pageCode: this.props.pageCode
	            },
	            dataType: 'jsonp',
	            success: function (res) {
	                console.log(res)
	                this.setState({list:res})
	            }.bind(this)
	        })
	    },
	    componentWillUpdate: function(){
	      console.log('update',this.props.pageCode)
	      //为什么会不停的执行？
	      /*$.ajax({
	            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
	            data: {
	                linenumber:9,
	                pageCode: this.props.pageCode
	            },
	            dataType: 'jsonp',
	            success: function (res) {
	                console.log(res)
	                this.setState({list:res})
	            }.bind(this)
	        })*/
	    },
	   render: function () {
	       return(
	           React.createElement("ul", null, 
	               
	                   this.state.list.map(function (obj,i) {
	                       return(
	                           React.createElement("li", {key: i, className: style.li}, 
	                               React.createElement("div", {className: style.pic}, 
	                                   React.createElement("img", {src: obj.goodsListImg, alt: ""})
	                               ), 
	                               React.createElement("div", {className: style.detail}, 
	                                   React.createElement("h3", {className: style.h3}, obj.goodsName), 
	                                   React.createElement("div", {className: style.price}, 
	                                       React.createElement("span", {className: style.current}, "¥", obj.price), 
	                                       React.createElement("span", {className: style.old}, "¥", (obj.price)*(obj.discount)/10), 
	                                       React.createElement("p", {className: style.discount}, obj.discount, "折")
	                                   ), 
	                                   React.createElement("div", {className: style.addcart}, 
	                                       React.createElement("img", {src: "app/img/add-cart.png", alt: ""})
	                                   )
	                               )
	                           )
	                       )
	                   })
	               
	           )
	       )
	   }
	});

	module.exports = GoodsListComponent;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, "._3ResP3MVpcKBLN-Z9QFRYE {\r\n\tbox-shadow: 0 1px 2px #666;\r\n    padding: 0.2rem 0.54rem 0.26rem 0.16rem;\r\n    box-sizing: border-box;\r\n    height: 2.2rem;\r\n}\r\n._2Xss5EsLNK8fbhhRkPYXqd {\r\n\t\t    width: 1.74rem;\r\n    height: 1.74rem;\r\n    float: left;\r\n}\r\n._28pqn9vWj97gqzQJzh2KTm {\r\n\tfloat: right;\r\n    width: 3.84rem;\r\n}\r\n._1d0H5-rS5PtN0m7jBxK1Ie {\r\n\t    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    line-height: 0.42rem;\r\n    font-size: 0.26rem;\r\n    height: 0.84rem;\r\n}\r\n.iFChS8u6GLwz_rb0JVgIu {\r\n\tfloat: left;\r\n    width: 2.4rem;\r\n}\r\n._30zAD99buhyKUBcv7pKVv4 {\r\n\t    font-size: 0.38rem;\r\n    color: #e63569;\r\n}\r\n.VXlZmNlcA-WGRUbEZDv3j {\r\n\t    padding-left: 0.1rem;\r\n    font-size: 0.18rem;\r\n    color: #ccc;\r\n}\r\n.m0QwdBBHUGU3sTCpGrxT- {\r\n\t    line-height: 0.4rem;\r\n    color: #000;\r\n    font-size: 0.24rem;\r\n}\r\n._2ysab7c3sbAgQwTkQiS3ID {\r\n\tmargin-top: 0.2rem;\r\n    float: right;\r\n    zoom: 0.5;\r\n}", ""]);

	// exports
	exports.locals = {
		"li": "_3ResP3MVpcKBLN-Z9QFRYE",
		"pic": "_2Xss5EsLNK8fbhhRkPYXqd",
		"detail": "_28pqn9vWj97gqzQJzh2KTm",
		"h3": "_1d0H5-rS5PtN0m7jBxK1Ie",
		"price": "iFChS8u6GLwz_rb0JVgIu",
		"current": "_30zAD99buhyKUBcv7pKVv4",
		"old": "VXlZmNlcA-WGRUbEZDv3j",
		"discount": "m0QwdBBHUGU3sTCpGrxT-",
		"addcart": "_2ysab7c3sbAgQwTkQiS3ID"
	};

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(254);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(237)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./home.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?module!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(236)();
	// imports


	// module
	exports.push([module.id, "._3ZGY4VpGCguC74y8V-AYdR {\r\n\tposition: relative;\r\n}\r\n.AjCRZIWC6sYEg0edL8TqQ {\r\n\t\r\n\theight: 1.2rem;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n}\r\n._1W4GWCbkv5qGHXHamx36pP {\r\n\tdisplay: none;\r\n  height: 0.8rem;\r\n  opacity: 0.5;\r\n  background-color: $color-main;\r\n  line-height: 0.8rem;\r\n  color: #fff;\r\n  text-align: center;\r\n}", ""]);

	// exports
	exports.locals = {
		"container": "_3ZGY4VpGCguC74y8V-AYdR",
		"reload": "AjCRZIWC6sYEg0edL8TqQ",
		"loadBar": "_1W4GWCbkv5qGHXHamx36pP"
	};

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var HeaderComponent = __webpack_require__(240);
	var Search = __webpack_require__(243);


	var FenleiComponent = React.createClass({displayName: "FenleiComponent",
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
	        window.onload = function(){
	            var mySwiper = new Swiper ('.swiper-container', {
	                // 如果需要分页器
	                pagination: '.swiper-pagination',
	                autoplay : 3000,
	                loop: true

	            })
	        }
	    },
	    componentDidUpdate: function(){
	        var mySwiper = new Swiper ('.swiper-container', {
	                // 如果需要分页器
	                pagination: '.swiper-pagination',
	                autoplay : 3000,
	                loop: true

	            })
	    },
	    render: function(){
	        return(
	             React.createElement("div", null, 
	                React.createElement(HeaderComponent, null), 
	                React.createElement(Search, null), 
	                "fenlei"
	            )
	        )
	    }
	});

	module.exports = FenleiComponent;

/***/ },

/***/ 256:
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

/***/ }

});