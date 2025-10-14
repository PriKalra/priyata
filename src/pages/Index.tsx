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
      <section className="relative overflow-hidden border-b-2 border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-foreground">
              Priyata
            </h1>
            <p className="text-xl md:text-2xl mb-3 font-normal text-muted-foreground">
              State of Being
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Exploring the intersection of model informed drug discovery science and the philosophy of the universe. 
              A journey through PBPK/QSP modeling, AI in pharma, biotechnology, and the nature of consciousness.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <Button 
                asChild
                size="default"
                variant="outline"
                className="text-sm border-border hover:bg-foreground hover:text-background transition-all"
              >
                <a href="https://twitter.com/DeliriusPri" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
              <Button 
                asChild
                size="default"
                variant="outline"
                className="text-sm border-border hover:bg-foreground hover:text-background transition-all"
              >
                <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </Button>
              <Button 
                asChild
                size="default"
                variant="outline"
                className="text-sm border-border hover:bg-foreground hover:text-background transition-all"
              >
                <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BentoBox Grid Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 text-foreground">Latest Writings & Insights</h2>
          <p className="text-muted-foreground text-base">
            Chronologically ordered posts from Hey World and Buy Me a Coffee
          </p>
        </div>
        
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
      <section className="bg-foreground text-background py-16 md:py-20 rounded-2xl my-16 mx-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-5 text-center">Support My Work</h2>
            <p className="text-base text-background/80 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
              If you find value in my explorations of model informed drug discovery, AI in pharma, and the philosophy of existence, 
              consider supporting my research and writing. Every contribution helps sustain this journey of knowledge and discovery.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Bitcoin Support */}
              <Card className="p-8 bg-background/95 border-background/20 hover:border-background/40 transition-all">
                <h3 className="text-xl font-medium mb-3 text-foreground">₿ Bitcoin</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Direct cryptocurrency support
                </p>
                <div className="bg-foreground/10 p-4 rounded-lg text-xs font-mono break-all mb-4 border border-foreground/20 cursor-pointer hover:bg-foreground/20 transition-colors" 
                     onClick={() => {
                       navigator.clipboard.writeText('3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5');
                     }}
                     title="Click to copy">
                  3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5
                </div>
                <Button 
                  variant="outline"
                  className="w-full bg-background text-foreground hover:bg-background/90 border-foreground/20"
                  onClick={() => {
                    navigator.clipboard.writeText('3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5');
                  }}
                >
                  Copy Address
                </Button>
                <p className="text-xs text-foreground/60 mt-4 text-center">
                  Secure, private, and censorship-resistant
                </p>
              </Card>

              {/* Buy Me a Coffee */}
              <Card className="p-8 bg-background/95 border-background/20 hover:border-background/40 transition-all">
                <h3 className="text-xl font-medium mb-3 text-foreground">☕ Buy Me a Coffee</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  One-time or recurring support
                </p>
                <p className="text-sm text-foreground/70 mb-6">
                  Quick checkout with card or PayPal
                </p>
                <Button 
                  asChild
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                    Support on Buy Me a Coffee <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-foreground/60 mt-4 text-center">
                  Access exclusive content & updates
                </p>
              </Card>
            </div>
            
            <p className="mt-12 text-background/70 text-center max-w-2xl mx-auto">
              Your support enables me to dedicate more time to research, writing, and sharing insights 
              at the intersection of science and philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground font-medium mb-4">
            © {new Date().getFullYear()} Priyata • State of Being
          </p>
          <p className="text-muted-foreground mb-6 text-sm">
            Exploring model informed drug discovery science and the philosophy of the universe
          </p>
          <div className="flex gap-6 justify-center text-sm">
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Hey.com Blog
            </a>
            <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Buy Me a Coffee
            </a>
            <a href="https://twitter.com/DeliriusPri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
