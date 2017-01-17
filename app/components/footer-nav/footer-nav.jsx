var React = require('react');
var style = require('./index.css');
var $ = require('n-zepto');


var FooterNav = React.createClass({
    getInitialState:function(){
        return {
            some:"张家辉"
        }
    },
    componentDidMount: function () {
      $('li').click(function(){
          console.log($(this));
          $(this).addClass('current').siblings().removeClass('current')
      })
    },
    setCurrnet: function () {
        this.setState({some:"current"})
    },
    render: function () {
        return(
            <div>
                {this.props.children}
                <footer className={style.head}>
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