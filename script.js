const CARDS = [{"name": "Cannon Cart", "slug": "cannon-cart"}, {"name": "Zappies", "slug": "zappies"}, {"name": "Rascals", "slug": "rascals"}, {"name": "Mortar Evolution", "slug": "mortar-evolution"}, {"name": "Battle Ram Evolution", "slug": "battle-ram-evolution"}, {"name": "Mother Witch", "slug": "mother-witch"}, {"name": "Hero Tombstone", "slug": "hero-tombstone"}, {"name": "Bowler", "slug": "bowler"}, {"name": "Barbarian Barrel", "slug": "barbarian-barrel"}, {"name": "Inferno Dragon Evolution", "slug": "inferno-dragon-evolution"}, {"name": "Baby Dragon Evolution", "slug": "baby-dragon-evolution"}, {"name": "Bandit", "slug": "bandit"}, {"name": "Giant Skeleton", "slug": "giant-skeleton"}, {"name": "Heal Spirit", "slug": "heal-spirit"}, {"name": "Minion Horde Evolution", "slug": "minion-horde-evolution"}, {"name": "Hero Goblins", "slug": "hero-goblins"}, {"name": "Goblin Cage Evolution", "slug": "goblin-cage-evolution"}, {"name": "Skeleton Dragons", "slug": "skeleton-dragons"}, {"name": "Zap Evolution", "slug": "zap-evolution"}, {"name": "Goblin Giant Evolution", "slug": "goblin-giant-evolution"}, {"name": "Skeleton Barrel Evolution", "slug": "skeleton-barrel-evolution"}, {"name": "Vines", "slug": "vines"}, {"name": "Royal Ghost Evolution", "slug": "royal-ghost-evolution"}, {"name": "Royal Recruits Evolution", "slug": "royal-recruits-evolution"}, {"name": "Flying Machine", "slug": "flying-machine"}, {"name": "Freeze", "slug": "freeze"}, {"name": "Tornado", "slug": "tornado"}, {"name": "Graveyard", "slug": "graveyard"}, {"name": "Elixir Collector", "slug": "elixir-collector"}, {"name": "Giant", "slug": "giant"}, {"name": "Lava Hound", "slug": "lava-hound"}, {"name": "Dark Prince", "slug": "dark-prince"}, {"name": "Hero Giant", "slug": "hero-giant"}, {"name": "Skeleton Army Evolution", "slug": "skeleton-army-evolution"}, {"name": "Minions", "slug": "minions"}, {"name": "Goblinstein", "slug": "goblinstein"}, {"name": "Hero Balloon", "slug": "hero-balloon"}, {"name": "Knight Evolution", "slug": "knight-evolution"}, {"name": "Elite Barbarians Evolution", "slug": "elite-barbarians-evolution"}, {"name": "Night Witch", "slug": "night-witch"}, {"name": "Three Musketeers", "slug": "three-musketeers"}, {"name": "Skeleton King", "slug": "skeleton-king"}, {"name": "Ice Wizard", "slug": "ice-wizard"}, {"name": "Golem", "slug": "golem"}, {"name": "Goblin Demolisher", "slug": "goblin-demolisher"}, {"name": "Suspicious Bush", "slug": "suspicious-bush"}, {"name": "Hero Barbarian Barrel", "slug": "hero-barbarian-barrel"}, {"name": "Lumberjack Evolution", "slug": "lumberjack-evolution"}, {"name": "Royal Ghost", "slug": "royal-ghost"}, {"name": "Phoenix", "slug": "phoenix"}, {"name": "Sparky", "slug": "sparky"}, {"name": "Goblin Cage", "slug": "goblin-cage"}, {"name": "P.E.K.K.A", "slug": "pekka"}, {"name": "Hero Bowler", "slug": "hero-bowler"}, {"name": "Electro Dragon Evolution", "slug": "electro-dragon-evolution"}, {"name": "Electro Wizard", "slug": "electro-wizard"}, {"name": "Rage", "slug": "rage"}, {"name": "Bomber", "slug": "bomber"}, {"name": "Hero Dark Prince", "slug": "hero-dark-prince"}, {"name": "Fireball", "slug": "fireball"}, {"name": "Golden Knight", "slug": "golden-knight"}, {"name": "Royal Hogs", "slug": "royal-hogs"}, {"name": "Tombstone", "slug": "tombstone"}, {"name": "Tower Princess", "slug": "tower-princess"}, {"name": "Lumberjack", "slug": "lumberjack"}, {"name": "Zap", "slug": "zap"}, {"name": "Balloon", "slug": "balloon"}, {"name": "Hero Mega Minion", "slug": "hero-mega-minion"}, {"name": "Archer Queen", "slug": "archer-queen"}, {"name": "Bomber Evolution", "slug": "bomber-evolution"}, {"name": "Electro Giant", "slug": "electro-giant"}, {"name": "P.E.K.K.A Evolution", "slug": "pekka-evolution"}, {"name": "Hero Wizard", "slug": "hero-wizard"}, {"name": "Bats Evolution", "slug": "bats-evolution"}, {"name": "Furnace", "slug": "furnace"}, {"name": "Mega Minion", "slug": "mega-minion"}, {"name": "Barbarians Evolution", "slug": "barbarians-evolution"}, {"name": "Ice Golem", "slug": "ice-golem"}, {"name": "Lightning", "slug": "lightning"}, {"name": "Giant Snowball", "slug": "giant-snowball"}, {"name": "Arrows", "slug": "arrows"}, {"name": "Goblin Curse", "slug": "goblin-curse"}, {"name": "Goblin Gang", "slug": "goblin-gang"}, {"name": "Bomb Tower", "slug": "bomb-tower"}, {"name": "Prince", "slug": "prince"}, {"name": "Hero Mini P.E.K.K.A", "slug": "hero-mini-pekka"}, {"name": "Rune Giant", "slug": "rune-giant"}, {"name": "X-Bow", "slug": "x-bow"}, {"name": "Guards", "slug": "guards"}, {"name": "Goblin Barrel Evolution", "slug": "goblin-barrel-evolution"}, {"name": "Giant Snowball Evolution", "slug": "giant-snowball-evolution"}, {"name": "Musketeer Evolution", "slug": "musketeer-evolution"}, {"name": "Poison", "slug": "poison"}, {"name": "Royal Hogs Evolution", "slug": "royal-hogs-evolution"}, {"name": "Berserker", "slug": "berserker"}, {"name": "Royal Chef", "slug": "royal-chef"}, {"name": "Princess", "slug": "princess"}, {"name": "Mighty Miner", "slug": "mighty-miner"}, {"name": "Cannon Evolution", "slug": "cannon-evolution"}, {"name": "Executioner Evolution", "slug": "executioner-evolution"}, {"name": "Royal Recruits", "slug": "royal-recruits"}, {"name": "Goblins", "slug": "goblins"}, {"name": "Baby Dragon", "slug": "baby-dragon"}, {"name": "Wizard Evolution", "slug": "wizard-evolution"}, {"name": "Furnace Evolution", "slug": "furnace-evolution"}, {"name": "Mini P.E.K.K.A", "slug": "mini-pekka"}, {"name": "Hero Knight", "slug": "hero-knight"}, {"name": "Barbarians", "slug": "barbarians"}, {"name": "Earthquake", "slug": "earthquake"}, {"name": "Archers Evolution", "slug": "archers-evolution"}, {"name": "Miner", "slug": "miner"}, {"name": "Skeletons Evolution", "slug": "skeletons-evolution"}, {"name": "Spirit Empress", "slug": "spirit-empress"}, {"name": "Goblin Hut", "slug": "goblin-hut"}, {"name": "Dart Goblin", "slug": "dart-goblin"}, {"name": "Fisherman", "slug": "fisherman"}, {"name": "Spear Goblins", "slug": "spear-goblins"}, {"name": "Hero Ice Golem", "slug": "hero-ice-golem"}, {"name": "Ram Rider", "slug": "ram-rider"}, {"name": "Skeletons", "slug": "skeletons"}, {"name": "Wall Breakers Evolution", "slug": "wall-breakers-evolution"}, {"name": "Hunter", "slug": "hunter"}, {"name": "Elixir Golem", "slug": "elixir-golem"}, {"name": "Battle Ram", "slug": "battle-ram"}, {"name": "Witch Evolution", "slug": "witch-evolution"}, {"name": "Mega Knight", "slug": "mega-knight"}, {"name": "Wall Breakers", "slug": "wall-breakers"}, {"name": "Electro Spirit", "slug": "electro-spirit"}, {"name": "Ice Spirit", "slug": "ice-spirit"}, {"name": "Hero Magic Archer", "slug": "hero-magic-archer"}, {"name": "Inferno Tower", "slug": "inferno-tower"}, {"name": "Princess Evolution", "slug": "princess-evolution"}, {"name": "Monk", "slug": "monk"}, {"name": "Inferno Dragon", "slug": "inferno-dragon"}, {"name": "Goblin Drill Evolution", "slug": "goblin-drill-evolution"}, {"name": "The Log", "slug": "the-log"}, {"name": "Hero Berserker", "slug": "hero-berserker"}, {"name": "Cannoneer", "slug": "cannoneer"}, {"name": "Battle Healer", "slug": "battle-healer"}, {"name": "Hero Valkyrie", "slug": "hero-valkyrie"}, {"name": "Magic Archer", "slug": "magic-archer"}, {"name": "Knight", "slug": "knight"}, {"name": "Mega Knight Evolution", "slug": "mega-knight-evolution"}, {"name": "Hero Musketeer", "slug": "hero-musketeer"}, {"name": "Royal Giant Evolution", "slug": "royal-giant-evolution"}, {"name": "Bats", "slug": "bats"}, {"name": "Cannon", "slug": "cannon"}, {"name": "Musketeer", "slug": "musketeer"}, {"name": "Skeleton Army", "slug": "skeleton-army"}, {"name": "Dagger Duchess", "slug": "dagger-duchess"}, {"name": "Boss Bandit", "slug": "boss-bandit"}, {"name": "Hog Rider", "slug": "hog-rider"}, {"name": "Royal Delivery", "slug": "royal-delivery"}, {"name": "Mortar", "slug": "mortar"}, {"name": "Void", "slug": "void"}, {"name": "Executioner", "slug": "executioner"}, {"name": "Rocket", "slug": "rocket"}, {"name": "Clone", "slug": "clone"}, {"name": "Mirror", "slug": "mirror"}, {"name": "Valkyrie Evolution", "slug": "valkyrie-evolution"}, {"name": "Little Prince", "slug": "little-prince"}, {"name": "Firecracker Evolution", "slug": "firecracker-evolution"}, {"name": "Barbarian Hut", "slug": "barbarian-hut"}, {"name": "Hunter Evolution", "slug": "hunter-evolution"}, {"name": "Fire Spirit", "slug": "fire-spirit"}, {"name": "Goblin Machine", "slug": "goblin-machine"}, {"name": "Goblin Giant", "slug": "goblin-giant"}, {"name": "Dart Goblin Evolution", "slug": "dart-goblin-evolution"}, {"name": "Tesla Evolution", "slug": "tesla-evolution"}, {"name": "Goblin Barrel", "slug": "goblin-barrel"}, {"name": "Ronin", "slug": "ronin"}, {"name": "Minion Horde", "slug": "minion-horde"}, {"name": "Skeleton Barrel", "slug": "skeleton-barrel"}, {"name": "Archers", "slug": "archers"}, {"name": "Ice Spirit Evolution", "slug": "ice-spirit-evolution"}, {"name": "Tesla", "slug": "tesla"}, {"name": "Goblin Drill", "slug": "goblin-drill"}, {"name": "Valkyrie", "slug": "valkyrie"}, {"name": "Elite Barbarians", "slug": "elite-barbarians"}, {"name": "Firecracker", "slug": "firecracker"}, {"name": "Royal Giant", "slug": "royal-giant"}, {"name": "Witch", "slug": "witch"}, {"name": "Wizard", "slug": "wizard"}, {"name": "Electro Dragon", "slug": "electro-dragon"}];
const STORAGE_KEY = "cr-static-grid-v1";

