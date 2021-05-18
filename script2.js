// create an xml http req

var request = new XMLHttpRequest();

// initiate a new connection

request.open('GET', "https://restcountries.eu/rest/v2/all", true);

// sending the req to the server.

request.send();

// if server responds, we need to retrieve the data.

request.onload = function(){
    var data = JSON.parse(this.response);
    //loop it for 250 times.
    for (i in data)
    {
        try{
            var name = data[i].name;
            var lang = data[i].latlng;
            // console.log(name + " "+ lang);
            if(lang.length ===0 ) throw new Error("Lan and Lat not found")
            weatherdata(name,...lang);
        }
        catch(x)
        {
           console.log("Some coordinates are invalid "+ name +" " + x.message);
        }
 
    }
}

var weatherdata = function(name,lat,lang){
    // console.log(name+" "+lat+" "+lang);
    var request = new XMLHttpRequest;
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=dc53a783f6c308a31c64f6a8ac09b89f';
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp}`)
    }
    
}