import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
  onTagClick: (tag: string) => void;
  selectedTags: string[];
}

const BlogCard = ({ post, onTagClick, selectedTags }: BlogCardProps) => {
  return (
    <article className="card-gradient rounded-2xl p-6 card-hover group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{post.publishedAt}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "secondary"}
            className="cursor-pointer hover:scale-105 transition-transform text-xs"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <span className="text-sm text-muted-foreground">By {post.author}</span>
        <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;