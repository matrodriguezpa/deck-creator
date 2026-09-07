const CARDS = [{"name": "Cannon Cart", "slug": "cannon-cart"}, {"name": "Zappies", "slug": "zappies"}, {"name": "Rascals", "slug": "rascals"}, {"name": "Mortar Evolution", "slug": "mortar-evolution"}, {"name": "Battle Ram Evolution", "slug": "battle-ram-evolution"}, {"name": "Mother Witch", "slug": "mother-witch"}, {"name": "Hero Tombstone", "slug": "hero-tombstone"}, {"name": "Bowler", "slug": "bowler"}, {"name": "Barbarian Barrel", "slug": "barbarian-barrel"}, {"name": "Inferno Dragon Evolution", "slug": "inferno-dragon-evolution"}, {"name": "Baby Dragon Evolution", "slug": "baby-dragon-evolution"}, {"name": "Bandit", "slug": "bandit"}, {"name": "Giant Skeleton", "slug": "giant-skeleton"}, {"name": "Heal Spirit", "slug": "heal-spirit"}, {"name": "Minion Horde Evolution", "slug": "minion-horde-evolution"}, {"name": "Hero Goblins", "slug": "hero-goblins"}, {"name": "Goblin Cage Evolution", "slug": "goblin-cage-evolution"}, {"name": "Skeleton Dragons", "slug": "skeleton-dragons"}, {"name": "Zap Evolution", "slug": "zap-evolution"}, {"name": "Goblin Giant Evolution", "slug": "goblin-giant-evolution"}, {"name": "Skeleton Barrel Evolution", "slug": "skeleton-barrel-evolution"}, {"name": "Vines", "slug": "vines"}, {"name": "Royal Ghost Evolution", "slug": "royal-ghost-evolution"}, {"name": "Royal Recruits Evolution", "slug": "royal-recruits-evolution"}, {"name": "Flying Machine", "slug": "flying-machine"}, {"name": "Freeze", "slug": "freeze"}, {"name": "Tornado", "slug": "tornado"}, {"name": "Graveyard", "slug": "graveyard"}, {"name": "Elixir Collector", "slug": "elixir-collector"}, {"name": "Giant", "slug": "giant"}, {"name": "Lava Hound", "slug": "lava-hound"}, {"name": "Dark Prince", "slug": "dark-prince"}, {"name": "Hero Giant", "slug": "hero-giant"}, {"name": "Skeleton Army Evolution", "slug": "skeleton-army-evolution"}, {"name": "Minions", "slug": "minions"}, {"name": "Goblinstein", "slug": "goblinstein"}, {"name": "Hero Balloon", "slug": "hero-balloon"}, {"name": "Knight Evolution", "slug": "knight-evolution"}, {"name": "Elite Barbarians Evolution", "slug": "elite-barbarians-evolution"}, {"name": "Night Witch", "slug": "night-witch"}, {"name": "Three Musketeers", "slug": "three-musketeers"}, {"name": "Skeleton King", "slug": "skeleton-king"}, {"name": "Ice Wizard", "slug": "ice-wizard"}, {"name": "Golem", "slug": "golem"}, {"name": "Goblin Demolisher", "slug": "goblin-demolisher"}, {"name": "Suspicious Bush", "slug": "suspicious-bush"}, {"name": "Hero Barbarian Barrel", "slug": "hero-barbarian-barrel"}, {"name": "Lumberjack Evolution", "slug": "lumberjack-evolution"}, {"name": "Royal Ghost", "slug": "royal-ghost"}, {"name": "Phoenix", "slug": "phoenix"}, {"name": "Sparky", "slug": "sparky"}, {"name": "Goblin Cage", "slug": "goblin-cage"}, {"name": "P.E.K.K.A", "slug": "pekka"}, {"name": "Hero Bowler", "slug": "hero-bowler"}, {"name": "Electro Dragon Evolution", "slug": "electro-dragon-evolution"}, {"name": "Electro Wizard", "slug": "electro-wizard"}, {"name": "Rage", "slug": "rage"}, {"name": "Bomber", "slug": "bomber"}, {"name": "Hero Dark Prince", "slug": "hero-dark-prince"}, {"name": "Fireball", "slug": "fireball"}, {"name": "Golden Knight", "slug": "golden-knight"}, {"name": "Royal Hogs", "slug": "royal-hogs"}, {"name": "Tombstone", "slug": "tombstone"}, {"name": "Tower Princess", "slug": "tower-princess"}, {"name": "Lumberjack", "slug": "lumberjack"}, {"name": "Zap", "slug": "zap"}, {"name": "Balloon", "slug": "balloon"}, {"name": "Hero Mega Minion", "slug": "hero-mega-minion"}, {"name": "Archer Queen", "slug": "archer-queen"}, {"name": "Bomber Evolution", "slug": "bomber-evolution"}, {"name": "Electro Giant", "slug": "electro-giant"}, {"name": "P.E.K.K.A Evolution", "slug": "pekka-evolution"}, {"name": "Hero Wizard", "slug": "hero-wizard"}, {"name": "Bats Evolution", "slug": "bats-evolution"}, {"name": "Furnace", "slug": "furnace"}, {"name": "Mega Minion", "slug": "mega-minion"}, {"name": "Barbarians Evolution", "slug": "barbarians-evolution"}, {"name": "Ice Golem", "slug": "ice-golem"}, {"name": "Lightning", "slug": "lightning"}, {"name": "Giant Snowball", "slug": "giant-snowball"}, {"name": "Arrows", "slug": "arrows"}, {"name": "Goblin Curse", "slug": "goblin-curse"}, {"name": "Goblin Gang", "slug": "goblin-gang"}, {"name": "Bomb Tower", "slug": "bomb-tower"}, {"name": "Prince", "slug": "prince"}, {"name": "Hero Mini P.E.K.K.A", "slug": "hero-mini-pekka"}, {"name": "Rune Giant", "slug": "rune-giant"}, {"name": "X-Bow", "slug": "x-bow"}, {"name": "Guards", "slug": "guards"}, {"name": "Goblin Barrel Evolution", "slug": "goblin-barrel-evolution"}, {"name": "Giant Snowball Evolution", "slug": "giant-snowball-evolution"}, {"name": "Musketeer Evolution", "slug": "musketeer-evolution"}, {"name": "Poison", "slug": "poison"}, {"name": "Royal Hogs Evolution", "slug": "royal-hogs-evolution"}, {"name": "Berserker", "slug": "berserker"}, {"name": "Royal Chef", "slug": "royal-chef"}, {"name": "Princess", "slug": "princess"}, {"name": "Mighty Miner", "slug": "mighty-miner"}, {"name": "Cannon Evolution", "slug": "cannon-evolution"}, {"name": "Executioner Evolution", "slug": "executioner-evolution"}, {"name": "Royal Recruits", "slug": "royal-recruits"}, {"name": "Goblins", "slug": "goblins"}, {"name": "Baby Dragon", "slug": "baby-dragon"}, {"name": "Wizard Evolution", "slug": "wizard-evolution"}, {"name": "Furnace Evolution", "slug": "furnace-evolution"}, {"name": "Mini P.E.K.K.A", "slug": "mini-pekka"}, {"name": "Hero Knight", "slug": "hero-knight"}, {"name": "Barbarians", "slug": "barbarians"}, {"name": "Earthquake", "slug": "earthquake"}, {"name": "Archers Evolution", "slug": "archers-evolution"}, {"name": "Miner", "slug": "miner"}, {"name": "Skeletons Evolution", "slug": "skeletons-evolution"}, {"name": "Spirit Empress", "slug": "spirit-empress"}, {"name": "Goblin Hut", "slug": "goblin-hut"}, {"name": "Dart Goblin", "slug": "dart-goblin"}, {"name": "Fisherman", "slug": "fisherman"}, {"name": "Spear Goblins", "slug": "spear-goblins"}, {"name": "Hero Ice Golem", "slug": "hero-ice-golem"}, {"name": "Ram Rider", "slug": "ram-rider"}, {"name": "Skeletons", "slug": "skeletons"}, {"name": "Wall Breakers Evolution", "slug": "wall-breakers-evolution"}, {"name": "Hunter", "slug": "hunter"}, {"name": "Elixir Golem", "slug": "elixir-golem"}, {"name": "Battle Ram", "slug": "battle-ram"}, {"name": "Witch Evolution", "slug": "witch-evolution"}, {"name": "Mega Knight", "slug": "mega-knight"}, {"name": "Wall Breakers", "slug": "wall-breakers"}, {"name": "Electro Spirit", "slug": "electro-spirit"}, {"name": "Ice Spirit", "slug": "ice-spirit"}, {"name": "Hero Magic Archer", "slug": "hero-magic-archer"}, {"name": "Inferno Tower", "slug": "inferno-tower"}, {"name": "Princess Evolution", "slug": "princess-evolution"}, {"name": "Monk", "slug": "monk"}, {"name": "Inferno Dragon", "slug": "inferno-dragon"}, {"name": "Goblin Drill Evolution", "slug": "goblin-drill-evolution"}, {"name": "The Log", "slug": "the-log"}, {"name": "Hero Berserker", "slug": "hero-berserker"}, {"name": "Cannoneer", "slug": "cannoneer"}, {"name": "Battle Healer", "slug": "battle-healer"}, {"name": "Hero Valkyrie", "slug": "hero-valkyrie"}, {"name": "Magic Archer", "slug": "magic-archer"}, {"name": "Knight", "slug": "knight"}, {"name": "Mega Knight Evolution", "slug": "mega-knight-evolution"}, {"name": "Hero Musketeer", "slug": "hero-musketeer"}, {"name": "Royal Giant Evolution", "slug": "royal-giant-evolution"}, {"name": "Bats", "slug": "bats"}, {"name": "Cannon", "slug": "cannon"}, {"name": "Musketeer", "slug": "musketeer"}, {"name": "Skeleton Army", "slug": "skeleton-army"}, {"name": "Dagger Duchess", "slug": "dagger-duchess"}, {"name": "Boss Bandit", "slug": "boss-bandit"}, {"name": "Hog Rider", "slug": "hog-rider"}, {"name": "Royal Delivery", "slug": "royal-delivery"}, {"name": "Mortar", "slug": "mortar"}, {"name": "Void", "slug": "void"}, {"name": "Executioner", "slug": "executioner"}, {"name": "Rocket", "slug": "rocket"}, {"name": "Clone", "slug": "clone"}, {"name": "Mirror", "slug": "mirror"}, {"name": "Valkyrie Evolution", "slug": "valkyrie-evolution"}, {"name": "Little Prince", "slug": "little-prince"}, {"name": "Firecracker Evolution", "slug": "firecracker-evolution"}, {"name": "Barbarian Hut", "slug": "barbarian-hut"}, {"name": "Hunter Evolution", "slug": "hunter-evolution"}, {"name": "Fire Spirit", "slug": "fire-spirit"}, {"name": "Goblin Machine", "slug": "goblin-machine"}, {"name": "Goblin Giant", "slug": "goblin-giant"}, {"name": "Dart Goblin Evolution", "slug": "dart-goblin-evolution"}, {"name": "Tesla Evolution", "slug": "tesla-evolution"}, {"name": "Goblin Barrel", "slug": "goblin-barrel"}, {"name": "Ronin", "slug": "ronin"}, {"name": "Minion Horde", "slug": "minion-horde"}, {"name": "Skeleton Barrel", "slug": "skeleton-barrel"}, {"name": "Archers", "slug": "archers"}, {"name": "Ice Spirit Evolution", "slug": "ice-spirit-evolution"}, {"name": "Tesla", "slug": "tesla"}, {"name": "Goblin Drill", "slug": "goblin-drill"}, {"name": "Valkyrie", "slug": "valkyrie"}, {"name": "Elite Barbarians", "slug": "elite-barbarians"}, {"name": "Firecracker", "slug": "firecracker"}, {"name": "Royal Giant", "slug": "royal-giant"}, {"name": "Witch", "slug": "witch"}, {"name": "Wizard", "slug": "wizard"}, {"name": "Electro Dragon", "slug": "electro-dragon"}];
const STORAGE_KEY = "cr-static-grid-v1";

