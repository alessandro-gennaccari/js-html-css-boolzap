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
        // Con visible cercherò di far si che al click cambi e se true,
        // si vedranno i messaggi nella  Tab di destra
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                class:'active',
                messages: [
                    {
                        date: '02/02/2021 - 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '02/02/2021 - 15:50:22',
                        text: 'Ricordati di dargli da mangiare.',
                        status: 'sent'
                    },
                    {
                        date: '02/02/2021 - 16:32:23',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '02/02/2021 - 16:36:11',
                        text: 'Grandioso, tra due ore sono a casa.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Lorenzo',
                avatar: 'img/avatar_2.jpg',
                visible: false,
                class: '',
                messages: [
                    {
                        date: '20/01/2021 - 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/01/2021 - 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/01/2021 - 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent' 
                    }
                ]
            },
            {
                name: 'Mario',
                avatar: 'img/avatar_3.jpg',
                visible: false,
                class: '',
                messages: [
                    {
                        date: '28/01/2021 - 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/01/2021 - 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/01/2021 - 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }

                ]
            },
            {
                name: 'Gabriele',
                avatar: 'img/avatar_4.jpg',
                visible: false,
                class: '',
                messages: [
                    {
                        date: '10/01/2021 - 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 - 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            }
            /* Riduco i contatti per lavorare meglio */
            // ,
            // {
            //     name: 'Matteo',
            //     avatar: 'img/avatar_5.jpg',
            //     visible: false,
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Samanta',
            //     avatar: 'img/avatar_6.jpg',
            //     visible: false,
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Luca',
            //     avatar: 'img/avatar_7.jpg',
            //     visible: false,
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Simone',
            //     avatar: 'img/avatar_8.jpg',
            //     visible: false,
            //     messages: [

            //     ]
            // }
        ]
    },
    methods: {
        visibleChat(index) {

            let indice = this.contacts[index];

            this.contacts.forEach((element) => {
                if(element.visible == true) {
                    element.visible = false;
                    element.class = '';
                    indice.visible = true;
                    indice.class = 'active';
                }
            });
        }
    }
});