import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        {/* Contact Card */}
        <div className="glass-card p-8 md:p-10 max-w-xl mx-auto text-center">
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:nashhenleyv@gmail.com"
              className="flex items-center justify-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="font-medium">nashhenleyv@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="font-medium">Siniloan, Laguna, Philippines</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="px-8 glow-effect"
            >
              <a href="mailto:nashhenleyv@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
