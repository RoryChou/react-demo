var React = require('react');
var $ = require('n-zepto');

var GoodsListComponent = React.createClass({
    getInitialState: function () {
        return{
            gid: "",
            goodsListImg: '',
            goodsName: '',
            price: '',
            imgsUrl: ''
        }
    },
    componentWillMount: function () {
        $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            data: {
                linenumber:9,
                pageCode: 0
            },
            dataType: 'jsonp',
            success: function (res) {
                console.log(res)
            }
        })
    },
   render: function () {
       return(
           <li>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <h3></h3>
                    <div>
                        <span></span>
                        <span></span>
                        <p></p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
           </li>
       )
   }
});

module.exports = GoodsListComponent;