const board = document.getElementById("board");
const sideGrid = document.getElementById("sideGrid");
const search = document.getElementById("search");
const toast = document.getElementById("toast");
const layoutTitle = document.getElementById("layoutTitle");
const status = document.getElementById("status");

let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"layout":"normal","slots":[]}');
let activeFilter = "all";
let dragging = null;
let touchDrag = null;

const layoutNames = {
  normal: "Normal · 3×3",
  circle: "Circular · 3×3",
  long: "2×8 + 1",
  pyramid: "Pirámide"
};

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  status.textContent = "Guardado automáticamente en localStorage.";
}

function toastMsg(msg){
  toast.textContent = msg;
  toast.style.display = "block";
  clearTimeout(window.__toast);
  window.__toast = setTimeout(()=>toast.style.display="none",1700);
}

// RoyaleAPI nombra los assets de forma distinta a como uno esperaría:
// - Héroes:    "hero-tombstone"      -> archivo real "tombstone-hero"
// - Evoluciones: "battle-ram-evolution" -> archivo real "battle-ram-ev1"
// Esto solo afecta el nombre de archivo de la imagen; el "slug" que usamos
// para el estado, el dataset y localStorage se deja intacto.
function artSlug(card){
  const s = card.slug;
  if (s.startsWith("hero-")) return s.slice(5) + "-hero";
  if (s.endsWith("-evolution")) return s.slice(0, -"-evolution".length) + "-ev1";
  return s;
}

