
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
        dark: '',
        user: [
            {
                name: 'Alessandra',
                avatar: 'img/avatar_io.jpg'
            }
        ],
        answers: [
            'Ciaooo',
            'Tutto ok, come stai?',
            'Cercamente, non preoccuparti.',
            'Si, sarò puntuale.',
            'No, non direi.',
            'Scusa, ho il gatto che gioca nella lavatrice, ci sentiamo dopo.',
            'Si, ti sei allenato oggi?',
            'Ok, vedi che oggi la partita la vadiamo da me.'
        ],
        // Con visible al click, se true, si vedranno i messaggi nella  Tab di destra
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '15:50',
                        text: 'Ricordati di dargli da mangiare.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '16:32',
                        text: 'Tutto fatto!',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '02 / 02 / 2021',
                        hour: '16:36',
                        text: 'Grandioso, tra due ore sono a casa.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '20 / 01 / 2021',
                        hour: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '20 / 01 / 2021',
                        hour: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '28 / 01 / 2021',
                        hour: '10:21',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '28 / 01 / 2021',
                        hour: '16:15',
                        text: 'Ah scusa!',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '10 / 01 / 2021',
                        hour: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '15:50',
                        text: 'Si, devo dire che non è per nulla buono.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '18:12',
                        text: 'Caspita, eppure da come appare esteticamente fa un figurone.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '18:54',
                        text: 'Non sempre i prodotto sono lo specchio del locale.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '09 / 01 / 2021',
                        hour: '20:24',
                        text: 'Già, allora lo prendo dalla solita gelateria.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '08 / 01 / 2021',
                        hour: '09:53',
                        text: 'Certamente, me lo ricordo benissimo.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '08 / 01 / 2021',
                        hour: '12:11',
                        text: 'Perfetto, allora ci vediamo alle 13:30 al ristorante',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '07 / 01 / 2021',
                        hour: '17:53',
                        text: 'Ovviamnte comrpata subitissimo.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '07 / 01 / 2021',
                        hour: '19:11',
                        text: 'Ma sei un grande, organizziamo subito un percorso per domenica.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
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
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '16:22',
                        text: 'Fammi sapere quanto prima che ci organizziamo per il passaggio.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '16:23',
                        text: 'Se non hai la macchina ti vengo a prendere io, tranquillamente.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:23',
                        text: 'Nessun problema, ti passo a prendere mezz\'ora prima ed andiamo',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:33',
                        text: 'Perfetto, portati il cambio che la doccia la facciamo in palestra.',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '17:41',
                        text: 'Va bene, poi ceniamo fuori imamgino.',
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    },
                    {
                        date: '05 / 01 / 2021',
                        hour: '18:04',
                        text: 'Si, ho gia prenotato in braceria!',
                        status: 'received',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    }
                ]
            }

        ]
    },
    methods: {
        //Rende visibile la chat del contatto
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
        // Invia il messaggio nella chat, cambia lo stato, ci invia una risposta
        sendNewMessage(){

            const counter = Math.floor(Math.random() * (this.answers.length - 0 ));
            const risposta = this.answers[counter];

            this.contacts.forEach((element) => {

                if (element.visible == true) {
                    element.messages.push({
                        date: dayjs().format('DD / MM / YYYY'),
                        hour: dayjs().format('HH:mm'),
                        text: this.newMessage,
                        status: 'sent',
                        menuMessage: 'none',
                        moreInfo: 'none'
                    });

                    this.newMessage = '';

                    setTimeout( function () {
                        element.stato = 'Online'
                    }, 1000 );

                    setTimeout( function () {
                        element.stato = 'Sta scrivendo...'
                    }, 2000 );

                    setTimeout( function () {
                        element.messages.push({
                            date: dayjs().format('DD / MM / YYYY'),
                            hour: dayjs().format('HH:mm'),
                            text:  risposta,
                            status: 'received',
                            menuMessage: 'none',
                            moreInfo: 'none'
                        });
                    }, 2500 );

                    setTimeout( function () {
                        element.stato = 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm');
                    }, 4000 );

                }

            })
        },
        // Ricerca del contatto tramite input
        serchContact(){
            this.contacts.filter((element) => {

                if (element.name.toLowerCase().includes(this.searchName.trim().toLowerCase())) {
                    element.visibleUser = true;
                } else {
                    element.visibleUser = false;
                }

            });
    
        },
        // Attiva e disattiva darkmode
        toggleDark(){
            if (this.dark == ''){
                this.dark = 'darkmode';
            } else {
                this.dark = '';
            }
        },
        // Fa apparire la finestra a tendina
        messageMenu(i){
            if(i.menuMessage == 'none') {
                i.menuMessage = 'block';
                setTimeout( function () {
                    i.menuMessage = 'none'
                }, 1500);
            } else {
                i.menuMessage = 'none';
            }
        },
        // Cancella il messaggio
        deleteMessage(contact, index){
            contact.messages.splice(index, 1);
        },
        //Fa apparire la data come informazione in più al messaggio
        seeInfo(i){
            if(i.moreInfo == 'none') {
                i.moreInfo = 'block';
            } else {
                i.moreInfo = 'none';
            }
        }
    }
});