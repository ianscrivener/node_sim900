var SIM900 = require('./lib');
var s = new SIM900();

s.connect(function(err) {
    if(err) return console.log('Error connecting SIM900', err);
    console.log('SIM900 connected');

    s.status(function(err, res) {
        if(err) return console.log('Error getting status', err);
        console.log('Status return', res);

        s.sendSMS("61404464308", "This is a text message!", function(err, res) {
            if(err){
                console.log('Send error:', err);
            }
            else{
                console.log('SMS Sent...');
            }
        });
    });
});