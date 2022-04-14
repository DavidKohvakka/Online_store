const currentLocation = location.href;
console.log(currentLocation)
const menuItem = document.querySelectorAll('.nav-link');
console.log(menuItem)
for (let i = 0; i<menuItem.length; i++) {
    console.log("päcina")
    if(menuItem[i].href === currentLocation){
        menuItem[i].classList.add('active')
    } 
}