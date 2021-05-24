//$(document).ready() : sau khi load hết tất cả thì mới chạy

$(document).ready(() => {
    var arr = document.querySelectorAll(".comingsoon .slick-slide");
    arr.forEach(function (item, index) {
        console.log(index)
        //Click vào item (bấm vô thẻ div)
        item.addEventListener("click", function () {
            //reset row opacity:0 , height:0

            document.querySelectorAll('.comingsoon .container >.row').forEach((item2) => {
                item2.style.opacity = "0";
                item2.style.height = "0";
            })
            // console.log(index)
            // console.log(item.getAttribute("data-slick-index"));
            // document.querySelector(`.slide-${index}`).style.opacity="1";
            // document.querySelector(`.slide-${index}`).style.height="auto";
            // }
            if (item.getAttribute("data-slick-index") == "0" || item.getAttribute("data-slick-index") == "3" || item.getAttribute("data-slick-index") == "6" || item.getAttribute("data-slick-index") == "9") {
                document.querySelector(".slide-0").style.opacity = "1";
                document.querySelector(".slide-0").style.height = "auto";
            }
            else if (item.getAttribute("data-slick-index") == "1" || item.getAttribute("data-slick-index") == "4" || item.getAttribute("data-slick-index") == "7" || item.getAttribute("data-slick-index") == "10") {
                document.querySelector(".slide-1").style.opacity = "1";
                document.querySelector(".slide-1").style.height = "auto";
            }
            else if (item.getAttribute("data-slick-index") == "2" || item.getAttribute("data-slick-index") == "5" || item.getAttribute("data-slick-index") == "8") {
                document.querySelector(".slide-2").style.opacity = "1";
                document.querySelector(".slide-2").style.height = "auto";
            }
        });
    });
});