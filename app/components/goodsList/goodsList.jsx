  var React = require('react');
var $ = require('n-zepto');
var style = require('./index.css')

var GoodsListComponent = React.createClass({
    getInitialProps:function(){
      return {
        pageCode:0
      }
    },
    getInitialState: function () {
        return{
          list:[],
        }
    },
    componentWillMount: function () {
      console.log('mount',this.props.pageCode)
        $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            data: {
                linenumber:9,
                pageCode: this.props.pageCode
            },
            dataType: 'jsonp',
            success: function (res) {
                console.log(res)
                this.setState({list:res})
            }.bind(this)
        })
    },
    componentWillUpdate: function(){
      console.log('update',this.props.pageCode)
      //为什么会不停的执行？
      /*$.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            data: {
                linenumber:9,
                pageCode: this.props.pageCode
            },
            dataType: 'jsonp',
            success: function (res) {
                console.log(res)
                this.setState({list:res})
            }.bind(this)
        })*/
    },
   render: function () {
       return(
           <ul>
               {
                   this.state.list.map(function (obj,i) {
                       return(
                           <li key={i} className={style.li}>
                               <div className={style.pic}>
                                   <img src={obj.goodsListImg} alt=""/>
                               </div>
                               <div className={style.detail}>
                                   <h3 className={style.h3}>{obj.goodsName}</h3>
                                   <div className={style.price}>
                                       <span className={style.current}>¥{obj.price}</span>
                                       <span className={style.old}>¥{(obj.price)*(obj.discount)/10}</span>
                                       <p className={style.discount}>{obj.discount}折</p>
                                   </div>
                                   <div className={style.addcart}>
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