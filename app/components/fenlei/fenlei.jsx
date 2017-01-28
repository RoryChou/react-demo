var React = require('react');
var HeaderComponent = require('../header/header.jsx');
var Search = require('../search/search.jsx');


var FenleiComponent = React.createClass({
    getInitialState: function () {
      return {
          imgList: []
      }
    },
    componentWillMount: function () {
        //ajax 获取banner图片
        $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getBanner.php',
            dataType: 'jsonp',
            success: function (res) {
                /*if(!res){
                    $('.loading').html('已经到底啦')
                };*/
                for( var i in res){
                    var img = JSON.parse(res[i].goodsBenUrl)[0];
                    this.state.imgList.push(img);
                    this.setState({imgList: this.state.imgList});
                }
                console.log(this.state.imgList)
            }.bind(this)
        });
    },
    componentDidMount: function () {
        window.onload = function(){
            var mySwiper = new Swiper ('.swiper-container', {
                // 如果需要分页器
                pagination: '.swiper-pagination',
                autoplay : 3000,
                loop: true

            })
        }
    },
    componentDidUpdate: function(){
        var mySwiper = new Swiper ('.swiper-container', {
                // 如果需要分页器
                pagination: '.swiper-pagination',
                autoplay : 3000,
                loop: true

            })
    },
    render: function(){
        return(
             <div>
                <HeaderComponent/>
                <Search/>
                fenlei
            </div>
        )
    }
});

module.exports = FenleiComponent;