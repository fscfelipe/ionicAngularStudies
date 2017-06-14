import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toArray'})
export class ToArrayPipe implements PipeTransform {
  transform(inputObj: any, arg: any) {
    if (!inputObj) { return [] }

//CÓDIGO IMPORTANTE, FICAR ATENTO AS MODIFICAÇÕES JSON ANTES DE APLICAR O PIPE
    let arr = []; 
    for(let key in inputObj) {
      // Option1 (only value without the json object's key)
      // this way will lose the key of Json Object
      arr.push(inputObj[key]);

      // OPtion2 (both the key and value)
      //let obj = {};
      //obj[key] = inputObj[key];
      //arr.push(obj);
    }
    //AQUI VIROU ARRAY
    console.log(arr);
    return arr;
    
  }  
}