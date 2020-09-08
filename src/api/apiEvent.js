import api from './api'

export default {
    fetchAll() {
        return api.get('/events');
    },

    fetchOne(id) {
        return api.get(`/events/${id}`);
    },

    create(event) {
        return api.post(`/events`, event);
    },

    update(event) {
        return api.put(`/events/${event.id}`, event);
    },

    deleteById(id) {
        return api.delete(`/events/${id}`);
    }
}