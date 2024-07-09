// // There is a restaurant with a single chef.
// You are given an array customers, where customers[i] = [arrivali, timei]:

// // arrivali is the arrival time of the ith customer.
// The arrival times are sorted in non-decreasing order.
// // timei is the time needed to prepare the order of the ith customer.
// // When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle.
// The customer waits till the chef finishes preparing his order.
// The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input.

// // Return the average waiting time of all customers.
// Solutions within 10-5 from the actual answer are considered accepted.

var averageWaitingTime = function (customers) {
	let finishedTime = customers[0][0] + customers[0][1];
	let waitingTime = finishedTime - customers[0][0];

	for (let i = 1; i < customers.length; i++) {
		if (finishedTime < customers[i][0]) {
			finishedTime = customers[i][0] + customers[i][1];
		} else {
			finishedTime = finishedTime + customers[i][1];
		}
		waitingTime += finishedTime - customers[i][0];
		console.log(
			"FinishedTime: " + finishedTime + "  WaitingTime: " + waitingTime
		);
	}
	return waitingTime / customers.length;
};

console.log(
	averageWaitingTime([
		[5, 2],
		[5, 4],
		[10, 3],
		[20, 1],
	])
);



//better solutions with goog readibily and cleaner code
var averageWaitingTime = function (customers) {
	let totalWaitingTime = 0;
	let currentTime = 0;

	for (let i = 0; i < customers.length; i++) {
		let [arrivalTime, cookingTime] = customers[i];
		if (currentTime < arrivalTime) {
			currentTime = arrivalTime;
		}
		currentTime += cookingTime;
		totalWaitingTime += currentTime - arrivalTime;
	}

	return totalWaitingTime / customers.length;
};
