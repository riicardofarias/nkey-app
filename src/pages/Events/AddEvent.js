import React  from 'react';
import EventForm from './components/EventForm';
import * as eventActions from '../../store/events/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const AddEvent = ({ addEvent, event, isLoading }) => {

    const onAddEvent = (data) => {
        addEvent(data).then(() => {
            toast.success('O evento foi cadastrado com sucesso.')
        }).catch(e => e.map(err => 
            toast.error(err.message)
        ))
    }

    return (
        <>
            <div>
                <h1 className="title">Eventos</h1>
                <h2 className="subtitle">Cadastro de evento</h2>
            </div>

            <div className="box my-5">
                <EventForm event={ event } onSubmit={ (inputs) => onAddEvent(inputs) } isLoading={ isLoading }/>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    event: state.event.event,
    isLoading: state.event.isLoading
});

const mapDispatchToProps = dispatch => ({
    addEvent: (event) => dispatch(eventActions.create(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);