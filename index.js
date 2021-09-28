function superbowlWin(record){
    const result = record.find(obj => obj.result === 'W');
    if (result === undefined )  {
    return  undefined
    }
    else  { 
        return result.year
     }
 }
