// let myImage = document.querySelector('img');
// myImage.onclick = function(){
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox.jpg'){
//         myImage.setAttribute('src','images/firefox2.jpg')
//     }else{
//         myImage.setAttribute('src','images/firefox.jpg')
//     }
// }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入您的名字');
    if(!myName)//如果输入为空
    {
        setUserName()
    }
    else
    {
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla 欢迎您,'+ myName;
    }
 
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 欢迎您,' + storedName;
}
myButton.onclick = function(){
    setUserName()
}