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
        searchName: '',
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
                visibleUser: true,
                messages: [
                    {
                        date: '02 / 02 / 2021',
                        hour: '15:32',
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
                visibleUser: true,
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
                visibleUser: true,
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
                visibleUser: true,
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
            },
            {
                name: 'Matteo',
                avatar: 'img/avatar_5.jpg',
                visible: false,
                class: '',
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                visibleUser: true,
                messages: [
                    {
                        date: '09 / 01 / 2021',
                        hour: '12:30',
                        text: 'Hai provato il gelato della nuova gelateria, quella in corso Pippo?',
                        status: 'sent'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '15:50',
                        text: 'Si, devo dire che non è per nulla buono.',
                        status: 'received'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '18:12',
                        text: 'Caspita, eppure da come appare esteticamente fa un figurone.',
                        status: 'sent'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '18:54',
                        text: 'Non sempre i prodotto sono lo specchio del locale.',
                        status: 'received'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '20:24',
                        text: 'Già, allora lo prendo dalla solita gelateria.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Samanta',
                avatar: 'img/avatar_6.jpg',
                visible: false,
                class: '',
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                visibleUser: true,
                messages: [
                    {
                        date: '08 / 01 / 2021',
                        hour: '08:30',
                        text: 'Buongiorno Samanta, non dimenticare che oggi pranziamo insieme!!',
                        status: 'sent'
                    },
                    {
                        date: '08 / 01 / 2021',
                        hour: '09:53',
                        text: 'Certamente, me lo ricordo benissimo.',
                        status: 'received'
                    },
                    {
                        date: '08 / 01 / 2021',
                        hour: '12:11',
                        text: 'Perfetto, allora ci vediamo alle 13:30 al ristorante',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Luca',
                avatar: 'img/avatar_7.jpg',
                visible: false,
                class: '',
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                visibleUser: true,
                messages: [
                    {
                        date: '07 / 01 / 2021',
                        hour: '12:30',
                        text: 'Ho finalmente, trovato la bici che agoniavo da tanto!',
                        status: 'sent'
                    },
                    {
                        date: '07 / 01 / 2021',
                        hour: '17:53',
                        text: 'Ovviamnte comrpata subitissimo.',
                        status: 'sent'
                    },
                    {
                        date: '07 / 01 / 2021',
                        hour: '19:11',
                        text: 'Ma sei un grande, organizziamo subito un percorso per domenica.',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Simone',
                avatar: 'img/avatar_8.jpg',
                visible: false,
                class: '',
                stato: 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm'),
                visibleUser: true,
                messages: [
                    {
                        date: '05 / 01 / 2021',
                        hour: '16:12',
                        text: 'Stasera allenamento alle 19??',
                        status: 'received'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '16:22',
                        text: 'Fammi sapere quanto prima che ci organizziamo per il passaggio.',
                        status: 'received'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '16:23',
                        text: 'Se non hai la macchina ti vengo a prendere io, tranquillamente.',
                        status: 'received'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:23',
                        text: 'Nessun problema, ti passo a prendere mezz\'ora prima ed andiamo',
                        status: 'sent'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:33',
                        text: 'Perfetto, portati il cambio che la doccia la facciamo in palestra.',
                        status: 'received'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:41',
                        text: 'Va bene, poi ceniamo fuori imamgino.',
                        status: 'sent'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '18:04',
                        text: 'Si, ho gia prenotato in braceria!',
                        status: 'received'
                    }
                ]
            }

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
                            text: 'Ok',
                            status: 'received'
                        });
                    }, 2500 );

                    setTimeout( function () {
                        element.stato = 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm');
                    }, 4000 );

                }

            })
        },
        serchContact(){
            this.contacts.filter((element) => {

                if (element.name.toLowerCase().includes(this.searchName.toLowerCase())) {
                    element.visibleUser = true;
                } else {
                    element.visibleUser = false;
                }

            });
    
        },
    }
});