const board = document.getElementById("board");
const sideGrid = document.getElementById("sideGrid");
const search = document.getElementById("search");
const toast = document.getElementById("toast");
const layoutTitle = document.getElementById("layoutTitle");
const status = document.getElementById("status");

let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"layout":"normal","slots":[]}');
if(!Array.isArray(state.slots)) state.slots = [];
while(state.slots.length < 9) state.slots.push(null);
state.slots = state.slots.slice(0,9);
let activeFilter = "all";
let dragging = null;
let touchDrag = null;

// --- Mazos guardados ---------------------------------------------------
const DECKS_KEY = "cr-saved-decks-v1";
let decksState = JSON.parse(localStorage.getItem(DECKS_KEY) || '{"nextNumber":1,"decks":[]}');
if(!Array.isArray(decksState.decks)) decksState.decks = [];
if(typeof decksState.nextNumber !== "number") decksState.nextNumber = decksState.decks.length + 1;
let selectedDeckId = null;

const layoutNames = {
  normal: "Normal · 3×3",
  circle: "Circular · 3×3",
  long: "2×4",
  pyramid: "Pirámide"
};

// Índice de la celda especial reservada para la carta de Torre en cada layout.
function towerSpotIndex(layout){
  if(layout==="normal" || layout==="circle") return 4;      // centro de la cuadrícula 3×3
  if(layout==="long") return 8;                              // el único elemento debajo de las 2 filas de 4
  if(layout==="pyramid") return 8;                            // la punta inferior de la pirámide
  return -1;
}

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

  const loader = document.createElement("div");
  loader.className = "img-loader";
  wrap.appendChild(loader);

  const img = document.createElement("img");
  img.src = artUrl(card);
  img.alt = card.name;
  img.loading = "lazy";
  img.crossOrigin = "anonymous";
  //img.referrerPolicy = "no-referrer";
  img.onload = ()=>{ wrap.classList.add("loaded"); };
  img.onerror = ()=>{ img.remove(); loader.remove(); wrap.style.background="linear-gradient(135deg,#30364a,#171b25)"; };
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

  let ghost = null;
  let hoverCell = null;

  function clearHover(){
    if(hoverCell){ hoverCell.classList.remove("dragover"); hoverCell = null; }
  }

  node.addEventListener("pointerdown", e=>{
    if(e.pointerType!=="touch") return;
    node.setPointerCapture?.(e.pointerId);
    touchDrag = {card, source, node};
    node.classList.add("dragging");
    ghost = createGhost(node, e.clientX, e.clientY);
  });

  node.addEventListener("pointermove", e=>{
    if(e.pointerType!=="touch" || !touchDrag || touchDrag.node!==node) return;
    e.preventDefault();
    moveGhost(ghost, e.clientX, e.clientY);
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const cell = el?.closest(".cell");
    if(cell!==hoverCell){
      clearHover();
      if(cell){ cell.classList.add("dragover"); hoverCell = cell; }
    }
  });

  function endTouchDrag(e){
    if(e.pointerType!=="touch" || !touchDrag || touchDrag.node!==node) return;
    const el = document.elementFromPoint(e.clientX,e.clientY);
    const cell = el?.closest(".cell");
    if(cell) placeIntoCell(cell, card, source, node);
    clearHover();
    if(ghost){ ghost.remove(); ghost = null; }
    node.classList.remove("dragging");
    touchDrag = null;
  }
  node.addEventListener("pointerup", endTouchDrag);
  node.addEventListener("pointercancel", endTouchDrag);
}

