import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactLinks = [
    {
      name: "Email",
      value: "kashishverma2124@gmail.com",
      icon: <Mail className="text-accent" />,
      href: "mailto:kashishverma2124@gmail.com",
    },
    {
      name: "Phone",
      value: "+91-9772150014",
      icon: <Phone className="text-accent" />,
      href: "tel:+919772150014",
    },
    {
      name: "GitHub",
      value: "github.com/kashi-verma",
      icon: <Github className="text-accent" />,
      href: "https://github.com/kashi-verma",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/kashish-verma",
      icon: <Linkedin className="text-accent" />,
      href: "https://www.linkedin.com/in/kashish-verma-2801332a1/",
    },
    {
      name: "LeetCode",
      value: "leetcode.com/u/kashish_verma",
      icon: <Code className="text-accent" />,
      href: "https://leetcode.com/u/kashish_verma/",
    },
    {
      name: "Discord",
      value: "discord.com/channels/@me",
      icon: <MessageCircle className="text-accent" />,
      href: "https://discord.com/channels/@me",
    },
  ];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg">
              I'm always interested in new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactLinks.map((contact) => (
                <div key={contact.name} className="flex items-center">
                  <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">{contact.name}</div>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-primary text-primary-foreground rounded-md transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
