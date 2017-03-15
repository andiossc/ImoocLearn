/**
 * Created by Administrator on 2017/3/7.
 */
window.onload = function () {
    var box = document.getElementById('container');
    var imgs = box.getElementsByTagName('img');
    var imgwidth = imgs[0].offsetWidth;
    var exposeWidth = 160;
    var boxWidth = imgwidth+(imgs.length-1)*exposeWidth;
    console.log(boxWidth);
    box.style.width = boxWidth+'px';

    //设置每道门的初始位置
    function setImgPos(){
        for(var i= 1,len=imgs.length;i<len;i++){
            imgs[i].style.left = imgwidth+exposeWidth*(i-1)+'px';
        }
    }
    setImgPos();

    //计算每道门打开时应移动的距离
    var translate = imgwidth - exposeWidth;

    //为每道门绑定事件
    for(var i= 0,len=imgs.length;i<len;i++){
        //使用立即调用的函数表达式,为了获得不同的i值


//        moveDoor(i);

        (function(i){
            imgs[i].onmouseover = function () {
                //先将门复位
                setImgPos();

                for(var j=1;j<=i;j++){
                    imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
                }
            };
        })(i);
    }

    function moveDoor(i){
        imgs[i].onmouseover = function () {
            //先将门复位
            setImgPos();

            for(var j=1;j<=i;j++){
                imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
            }
        };
    }
};