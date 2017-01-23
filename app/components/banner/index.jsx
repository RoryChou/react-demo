var React = require('react');
var style = require('./index.css');
var $ = require('n-zepto');
var Swiper = require('swiper');

var BannerComponent = React.createClass({
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
    render: function(){
        return(
            <div className="banner swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="javascript:;">
                            <img src={this.state.imgList[0]} alt="" className={style.img}/>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="javascript:;">
                            <img src={this.state.imgList[1]} alt="" className={style.img}/>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="javascript:;">
                            <img src={this.state.imgList[2]} alt="" className={style.img}/>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="javascript:;">
                            <img src={this.state.imgList[3]} alt="" className={style.img}/>
                        </a>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
});

module.exports = BannerComponent;