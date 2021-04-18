import React from 'react'

const Row = props => {
    return (
        <tr>
            <td>{props.record.Id}</td>
            <td>{props.record.NameHE}</td>
            <td>{props.record.NameEN}</td>
            <td>{props.record.AdId}</td>
            <td>{props.record.Country}</td>
            <td>{props.record.IsActive.toString()}</td>
            <td>{props.record.ParentID}</td>
        </tr>
    )
}

export default Row;