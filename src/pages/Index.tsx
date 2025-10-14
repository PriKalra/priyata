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
    date: "2025-10-14",
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
    date: "2025-10-06",
    views: 54,
    size: "medium"
  },
  {
    type: "blog",
    title: "The Universal Reach of Creating",
    excerpt: "Recently, I have pivoted into the role of Product manager and wow, the clichés about my role are popping up left and right, turning into real conversations!",
    link: "https://world.hey.com/priyata/the-universal-reach-of-creating-490a7fd6",
    source: "Hey World",
    date: "2025-09-28",
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
    date: "2025-09-09",
    views: 84,
    size: "medium"
  },
  {
    type: "blog",
    title: "Why Are We Living Longer but Feeling Worse?",
    excerpt: "The Paradox of Longevity: What if living to 85 means spending your last decade unwell? At Eurotox 2025, George P. Chrousos unveiled a striking paradox: we're gaining years but losing vitality.",
    link: "https://world.hey.com/priyata/why-are-we-living-longer-but-feeling-worse-734d3778",
    source: "Hey World",
    date: "2025-09-05",
    size: "large"
  },
  {
    type: "blog",
    title: "Ego, Control, and Sincerity in Pharma Science",
    excerpt: "Sometimes, when I notice carefully, the environment in Pharma, I realize than more than being about truth, the entire industry is about memes.",
    link: "https://world.hey.com/priyata/ego-control-and-sincerity-in-pharma-science-an-epistemological-dissection-cef99a5d",
    source: "Hey World",
    date: "2025-08-22",
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
    date: "2025-08-07",
    views: 148,
    size: "medium"
  },
  {
    type: "blog",
    title: "The Nano Banana Experiment: AI's Creative Power in Biology",
    excerpt: "Could an AI model like Nano Banana take raw biological reference images and turn them into something better? something vivid, precise, and tailored to science?",
    link: "https://world.hey.com/priyata/the-nano-banana-experiment-ai-s-creative-power-in-biology-2b8c184b",
    source: "Hey World",
    date: "2025-07-18",
    size: "small"
  },
  {
    type: "blog",
    title: "AI in Pharma: 10x Revolution",
    excerpt: "The universe bows to those who dare, who push past the ordinary and chase what others deem impossible. For too long, drug discovery has been chained by gatekeepers.",
    link: "https://world.hey.com/priyata/ai-in-pharma-10x-revolution-fdabcd1b",
    source: "Hey World",
    date: "2025-07-01",
    size: "small"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="text-sm bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 backdrop-blur-sm transition-all"
              >
                <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
                  Hey World <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BentoBox Grid Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-3 text-center">Latest Work</h2>
        <p className="text-muted-foreground text-center mb-10 text-base">
          Chronological feed from Hey World and Buy Me a Coffee
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1400px] mx-auto auto-rows-[240px]">
          {allContent.map((item, index) => {
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-2",
              small: "md:col-span-1"
            };

            return (
              <Card
                key={index}
                className={`group relative p-5 bg-card/50 border-border/50 hover:border-border transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] cursor-pointer overflow-hidden ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
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
                      {item.type === "image" && (
                        <ImageIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground/90 transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                    
                    <p className={`text-muted-foreground text-sm mb-3 flex-grow ${item.size === 'large' ? 'line-clamp-4' : 'line-clamp-2'}`}>
                      {item.excerpt}
                    </p>

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
          })}
        </div>

        <div className="text-center mt-10 flex gap-3 justify-center">
          <Button 
            asChild
            size="default"
            variant="outline"
            className="text-sm"
          >
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
              All Blog Posts <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            asChild
            size="default"
            variant="outline"
            className="text-sm"
          >
            <a href="https://buymeacoffee.com/priyata/posts" target="_blank" rel="noopener noreferrer">
              All Audio Posts <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-muted/30 py-12 md:py-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-3 text-center">Support My Work</h2>
            <p className="text-sm text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Your support enables me to continue creating content at the intersection of science, AI, and philosophy.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Buy Me a Coffee */}
              <Card className="p-6 bg-card/50 border-border/50 hover:border-border transition-all">
                <h3 className="text-lg font-semibold mb-2">Buy Me a Coffee</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Support my audio posts and creative work with a one-time contribution.
                </p>
                <Button 
                  asChild
                  className="w-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                    Contribute <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              {/* Bitcoin Support */}
              <Card className="p-6 bg-card/50 border-border/50 hover:border-border transition-all">
                <h3 className="text-lg font-semibold mb-2">Bitcoin Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer crypto? Send Bitcoin directly to support my work.
                </p>
                <div className="bg-muted/50 p-3 rounded text-xs font-mono break-all mb-4 border border-border/30">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </div>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    navigator.clipboard.writeText('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
                  }}
                >
                  <button>
                    Copy Address
                  </button>
                </Button>
              </Card>
            </div>
            
            {/* Shop Link */}
            <div className="text-center mt-6">
              <Button 
                asChild
                size="sm"
                variant="ghost"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                <a href="https://buymeacoffee.com/priyata/extras" target="_blank" rel="noopener noreferrer">
                  View Shop <ExternalLink className="ml-2 h-3.5 w-3.5" />
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
