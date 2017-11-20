// this will execute like app.js --address = '7720 McCallum Blvd'
// const request = require('request');
//darksky api for forecast api forecast.io
//api key 5c07ff142a3f4b2337a225658136a413

//sample request https://api.darksky.net/forecast/5c07ff142a3f4b2337a225658136a413/33.0008652,-96.797592


const yargs = require('yargs');

const geocode = require('./geocode/geocode')


const argv = yargs
  .options({
    a:{
      demand:true, // to ask parameters for address like 7720
      alias: 'address', // parameter name
      describe: 'Address to fetch weather for',
      string: true
    }
  })

  .help()
  .alias('help','h')
  .argv;

// console.log(argv);

//to get '%' attached values instead of 'spaces' we use encodeURIComponent()
//opposite: decodeURIComponent('string%string1%string2')

//request take 2 parameters
//one options objects configure options
//second callback functions refer documentation

//what makes http request?
//to tackle status code and headers we use response
//body is general body
//status code or error code is error in connection we use error

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(JSON.stringify(results, undefined, 2));
  }


});

// var encodedAddress= encodeURIComponent(argv.address);
//
// request({
//   //url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lambard%20street%20philadelphia',
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
//
//   //returning data is in json hence we make json as true;
//   json: true
// },(error,response,body)=>{
//   //json stringify first body second properties third 2 indends bwterrn json data
//   //to see entire body in json format uncomment following code
//   // console.log(JSON.stringify(body,undefined,2));
//
//   //to handle errors we use set of if-else statements
//   if(error){
//       console.log("unable to connect to Google Server");
//   }else if(body.status ==="ZERO_RESULTS"){
//       console.log("unable to find the address");
//   }else if(body.status === "OK"){
//       console.log('Address: ' + body.results[0].formatted_address);
//       console.log('Lattitude: ' + body.results[0].geometry.location.lat);
//       console.log('Longitude: ' + body.results[0].geometry.location.lng);
//   }
//
//
// });