function createGhost(node, x, y){
  const ghost = document.createElement("div");
  ghost.className = "drag-ghost";
  const img = node.querySelector("img");
  if(img && img.isConnected){
    ghost.appendChild(img.cloneNode(true));
  } else {
    ghost.style.background = "linear-gradient(135deg,#30364a,#171b25)";
  }
  document.body.appendChild(ghost);
  moveGhost(ghost, x, y);
  return ghost;
}

function moveGhost(ghost, x, y){
  if(!ghost) return;
  ghost.style.left = x + "px";
  ghost.style.top = y + "px";
}

function createCells(layout){
  const count = 9;
  const towerIdx = towerSpotIndex(layout);
  board.innerHTML="";
  for(let i=0;i<count;i++){
    const cell=document.createElement("div");
    cell.className = "cell" + (i===towerIdx ? " tower-spot" : "");
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
    board.style.gridTemplateColumns="repeat(4,var(--card-w))";
    board.style.gridTemplateRows="repeat(3,var(--card-h))";
    // Coloca explícitamente las 8 cartas normales en 2 filas de 4...
    [...board.children].forEach((c,i)=>{
      c.style.transform="";
      if(i<8){
        c.style.gridRow = String(Math.floor(i/4)+1);
        c.style.gridColumn = String((i%4)+1);
      }
    });
    // ...y la carta de Torre centrada, sola, en la fila de abajo.
    //board.children[8].style.gridRow="3";
    //board.children[8].style.gridColumn="2 / span 2";
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
  [...board.children].forEach(c=>{
    if(c.classList.contains("tower-spot") && !c.children.length){
      const hint=document.createElement("div");
      hint.className="tower-hint";
      hint.innerHTML="🏰<span>Torre</span>";
      c.appendChild(hint);
    }
  });
  layoutTitle.textContent=layoutNames[state.layout];
}

function renderSidebar(){
  sideGrid.innerHTML="";
  filteredCards().forEach(c=>sideGrid.appendChild(makeCard(c,"sidebar")));
}

function placeIntoCell(cell, card, source, node){
  const idx=Number(cell.dataset.index);

  if(cell.classList.contains("tower-spot") && category(card)!=="tower"){
    toastMsg("Ese espacio es solo para cartas de Torre");
    return;
  }

  const from = state.slots.indexOf(card.slug);

  if(from===idx) return;

  const displaced = state.slots[idx] || null;
  if(from>=0) state.slots[from] = displaced;
  state.slots[idx] = card.slug;

  selectedDeckId = null;
  save();
  renderSlots();
  renderDeckList();
  toastMsg(card.name + " colocada");
}

function removeSlug(slug){
  const i=state.slots.indexOf(slug);
  if(i>=0){
    state.slots[i]=null;
    selectedDeckId = null;
    save();
    renderSlots();
    renderDeckList();
  }
}

function setLayout(layout){
  const oldTowerIdx = towerSpotIndex(state.layout);
  const newTowerIdx = towerSpotIndex(layout);

  state.layout=layout;
  const size = 9;
  const old = state.slots.slice(0,size);
  while(old.length<size) old.push(null);
  state.slots=old;

  // La casilla de Torre no está en el mismo índice en todos los layouts
  // (4 en Normal/Circular, 8 en 2×4/Pirámide). Si cambia de índice,
  // intercambiamos su contenido con el de la nueva casilla de Torre para
  // que la carta de Torre "viaje" con ella en vez de quedarse atrás en
  // una casilla común.
  if(oldTowerIdx>=0 && newTowerIdx>=0 && oldTowerIdx!==newTowerIdx){
    const tmp = state.slots[newTowerIdx];
    state.slots[newTowerIdx] = state.slots[oldTowerIdx];
    state.slots[oldTowerIdx] = tmp;
  }

  createCells(layout);
  updateLayoutButtons();
  selectedDeckId = null;
  save();
  renderDeckList();
}

function updateLayoutButtons(){
  document.querySelectorAll(".layout-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.layout === state.layout);
  });
}

