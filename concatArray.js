const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if((array1 == null || undefined)&&(array2 == null || undefined)){
    return undefined
  }else if((array1 == null || undefined)){
    return array2
  }else if(array2 == null || undefined){
    return array1
  }else if((array1 == [])&&(array2 == [])){
    return '[]'
  }else{
    let array3 = [].concat(array1,array2)
    return array3
  }
}
module.exports = concatArray


// console.log(concatArray([1,2,3],[6,4,3]))
// console.log(concatArray(undefined,[]))
// console.log(concatArray([],null))
// console.log(concatArray(undefined,null))
// console.log(concatArray(null,null))
// console.log(concatArray(undefined,undefined))
// console.log(concatArray([],[]))
// console.log(concatArray([23,4,12,65],[]))
// console.log(concatArray([],[12,444,57]))
// console.log(concatArray([ ], ['item1', 'item2', 'item3']))
// console.log(concatArray(undefined, [2, 4, 6, 7]))
// console.log(concatArray([2, 4, 6, 7], null))