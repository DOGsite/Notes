window.onload = function (){

    var todolist = [];
    if (localStorage.getItem('todo')!= undefined){
        todolist = JSON.parse(localStorage.getItem('todo'));
        out();
       
        
    }
    
    document.querySelector("#Add").onclick = function (){
        
        var d = document.querySelector("#in").value;
    // {todo : Добавить хлеб,  check: false }
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todolist.length;
        todolist[i] = temp;
        console.log(todolist);
        out();
        localStorage.setItem("todo", JSON.stringify(todolist));
        // var ds = document.querySelector("#in");
        // ds = '';
    }
    function out (){
        var out = '';
        for (var key in todolist){
            if (todolist [key].check == true ){
                out += '<input type="checkbox" checked>';
            }
            else {
                    out += '<input type="checkbox">';
            }
            out += todolist[key].todo +  '<br>';

        }
        document.querySelector('#out').innerHTML = out;
    }
   
    document.querySelector("#Del").onclick = function (){
        localStorage.clear();
        document.querySelector('#out').innerHTML = '';
        window.location.reload();
    }
    // document.querySelector("#del").onclick = function (){
    //     localStorage.clear();
    //     document.querySelector('#out').innerHTML = '';
    //     window.location.reload();
    // }
}


