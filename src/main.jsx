import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check,
  ChevronRight, Code2, Cpu, Database, ExternalLink, GraduationCap, Layers3,
  Mail, Menu, MousePointer2, Network, Phone, Quote, Send, Terminal, Users, X, Zap
} from 'lucide-react'
import './styles.css'

const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Contact']

const skills = [
  { label: 'Programming', icon: Code2, items: ['Python', 'C', 'Advanced C'], tone: 'cyan' },
  { label: 'Core skills', icon: BrainCircuit, items: ['Problem Solving', 'Logical Thinking', 'Programming Fundamentals'], tone: 'violet' },
  { label: 'Soft skills', icon: Users, items: ['Communication', 'Teamwork', 'Collaboration', 'Adaptability', 'Quick Learning'], tone: 'lime' },
]

const projects = [
  { number: '01', title: '2D Graphics Editor', type: 'C PROGRAMMING', icon: Layers3, description: 'A menu-driven 2D graphics editor built with a structured interface for performing graphical operations through modular C programming.', tags: ['Functions', 'Control structures', 'Modular design'] },
  { number: '02', title: 'Bluetooth Controlled Car', type: 'BLUETOOTH & EMBEDDED SYSTEMS', icon: Cpu, description: 'A wireless movement system that receives Bluetooth commands to control forward, backward, left, and right movement.', tags: ['Bluetooth', 'Electronics', 'Hardware control'] },
  {
    number: '03',
    title: 'ManganQuest',
    type: 'AI & DATA SCIENCE',
    icon: BrainCircuit,
    description: 'An AI-powered platform for manganese exploration and production analysis.'
}
]

const certifications = [
  { title: 'IBM SkillsBuild', eyebrow: 'ONLINE COURSE', description: 'Industry-relevant technology learning and professional development resources.', icon: Database },
  { title: 'Wadhwani Foundation', eyebrow: 'CERTIFICATION PROGRAM', description: 'Professional, employability, and workplace-ready skills for the next chapter.', icon: BriefcaseBusiness },
]

const strengths = ['Quick Learner', 'Team Player', 'Effective Communicator', 'Problem Solver', 'Adaptable', 'Positive Attitude']
const interests = [
  { label: 'Artificial Intelligence', icon: BrainCircuit }, { label: 'Data Science', icon: Database },
  { label: 'Python Programming', icon: Terminal }, { label: 'Software Development', icon: Code2 },
  { label: 'Emerging Technologies', icon: Zap },
]

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{children}</div>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap"><nav className="nav container"><a href="#home" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">V</span><span>varsha<span className="brand-dot">.</span></span></a><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button><div className={`nav-links ${open ? 'is-open' : ''}`}>{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a></div></nav></header>
}

function Hero() {
  return <section id="home" className="hero"><div className="hero-grid" /><div className="container hero-inner"><div className="hero-copy"><p className="kicker"><span className="status-dot" /> Available for learning & opportunities</p><h1>Hi, I'm<br /><span>Varsha Shree N</span><i>.</i></h1><p className="hero-role">Artificial Intelligence <span>&</span> Data Science Student</p><p className="hero-description">Passionate about programming, artificial intelligence, data science, and building practical technology solutions.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <ArrowDownRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me <ArrowUpRight size={17} /></a></div><div className="hero-meta"><span><span className="meta-number">02</span> academic projects</span><span className="meta-rule" /><span><span className="meta-number">03</span> focus areas</span></div></div><div className="hero-visual" aria-label="Abstract artificial intelligence visualization"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core-card"><div className="core-top"><span className="mini-label">CURRENT FOCUS</span><span className="live-pill"><span /> learning</span></div><div className="core-icon"><BrainCircuit size={58} strokeWidth={1.2} /></div><div className="core-title">Build. Learn.<br /><em>Discover.</em></div><div className="signal-bars"><span /><span /><span /><span /><span /><span /></div></div><div className="float-chip chip-one"><Code2 size={16} /> Python</div><div className="float-chip chip-two"><Network size={16} /> Logic</div><div className="visual-caption">01 / curious by default</div></div></div><a className="scroll-cue" href="#about"><MousePointer2 size={16} /> scroll to explore <ChevronRight size={15} /></a></section>
}

function About() {
  return <section id="about" className="section about"><div className="container"><SectionHeading eyebrow="01 / about me" title="A curious mind with a practical streak." /><div className="about-grid"><div className="about-copy"><p className="lead">I’m a motivated and enthusiastic B.Tech student specializing in Artificial Intelligence and Data Science, with a strong interest in programming, technology, and practical problem solving.</p><p>I have a foundation in Python, C, and Advanced C. I enjoy applying programming concepts to academic and hands-on projects, while building my communication, teamwork, and professional skills.</p><div className="quote"><Quote size={20} /><p>“I’m eager to gain industry experience, contribute to meaningful projects, and keep improving every day.”</p></div></div><div className="profile-card"><div className="profile-avatar">VSN</div><div><span className="eyebrow">EDUCATION</span><h3>B.Tech — AI & Data Science</h3><p>REVA University</p></div><div className="profile-line" /><div className="profile-detail"><GraduationCap size={17} /><span>Current undergraduate student</span></div><div className="profile-detail"><MapPinIcon /><span>Bengaluru, India</span></div></div></div></div></section>
}
function MapPinIcon() { return <span className="pin-icon">+</span> }

