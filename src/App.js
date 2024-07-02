import { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const initialData = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321', address: '' },
    { name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442', address: 'Kulas Light, Apt. 556, Gwenborough, 92998-3874' },
    { name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125', address: 'Victor Plains, Suite 879, Wisokyburgh, 90566-7771' },
    { name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447', address: 'Douglas Extension, Suite 847, McKenziehaven, 59590-4157' },
    { name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', phone: '493-170-9623 x156', address: 'Hoeger Mall, Apt. 692, South Elvis, 53919-4257' },
    { name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', phone: '(254)954-1289', address: 'Skiles Walks, Suite 351, Roscoeview, 33263' },
    { name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info', phone: '1-477-935-8478 x6430', address: 'Norberto Crossing, Apt. 950, South Christy, 23505-1337' },
    { name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz', phone: '210.067.6132', address: 'Rex Trail, Suite 280, Howemouth, 58804-1099' },
    { name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', phone: '586.493.6943 x140', address: 'Ellsworth Summit, Suite 729, Aliyaview, 45169' },
    { name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', phone: '(775)976-6794 x41206', address: 'Dayna Park, Suite 449, Bartholomebury, 76495-3109' },
    { name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz', phone: '024-648-3804', address: 'Kattie Turnpike, Suite 198, Lebsackbury, 31428-2261' }
];


  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns = [
    { heading: 'Name', value: 'name'},
    { heading: 'Email', value: 'email'},
    { heading: 'Phone', value: 'phone'},
    { heading: 'Address', value: 'address'},
  ];

  const sortData = (value, order = 'asc') => {
    const sortedData = [...data].sort((a, b) => {
      if (a[value] < b[value]) return order === 'asc' ? -1 : 1;
      if (a[value] > b[value]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header>
        <h1>Dynamic Table</h1>
      </header>
      <Table data={currentRows} column={columns} sortData={sortData}/>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
