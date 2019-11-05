    window.onload = function (){
        var todolist = [];
        if (localStorage.getItem('todo')!= undefined){
            todolist = JSON.parse(localStorage.getItem('todo'));
        }
            out();

            // document.querySelector("#done").onclick =  function(){
            //     document.getElementsByTagName("body")[0].style.textDecoration = 'line-through';
        // }

    function out (){
       
        var out = '';
        for (var key in todolist){
            if (todolist [key].check == true ){
                done.style.setProperty("text-decoration", "none");
                
            }
            else {
                    out += '<input type="checkbox">';
                    
            }
            out += todolist[key].todo + 'done' + '<br>';

        }
       
        document.querySelector('#out').innerHTML = out;
    }
   
    document.querySelector("#Add").onclick = function (){
        
        var d = document.querySelector("#in").value;

        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todolist.length;
        todolist[i] = temp;
        console.log(todolist);
        out();
        localStorage.setItem("todo", JSON.stringify(todolist));
      
    }
    // 
        //     document.onkeypress = function(windowevent){
        //     console.log(windowevent);
        // }

// Сохранение при нажатии на Enter
        document.querySelector("#in").onkeypress = function(windowevent){
            if (windowevent.keyCode!= 13){
                 console.log("no ");
            }

            else{
       var d = document.querySelector("#in").value;
 
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todolist.length;
        todolist[i] = temp;
        console.log(todolist);
        out();
        localStorage.setItem("todo", JSON.stringify(todolist));
        }
    }



// Очистка заметок
    document.querySelector("#Del").onclick = function (){
        localStorage.clear();
        document.querySelector('#out').innerHTML = '';
        window.location.reload();
    }



    // document.querySelector("#done").onclick =  function(){
    //     document.getElementsByTagName("body")[0].style.textDecoration = 'line-through';
    // }

}