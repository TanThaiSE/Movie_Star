//$(document).ready() : sau khi load hết tất cả thì mới chạy

$(document).ready(()=>{
    var arr=document.querySelectorAll(".comingsoon .slick-slide");
    arr.forEach(function(item, index){
        console.log(index)
        //Click vào item (bấm vô thẻ div)
        item.addEventListener("click",function(){
            //reset row opacity:0 , height:0

            document.querySelectorAll('.comingsoon .container >.row').forEach((item2)=>{
                item2.style.opacity="0";
                item2.style.height="0";
            })
            // console.log(index)
            // console.log(item.getAttribute("data-slick-index"));
                // document.querySelector(`.slide-${index}`).style.opacity="1";
                // document.querySelector(`.slide-${index}`).style.height="auto";
            // }
            if(item.getAttribute("data-slick-index")=="1")
            {
                document.querySelector(".slide-1").style.opacity="1";
                document.querySelector(".slide-1").style.height="auto";
            }
        });
    });
});