/* Milestone 1
● Replica della grafica c on l a possibilità di avere messaggi
scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for,
visualizzare nome e immagine di ogni contatto */

var app = new Vue({
    el: '#app',
    data: {
        newMessage: '',
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
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                messages: [
                    {
                        date: '02 / 02 / 2021',
                        hour: dayjs().format('HH:mm'),
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '15:50',
                        text: 'Ricordati di dargli da mangiare.',
                        status: 'sent'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '16:32',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '16:36',
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
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                messages: [
                    {
                        date: '20 / 01 / 2021',
                        hour: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20 / 01 / 2021',
                        hour: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20 / 01 / 2021',
                        hour: '16:35',
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
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                messages: [
                    {
                        date: '28 / 01 / 2021',
                        hour: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28 / 01 / 2021',
                        hour: '10:21',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28 / 01 / 2021',
                        hour: '16:15',
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
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                messages: [
                    {
                        date: '10 / 01 / 2021',
                        hour: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10 / 01 / 2021',
                        hour: '15:50',
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
            //     class: '',
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Samanta',
            //     avatar: 'img/avatar_6.jpg',
            //     visible: false,
            //     class: '',
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Luca',
            //     avatar: 'img/avatar_7.jpg',
            //     visible: false,
            //     class: '',
            //     messages: [

            //     ]
            // },
            // {
            //     name: 'Simone',
            //     avatar: 'img/avatar_8.jpg',
            //     visible: false,
            //     class: '',
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
        },
        sendNewMessage(){
            this.contacts.forEach((element) => {
                if (element.visible == true) {
                    element.messages.push({
                        date: dayjs().format('DD / MM / YYYY'),
                        hour: dayjs().format('HH:mm'),
                        text: this.newMessage,
                        status: 'sent'
                    });

                    this.newMessage = '';

                    setTimeout( function () {
                        element.stato = 'Online'
                    }, 1000 );

                    setTimeout( function () {
                        element.messages.push({
                            date: dayjs().format('DD / MM / YYYY'),
                            hour: dayjs().format('HH:mm'),
                            text: 'ok',
                            status: 'received'
                        });
                    }, 2500 );

                    setTimeout( function () {
                        element.stato = 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm');
                    }, 4000 );
                }
            })
        }
    }
});