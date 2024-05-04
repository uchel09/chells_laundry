function fetchData(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error:", error));
}

function ListsOfUsers(data) {
  const tableBody = document.querySelector("#users-table tbody");

  data.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.street}, ${user.address.suite}, ${
      user.address.city
    }</td>
      <td>${user.company.name}</td>
    `;
    tableBody.appendChild(row);
  });
}

fetchData(ListsOfUsers);
