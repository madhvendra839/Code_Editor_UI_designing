function run() {
    let html=document.querySelector(".editor #html").value;
    let css="<style>"+document.querySelector(".editor #css").
        value+"</style>";
    let js=document.querySelector(".editor #js").value;
    let output=document.querySelector(".editor #output");
   
    output.contentDocument.body.innerHTML=html+css;
    output.contentWindow.eval(js);
    console.log(html,css,js,output);
}
document.querySelector(".editor #html").addEventListener("keyup", run);
document.querySelector(".editor #css").addEventListener("keyup", run);
document.querySelector(".editor #js").addEventListener("keyup", run);