let carousels = document.getElementsByClassName('image-carousel');
let tab = document.querySelectorAll(".tab");
var inner = document.querySelector(".inner")
var arrival = document.querySelector(".arrival")
var departure = document.querySelector(".departure")
var nextFn = null;
var prevFn  = null;

var htmlMakeUp = (index, name, time, trainNumber, volume) => {
    if(index < 1){
        inner.innerHTML=""
    inner.insertAdjacentHTML('afterbegin', `
        <div>
            <div class="train arrival">
                <div class="train1 trainGrid">
                    <div class="info">
                        <div class="infoLeftBar"></div>
                        <div class="infoContent"><h2>Aret Suppelementary</h2></div>
                    </div>
                    <div class="time flex"><h1>15:16</h1></div>
                    <div class="name tabContent">
                        <b>Saint-Quentin</b>
                        <p>TER | 747474</p></div>
                    <div class="volume flex">
                        <b>voie</b>
                        <h1>15</h1>
                    </div>
                </div>
            </div>
            <div class="prev prevArrival" listner="true"></div>
        </div>

        <div>
            <div class="train departure">
                <div class="train1 trainGrid">
                    <div class="info">
                        <div class="infoLeftBar"></div>
                        <div class="infoContent"><h2>Aret Suppelementary</h2></div>
                    </div>
                    <div class="time flex"><h1>15:16</h1></div>
                    <div class="name tabContent">
                        <b>Saint-Quentin</b>
                        <p>TER | 747474</p></div>
                    <div class="volume flex">
                        <b>voie</b>
                        <h1>15</h1>
                    </div>
                </div>
            </div>
            <div class="next nextDeparture" listner="true"></div>
        </div>
    `)
    }   
    else {
    var arrival = document.querySelector(".arrival")
    arrival.insertAdjacentHTML('beforeend', `
        <div class="train1 trainGrid">
            <div class="info">
                <div class="infoLeftBar"></div>
                <div class="infoContent"><h2>Aret Suppelementary</h2></div>
            </div>
            <div class="time flex"><h1>15:16</h1></div>
            <div class="name tabContent">
                <b>Saint-Quentin</b>
                <p>TER | 747474</p></div>
            <div class="volume flex">
                <b>voie</b>
                <h1>15</h1>
            </div>
        </div>
    `)
    var departure = document.querySelector(".departure")
    departure.insertAdjacentHTML('beforeend', `
        <div class="train1 trainGrid">
            <div class="info">
                <div class="infoLeftBar"></div>
                <div class="infoContent"><h2>Aret Suppelementary</h2></div>
            </div>
            <div class="time flex"><h1>15:16</h1></div>
            <div class="name tabContent">
                <b>Saint-Quentin</b>
                <p>TER | 747474</p></div>
            <div class="volume flex">
                <b>voie</b>
                <h1>15</h1>
            </div>
        </div>
    `)
}





}

var toggleTab = (e) => {
    var tab1 = [];

        for (let i = 0; i < 4; i++) {
            tab1.push(
                tr1 = {
                    name:`i'm one ${i+1}`,
                    time: `${Math.ceil(Math.random()*12)}:${Math.ceil(Math.random()*61)}`,
                    trainNumber: Math.ceil(Math.random()*1000),
                    volume: Math.ceil(Math.random()*60),
                },
            )            
        }
    if(e.currentTarget.id === 'tab1') 
    {
        //fetch tab 1 data here
        
        inner.innerHTML = "";
        // arrival.innerHTML = " "
        tab1.forEach((element, index)=> {
            // console.log(index+1 + "times")
            htmlMakeUp(index, element.name, element.time, element.trainNumber, element.volume)
            index++;
        })
       
        // console.log('tab1 runnimg')
        let carousels = document.querySelector('.image-carousel');
        let bubbles = document.querySelector('.bubbles');
        // let next = document.querySelector('.next');
        // let prev = document.querySelector('.prev')
        // console.log(next.attributes)
        // let listener = next.getAttribute('listener') === 'true'
        // console.log(next)
        // console.log(sliderFn.nextFn)
        console.log(typeof(prevFn))
        prevFn()
        nextFn()
        if(!bubbles) {
            carousels.insertAdjacentHTML('afterend', `
            <div class="bubbles"></div>
            `)
            // console.log('event listners placing')
            sliderFn()
        }
    }   
    else if(e.currentTarget.id === 'tab2')
    {
        //fetch tab 2 data here
        inner.innerHTML = "";
        var bubbles = document.querySelector('.bubbles')
        if(bubbles) bubbles.remove()
        // tab1.forEach((element, index)=> {
            // console.log(index+1 + "times")
            // htmlMakeUp(index, element.name, element.time, element.trainNumber, element.volume)
            // index++;
            inner.style.left="0"
            inner.insertAdjacentHTML('afterbegin', `
            <div class="train departure ">
                <div class="train1 trainGrid">
                    <div class="info">
                        <div class="infoLeftBar"></div>
                        <div class="infoContent"><h2>Aret Suppelementary</h2></div>
                    </div>
                    <div class="time flex"><h1>15:16</h1></div>
                    <div class="name tabContent">
                        <b>Saint-Quentin</b>
                        <p>TER | 747474</p>
                    </div>
                    <div class="volume flex">
                        <b>voie</b>
                        <h1>15</h1>
                    </div>
                </div>
            </div>
            `)
        }
        else if(e.currentTarget.id === 'tab3')
        {
        //fetch tab 3 work here
        inner.style.left="0"
        inner.innerHTML = "";
        var bubbles = document.querySelector('.bubbles')
        if(bubbles) bubbles.remove()
        inner.insertAdjacentHTML('afterbegin', `
        <div class="train departure ">
            <div class="train1 trainGrid">
                <div class="info">
                    <div class="infoLeftBar"></div>
                    <div class="infoContent"><h2>Aret Suppelementary</h2></div>
                </div>
                <div class="time flex"><h1>15:16</h1></div>
                <div class="name tabContent">
                    <b>Saint-Quentin</b>
                    <p>TER | 747474</p></div>
                <div class="volume flex">
                    <b>voie</b>
                    <h1>15</h1>
                </div>
            </div>
        </div>
        `)
    }
        
}



var sliderFn = () => {
[].forEach.call(carousels, function (c) {
        let next = c.querySelector('.next'),
        prev = c.querySelector('.prev'),
        bubblesContainer = document.querySelector('.bubbles'),
        inner = c.querySelector('.inner'),
        imgs = inner.querySelectorAll('.train'),
        // imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 90,
        bubbles = [];
        
        for (let i = 0; i < imgs.length; i++) {
            let b = document.createElement('span');
            b.classList.add('bubble');
            bubblesContainer.appendChild(b);
            bubbles.push(b);
            
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
        

        
        prevFn = () => {
            prev.addEventListener('click', function () {
                console.log('prev')
                currentImageIndex--;
                
                if (currentImageIndex < 0) {
                    currentImageIndex = imgs.length - 1;
                }
                
                switchImg();
            });
        }
        prevFn();
        
        nextFn = () => {
            next.addEventListener('click', function () {

                console.log('next')
                currentImageIndex++;
                
                if (currentImageIndex >= imgs.length) {
                    currentImageIndex = 0;
                }

                switchImg();
            });
        }
        nextFn();

        
        switchImg();
    });
}

tab.forEach(element => {
    element.addEventListener('click', (e) => {toggleTab(e); })
}); 

window.onload = () => {
    console.log('on load')
    sliderFn()
}