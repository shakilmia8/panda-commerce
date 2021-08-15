// 2. 
const sss = document.getElementsByClassName('name')
for (const shakil of sss) {
    shakil.style.color = 'blue';
}

// 3.
const back = document.getElementById('backpack');
back.style.backgroundColor = "tomato";
back.style.borderRadius = '20px';
back.style.paddingBottom = '15px';

const shoe = document.getElementById('shoes');
shoe.style.backgroundColor = "lightgreen";
shoe.style.borderRadius = '20px';
shoe.style.paddingBottom = '15px';
// 4.
const ddd = document.getElementsByClassName('card');
for (const manik of ddd) {
    manik.style.borderRadius = '30px';
}

// 5. 
document.getElementById('dark-mode').addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'black';
    }
)

document.getElementById('normal-mode').addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'white';
    }
)

// 6. 
document.getElementById('shoes').addEventListener(
    'click', function (event) {
        event.target.parentNode.removeChild(event.target);
    }
);

document.getElementById('backpack').addEventListener(
    'click', function (event) {
        event.target.parentNode.removeChild(event.target);
    }
);

// 7.
document.getElementById('submit').addEventListener(
    'click', function () {
        document.getElementById('delete-text').style.display = 'none';
    });

document.getElementById('delete-button').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('submit');
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
});

// 8.
const del = document.getElementById('enter');
del.addEventListener(
    'mouseenter', function (event) {
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
        else {
            event.target.parentNode.setAttribute(event.target);
        }

    });

// 9.
const dele = document.getElementById('contact');
dele.addEventListener(
    'click', function (event) {
        dele.style.backgroundColor = 'lightblue';
    });





