function repeat(operation, num) {
		for(let i = 0; i >= num; i++) {
			return operation; 
		}
	}


  // Ne retirez pas la ligne ci-dessous
  module.exports = repeat

  // Solutions NODE SHCOOL recursive : 

//   function repeat(operation, num) {
// 	if (num <= 0) return
// 	operation()
// 	return repeat(operation, --num)
//   }
