import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Clock, ExternalLink, Filter } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'RBI Keeps Repo Rate Unchanged at 6.5%, Maintains Accommodative Stance',
    summary: 'Reserve Bank of India maintains status quo on interest rates, citing inflation concerns and growth momentum.',
    category: 'Policy',
    impact: 'High',
    sentiment: 'Neutral',
    time: '2 hours ago',
    source: 'Economic Times',
    relevantStocks: ['HDFCBANK', 'ICICIBANK', 'SBIN'],
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'IT Sector Shows Strong Q3 Performance, TCS and Infosys Lead Gains',
    summary: 'Major IT companies report better-than-expected quarterly results with strong deal wins and margin expansion.',
    category: 'Earnings',
    impact: 'High',
    sentiment: 'Positive',
    time: '4 hours ago',
    source: 'Business Standard',
    relevantStocks: ['TCS', 'INFY', 'WIPRO', 'HCLTECH'],
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'FII Inflows Continue for Third Consecutive Week, Focus on Banking Stocks',
    summary: 'Foreign institutional investors pump in ₹8,500 crores this week, with significant allocation to banking sector.',
    category: 'Market Flow',
    impact: 'Medium',
    sentiment: 'Positive',
    time: '6 hours ago',
    source: 'Mint',
    relevantStocks: ['HDFCBANK', 'ICICIBANK', 'KOTAKBANK'],
    imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Reliance Industries Announces Major Green Energy Investment',
    summary: 'RIL commits ₹75,000 crores for renewable energy projects over next 5 years, targeting net-zero by 2035.',
    category: 'Corporate',
    impact: 'High',
    sentiment: 'Positive',
    time: '8 hours ago',
    source: 'Reuters',
    relevantStocks: ['RELIANCE'],
    imageUrl: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    title: 'Auto Sector Faces Headwinds as Chip Shortage Persists',
    summary: 'Semiconductor shortage continues to impact production schedules for major automobile manufacturers.',
    category: 'Sector',
    impact: 'Medium',
    sentiment: 'Negative',
    time: '12 hours ago',
    source: 'Financial Express',
    relevantStocks: ['MARUTI', 'TATAMOTORS', 'M&M'],
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    title: 'SEBI Introduces New Regulations for Mutual Fund Industry',
    summary: 'Market regulator announces stricter norms for fund management and investor protection measures.',
    category: 'Regulation',
    impact: 'Medium',
    sentiment: 'Neutral',
    time: '1 day ago',
    source: 'Moneycontrol',
    relevantStocks: ['HDFCAMC', 'RELCAPITAL'],
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const categories = ['All', 'Policy', 'Earnings', 'Market Flow', 'Corporate', 'Sector', 'Regulation'];

export const MarketNews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredNews, setFilteredNews] = React.useState(newsArticles);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredNews(newsArticles);
    } else {
      setFilteredNews(newsArticles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'text-lime-accent';
      case 'Negative': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-500/20 text-red-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-lime-accent/20 text-lime-accent';
    }
  };

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
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Market News</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Stay updated with latest market developments</p>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
          <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Filter by category</span>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              selectedCategory === category
                ? 'bg-lime-accent text-light-base dark:text-dark-base'
                : 'bg-light-glass dark:bg-dark-glass text-light-text dark:text-dark-text hover:bg-lime-accent/10'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNews.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:border-lime-accent/30 transition-all hover:shadow-glow duration-300"
          >
            {/* Image */}
            <div className="h-48 bg-gradient-to-br from-lime-accent/10 to-lime-accent/5 relative overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(article.impact)}`}>
                  {article.impact} Impact
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-light-glass dark:bg-dark-glass text-light-text dark:text-dark-text">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{article.time}</span>
                </div>
                <span className={`text-sm font-medium ${getSentimentColor(article.sentiment)}`}>
                  {article.sentiment}
                </span>
              </div>

              <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial mb-3 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 line-clamp-3">
                {article.summary}
              </p>

              {/* Relevant Stocks */}
              <div className="mb-4">
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2">Relevant Stocks:</p>
                <div className="flex flex-wrap gap-1">
                  {article.relevantStocks.map((stock) => (
                    <span
                      key={stock}
                      className="px-2 py-1 bg-lime-accent/10 text-lime-accent rounded-md text-xs font-medium"
                    >
                      {stock}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
                <div className="flex items-center space-x-2">
                  <Newspaper className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                  <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{article.source}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-lime-accent hover:text-lime-accent/80 transition-colors"
                >
                  <span className="text-xs">Read More</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border px-8 py-3 rounded-xl text-light-text dark:text-dark-text hover:border-lime-accent/30 hover:text-lime-accent transition-all font-medium"
        >
          Load More News
        </motion.button>
      </motion.div>
    </div>
  );
};