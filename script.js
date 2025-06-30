// Portfolio data storage
let portfolio = {
    initialAmount: 0,
    startDate: null,
    holdings: []
};

// Comprehensive Indian stock database with market cap classification
const indianStocks = {
    // Large Cap Stocks (Market Cap > ₹20,000 Cr)
    'RELIANCE': { name: 'Reliance Industries Ltd', price: 2456.78, marketCap: 'Large Cap' },
    'TCS': { name: 'Tata Consultancy Services', price: 3789.12, marketCap: 'Large Cap' },
    'HDFCBANK': { name: 'HDFC Bank Ltd', price: 1567.89, marketCap: 'Large Cap' },
    'INFY': { name: 'Infosys Ltd', price: 1456.78, marketCap: 'Large Cap' },
    'ICICIBANK': { name: 'ICICI Bank Ltd', price: 987.65, marketCap: 'Large Cap' },
    'SBIN': { name: 'State Bank of India', price: 623.45, marketCap: 'Large Cap' },
    'BHARTIARTL': { name: 'Bharti Airtel Ltd', price: 876.54, marketCap: 'Large Cap' },
    'ITC': { name: 'ITC Ltd', price: 245.67, marketCap: 'Large Cap' },
    'KOTAKBANK': { name: 'Kotak Mahindra Bank', price: 1876.43, marketCap: 'Large Cap' },
    'LT': { name: 'Larsen & Toubro Ltd', price: 2345.67, marketCap: 'Large Cap' },
    'ASIANPAINT': { name: 'Asian Paints Ltd', price: 3234.56, marketCap: 'Large Cap' },
    'MARUTI': { name: 'Maruti Suzuki India Ltd', price: 10234.78, marketCap: 'Large Cap' },
    'HCLTECH': { name: 'HCL Technologies Ltd', price: 1234.56, marketCap: 'Large Cap' },
    'WIPRO': { name: 'Wipro Ltd', price: 445.67, marketCap: 'Large Cap' },
    'TATAMOTORS': { name: 'Tata Motors Ltd', price: 567.89, marketCap: 'Large Cap' },
    'AXISBANK': { name: 'Axis Bank Ltd', price: 1098.76, marketCap: 'Large Cap' },
    'BAJFINANCE': { name: 'Bajaj Finance Ltd', price: 6789.45, marketCap: 'Large Cap' },
    'NESTLEIND': { name: 'Nestle India Ltd', price: 2456.78, marketCap: 'Large Cap' },
    'HINDUNILVR': { name: 'Hindustan Unilever Ltd', price: 2567.89, marketCap: 'Large Cap' },
    'ULTRACEMCO': { name: 'UltraTech Cement Ltd', price: 8765.43, marketCap: 'Large Cap' },

    // Mid Cap Stocks (Market Cap ₹5,000-20,000 Cr)
    'GODREJCP': { name: 'Godrej Consumer Products', price: 1234.56, marketCap: 'Mid Cap' },
    'PIDILITIND': { name: 'Pidilite Industries Ltd', price: 2345.67, marketCap: 'Mid Cap' },
    'MCDOWELL-N': { name: 'United Spirits Ltd', price: 987.65, marketCap: 'Mid Cap' },
    'DABUR': { name: 'Dabur India Ltd', price: 567.89, marketCap: 'Mid Cap' },
    'MARICO': { name: 'Marico Ltd', price: 456.78, marketCap: 'Mid Cap' },
    'COLPAL': { name: 'Colgate Palmolive India', price: 1876.54, marketCap: 'Mid Cap' },
    'BRITANNIA': { name: 'Britannia Industries Ltd', price: 4567.89, marketCap: 'Mid Cap' },
    'TATACONSUM': { name: 'Tata Consumer Products', price: 876.54, marketCap: 'Mid Cap' },
    'BERGEPAINT': { name: 'Berger Paints India Ltd', price: 678.90, marketCap: 'Mid Cap' },
    'JUBLFOOD': { name: 'Jubilant FoodWorks Ltd', price: 456.78, marketCap: 'Mid Cap' },
    'MUTHOOTFIN': { name: 'Muthoot Finance Ltd', price: 1234.56, marketCap: 'Mid Cap' },
    'BAJAJFINSV': { name: 'Bajaj Finserv Ltd', price: 1567.89, marketCap: 'Mid Cap' },
    'SBILIFE': { name: 'SBI Life Insurance Co Ltd', price: 1345.67, marketCap: 'Mid Cap' },
    'HDFCLIFE': { name: 'HDFC Life Insurance Co', price: 678.90, marketCap: 'Mid Cap' },
    'ICICIPRULI': { name: 'ICICI Prudential Life', price: 567.89, marketCap: 'Mid Cap' },
    'MINDTREE': { name: 'Mindtree Ltd', price: 4567.89, marketCap: 'Mid Cap' },
    'TECHM': { name: 'Tech Mahindra Ltd', price: 1234.56, marketCap: 'Mid Cap' },
    'MPHASIS': { name: 'Mphasis Ltd', price: 2345.67, marketCap: 'Mid Cap' },
    'LTI': { name: 'L&T Infotech Ltd', price: 4567.89, marketCap: 'Mid Cap' },
    'PERSISTENT': { name: 'Persistent Systems Ltd', price: 3456.78, marketCap: 'Mid Cap' },
    'BIOCON': { name: 'Biocon Ltd', price: 234.56, marketCap: 'Mid Cap' },
    'DRREDDY': { name: 'Dr Reddys Laboratories', price: 4567.89, marketCap: 'Mid Cap' },
    'CIPLA': { name: 'Cipla Ltd', price: 1098.76, marketCap: 'Mid Cap' },
    'SUNPHARMA': { name: 'Sun Pharmaceutical Ind', price: 987.65, marketCap: 'Mid Cap' },
    'LUPIN': { name: 'Lupin Ltd', price: 876.54, marketCap: 'Mid Cap' },

    // Small Cap Stocks (Market Cap < ₹5,000 Cr)
    'DIXON': { name: 'Dixon Technologies Ltd', price: 4567.89, marketCap: 'Small Cap' },
    'ROUTE': { name: 'Route Mobile Ltd', price: 1876.54, marketCap: 'Small Cap' },
    'HAPPSTMNDS': { name: 'Happiest Minds Tech Ltd', price: 987.65, marketCap: 'Small Cap' },
    'LATENTVIEW': { name: 'Latent View Analytics', price: 456.78, marketCap: 'Small Cap' },
    'NAZARA': { name: 'Nazara Technologies Ltd', price: 876.54, marketCap: 'Small Cap' },
    'EASEMYTRIP': { name: 'Easy Trip Planners Ltd', price: 234.56, marketCap: 'Small Cap' },
    'ZOMATO': { name: 'Zomato Ltd', price: 123.45, marketCap: 'Small Cap' },
    'NYKAA': { name: 'FSN E-Commerce Ventures', price: 167.89, marketCap: 'Small Cap' },
    'PAYTM': { name: 'One 97 Communications', price: 567.89, marketCap: 'Small Cap' },
    'POLICYBZR': { name: 'PB Fintech Ltd', price: 876.54, marketCap: 'Small Cap' },
    'CARTRADE': { name: 'CarTrade Tech Ltd', price: 456.78, marketCap: 'Small Cap' },
    'DEVYANI': { name: 'Devyani International Ltd', price: 234.56, marketCap: 'Small Cap' },
    'CLEAN': { name: 'Clean Science Technology', price: 1876.54, marketCap: 'Small Cap' },
    'TATVA': { name: 'Tatva Chintan Pharma', price: 987.65, marketCap: 'Small Cap' },
    'KRSNAA': { name: 'Krsnaa Diagnostics Ltd', price: 456.78, marketCap: 'Small Cap' },
    'MEDPLUS': { name: 'Medplus Health Services', price: 876.54, marketCap: 'Small Cap' },
    'SAPPHIRE': { name: 'Sapphire Foods India Ltd', price: 1234.56, marketCap: 'Small Cap' },
    'ANUPAMRAS': { name: 'Anupam Rasayan India', price: 567.89, marketCap: 'Small Cap' },
    'ROSSARI': { name: 'Rossari Biotech Ltd', price: 876.54, marketCap: 'Small Cap' },
    'CHEMCON': { name: 'Chemcon Speciality Chem', price: 456.78, marketCap: 'Small Cap' },
    'HERANBA': { name: 'Heranba Industries Ltd', price: 234.56, marketCap: 'Small Cap' },
    'VIJAYA': { name: 'Vijaya Diagnostic Centre', price: 567.89, marketCap: 'Small Cap' },
    'METROPOLIS': { name: 'Metropolis Healthcare', price: 1876.54, marketCap: 'Small Cap' },
    'THYROCARE': { name: 'Thyrocare Technologies', price: 987.65, marketCap: 'Small Cap' },
    'LAXMIMACH': { name: 'Lakshmi Machine Works', price: 12345.67, marketCap: 'Small Cap' },
    'RAJESHEXPO': { name: 'Rajesh Exports Ltd', price: 234.56, marketCap: 'Small Cap' },
    'PCJEWELLER': { name: 'PC Jeweller Ltd', price: 23.45, marketCap: 'Small Cap' },
    'TITAN': { name: 'Titan Company Ltd', price: 2876.54, marketCap: 'Small Cap' },
    'KALYAN': { name: 'Kalyan Jewellers India', price: 123.45, marketCap: 'Small Cap' },
    'SENCO': { name: 'Senco Gold Ltd', price: 876.54, marketCap: 'Small Cap' },
    'FINEORG': { name: 'Fine Organic Industries', price: 4567.89, marketCap: 'Small Cap' },
    'SPANDANA': { name: 'Spandana Sphoorty Fin', price: 567.89, marketCap: 'Small Cap' },
    'UJJIVAN': { name: 'Ujjivan Financial Serv', price: 234.56, marketCap: 'Small Cap' },
    'CREDITACC': { name: 'Credit Access Grameen', price: 876.54, marketCap: 'Small Cap' },
    'AAVAS': { name: 'Aavas Financiers Ltd', price: 1876.54, marketCap: 'Small Cap' },
    'HOMEFIRST': { name: 'Home First Finance Co', price: 987.65, marketCap: 'Small Cap' },
    'INDIAMART': { name: 'IndiaMART InterMESH Ltd', price: 4567.89, marketCap: 'Small Cap' },
    'JUSTDIAL': { name: 'Just Dial Ltd', price: 876.54, marketCap: 'Small Cap' },
    'INFIBEAM': { name: 'Infibeam Avenues Ltd', price: 234.56, marketCap: 'Small Cap' },
    'RATEGAIN': { name: 'RateGain Travel Tech', price: 456.78, marketCap: 'Small Cap' },
    'IRCTC': { name: 'Indian Railway Catering', price: 876.54, marketCap: 'Small Cap' }
};

