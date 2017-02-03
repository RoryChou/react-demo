  var React = require('react');
var $ = require('n-zepto');
var style = require('./index.css')

var GoodsListComponent = React.createClass({
    getInitialProps:function(){
      return {
        linenumber:3
      }
    },
    getInitialState: function () {
        return{
          list:[],
        }
    },
    componentWillReceiveProps: function(obj){
      console.log(obj)
      $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            data: {
                linenumber:obj.linenumber,
                pageCode: 0 
            },
            dataType: 'jsonp',
            success: function (res) {
                console.log(res)
                this.setState({list:res})
            }.bind(this)
        })
    },
    componentWillMount: function () {
      console.log('mount',this.props.linenumber)
        $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            data: {
                linenumber:this.props.linenumber,
                pageCode: 0
            },
            dataType: 'jsonp',
            success: function (res) {
                console.log(res)
                this.setState({list:res})
            }.bind(this)
        })
    },
    componentDidUpdate: function(){
      console.log('componentDidUpdate')
      this.props.iscrollRfresh = true;
    },
   render: function () {
       return(
           <ul onLoad={this.props.iscrollRfresh}>
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