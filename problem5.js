function problem5(year){
    let olderCars=[];
    count=0;
    for(let i =0;i<year.length;i++){
        if(year[i]<2000){           
            olderCars[count]=year[i];
            count++;
        }
    }
    return olderCars;
}

module.exports.problem5=problem5;