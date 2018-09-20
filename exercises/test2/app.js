function getOlderthan18(people){
    return people.filter(function(person){
        return person.age >= 18;
    })
}

// function sortOldPeople(oldPeople){
//     return oldPeople.slice().sort(function(a, b){
//         return a.lastName.localeCompare(b.lastName);
//     })
// }

// function listPeople(people){
//     return people.map(function(person){
//         return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
//     });
// }

module.exports = {
    getOlderthan18: getOlderthan18,
    // sortOldPeople: sortOldPeople,
    // listPeople: listPeople
}