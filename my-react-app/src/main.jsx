import { createRoot } from 'react-dom/client'

const myelement = (
  <h1>Hello my stupid code</h1>,
  <table border="1">
    <tr>
      <th>number</th>
      <th>Name</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Chaste</td>
    </tr>
  </table>
);


createRoot(document.getElementById('root')).render(
  myelement
)
