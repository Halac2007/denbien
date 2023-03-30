/*------slider-----------*/
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    arrows: 'false',
    type: 'loop',
    perPage: 1,
    autoplay: true,
    cover: false,
    interval: 5000,
    pauseOnHover: false,
  })
  splide.mount()
})

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
  console.log(e)
  const province = e.target.parentNode
  if (e.target.nodeName == 'path') {
    for (var i = 0; i < allProvinces.length; i++) {
      allProvinces[i].classList.remove('active')
    }
    province.classList.add('active')
    const provinceName = province.querySelector('title').innerHTML,
      provincePara = province.querySelector('desc')

    provinceInfo.style.left = `${e.x - 180}px`

    provinceInfo.style.top = `${e.y - 20}px`

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
