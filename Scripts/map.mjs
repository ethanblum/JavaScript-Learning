export function hw2q3(){
  const A = [1,3,4,7,100,412,13,15,20];
  const B = A.map(Div2)
  const C = A.map(Div3)

  console.log("Array B: " + B);
  console.log("Array C: " + C);
}

function Div2(num) {
  if(num % 2 === 0){
    return 1;
  }
  else{
    return 0;
  }
}

function Div3(num){
  if(num % 3 === 0){
    return 1;
  }
  else{
    return 0;
  }
}