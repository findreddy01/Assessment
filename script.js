const BYE_BTN_ID = 'bye';
const HELLO_BTN_ID = 'hello';
const HELLO_MSG_STRNG = 'Hello';
const BYE_MSG_STRNG = 'Good Bye';
const MSG_CLASS_NAME ='msg';
const btnContainer = document.getElementsByClassName('btn__container')[0];
const msgContainer = document.getElementsByClassName('msg__container')[0];
const COUNT = 5;

let clickListner$ = Rx.Observable.fromEvent(btnContainer, 'click');

clickListner$.subscribe(evt => {
    const TARGET_ID = evt.target.id;
    if (TARGET_ID === BYE_BTN_ID) {
        addMessage(BYE_MSG_STRNG)
    } else if (TARGET_ID === HELLO_BTN_ID) {
        addMessage(HELLO_MSG_STRNG)
    }
});

addMessage = (msg) => {
    const isMsgEmpty = !msgContainer.children.length;
    if (isMsgEmpty) {
        for (let i = 0; i < COUNT; i++) {
            let innerDiv = document.createElement('div');
            innerDiv.innerHTML = msg;
            innerDiv.className = MSG_CLASS_NAME;
            msgContainer.appendChild(innerDiv)
        }
    } else {
        for (let i = 0; i < COUNT; i++) {
            let innerDiv = document.getElementsByClassName(MSG_CLASS_NAME)[i];
            innerDiv.innerHTML = msg;
        }
    }
};

