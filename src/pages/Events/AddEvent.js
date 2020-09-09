import React, { useState } from 'react';
import * as eventActions from '../../store/events/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const AddEvent = ({ addEvent, isLoading }) => {
    const initialState = {
        name: '', date: ''
    }

    const [event, setEvent] = useState(initialState)

    const onSaveEvent = (e) => {
        e.preventDefault();

        addEvent(event).then(() => {
            toast.success('O evento foi cadastrado com sucesso.')
            setEvent({...initialState})
        }).catch(e => e.map(err => 
            toast.error(err.message)
        ));
    }

    const onChangeText = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div>
                <h1 className="title">Eventos</h1>
                <h2 className="subtitle">Cadastro de evento</h2>
            </div>

            <div className="box my-5">
                <form onSubmit={ onSaveEvent }>
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" name="name" value={ event.name } onChange={ onChangeText } type="text" placeholder="Nome do evento" required/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Data</label>
                        <div className="control">
                            <input className="input" name="date" value={ event.date } onChange={ onChangeText } type="date" placeholder="Data do evento" required/>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <div className="control">
                            <button type="submit" className={`button is-success ${isLoading ? 'is-loading' : ''}`}>Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.event.isLoading
});

const mapDispatchToProps = dispatch => ({
    addEvent: (event) => dispatch(eventActions.create(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);