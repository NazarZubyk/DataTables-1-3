import {Tabulator} from 'https://unpkg.com/tabulator-tables@6.2.5/dist/js/tabulator_esm.min.js';



function DataTable(config, data) {
    const table = document.querySelector(config.parent);
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    const trHead = document.createElement('tr');
    thead.appendChild(trHead);

    const firstTd = document.createElement('td');
    firstTd.innerHTML = "№";
    trHead.appendChild(firstTd)

    let values = [];

    for(let title of config.columns){
      values.push(title.value);
      const td = document.createElement('td');
      td.innerHTML = title.title;
      trHead.appendChild(td);
    }

    let counter = 1;
    for(let row of data){
      
      const trBody = document.createElement('tr');

      const firstTd = document.createElement('td');
      firstTd.innerHTML = counter;
      trBody.appendChild(firstTd);
      counter++;

      console.log(values)

      for(let value of values){
        const td = document.createElement('td');
        console.log(value)
        td.innerHTML = row[value];

        trBody.appendChild(td)
      }
      tbody.appendChild(trBody);
    }
 }


 
 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Ім’я', value: 'name'},
     {title: 'Прізвище', value: 'surname'},
     {title: 'Вік', value: 'age'},
     {title: 'test', value: 'test'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12, test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
 ];
 
 DataTable(config1, users);

 let tabledata = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12, test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15,test : 'test'},
];

 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
  height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data:tabledata, //assign data to table
  layout:"fitColumns", //fit columns to width of table (optional)
  columns:[ //Define Table Columns
    {title:"Ім’я", field:"name", width:150},
    {title:"Прізвище", field:"surname", hozAlign:"left", formatter:"progress"},
    {title:"Вік", field:"age"},
    {title:"test", field:"test", sorter:"date", hozAlign:"center"},
  ],
});

//trigger an alert message when the row is clicked
table.on("rowClick", function(e, row){ 
 alert("Row " + row.getData().id + " Clicked!!!!");
});

//define some sample data
