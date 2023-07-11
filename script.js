// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorparagraph = document.getElementById("error")
console.log(errorparagraph)
//function to display the error message whenever the button is clicked
function purchase(){
    console.log("button clicked !")
    errorparagraph.textContent="Something went wrong please try again!"
}