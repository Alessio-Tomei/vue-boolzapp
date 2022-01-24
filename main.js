let app = new Vue({
    el: '#app',
    data: {
        textForRandomResponse: [
            'ok',
            'frase 2',
            'anche a te e fanmiglia',
            'sono positivo',
            'non posso sono in quarantena',
            '16 + 18 quanto fa?'
        ],
        openChatMenu: false,
        lastAccessMsg: '',
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
            {
                name: 'Marica',
                avatar: 'https://picsum.photos/id/1040/200',
                visible: true,
                messages: [

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
            this.randomResponse(indexChat, this.contacts[indexChat].name, this.contacts[indexChat].avatar);
        },
        controlInput: function() {
            if (this.newMessageInput.trim() == '') {
                this.newMessageInput = '';
                this.inputEmpty = true;
            } else {
                this.inputEmpty = false;
            }
        },
        randomResponse: function(indexChat, chatName ,chatAvatar) {
            this.lastAccessMsg = 'Sta scrivendo...';
            setTimeout(() => {
                if ( !(this.contacts[indexChat].name == chatName)) {
                    const oldIndex = indexChat;
                    for (let i = oldIndex-1; i >= 0; i--) {
                        if (!this.contacts[i].name == chatName) {
                            indexChat = i;
                        }                   
                    }
                    if (indexChat == oldIndex ) {
                        this.createChat(chatName, chatAvatar);
                        indexChat = this.contacts.length - 1; 
                    }
                }
                let chatMessageBox = document.querySelector('.chat-messages');
                let newText = this.randomText();
                let newMessageObject = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: newText,
                    status: 'received'
                };
                this.contacts[indexChat].messages.push(newMessageObject);
                if (indexChat == this.chatActive) {
                    this.lastAccessMsg = 'Online';
                    setTimeout(() => {
                        chatMessageBox.scrollTop = chatMessageBox.scrollHeight;
                    }, 0);
                    setTimeout(() => {
                        this.setLastAccessMsg();
                    }, 3000);      
                }
            }, 3000);

        },
        deleteMsg: function(indexMsg) {
            this.contacts[this.chatActive].messages.splice(indexMsg,1);
        },
        setLastAccessMsg: function() {
            let msgArray = this.contacts[this.chatActive].messages;
            for (let i = msgArray.length-1; i >= 0; i--) {
                if (msgArray[i].status == 'received') {
                    return this.lastAccessMsg = 'Ultimo accesso: ' + msgArray[i].date.substring(0, 16);
                }          
            }
            return this.lastAccessMsg = 'Offline';
        },
        deleteAllMsg: function() {
            this.contacts[this.chatActive].messages.splice(0, this.contacts[this.chatActive].messages.length);
            this.setLastAccessMsg();
        },
        deleteChat: function() {
            this.contacts.splice(this.chatActive, 1);
            this.chatActive = null;
        },
        createChat: function(chatName, chatAvatar = 'https://picsum.photos/id/999/200') {
            let newContatObj = {
                name: chatName,
                avatar: chatAvatar,
                visible: true,
                messages: [

                ]
            }
            this.contacts.push(newContatObj);
        },
        randomText: function() {
            console.log('dentro');
            console.log(this.randomInt(0, this.textForRandomResponse.length -1));
            return this.textForRandomResponse[this.randomInt(0, this.textForRandomResponse.length -1)];
        },
        randomInt: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
    }
});