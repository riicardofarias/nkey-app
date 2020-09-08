import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as EventActions from '../../store/events/actions';
import EventsList from './components/EventsList';

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
                    <NavLink to="/add" className="button is-primary is-pulled-right">Cadastrar</NavLink>
                </div>
            </div>

            <div className="box my-5">
                <EventsList events={events}/>
            </div>
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