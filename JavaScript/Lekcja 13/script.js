var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var i = 0;

var los = Math.floor(Math.random() * 10) + 1;
// alert(los);

button.addEventListener("click", sprawdz);


function sprawdz() {
    var value = Number(input.value);
    if (Number.isInteger(value) && value >= 1 && value <= 10) {
        i++;

        if (los > value) {
            answer.innerHTML = "Wylosowana liczba jest większa od twojej!";
        }
        else if (los < value) {
            answer.innerHTML = "Wylosowana liczba jest mniejsza od twojej!";
        }else  {
            answer.innerHTML = "Brawo, wygrałeś talon na balon!!!" + " Zgadłeś za " + i + " razem";
            answer.classList.add("good");
            button.innerHTML = "Odświerz"
            button.removeEventListener("click", sprawdz);
            button.addEventListener("click", odswierz);
        }

        var li = document.createElement("li");
        list.appendChild(li);
        list.lastChild.innerHTML = i.toString() + ": " + value;


    } else { alert("Błędna liczba!") }
}

function odswierz() {
    location.reload;
}

