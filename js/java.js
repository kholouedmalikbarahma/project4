let number = document.querySelectorAll('.number li')
let heroSection = document.querySelectorAll('.hero-section-image img')

console.log(number);
console.log(heroSection);

for (let index = 0; index < number.length; index++) {
    number[index].onclick = function () {
        for (let i = 0; i < heroSection.length; i++) {
            heroSection[i].classList.add('hidden-image')
            number[i].classList.remove('active')
        }

        heroSection[index].classList.remove('hidden-image')
        number[index].classList.add('active')
    }

}
let listproto = document.querySelectorAll(".list-proto li a")
let conoverlaye = document.querySelectorAll(".con-overlaye")

for (let index = 0; index < listproto.length; index++) {
    listproto[index].onclick = function () {
        let catagery = listproto[index].getAttribute('data-catogery')
        fliterItem(catagery)
    }
}

function fliterItem(catagery) {
    for (let index = 0; index < conoverlaye.length; index++) {
        //conoverlaye[index].style.display = 'none'
       // conoverlaye[index].style.opacity = '0.5'
       conoverlaye[index].style.filter = 'blur(10px)'
    }
    let catFilter = document.querySelectorAll('.con-overlaye.' + catagery)
    for (let index = 0; index < catFilter.length; index++) {
      //  catFilter[index].style.opacity = '1'
      conoverlaye[index].style.filter = 'blur(0px)'
    }

}

