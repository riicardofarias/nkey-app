import React, { useEffect }  from 'react';
import EventForm from './components/EventForm';
import * as eventActions from '../../store/events/actions';
import { connect, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddEvent = ({ getEvent, update, event, isLoading, match }) => {
    const id = useSelector(() => match.params.id)

    useEffect(() => {
        getEvent(id)
    }, [getEvent, id]);

    const onUpdateEvent = (event) => {
        update(event).then(() => {
            toast.success('O evento foi alterado com sucesso.')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    return (
        <>
            <div>
                <h1 className="title">Eventos</h1>
                <h2 className="subtitle">Alteração de evento</h2>
            </div>

            <div className="box my-5">
                <EventForm event={ event } onSubmit={ (inputs) => onUpdateEvent(inputs) } isLoading={isLoading}/>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    event: state.event.event,
    isLoading: state.event.isLoading
});

const mapDispatchToProps = dispatch => ({
    getEvent: (id) => dispatch(eventActions.getById(id)),
    update: (event) => dispatch(eventActions.update(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);