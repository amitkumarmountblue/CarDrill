function problem1(inventory,n){
    if(inventory.length==0){
        return [];
    }else{
        for(let i =0;i<inventory.length;i++){
             if(inventory[i].id==n){
                   return "Car "+ n +" is a "+inventory[i].car_year+' '+ inventory[i].car_make+' '+ inventory[i].car_model
        }
        }
    }  
}
module.exports.problem1=problem1;
