const request = require('request');

var getweather = (lat,lng)=>{
  request({
    url: 'https://api.darksky.net/forecast/5c07ff142a3f4b2337a225658136a413/'+lat+','+lng,
    json: true
  },(error,response,body)=>{
      if(!error && response.statusCode === 200){
        var temperature = body.currently.temperature;
        console.log("Current temperature: "+temperature);
      }else{
          console.log("unable to fetch weather");
      }
  });
};

module.exports.getweather = getweather;
