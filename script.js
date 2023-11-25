//your JS code here. If required.
let inputElm = document.getElementById("fname");
inputElm.addEventListener("blur",()=>{
	inputElm.value = inputElm.value.toUpperCase();
})


// blur is a special type event whenver we loss the focus on
// input field this the function associated with this will be call