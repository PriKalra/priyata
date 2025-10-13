import { ExternalLink, Mic, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const allContent = [
  {
    type: "blog",
    title: "Fall in Love with the Starting Line",
    excerpt: "Holding on to the identity that we have narrated to ourselves is rather obvious. Whenever we are put in the position of start over, there is a lot of friction which further reflects in the slowness of an organization at accepting change.",
    link: "https://world.hey.com/priyata/fall-in-love-with-the-starting-line-cc9771b4",
    source: "Hey World",
    size: "large"
  },
  {
    type: "audio",
    title: "Paper2Agent: Reimagining Research Papers As Interactive AI Agents",
    excerpt: "Exploring how research papers can be transformed into interactive and reliable AI agents.",
    link: "https://buymeacoffee.com/priyata/paper2agent-reimagining-research-papers-as-interactive-reliable-ai-agents",
    source: "Buy Me a Coffee",
    audioLength: "34:00",
    image: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/10/30d206c46073aac17f7c86b0e3c17b45.jpg",
    date: "Oct 06, 2025",
    views: 54,
    size: "medium"
  },
  {
    type: "blog",
    title: "The Universal Reach of Creating",
    excerpt: "Recently, I have pivoted into the role of Product manager and wow, the clichés about my role are popping up left and right, turning into real conversations!",
    link: "https://world.hey.com/priyata/the-universal-reach-of-creating-490a7fd6",
    source: "Hey World",
    size: "small"
  },
  {
    type: "audio",
    title: "Large Language Models for Data Extraction in Toxicology",
    excerpt: "Implications and lessons learned from using LLMs in toxicology data extraction.",
    link: "https://buymeacoffee.com/priyata/large-language-models-data-extraction-toxicology-implications-lessons-learned",
    source: "Buy Me a Coffee",
    audioLength: "18:54",
    image: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/09/203b4664c1490ef46d800870a959b3c5.jpg",
    date: "Sep 09, 2025",
    views: 84,
    size: "medium"
  },
  {
    type: "blog",
    title: "Why Are We Living Longer but Feeling Worse?",
    excerpt: "The Paradox of Longevity: What if living to 85 means spending your last decade unwell? At Eurotox 2025, George P. Chrousos unveiled a striking paradox: we're gaining years but losing vitality.",
    link: "https://world.hey.com/priyata/why-are-we-living-longer-but-feeling-worse-734d3778",
    source: "Hey World",
    size: "large"
  },
  {
    type: "blog",
    title: "Ego, Control, and Sincerity in Pharma Science",
    excerpt: "Sometimes, when I notice carefully, the environment in Pharma, I realize than more than being about truth, the entire industry is about memes.",
    link: "https://world.hey.com/priyata/ego-control-and-sincerity-in-pharma-science-an-epistemological-dissection-cef99a5d",
    source: "Hey World",
    size: "small"
  },
  {
    type: "audio",
    title: "Machine Learning Automation of PKPD Modelling",
    excerpt: "Exploring the intersection of machine learning and pharmacokinetic-pharmacodynamic modeling.",
    link: "https://buymeacoffee.com/priyata/machine-learning-automation-pkpd-modelling",
    source: "Buy Me a Coffee",
    audioLength: "20:09",
    image: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/08/4a7ec3e8b391f35c0a4ded98a734b078.jpg",
    date: "Aug 07, 2025",
    views: 148,
    size: "medium"
  },
  {
    type: "blog",
    title: "The Nano Banana Experiment: AI's Creative Power in Biology",
    excerpt: "Could an AI model like Nano Banana take raw biological reference images and turn them into something better? something vivid, precise, and tailored to science?",
    link: "https://world.hey.com/priyata/the-nano-banana-experiment-ai-s-creative-power-in-biology-2b8c184b",
    source: "Hey World",
    size: "small"
  },
  {
    type: "blog",
    title: "AI in Pharma: 10x Revolution",
    excerpt: "The universe bows to those who dare, who push past the ordinary and chase what others deem impossible. For too long, drug discovery has been chained by gatekeepers.",
    link: "https://world.hey.com/priyata/ai-in-pharma-10x-revolution-fdabcd1b",
    source: "Hey World",
    size: "small"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[60vh] min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-cosmic)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Priyata
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              State of being. The in-betweens.
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-8">
              Writer • Artist • Scientist • Product Manager
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
                  Hey World <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="text-lg bg-white text-black hover:bg-white/90 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                  Support My Work <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BentoBox Grid Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-4 text-center">Latest Thoughts & Creations</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Exploring the intersections of science, AI, product management, and philosophy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto auto-rows-[280px]">
          {allContent.map((item, index) => {
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-2",
              small: "md:col-span-1"
            };

            return (
              <Card
                key={index}
                className={`group relative p-6 bg-[image:var(--gradient-card)] border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] cursor-pointer overflow-hidden ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full flex flex-col"
                >
                  {/* Background Image for Audio/Image Posts */}
                  {item.type === "audio" && item.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}
                  
                  <div className="relative flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs font-medium bg-secondary/50 backdrop-blur-sm">
                        {item.source}
                      </Badge>
                      {item.type === "audio" && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mic className="h-4 w-4" />
                          <span>{item.audioLength}</span>
                        </div>
                      )}
                      {item.type === "image" && (
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-3">
                      {item.title}
                    </h3>
                    
                    <p className={`text-muted-foreground mb-4 flex-grow ${item.size === 'large' ? 'line-clamp-4' : 'line-clamp-2'}`}>
                      {item.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                        {item.type === "audio" ? "Listen" : "Read more"}
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      {item.views && (
                        <span className="text-xs text-muted-foreground">
                          {item.views} views
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 flex gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="text-lg"
          >
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
              All Blog Posts <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="text-lg"
          >
            <a href="https://buymeacoffee.com/priyata/posts" target="_blank" rel="noopener noreferrer">
              All Audio Posts <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Support My Creative Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              If you enjoy my writing, art, or scientific work, consider supporting me. 
              Your support helps me continue creating and exploring the beautiful in-betweens of life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="text-lg bg-foreground text-background hover:bg-foreground/90 shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="text-lg"
              >
                <a href="https://buymeacoffee.com/priyata/extras" target="_blank" rel="noopener noreferrer">
                  View Shop <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Priyata. Exploring the in-betweens.
          </p>
          <div className="flex gap-6 justify-center mt-4 text-sm text-muted-foreground">
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Hey World
            </a>
            <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Buy Me a Coffee
            </a>
            <a href="https://twitter.com/DeliriusPri" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
