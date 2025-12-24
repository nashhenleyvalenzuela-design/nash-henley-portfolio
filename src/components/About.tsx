import lspuLogo from "@/assets/lspu-logo.png";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* University Logo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-secondary/50 flex items-center justify-center p-2 border border-border/50">
                <img
                  src={lspuLogo}
                  alt="LSPU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-foreground/90 text-lg leading-relaxed">
                I am a college student who is eager to gain knowledge and experience in the field of{" "}
                <span className="text-primary font-medium">Information Systems</span>. 
                I am open to learning new concepts, improving my skills, and adapting to new challenges. 
                I believe that continuous learning is important for both personal and academic growth, 
                and I am always ready to learn and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
