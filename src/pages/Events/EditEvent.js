import React, { useEffect, useState }  from 'react';
import * as eventActions from '../../store/events/actions';
import { connect, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const EditEvent = ({ getEvent, update, event, isLoading, match }) => {
    const initialState = {
        id: '', name: '', date : ''
    }

    const [inputs, setInputs] = useState({ 
        initialState 
    })
    
    const id = useSelector(() => 
        match.params.id
    )

    useEffect(() => {
        getEvent(id)
    }, [getEvent, id]);

    useEffect(() => {
        console.log(event)
        if(event) setInputs(event)
    }, [event])

    const onUpdateEvent = (e) => {
        e.preventDefault();

        update(inputs).then(() => {
            toast.success('O evento foi alterado com sucesso.')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    const onChangeText = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div>
                <h1 className="title">Eventos</h1>
                <h2 className="subtitle">Alteração de evento</h2>
            </div>

            <div className="box my-5">
                <form onSubmit={ onUpdateEvent }>
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input className="input" name="name" value={ inputs.name } onChange={ onChangeText } type="text" placeholder="Nome do evento" required/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Data</label>
                        <div className="control">
                            <input className="input" name="date" value={ inputs.date } onChange={ onChangeText } type="date" placeholder="Data do evento" required/>
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
    event: state.event.event,
    isLoading: state.event.isLoading
});

const mapDispatchToProps = dispatch => ({
    getEvent: (id) => dispatch(eventActions.getById(id)),
    update: (event) => dispatch(eventActions.update(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);