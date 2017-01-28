var React = require('react');
var style = require('./search.css');

var Search = React.createClass({

    render: function () {
        return(
            <div className={style.div} id='search'>
            	<input type='text' placeholder="请输入搜索内容" className={style.input+' searchIcon'} />
            </div>
        )
    }
});

module.exports = Search;
