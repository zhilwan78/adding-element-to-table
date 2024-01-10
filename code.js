function addData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = age;

    showConfirmationFrame();
}

function showConfirmationFrame() {
    var frame = document.getElementById('confirmationFrame');
    frame.style.display = 'block';
}

function closeConfirmation() {
    var frame = document.getElementById('confirmationFrame');
    frame.style.display = 'none';
}
