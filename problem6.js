function problem6(inventory){
    let BMWAndAudi=[];
    count=0;
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make=="Audi" || inventory[i].car_make=="BMW"){
            BMWAndAudi[count]=inventory[i];
            count++;
        }
    }
    return BMWAndAudi;
}
module.exports=problem6;