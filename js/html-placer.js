
fetch(document.currentScript.getAttribute("html_path"))
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#".concat(document.currentScript.getAttribute("id")));
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})