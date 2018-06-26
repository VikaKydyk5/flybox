const BALL_DIAMETER = 120;
let screenHeight;
let screenWidth;
// Роблю адаптацію під розмір екрану
$(window).resize(() => {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
});
$(window).resize();
const getRandColor = () => Math.random().toString(16).slice(2, 8);
const getRandCoordinates = () => ({
    top: Math.random() * (screenHeight - BALL_DIAMETER),
    left: Math.random() * (screenWidth - BALL_DIAMETER),
});

function changeColor() {
    $("#ball").css({
        //Задання кольору 16-річним значенням типу #ffffff, то саме, що rgb(255, 255, 255)//
        "background-color": `#${getRandColor()}`,
        "border-color": `#${getRandColor()}`,
    })
}
setInterval(changeColor, 200);
(function move() { $("#ball").animate(getRandCoordinates(), 500, move) })();