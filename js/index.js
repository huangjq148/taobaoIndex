window.onload = function () {
    let typeMenusUl = document.getElementsByClassName("types-menus-ul")
    typeMenusUl[0].onmouseover = function (e) {
        let event = e || window.event
        if(e.target.tagName == "LI"){
            document.getElementById(e.target.dataset.name).style.display="block"
        }
    }
    typeMenusUl[0].onmouseout = function (e) {
        let event = e || window.event
        if(e.target.tagName == "LI"){
            document.getElementById(e.target.dataset.name).style.display="none"
        }
    }
}