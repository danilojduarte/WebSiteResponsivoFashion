window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activaMenuPorSection(home)
  activaMenuPorSection(services)
  activaMenuPorSection(about)
  activaMenuPorSection(contato)
}

function activaMenuPorSection(section) {

  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundAries = sectionTopReachOrPassedTargetLine 
  && !sectionEndPassedTargetLine


  const sectionId = section.getAttribute('id')
  const menuElement = document.
  querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundAries) {
    menuElement.classList.add('active')
  }
}


function showNavOnScroll() {
  if (scrollY > 0) {
    navegacao.classList.add("scroll")
  } else {
    navegacao.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
}).reveal(`
#home, 
#home img,
#home .cards,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);



// function sayMyName() {
//   console.log(nome)
// }