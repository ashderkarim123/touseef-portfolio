"use client";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

const portfolioItems = [
  { cat: "dashboard", category: "Dashboard", title: "High Impact Coaching — $216K AI Revenue", desc: "Real-time campaign performance dashboard", img: "/assets/d-high-impact-coaching.jpg" },
  { cat: "dashboard", category: "Dashboard", title: "Speed-to-Lead Performance", desc: "Lead response & booking conversion tracking", img: "/assets/d-speed-to-lead-performance.jpg" },
  { cat: "dashboard", category: "Dashboard", title: "Existing-Customer S2L View", desc: "Customer speed-to-lead campaign overview", img: "/assets/d-existing-customer-s2l.png" },
  { cat: "dashboard", category: "Dashboard", title: "Customer Success Tracker", desc: "Sentiment & success monitoring dashboard", img: "/assets/d-customer-success.png" },
  { cat: "workflow", category: "GHL Workflow", title: "New-Leads Campaign (Multi-Trigger)", desc: "Multi-source lead intake & campaign tracking", img: "/assets/w-new-leads-campaign.png" },
  { cat: "workflow", category: "GHL Workflow", title: "Workshop Reporting → Sheets", desc: "Automated workshop data sync to Google Sheets", img: "/assets/w-workshop-sheets.png" },
  { cat: "workflow", category: "Conversation Design", title: "S2L & Reactivation Master Flow", desc: "Full speed-to-lead & database reactivation system", img: "/assets/w-s2l-master-flow.png" },
  { cat: "workflow", category: "GHL Workflow", title: "Appointment Reminders & Cleanup", desc: "Automated reminder sequences with tag cleanup", img: "/assets/w-appt-reminder.png" },
  { cat: "workflow", category: "GHL Workflow", title: "Lead Intake → Opportunity → Tag", desc: "End-to-end lead intake pipeline automation", img: "/assets/w-lead-intake-opportunity.png" },
  { cat: "ai", category: "AI Agent", title: "Apartment Leasing SMS Agent", desc: "Conversational AI for property leasing inquiries", img: "/assets/a-apartment-sms-agent.png" },
  { cat: "ai", category: "AI Agent", title: "Multilingual Inquiry Agent", desc: "Language-detecting AI for global audiences", img: "/assets/a-multilingual-agent.png" },
  { cat: "ai", category: "Voice AI", title: "Inbound Booking Voice Agent", desc: "AI voice agent for inbound call booking", img: "/assets/a-voice-agent-booking.jpg" },
  { cat: "backend", category: "n8n Pipeline", title: "GHL → Sheets Sync Pipeline", desc: "Automated GoHighLevel to Google Sheets sync", img: "/assets/b-ghl-sheets-pipeline.png" },
  { cat: "backend", category: "n8n Pipeline", title: "Reactivation Reporting Fan-Out", desc: "Multi-branch reporting for reactivation campaigns", img: "/assets/b-reactivation-reporting.png" },
];

const tabs = [
  { key: "all", label: "All Work" },
  { key: "dashboard", label: "Dashboards" },
  { key: "workflow", label: "Workflows" },
  { key: "ai", label: "AI Agents" },
  { key: "backend", label: "Backend" },
];

