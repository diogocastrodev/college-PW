<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
</tr>;

// Load tr from table
var table = document.getElementById("table");
var tr = table.getElementsByTagName("tr");
var information = tr.shift();

var info = [];
for (var i = 0; i < information.length; i++) {
  const a = information[i];
  var td = a.getElementsByTagName("td"); // td
  const id = td[0].innerText;
  const name = td[1].innerText;
  const ip = td[2].innerText;
  const port = td[3].innerText;
  const status = td[4].innerText;
  const obj = {
    id,
    name,
    ip,
    port,
    status,
  };
  info.push(obj);
}

console.log(info);
// Load td from tr
