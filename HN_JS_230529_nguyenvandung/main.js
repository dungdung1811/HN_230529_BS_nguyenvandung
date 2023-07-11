let listStudent = [
    {
        id: crypto.randomUUID(),
        name: "Nguyễn văn Dũng",
        email: "noName@gamil.com",
        phone: 12345,
        addess: "hà nội",
        gender: "Nam",
    },
    {
        id: crypto.randomUUID(),
        name: "Nguyễn  Duy",
        email: "Name@gamil.com",
        phone: 456321,
        addess: "HCM",
        gender: "Nữ",
    },
    {
        id: crypto.randomUUID(),
        name: "Hùng",
        email: "Name@gamil.com",
        phone: 456321,
        addess: "HCM",
        gender: "Nữ",
    },
    {
        id: crypto.randomUUID(),
        name: "a",
        email: "Name@gamil.com",
        phone: 456321,
        addess: "HCM",
        gender: "Nữ",
    },
];

// selector
let tBodySelector = document.querySelector("tbody");
let addButtonSelector = document.querySelector(".add_student");
let inputNameSelector = document.querySelector("#name");
let inputEmailSelector = document.querySelector("#email");
let inputPhonenumberSelector = document.querySelector("#phonenumber");
let inputaddressSelector = document.querySelector("#address");
let valueRadio = document.querySelector(".sex_radio:checked").value;
let formSelector = document.querySelector("form");
let sapxepBtnSelector = document.querySelector('.btn_xapxep');
let seachBtnSelector = document.querySelector('.btn_search');
let filterInputSelector = document.querySelector('.filter_name');

let emailTest =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let phoneTestVn = /((09|03|07|08|05)+([0-9]{8})\b)/g;


function showList(seach) {
    let studentRender = listStudent;
    if(seach){
        studentRender = seach;
    }

    let liResul = "";
    for (let i = 0; i < studentRender.length; i++) {
        liResul += `<tr>
        <td>${i + 1}</td>
        <td>${studentRender[i].name}</td>
        <td>${studentRender[i].email}</td>
        <td>${studentRender[i].phone}</td>
        <td>${studentRender[i].addess}</td>
        <td>${studentRender[i].gender}</td>
        <td><button data-id="${
            studentRender[i].id
        }"class="btn edit btn_blue ">Edit</button>
        <button data-id="${
            studentRender[i].id
        }"class="btn close btn_danger">Xóa</button>
        </td>
        </tr>`;
    }

    tBodySelector.innerHTML = liResul;
}
showList();

// add
function addStudent() {
    
    
    let nameValue = inputNameSelector.value;
    let emailValue = inputEmailSelector.value;
    let phoneValue = inputPhonenumberSelector.value;
    let addessValue = inputaddressSelector.value;



    if (nameValue && emailValue && phoneValue && addessValue) {

        if (addButtonSelector.classList.contains("update")) {
            let idUpDate = addButtonSelector.getAttribute("data-id");
            let indexUpdate = listStudent.findIndex(
                (item) => item.id === idUpDate
            );

            listStudent[indexUpdate].name = inputNameSelector.value;
            listStudent[indexUpdate].email = inputEmailSelector.value;
            listStudent[indexUpdate].phone = inputPhonenumberSelector.value;
            listStudent[indexUpdate].addess = inputPhonenumberSelector.value;
            listStudent[indexUpdate].gender = document.querySelector(".sex_radio:checked").value;

            showList();
            document.querySelector("form").reset();
            addButtonSelector.removeAttribute("data-id");
            addButtonSelector.classList.remove("update");
            addButtonSelector.innerText = "Add";

        } else {
            let newObjStudent = {
                id: crypto.randomUUID(),
                name: nameValue,
                email: emailValue,
                phone: phoneValue,
                addess: addessValue,
                gender: document.querySelector(".sex_radio:checked").value,
            };
            listStudent.push(newObjStudent);
            document.querySelector("form").reset();
            showList();

        }
    } else {
        alert('Hãy nhập nội dung');


}
}
// delete

function deleteStudent(event) {
    let clicked = event.target;
    if (clicked.classList.contains("close")) {
        let idDelete = clicked.getAttribute("data-id");
        let indexDelete = listStudent.findIndex((item) => item.id === idDelete);
        listStudent.splice(indexDelete, 1);
    } else if (clicked.classList.contains("edit")) {
        let idEdit = clicked.getAttribute("data-id");
        let indexEdit = listStudent.findIndex((item) => item.id === idEdit);
        inputNameSelector.value = listStudent[indexEdit].name;
        inputEmailSelector.value = listStudent[indexEdit].email;
        inputPhonenumberSelector.value = listStudent[indexEdit].phone;
        inputaddressSelector.value = listStudent[indexEdit].addess;
        document.querySelector(
            `input[value=${listStudent[indexEdit].gender}]`
        ).checked = true;

        addButtonSelector.setAttribute("data-id", idEdit);
        addButtonSelector.classList.add("update");
        addButtonSelector.innerText = "Update";
    }

    showList();
}

// sort
function sorfStuden() {
    listStudent.sort(function (a, b) {
        let nameA = a.name.toLocaleLowerCase();
        let nameB = b.name.toLocaleLowerCase();
        if (nameA.localeCompare(nameB) < 0) {
            return -1;
        }
        if (nameA.localeCompare(nameB) > 0) {
            return 1;
        }
        return 0;
    });
    showList()
}

// filter
function SeachNameStudent() {
    let valueNameSeach = filterInputSelector.value.toLowerCase();
	
    let newStudent = listStudent.filter((item) => item.name.toLowerCase().indexOf(valueNameSeach) !== -1);
    showList(newStudent);
}









// event:
addButtonSelector.addEventListener("click", addStudent);
tBodySelector.addEventListener("click", deleteStudent);
sapxepBtnSelector.addEventListener('click',sorfStuden);
seachBtnSelector.addEventListener('click',SeachNameStudent);
