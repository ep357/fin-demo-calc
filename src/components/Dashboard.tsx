import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, IndianRupee, Activity, AlertTriangle, Target } from 'lucide-react';

const marketIndices = [
  { name: 'NIFTY 50', value: 21456.78, change: +234.56, changePercent: +1.11, color: 'text-lime-accent' },
  { name: 'SENSEX', value: 71234.89, change: +789.12, changePercent: +1.12, color: 'text-lime-accent' },
  { name: 'NIFTY BANK', value: 45678.90, change: -123.45, changePercent: -0.27, color: 'text-red-400' },
  { name: 'NIFTY IT', value: 32456.78, change: +456.78, changePercent: +1.43, color: 'text-lime-accent' },
];

const topStocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.78, change: +34.56, changePercent: +1.43, recommendation: 'BUY' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3789.12, change: -23.45, changePercent: -0.61, recommendation: 'HOLD' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1567.89, change: +12.34, changePercent: +0.79, recommendation: 'BUY' },
  { symbol: 'INFY', name: 'Infosys', price: 1456.78, change: +45.67, changePercent: +3.24, recommendation: 'STRONG BUY' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 987.65, change: -5.43, changePercent: -0.55, recommendation: 'HOLD' },
];

const marketAlerts = [
  { type: 'bullish', message: 'IT sector showing strong momentum - consider increasing allocation', time: '2 hours ago' },
  { type: 'bearish', message: 'Banking stocks under pressure due to RBI policy concerns', time: '4 hours ago' },
  { type: 'neutral', message: 'Q3 earnings season begins next week - prepare for volatility', time: '6 hours ago' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Market Dashboard</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Real-time Indian stock market insights and recommendations</p>
      </motion.div>

      {/* Market Indices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketIndices.map((index, i) => (
          <motion.div
            key={index.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-lime-accent/30 transition-all hover:shadow-glow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-light-text dark:text-dark-text font-editorial">{index.name}</h3>
              <div className={`flex items-center space-x-1 ${index.color}`}>
                {index.change >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="text-sm">{index.changePercent > 0 ? '+' : ''}{index.changePercent}%</span>
              </div>
            </div>
            <div className="space-y-2">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial"
              >
                {index.value.toLocaleString('en-IN')}
              </motion.p>
              <p className={`text-sm ${index.color}`}>
                {index.change > 0 ? '+' : ''}{index.change.toFixed(2)} points
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Stocks and Market Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Stocks */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Top Stocks Today</h3>
              <Activity className="w-5 h-5 text-lime-accent" />
            </div>
            <div className="space-y-4">
              {topStocks.map((stock, index) => (
                <motion.div
                  key={stock.symbol}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-light-glass dark:hover:bg-dark-glass transition-all group duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-bold text-light-text dark:text-dark-text font-editorial">{stock.symbol}</p>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{stock.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-bold text-light-text dark:text-dark-text font-editorial">₹{stock.price.toFixed(2)}</p>
                    <p className={`text-sm ${stock.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                      {stock.change > 0 ? '+' : ''}₹{stock.change.toFixed(2)} ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%)
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    stock.recommendation === 'STRONG BUY' ? 'bg-lime-accent/20 text-lime-accent' :
                    stock.recommendation === 'BUY' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {stock.recommendation}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Market Alerts */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
          >
            <div className="flex items-center space-x-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-lime-accent" />
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Market Alerts</h3>
            </div>
            <div className="space-y-4">
              {marketAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'bullish' ? 'bg-lime-accent' :
                      alert.type === 'bearish' ? 'bg-red-400' :
                      'bg-yellow-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-light-text dark:text-dark-text">{alert.message}</p>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">{alert.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass rounded-xl hover:border-lime-accent/30 border border-light-border dark:border-dark-border transition-all"
          >
            <Target className="w-6 h-6 text-lime-accent" />
            <div className="text-left">
              <p className="font-medium text-light-text dark:text-dark-text">Get Recommendations</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">AI-powered stock picks</p>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass rounded-xl hover:border-lime-accent/30 border border-light-border dark:border-dark-border transition-all"
          >
            <TrendingUp className="w-6 h-6 text-lime-accent" />
            <div className="text-left">
              <p className="font-medium text-light-text dark:text-dark-text">Analyze Stocks</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Technical & fundamental analysis</p>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass rounded-xl hover:border-lime-accent/30 border border-light-border dark:border-dark-border transition-all"
          >
            <IndianRupee className="w-6 h-6 text-lime-accent" />
            <div className="text-left">
              <p className="font-medium text-light-text dark:text-dark-text">Track Portfolio</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Monitor your investments</p>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};