var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    var title = this.title.value;
    var description = this.description.value;
    var isClassic = this.classic.checked;
    var genre = this.querySelector("input[name=genre]:checked").value;
    var rating = this.rating.value
    var branch = this.branch.value;
    //alert("title:" + title + "description" + description + "is it classic" + isClassic + "genre" + genre +"rating" + rating );
    alert("your entery  " + title + " description is  " +  description + " is it Classic  " + isClassic + " genre is  " +  genre + " rating is  " +rating +" branch  " + branch);
})

// var form = document.querySelector("form");
// var ageInput = document.querySelector("input[nume=age]");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert(age.value)
//     console.log({
//         name: this.name.value,
//         age: this.age.value
//     })
//     console.log(this.name);
//     console.log(this.age);
//    // console.log(typeof +this.age.valueAsNumber);

// })