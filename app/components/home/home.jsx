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
            linenumber:3
        }
    },
    myIscroll: null,
    componentDidMount: function(){
       $('#container').height(this.iscrollHeightCalc($('#header'),$('#search'),$('#footer-nav')))
        $(function(){
            var dis = false;
            var flag = false;
            this.myIscroll = new iScroll('container',{
                topOffset: 60,
                onScrollMove: function(){
                    dis = false;
                    flag = true;
                    if(myIscroll.y >= 20){
                        dis = true;
                    }
                    
                },
                onScrollEnd: function () {
                    myIscroll.refresh();
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
                    if(myIscroll.scrollerH+myIscroll.y+20 <= myIscroll.wrapperH && flag){
                        //flag = false;
                        console.log('touch end')
                        $('.loadBar').show();
                        myIscroll.refresh();
                        myIscroll.scrollToElement('.loading');
                        //调用goodslist组件的ajax
                        var linenumber = this.state.linenumber + 3
                        this.setState({linenumber:linenumber})
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
            <div>
                <HeaderComponent/>
                <Search/>
                <div id='container' className={style.container}>
                    
                    <div>
                        <div className={style.reload+ ' reload'}>松手刷新</div>
                        <BannerComponent/>
                        <GoodsListComponent linenumber={this.state.linenumber} iscrollRfresh={this.}/>
                        <div className={style.loadBar+ ' loadBar'}>正在加载</div>
                    </div>
                    
                </div>
            </div>
        )
    }
});

module.exports = HomePage;