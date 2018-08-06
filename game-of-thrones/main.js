(function() {
    for(var page = 1; page <= 10; page++){

        var url = "https://www.anapioficeandfire.com/api/characters?page=" + page + "&pageSize=50";

        $.get(url)
        .done(function(response) {
            console.log(response);
            updateUISuccess(response)
            
        })
        .fail(function(error) {
            console.log(error);
            updateUIError()
                
        });

        function updateUISuccess(response) {
            response.forEach(function(e){
                var charName = e.name;
                if(charName.length > 0){
                    console.log(charName);

                    var $character = $('<li>', {'text': charName});

                    $('#name').append($character);

                }
            })
        }
        function updateUIError() {

        }

    }

})();