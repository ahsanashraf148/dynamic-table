import "./Table.css";

const Table = ({ data, column, sortData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} sortData={sortData} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRowItem item={item} column={column} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHeadItem = ({ item, sortData }) => {
  return (
    <th>
      {item.heading}
      <button onClick={() => sortData(item.value, "asc")}>↑</button>
      <button onClick={() => sortData(item.value, "desc")}>↓</button>
    </th>
  );
};

const TableRowItem = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      return <td key={index}>{item[columnItem.value]}</td>;
    })}
  </tr>
);

export default Table;
