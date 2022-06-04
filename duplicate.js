// // Find the Duplicate values From the given Arrays and push into new Array?

array1 = ["Arun", "Vijay", "Prakash", 5, "Vijay", "vijay","Ram"];
array2 = ["Aravinth", "Vijay", "Arun", "arun","Ram", "siva"];

let newArr =[]

let arr = array1.concat(array2);
console.log(arr);

const lower = arr.map(element => {
      return element.toString().toLowerCase();
    });
    console.log(lower);

for(i=0;i<lower.length;i++){
    for(j=0;j<i;j++){

        if(lower[i]==lower[j]){
        //   console.log(arr[i]);
          newArr.push(lower[i])
        }
    }
    
}
console.log(newArr);







