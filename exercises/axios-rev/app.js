var ul = document.querySelector("ul");
var url = "Http://api.vschool.io:6543/pokemon.json";

//var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         var jsonData = xhr.responseText;
//         var jsData = JSON.parse(jsonData);
//         console.log(jsData);
//         var pokemon = jsData[0].pokemon;
//         pokemon.forEach(function(singlePokemon) {
//             var li =document.createElement("li");
//             li.innerHTML = singlePokemon.name;
//             ul.appendChild(li);
//         });
//         console.log(pokemon);
//     }
// }
var getRequest = axios.get(url);
getRequest.then(function(response){
    var jsData = response.data;
    var pokemon = jsData.objects[0].pokemon;
         pokemon.forEach(function(singlePokemon) {
            var li =document.createElement("li");
            li.innerHTML = singlePokemon.name;
            ul.appendChild(li);
        })
})
.catch(function(err){
    document.write("Sorry your data is unavailable")
})