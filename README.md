# sim900js
A Javascript library for the SIMCom SIM900 GSM/GPRS Chipset

*Note*: This has been tested with the Edison using a [SainSmart Sim900 Module](http://www.amazon.com/SainSmart-Small-GPRS-SIM900-Arduino/dp/B00TEUAJMQ/ref=sr_1_2?s=electronics&ie=UTF8&qid=1443208658&sr=1-2&keywords=arduino+sim900).

## Install

```
> npm install sim900js
```

## Usage

```
var SIM900 = require('sim900js');

var s = new SIM900();

```

### Send a Text Message

```
s.connect(function(err) {
    if(err) return console.log('Error connecting SIM900', err);
    console.log('SIM900 connected');
    
    s.status(function(err, res) {
        if(err) return console.log('Error getting status', err);
        console.log('Status return', res);
    
        s.sendSMS("XXXXXXXX", "This is a text message!", function(err, res) {
            // Text message sent!
        });
    });    
});
```

### GET a URL

```
s.connect(function(err) {
    if(err) return console.log('Error connecting SIM900', err);
    console.log('SIM900 connected');
    
    s.status(function(err, res) {
        if(err) return console.log('Error getting status', err);
        console.log('Status return', res);
    
        s.initializeGPRS("wap.voicestream.com", "guest", "guest", function(err, res) { // Works for TMobile
            s.HTTPGet('www.json-generator.com', function(err, data) {
                console.log('http err', err);
                console.log('data', data);
            });
        });
    });    
});
```

### POST to a URL

```
s.connect(function(err) {
    if(err) return console.log('Error connecting SIM900', err);
    console.log('SIM900 connected');
    
    s.status(function(err, res) {
        if(err) return console.log('Error getting status', err);
        console.log('Status return', res);
    
        s.initializeGPRS("wap.voicestream.com", "guest", "guest", function(err, res) { // Works for TMobile
            var data = '{"format": "json", "topic": "order/created", "url": "http://myshop.example.com/notify_me"}';
            s.HTTPPost("http://postcatcher.in/catchers/55ea25155b2c8b0300000829", data, "application/json", function(err, res) {
                console.log('http err', err);
                console.log('post response', data);
            });
        });
    });    
});
```