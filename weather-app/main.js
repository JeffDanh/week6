(function() {  
    
    // var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";
    // var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; 

    $('#search_btn').click(function(e){
        e.preventDefault();
        var $city = $('#search_id').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $city;
        var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; 

        $.get(url + '&appid=' + apiKey)
        .done(function(response) {

            console.log(response);
            updateUISuccess(response)
            
        })
        .fail(function(error) {
            console.log(error);
            
            updateUIError()
                
        });

        //handle XHR success
        function updateUISuccess(response) {

            var condition = response.weather[0].main;
            console.log(condition);
            
            var degC = response.main.temp - 273.15;
            console.log(degC);
            
            var degCInt = Math.floor(degC);
            console.log(degCInt);

            var degF = degC * 1.8 + 32;
            console.log(degF);

            var degFInt = Math.floor(degF);
            console.log(degFInt);
            
            // var weatherBox = document.getElementById("weather");
            // weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
            
            var $weatherBox = $('#weather');
            $weatherBox.append($city);
            $weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
        }

        // handle XHR error
        function updateUIError() {
    //		var weatherBox = document.getElementById("weather");
    //		weatherBox.className = "hidden";
            var $weatherBox = $('#weather');
            $weatherBox.addClass('hidden');
        }
    
    
    })
    
    
    


})();




