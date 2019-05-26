var btn = document.getElementById('btn');
var animinalContaniner = document.getElementById('animal-info');
var pageCounter = 1;
btn.addEventListener('click',function(){
    if( pageCounter > 3 )
        return;
    var ourRequest = new XMLHttpRequest(); 
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    ourRequest.onload = function(){
        var ourData =  JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    animinalContaniner.style.display = 'block';
    pageCounter++;
    if( pageCounter >  3 ){
        // btn.style.display = 'none';
        btn.style.transition = 'visibility 0.2s ease-in-out';
        btn.style.visibility = 'hidden';
    }
})
function renderHTML(data){
    var htmlString = "";
    for(let item of data){
        htmlString += '<p>' + item.name + ' is a ' + item.species +'.</p>';
    }
    animinalContaniner.insertAdjacentHTML('beforeend',htmlString);
    // animinalContaniner.innerHTML =   htmlString;
}


