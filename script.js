const grid = document.getElementById('grid'); let dragged = null;
for (let i = 0; i < 9; i++) {
    const c = document.createElement('div'); c.className = 'cell'; grid.appendChild(c);
    ['dragover', 'drop'].forEach(e => c.addEventListener(e, x => { x.preventDefault(); if (e === 'drop' && dragged) c.appendChild(dragged) }));
}

const folders = { torres: ['1.png'], heroes: ['1.png'], evos: ['1.png'], normales: ['1.png'] };

document.querySelectorAll('.card-list').forEach(list => { const f = list.dataset.folder; (folders[f] || []).forEach(file => { const i = document.createElement('img'); i.src = `cartas/${f}/${file}`; i.draggable = true; i.ondragstart = () => dragged = i; list.appendChild(i); }); });

function setLayout(type) { grid.className = `grid ${type}`; localStorage.setItem('layout', type) }

(function load() { const l = localStorage.getItem('layout'); if (l) setLayout(l) })();