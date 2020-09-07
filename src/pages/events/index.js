import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as EventActions from './_actions'
import { NavLink } from 'react-router-dom';

const Main = ({ events, getEvents }) => {
    useEffect(getEvents, [])

    return (
        <>
            <div className="columns">
                <div className="column">
                    <h1 className="title">Eventos</h1>
                    <h2 className="subtitle">Listagem de eventos</h2>
                </div>

                <div className="column py-5">
                    <NavLink to="/" className="button is-primary is-pulled-right">Cadastrar</NavLink>
                </div>
            </div>

            {
                events.map(event => (
                    <div key={event.id} className="card my-5">
                        <div className="card-content">
                           <table className="table is-fullwidth">
                               <thead>
                                   <tr>
                                        <th>Nome</th>
                                        <th>Data do evento</th>
                                        <th></th>
                                   </tr>
                               </thead>

                               <tbody>
                                { events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.nome}</td>
                                        <td>{event.data}</td>
                                        
                                        <td className="is-pulled-right">
                                            <NavLink to="/" className="button mr-2">
                                                Editar
                                            </NavLink>

                                            <button className="button is-danger">
                                                Remover
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                } 
                               </tbody>
                           </table>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    events: state.event.events
});

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(EventActions.getEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);