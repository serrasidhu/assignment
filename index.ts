//- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var num:number=0
var value:number[]=[]
for (let index = 1; index <= 10; index++) {
    if (index%2==0) {
        num =num+index
        value.push(index)

    }
}
  console.log(num,value);

 // Implement a program that uses a for loop to iterate through an array of numbers and print only the even num.
 
 var num:number=0
 var value:number[]=[]
 for (let index = 1; index <= 10; index++) {
     if (index%2==0) {
        
         value.push(index)
 
     }
 }
   console.log(value);
   
  // - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
  var num:number=0
  var value:number[]=[]
  for (let index = 1; index <= 10; index++) {
      if (index%2!=0) {
         
          value.push(index)
  
      }
  }
    console.log(value)
    //-Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius:number):any {
    let area = Math.PI * radius ** 2;
    return area
}
console.log(areaOfCircle(5))    


//- Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeFailingGrades(grades: number[]): number[] {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--;
        }
    }
    return grades;
}
console.log(removeFailingGrades([35,67,85,78,58]));

// Write a program that uses a function to find the largest element in an array of numbers.

function find_largest_element(numbers: number[]): number {
    let largest_Num = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest_Num) {
            largest_Num = numbers[i];
        }
    }
    return largest_Num;
}
console.log(find_largest_element([54,12,34,56,78,90]));










    
  






  //- Write a program that uses a function to find the largest element in an array of numbers.


  
  
  
  
  
    
 