function artUrl(card){
  return "https://cdn.royaleapi.com/static/img/cards-150/" + artSlug(card) + ".png";
}

function category(card){
  const n = card.name.toLowerCase();
  if (n.includes("tower") || n.includes("cannoneer") || n.includes("duchess")) return "tower";
  if (n.includes("hero ")) return "hero";
  if (n.includes(" evolution")) return "evo";
  const spells = ["arrows","barbarian barrel","clone","earthquake","fireball","freeze","giant snowball","goblin curse","lightning","poison","rage","rocket","the log","tornado","void","zap","royal delivery"];
  if (spells.includes(n)) return "spell";
  return "all";
}

function filteredCards(){
  const q = search.value.trim().toLowerCase();
  return CARDS.filter(c=>{
    const okF = activeFilter==="all" || category(c)===activeFilter;
    const okQ = !q || c.name.toLowerCase().includes(q);
    return okF && okQ;
  });
}

function makeCard(card, source="sidebar"){
  const wrap = document.createElement("div");
  wrap.className = source==="sidebar" ? "side-card" : "card";
  wrap.dataset.slug = card.slug;
  const img = document.createElement("img");
  img.src = artUrl(card);
  img.alt = card.name;
  img.loading = "lazy";
  img.crossOrigin = "anonymous";
  //img.referrerPolicy = "no-referrer";
  img.onerror = ()=>{ img.remove(); wrap.style.background="linear-gradient(135deg,#30364a,#171b25)"; };
  wrap.appendChild(img);

  if(source==="board"){
    const btn = document.createElement("button");
    btn.className = "remove";
    btn.textContent = "×";
    btn.title = "Quitar";
    btn.onclick = e => { e.stopPropagation(); removeSlug(card.slug); };
    wrap.appendChild(btn);
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = card.name;
    wrap.appendChild(name);
  }

  wireDrag(wrap, card, source);
  return wrap;
}

