$(function()
{   
    jsonData('data.json');
    jsonData('json/2ndData.json');
    
    $('ul').on('click', '.main', function()
    {
        $(this).siblings('section').slideToggle('fast');
        $(this).siblings('p','img').slideToggle('fast'); 
        $(this).siblings('ul').slideToggle('fast');
    });
    
    $('ul').on('click', 'h3', function()
    {
        $(this).siblings('p','img').slideToggle('fast');
        $(this).siblings('ul').slideToggle('fast');
    });
    
    
    // FUNCTION
    function jsonData (dataName)
    {
       $.getJSON(dataName).done(
        function(data)
        {   
            //console.log(arr.valueOf());
            var things = data.favs;
            var lstItem = '';
            for (var i = 0; i < things.length; i ++)
                {
                        lstItem += '<li class="frst"><h2 class="main">' + things[i].name + '</h2>';
                        lstItem += '<section class="hide"><p><img src="' + things[i].image + '"/>' + things[i].description + '</p>';
                        lstItem += '<h3>' + things[i].title +'</h3><ul class="sublst hide">'; 
                        for (var j = 0; j < things[i].list.length; j++ ) 
                        {
                            lstItem += '<li class="sub">' + things[i].list[j].li + '</li>'
                        } 
                        lstItem += '</section></ul></li>';
                }
            $('.ulMain').append(lstItem);
        }).fail(function()
                {
                    console.log('error');
                }); 
    }
    
});

