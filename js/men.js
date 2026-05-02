/**
 * 50 MEN OF GOD MODULE
 * Displays profiles with stories and images
 */

const MenModule = (function() {
    let container;
    let currentFilter = 'all'; // 'all', 'Patriarchs', 'Prophets', 'Apostles', 'Pentecostal', etc.
    
    function render() {
        if (!container) return Promise.resolve('<div>Loading...</div>');
        
        const filters = [...new Set(MEN_OF_GOD.map(m => m.era))];
        
        let filteredMen = MEN_OF_GOD;
        if (currentFilter !== 'all') {
            filteredMen = MEN_OF_GOD.filter(m => m.era === currentFilter);
        }
        
        const menHtml = filteredMen.map(man => `
            <div class="men-card">
                <div class="men-card-header">
                    <div class="men-icon">${man.imageIcon || '👑'}</div>
                    <div>
                        <h3>${escapeHtml(man.name)}</h3>
                        <p class="men-epithet">${escapeHtml(man.epithet || man.era)}</p>
                    </div>
                </div>
                <div class="men-card-body">
                    <p>${escapeHtml(man.summary)}</p>
                    <div class="men-scripture">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                        ${escapeHtml(man.scripture)}
                    </div>
                </div>
            </div>
        `).join('');
        
        const filtersHtml = `
            <div class="filters-bar">
                <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All (${MEN_OF_GOD.length})</button>
                ${filters.map(f => `<button class="filter-btn ${currentFilter === f ? 'active' : ''}" data-filter="${f}">${f} (${MEN_OF_GOD.filter(m => m.era === f).length})</button>`).join('')}
            </div>
        `;
        
        const html = `
            <div class="card">
                <div class="card-header">
                    <h2>👑 50 Influential Men of God</h2>
                    <p>Heroes of the faith who changed the world for Christ</p>
                </div>
                ${filtersHtml}
                <div class="men-grid">
                    ${menHtml}
                </div>
                <div class="text-center mt-2">
                    <p><em>"Therefore, since we are surrounded by so great a cloud of witnesses..." — Hebrews 12:1</em></p>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Attach filter events
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentFilter = btn.dataset.filter;
                render();
            });
        });
        
        return Promise.resolve();
    }
    
    function init() {
        container = document.getElementById('page-container');
        if (container) render();
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    return { init, render };
})();
