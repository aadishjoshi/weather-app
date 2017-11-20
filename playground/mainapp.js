// const request = require('request');
// request({
//   url: 'https://api.darksky.net/forecast/5c07ff142a3f4b2337a225658136a413/33.0008652,-96.797592',
//   json: true
// },(error,response,body)=>{
//     if(!error && response.statusCode === 200){
//       console.log(body.currently.temperature);
//     }else{
//         console.log("unable to fetch weather");
//     }
// });
const yargs = require('yargs');
const weather = require('../weather/weather.js');

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

  geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      weather.getweather(results.lattitude, results.Longitude);
      console.log(JSON.stringify(results, undefined, 2));
    }
  });

  // weather.getweather();