function wireDrag(node, card, source){
  node.draggable = true;
  node.addEventListener("dragstart", e=>{
    dragging = {card, source, node};
    node.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", card.slug);
  });
  node.addEventListener("dragend", ()=>{
    node.classList.remove("dragging");
    dragging = null;
  });

  let start = null;
  node.addEventListener("pointerdown", e=>{
    if(e.pointerType!=="touch") return;
    start = {x:e.clientX,y:e.clientY};
    node.setPointerCapture?.(e.pointerId);
    touchDrag = {card, source, node};
  });
  node.addEventListener("pointerup", e=>{
    if(e.pointerType!=="touch" || !touchDrag) return;
    const el = document.elementFromPoint(e.clientX,e.clientY);
    const cell = el?.closest(".cell");
    if(cell) placeIntoCell(cell, card, source, node);
    touchDrag = null;
  });
}

function createCells(layout){
  const count = layout==="long" ? 17 : layout==="pyramid" ? 9 : 9;
  board.innerHTML="";
  for(let i=0;i<count;i++){
    const cell=document.createElement("div");
    cell.className="cell";
    cell.dataset.index=i;
    board.appendChild(cell);
    ["dragover","drop"].forEach(evt=>{
      cell.addEventListener(evt,e=>{
        e.preventDefault();
        if(evt==="dragover") cell.classList.add("dragover");
        else {
          cell.classList.remove("dragover");
          if(dragging) placeIntoCell(cell, dragging.card, dragging.source, dragging.node);
        }
      })
    });
    cell.addEventListener("dragleave",()=>cell.classList.remove("dragover"));
  }
  applyLayout(layout);
  renderSlots();
}

