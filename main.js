const table = document.getElementById("priceTable");
let i = 1;
let sum = 0;

let rows = table.rows.length;
console.log(`rows: ${rows}`);

// function addRow(product, price) {
//   //  table.deleteRow(-1);
//   let newRow = table.insertRow(-1);
//   let newCell1 = newRow.insertCell(0);
//   let newCell2 = newRow.insertCell(1);
//   let newCell3 = newRow.insertCell(2);

//   newCell1.innerHTML = rows;
//   newCell2.innerHTML = product;
//   newCell3.innerHTML = price;
//   rows++;
// }

function totalSum() {
  while (i < table.rows.length) {
    sum += parseFloat(table.rows[i].cells[2].innerHTML);
    i++;
  }

  //let tFoot = table.CreateTFoot();
  let row = table.insertRow(rows);
  row.id = "total";
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell2.id = "total-price";
  cell2.innerHTML = "Total";
  cell3.innerHTML = sum;
}

addRow("Veggies", 120);
addRow("Travel Kit", 300);

totalSum();

const submitHandler = (e) => {
  e.preventDefault();
  console.log("Submitted")
}

// Buttons //

document.getElementById("blueb").onclick=function(){
  document.getElementById("blueb").style.backgroundColor="#FF3F1A";
  }
  
document.getElementById("greenb").onclick=function(){
  document.getElementById("para").style.color="#63d134";
  }

document.getElementById("yellowb").onclick=function(){
  document.getElementById("yellowb").style.visibility="hidden";
}



window.onload = function(){
//canvas init
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//canvas dimensions
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

//snowflake particles
var mp = 25; //max particles
var particles = [];
for(var i = 0; i < mp; i++)
{
  particles.push({
    x: Math.random()*W, //x-coordinate
    y: Math.random()*H, //y-coordinate
    r: Math.random()*4+1, //radius
    d: Math.random()*mp //density
  })
}

//Lets draw the flakes
function draw()
{
  ctx.clearRect(0, 0, W, H);
  
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  for(var i = 0; i < mp; i++)
  {
    var p = particles[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
  }
  ctx.fill();
  update();
}

//Function to move the snowflakes
//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
var angle = 0;
function update()
{
  angle += 0.01;
  for(var i = 0; i < mp; i++)
  {
    var p = particles[i];
    //Updating X and Y coordinates
    //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
    //Every particle has its own density which can be used to make the downward movement different for each flake
    //Lets make it more random by adding in the radius
    p.y += Math.cos(angle+p.d) + 1 + p.r/2;
    p.x += Math.sin(angle) * 2;
    
    //Sending flakes back from the top when it exits
    //Lets make it a bit more organic and let flakes enter from the left and right also.
    if(p.x > W+5 || p.x < -5 || p.y > H)
    {
      if(i%3 > 0) //66.67% of the flakes
      {
        particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
      }
      else
      {
        //If the flake is exitting from the right
        if(Math.sin(angle) > 0)
        {
          //Enter from the left
          particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
        }
        else
        {
          //Enter from the right
          particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
        }
      }
    }
  }
}

//animation loop
setInterval(draw, 33);
}

// Buttons end //