const tools = [
  { name: "GoHighLevel", slug: "gohighlevel", color: "#f97316", initials: "GHL" },
  { name: "n8n", slug: "n8n", color: "#ea4b71", initials: "n8n" },
  { name: "Zapier", slug: "zapier", color: "#ff4a00", initials: "ZAP" },
  { name: "Make", slug: "make", color: "#6d00cc", initials: "MK" },
  { name: "OpenAI", slug: "openai", color: "#10a37f", initials: "AI" },
  { name: "Google Sheets", slug: "googlesheets", color: "#34a853", initials: "GS" },
  { name: "Twilio", slug: "twilio", color: "#f22f46", initials: "TW" },
  { name: "Airtable", slug: "airtable", color: "#18bfff", initials: "AT" },
  { name: "Slack", slug: "slack", color: "#4a154b", initials: "SL" },
  { name: "HubSpot", slug: "hubspot", color: "#ff7a59", initials: "HS" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [lbImg, setLbImg] = useState<string | null>(null);

  const filtered =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.cat === activeTab);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div>
            <div className="hero-badge">
              <span className="dot"></span>
              Available for projects
            </div>
            <h1>
              I Build Revenue Machines That{" "}
              <span className="accent">Generate Leads</span> & Close Deals.
            </h1>
            <p className="hero-sub">
              AI Automation Specialist &amp; GHL Systems Builder. I scale agencies,
              coaches &amp; businesses on autopilot using GoHighLevel, n8n, and
              advanced AI agents.
            </p>
            <div className="hero-cta">
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">1+</div>
                <div className="lbl">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="num">20+</div>
                <div className="lbl">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="num">12+</div>
                <div className="lbl">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <Image
              src="/assets/Touseefali.jpg"
              alt="Touseef Ali"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section section-white">
        <div className="container">
          <div className="about-card">
            {/* Circular photo column */}
            <div className="about-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 32px" }}>
              <div style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid var(--purple-pale)",
                boxShadow: "0 0 0 6px rgba(153,41,251,0.12)",
                flexShrink: 0,
              }}>
                <Image
                  src="/assets/Touseefali.jpg"
                  alt="Touseef Ali"
                  width={280}
                  height={280}
                  style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
                />
              </div>
            </div>
            {/* Content column */}
            <div className="about-content">
              <span style={{
                display: "inline-block",
                alignSelf: "flex-start",
                background: "var(--purple)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "16px",
                width: "fit-content",
              }}>About Me</span>
              <h2>
                I'm An <span className="accent">AI Automation</span> Specialist
              </h2>
              <p>
                I am a GoHighLevel &amp; AI Automation expert specializing in CRM
                automation, sales pipelines, and complete business system setup. I help
                agencies, coaches, and service-based businesses automate their lead
                generation, follow-ups, bookings, and client management.
              </p>
              <p>
                From building speed-to-lead systems to setting up advanced AI voice
                &amp; chat agents and n8n pipelines, I create revenue machines that
                save time, reduce manual work, and scale revenue — on autopilot.
              </p>
              <p style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                📍 Gilgit-Baltistan, Pakistan &nbsp;·&nbsp; 🎓 BSc AI, SZABIST University
              </p>
              <div className="about-actions" style={{ marginTop: "28px" }}>
                <a
                  href="https://www.linkedin.com/in/touseef-ali-45788324b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a href="#contact" className="btn btn-outline">
                  ↓ Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="sec-title">Professional <span className="accent">Journey</span></h2>
          <p className="sec-sub">Building excellence across industry-leading agencies.</p>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-date">Oct 2024 – Present</div>
              <h3>Freelance Automation Specialist</h3>
              <p>
                Skilled in streamlining workflows and boosting efficiency using GoHighLevel,
                Zapier, and Make (Integromat). Helping businesses automate repetitive tasks,
                integrate tools, and optimize processes for better performance and scalability.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-date">Jun 2025 – Dec 2025 &nbsp;|&nbsp; Full-Time</div>
              <h3>Automation Specialist – Bellixlabs</h3>
              <p>
                Designed and implemented GoHighLevel automations, AI chatbots, and workflow
                systems that streamlined lead management, reduced manual follow-ups, and
                improved response times. Built custom CRM workflows and chatbot solutions
                that increased operational efficiency and enhanced customer engagement.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-date">May 2025 – Sep 2025</div>
              <h3>Customer Support Representative – CloseBot</h3>
              <p>
                Provided dedicated support and ensured client success in using automated
                conversational AI tools to qualify leads and close deals efficiently.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-date">Jun 2022 – May 2025</div>
              <h3>Shopify E-Commerce</h3>
              <p>
                Managed and scaled Shopify stores including product listing, automation
                integrations, and customer journey optimizations over a 3-year period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS / TOOLS ── */}
      <section className="section section-white">
        <div className="container">
          <h2 className="sec-title">Skills &amp; <span className="accent">Tools</span></h2>
          <p className="sec-sub">
            Building expertise across industry-leading tools and modern business systems.
          </p>
          <div className="tools-grid">
            {tools.map((t) => (
              <div key={t.name} className="tool-tile" style={{ background: t.color }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "rgba(255,255,255,0.18)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "8px",
                }}>
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/ffffff`}
                    alt={t.name}
                    width={28}
                    height={28}
                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) parent.innerHTML = `<span style="color:#fff;font-weight:800;font-size:14px">${t.initials}</span>`;
                    }}
                  />
                </div>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="services-layout">
            <div className="services-left">
              <h2>What I <span className="accent">Offer?</span></h2>
              <p>
                I provide complete GoHighLevel &amp; AI Automation solutions to help
                businesses automate, scale, and grow.
              </p>
              <a href="#contact" className="btn btn-primary">Get Started Now</a>
            </div>
            <div className="services-grid">
              {[
                { title: "Speed-to-Lead Systems", desc: "Instant AI replies push leads to booked calls before competitors see the form submission." },
                { title: "Database Reactivation", desc: "Wake up cold contacts with multi-step AI conversations that re-open pipeline you already paid for." },
                { title: "Conversational AI Agents", desc: "SMS & web-chat agents that branch on intent, detect language, capture details, and book calls." },
                { title: "Voice AI Agents", desc: "Inbound & outbound voice agents that answer, qualify, transfer to your team, or book a callback." },
                { title: "Custom GHL Dashboards", desc: "Real-time dashboards showing leads, reply rates, booked calls, and AI-assisted revenue live." },
                { title: "n8n Backend Pipelines", desc: "Pipelines syncing GoHighLevel to Google Sheets and dashboards on a schedule — zero manual exports." },
              ].map((s) => (
                <div key={s.title} className="svc-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="section section-white">
        <div className="container">
          <h2 className="sec-title">Portfolio</h2>
          <p className="sec-sub">
            Real systems built to automate, convert, and scale businesses.
          </p>
          <div className="port-tabs">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`port-tab${activeTab === t.key ? " active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="port-grid">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="port-card"
                onClick={() => setLbImg(item.img)}
              >
                <div className="port-card-img">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="port-card-body">
                  <div className="port-cat">{item.category}</div>
                  <div className="port-title">{item.title}</div>
                  <div className="port-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`lb-overlay${lbImg ? " open" : ""}`} onClick={() => setLbImg(null)}>
        {lbImg && (
          <img
            className="lb-img"
            src={lbImg}
            alt="Portfolio preview"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button className="lb-close" onClick={() => setLbImg(null)}>✕</button>
      </div>

      {/* ── PROCESS ── */}
      <section id="process" className="section section-alt">
        <div className="container">
          <h2 className="sec-title">How I <span className="accent">Work</span></h2>
          <p className="sec-sub">
            Five stages. You always know what's being built and what to expect next.
          </p>
          <div className="process-grid">
            {[
              { n: "01", title: "Audit & Map", desc: "Map your current funnel, tags, and gaps — then design the flow before touching a thing." },
              { n: "02", title: "Build", desc: "Workflows, AI agents, and dashboards built in GoHighLevel and wired to your tools." },
              { n: "03", title: "Connect", desc: "n8n pipelines sync data to Sheets & dashboards so reporting is automatic." },
              { n: "04", title: "Test", desc: "Every branch tested with real conditions. 0 errors before launch." },
              { n: "05", title: "Launch & Report", desc: "Go live, monitor the dashboard, and tune for more booked calls." },
            ].map((s) => (
              <div key={s.n} className="proc-step">
                <div className="proc-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section section-white">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="sec-title">Real <span className="accent">Results</span></h2>
          <p className="sec-sub">Numbers pulled straight from live client dashboards.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
            {[
              { num: "$216K+", lbl: "AI-Assisted Revenue", ctx: "High Impact Coaching" },
              { num: "18,500+", lbl: "Leads Engaged", ctx: "Speed-to-Lead System" },
              { num: "1,559+", lbl: "Calls Booked", ctx: "Across AI Agents" },
              { num: "28%", lbl: "Reply Rate", ctx: "20% Lead → Call Conversion" },
            ].map((s) => (
              <div key={s.num} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "16px", padding: "28px 16px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 800, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div style={{ fontSize: "15px", fontWeight: 600, marginTop: "8px" }}>{s.lbl}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>{s.ctx}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="sec-title">Client <span className="accent">Testimonials</span></h2>
          <p className="sec-sub">Client feedback on delivered GoHighLevel systems and automation results.</p>
          <div className="testi-grid">
            {[
              { text: "Touseef built an incredible speed-to-lead system for our coaching business. The AI agent handles new leads in under 60 seconds. Our call bookings went through the roof!", name: "Sarah M.", role: "Coaching Business Owner", init: "S" },
              { text: "The reactivation campaign Touseef set up generated $40K+ in pipeline from contacts we had given up on. The ROI was insane. Highly recommend!", name: "James R.", role: "Real Estate Agency", init: "J" },
              { text: "Professional, fast, and the systems work exactly as promised. The n8n pipeline and dashboard setup saved my team 20+ hours a week in manual reporting.", name: "Aisha W.", role: "Digital Marketing Agency", init: "A" },
            ].map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>Do You Have a Project Idea?<br />Let's Discuss Your Project!</h2>
          <p>
            I'm always open to discussing new automation ideas, sales funnels, and
            GoHighLevel systems. Let's build something that actually grows your business.
          </p>
          <a href="#contact" className="btn">Get Started Now</a>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="section section-white">
        <div className="container">
          <h2 className="sec-title">Get In <span className="accent">Touch</span></h2>
          <p className="sec-sub">
            Tell me about your funnel. I'll show you exactly where automation wins you back time and revenue.
          </p>
          <div className="contact-wrap">
            <div className="contact-info">
              <h2>Let's Talk <span className="accent">Business</span></h2>
              <p>
                Whether you need a speed-to-lead system, a complete GoHighLevel overhaul, or
                a custom AI agent — I'm ready to help. Reach out and let's build your revenue machine.
              </p>
              <div className="contact-detail">
                <div className="icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Gilgit-Baltistan, Pakistan</span>
              </div>
              <div className="contact-detail">
                <div className="icon">
                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <a href="https://www.linkedin.com/in/touseef-ali-45788324b" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)" }}>
                  linkedin.com/in/touseef-ali-45788324b
                </a>
              </div>
              <div className="contact-detail">
                <div className="icon">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "var(--purple)" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <a
                  href="https://wa.me/923341899014"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--purple)", fontWeight: 500 }}
                >
                  +92 334 189 9014
                </a>
              </div>

              <div style={{ marginTop: "32px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", marginBottom: "12px" }}>BUILT WITH</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["GoHighLevel", "n8n", "Synthflow", "Zapier", "GPT-4"].map(t => (
                    <span key={t} style={{ background: "var(--purple-pale)", color: "var(--purple)", fontSize: "12px", fontWeight: 600, padding: "5px 12px", borderRadius: "999px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">TOUSEEF ALI</div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/touseef-ali-45788324b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Touseef Ali. All Rights Reserved.</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <span>📍 Remote · Gilgit-Baltistan, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
