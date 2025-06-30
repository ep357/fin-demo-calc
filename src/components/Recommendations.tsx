import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Star, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const recommendations = [
  {
    symbol: 'BAJFINANCE',
    name: 'Bajaj Finance',
    currentPrice: 6789.45,
    targetPrice: 7500,
    recommendation: 'STRONG BUY',
    confidence: 92,
    timeHorizon: '6-12 months',
    reasons: ['Strong Q3 results', 'Expanding digital presence', 'Healthy asset quality'],
    riskLevel: 'Medium',
    sector: 'NBFC',
    analyst: 'Priya Sharma'
  },
  {
    symbol: 'ASIANPAINT',
    name: 'Asian Paints',
    currentPrice: 3234.56,
    targetPrice: 3600,
    recommendation: 'BUY',
    confidence: 85,
    timeHorizon: '9-15 months',
    reasons: ['Rural demand recovery', 'New product launches', 'Market share gains'],
    riskLevel: 'Low',
    sector: 'Paints',
    analyst: 'Rajesh Kumar'
  },
  {
    symbol: 'WIPRO',
    name: 'Wipro Limited',
    currentPrice: 445.67,
    targetPrice: 520,
    recommendation: 'BUY',
    confidence: 78,
    timeHorizon: '12-18 months',
    reasons: ['Digital transformation deals', 'Cost optimization', 'Strategic acquisitions'],
    riskLevel: 'Medium',
    sector: 'IT Services',
    analyst: 'Anita Desai'
  },
  {
    symbol: 'MARUTI',
    name: 'Maruti Suzuki',
    currentPrice: 10234.78,
    targetPrice: 11500,
    recommendation: 'BUY',
    confidence: 88,
    timeHorizon: '6-9 months',
    reasons: ['EV transition strategy', 'Strong domestic demand', 'Export growth'],
    riskLevel: 'Medium',
    sector: 'Automobile',
    analyst: 'Vikram Singh'
  }
];

const aiInsights = [
  {
    title: 'Market Sentiment Analysis',
    insight: 'Current market sentiment is cautiously optimistic with FII inflows supporting mid-cap stocks.',
    confidence: 'High',
    impact: 'Positive'
  },
  {
    title: 'Sector Rotation Detected',
    insight: 'Money is rotating from IT to Banking and FMCG sectors based on recent fund flows.',
    confidence: 'Medium',
    impact: 'Neutral'
  },
  {
    title: 'Earnings Season Preview',
    insight: 'Q3 earnings expected to show 12-15% YoY growth with IT and Banking leading.',
    confidence: 'High',
    impact: 'Positive'
  }
];

export const Recommendations: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">AI Recommendations</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Personalized stock picks based on market analysis and your portfolio</p>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Star className="w-5 h-5 text-lime-accent" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Market Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-light-glass dark:bg-dark-glass rounded-xl p-4 border border-light-border dark:border-dark-border transition-colors duration-300"
            >
              <h4 className="font-medium text-light-text dark:text-dark-text mb-2">{insight.title}</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">{insight.insight}</p>
              <div className="flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  insight.confidence === 'High' ? 'bg-lime-accent/20 text-lime-accent' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {insight.confidence} Confidence
                </span>
                <span className={`text-xs ${
                  insight.impact === 'Positive' ? 'text-lime-accent' : 'text-light-text-secondary dark:text-dark-text-secondary'
                }`}>
                  {insight.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stock Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.symbol}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 hover:border-lime-accent/30 transition-all hover:shadow-glow duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">{rec.symbol}</h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{rec.name}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                rec.recommendation === 'STRONG BUY' ? 'bg-lime-accent/20 text-lime-accent' :
                rec.recommendation === 'BUY' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {rec.recommendation}
              </div>
            </div>

            {/* Price Info */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Current Price</p>
                <p className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">₹{rec.currentPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Target Price</p>
                <p className="text-lg font-bold text-lime-accent font-editorial">₹{rec.targetPrice}</p>
              </div>
            </div>

            {/* Upside Potential */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Upside Potential</span>
                <span className="text-lime-accent font-medium">
                  +{(((rec.targetPrice - rec.currentPrice) / rec.currentPrice) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(((rec.targetPrice - rec.currentPrice) / rec.currentPrice) * 100, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-2 bg-lime-accent rounded-full"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Confidence</p>
                <p className="font-bold text-lime-accent">{rec.confidence}%</p>
              </div>
              <div>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Risk Level</p>
                <p className={`font-medium text-sm ${
                  rec.riskLevel === 'Low' ? 'text-lime-accent' :
                  rec.riskLevel === 'Medium' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>{rec.riskLevel}</p>
              </div>
              <div>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Time Horizon</p>
                <p className="font-medium text-light-text dark:text-dark-text text-sm">{rec.timeHorizon}</p>
              </div>
            </div>

            {/* Key Reasons */}
            <div className="mb-4">
              <p className="text-sm font-medium text-light-text dark:text-dark-text mb-2">Key Investment Reasons:</p>
              <div className="space-y-1">
                {rec.reasons.map((reason, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-lime-accent" />
                    <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lime-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-light-base dark:text-dark-base">
                    {rec.analyst.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">by {rec.analyst}</span>
              </div>
              <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{rec.sector}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-lime-accent text-light-base dark:text-dark-base py-2 rounded-xl font-medium hover:shadow-glow transition-all text-sm"
              >
                Add to Watchlist
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border py-2 rounded-xl font-medium hover:border-lime-accent/30 transition-all text-sm text-light-text dark:text-dark-text"
              >
                View Analysis
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};