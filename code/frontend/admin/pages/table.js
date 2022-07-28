import BootstrapTable from 'react-bootstrap-table-next';

const products = [ {
    id: 1,
    name: 'Product 1',
    price: 120
} ];

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } />
