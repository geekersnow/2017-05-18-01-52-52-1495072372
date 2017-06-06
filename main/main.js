module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\n
o) 最大值 = ${sequence.maximum()}\n
o) 元素数量 = ${sequence.elenumber()}\n
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
	this.array = input;
  }

  minimum() {
	return Math.min.apply(null, this.array);
  }
  maximum(){
	return Math.max.apply(null, this.array);
  }
  elenumber(){
	return this.array.length;  
  }
  average(){
	var sum = 0, result = 0, average = 0;
	for ( var i = 0; i< this.array.length; i++ ) 
		sum += this.array[i];	
	result = sum / this.array.length; 
	return parseFloat(result.toFixed(2)); 
	
  }
}
