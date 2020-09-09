import React from 'react';
import EventListRow from './EventsListRow';
import * as eventActions from '../../../store/events/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const EventsList = ({ events }) => {
    const dispatch = useDispatch();

    const onDeleteEvent = (event) => {
        dispatch(eventActions.deleteById(event.id)).then(() => {
            toast.success('O evento foi removido com sucesso')
        });
    }

    return (
        <table className="table is-fullwidth">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data do evento</th>
                    <th>Usuário</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                { events.map(event => <EventListRow onDelete={onDeleteEvent} key={ event.id } event={ event }/> )} 
            </tbody>
        </table>
    )
};

export default EventsList;