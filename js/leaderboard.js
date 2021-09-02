import { tableBodyList } from "../components/tableBodyList.js";

const tableBody = document.getElementById('table-body');

for (let index = 0; index < 4; index++) {
    const tableList = new tableBodyList();
    tableBody.appendChild(tableList.render());
}


