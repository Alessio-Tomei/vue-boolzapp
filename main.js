let app = new Vue({
    el: '#app',
    data: {
        whichMenu: null,
        openMenu: false,
        inputEmpty: true,
        newMessageInput: '',
        searchInput: '',
        chatActive: null,
        user: {
            name: 'Alessio',
            avatar: 'https://picsum.photos/id/1/200'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://picsum.photos/id/1003/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: 'https://picsum.photos/id/1005/200',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text:  'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'https://picsum.photos/id/1006/200',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                        
                ]
            },
            {
                name: 'Luisa',
                avatar: 'https://picsum.photos/id/1011/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            },
        ],
    },    
    methods: {
        selectVisible: function() {
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        firstInASeries: function(index) {
            if (index == 0) {
                return true;
            } else if (this.contacts[this.chatActive].messages[index].status != this.contacts[this.chatActive].messages[index - 1].status) {
                return true;
            } else {
                return false;
            }
        },
        sendMessage: function() {
            let chatMessageBox = document.querySelector('.chat-messages');
            let indexChat = this.chatActive;
            let newMessageObject = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessageInput,
                status: 'sent'
            };
            this.contacts[indexChat].messages.push(newMessageObject);
            this.newMessageInput = '';
            this.inputEmpty = true;
            setTimeout(() => {
                chatMessageBox.scrollTop = chatMessageBox.scrollHeight;
            }, 0);
            this.randomResponse(indexChat);
        },
        controlInput: function() {
            if (this.newMessageInput.trim() == '') {
                this.newMessageInput = '';
                this.inputEmpty = true;
            } else {
                this.inputEmpty = false;
            }
        },
        randomResponse: function(indexChat) {
            setTimeout(() => {
                let chatMessageBox = document.querySelector('.chat-messages');
                let newMessageObject = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'testo da randomizzare',
                    status: 'received'
                };
                this.contacts[indexChat].messages.push(newMessageObject);
                setTimeout(() => {
                    chatMessageBox.scrollTop = chatMessageBox.scrollHeight;
                }, 0);
            }, 3000);
        },
        deleteMsg: function(indexMsg) {
            this.contacts[this.chatActive].messages.splice(indexMsg,1);
        }
    }
});