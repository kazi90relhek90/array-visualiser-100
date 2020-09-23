//event listener
document.addEventListener("keypress", alterLook)

document.addEventListener("keypress", resetLook)

// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (n = 0 ; n < 100 ; n++){
    myArray.push(300)
}



// Main Program Loop
requestAnimationFrame(draw);
//functions
function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }


    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}



    function resetLook(event) {
        if (event.keyCode == 114){
            for (let n = 0 ; n < myArray.length ; n++){
                myArray.splice(n, 1 , 300);
            }
        }
    }

    function alterLook(event){
      let arraynum = 0
        if   (event.keyCode == 32) {
          for (arraynum ; arraynum <= myArray.length ; arraynum++){            
                //get random number between -5 and 5
                var randomNum = 5 + Math.random()* (-5 - 5)

              // give number to array number coresponding to it
             myArray[arraynum] += randomNum
             
             //constrain myArray
             for (let v = 0 ; v < myArray.length; v++)
             myArray[v] = constrain( myArray[v] , 0 , 800 )
            }  
        }
    }
     function constrain( n , low , high){
        if (n < low){
            return(low)
        } else if (n > high) {
            return(high)
        } else {
            return(n)
        }
    }
