import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';

export const ArticleNav: React.FC = () => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <nav className="article-nav">
      <div className="container">
        <div className="article-nav-inner">
          <button 
            className="article-nav-back" 
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
            <span>Back to Resources</span>
          </button>
          
          <div className="article-nav-actions">
            <button 
              className={`article-nav-action ${isBookmarked ? 'active' : ''}`}
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              aria-pressed={isBookmarked}
            >
              <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            
            <div className="share-wrapper">
              <button 
                className="article-nav-action"
                onClick={handleShare}
                aria-label="Share article"
              >
                <Share2 size={20} />
              </button>
              {showShareTooltip && (
                <span className="share-tooltip" role="status">Link copied!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};