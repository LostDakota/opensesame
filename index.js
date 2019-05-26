const app = require('express')();
const process = require('child_process');

app.get('/open', (req, res) => {
	process.exec('gpio mode 0 out', (err, stdout, stderr) => {
		if(!err){
			setTimeout(function() {
				process.exec('gpio mode 0 in', (err, stdout, stderr) => {
					res.send('ok');
				});
			}, 1000);
		}
	});
});

app.listen(1337);
