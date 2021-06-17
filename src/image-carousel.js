let carousels = document.getElementsByClassName('image-carousel');
let tab = document.querySelectorAll(".tab");
var inner = document.querySelector(".inner")
// var arrival = document.querySelector(".arrival")
// var departure = document.querySelector(".departure")
var nextFn = new Function();
var prevFn  = new Function();

var toggleActiveTab  = (tabIndex, tab) => {
    var tabs = document.querySelectorAll('.tab')
    var tabContent = document.querySelectorAll(".tabContent p")

    // console.log(tabs, tabContent)
    tabs.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    // tabs[tabIndex].childNodes[1].childNodes[0].style.color= "white"
    tabs[tabIndex].style.backgroundColor="#494949";
    tabs[tabIndex].style.color="white";
    tabContent.forEach(function(node){
        node.style.color="";
    });
    tabContent[tabIndex].style.color="darkgray";

}

var htmlMakeUp = (index, name, time, newTime, trainNumber, volume, tabName) => {
    console.log(tabName)
    var ArrClass = newTime ? "trainImpArr": ""
    var DeptClass = newTime ? "trainImpDept": ""
    var infoImp = newTime ? "infoImp": ""
    switch (tabName) {
        case 'tab1':
            if(index < 1){
                inner.innerHTML=""
            inner.insertAdjacentHTML('afterbegin', `
                <div>
                    <div class="train arrival">
                        <div class="train${index+1} trainGrid ${ArrClass}">
                            <div class="info">
                                <div class="infoLeftBar ${infoImp}"></div>
                                <div class="infoContent"><h2>${name}</h2></div>
                            </div>
                            <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                                <b>Saint-Quentin</b>
                                <p>TER | ${trainNumber}</p></div>
                            <div class="volume flex">
                                <b>voie</b>
                                <h1>${volume}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="prev prevArrival" ></div>
                </div>
        
                <div>
                    <div class="train departure">
                        <div class="train${index+1} trainGrid ${DeptClass}">
                            <div class="info">
                                <div class="infoLeftBar ${infoImp}"></div>
                                <div class="infoContent"><h2>${name}</h2></div>
                            </div>
                            <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                                <b>Saint-Quentin</b>
                                <p>TER | ${trainNumber}</p></div>
                            <div class="volume flex">
                                <b>voie</b>
                                <h1>${volume}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="next nextDeparture" ></div>
                </div>
            `)
            }   
            else {
            var arrival = document.querySelector(".arrival")
            arrival.insertAdjacentHTML('beforeend', `
                <div class="train${index+1} trainGrid ${ArrClass}"> 
                    <div class="info">
                        <div class="infoLeftBar ${infoImp}"></div>
                        <div class="infoContent"><h2>${name}</h2></div>
                    </div>
                    <div class="time flex"><h1>${time}</h1></div>
                    <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                    <div class="name tabContent">
                        <b>Saint-Quentin</b>
                        <p>TER | ${trainNumber}</p></div>
                    <div class="volume flex">
                        <b>voie</b>
                        <h1>${volume}</h1>
                    </div>
                </div>
            `)
            var departure = document.querySelector(".departure")
            departure.insertAdjacentHTML('beforeend', `
                <div class="train${index+1} trainGrid ${DeptClass}">
                    <div class="info">
                        <div class="infoLeftBar ${infoImp}"></div>
                        <div class="infoContent"><h2>${name}</h2></div>
                    </div>
                    <div class="time flex"><h1>${time}</h1></div>
                    <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                    <div class="name tabContent">
                        <b>Saint-Quentin</b>
                        <p>TER | ${trainNumber}</p></div>
                    <div class="volume flex">
                        <b>voie</b>
                        <h1>${volume}</h1>
                    </div>
                </div>
            `)
            }    
            break;

        case 'tab2':
            if (index < 1) {
                inner.insertAdjacentHTML('afterbegin', `
                <div class="train departure ">
                    <div class="train${index+1} trainGrid ${DeptClass}">
                        <div class="info">
                            <div class="infoLeftBar ${infoImp}"></div>
                            <div class="infoContent"><h2>${name}</h2></div>
                        </div>
                        <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                            <b>Saint-Quentin</b>
                            <p>TER | ${trainNumber}</p>
                        </div>
                        <div class="volume flex">
                            <b>voie</b>
                            <h1>${volume}</h1>
                        </div>
                    </div>
                </div>
                `)
            }
            else {
                var departure = document.querySelector(".departure")
                departure.insertAdjacentHTML("beforeend", `
                    <div class="train${index+1} trainGrid ${DeptClass}">
                        <div class="info">
                            <div class="infoLeftBar ${infoImp}"></div>
                            <div class="infoContent"><h2>${name}</h2></div>
                        </div>
                        <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                            <b>Saint-Quentin</b>
                            <p>TER | ${trainNumber}</p>
                        </div>
                        <div class="volume flex">
                            <b>voie</b>
                            <h1>${volume}</h1>
                        </div>
                    </div>
                `)
            //     document.querySelector('.departure').insertAdjacentHTML("beforeend", `
            //     <div class="train1 trainGrid">
            //     <div class="info">
            //         <div class="infoLeftBar ${infoImp}"></div>
            //         <div class="infoContent"><h2>Aret Suppelementary</h2></div>
            //     </div>
            //     <div class="time flex"><h1>15:16</h1></div>
            //     <div class="name tabContent">
            //         <b>Saint-Quentin</b>
            //         <p>TER | 747474</p>
            //     </div>
            //     <div class="volume flex">
            //         <b>voie</b>
            //         <h1>15</h1>
            //     </div>
            // </div>
            //     `)
            }
            break;
        
        case "tab3":
            if (index < 1) {
                inner.insertAdjacentHTML('afterbegin', `
                <div class="train departure ">
                    <div class="train${index+1} trainGrid ${DeptClass}">
                        <div class="info">
                            <div class="infoLeftBar ${infoImp}"></div>
                            <div class="infoContent"><h2>${name}</h2></div>
                        </div>
                        <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                            <b>Saint-Quentin</b>
                            <p>TER | ${trainNumber}</p>
                        </div>
                        <div class="volume flex">
                            <b>voie</b>
                            <h1>${volume}</h1>
                        </div>
                    </div>
                </div>
                `)
            }
            else {
                var departure = document.querySelector(".departure")
                departure.insertAdjacentHTML("beforeend", `
                    <div class="train${index+1} trainGrid ${DeptClass}">
                        <div class="info">
                            <div class="infoLeftBar ${infoImp}"></div>
                            <div class="infoContent"><h2>${name}</h2></div>
                        </div>
                        <div class="time flex"><h1>${time}</h1></div>
                            <div class="newTime flex"><h1>${newTime ? "+"+newTime+" min" : ""}</h1></div>
                            <div class="name tabContent">
                            <b>Saint-Quentin</b>
                            <p>TER | ${trainNumber}</p>
                        </div>
                        <div class="volume flex">
                            <b>voie</b>
                            <h1>${volume}</h1>
                        </div>
                    </div>
                `)
            }
            break;
        default:
            break;
    }

}

