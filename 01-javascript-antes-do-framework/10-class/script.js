/* 
  Classe => serve para organizar o código em pequenos objetos com métodos/funções e propriedades, a fim de realizar uma tarefa específica (por exemplo, criar um scroll suave na página).

  - constructor = onde se tem as principais propriedades da classe, é o código que é executado logo quando uma classe começa;
  - uma classe é executada como se fosse uma função, porém com o "new" na frente = new className();
  - const scroll = new SmoothScroll() = cria um objeto do tipo da classe, nesse caso, SmoothScroll;
  - "a[href^='#']" = todo "a" que tenha o atributo "href", que comece com (^=) uma '#';
  - depois do construtor adiciona-se os métodos/funções;
*/

class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links)
    this.addClickEvent()
  }
  handleClick(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    })
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", this.handleClick)
    })
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    super(links) // tem que pegar as propriedades do construtor anterior, inclusive o seu argumento (links)
    
    this.sectionElements = document.querySelectorAll(sections)
    this.handleScroll = this.handleScroll.bind(this) // força o método handleScroll a ter o this referenciando a classe "ActiveSmoothScroll" como um todo, se não for assim, ele pega seu próprio this
    this.handleScroll()
    this.activeNavScroll()
  }
  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add("active")
      } else {
        this.linkElements[i].classList.remove("active")
      }
    })
  }
  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll)
  }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", "section")

// console.log(scroll.linkElements)
