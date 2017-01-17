var React = require('react');
var HeaderComponent = require('../header/header.jsx');


var HomePage = React.createClass({
    render: function () {
        return(
            <div>
                <HeaderComponent/>
                <div>我是首页</div>
            </div>
        )
    }
});

module.exports = HomePage;