var React = require('react');
var HeaderComponent = require('../header/header.jsx');
var BannerComponent = require('../banner/index.jsx');
var GoodsListComponent = require('../goodsList/goodsList.jsx');

var HomePage = React.createClass({

    render: function () {
        return(
            <div>
                <HeaderComponent/>
                <BannerComponent/>
                <GoodsListComponent/>
            </div>
        )
    }
});

module.exports = HomePage;