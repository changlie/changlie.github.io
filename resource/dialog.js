function dialogOpen() {
    var modalStyle = document.getElementById("confirm-modal").style
    modalStyle.display = 'block'
    // modalStyle.height = '300px'
    // modalStyle.width = '400px'
}
function dialogClose() {
    var modalStyle = document.getElementById("confirm-modal").style
    modalStyle.display = 'none'
}


var dialog = document.createElement('div')
dialog.setAttribute('id', "confirm-modal")
dialog.setAttribute('class', "modal")
dialog.innerHTML = `
<div class="modal-content">
    <svg t="1574164208713" class="model-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5819" width="63" height="63"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 877.714286c-40.228571 0-73.142857-32.914286-73.142857-73.142857s32.914286-73.142857 73.142857-73.142857 73.142857 32.914286 73.142857 73.142857S552.228571 877.714286 512 877.714286zM585.142857 512c0 40.228571-32.914286 73.142857-73.142857 73.142857s-73.142857-32.914286-73.142857-73.142857L438.857143 219.428571c0-40.228571 32.914286-73.142857 73.142857-73.142857s73.142857 32.914286 73.142857 73.142857L585.142857 512z" p-id="5820" fill="white"></path></svg>
    <h2 class="modal-title">温馨提示</h2>
    <p class="modal-description">该资源尚未开放</p>
    <div class="modal-options">
        <button
            class="modal-confirm btn"
            data-text="确定"
            onclick="dialogClose()"
        ></button>
    </div>
</div>
`

document.body.appendChild(dialog)



var dialogStyle = document.createElement('style')
dialogStyle.appendChild(document.createTextNode(''))
document.head.appendChild(dialogStyle)

dialogStyle.sheet.insertRule(`:root {
    --normal-clor: #495aff;
}`, 0)
dialogStyle.sheet.insertRule(`.modal {
    display: none;
    border-radius: 12px;
    border: transparent;
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    animation: show-modal 0.1s;
}`, 0)
dialogStyle.sheet.insertRule(`@keyframes show-modal {
    0% {transform: translate(-50%, -50%) scale(0);}
    100% {transform: translate(-50%, -50%) scale(1);}
}`, 0)
dialogStyle.sheet.insertRule(`.modal .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
}`, 0)
dialogStyle.sheet.insertRule(`.model-icon {
    opacity: 0;
    animation: show-modal-item 1s ease forwards;
}`, 0)
dialogStyle.sheet.insertRule(`@keyframes show-modal-item {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}`, 0)
dialogStyle.sheet.insertRule(`.modal-title {
    opacity: 0;
    margin-top: 16px;
    animation: show-modal-item 0.5s ease forwards;
    animation-delay: 0.25s;
}`, 0)
dialogStyle.sheet.insertRule(`.modal-description {
    opacity: 0;
    margin-top: 16px;
    animation: show-modal-item 0.5s ease forwards;
    animation-delay: 0.5s;
}`, 0)
dialogStyle.sheet.insertRule(`.modal-options {
    opacity: 0;
    margin-top: 16px;
    animation: show-modal-item 0.5s ease forwards;
    animation-delay: 0.75s;
}`, 0)
dialogStyle.sheet.insertRule(`.modal-confirm {
    height: 2.7rem;
    line-height: 2.7rem;
    font-size: 1rem;
    width: 120px;
    padding: 0;
    border-radius: 22px;
    color: hsl(171, 100%, 41%);
    background-color: white;
}`, 0)
dialogStyle.sheet.insertRule(`.modal-confirm::after {
    content: attr(data-text);
}`, 0)
dialogStyle.sheet.insertRule(`.modal .btn {
    outline: none;
    user-select: none;
    cursor: pointer;
    border: transparent;
}`, 0)
dialogStyle.sheet.insertRule(`.modal .btn:hover {
    opacity: 0.8;
}`, 0)


















