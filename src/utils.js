export const isArrayEmpty = (arr)=>{
    if(arr.length>0 && arr.length !== undefined && arr.length !== null){
        return false;
    }
    else{
        return true;
    }
}