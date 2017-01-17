var React = require('react');

var HeaderComponent = React.createClass({
   render: function(){
       return(
            <header className="">
                <p>返回</p>
                <p>走秀网</p>
                <p>注册</p>
            </header>
       )
   }
});

module.exports = HeaderComponent;