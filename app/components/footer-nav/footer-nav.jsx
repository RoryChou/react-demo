var React = require('react');
var style = require('./index.css');
var $ = require('n-zepto');


var FooterNav = React.createClass({
    componentDidMount: function () {
        //默认点击首页效果
        $('li').eq(0).addClass('current');
      $('li').click(function(){
          $(this).addClass('current').siblings().removeClass('current')
      })
    },
    render: function () {
        return(
            <div>
                {this.props.children}
                <footer className={style.head} id='footer-nav'>
                    <ul className={style.ul}>
                        <li className={style.li} >
                            <a href="#/" className={style.a}>首页</a>
                        </li>
                        <li className={style.li}>
                            <a href="#/fenlei" className={style.a}>分类</a>
                        </li>
                        <li className={style.li}>
                            <a href="#/cart" className={style.a}>购物车</a>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
});

module.exports = FooterNav;