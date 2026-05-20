let frm = document.getElementById("frm")
let i1 = document.getElementById("i1").value
let i2 = document.getElementById("i2").value
let btn = document.getElementById("btn")
let tbody = document.getElementById("tbody")
//dataset
let data = [
    { name: "Shankar Jha", age: 21 },
    { name: "Vivek Jha", age: 20 },
    { name: "Sumit Choubey", age: 21}
]
//(R)READ
function readdata() {
    tbody.innerHTML = ""
    data.map((e, i) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td><button onclick="editdata(${i})">Edit</button></td>
            <td><button onclick="deletedata(${i})">Delete</button></td>
        `
        tbody.append(tr)
    })
}

readdata()
//(C)ADD // update 
//  step 3
let editIndex = null
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let i1 = document.getElementById("i1").value
    let i2 = document.getElementById("i2").value
    let obj = { name: i1, age: i2 }
    if (editIndex == null) // insert
    {
        data.push(obj);
    }
    else {
        data[editIndex] = obj //'dat[2] = obj
        editIndex = null
        document.getElementById("btn").innerHTML = "save"
        document.getElementById("hd").innerHTML = "CRUD OPERATION"
    }
    readdata()
    frm.reset()
})
//(D)Delete
function deletedata(i) {
    if (window.confirm("Are you sure?")) {
        data.splice(i, 1) //splice, how many elements you want to delete
        readdata()
        frm.reset()
    }
}
//(Edit)
// step 2 
function editdata(i) {
    document.getElementById("i1").value = (data[i].name)
    document.getElementById("i2").value = (data[i].age)
    document.getElementById("btn").innerHTML = "Update"
    document.getElementById("hd").innerHTML = "Update Form"
    editIndex = i
}
