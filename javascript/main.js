/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        // control variable //
        indexId: "0",
        // String managed by input-footer //
        newchat: "",
        // String managed by input notification //
        userSearched: "",
    },
    // methods
    methods: {
        // Call back function that use the arrays index and the controll variable to match the user with the same message inside the array
        Setactivecontact(index) {
         // comparing the control variable to the array's index//
           this.indexId = index;
        },
        //  Call back function that add a new item in the list //
        addchat(){
          // pushing new chat list in the array //
          // validation//
          if(this.newchat.trim() !== ""){
             // array mached with the control variable to push the newchat in the esact contact.name and messages//
             this.contacts[this.indexId].messages.push({
                    // Format date made by Data,js //
                    date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    // Create a new messge.value with previously the function previously described //
                    message: this.newchat.trim(),
                    // assignment of the object value to assign the right class in css //
                    status: 'sent'
                });
                // clearing the input //
                this.newchat = "";
                // Creation of an autoreply of an asynchronous function call back with emascript 6 //
                setTimeout(() =>{
                  // array mached with the control variable to push the newchat in the esact contact.name and messages//
                  this.contacts[this.indexId].messages.push({
                     // Format date made by Data,js //
                      date: dayjs().format('DD/MM/YY HH:mm:ss'),
                      // Create a new messge.value with previously the function previously described //
                      message: 'Viva la mona!',
                     // assignment of the object value to assign the right class in css //
                      status: 'received'
                    });

                }, 3000);

            }
        },
    }
});
