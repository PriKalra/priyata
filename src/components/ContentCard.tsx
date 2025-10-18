import { ExternalLink, Mic } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AudioPlayer from '@/components/AudioPlayer';

interface ContentItem {
  type: string;
  title: string;
  excerpt: string;
  link: string;
  source: string;
  date: string;
  size: string;
  audioLength?: string;
  audioUrl?: string;
  image?: string;
  views?: number;
}

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard = ({ item }: ContentCardProps) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2",
    small: "md:col-span-1"
  };

  return (
    <Card
      className={`group relative p-6 md:p-8 bg-card border-border hover:border-gray-400 transition-all duration-[400ms] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer overflow-hidden rounded-2xl before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-foreground before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100 ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full flex flex-col"
        onClick={(e) => {
          if (item.audioUrl) {
            e.preventDefault();
          }
        }}
      >
        {/* Background Image for Audio Posts */}
        {item.type === "audio" && item.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-300 grayscale"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        )}
        
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs font-normal bg-secondary/30">
              {item.source}
            </Badge>
            {item.type === "audio" && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Mic className="h-3.5 w-3.5" />
                <span>{item.audioLength}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground/90 transition-colors line-clamp-3">
            {item.title}
          </h3>
          
          <p className={`text-muted-foreground text-sm mb-3 flex-grow ${item.size === 'large' ? 'line-clamp-4' : 'line-clamp-2'}`}>
            {item.excerpt}
          </p>

          {/* Audio Player */}
          {item.type === "audio" && item.audioUrl && (
            <div onClick={(e) => e.stopPropagation()}>
              <AudioPlayer audioUrl={item.audioUrl} title={item.title} />
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-foreground/70 text-xs group-hover:gap-1.5 gap-1 transition-all">
              {item.type === "audio" ? "Listen" : "Read"}
              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            {item.views && (
              <span className="text-xs text-muted-foreground/70">
                {item.views} views
              </span>
            )}
          </div>
        </div>
      </a>
    </Card>
  );
};

export default ContentCard;
