function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
	  submittedUsers.every(user => goodUsers.some(good => good.id == user.id));
	};
  }

  module.exports = checkUsersValid