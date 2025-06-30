import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, TrendingDown, BarChart3, PieChart, Target, AlertCircle } from 'lucide-react';

const stockData = {
  'RELIANCE': {
    name: 'Reliance Industries Ltd',
    price: 2456.78,
    change: +34.56,
    changePercent: +1.43,
    marketCap: '16.6L Cr',
    pe: 24.5,
    pb: 2.1,
    roe: 12.8,
    debt: 3.2,
    recommendation: 'BUY',
    targetPrice: 2800,
    technicals: {
      rsi: 65,
      macd: 'Bullish',
      support: 2400,
      resistance: 2500
    },
    fundamentals: {
      revenue: '8.9L Cr',
      profit: '60,705 Cr',
      growth: '12.5%'
    }
  },
  'TCS': {
    name: 'Tata Consultancy Services',
    price: 3789.12,
    change: -23.45,
    changePercent: -0.61,
    marketCap: '13.8L Cr',
    pe: 28.3,
    pb: 12.4,
    roe: 44.2,
    debt: 0.1,
    recommendation: 'HOLD',
    targetPrice: 3900,
    technicals: {
      rsi: 45,
      macd: 'Bearish',
      support: 3700,
      resistance: 3850
    },
    fundamentals: {
      revenue: '2.2L Cr',
      profit: '42,867 Cr',
      growth: '8.2%'
    }
  }
};

export const StockAnalysis: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState('RELIANCE');
  const [searchQuery, setSearchQuery] = useState('');

  const stock = stockData[selectedStock as keyof typeof stockData];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Stock Analysis</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Comprehensive technical and fundamental analysis</p>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
        <input
          type="text"
          placeholder="Search stocks (e.g., RELIANCE, TCS, INFY)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-light-surface/50 dark:bg-dark-surface/50 border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
        />
      </motion.div>

      {/* Stock Selector */}
      <div className="flex space-x-4">
        {Object.keys(stockData).map((symbol) => (
          <motion.button
            key={symbol}
            onClick={() => setSelectedStock(symbol)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              selectedStock === symbol
                ? 'bg-lime-accent text-light-base dark:text-dark-base'
                : 'bg-light-glass dark:bg-dark-glass text-light-text dark:text-dark-text hover:bg-lime-accent/10'
            }`}
          >
            {symbol}
          </motion.button>
        ))}
      </div>

      {/* Stock Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-light-surface to-light-glass dark:from-dark-surface dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">{stock.name}</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">{selectedStock}</p>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            stock.recommendation === 'BUY' ? 'bg-lime-accent/20 text-lime-accent' :
            stock.recommendation === 'SELL' ? 'bg-red-500/20 text-red-400' :
            'bg-yellow-500/20 text-yellow-400'
          }`}>
            {stock.recommendation}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Current Price</p>
            <p className="text-3xl font-bold text-lime-accent font-editorial">₹{stock.price.toFixed(2)}</p>
            <p className={`text-sm ${stock.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
              {stock.change > 0 ? '+' : ''}₹{stock.change.toFixed(2)} ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%)
            </p>
          </div>
          <div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Target Price</p>
            <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">₹{stock.targetPrice}</p>
            <p className="text-sm text-lime-accent">
              +{(((stock.targetPrice - stock.price) / stock.price) * 100).toFixed(1)}% upside
            </p>
          </div>
          <div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Market Cap</p>
            <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">{stock.marketCap}</p>
          </div>
          <div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">P/E Ratio</p>
            <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">{stock.pe}</p>
          </div>
        </div>
      </motion.div>

      {/* Analysis Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technical Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
        >
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-5 h-5 text-lime-accent" />
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Technical Analysis</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">RSI (14)</span>
              <div className="flex items-center space-x-2">
                <span className="text-light-text dark:text-dark-text font-medium">{stock.technicals.rsi}</span>
                <div className={`w-2 h-2 rounded-full ${stock.technicals.rsi > 70 ? 'bg-red-400' : stock.technicals.rsi < 30 ? 'bg-lime-accent' : 'bg-yellow-400'}`} />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">MACD</span>
              <span className={`font-medium ${stock.technicals.macd === 'Bullish' ? 'text-lime-accent' : 'text-red-400'}`}>
                {stock.technicals.macd}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Support</span>
              <span className="text-light-text dark:text-dark-text font-medium">₹{stock.technicals.support}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Resistance</span>
              <span className="text-light-text dark:text-dark-text font-medium">₹{stock.technicals.resistance}</span>
            </div>
          </div>
        </motion.div>

        {/* Fundamental Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
        >
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="w-5 h-5 text-lime-accent" />
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Fundamental Analysis</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Revenue (TTM)</span>
              <span className="text-light-text dark:text-dark-text font-medium">{stock.fundamentals.revenue}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Net Profit</span>
              <span className="text-light-text dark:text-dark-text font-medium">{stock.fundamentals.profit}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Revenue Growth</span>
              <span className="text-lime-accent font-medium">{stock.fundamentals.growth}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">ROE</span>
              <span className="text-light-text dark:text-dark-text font-medium">{stock.roe}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-light-text-secondary dark:text-dark-text-secondary">Debt/Equity</span>
              <span className="text-light-text dark:text-dark-text font-medium">{stock.debt}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Investment Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gradient-to-r from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-lime-accent" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Investment Recommendation</h3>
        </div>
        
        <div className="bg-light-glass dark:bg-dark-glass rounded-xl p-4 border border-light-border dark:border-dark-border">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-lime-accent mt-0.5" />
            <div>
              <p className="text-light-text dark:text-dark-text font-medium mb-2">
                Based on our analysis, {selectedStock} shows {stock.recommendation === 'BUY' ? 'strong' : 'moderate'} potential.
              </p>
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                {stock.recommendation === 'BUY' 
                  ? `Strong fundamentals with good technical setup. Target price of ₹${stock.targetPrice} offers ${(((stock.targetPrice - stock.price) / stock.price) * 100).toFixed(1)}% upside potential.`
                  : `Mixed signals from technical and fundamental analysis. Consider holding current positions and monitor for better entry points.`
                }
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};