import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Fall in Love with the Starting Line",
    excerpt: "Holding on to the identity that we have narrated to ourselves- is rather obvious. Whenever we are put in the position of start over- there is a lot of friction which further reflects in the slowness of an organization at accepting change.",
    link: "https://world.hey.com/priyata/fall-in-love-with-the-starting-line-cc9771b4",
    source: "Hey World"
  },
  {
    title: "The Universal Reach of Creating",
    excerpt: "Recently, I have pivoted into the role of Product manager and wow, the clichés about my role are popping up left and right, turning into real conversations! One being that Product manager and Project manager are the same- the janitors and herders of people.",
    link: "https://world.hey.com/priyata/the-universal-reach-of-creating-490a7fd6",
    source: "Hey World"
  },
  {
    title: "Why Are We Living Longer but Feeling Worse?",
    excerpt: "The Paradox of Longevity: What if living to 85, like the average Japanese citizen, means spending your last decade unwell? At Eurotox 2025, George P. Chrousos unveiled a striking paradox: we're gaining years but losing vitality.",
    link: "https://world.hey.com/priyata/why-are-we-living-longer-but-feeling-worse-734d3778",
    source: "Hey World"
  },
  {
    title: "Ego, Control, and Sincerity in Pharma Science",
    excerpt: "Sometimes, when I notice carefully, the environment in Pharma, I realize than more than being about truth, the entire industry is about memes. Step inside any scientific team, alongside lab protocols and data dashboards, subtler games are a part of the scenario.",
    link: "https://world.hey.com/priyata/ego-control-and-sincerity-in-pharma-science-an-epistemological-dissection-cef99a5d",
    source: "Hey World"
  },
  {
    title: "The Nano Banana Experiment: AI's Creative Power in Biology",
    excerpt: "Since the rage of nano banana, I have a question: Could an AI model like Nano Banana take raw biological reference images and turn them into something better? something vivid, precise, and tailored to science?",
    link: "https://world.hey.com/priyata/the-nano-banana-experiment-ai-s-creative-power-in-biology-2b8c184b",
    source: "Hey World"
  },
  {
    title: "AI in Pharma: 10x Revolution",
    excerpt: "The universe bows to those who dare, who push past the ordinary and chase what others deem impossible. For too long, drug discovery has been chained by gatekeepers, rigid institutions, stale ideas, and a culture that shuns the bold.",
    link: "https://world.hey.com/priyata/ai-in-pharma-10x-revolution-fdabcd1b",
    source: "Hey World"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Priyata
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              State of being.
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              I like in betweens. I write. I draw. I slam. I do science. I love kids.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
                  Hey World <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="accent"
                className="text-lg transition-all duration-300"
              >
                <a href="https://buymeacoffee.com/priyata" target="_blank" rel="noopener noreferrer">
                  Support My Work <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-4 text-center">Latest Thoughts</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Exploring the intersections of science, AI, product management, and philosophy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group p-6 bg-[image:var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] cursor-pointer"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="text-xs font-medium text-primary mb-2">
                    {post.source}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                    Read more 
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="text-lg"
          >
            <a href="https://world.hey.com/priyata" target="_blank" rel="noopener noreferrer">
              View All Posts <ExternalLink className="ml-2 h-5 w-5" />
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
                variant="accent"
                className="text-lg transition-all duration-300"
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
