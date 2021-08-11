function problem3(inventory){
    for(let i=0;i<inventory.length;i++){
        for(let j=0;j<inventory.length-1;j++){
            if(inventory[j].car_model.toLowerCase()>inventory[j+1].car_model.toLowerCase()){
                let temp=inventory[j+1];
                inventory[j+1]=inventory[j];
                inventory[j]=temp;
            }
        }
        return inventory;
    }
}

module.exports.problem3=problem3;