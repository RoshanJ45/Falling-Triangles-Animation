    function createAngle() {
        const angle = document.createElement('div');
        angle.classList.add('angle');
        angle.style.left = Math.random() * 100 + 'vw';
        angle.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(angle);


        setTimeout(() => {
            angle.remove();
        }, 5000);
    }


    setInterval(createAngle, 300);
