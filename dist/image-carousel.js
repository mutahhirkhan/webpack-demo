let carousels = document.getElementsByClassName('image-carousel');
console.log('connected');

[].forEach.call(carousels, function (c) {
    console.log(c);
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        bubblesContainer = document.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.querySelectorAll('.train'),
        // imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 90,
        bubbles = [];
        
        console.log(imgs)
    for (let i = 0; i < imgs.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);
        console.log('bubbles in process')

        b.addEventListener('click', function () {
            currentImageIndex = i;
            switchImg();
        });
    }

    function switchImg () {
        // console.log(-width * currentImageIndex + 'vw')
        inner.style.left = -width * currentImageIndex + 'vw';
        
        bubbles.forEach(function (b, i) {
            if (i === currentImageIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    next.addEventListener('click', function () {
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function () {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    });

    switchImg();
});
