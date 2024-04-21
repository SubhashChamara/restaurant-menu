var movieTitle=document.getElementById('movie-title');
var imageContainer=document.getElementById('image-container');
var imageBox=document.getElementById('item-box')

imageContainer.addEventListener('mouseover',function(event){
    const menu=['Classic Burger','Cheese Chicken Burger','Garlic Cheese Burger','Vege Burger','Pork Burger With Potato Chips','Fresh Apple Juice','Special Double Egg Salad','Crunchi Potato Chips']
    if(event.target.tagName==='IMG'){
        let selectedItem=event.target;
        let iValue=window
        .getComputedStyle(selectedItem.parentNode)
        .getPropertyValue('--i');
        movieTitle.innerText=menu[iValue-1];
        let src=selectedItem.src;
        imageBox.style.backgroundImage=`url('${src}')`
    }
});
imageContainer.addEventListener('mouseout',function(event){
    movieTitle.innerText='Restaurant Menu';
    imageBox.style.backgroundImage=`url('/img/Restaurant.png')`
})