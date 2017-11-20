const request = require('request');

var geocodeAddress= (address,callback)=>{

  var encodedAddress= encodeURIComponent(address);

  request({
    //url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lambard%20street%20philadelphia',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,

    //returning data is in json hence we make json as true;
    json: true
  },(error,response,body)=>{
    //json stringify first body second properties third 2 indends bwterrn json data
    //to see entire body in json format uncomment following code
    // console.log(JSON.stringify(body,undefined,2));

    //to handle errors we use set of if-else statements
    if(error){
      callback("unable to connect to Google Server");
        //console.log("unable to connect to Google Server");
    }else if(body.status ==="ZERO_RESULTS"){
      callback("unable to find the address");
        //console.log("unable to find the address");
    }else if(body.status === "OK"){

      callback(undefined,{
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
        // console.log('Address: ' + body.results[0].formatted_address);
        // console.log('Lattitude: ' + body.results[0].geometry.location.lat);
        // console.log('Longitude: ' + body.results[0].geometry.location.lng);
    }


});
};

module.exports.geocodeAddress = geocodeAddress;