function Skills() {
  return <section id="skills" className="section skills"><div className="container"><SectionHeading eyebrow="02 / capabilities" title="Tools for turning ideas into action." /><div className="skill-grid">{skills.map(({ label, icon: Icon, items, tone }) => <article className={`skill-card ${tone}`} key={label}><div className="card-icon"><Icon size={21} /></div><h3>{label}</h3><ul>{items.map(item => <li key={item}><span />{item}</li>)}</ul><span className="card-index">0{skills.indexOf(skills.find(s => s.label === label)) + 1}</span></article>)}</div></div></section>
}

function Projects() {
  return <section id="projects" className="section projects"><div className="container"><SectionHeading eyebrow="03 / selected work" title="Small builds, real learning." /><div className="projects-list">{projects.map(({ number, title, type, icon: Icon, description, tags }) => <article className="project-card" key={title}><div className="project-number">{number}</div><div className="project-icon"><Icon size={34} strokeWidth={1.4} /></div><div className="project-body"><span className="eyebrow">{type}</span><h3>{title}</h3><p>{description}</p><div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="icon-button" title="Project link not added yet" disabled><ExternalLink size={19} /></button></article>)}</div></div></section>
}

function Certifications() {
  return <section id="certifications" className="section certifications"><div className="container"><SectionHeading eyebrow="04 / learning trail" title="Always adding another layer." /><div className="cert-grid">{certifications.map(({ title, eyebrow, description, icon: Icon }) => <article className="cert-card" key={title}><div className="cert-top"><div className="cert-icon"><Icon size={23} /></div><span className="cert-status"><span /> completed</span></div><span className="eyebrow">{eyebrow}</span><h3>{title}</h3><p>{description}</p><button className="text-button" disabled title="Certificate link not added yet">View certificate <ArrowUpRight size={16} /></button></article>)}</div></div></section>
}

function Education() {
  return <section className="section education"><div className="container education-inner"><div className="timeline-mark"><span>05</span><div /></div><div><span className="eyebrow">EDUCATION</span><h2>Building a foundation<br />for what comes next.</h2><div className="education-card"><div className="edu-icon"><GraduationCap size={28} /></div><div><h3>B.Tech — Artificial Intelligence and Data Science</h3><p>REVA University</p><span>Current undergraduate student with an academic focus on artificial intelligence, data science, programming, and technology.</span></div></div></div></div></section>
}

function Strengths() {
  return <section className="section strengths"><div className="container"><SectionHeading eyebrow="06 / the human side" title="How I show up." /><div className="strength-grid">{strengths.map((strength, index) => <div className="strength" key={strength}><span>0{index + 1}</span><strong>{strength}</strong><Check size={17} /></div>)}</div><div className="interest-block"><div><span className="eyebrow">AREAS OF INTEREST</span><h3>What keeps me<br />looking forward.</h3></div><div className="interest-list">{interests.map(({ label, icon: Icon }) => <div className="interest" key={label}><Icon size={18} /><span>{label}</span><ArrowUpRight size={15} /></div>)}</div></div></div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true) }
  return <section id="contact" className="section contact"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow">07 / let's connect</span><h2>Have a question?<br /><em>Say hello.</em></h2><p>I’m currently looking forward to learning, collaborating, and exploring meaningful opportunities in technology.</p><div className="contact-details"><a href="mailto:varshashree.n2007@gmail.com"><Mail size={18} /> varshashree.n2007@gmail.com <ArrowUpRight size={15} /></a><a href="tel:8971448692"><Phone size={18} /> 8971448692 <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Message<textarea name="message" required rows="5" placeholder="Tell me a little about your message..." /></label><div className="form-bottom"><button className="button button-primary" type="submit">{sent ? <>Message noted <Check size={17} /></> : <>Send message <Send size={16} /></>}</button>{sent && <span className="form-note">Frontend demo only — no message was sent.</span>}</div></form></div></section>
}

function Footer() { return <footer><div className="container footer-inner"><a href="#home" className="brand"><span className="brand-mark">V</span><span>varsha<span className="brand-dot">.</span></span></a><p>Artificial Intelligence & Data Science Student</p><div className="footer-links"><a href="mailto:varshashree.n2007@gmail.com"><Mail size={15} /> email</a><a href="tel:8971448692"><Phone size={15} /> phone</a></div><span className="copyright">© 2026 Varsha Shree N. All rights reserved.</span></div></footer> }

function App() { return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Certifications /><Education /><Strengths /><Contact /></main><Footer /></> }

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
