import React from 'react';

function TableItem({ apprenants, formateurs, promos, salles }) {
    return (
        <tr>
            <td>{apprenants}</td>
            <td>{formateurs}</td>
            <td>{promos}</td>
            <td>{salles}</td>
        </tr>
    );
}

export default TableItem;
