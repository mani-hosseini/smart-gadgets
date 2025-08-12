import React from 'react';
import { Instagram, MessageCircle, MessageSquare } from 'lucide-react';
import LatestArticles from './LatestArticles';

const SocialFollowBar = ({ platform, icon: Icon, followers, gradientFrom, gradientVia, gradientTo, onClick }) => (
  <button
    onClick={onClick}
    className="w-full rounded-xl p-2.5 text-white font-bold transition-transform duration-200 hover:scale-[1.01] shadow-md hover:shadow-lg ring-1 ring-white/20"
    style={{ background: gradientVia 
      ? `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientVia} 50%, ${gradientTo} 100%)` 
      : `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
  >
    <div className="flex items-center justify-between">
      <span className="text-[11px] sm:text-xs">+ دنبال کردن</span>
      <div className="flex items-center gap-3">
        <span className="text-[11px] sm:text-xs whitespace-nowrap">{followers} فالوور</span>
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <Icon size={14} className="text-white" />
        </div>
      </div>
    </div>
  </button>
);

const BlogBottomSidebar = () => {
  const socialPlatforms = [
    {
      platform: 'اینستاگرام',
      icon: Instagram,
      followers: '۷۹.۸K',
      gradientFrom: '#FF41A1',
      gradientVia: '#FF77E1',
      gradientTo: '#8B5CF6',
      onClick: () => window.open('https://instagram.com', '_blank')
    },
    {
      platform: 'تلگرام',
      icon: MessageCircle,
      followers: '۲۴.۵K',
      gradientFrom: '#14E1FF',
      gradientVia: '#38BDF8',
      gradientTo: '#2563EB',
      onClick: () => window.open('https://t.me', '_blank')
    },
    {
      platform: 'واتساپ',
      icon: MessageSquare,
      followers: '۱۱.۲K',
      gradientFrom: '#34F58A',
      gradientVia: '#22D36B',
      gradientTo: '#16B65A',
      onClick: () => window.open('https://wa.me', '_blank')
    }
  ];

  return (
    <div className="bg-[#f6f5ff] rounded-xl p-4 sm:p-5">
      {/* Latest posts list */}
      <div className="mb-6">
        <LatestArticles />
      </div>

      {/* Follow us header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-800">مارو دنبال کنید</h2>
        <span className="h-1 w-6 bg-gray-300 rounded-full" />
      </div>

      {/* Social follow bars */}
      <div className="space-y-3">
        {socialPlatforms.map((platform, index) => (
          <SocialFollowBar
            key={index}
            platform={platform.platform}
            icon={platform.icon}
            followers={platform.followers}
            gradientFrom={platform.gradientFrom}
            gradientTo={platform.gradientTo}
            onClick={platform.onClick}
          />
        ))}
      </div>

      {/* Newsletter removed per request */}
    </div>
  );
};

export default BlogBottomSidebar;

