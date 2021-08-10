let _= {
  clamp(num,lower,upper){
    let lowerClampedValue = Math.max(num,lower);
    let clampedValue = Math.min(lowerClampedValue,upper);
    return clampedValue;
  },
  inRange(number,start,end){
  if(typeof end === 'undefined'){
        end = start;
        start = 0;  
    }
    if(start > end){
        console.log(' abnormal need swap')
        return (number >= end &&  number < start) ? true : true;
    }else{
        console.log(start, end)
         return (number >= start &&  number < end) ? true : false;
    }
  },
  words(sentence){
   return sentence.split(" ")
  },
  pad(string,length){
    if((string.length <= length)){
    let spaces = length - string.length;
    let bench = spaces/2
    if(bench % 2 == 0){
        let prepender = '';
        for(let i = 0; i < bench; i++){
           prepender=prepender.concat(" ");
           string=string.concat(" ");       
        }
        return prepender.concat(string);
    }else{
        let prepender = '';
        let quaver = bench - 1;
        for(let i = 0; i < quaver; i++){
            prepender=prepender.concat(" ");
            string=string.concat(" ");                   
         }
        return prepender.concat(string).concat(' ')
    }
  }else{
    return string
    }
  },
    has(obj,key){
        return (obj[key]) ? true: false;
    },invert(obj){
      let new_ob = {};
      for(let item in obj){
          let key = obj[item];
          let value = item;
          new_ob[`${key}`] = value;
      }
      return new_ob;
  },findKey(obj,predicate){
      for(item in obj){
        let value = obj[`${item}`];
        const predicateReturnValue = (predicate(value))
        if(predicateReturnValue){
          return item;
        }
      }
      return undefined
  },drop(array,n){
      if(n){
       return array.slice((array.length-n),(array.length))
      }else{
          n =1;
          return array.slice((array.length-n),(array.length))
      }
  },dropWhile(array,predicate){
     let dropNumber = array.findIndex((element,index)=>{
        return  !predicate(element,index,array)
    })
    let droppedArray = this.drop(array,dropNumber)
    return droppedArray;
 }
}




// Do not write or modify code below this line.
module.exports = _; 