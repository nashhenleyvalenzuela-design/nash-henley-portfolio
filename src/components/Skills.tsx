import { Monitor, FileText, MessageCircle, Users, CalendarCheck } from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Computer Literacy",
    description: "Proficient in various software and digital tools.",
  },
  {
    icon: FileText,
    title: "Data & Document Handling",
    description: "Skilled in organizing and managing information.",
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Effective verbal and written communication.",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    description: "Works well with diverse teams and groups.",
  },
  {
    icon: CalendarCheck,
    title: "Organization Skills",
    description: "Efficient in planning and prioritizing tasks.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-6 text-center group transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
