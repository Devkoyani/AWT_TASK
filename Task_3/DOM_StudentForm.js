let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Completed!!!");
  let name = document.getElementById("name").value;
  // console.log(name);
  let id = document.getElementById("id").value;
  // console.log(id);
  let email = document.getElementById("email").value;
  // console.log(email);
  let phone = document.getElementById("phone").value;
  // console.log(phone);

  let table = document.getElementById("tblCustomers");
  table.style.display = "table";

  let row = table.insertRow(-1);
  let idCell = row.insertCell(0);
  let nameCell = row.insertCell(1);
  let emailCell = row.insertCell(2);
  let phoneCell = row.insertCell(3);
  let buttonCell = row.insertCell(4);

  idCell.innerHTML = id;
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  phoneCell.innerHTML = phone;

  let btn = document.createElement("input");
  btn.type = "button";
  btn.value = "Remove";
  btn.addEventListener("click", function(){
    var row = btn.parentNode.parentNode;
    console.log(row);
    if (confirm("Do you want to delete this data??")) {
      //Get the reference of the Table.
      var table = document.getElementById("tblCustomers");
      //Delete the Table row using it's Index.
      table.deleteRow(row.rowIndex);
    }
  });
  buttonCell.appendChild(btn);

  document.getElementById("form").reset();
});

