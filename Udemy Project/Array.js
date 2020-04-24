
var arr = [];
function addNew(){
    alert("You have choose add");
    var item = prompt("Enter your roster name that you want to add: ")
    arr.push(item)
    console.log(arr);
}
function remove(){
    alert("You have choose remove");
    var item = prompt("Enter your roster name that you want to remove: ");
    arr.pop(item);
    console.log(arr);
}
var confirmation= prompt("Should we start the app (y/n):");
if( confirmation == 'y'){
    alert("Welcome to your roster management!");
        
        var temp = "empty";

        while( temp !== "exit"){
            temp = prompt("Choose any option (add / remove / display / exit):");
                if(temp === "add"){
                        addNew();
                }
                else if(temp === "remove"){
                        remove();
                }       
                else if(temp === "display"){
                    alert("You have choose display");
                    
                    console.log(arr);
                }
                else{
                    alert("Please! put the keywords correctly.");
                }             
            } 
        }                
        else
            alert("Thanks for using our service.");