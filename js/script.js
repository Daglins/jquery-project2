$(function()
{   
    // Calling funtions for adding json data to the page 
    jsonData('data.json');
    jsonData('json/2ndData.json');
    
    // Main heading click event 
    $('ul').on('click', '.main', function()
    {
        $(this).siblings('section').slideToggle('fast');
        $(this).siblings('p','img').slideToggle('fast'); 
        $(this).siblings('ul').slideToggle('fast');
    });
    
    // Click event for sub list
    $('ul').on('click', 'h3', function()
    {
        $(this).siblings('p','img').slideToggle('fast');
        $(this).siblings('ul').slideToggle('fast');
    });
    
    // Main function gathering the json file, parsing the data,
    // adding it to HTML, and adding HTML to the page
    function jsonData (dataName)
    {
        // Get json file
        $.getJSON(dataName).done( // If it is successful then 
        function(data)
        {   
            var things = data.favs; // Assign data.array_name to var 
            var lstItem = '';
            for (var i = 0; i < things.length; i ++) // Loop through the array
                {
                        lstItem += '<li class="frst"><h2 class="main">' + things[i].name + '</h2>'; // Start the LI and add the name to the H2 tag
                        lstItem += '<section class="hide"><p><img src="' + things[i].image + '"/>' + things[i].description + '</p>'; // Add the description, and image in the P
                        lstItem += '<h3>' + things[i].title +'</h3><ul class="sublst hide">'; // Add the title for the sub-list and start a UL
                        for (var j = 0; j < things[i].list.length; j++ ) // Loop through the sub-array
                        {
                            lstItem += '<li class="sub">' + things[i].list[j].li + '</li>'; // Assign the sub-array items to LIs
                        } 
                        lstItem += '</ul></section></li>'; // Close off the HTML tags
                }
            $('.ulMain').append(lstItem); // Add the data to blank UL on the Page
        }).fail(function() // If it fails getting the data
                {
                    console.log('error');
                }); 
    }
    
});

