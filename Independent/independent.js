window.onscroll = function (){enlarge()};
function enlarge(){
    document.getDocumentElementById("x").addEventListener("onscroll", alert("Hello its me again?"))
}