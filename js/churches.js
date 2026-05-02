/**
 * CHURCHES MODULE - Find Pentecostal & Evangelical Churches
 */

const ChurchesModule = (function() {
    let container;
    let currentFilters = {
        denomination: 'all',
        state: 'all',
        city: '',
        search: ''
    };
    
    function render() {
        if (!container) return Promise.resolve('<div>Loading...</div>');
        
        const results = searchChurches(currentFilters);
        const denominations = getDenominations();
        const states = getStates();
        
        const churchesHtml = results.map(church => `
            <div class="church-card">
                <div class="church-header">
                    <h3>${escapeHtml(church.name)}</h3>
                    <span class="denomination-badge">${escapeHtml(church.denomination)}</span>
                </div>
                <div class="church-details">
                    <p><strong>📍 Location:</strong> ${escapeHtml(church.city)}, ${escapeHtml(church.state)} ${church.zip}</p>
                    <p><strong>👤 Pastor:</strong> ${escapeHtml(church.pastor)}</p>
                    <p><strong>📞 Phone:</strong> ${church.phone || 'Not listed'}</p>
                    <p><strong>⏰ Services:</strong> ${church.serviceTimes || 'Contact for times'}</p>
                    ${church.website ? `<p><strong>🌐 Website:</strong> <a href="https://${church.website}" target="_blank">${church.website}</a></p>` : ''}
                </div>
                <div class="church-actions">
                    <button class="btn btn-outline directions-btn" data-address="${escapeHtml(church.city)}, ${escapeHtml(church.state)}">
                        🗺️ Get Directions
                    </button>
                    <button class="btn btn-secondary save-church-btn" data-church="${church.id}">
                        ⭐ Save
                    </button>
                </div>
            </div>
        `).join('');
        
        const filterHtml = `
            <div class="filters-section">
                <div class="filter-group">
                    <label>Denomination:</label>
                    <select id="denominationFilter">
                        <option value="all">All Denominations</option>
                        ${denominations.map(d => `<option value="${d}" ${currentFilters.denomination === d ? 'selected' : ''}>${d}</option>`).join('')}
                    </select>
                </div>
                <div class="filter-group">
                    <label>State:</label>
                    <select id="stateFilter">
                        <option value="all">All States</option>
                        ${states.map(s => `<option value="${s}" ${currentFilters.state === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                </div>
                <div class="filter-group">
                    <label>City:</label>
                    <input type="text" id="cityFilter" placeholder="Enter city..." value="${escapeHtml(currentFilters.city)}">
                </div>
                <div class="filter-group">
                    <label>Search:</label>
                    <input type="text" id="searchFilter" placeholder="Church name or pastor..." value="${escapeHtml(currentFilters.search)}">
                </div>
                <button id="clearFiltersBtn" class="btn btn-outline">Clear Filters</button>
            </div>
        `;
        
        const html = `
            <div class="card">
                <div class="card-header">
                    <h2>⛪ Church Directory</h2>
                    <p>Find Pentecostal, Evangelical, and Spirit-filled churches near you</p>
                </div>
                ${filterHtml}
                <div class="results-count">
                    Found ${results.length} church${results.length !== 1 ? 'es' : ''}
                </div>
                <div class="church-grid">
                    ${churchesHtml || '<p class="text-center">No churches found. Try adjusting your filters.</p>'}
                </div>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Attach filter events
        document.getElementById('denominationFilter')?.addEventListener('change', (e) => {
            currentFilters.denomination = e.target.value;
            render();
        });
        
        document.getElementById('stateFilter')?.addEventListener('change', (e) => {
            currentFilters.state = e.target.value;
            render();
        });
        
        document.getElementById('cityFilter')?.addEventListener('input', (e) => {
            currentFilters.city = e.target.value;
            render();
        });
        
        document.getElementById('searchFilter')?.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            render();
        });
        
        document.getElementById('clearFiltersBtn')?.addEventListener('click', () => {
            currentFilters = { denomination: 'all', state: 'all', city: '', search: '' };
            render();
        });
        
        // Directions buttons
        document.querySelectorAll('.directions-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const address = btn.dataset.address;
                if (address) {
                    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
                }
            });
        });
        
        // Save church buttons
        document.querySelectorAll('.save-church-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const churchId = parseInt(btn.dataset.church);
                saveChurch(churchId);
            });
        });
        
        return Promise.resolve();
    }
    
    function saveChurch(churchId) {
        let saved = Storage.get('saved_churches', []);
        if (!saved.includes(churchId)) {
            saved.push(churchId);
            Storage.set('saved_churches', saved);
            App.showToast('✓ Church saved to your profile!', 'success');
        } else {
            App.showToast('This church is already saved', 'info');
        }
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