var toggleTab = (e) => {
    var tabData = [];

        for (let i = 0; i < 4; i++) {
            tabData.push(
                tr1 = {
                    name:`i'm one ${i+1}`,
                    time: `${Math.ceil(Math.random()*12)}:${Math.ceil(Math.random()*61)}`,
                    newTime: Math.floor(Math.random() * 2),
                    trainNumber: Math.ceil(Math.random()*1000),
                    volume: Math.ceil(Math.random()*60),
                },
            )            
        }
    if(e.currentTarget.id === 'tab1') 
    {
        toggleActiveTab(0, e.currentTarget)
        //fetch tab 1 data here
        inner.innerHTML = "";
        tabData.forEach((element, index, )=> {
            htmlMakeUp(index, element.name, element.time, element.newTime, element.trainNumber, element.volume, tabName = "tab1")
            index++;
        })
       
        let carousels = document.querySelector('.image-carousel');
        let bubbles = document.querySelector('.bubbles');
        
        if(!bubbles) {
            carousels.insertAdjacentHTML('afterend', `
            <div class="bubbles"></div>
            `)
        }
        sliderFn()
    }   
    else if(e.currentTarget.id === 'tab2')
    {
        toggleActiveTab(1, e.currentTarget)
        inner.innerHTML = "";
        inner.style.left="0"
        //fetch tab 2 data here
        //and replace with tabData
        tabData.forEach((element, index) => {
            htmlMakeUp(index, element.name, element.time, element.newTime, element.trainNumber, element.volume, tabName = "tab2")
            index++;
        })
        var bubbles = document.querySelector('.bubbles')
        if(bubbles) bubbles.remove()
    }
    else if(e.currentTarget.id === 'tab3')
        {
        toggleActiveTab(2, e.currentTarget)
        inner.style.left="0"
        inner.innerHTML = "";
        //fetch tab 3 work here
        //and replace with tabData
        tabData.forEach((element, index) => {
            htmlMakeUp(index, element.name, element.time, element.newTime, element.trainNumber, element.volume, tabName = "tab3")
            index++;
        })
        var bubbles = document.querySelector('.bubbles')
        if(bubbles) bubbles.remove()
    }
        
}



var sliderFn = () => {
[].forEach.call(carousels, function (c) {
        let next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        bubblesContainer = document.querySelector('.bubbles'),
        inner = document.querySelector('.inner'),
        imgs = inner.querySelectorAll('.train'),
        // imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 90;
        bubbles = [];
        bubblesContainer.innerHTML = ""
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
        switchImg();

        function switchImg () {
            inner.style.left = -width * currentImageIndex + 'vw';
            bubbles.forEach(function (b, i) {
                if (i === currentImageIndex) 
                {
                    b.classList.add('active');
                } 
                else {
                    b.classList.remove('active');
                }
            });
        }
        
        prev.addEventListener('click', function () {
            currentImageIndex--;

            if (currentImageIndex < 0) {
                currentImageIndex = imgs.length - 1;
            }
            
            switchImg();

        });

    
        next.addEventListener('click', function () {

            currentImageIndex++;
            
            if (currentImageIndex >= imgs.length) {
                currentImageIndex = 0;
            }

            switchImg();
        });
        
        switchImg();
    });
}

tab.forEach(element => {
    element.addEventListener('click', (e) => {toggleTab(e); })
}); 

window.onload = () => {
    sliderFn()
}