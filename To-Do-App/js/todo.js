let toDo = []

/*to add To-Do in the input field*/
$("input").keypress(function(e){
    if (e.which == 13) {
        /* storing ToDo in a new variable */ 
        let newToDo = $("input").val()
        toDo.push(newToDo)

        /*append new item */
        $(".menu").append(`<div class="newToDo"> <span class="deleteToDo"> <i class="far fa-trash-alt can"></i> </span> <span class="textToDo">${toDo[(toDo.length-1)]}</span></div>`)

        /* styling the new ToDo*/
        $(".newToDo").even().addClass("even")
        $(".newToDo").odd().addClass("odd")
        $("#addTodo").val("")
    }
})

/* to strikethrough and turn the item gray */
$(".menu").on("click", ".textToDo", function(){
    $(this).toggleClass("done")
})

/* to slide the delete button. Colt Steele does this effect with CSS. He sets the width of the bin span to 0 and then creates a new .deleteToDo:hover that it will transition to a larger width. Before comparing to his version I had done with JS as follows: */
$(".menu").on("mouseenter mouseleave", ".newToDo", function(){
    $(this).find(".deleteToDo").slideToggle("500").css("display", "flex")
})

/* to delete the To-Do item*/
$(".menu").on("click", ".deleteToDo", function(){
    $(this).parent().remove()
})

/* to hide the add To-Do field */

/* As the previous slide effect, Colt uses CSS to slide the input. I had done with JS as follows:*/
$(".hideInput").click(function(){
    $("#addTodo").slideToggle("slow")
})

/* Things I learned: the importance of commenting the code. Specially what each function should do (specially to redo after a while). the differences between span, li, ul - and to pick the right one. Stop propagation effect: when you set a click event to an element and you set a click event to its parent when you click in the element you will also trigger the click event of its parent. Bubble. Solution: function(event){event.stopPropagation()}*/