var React = require('react');
var style = require('./index.css');

var HeaderComponent = React.createClass({
   render: function(){
       return(
            <header className={style.header} id='header'>
                <p className={style.p}>返回</p>
                <p className={style.mid}>走秀网</p>
                <p className={style.p}>注册</p>
            </header>
       )
   }
});

module.exports = HeaderComponent;