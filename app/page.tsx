import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="main-hero">
        <div className="card">
          <div className="kicker">Mobile App Design & Build Plan</div>
          <h1 className="h1">Professional Networking Platform</h1>
          <p className="sub">
            A pragmatic, end-to-end product, design, and engineering plan to ship a
            world-class networking experience across six core pages.
          </p>
          <div className="cta-row">
            <Link href="/plan" className="button">View Full Plan</Link>
            <Link href="#sections" className="button secondary">Explore Sections</Link>
          </div>
        </div>
        <div className="grid cols-1">
          <div className="card">
            <span className="badge">Scope</span>
            <h3>6 Core Pages</h3>
            <ul className="list">
              <li>Feed: posts, articles, updates, create post</li>
              <li>Chat: real-time 1:1 and groups, search, attachments</li>
              <li>Jobs: discovery, filters, save, quick apply, recommendations</li>
              <li>Network: people you may know, filters, connect</li>
              <li>Notifications: activity center, batching, deep links</li>
              <li>Profile: user showcase, activity, endorsements</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sections" className="section">
        <h2 className="h2">Jump to a Section</h2>
        <div className="grid cols-3">
          <a className="card" href="/plan#feed"><h3>Feed</h3><p className="sub">Engage with updates and articles.</p></a>
          <a className="card" href="/plan#chat"><h3>Chat</h3><p className="sub">Real-time 1:1 and groups.</p></a>
          <a className="card" href="/plan#jobs"><h3>Jobs</h3><p className="sub">Find, save, and apply.</p></a>
          <a className="card" href="/plan#network"><h3>Network</h3><p className="sub">Discover and connect.</p></a>
          <a className="card" href="/plan#notifications"><h3>Notifications</h3><p className="sub">Stay informed and act.</p></a>
          <a className="card" href="/plan#profile"><h3>Profile</h3><p className="sub">Your professional brand.</p></a>
        </div>
      </section>
    </div>
  );
}
