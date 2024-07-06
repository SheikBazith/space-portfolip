const info = document.querySelectorAll(".info")
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("info-animation", entry.isIntersecting)
    })
   
  },
  {
    threshold:0
  }
)

info.forEach(info => {
  observer.observe(info)
})

/* Skills */
const html_skill = document.querySelectorAll(".html")
const html_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("html-animation", entry.isIntersecting)
      
    })
    
  },
  {
    threshold: 0
  }
)

html_skill.forEach(html_skill => {
  html_observer.observe(html_skill)
})

const css_skill = document.querySelectorAll(".css")
const css_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("css-animation", entry.isIntersecting)
    })
  },
  {
    threshold: 0
  }
)

css_skill.forEach(css_skill => {
  css_observer.observe(css_skill)
})

const js_skill = document.querySelectorAll(".js")
const js_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("js-animation", entry.isIntersecting)
    })
  },
  {
    threshold: 0
  }
)

js_skill.forEach(js_skill => {
  js_observer.observe(js_skill)
})

const angular_skill = document.querySelectorAll(".angular")
const angular_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("angular-animation", entry.isIntersecting)
    })
  },
  {
    threshold: 0
  }
)

angular_skill.forEach(angular_skill => {
  angular_observer.observe(angular_skill)
})

const photoshop_skill = document.querySelectorAll(".photoshop")
const photoshop_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("photoshop-animation", entry.isIntersecting)
    })
  },
  {
    threshold: 0
  }
)

photoshop_skill.forEach(photoshop_skill => {
  photoshop_observer.observe(photoshop_skill)
})

/*Freelancer*/
const free_info = document.querySelectorAll(".free")
const free_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("info-animation", entry.isIntersecting)
    })
  },
)

free_info.forEach(free_info => {
  free_observer.observe(free_info)
})

/*Planet*/
const planet = document.querySelectorAll(".planet-animation")
const planet_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("planet-animation", entry.isIntersecting)
    })
  },
)

planet.forEach(planet => {
  planet_observer.observe(planet)
})

const edu = document.querySelectorAll(".education")
const edu_observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("info-animation", entry.isIntersecting)
    })
  },
)

edu.forEach(edu => {
  edu_observer.observe(edu)
})


