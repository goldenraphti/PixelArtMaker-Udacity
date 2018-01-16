
    



function makeGrid() {   // Select size input
    
    const height = $("#input_height").val();
    const width = $("#input_width").val();


    for (let row = 0 ; row < height ; row++) {  
        $("#pixel_canvas").append("<tr></tr>");
    };
    for (let column = 0 ; column < width ; column++) {  
        $("tr").append("<td></td>");
    };

    
};

function eraseGrid() {
    $("#pixel_canvas").empty();
}





function paintColor() {    // Select color input
    
    $("#pixel_canvas").on("click", "td" , function(){
        let colorUser = $("#colorPicker").val();
        $(this).css("background", colorUser);
    })
};

    
$(document).ready(function(){ // calls for functions
    
    $("#sizePicker").submit(function(evt){ // call for function to create grid
        
        evt.preventDefault();
        eraseGrid();
        makeGrid();

    });

    $("#erase-grid-button").click(function(evt){
        evt.preventDefault();
        eraseGrid();
    });
    
    paintColor();

});

// TODO: explain your code

// TODO: make a nice html-css new website for it

// TODO: implement new buttons panel (minimized/maximize with tool icon)
// TODO: background color button
// TODO: export drawing as .png on open-source plateform (frama)
// TODO: import a nice photo adjusted in the background (with low opacity)
