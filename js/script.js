/* Milestone 1
● Replica della grafica c on l a possibilità di avere messaggi
scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for,
visualizzare nome e immagine di ogni contatto */

var app = new Vue({
    el: '#app',
    data: {
        user: [
            {
                name: 'Alessandra',
                avatar: 'img/avatar_io.jpg'
            }
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
            },
            {
                name: 'Lorenzo',
                avatar: 'img/avatar_2.jpg',
            },
            {
                name: 'Mario',
                avatar: 'img/avatar_3.jpg',
            },
            {
                name: 'Gabriele',
                avatar: 'img/avatar_4.jpg',
            },
            {
                name: 'Matteo',
                avatar: 'img/avatar_5.jpg',
            },
            {
                name: 'Samanta',
                avatar: 'img/avatar_6.jpg',
            },
            {
                name: 'Luca',
                avatar: 'img/avatar_7.jpg',
            },
            {
                name: 'Simone',
                avatar: 'img/avatar_8.jpg',
            }
        ]
    },
    methods: {

    }
});