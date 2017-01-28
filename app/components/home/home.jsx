var React = require('react');
var HeaderComponent = require('../header/header.jsx');
var Search = require('../search/search.jsx');
var BannerComponent = require('../banner/index.jsx');
var GoodsListComponent = require('../goodsList/goodsList.jsx');
//var iScroll = require('iScroll');
var $ = require('n-zepto')
var style = require('./home.css');

var HomePage = React.createClass({
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
        //add iscroll
        window.onload = function(){
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
        }.bind(this)
    },
    render: function () {
        return(
            <div>
                <HeaderComponent/>
                <Search/>
                <div id='container' className={style.container}>
                    
                    <div>
                        <div className={style.reload+ ' reload'}>松手刷新</div>
                        <BannerComponent/>
                        <GoodsListComponent pageCode={this.state.pageCode}/>
                        <div className={style.loadBar+ ' loadBar'}>正在加载</div>
                    </div>
                    
                </div>
            </div>
        )
    }
});

module.exports = HomePage;