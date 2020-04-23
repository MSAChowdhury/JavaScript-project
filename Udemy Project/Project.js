alert("Please help us to serve you better");
var name1 = prompt("Enter the First Name:");
var name2 = prompt("Enter the Second Name:");
var age = prompt("Enter your age:");
var height = prompt("Enter your height(cm):");
var pet = prompt("Enter your pet name:");

if(name1[0] == 'J' && name2[0] == 'J'){
    if( age >= 20 && age <= 30){
        if(height >= 170){
            if(pet[[pet.length] - 1] == 'y'){
                console.log("Go to the Mereneth with the GUN!");
            }
            else
                alert("Thanks for your co-operation");
        }
        else
        alert("Thanks for your co-operation");
    }
    else
        alert("Thanks for your co-operation"); 
}
else
    alert("Thanks for your co-operation");

