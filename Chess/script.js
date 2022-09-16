// const row = window.prompt("");
let chess = window.open();
let container = document.getElementById('container_div');
const button =  document.getElementById("Button");
button.addEventListener('click',(event)=>{
    let txtnum = document.getElementById("txtnum").value;
    /*for (let i = 0; i < array.length; i++) {
        
    }*/
    
    container = `<div class="Box1"></div>`;
    console.log(txtnum);    
    console.log(event);
});

// const box1color = document.getElementById("Box1");
// box1color.addEventListener('click', (event)=>{
//     document.body.style.backgroundColor = "red";
//     document.body.style.width = "100px";
//     document.body.style.height = "100px";
// });

// const box2color = document.getElementById("Box2");
// box2color.addEventListener('click', (event)=>{
//     document.body.style.backgroundColor = "blue";
//     document.body.style.width = "100px";
//     document.body.style.height = "100px";
// });

// const box3color = document.getElementById("Box3");
// box3color.addEventListener('click', (event)=>{
//     document.body.style.backgroundColor = "green";
//     document.body.style.width = "100px";
//     document.body.style.height = "100px";
// });

// const box4color = document.getElementById("Box4");
// box4color.addEventListener('click', (event)=>{
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.width = "100px";
//     document.body.style.height = "100px";
// });