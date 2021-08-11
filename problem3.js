function problem3(inventory){
    let carModel=[];
    for(var i=0;i<inventory.length;i++){

        carModel[i]=inventory[i].car_model;
    }
    for(let i=0;i<carModel.length;i++){
        for(let j=i+1;j<carModel.length;j++){

            if(carModel[i]>(carModel[j])){  
                let temp = carModel[i];  
                carModel[i] = carModel[j];  
                carModel[j] = temp;
            }
        } 
    }
    let result=[];
    for(let i=0 ; i<carModel.length;i++){
        for(let j=0;j<inventory.length;j++){
            if(carModel[i]==(inventory[j].car_model)){
                result[i]=inventory[j];
                break;
            }
        }
    }
    return result;
}
module.exports.problem3=problem3;