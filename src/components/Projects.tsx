const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-creepster text-[var(--title)] mb-12 text-center animate-fade-in">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Videns Token",
              image: "/lovable-uploads/videns-token.png",
              description: "The VIDENS Token Shall Be A Functional Gem, A Key To Unlock The Wonders Of Our Universe"
            },
            {
              title: "Bigfoot Quest",
              image: "/lovable-uploads/bigfoot-quest.png",
              description: "The Invisible Walker, Our legendary guide to fulfill the ancient lore, A mythic Journey Awaits"
            },
            {
              title: "Upcoming NFT",
              image: "/lovable-uploads/collection-2.png",
              description: "A cherished relic, lost yet vital to the quest, Essential For The Prophecy's Grand Behest"
            },
            {
              title: "Ebook",
              image: "/lovable-uploads/ebook.png",
              description: "Literary work inspired, Seven chapters exploring the prophetic universe of the Seven Drawings"
            }
          ].map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-creepster text-[var(--title)] mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;