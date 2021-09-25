var dateEL = document.querySelector("#currentDay");
var formEL = document.querySelector(".form-control");

//completes the Today's Date on the header
dateEL.textContent = moment().format('[Today is: ] dddd[,] MMMM Do');

//gives the time in hour integers
var now =moment().format('H');
var color = [a, b, c, d, e, f, g, h, i];

//colors current hour RED
if (now < color.length - 1) { }
else if (now > color.length - 1 && now < color.length + 8) {
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



var save;
localStorage.getItem("save");
var btnEL=$(".btn");
btnEL.on("click", saveFunction);


//if there is saved data, retieve it
if(save==1){
taskText=JSON.parse(localStorage.getItem("localTasks"));

}


//when saved button is clicked
function saveFunction(){
    // console.log($(this.prev));
    var hourInput=$(this).prev().val()
    console.log(hourInput);
    


    save=1;
    localStorage.setItem("save",save);

}




