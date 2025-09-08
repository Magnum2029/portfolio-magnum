// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ====== Projetos (edite aqui para seus links reais) ======
const projects = [
  {
    title: "Agência Criativa Web",
    desc: "Site institucional responsivo com Sass + BEM.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["HTML/CSS"],
    category: "html",
    demo: "https://magnum2029.github.io/agencia-criativa-web/",
    code: "https://github.com/Magnum2029/agencia-criativa-web"
  },
  {
    title: "Catálogo de Produtos (React)",
    desc: "Componentização, formulários controlados e useEffect.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "Hooks"],
    category: "react",
    demo: "#",
    code: "https://github.com/Magnum2029"
  },
  {
    title: "Todo List TypeScript",
    desc: "Estado tipado, filtros e persistência no localStorage.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    tags: ["TypeScript", "JS"],
    category: "js",
    demo: "#",
    code: "https://github.com/Magnum2029"
  },
  {
    title: "next15-todos",
    desc: "Landing page com grid responsivo e Scroll suave.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    tags: ["HTML/CSS"],
    category: "html",
    demo: "https://github.com/Magnum2029/next15-todos.git",
    code: "https://next15-todos.vercel.app"
  },
];

// Renderizar cards
const cards = document.getElementById('cards');
function render(list){
  cards.innerHTML = list.map(p => `
    <article class="card" data-category="${p.category}">
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <p>${p.desc}</p>
      </div>
      <div class="card-actions">
        <a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener">Demo</a>
        <a class="btn" href="${p.code}" target="_blank" rel="noopener">Código</a>
      </div>
    </article>
  `).join("");
}
render(projects);

// Filtro por categoria
const chips = document.querySelectorAll(".chip");
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    const f = chip.dataset.filter;
    if (f === "all") render(projects);
    else render(projects.filter(p => p.category === f));
  });
});
