function prime(N){
	let count=0;
	for(let i=1; i<=N; i++){
		
		if(N%i==0){
			count++
		}
		
	}
  if(count==2){
		return true;}
	return false;
	
}
let N=8;
let P=prime(N);
console.log(P) ;
if(P==true){
  console.log(N, "is a prime number");
} else{
  console.log(N, "is not a prime number");
}