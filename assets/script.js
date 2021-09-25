var dateEL = document.querySelector("#currentDay");
var formEL = document.querySelector(".form-control");

//completes the Today's Date on the header
dateEL.textContent = moment().format('[Today is: ] dddd[,] MMMM Do');

//gives the time in hour integers
var now = moment().format('H');
var color = [a, b, c, d, e, f, g, h, i];

//colors current hour RED
if (now < color.length - 1) { }
else if (now > color.length-1 && now < color.length + 9) {
    var red = color[now - color.length];
    red.style.background = "red";
}

//colors past times GRAY
if (now > color.length + 8) {
    var j = color.length - 1;
    while (j > -1) {
        color[j].style.background = "gray";
        j--;
    }
}
else if (now>9) { 
    while (now > color.length) {
        var gray = color[now - color.length-1];
        gray.style.background = "gray";
        now--;
    }
}




var save = localStorage.getItem("save");
var btnEL=$(".btn");    
btnEL.on("click", saveFunction);
if(save!=1){
var tasks=["","","","","","","","",""];
localTasks=localStorage.setItem("localTasks",JSON.stringify(tasks)); //this
}
//if there is saved data, retieve it
else{
var tasks=JSON.parse(localStorage.getItem("localTasks"));
//old saves will be displayed here
for(var k=0; k<tasks.length; k++){
//console.log(color[k])
color[k].value=tasks[k];
//console.log(color[k].value) 
}}



//when saved button is clicked it will write to dataSave
function saveFunction(){
    var hourInput=$(this).prev().val(); //this is the text in the box
    //console.log(hourInput);
    var saveSpot=($(this).prev().attr('id')); //this is the id of the textbox
    
    for(var l=0; l<color.length; l++){

        if ($(color[l]).attr('id')==saveSpot){
            tasks[l]=hourInput; 
            localTasks=localStorage.setItem("localTasks",JSON.stringify(tasks)); //this
        }
    }

    save=1;
    localStorage.setItem("save",save);
}






