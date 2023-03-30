/*------slider-----------*/

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
  setInterval(function () {
    plusSlides(1)
  }, 5000)
}

/*-------------------------*/
const caccordContent = document.querySelectorAll('.box-show')

for (i = 0; i < caccordContent.length; i++) {
  caccordContent[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/*--------------mapvietnam----------------*/
const mapvietnam = document.getElementById('mapvietnam'),
  provinceInfo = document.getElementById('provinceInfo'),
  allProvinces = mapvietnam.querySelectorAll('g')

mapvietnam.addEventListener('mouseover', function (e) {
  const province = e.target.parentNode
  if (e.target.nodeName == 'path') {
    for (var i = 0; i < allProvinces.length; i++) {
      allProvinces[i].classList.remove('active')
    }
    province.classList.add('active')
    const provinceName = province.querySelector('title').innerHTML,
      provincePara = province.querySelector('desc')
    provinceInfo.style.left = `${e.x - 180}px`

    provinceInfo.style.top = `${e.y - 230}px`

    provinceInfo.innerHTML = ''
    provinceInfo.insertAdjacentHTML(
      'afterbegin',
      '<div class="box-total">' +
        '<div class="title">' +
        '<h3>' +
        provinceName +
        '</h3>' +
        '</div>' +
        '<div class="dest-text">' +
        ' <p>' +
        provincePara.innerHTML +
        '</p>' +
        '</div>' +
        '</div>'
    )
    provinceInfo.classList.add('show')
  }
})
