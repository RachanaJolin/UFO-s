// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}

// "Events"
// a) where ; which HTML element ; <button>
// b) what they did; what type of event; event attributes; onclick
// c) how to respond; what to do when user clicks; handleClick

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;
  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `city` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `shape` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === sshape);
  }

  buildTable(filteredData);

}


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
//}
//     );
//  });
//  }