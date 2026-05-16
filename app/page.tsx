"use client";
import { useState } from "react";

const TIPS = [
  { id: 1, title: "ChatGPT voice mode tricks nobody uses", tag: "AI", duration: "28s", views: "142K", emoji: "🎙️", color: "#8b5cf6", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 2, title: "Perplexity vs Google — when to use which", tag: "AI Search", duration: "22s", views: "98K", emoji: "🔍", color: "#fbbf24", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 3, title: "Hidden iPhone settings that save hours", tag: "Mobile", duration: "30s", views: "210K", emoji: "📱", color: "#34d399", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 4, title: "Claude vs GPT-4 for coding — real test", tag: "AI Tools", duration: "25s", views: "176K", emoji: "⚡", color: "#f472b6", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 5, title: "Make AI write in your exact style", tag: "Prompts", duration: "18s", views: "88K", emoji: "✍️", color: "#38bdf8", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 6, title: "Android shortcuts power users know", tag: "Mobile", duration: "30s", views: "134K", emoji: "🤖", color: "#fb923c", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 7, title: "Free AI image generators ranked", tag: "AI Art", duration: "27s", views: "92K", emoji: "🎨", color: "#a78bfa", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 8, title: "5 browser extensions that replace paid apps", tag: "Tools", duration: "24s", views: "156K", emoji: "🌐", color: "#4ade80", url: "https://youtube.com/@QuickTechAIOfficial" },
  { id: 9, title: "Build an app with Cursor AI - no code needed", tag: "Coding", duration: "30s", views: "203K", emoji: "🛠️", color: "#fbbf24", url: "https://youtube.com/@QuickTechAIOfficial" },
];
const TAGS = ["All","AI","AI Tools","Mobile","Prompts","AI Art","Coding","Tools","AI Search"];
const TOOLS = [
  { name: "ChatGPT", desc: "General AI assistant", emoji: "🤖", url: "https://chat.openai.com", badge: "Free" },
  { name: "Perplexity", desc: "AI web search", emoji: "🔍", url: "https://perplexity.ai", badge: "Free" },
  { name: "Claude", desc: "Best for long documents", emoji: "⚡", url: "https://claude.ai", badge: "Free" },
  { name: "Midjourney", desc: "Best AI images", emoji: "🎨", url: "https://midjourney.com", badge: "Paid" },
  { name: "Cursor", desc: "AI code editor", emoji: "🛠️", url: "https://cursor.sh", badge: "Free" },
  { name: "ElevenLabs", desc: "AI voice cloning", emoji: "🎙️", url: "https://elevenlabs.io", badge: "Free" },
];

