import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  Shield,
  Users,
  TrendingUp,
  ExternalLink,
  Download,
  Moon,
  Sun,
  ChevronDown,
  Building,
  GraduationCap
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = {
    "Programming & Frameworks": ["C#", ".NET Core", "ASP.NET Core", "WPF", "Angular", "JavaScript"],
    "Databases": ["SQL Server", "Oracle", "PostgreSQL", "NoSQL Databases"],
    "Architecture & Design": ["Microservices", "Event-Driven Architecture", "Clean Architecture", "Domain-Driven Design", "WebSocket", "API Integration"],
    "Cloud & DevOps": ["Azure DevOps", "CI/CD", "Cloud-Native Solutions", "Docker"],
    "Security & Compliance": ["PCI DSS Compliance", "Secure API Integration"],
    "Leadership & Management": ["Agile Methodologies", "Team Mentoring", "Project Management", "Process Improvement"]
  }

  const experiences = [
    {
      title: "Senior Software Development Engineer | DotNet",
      company: "Freelancer",
      location: "Sana'a, Yemen",
      period: "03/2023 - Present",
      achievements: [
        "Led end-to-end backend development for more than 15 retail and healthcare applications using .NET Core and Azure Functions, resulting in a 40% improvement in scalability and a 30% reduction in security incidents.",
        "Incorporated RESTful APIs for Angular & ABP.io, improving workflows and increasing user engagement by 25%.",
        "Managed the seamless migration of 8 DNN websites with zero downtime, supporting over 50,000 users.",
        "Designed and implemented an AI-powered healthcare backend utilizing WebSockets and Azure OpenAI, cutting processing time by 35% while maintaining HIPAA-level security."
      ]
    },
    {
      title: "Senior Software Engineer (Contract) | DotNet",
      company: "National Microfinance Foundation",
      location: "Sana'a, Yemen",
      period: "09/2024 - 06/2025",
      achievements: [
        "Developed 3 enterprise-grade e-commerce and LMS platforms with .NET Core, boosting user engagement by 35% for a base of 20,000+ users.",
        "Securely supported over $5M in annual transactions, reducing payment processing costs by 10% through optimized gateway integrations.",
        "Architected 10 communication plugins used by 15,000+ employees, increasing system throughput by 50% and enabling efficient multichannel workflows.",
        "Optimized high-traffic APIs handling 50,000+ daily requests through asynchronous programming, reducing average response times by 40%."
      ]
    },
    {
      title: "Senior Software Engineering Manager (Full-Time) | DotNet",
      company: "Tharawat for Financial Services & Investment",
      location: "Sana'a, Yemen",
      period: "03/2021 - 05/2025",
      achievements: [
        "Directed the architecture and delivery of large-scale financial systems serving 100,000+ clients, implementing a robust Azure DevOps CI/CD pipeline across 3 payment platforms with full PCI DSS compliance.",
        "Spearheaded the end-to-end development and successful market launch of a PCI-DSS certified digital wallet with instant payment capabilities, driving an 80% surge in user engagement and contributing to a 15% increase in quarterly revenue.",
        "Achieved 99.99% uptime for 200,000+ active users through the development and maintenance of 30+ PCI-compliant microservices using .NET Core and RabbitMQ.",
        "Orchestrated the seamless integration of 20+ external PCI-DSS compliant APIs into core banking platforms, reducing standard integration timeline by 40% and accelerating time-to-market for new payment features."
      ]
    }
  ]

  const certifications = [
    { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", date: "07/2025" },
    { name: "Microsoft Azure DevOps Engineer Expert (AZ-400) Cert Prep", issuer: "Microsoft Press", date: "06/2025" },
    { name: "AWS-01 Cloud Computing Fundamentals and Concepts", issuer: "Manara", date: "09/2024" },
    { name: "Google Project Management: Specialization", issuer: "Google", date: "06/2024" },
    { name: "The IT Enhancement Program", issuer: "Association of German Yemeni Engineers (DJIV)", date: "05/2024" },
    { name: "Cisco Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "11/2020" }
  ]

  const keyAchievements = [
    { icon: TrendingUp, title: "95% Sprint Success", description: "Accomplished through Agile methodologies and process improvements" },
    { icon: Database, title: "40% Performance Boost", description: "Increased system performance with query optimization and efficient architecture" },
    { icon: Code, title: "40% Faster Integration", description: "Decreased integration time for 20+ external APIs" },
    { icon: Shield, title: "99.99% Uptime", description: "Supported 200K+ active users on digital wallet platform" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl"
            >
              Abdulsalam Alshuaibi
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Abdulsalam Alshuaibi
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Senior Software Engineering Manager | .NET Expert | Digital Transformation Leader
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Accomplished and results-driven Software Engineering Manager with over 10 years of experience 
              specializing in digital transformation for fintech, financial services, and e-commerce. 
              Expert in architecting and delivering scalable, cloud-native solutions using .NET Core, 
              microservices, and Azure DevOps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="group">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Riyadh, Saudi Arabia
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +966531130422
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown 
              className="h-8 w-8 mx-auto animate-bounce cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record of delivering exceptional results in software engineering and team leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A decade of leadership in software engineering and digital transformation
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                        <CardDescription className="flex items-center text-base">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the full software development lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{cert.name}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline">
                        <Award className="h-3 w-3 mr-1" />
                        {cert.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor's Degree in Computer Science</h3>
                    <p className="text-muted-foreground">Dhamar University – Yemen | 2010 – 2014</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">alshuaibi.abdulsalam@gmail.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Linkedin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/abdulsalamalshuaibi</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">github.com/abdulsalamalshuaibi</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Abdulsalam Alshuaibi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
