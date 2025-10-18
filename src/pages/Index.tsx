import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CosmicFractalUniverse from "@/components/CosmicFractalUniverse";
import FractalGlassCard from "@/components/FractalGlassCard";
import BitcoinCoin from "@/components/BitcoinCoin";
import ContentCard from "@/components/ContentCard";
import BuyMeACoffeeModal from "@/components/BuyMeACoffeeModal";

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
    audioUrl: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/10/30d206c46073aac17f7c86b0e3c17b45.mp3",
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
    audioUrl: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/09/203b4664c1490ef46d800870a959b3c5.mp3",
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
    audioUrl: "https://cdn.buymeacoffee.com/uploads/project_updates/2025/08/4a7ec3e8b391f35c0a4ded98a734b078.mp3",
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
  const [showBMCModal, setShowBMCModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden border-b border-border bg-gradient-to-b from-gray-50 via-background to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gray-50))_0%,hsl(var(--background))_40%,hsl(var(--gray-50))_100%)]" />
        <CosmicFractalUniverse />
        
        <div className="relative z-10 max-w-[980px] mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 text-foreground opacity-0 animate-fade-in-up animate-delay-200">
            State of Being
          </h1>
          
          <div className="flex flex-col items-center gap-6 mb-12 opacity-0 animate-fade-in-up animate-delay-400">
            <FractalGlassCard>
              Priyata
            </FractalGlassCard>
            
            <FractalGlassCard className="max-w-[500px]">
              A real-time journey of an ordinary scientist who loves in-betweens
            </FractalGlassCard>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center items-center opacity-0 animate-fade-in-up animate-delay-800">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-all duration-400"
            >
              <a href="https://twitter.com/DeliriusPri" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-all duration-400"
            >
              <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-all duration-400"
            >
              <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                Buy Me a Coffee
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-all duration-400"
            >
              <a href="#support">
                Support
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-border">
        <div className="container mx-auto px-4 max-w-[800px] text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8">
            About
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 mb-6 font-light">
            I explore the intersection of <strong className="text-foreground font-normal">model informed drug discovery</strong> and the <strong className="text-foreground font-normal">philosophy of existence</strong>. 
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-light">
            My work spans PBPK/QSP modeling, AI in pharmaceutical sciences, and the fundamental questions of consciousness and reality. 
            Through rigorous scientific inquiry and philosophical contemplation, I seek to understand the patterns that govern both 
            molecular systems and the cosmos itself.
          </p>
        </div>
      </section>

      {/* BentoBox Grid Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-20 max-w-[640px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-foreground tracking-tight">Latest Insights</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A chronological timeline of explorations in drug discovery science, computational biology, and philosophical inquiry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1400px] mx-auto auto-rows-[240px]">
          {allContent.map((item, index) => (
            <ContentCard key={index} item={item} />
          ))}
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
            size="default"
            variant="outline"
            className="text-sm"
            onClick={() => setShowBMCModal(true)}
          >
            All Audio Posts <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="bg-foreground text-background py-20 md:py-28 my-16 mx-4 rounded-3xl">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {/* Bitcoin Support */}
              <Card className="p-10 md:p-12 bg-background/5 border-background/10 hover:border-background/20 hover:bg-background/8 hover:-translate-y-2 transition-all duration-[400ms] rounded-[20px] backdrop-blur-sm">
                <h3 className="text-2xl font-normal mb-4 text-background">₿ Bitcoin</h3>
                <BitcoinCoin />
                <p className="text-sm text-background/70 mb-6 leading-relaxed">
                  Direct, decentralized support for independent research
                </p>
                <div 
                  className="bg-[rgba(0,0,0,0.3)] p-5 rounded-xl text-xs font-mono break-all my-6 border border-background/10 cursor-pointer hover:bg-[rgba(0,0,0,0.4)] hover:border-background/20 transition-all duration-300 text-white" 
                  onClick={() => {
                    navigator.clipboard.writeText('3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5');
                  }}
                  title="Click to copy"
                >
                  3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5
                </div>
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 hover:scale-105 border-none rounded-full font-semibold transition-all duration-300"
                  onClick={() => {
                    navigator.clipboard.writeText('3BXv7zbYcFe1ocYqqC8LLwovDsMXyaHfY5');
                  }}
                >
                  Copy Address
                </Button>
                <p className="text-xs text-background/60 mt-6 text-center leading-relaxed">
                  Secure, private, and censorship-resistant
                </p>
              </Card>

              {/* Buy Me a Coffee */}
              <Card className="p-10 md:p-12 bg-background/5 border-background/10 hover:border-background/20 hover:bg-background/8 hover:-translate-y-2 transition-all duration-[400ms] rounded-[20px] backdrop-blur-sm">
                <h3 className="text-2xl font-normal mb-4 text-background">☕ Buy Me a Coffee</h3>
                <p className="text-sm text-background/70 mb-3 leading-relaxed">
                  One-time or recurring support with instant checkout
                </p>
                <p className="text-sm text-background/70 mb-6 leading-relaxed">
                  Quick checkout with card or PayPal
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 hover:scale-105 border-none rounded-full font-semibold transition-all duration-300"
                >
                  <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                    Support Now
                  </a>
                </Button>
                <p className="text-xs text-background/60 mt-6 text-center leading-relaxed">
                  Access exclusive insights and early research
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border py-16 md:py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex gap-8 justify-center mb-8 flex-wrap text-sm md:text-[0.9375rem]">
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <button 
              onClick={() => setShowBMCModal(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Audio Posts
            </button>
            <a href="https://twitter.com/DeliriusPri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm mb-3">
            © {new Date().getFullYear()} Priyata • State of Being
          </p>
          <p className="text-muted-foreground/70 text-xs md:text-sm">
            Model Informed Drug Discovery • Consciousness Studies • Independent Research
          </p>
        </div>
      </footer>

      {/* Buy Me a Coffee Modal */}
      <BuyMeACoffeeModal isOpen={showBMCModal} onClose={() => setShowBMCModal(false)} />
    </div>
  );
};

export default Index;
