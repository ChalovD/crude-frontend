function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "Вы согласны." );
}

function showCancel() {
    alert( "Вы отменили выполнение." );
}

function stupidYes() {
    alert("Ты питух не нажимай ОК")
}

function stupidNo() {
    alert("Ты питух не нажимай Отмена")
}

ask("Нажпи шо нить", stupidYes, stupidNo)

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);