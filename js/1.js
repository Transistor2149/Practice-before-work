/*
* @Author: Marte
* @Date:   2019-11-07 11:44:15
* @Last Modified by:   Marte
* @Last Modified time: 2019-11-07 13:15:43
*/

document.getElementById("findHover").onclick=function(){
    //鼠标当前悬停的单元格
    var hovered = document.querySelector("td:hover");
    if(hovered)
        document.getElementById("hoverResult").innerHTML = hovered.innerHTML;
}