function applyLayout(layout){
  board.className = "board " + layout;
  if(layout==="normal"){
    board.style.gridTemplateColumns="repeat(3,var(--card-w))";
    board.style.gridTemplateRows="repeat(3,var(--card-h))";
    [...board.children].forEach(c=>c.style.gridColumn="auto");
  } else if(layout==="circle"){
    board.style.gridTemplateColumns="repeat(3,var(--card-w))";
    board.style.gridTemplateRows="repeat(3,var(--card-h))";
    const transforms={1:"translateY(-20px)",3:"translateX(-20px)",5:"translateX(20px)",7:"translateY(20px)"};
    [...board.children].forEach((c,i)=>c.style.transform=transforms[i]||"");
  } else if(layout==="long"){
    board.style.gridTemplateColumns="repeat(8,var(--card-w))";
    board.style.gridTemplateRows="repeat(3,var(--card-h))";
    [...board.children].forEach((c,i)=>{c.style.transform=""; c.style.gridColumn="auto";});
    board.children[16].style.gridColumn="4 / span 2";
  } else if(layout==="pyramid"){
    board.style.gridTemplateColumns="repeat(5,var(--card-w))";
    board.style.gridTemplateRows="repeat(3,var(--card-h))";
    [...board.children].forEach((c,i)=>{c.style.transform=""; c.style.gridColumn="auto";});
    // 5 top, 3 middle, 1 bottom
    board.children[5].style.gridColumn="2";
    board.children[6].style.gridColumn="3";
    board.children[7].style.gridColumn="4";
    board.children[8].style.gridColumn="3";
  }
}

function renderSlots(){
  [...board.children].forEach(c=>c.innerHTML="");
  state.slots.forEach((slug,i)=>{
    if(!slug || !board.children[i]) return;
    const card=CARDS.find(c=>c.slug===slug);
    if(card) board.children[i].appendChild(makeCard(card,"board"));
  });
  layoutTitle.textContent=layoutNames[state.layout];
}

function renderSidebar(){
  sideGrid.innerHTML="";
  filteredCards().forEach(c=>sideGrid.appendChild(makeCard(c,"sidebar")));
}

function placeIntoCell(cell, card, source, node){
  const idx=Number(cell.dataset.index);
  const from = state.slots.indexOf(card.slug);

  if(from===idx) return;

  const displaced = state.slots[idx] || null;
  if(from>=0) state.slots[from] = displaced;
  state.slots[idx] = card.slug;

  save();
  renderSlots();
  toastMsg(card.name + " colocada");
}

function removeSlug(slug){
  const i=state.slots.indexOf(slug);
  if(i>=0){
    state.slots[i]=null;
    save();
    renderSlots();
  }
}

function setLayout(layout){
  state.layout=layout;
  const size = layout==="long" ? 17 : 9;
  const old = state.slots.slice(0,size);
  while(old.length<size) old.push(null);
  state.slots=old;
  createCells(layout);
  save();
}

document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  activeFilter=b.dataset.filter;
  renderSidebar();
}));

search.addEventListener("input",renderSidebar);
document.querySelectorAll("[data-layout]").forEach(b=>b.addEventListener("click",()=>setLayout(b.dataset.layout)));

document.getElementById("clear").addEventListener("click",()=>{
  state.slots = Array(state.layout==="long"?17:9).fill(null);
  save(); renderSlots(); toastMsg("Tablero limpiado");
});

createCells(state.layout || "normal");
renderSidebar();