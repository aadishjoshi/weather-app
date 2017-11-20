// https://maps.googleapis.com/maps/api/geocode/json?address=1301 lambard street philadelphia
//request package

console.log('Starting app');

setTimeout(() =>{
  console.log('Inside of callback');
}, 2000);


setTimeout(() =>{
  console.log('Inside second callback');
}, 0);


console.log('Ending app');
