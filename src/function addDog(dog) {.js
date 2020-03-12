
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const addDog = (dog) => {
    const dog_list = document.getElementById("dog-image-container");
    const div = makeDog(dog);
    dog_list.appendChild(div);
}
function addBreed(breed) {
    const letter = document.getElementById("breed-dropdown")
    if (letter.value == breed[0]) {
      const breed_list = document.getElementById("dog-breeds");
      const ul = makeBreed(breed);
      breed_list.appendChild(ul);
    }
}
function makeDog(dog) {
    const div = document.createElement("div");
    div.className = "profile";
    const img = document.createElement("img");
    img.src = dog
    div.appendChild(img);
    return div;
}
function makeBreed(breed) {
    const li = document.createElement("li");
    li.className = "breed";
    const name = document.createElement("p");
    name.innerText = breed
    li.appendChild(name);
    li.addEventListener('click', function () {
       // document.getElementById("p2").style.color = "blue";
        li.style.color = "blue";
    })
    return li;
}
// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        showDogs(data.message)
    });

    fetch(breedUrl).then(function(response){
        return response.json();
    })
    .then(function(data) {
        showBreeds(data.message)
    });

    const select = document.getElementById("breed-dropdown")
    select.addEventListener('change', e => {
        let value = e.target.value;
        console.log('log from select', value);
        fetch(breedUrl).then(function(response){
            return response.json();
        })
        .then(function(data) {
            showBreeds(data.message)
        });
    });
});

function showDogs(dogArray) {
    dogArray.forEach(function(dog) {
        addDog(dog);
    });
    const select = document.getElementById("breed-dropdown")
    // select.addEventListener('change', function() {
    const value = select.value
    console.log(value)
// })
}

function showBreeds(breedArray) {
    const realArray = Object.keys(breedArray)
    // realArray.forEach(function(breed){
    //     console.log(br)
    // })
    realArray.forEach(function(breed) {
        addBreed(breed);
    });
}