export default function Home() {
  const [tag, setTag] = useState("All");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const tips = tag === "All" ? TIPS : TIPS.filter(t => t.tag === tag);

  return (
    <div style={{minHeight:"100vh",background:"#0a0a14"}}>
      <nav style={{position:"sticky",top:0,zIndex:50,background:"rgba(10,10,20,0.92)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(139,92,246,0.12)",padding:"0 24px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontWeight:800,fontSize:16,color:"#f0f0ff",letterSpacing:"-0.02em"}}>⚡ QuickTech<span style={{color:"#8b5cf6"}}>AI</span></span>
        <a href="https://youtube.com/@QuickTechAIOfficial" target="_blank" rel="noopener noreferrer" style={{background:"#8b5cf6",color:"#fff",padding:"6px 14px",borderRadius:8,fontSize:12,fontWeight:700,textDecoration:"none"}}>▶ Subscribe</a>
      </nav>
      <main style={{maxWidth:1100,margin:"0 auto",padding:"40px 20px"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <div style={{display:"inline-flex",gap:6,background:"rgba(139,92,246,0.1)",border:"1px solid rgba(139,92,246,0.25)",borderRadius:99,padding:"4px 14px",fontSize:11,color:"#a78bfa",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:20}}>⚡ New tips every day</div>
          <h1 style={{fontSize:"clamp(32px,5vw,58px)",fontWeight:900,color:"#f0f0ff",letterSpacing:"-0.04em",lineHeight:1.1,margin:"0 0 16px"}}>
            AI tools &amp; tech hacks<br/>
            <span style={{background:"linear-gradient(135deg,#8b5cf6,#fbbf24)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>in 30 seconds</span>
          </h1>
          <p style={{color:"rgba(200,200,230,0.6)",fontSize:16,maxWidth:480,margin:"0 auto 32px",lineHeight:1.6}}>Bite-sized tips on AI tools, mobile shortcuts, and tech hacks. No fluff, just the good stuff.</p>
          <a href="https://youtube.com/@QuickTechAIOfficial" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#8b5cf6",color:"#fff",padding:"12px 28px",borderRadius:12,fontSize:15,fontWeight:700,textDecoration:"none",boxShadow:"0 0 32px rgba(139,92,246,0.35)"}}>▶ Watch on YouTube</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:48}}>
          {[{label:"Tips published",value:"200+",color:"#8b5cf6"},{label:"Subscribers",value:"86+",color:"#fbbf24"},{label:"Total views",value:"1M+",color:"#34d399"}].map(({label,value,color})=>(
            <div key={label} style={{background:"#12121f",border:"1px solid rgba(139,92,246,0.12)",borderRadius:14,padding:"20px 16px",textAlign:"center"}}>
              <div style={{fontSize:28,fontWeight:800,color,letterSpacing:"-0.03em",lineHeight:1}}>{value}</div>
              <div style={{fontSize:12,color:"rgba(200,200,230,0.45)",marginTop:4}}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24}}>
          {TAGS.map(t=>(
            <button key={t} onClick={()=>setTag(t)} style={{padding:"6px 14px",borderRadius:99,fontSize:12,fontWeight:600,cursor:"pointer",border:"1px solid",transition:"all 150ms",background:tag===t?"#8b5cf6":"transparent",color:tag===t?"#fff":"rgba(200,200,230,0.6)",borderColor:tag===t?"#8b5cf6":"rgba(139,92,246,0.2)"}}>{t}</button>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16,marginBottom:64}}>
          {tips.map(tip=>(
            <a key={tip.id} href={tip.url} target="_blank" rel="noopener noreferrer"
              style={{background:"#12121f",border:"1px solid rgba(139,92,246,0.1)",borderRadius:16,overflow:"hidden",textDecoration:"none",display:"block",transition:"all 200ms"}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-2px)";el.style.borderColor="rgba(139,92,246,0.35)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.borderColor="rgba(139,92,246,0.1)";}}>
              <div style={{height:160,background:`linear-gradient(135deg,${tip.color}22 0%,rgba(10,10,20,0.8) 100%)`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                <span style={{fontSize:48}}>{tip.emoji}</span>
                <div style={{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.8)",color:"#fff",fontSize:10,fontWeight:700,padding:"2px 6px",borderRadius:4}}>{tip.duration}</div>
                <div style={{position:"absolute",top:8,left:8,background:tip.color,color:"#fff",fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99}}>{tip.tag}</div>
              </div>
              <div style={{padding:"14px 16px"}}>
                <div style={{color:"#f0f0ff",fontSize:14,fontWeight:600,lineHeight:1.4,marginBottom:8}}>{tip.title}</div>
                <div style={{color:"rgba(200,200,230,0.4)",fontSize:11}}>{tip.views} views</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{marginBottom:64}}>
          <h2 style={{fontSize:22,fontWeight:800,color:"#f0f0ff",letterSpacing:"-0.02em",marginBottom:20}}>Best AI Tools Right Now</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
            {TOOLS.map(tool=>(
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                style={{background:"#12121f",border:"1px solid rgba(139,92,246,0.1)",borderRadius:14,padding:"16px",textDecoration:"none",display:"flex",alignItems:"center",gap:12,transition:"border-color 150ms"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(139,92,246,0.35)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(139,92,246,0.1)";}}>
                <span style={{fontSize:24}}>{tool.emoji}</span>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                    <span style={{color:"#f0f0ff",fontWeight:600,fontSize:13}}>{tool.name}</span>
                    <span style={{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:99,background:tool.badge==="Free"?"rgba(52,211,153,0.12)":"rgba(251,191,36,0.12)",color:tool.badge==="Free"?"#34d399":"#fbbf24"}}>{tool.badge}</span>
                  </div>
                  <div style={{color:"rgba(200,200,230,0.45)",fontSize:11}}>{tool.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div style={{background:"linear-gradient(135deg,rgba(139,92,246,0.12),rgba(251,191,36,0.06))",border:"1px solid rgba(139,92,246,0.2)",borderRadius:20,padding:"40px 32px",textAlign:"center"}}>
          <h2 style={{fontSize:22,fontWeight:800,color:"#f0f0ff",letterSpacing:"-0.02em",marginBottom:8}}>Daily tip in your inbox</h2>
          <p style={{color:"rgba(200,200,230,0.5)",fontSize:13,marginBottom:24}}>One AI tool or tech hack every morning. Under 60 seconds to read.</p>
          {done ? <div style={{color:"#34d399",fontWeight:600}}>&#10003; You&apos;re in! Check your inbox.</div> : (
            <form onSubmit={e=>{e.preventDefault();if(email)setDone(true);}} style={{display:"flex",gap:8,maxWidth:420,margin:"0 auto"}}>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="your@email.com" style={{flex:1,background:"rgba(10,10,20,0.8)",border:"1px solid rgba(139,92,246,0.25)",borderRadius:10,padding:"10px 14px",color:"#f0f0ff",fontSize:13,outline:"none"}}/>
              <button type="submit" style={{background:"#8b5cf6",color:"#fff",border:"none",borderRadius:10,padding:"10px 20px",fontSize:13,fontWeight:700,cursor:"pointer"}}>Subscribe</button>
            </form>
          )}
        </div>
      </main>
      <footer style={{borderTop:"1px solid rgba(139,92,246,0.1)",padding:"24px 20px",textAlign:"center",color:"rgba(200,200,230,0.3)",fontSize:12,marginTop:40}}>
        &copy; 2026 QuickTech AI &middot;{" "}
        <a href="https://youtube.com/@QuickTechAIOfficial" target="_blank" rel="noopener noreferrer" style={{color:"rgba(200,200,230,0.4)",textDecoration:"none"}}>YouTube</a>
      </footer>
    </div>
  );
}
