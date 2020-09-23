// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // first clear out existing data
    // loop through each opject in the data
    // apend the row and cells for each value in the row
    //Lop through each field in the dataRow and add each value to a table cell (td)
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let call = row.append("td");
            cell.text(val);
            }
        );

    });