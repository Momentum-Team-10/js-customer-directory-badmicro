const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container", "uk-flex", "uk-flex-between");


for (let customer of customers) {
  const customerCard = document.createElement("div");
  customerCard.id = `${customer.id.value}`;
  container.appendChild(customerCard)
  customerCard.classList.add(
      "uk-card", "uk-card-body", "uk-card-default", "uk-width-medium");


  customerCard.innerHTML = `
    <img src=${customer.picture.medium} />
    <p>${capsName(customer.name.first) + capsName(customer.name.last)}</p>
    <p>${customer.email}</p>
    <p>${toLocationSting(customer)}</p>
    <p>DOB: ${moment(customer.dob.date)}</p>
    <p>Customer since: ${moment(customer.registered.date)}</p>
    `;
}

function capsName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function toLocationSting(customer) {
  let locationString = "";
  locationString +=
    customer.location.street.number +
    " " +
    customer.location.street.name +
    "\n";
  locationString +=
    customer.location.city +
    ", " +
    nameToAbbr(customer.location.state) +
    customer.location.postcode;
  return locationString;
}
