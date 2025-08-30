import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2, Lightbulb, Users, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Technical Blogs',
      description: 'Share in-depth tutorials, project breakdowns, and technical insights with the STEM community.'
    },
    {
      icon: Code2,
      title: 'Project Showcase',
      description: 'Display your innovative projects with detailed documentation, code repositories, and live demos.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Discover cutting-edge projects across AI, IoT, Robotics, and Web Development fields.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with like-minded developers, researchers, and STEM enthusiasts worldwide.'
    },
    {
      icon: Zap,
      title: 'Tag-Based Discovery',
      description: 'Easily find content by technology, field, or skill level using our intelligent tagging system.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Build your technical portfolio and showcase your expertise to potential employers and collaborators.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Welcome to{' '}
                <span className="text-orange-400">
                  STEM Blog + Project Showcase
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Write technical blogs, showcase innovative projects, and explore cutting-edge STEM topics. 
                Connect with a community of developers, researchers, and tech enthusiasts.
              </p>
            </div>
            
            <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/blog">
                <Button className="btn-hero">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Blogs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="btn-secondary">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Technical Blogs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Projects Showcased</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Tech Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">STEMForge</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to share knowledge, showcase your work, and grow in the STEM field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-gradient rounded-2xl p-6 card-hover">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-gradient rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Share Your <span className="text-primary">STEM Journey</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of innovators, researchers, and developers. Share your projects, 
                write technical blogs, and inspire the next generation of STEM professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/blog">
                  <Button className="btn-hero">
                    Start Reading
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="btn-secondary">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
