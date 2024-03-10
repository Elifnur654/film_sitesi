const arrows=document.querySelectorAll('.arrow');
const movieLists=document.querySelectorAll('.movie-list');
console.log(movieLists);
arrows.forEach((arrow,i)=>{
    const widthRadio=Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWidth / 300));
    let clickCounter=0;
    const imageItem=movieLists[i].querySelectorAll('img').length;
    console.log(imageItem);
        arrow.addEventListener('click',function(){
        clickCounter++;
        if(imageItem -(4+clickCounter)+ (4-widthRadio) >=0){
            movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value- 300}px)`;
        }
        else{
        movieLists[i].style.transform="translateX(0)";
        clickCounter=0;
        }
    });
    //console.log(window.innerWidth);
});
/*dark mode*/
const ball=document.querySelector('.toggle-ball');
const items=document.querySelectorAll('.container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title');
ball.addEventListener("click",function(){
   items.forEach((item)=>item.classList.toggle("active"));

   
})