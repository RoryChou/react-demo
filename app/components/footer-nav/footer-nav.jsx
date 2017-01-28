var React = require('react');
var style = require('./index.css');
var $ = require('n-zepto');


var FooterNav = React.createClass({
    componentDidMount: function () {
      $('li').click(function(){
          console.log($(this));
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
                            <a href="#/home" className={style.a}>首页</a>
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