function saveDecks(){
  localStorage.setItem(DECKS_KEY, JSON.stringify(decksState));
}

function createDeckFromBoard(){
  if(!state.slots.some(Boolean)){
    toastMsg("Agrega al menos una carta antes de guardar el mazo");
    return;
  }
  const deck = {
    id: "d" + Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    name: "Mazo " + decksState.nextNumber,
    layout: state.layout,
    slots: state.slots.slice()
  };
  decksState.nextNumber += 1;
  decksState.decks.push(deck);
  saveDecks();
  selectedDeckId = deck.id;
  renderDeckList();
  toastMsg(deck.name + " guardado");
}

function selectDeck(id){
  const deck = decksState.decks.find(d=>d.id===id);
  if(!deck) return;
  state.layout = deck.layout;
  state.slots = deck.slots.slice();
  while(state.slots.length < 9) state.slots.push(null);
  state.slots = state.slots.slice(0,9);
  createCells(state.layout);
  updateLayoutButtons();
  save();
  selectedDeckId = id;
  renderDeckList();
  toastMsg(deck.name + " cargado en el tablero");
}

function deleteDeck(id, evt){
  evt.stopPropagation();
  const deck = decksState.decks.find(d=>d.id===id);
  if(!deck) return;
  if(!confirm('¿Eliminar "' + deck.name + '"? Esta acción no se puede deshacer.')) return;
  decksState.decks = decksState.decks.filter(d=>d.id!==id);
  if(selectedDeckId===id) selectedDeckId = null;
  saveDecks();
  renderDeckList();
  toastMsg(deck.name + " eliminado");
}

