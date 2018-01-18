"use strict"; // Use javascript in strict mode in global scope
    


function makeGrid() {   // Select and create grid size
    
    const height = $("#input_height").val();
    const width = $("#input_width").val();

    let colorGridBackground = $("#colorBackground").val();

    for (let row = 0 ; row < height ; row++) {  
        $("#pixel_canvas").append("<tr></tr>");
    };
    for (let column = 0 ; column < width ; column++) {  
        $("tr").append("<td></td>");
    };
    
    $("td").css("background", colorGridBackground); // creates the css background color decided before submit grid creation
    
};

function resetGrid() {  // Reset grid to initial color
    let colorGridBackground = $("#colorBackground").val();
     $("td").css("background", colorGridBackground);
};

function deleteGrid() {  // Erase eventual existing grid
    $("#pixel_canvas").empty();
};


function paintColor() {    // Select color input

    let mouseDownStatus = false;    // check if mouse is pressed so draw only when pressed
    $(document).mousedown(function() {
            mouseDownStatus = true;
        }).mouseup(function() {
            mouseDownStatus = false;
    });
                   

    $("#pixel_canvas").on("mousemove", "td" , function(){
        if (mouseDownStatus) {
            let colorUser = $("#colorPicker").val();
            $(this).css("background", colorUser);
        };
    });

};



    
$(document).ready(function(){ // calls for functions
    

    
    $("#sizePicker").submit(function(evt){ // call for function to create grid
        
        evt.preventDefault();   // prevent from reloading the page when click submit
        deleteGrid();
        makeGrid();

    });
    
    $("#eraser").click(function(evt){    // reset grid to initial colours
        evt.preventDefault();
        resetGrid();
    });

    $("#delete-grid-button").click(function(evt){    // erase existing grid function
        evt.preventDefault();
        deleteGrid();
    });
    
    paintColor();   //  call for painting function
    

    

    
});