let filteredStocks = Object.keys(indianStocks);
let currentFilter = 'all';

// Filter stocks by market cap
function filterByMarketCap(filter) {
    currentFilter = filter;
    
    // Update button styles
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        btn.className = 'px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs font-medium transition-colors';
    });
    
    const activeBtn = document.getElementById(`filter-${filter}`);
    if (filter === 'large') {
        activeBtn.className = 'px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium';
    } else if (filter === 'mid') {
        activeBtn.className = 'px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-medium';
    } else if (filter === 'small') {
        activeBtn.className = 'px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium';
    } else {
        activeBtn.className = 'px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-xs font-medium';
    }
    
    filterStocks();
}

// Filter stocks based on search and market cap
function filterStocks() {
    const searchTerm = document.getElementById('stockSearch').value.toLowerCase();
    
    filteredStocks = Object.keys(indianStocks).filter(symbol => {
        const stock = indianStocks[symbol];
        const matchesSearch = symbol.toLowerCase().includes(searchTerm) || 
                            stock.name.toLowerCase().includes(searchTerm);
        
        let matchesFilter = true;
        if (currentFilter !== 'all') {
            const filterMap = {
                'large': 'Large Cap',
                'mid': 'Mid Cap',
                'small': 'Small Cap'
            };
            matchesFilter = stock.marketCap === filterMap[currentFilter];
        }
        
        return matchesSearch && matchesFilter;
    });
    
    updateDropdown();
}

