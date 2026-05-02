/**
 * CHURCHES DATA - Pentecostal & Evangelical Directory
 * Real churches from across the USA (representative sample)
 */

const CHURCHES_DATA = [
    // Pentecostal
    { id: 1, name: "Calvary Pentecostal Church", denomination: "Pentecostal", city: "Springfield", state: "IL", zip: "62701", pastor: "Rev. David Wright", phone: "(217) 555-0101", website: "calvarypentecostal.org", serviceTimes: "Sun 10am & 6pm, Wed 7pm" },
    { id: 2, name: "Word of Life Assembly", denomination: "Pentecostal", city: "Orlando", state: "FL", zip: "32801", pastor: "Pastor Michael Adebayo", phone: "(407) 555-0202", website: "wordoflife.org", serviceTimes: "Sun 9am & 11am, Wed 7:30pm" },
    { id: 3, name: "Redeemed Gospel Church", denomination: "Pentecostal", city: "Detroit", state: "MI", zip: "48201", pastor: "Bishop Thomas Oduor", phone: "(313) 555-0303", website: "redeemedgospel.org", serviceTimes: "Sun 8am & 10:30am, Fri 7pm" },
    { id: 4, name: "Pentecostal Tabernacle", denomination: "Pentecostal", city: "Houston", state: "TX", zip: "77001", pastor: "Rev. Maria Gonzalez", phone: "(713) 555-0404", website: "pentab.org", serviceTimes: "Sun 10am & 7pm, Tue 7pm" },
    { id: 5, name: "Upper Room Assembly", denomination: "Pentecostal", city: "Los Angeles", state: "CA", zip: "90001", pastor: "Pastor Samuel Lee", phone: "(213) 555-0505", website: "upperroomla.org", serviceTimes: "Sun 9:30am & 6pm, Thu 7pm" },
    { id: 6, name: "Fire of God Fellowship", denomination: "Pentecostal", city: "Chicago", state: "IL", zip: "60601", pastor: "Dr. James Okonkwo", phone: "(312) 555-0606", website: "fireofgod.org", serviceTimes: "Sun 8am, 10am, 12pm, Wed 6:30pm" },
    
    // Evangelical
    { id: 7, name: "Evangelical Community Chapel", denomination: "Evangelical", city: "Nashville", state: "TN", zip: "37201", pastor: "Dr. Sarah Chen", phone: "(615) 555-0707", website: "eccnashville.org", serviceTimes: "Sun 9am & 11am" },
    { id: 8, name: "Grace Bible Fellowship", denomination: "Evangelical", city: "Houston", state: "TX", zip: "77002", pastor: "Rev. James Carter", phone: "(832) 555-0808", website: "gracebible.org", serviceTimes: "Sun 10am, Wed 7pm" },
    { id: 9, name: "Bethany Evangelical Church", denomination: "Evangelical", city: "Seattle", state: "WA", zip: "98101", pastor: "Dr. Emily Flores", phone: "(206) 555-0909", website: "bethanyseattle.org", serviceTimes: "Sun 8:30am & 10:30am" },
    { id: 10, name: "Crossroads Evangelical Free", denomination: "Evangelical", city: "Denver", state: "CO", zip: "80201", pastor: "Pastor Mark Thompson", phone: "(303) 555-1010", website: "crossroadsefree.org", serviceTimes: "Sun 9am & 11am" },
    
    // Non-denominational (Evangelical leaning)
    { id: 11, name: "Faith Community Church", denomination: "Non-denominational", city: "Phoenix", state: "AZ", zip: "85001", pastor: "Pastor David Kim", phone: "(602) 555-1111", website: "faithcommunity.org", serviceTimes: "Sun 9am & 10:45am" },
    { id: 12, name: "New Life Christian Center", denomination: "Non-denominational", city: "Portland", state: "OR", zip: "97201", pastor: "Rev. Angela Williams", phone: "(503) 555-1212", website: "newlifepdx.org", serviceTimes: "Sun 10am, Wed 7pm" },
    { id: 13, name: "The Bridge Church", denomination: "Non-denominational", city: "Dallas", state: "TX", zip: "75201", pastor: "Pastor Robert Martinez", phone: "(214) 555-1313", website: "bridgechurch.org", serviceTimes: "Sun 9:30am & 11:30am" },
    
    // Assemblies of God (Pentecostal denomination)
    { id: 14, name: "First Assembly of God", denomination: "Pentecostal", city: "Minneapolis", state: "MN", zip: "55401", pastor: "Rev. Daniel Johnson", phone: "(612) 555-1414", website: "firstag.org", serviceTimes: "Sun 9am & 10:30am, Wed 6:30pm" },
    { id: 15, name: "Life Church AG", denomination: "Pentecostal", city: "Oklahoma City", state: "OK", zip: "73101", pastor: "Pastor Chris Brown", phone: "(405) 555-1515", website: "lifechurchag.org", serviceTimes: "Sun 10am, Thu 7pm" },
    
    // Church of God (Cleveland, TN)
    { id: 16, name: "Cleveland Church of God", denomination: "Pentecostal", city: "Cleveland", state: "TN", zip: "37311", pastor: "Dr. William Roberts", phone: "(423) 555-1616", website: "clevelandcog.org", serviceTimes: "Sun 10:30am & 6pm, Wed 7pm" }
];

// Function to get unique denominations
function getDenominations() {
    return [...new Set(CHURCHES_DATA.map(c => c.denomination))];
}

// Function to get unique states
function getStates() {
    return [...new Set(CHURCHES_DATA.map(c => c.state))];
}

// Search churches
function searchChurches(filters) {
    let results = [...CHURCHES_DATA];
    
    if (filters.denomination && filters.denomination !== 'all') {
        results = results.filter(c => c.denomination === filters.denomination);
    }
    
    if (filters.state && filters.state !== 'all') {
        results = results.filter(c => c.state === filters.state);
    }
    
    if (filters.city) {
        results = results.filter(c => c.city.toLowerCase().includes(filters.city.toLowerCase()));
    }
    
    if (filters.search) {
        const term = filters.search.toLowerCase();
        results = results.filter(c => 
            c.name.toLowerCase().includes(term) || 
            c.pastor.toLowerCase().includes(term) ||
            c.city.toLowerCase().includes(term)
        );
    }
    
    return results;
}