function renderDeckList(){
  const list = document.getElementById("deckList");
  list.innerHTML = "";
  decksState.decks.forEach(deck=>{
    const chip = document.createElement("div");
    chip.className = "deck-chip" + (deck.id===selectedDeckId ? " active" : "");
    chip.title = "Cargar " + deck.name + " en el tablero";
    chip.addEventListener("click", ()=>selectDeck(deck.id));

    const name = document.createElement("span");
    name.className = "deck-chip-name";
    name.textContent = deck.name;
    chip.appendChild(name);

    const del = document.createElement("button");
    del.className = "deck-chip-del";
    del.textContent = "×";
    del.title = "Eliminar " + deck.name;
    del.addEventListener("click", e=>deleteDeck(deck.id, e));
    chip.appendChild(del);

    list.appendChild(chip);
  });
  const exportBtn = document.getElementById("exportImg");
  if(exportBtn) exportBtn.disabled = !selectedDeckId;
}

async function exportSelectedDeckAsImage(){
  if(!selectedDeckId){
    toastMsg("Selecciona un mazo guardado para exportarlo");
    return;
  }
  const deck = decksState.decks.find(d=>d.id===selectedDeckId);
  if(!deck){
    toastMsg("Ese mazo ya no existe");
    return;
  }
  if(typeof html2canvas === "undefined"){
    toastMsg("No se pudo cargar la herramienta de exportación");
    return;
  }
  toastMsg("Generando imagen…");
  board.classList.add("exporting");
  try{
    const canvas = await html2canvas(board, {backgroundColor:"#ffffff", useCORS:true, scale:2});
    const link = document.createElement("a");
    link.download = deck.name.toLowerCase().replace(/\s+/g,"-") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    toastMsg(deck.name + " exportado como imagen");
  }catch(err){
    console.error(err);
    toastMsg("No se pudo exportar la imagen");
  }finally{
    board.classList.remove("exporting");
  }
}

