var jobs = require('./lib/jobs');

// run the chromix-too server
// chromix-too-server

// required on raspberry pi to fix setInverval() problem
// https://github.com/nodejs/node/issues/4262
jobs.createJob('*/20 * * * *', function() {});

// change pictures every hour
jobs.createJob('0 */1 * * *', function() {
	// refresh chrome
});

// pull any changes 10 minutes before every hour
jobs.createJob('50 */1 * * *', function() {
  // drive pull
});
