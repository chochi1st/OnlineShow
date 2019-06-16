const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider img');
// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
let size = 0;

// 20190619 在高铁上发现一个小bug 修改一下
imgs[0].addEventListener('load',()=>{
    size = imgs[0].clientWidth;
    counter = 1;
    nextBtn.addEventListener('click',clickNext);
    prevBtn.addEventListener('click',clickPrev);
    slider.addEventListener('transitionend',transHandler);
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
// --------------------------------------------------------------------
function clickNext(){
    if(counter>=imgs.length-1) return;//防止快速点击 transitionend事件未监听到
    slider.style.transition= 'transform 0.2s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

}
function clickPrev(){
    if(counter<1)   return;//防止快速点击 transitionend事件未监听到
    slider.style.transition= 'transform 0.2s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

}
function transHandler(){
    if(imgs[counter].id ==='lastClone'){
        slider.style.transition = 'none';//直接替换不要渐进
        counter = imgs.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(imgs[counter].id ==='firstClone'){
        slider.style.transition = 'none';
        counter = imgs.length - counter;
        // console.log(imgs.length,counter);
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
}
