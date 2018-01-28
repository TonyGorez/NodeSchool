function getShortMessages(messages) {
	let convertToArray = messages.map(message => message.message);
	let longerThan50 = convertToArray.filter(message => message.length < 50) 
	return longerThan50
  }

	module.exports = getShortMessages
	
	// Solution NODE : 

	// module.exports = function getShortMessages(messages) {
	// 	return messages.filter(function(item) {
	// 		return item.message.length < 50
	// 	}).map(function(item) {
	// 		return item.message
	// 	})
	// }