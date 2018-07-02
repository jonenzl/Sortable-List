(function ($) {
   'use strict'; // Start of use strict

    // function to add an item to the list
    function addItem() {
        var item = $("#addItem").val();
        $(".list-group").append('<div class="list-group-item"><i class="fas fa-bars my-handle"></i>' 
                                + item + '<i class="fas fa-times close"></i></div>');
        $("#addItem").val("");
    }
    
    // function to delete an item from the list
    function deleteItem(e, item) {
        e.preventDefault();
        $(item).parent().remove();
    }
    
    // function to prevent page scrolling on touch devices while moving items in the list
    $(".list-group").bind("touchmove", function(e) {
        e.preventDefault();
    });
    
    $(function() {
        
        // listener to add an item to the list by clicking button
        $("#addButton").on("click", function(e) {
            e.preventDefault();
            addItem()
        });
        
        // listener to add an item to the list by using enter key
        $("#addItem").keypress(function (e) {
            var key = e.which;
            if(key == 13)  // the enter key code
            {
                $("#addButton").click();
                return false;  
            }
        });
        
        //EVENT DELEGATION
        //.list-group is the event handler because .close doesn't exist when the document loads, it is generated later by an added entry
        //https://learn.jquery.com/events/event-delegation/
        
        // listener to delete an item from the list
        $(".list-group").on("click", ".close", function(e){
            var item = this; 
            deleteItem(e, item)
        })
    });
    
    // sort: true
    Sortable.create(sortTrue, {
        group: "sorting",
        sort: true,
        ghostClass: "ghost",
        handle: ".my-handle",
        animation: 150
    });
    
})(jQuery); // End of use strict