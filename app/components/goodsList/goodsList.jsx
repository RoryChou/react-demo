var React = require('react');
var $ = require('n-zepto');
var style = require('./index.css')

var GoodsListComponent = React.createClass({
    getInitialState: function () {
        return{
            list:[]
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
                this.setState({list:res})
            }.bind(this)
        })
    },
    componentDidMount: function () {
      //添加iscroll

    },
   render: function () {
       return(
           <ul>
               {
                   this.state.list.map(function (obj,i) {
                       return(
                           <li key={i}>
                               <div>
                                   <img src={obj.goodsListImg} alt=""/>
                               </div>
                               <div>
                                   <h3>{obj.goodsName}</h3>
                                   <div>
                                       <span>¥{obj.price}</span>
                                       <span>¥{(obj.price)*(obj.discount)/10}</span>
                                       <p>{obj.discount}折</p>
                                   </div>
                                   <div>
                                       <img src="app/img/add-cart.png" alt=""/>
                                   </div>
                               </div>
                           </li>
                       )
                   })
               }
           </ul>
       )
   }
});

module.exports = GoodsListComponent;