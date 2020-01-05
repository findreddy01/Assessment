var BYE_BTN_ID = 'bye';
var HELLO_BTN_ID = 'hello';
var HELLO_MSG_STRNG = 'Hello';
var BYE_MSG_STRNG = 'Good Bye';
var MSG_CLASS_NAME ='msg';
var btnContainer = document.getElementsByClassName('btn__container')[0];
var msgContainer = document.getElementsByClassName('msg__container')[0];
var COUNT = 5;

btnContainer.addEventListener('click', evt => {
    var TARGET_ID = evt.target.id;
    if (TARGET_ID === BYE_BTN_ID) {
        addMessage(BYE_MSG_STRNG)
    } else if (TARGET_ID === HELLO_BTN_ID) {
        addMessage(HELLO_MSG_STRNG)
    }
});

addMessage = (msg) => {
    var isMsgEmpty = !msgContainer.children.length;
    if (isMsgEmpty) {
        for (var i = 0; i < COUNT; i++) {
            var innerDiv = document.createElement('div');
            innerDiv.innerHTML = msg;
            innerDiv.className = MSG_CLASS_NAME;
            msgContainer.appendChild(innerDiv)
        }
    } else {
        for (var i = 0; i < COUNT; i++) {
            var innerDiv = document.getElementsByClassName(MSG_CLASS_NAME)[i];
            innerDiv.innerHTML = msg;
        }
    }
};

