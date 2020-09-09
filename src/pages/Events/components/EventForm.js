import React, { useState, useEffect } from 'react';

const EventForm = ({ onSubmit, event, isLoading }) => {
    const [ inputs, setInputs ] = useState({
        id: '', name: '', date: ''
    })

    useEffect(() => {
        if(event) setInputs(event)
    }, [event])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);
    }

    const handleOnChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                    <input className="input" name="name" value={ inputs.name } onChange={ handleOnChange } type="text" placeholder="Nome do evento" required/>
                </div>
            </div>

            <div className="field">
                <label className="label">Data</label>
                <div className="control">
                    <input className="input" name="date" value={ inputs.date } onChange={ handleOnChange } type="date" placeholder="Data do evento" required/>
                </div>
            </div>

            <div className="field mt-5">
                <div className="control">
                    <button type="submit" className={`button is-success ${isLoading ? 'is-loading' : ''}`}>Salvar</button>
                </div>
            </div>
        </form>
    );
}

export default EventForm;