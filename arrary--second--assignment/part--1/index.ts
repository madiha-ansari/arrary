// TEACHER NAME BY //MISS MANAHIL & SIR HAMZA ALVI
// STUDENT NAME MADIHA ANSARI

/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions 
and logic to manage object manipulation effectively.*/

// Answer 
// _________________________________________________
// START COADIND
// _________________________________________________

type Product = {                              
    name : string,
    price : number,
    ineventory : {
        stock : number,
        colorOptions : string[]
    }
};
let products : Product[] = [                 
    {
        name : "Watch",
        price : 2000,
        ineventory : {
            stock : 70,
            colorOptions :["black","blue","silver","golden"]
        }
    },
    {
        name : "Shoes",
        price : 3000,
        ineventory : {
            stock : 150,
            colorOptions :["black","brown","white","grey"]
        }
    },
    {
        name : "Bag",
        price : 2000,
        ineventory : {
            stock : 100,
            colorOptions :["black","red","blue","green"]
        }
    }
]
function changeColor(products:Product,newColor:string){                            
    let colorChange = products.ineventory.colorOptions.indexOf(newColor);
    if(colorChange !== -1){
        switch(newColor){
            case "red":
                products.price *=1.1;                                  
                break;
            case "blue":
                products.price *= 0.95;                           
                break;
            default:
                break;    
        };
        products.ineventory.colorOptions.splice(colorChange,1);
        products.ineventory.colorOptions.unshift(newColor);
    }
    else {
        console.log(`Colour : ${newColor} is not available for ${products.name}`);        
    };
};
console.log("\n \t \t ***Product Inventory Details*** \n")
products.forEach(products =>{                           
    console.log(`Product Name : ${products.name}`);
    console.log(`Product Price : ${products.price.toFixed(2)}`);
    console.log(`Stock : ${products.ineventory.stock}`);
    console.log(`Available Colours : ${products.ineventory.colorOptions.join(",")} \n `);
});
console.log("\n Testing Of Change Colour Function for red  ");                         
changeColor(products[2],"red");                                             //Function calling
console.log(products[2]);
console.log("\n Testing Of Change Colour Function for blue  ");   
changeColor(products[0],"blue");                                             //Function calling
console.log(products[0]);


// _________________________________________________
// ENDING COADING 
// _________________________________________________

