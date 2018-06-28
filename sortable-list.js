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
    
    $(function() {
        
        // listener to add an item to the list
        $("#addButton").on("click", function(e) {
            e.preventDefault();
            addItem()
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