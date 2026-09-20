import React from 'react';
import { SourceDistribution } from '../../types/evidence';
import { Share2, MessageSquare, Users, Globe, Award, CheckCircle2 } from 'lucide-react';

interface SourceDiversityMeterProps {
  distribution: SourceDistribution[];
}

export const SourceDiversityMeter: React.FC<SourceDiversityMeterProps> = ({ distribution }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-3 h-3 text-[#4A5CD8]" />;
      case 'Users':
        return <Users className="w-3 h-3 text-emerald-600" />;
      case 'Globe':
        return <Globe className="w-3 h-3 text-purple-600" />;
      case 'Award':
        return <Award className="w-3 h-3 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-3 h-3 text-zinc-600" />;
    }
  };

  const totalSources = distribution.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-[#18181B] tracking-tight">
          <Share2 className="w-3.5 h-3.5 text-[#4A5CD8]" />
          <span>Source Composition ({totalSources} Total Sources)</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono-code text-[#3444B8] font-bold">
          <span>DIVERSITY: HIGH</span>
        </div>
      </div>

      {/* Multi-segmented color spectrum bar */}
      <div className="w-full h-2 rounded-full overflow-hidden flex bg-zinc-200">
        {distribution.map((item, idx) => {
          const colors = ['bg-[#4A5CD8]', 'bg-emerald-500', 'bg-purple-500', 'bg-amber-500', 'bg-rose-400'];
          const colorClass = colors[idx % colors.length];
          return (
            <div
              key={item.name}
              className={`h-full ${colorClass} transition-all duration-700`}
              style={{ width: `${item.percentage}%` }}
              title={`${item.name}: ${item.count} items (${item.percentage}%)`}
            />
          );
        })}
      </div>

      {/* Grid of source breakdown badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] font-mono-code">
        {distribution.map((item) => (
          <div
            key={item.name}
            className="p-2 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-1.5 truncate">
              {getIcon(item.iconName)}
              <span className="text-zinc-600 truncate text-[10px]">{item.name}</span>
            </div>
            <span className="text-[#18181B] font-bold text-xs ml-1 flex-shrink-0">{item.count}</span>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-zinc-500 italic">
        High source diversity confirms that evidence is not drawn from a single isolated campaign, but does not inherently prove absolute truth.
      </p>
    </div>
  );
};
