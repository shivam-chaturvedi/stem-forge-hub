import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  stars: number;
  views: number;
}

interface ProjectCardProps {
  project: Project;
  onTagClick: (tag: string) => void;
  selectedTags: string[];
}

const ProjectCard = ({ project, onTagClick, selectedTags }: ProjectCardProps) => {
  return (
    <article className="card-gradient rounded-2xl overflow-hidden card-hover group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Stats overlay */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            <Star className="w-3 h-3" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            <Eye className="w-3 h-3" />
            <span>{project.views}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
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

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;