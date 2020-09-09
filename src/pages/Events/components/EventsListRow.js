import React from 'react';
import { NavLink } from 'react-router-dom';

const EventsListRow = ({ event, onDelete }) => (
    <tr>
        <td>{event.name}</td>
        <td>{event.formattedDate}</td>
        <td>{event.user.name}</td>
        
        <td className="has-text-right">
            <NavLink to={`/edit/${event.id}`} className="button mr-2">
                Editar
            </NavLink>

            <button className="button is-danger" onClick={ () => onDelete(event) }>
                Remover
            </button>
        </td>
    </tr>
);

export default EventsListRow;