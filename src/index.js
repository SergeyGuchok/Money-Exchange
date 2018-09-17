// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if(currency == 0 || currency<0) return {};  
	let obj = {}
	let H = 0, Q= 0, D=0, N=0, P=0;
	let count = 0;
	if(currency>=50){
		while(currency>=50){
			currency -=50;
			count++;
		}
		H = count;
		count = 0;
	} 
	if(currency>=25){
		while(currency>=25){
			currency -=25;
			count++;
		}
		Q = count;
		count = 0;
	}  
	if(currency>=10){
		while(currency>=10){
			currency -=10;
			count++;
		}
		D = count;
		count = 0;
	}  
	if(currency>=5){
		while(currency>=5){
			currency -=5;
			count++;
		}
		N = count;
		count = 0;
	}  
	if(currency>=1){
		while(currency>=1){
			currency -=1;
			count++;
		}
		P = count;
		count = 0;
	}
	if(H != 0) obj.H = H;
	if(Q != 0) obj.Q = Q;
	if(D != 0) obj.D = D;
	if(N != 0) obj.N = N;
	if(P != 0) obj.P = P;
	return obj;
}
