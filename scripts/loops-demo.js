function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function hello() {
    alert("Hello!")
}

ask(
    ("Вы согласны?"),
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    }
);






