var React = require('react');
var HeaderComponent = require('../header/header.jsx');


var FenleiPage = React.createClass({
    render: function () {
        return(
            <div>
                <HeaderComponent/>
                <div>我是分类</div>
            </div>
        )
    }
});

module.exports = FenleiPage;