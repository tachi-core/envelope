const envelope = document.querySelector('.envelope-wrapper'),
a1 = document.querySelector('.a1'),
a2 = document.querySelector('.a2'),
a3 = document.querySelector('.a3'),
a4 = document.querySelector('.a4'),
a5 = document.querySelector('.a5'),
a6 = document.querySelector('.a6'),
shadow = document.querySelector('.shadow');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    a1.classList.toggle('active');
    a2.classList.toggle('active');
    a3.classList.toggle('active');
    a4.classList.toggle('active');
    a5.classList.toggle('active');
    a6.classList.toggle('active');
    shadow.classList.toggle('active');
});