document.getElementById("newDeck").addEventListener("click", createDeckFromBoard);
document.getElementById("exportImg").addEventListener("click", exportSelectedDeckAsImage);

document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  activeFilter=b.dataset.filter;
  renderSidebar();
}));

search.addEventListener("input",renderSidebar);
document.querySelectorAll("[data-layout]").forEach(b=>b.addEventListener("click",()=>setLayout(b.dataset.layout)));

const sidebarEl = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function openSidebar(){
  sidebarEl.classList.add("open");
  sidebarBackdrop.classList.add("show");
  openSidebarBtn?.setAttribute("aria-expanded", "true");
}
function closeSidebar(){
  sidebarEl.classList.remove("open");
  sidebarBackdrop.classList.remove("show");
  openSidebarBtn?.setAttribute("aria-expanded", "false");
}

openSidebarBtn?.addEventListener("click", openSidebar);
closeSidebarBtn?.addEventListener("click", closeSidebar);
sidebarBackdrop?.addEventListener("click", closeSidebar);

document.getElementById("clear").addEventListener("click",()=>{
  state.slots = Array(9).fill(null);
  selectedDeckId = null;
  save(); renderSlots(); renderDeckList(); toastMsg("Tablero limpiado");
});

createCells(state.layout || "normal");
updateLayoutButtons();
renderSidebar();
renderDeckList();