// Show dropdown
function showDropdown() {
    document.getElementById('stockDropdown').classList.remove('hidden');
    updateDropdown();
}

// Hide dropdown with delay to allow selection
function hideDropdown() {
    setTimeout(() => {
        document.getElementById('stockDropdown').classList.add('hidden');
    }, 200);
}

// Update dropdown options
function updateDropdown() {
    const dropdown = document.getElementById('stockDropdown');
    dropdown.innerHTML = '';
    
    filteredStocks.slice(0, 20).forEach(symbol => {
        const stock = indianStocks[symbol];
        const option = document.createElement('div');
        option.className = 'stock-option cursor-pointer border-b border-gray-100 last:border-b-0';
        
        const capColor = stock.marketCap === 'Large Cap' ? 'text-blue-600' : 
                        stock.marketCap === 'Mid Cap' ? 'text-green-600' : 'text-orange-600';
        
        option.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-medium text-gray-800">${symbol}</div>
                    <div class="text-xs text-gray-500">${stock.name}</div>
                </div>
                <div class="text-right">
                    <div class="text-sm font-medium">₹${stock.price.toFixed(2)}</div>
                    <div class="text-xs ${capColor}">${stock.marketCap}</div>
                </div>
            </div>
        `;
        
        option.onclick = () => selectStock(symbol);
        dropdown.appendChild(option);
    });
    
    if (filteredStocks.length === 0) {
        dropdown.innerHTML = '<div class="p-4 text-gray-500 text-center">No stocks found</div>';
    }
}

// Select stock from dropdown
function selectStock(symbol) {
    document.getElementById('stockSearch').value = `${symbol} - ${indianStocks[symbol].name}`;
    document.getElementById('selectedStock').value = symbol;
    document.getElementById('stockDropdown').classList.add('hidden');
}

// Add stock to portfolio
function addStock() {
    const symbol = document.getElementById('selectedStock').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const purchaseDate = document.getElementById('purchaseDate').value;

    if (!symbol || !quantity || !buyPrice || !purchaseDate) {
        alert('Please fill all fields and select a stock');
        return;
    }

    const stockInfo = indianStocks[symbol];
    const stock = {
        symbol,
        name: stockInfo.name,
        marketCap: stockInfo.marketCap,
        quantity,
        buyPrice,
        purchaseDate,
        currentPrice: stockInfo.price,
        investment: quantity * buyPrice,
        currentValue: quantity * stockInfo.price,
        id: Date.now()
    };

    stock.pnl = stock.currentValue - stock.investment;
    stock.pnlPercent = ((stock.pnl / stock.investment) * 100).toFixed(2);

    portfolio.holdings.push(stock);
    updateHoldingsTable();
    clearStockForm();
    
    // Show holdings section
    document.getElementById('holdingsSection').style.display = 'block';
}

// Update holdings table
function updateHoldingsTable() {
    const tbody = document.getElementById('holdingsTable');
    tbody.innerHTML = '';

    portfolio.holdings.forEach(stock => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-100 hover:bg-gray-50';
        
        const pnlClass = stock.pnl >= 0 ? 'text-green-600' : 'text-red-600';
        const capColor = stock.marketCap === 'Large Cap' ? 'text-blue-600' : 
                        stock.marketCap === 'Mid Cap' ? 'text-green-600' : 'text-orange-600';
        
        row.innerHTML = `
            <td class="py-3 px-4">
                <div class="font-medium">${stock.symbol}</div>
                <div class="text-xs text-gray-500">${stock.name}</div>
            </td>
            <td class="py-3 px-4">
                <span class="px-2 py-1 rounded-full text-xs font-medium ${capColor} bg-opacity-10 ${
                    stock.marketCap === 'Large Cap' ? 'bg-blue-100' : 
                    stock.marketCap === 'Mid Cap' ? 'bg-green-100' : 'bg-orange-100'
                }">${stock.marketCap}</span>
            </td>
            <td class="py-3 px-4">${stock.quantity}</td>
            <td class="py-3 px-4">₹${stock.buyPrice.toFixed(2)}</td>
            <td class="py-3 px-4">₹${stock.currentPrice.toFixed(2)}</td>
            <td class="py-3 px-4">₹${stock.investment.toLocaleString('en-IN')}</td>
            <td class="py-3 px-4">₹${stock.currentValue.toLocaleString('en-IN')}</td>
            <td class="py-3 px-4 ${pnlClass}">
                ₹${stock.pnl.toLocaleString('en-IN')} (${stock.pnlPercent}%)
            </td>
            <td class="py-3 px-4">
                <button onclick="removeStock(${stock.id})" 
                        class="text-red-500 hover:text-red-700 text-sm">Remove</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Remove stock from portfolio
function removeStock(id) {
    portfolio.holdings = portfolio.holdings.filter(stock => stock.id !== id);
    updateHoldingsTable();
    
    if (portfolio.holdings.length === 0) {
        document.getElementById('holdingsSection').style.display = 'none';
        document.getElementById('analysisSection').style.display = 'none';
    }
}

// Clear stock form
function clearStockForm() {
    document.getElementById('stockSearch').value = '';
    document.getElementById('selectedStock').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('buyPrice').value = '';
    document.getElementById('purchaseDate').value = '';
}

// Calculate XIRR using Newton-Raphson method
function calculateXIRR(cashFlows, dates) {
    if (cashFlows.length !== dates.length || cashFlows.length < 2) {
        return 0;
    }

    // Initial guess
    let rate = 0.1;
    const maxIterations = 100;
    const tolerance = 1e-6;

    for (let i = 0; i < maxIterations; i++) {
        let npv = 0;
        let dnpv = 0;
        const baseDate = dates[0];

        for (let j = 0; j < cashFlows.length; j++) {
            const daysDiff = (dates[j] - baseDate) / (1000 * 60 * 60 * 24);
            const years = daysDiff / 365.25;
            
            const factor = Math.pow(1 + rate, years);
            npv += cashFlows[j] / factor;
            dnpv -= cashFlows[j] * years / (factor * (1 + rate));
        }

        if (Math.abs(npv) < tolerance) {
            return rate * 100; // Convert to percentage
        }

        if (Math.abs(dnpv) < tolerance) {
            break;
        }

        rate = rate - npv / dnpv;
    }

    return rate * 100;
}

// Calculate market cap allocation
function calculateMarketCapAllocation(totalValue) {
    const allocation = {
        'Large Cap': 0,
        'Mid Cap': 0,
        'Small Cap': 0
    };

    portfolio.holdings.forEach(stock => {
        allocation[stock.marketCap] += stock.currentValue;
    });

    return {
        large: {
            value: allocation['Large Cap'],
            percent: totalValue > 0 ? ((allocation['Large Cap'] / totalValue) * 100).toFixed(1) : 0
        },
        mid: {
            value: allocation['Mid Cap'],
            percent: totalValue > 0 ? ((allocation['Mid Cap'] / totalValue) * 100).toFixed(1) : 0
        },
        small: {
            value: allocation['Small Cap'],
            percent: totalValue > 0 ? ((allocation['Small Cap'] / totalValue) * 100).toFixed(1) : 0
        }
    };
}

// Calculate portfolio metrics
function calculatePortfolio() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const startDate = document.getElementById('startDate').value;

    if (!initialAmount || !startDate || portfolio.holdings.length === 0) {
        alert('Please enter initial amount, start date, and add at least one stock');
        return;
    }

    portfolio.initialAmount = initialAmount;
    portfolio.startDate = new Date(startDate);

    // Calculate totals
    const totalInvestment = portfolio.holdings.reduce((sum, stock) => sum + stock.investment, 0);
    const currentValue = portfolio.holdings.reduce((sum, stock) => sum + stock.currentValue, 0);
    const totalPL = currentValue - totalInvestment;
    const returnPercent = ((totalPL / totalInvestment) * 100).toFixed(2);

    // Calculate XIRR
    const cashFlows = [-totalInvestment, currentValue];
    const dates = [portfolio.startDate, new Date()];
    const xirr = calculateXIRR(cashFlows, dates);

    // Calculate days invested
    const daysInvested = Math.floor((new Date() - portfolio.startDate) / (1000 * 60 * 60 * 24));

    // Find best and worst performers
    let bestStock = { symbol: '-', pnlPercent: -Infinity };
    let worstStock = { symbol: '-', pnlPercent: Infinity };

    portfolio.holdings.forEach(stock => {
        if (parseFloat(stock.pnlPercent) > bestStock.pnlPercent) {
            bestStock = stock;
        }
        if (parseFloat(stock.pnlPercent) < worstStock.pnlPercent) {
            worstStock = stock;
        }
    });

    // Calculate market cap allocation
    const marketCapAllocation = calculateMarketCapAllocation(currentValue);

    // Calculate health score (0-100)
    let healthScore = 50; // Base score
    
    // XIRR contribution (40 points max)
    if (xirr > 15) healthScore += 40;
    else if (xirr > 10) healthScore += 30;
    else if (xirr > 5) healthScore += 20;
    else if (xirr > 0) healthScore += 10;
    else healthScore -= 10;

    // Diversification (20 points max)
    const numStocks = portfolio.holdings.length;
    if (numStocks >= 10) healthScore += 20;
    else if (numStocks >= 5) healthScore += 15;
    else if (numStocks >= 3) healthScore += 10;
    else healthScore += 5;

    // Market cap diversification bonus (10 points max)
    const hasLargeCap = marketCapAllocation.large.value > 0;
    const hasMidCap = marketCapAllocation.mid.value > 0;
    const hasSmallCap = marketCapAllocation.small.value > 0;
    const diversificationCount = [hasLargeCap, hasMidCap, hasSmallCap].filter(Boolean).length;
    healthScore += diversificationCount * 3;

    // Positive returns (20 points max)
    const positiveStocks = portfolio.holdings.filter(stock => stock.pnl > 0).length;
    const positiveRatio = positiveStocks / numStocks;
    healthScore += Math.floor(positiveRatio * 20);

    // Time factor (10 points max)
    if (daysInvested > 365) healthScore += 10;
    else if (daysInvested > 180) healthScore += 7;
    else if (daysInvested > 90) healthScore += 5;
    else healthScore += 2;

    healthScore = Math.min(100, Math.max(0, healthScore));

    // Update UI
    document.getElementById('totalInvestment').textContent = `₹${totalInvestment.toLocaleString('en-IN')}`;
    document.getElementById('currentValue').textContent = `₹${currentValue.toLocaleString('en-IN')}`;
    document.getElementById('totalPL').textContent = `₹${totalPL.toLocaleString('en-IN')}`;
    document.getElementById('xirrValue').textContent = `${xirr.toFixed(2)}%`;
    document.getElementById('returnPercent').textContent = `${returnPercent}%`;
    document.getElementById('daysInvested').textContent = daysInvested;
    document.getElementById('bestStock').textContent = `${bestStock.symbol} (+${bestStock.pnlPercent}%)`;
    document.getElementById('worstStock').textContent = `${worstStock.symbol} (${worstStock.pnlPercent}%)`;
    
    // Update market cap allocation
    document.getElementById('largeCapPercent').textContent = `${marketCapAllocation.large.percent}%`;
    document.getElementById('largeCapValue').textContent = `₹${marketCapAllocation.large.value.toLocaleString('en-IN')}`;
    document.getElementById('midCapPercent').textContent = `${marketCapAllocation.mid.percent}%`;
    document.getElementById('midCapValue').textContent = `₹${marketCapAllocation.mid.value.toLocaleString('en-IN')}`;
    document.getElementById('smallCapPercent').textContent = `${marketCapAllocation.small.percent}%`;
    document.getElementById('smallCapValue').textContent = `₹${marketCapAllocation.small.value.toLocaleString('en-IN')}`;
    
    // Update health score
    document.getElementById('healthScore').textContent = `${healthScore}/100`;
    document.getElementById('healthBar').style.width = `${healthScore}%`;
    
    // Health bar color
    const healthBar = document.getElementById('healthBar');
    if (healthScore >= 80) {
        healthBar.className = 'bg-green-500 h-4 rounded-full transition-all duration-1000';
        document.getElementById('healthDescription').textContent = 'Excellent portfolio health!';
    } else if (healthScore >= 60) {
        healthBar.className = 'bg-yellow-500 h-4 rounded-full transition-all duration-1000';
        document.getElementById('healthDescription').textContent = 'Good portfolio, room for improvement';
    } else {
        healthBar.className = 'bg-red-500 h-4 rounded-full transition-all duration-1000';
        document.getElementById('healthDescription').textContent = 'Portfolio needs attention';
    }

    // Show analysis section
    document.getElementById('analysisSection').style.display = 'block';
    
    // Smooth scroll to analysis
    document.getElementById('analysisSection').scrollIntoView({ behavior: 'smooth' });
}

// Set default date to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
    document.getElementById('purchaseDate').value = today;
    
    // Initialize dropdown
    filterStocks();
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('stockSearch');
    const dropdown = document.getElementById('stockDropdown');
    
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});