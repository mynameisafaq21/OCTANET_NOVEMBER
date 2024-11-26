document.addEventListener("DOMContentLoaded",()=>
{
     function add()
     {
         const firstnumber=parseFloat(document.getElementById("first-number").value)
         const secondnumber=parseFloat(document.getElementById("second-number").value)
         const result=firstnumber+secondnumber
         document.querySelector(".answer-div").textContent=`Answer: ${result}`
         console.log(result)
     }

     function subtract()
{
         const firstnumber=parseFloat(document.getElementById("first-number").value)
         const secondnumber=parseFloat(document.getElementById("second-number").value)
         const result=firstnumber-secondnumber
         document.querySelector(".answer-div").textContent=`Answer: ${result}`
         console.log(result)
     }

     
     function multiply()
{
         const firstnumber=parseFloat(document.getElementById("first-number").value)
         const secondnumber=parseFloat(document.getElementById("second-number").value)
         const result=firstnumber*secondnumber
         document.querySelector(".answer-div").textContent=`Answer: ${result}`
         console.log(result)
     }

      
     function divide()
{
         const firstnumber=parseFloat(document.getElementById("first-number").value)
         const secondnumber=parseFloat(document.getElementById("second-number").value)
         const result=firstnumber/secondnumber
         document.querySelector(".answer-div").textContent=`Answer: ${result}`
         console.log(result)
     }

     document.getElementById('reset').addEventListener('click', () => {
        location.reload(); // Reloads the page
    });

    
//function to call event listener for clicking of buttons
document.getElementById("plus").onclick=add;
document.getElementById("minus").onclick=subtract;
document.getElementById("multiply").onclick=multiply;
document.getElementById("divide").onclick=divide;
}
);
