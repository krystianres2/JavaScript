let list = document.getElementById("list");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let AIcb = document.getElementById("cb1");
let Systemycb = document.getElementById("cb2");
let Językicb = document.getElementById("cb3");
let Androidcb = document.getElementById("cb4");
let Egzamincb = document.getElementById("cb5");
let Zerówkacb = document.getElementById("cb6");
let Kolokwiumcb = document.getElementById("cb7");
let Projektcb = document.getElementById("cb8");

let button = document.getElementById("button");



class Row {
    constructor(date, name, type) {
        this.date = date;
        this.name = name;
        this.type = type;
    }
    display() {
        let string = "Data: " + this.date.toLocaleDateString() + " Nazwa: " + this.name + " Rodzaj zaliczenia: " + this.type;
        return string;
    }
}

const obj1 = new Row(new Date(2023, 04, 22), "Sztuczna inteligencja", "Zerówka");
const obj2 = new Row(new Date(2023, 04, 26), "Systemy operacyjne", "Egzamin");
const obj3 = new Row(new Date(2023, 04, 30), "Systemy operacyjne", "Kolokwium");
const obj4 = new Row(new Date(2023, 05, 05), "Sztuczna inteligencja", "Egzamin");
const obj5 = new Row(new Date(2023, 05, 20), "Sztuczna inteligencja", "Kolokwium");
const obj6 = new Row(new Date(2023, 05, 25), "Systemy operacyjne", "Projekt");
const obj7 = new Row(new Date(2023, 05, 26), "Języki internetowe", "Projekt");
const obj8 = new Row(new Date(2023, 05, 27), "Języki internetowe", "Kolokwium");
const obj9 = new Row(new Date(2023, 06, 3), "Programowanie urządzeń mobilnych", "Projekt");
const obj10 = new Row(new Date(2023, 06, 3), "Programowanie urządzeń mobilnych", "Kolokwium");

let defaultLIst = []
defaultLIst.push(obj1)
defaultLIst.push(obj2)
defaultLIst.push(obj3)
defaultLIst.push(obj4)
defaultLIst.push(obj5)
defaultLIst.push(obj6)
defaultLIst.push(obj7)
defaultLIst.push(obj8)
defaultLIst.push(obj9)
defaultLIst.push(obj10)


for (let i = 0; i < defaultLIst.length; i++) {
    let li = document.createElement("li");
    list.appendChild(li);
    list.lastChild.innerHTML = defaultLIst[i].display();
}

button.addEventListener("click", implement);

function implement() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    // var tbody = document.querySelector("#myTable tbody");
    // let tbody = document.querySelector("#myTableBody");
    // tbody.innerHTML = "";
    let temp = defaultLIst.slice();

    if (!AIcb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].name == "Sztuczna inteligencja") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Systemycb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].name == "Systemy operacyjne") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Językicb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].name == "Języki internetowe") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Androidcb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].name == "Programowanie urządzeń mobilnych") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Egzamincb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].type == "Egzamin") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Zerówkacb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].type == "Zerówka") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Kolokwiumcb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].type == "Kolokwium") {
                temp.splice(i, 1);
            }
        }
    }
    if (!Projektcb.checked) {
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i].type == "Projekt") {
                temp.splice(i, 1);
            }
        }
    }

    if (radio1.checked) {
        temp.sort((a, b) => a.date - b.date);
    }
    if (radio2.checked) {
        temp.sort((a, b) => b.date - a.date);

    }
    for (let i = 0; i < temp.length; i++) {
        let li = document.createElement("li");
        list.appendChild(li);
        list.lastChild.innerHTML = temp[i].display();
    }

    // for (var i = 0; i < temp.length; i++) {
    //     var row = tbody.insertRow();
    
    //     var dateCell = row.insertCell();
    //     nameCell.textContent = temp[i].date.toLocaleDateString();
    
    //     var nameCell = row.insertCell();
    //     dateCell.textContent = temp[i].name;
    
    //     var typeCell = row.insertCell();
    //     typeCell.textContent = temp[i].type;
    // }
}

