function problem2(inventory){
    let element=inventory[inventory.length-1];
    if(inventory.length==0){
        return [];
    }
    return "Last car is a "+ element.car_make+' '+ element.car_model;
}
module.exports=problem2;