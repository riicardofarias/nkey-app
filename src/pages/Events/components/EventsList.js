import React from 'react';
import EventListRow from './EventsListRow';
import * as eventActions from '../../../store/events/actions';
import { connect } from 'react-redux';

const EventsListRow = ({ onDelete, events }) => {
    const onDeleteEvent = (event) => {

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
                { events.map(event => <EventListRow key={ event.id } event={ event }/> )} 
            </tbody>
        </table>
    )
};

const mapStateToProps = (state) => ({
    isLoading: state.event.isLoading
});

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(eventActions.deleteById(id))
});

export default EventsListRow;