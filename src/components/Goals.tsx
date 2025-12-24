import { Target, Briefcase, Database } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Systems Design Mastery",
    description: "Improve my knowledge in systems design and development",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Gain experience in real-world IT projects",
  },
  {
    icon: Database,
    title: "Technical Foundation",
    description: "Build a strong foundation in programming and data management",
  },
];

const Goals = () => {
  return (
    <section id="goals" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Goals</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Goals List */}
        <div className="max-w-2xl mx-auto space-y-4">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="glass-card p-6 flex items-center gap-5 group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <goal.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{goal.title}</h3>
                <p className="text-muted-foreground text-sm">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
