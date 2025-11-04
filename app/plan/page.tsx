export default function PlanPage() {
  return (
    <article>
      <header className="section">
        <h1 className="h1">Professional Networking Platform ? Mobile App Plan</h1>
        <p className="sub">
          End-to-end design and development plan for a production-grade mobile application. Built with a pragmatic, iterative roadmap, emphasizing reliability, performance, and measurable outcomes.
        </p>
      </header>

      <section className="section">
        <h2 className="h2">Platform & Architecture</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Client</h3>
            <ul className="list">
              <li>React Native (Expo) for iOS/Android. Shared UI primitives, native quality.</li>
              <li>State: React Query for server cache; Zustand for transient local state.</li>
              <li>Navigation: React Navigation (native stacks, tabs, deep links).</li>
              <li>Realtime: WebSockets (Socket.IO or native WS) + fallback to SSE/long-poll.</li>
              <li>Media: expo-image, expo-av; background uploads with retries.</li>
              <li>Push: Firebase Cloud Messaging (Android), APNs (via Firebase) for iOS.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <ul className="list">
              <li>Node.js + TypeScript (NestJS or Express), PostgreSQL, Redis.</li>
              <li>Auth: OAuth 2.1 / OIDC + email; JWT access + refresh tokens, rotation & revocation.</li>
              <li>Search: OpenSearch/Elasticsearch for jobs, people, content.</li>
              <li>Storage: S3 for media; signed URL uploads & image transforms.</li>
              <li>Realtime: Socket gateway with horizontal scaling via Redis pub/sub.</li>
              <li>Recommendations: Batch + near-real-time pipelines (Postgres + Redis + vector index optional).</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="feed" className="section">
        <h2 className="h2">Feed Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>Infinite scroll feed with mixed content: posts, articles, reshares.</li>
              <li>Engagement: like, comment, share; optimistic UI with rollback.</li>
              <li>Filters: All, Following, Articles, Media; sort by Top or Recent.</li>
              <li>Prominent Create Post button (FAB). Draft autosave and media attachments.</li>
              <li>Accessibility: large tap targets, dynamic type, VoiceOver labels.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Data & API</h3>
            <ul className="list">
              <li>GET /feed?cursor=...&filter=...&sort=...</li>
              <li>POST /posts, POST /posts/:id/like, POST /posts/:id/comment</li>
              <li>Pagination: cursor-based; server delivers heterogeneous items with type tags.</li>
              <li>Caching: React Query per-filter keys; background prefetch when idle.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="chat" className="section">
        <h2 className="h2">Chat Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>1:1 and group chats. Search conversations and messages.</li>
              <li>Message states: sent, delivered, read (double-checks). Typing indicators.</li>
              <li>Attachments: images, files, voice notes; upload progress and retries.</li>
              <li>Mention users in groups; reactions; soft delete and edit within window.</li>
              <li>Draft per-thread; jump to latest unread; keyboard-optimized composer.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Realtime & API</h3>
            <ul className="list">
              <li>WS events: message:new, message:ack, presence:update, typing, read:receipt.</li>
              <li>REST: GET /threads, GET /threads/:id/messages?cursor=..., POST /messages</li>
              <li>QoS: client queues outbound messages; idempotency keys to dedupe on server.</li>
              <li>Delivery semantics: at-least-once with de-dup; retry backoff.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="jobs" className="section">
        <h2 className="h2">Jobs Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>Browse cards with key details; deep filters (title, location, remote, level).</li>
              <li>Save Job and Quick Apply with profile + r?sum? on file.</li>
              <li>Recommendations based on profile, activity, and collaborative signals.</li>
              <li>Alerts: saved searches with push/email frequency controls.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Search & API</h3>
            <ul className="list">
              <li>Index: normalized job docs with facets (category, seniority, location).</li>
              <li>GET /jobs/search?q=&filters=&cursor=... (OpenSearch under the hood)</li>
              <li>POST /jobs/:id/save, POST /jobs/:id/quick-apply</li>
              <li>Recommendations: nightly batch + online re-rank with recency.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="network" className="section">
        <h2 className="h2">Network Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>People You May Know: shared companies, schools, mutuals, geography.</li>
              <li>Filters: industry, location radius, mutual connections count.</li>
              <li>Actions: Connect, Follow, Dismiss; batch suggestions management.</li>
              <li>Connection flow with optional intro note and pending requests view.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Data & API</h3>
            <ul className="list">
              <li>GET /recommendations/people?cursor=...&filters=...</li>
              <li>POST /connections/:userId/request, POST /connections/:userId/accept</li>
              <li>Graph store: adjacency list in Postgres; Redis for hot sets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="notifications" className="section">
        <h2 className="h2">Notifications Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>Activity center grouped by type; swipe to archive or mark read.</li>
              <li>Deep links to relevant screens; quiet hours and preference center.</li>
              <li>In-app notifications with toasts; badge counts synced with push.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Delivery & API</h3>
            <ul className="list">
              <li>Fan-out pipelines with rate limits; per-user digest batching.</li>
              <li>POST /notifications/read, GET /notifications?cursor=...</li>
              <li>Push tokens registry per device; test send and feedback loops.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="profile" className="section">
        <h2 className="h2">Profile Page</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>UX & Features</h3>
            <ul className="list">
              <li>Hero with photo, headline, location; open-to-work badge.</li>
              <li>Sections: About, Experience, Education, Skills, Projects, Activity.</li>
              <li>Endorsements and recommendations; featured media carousel.</li>
              <li>Edit mode with field-level autosave and validation.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Data & API</h3>
            <ul className="list">
              <li>GET /profiles/:id, PATCH /profiles/:id, POST /profiles/:id/media</li>
              <li>Privacy: per-section visibility controls; audit trail of changes.</li>
              <li>SEO for web fallback; shareable profile URLs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Non-Functional Requirements</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Performance & Offline</h3>
            <ul className="list">
              <li>TTI under 2s on mid-range devices; list virtualization everywhere.</li>
              <li>Offline read caches for recent feed and chats; queued writes.</li>
              <li>Image thumbnails + progressive loading; CDN caching and HTTP/3.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Security & Compliance</h3>
            <ul className="list">
              <li>mTLS edge ? services, OWASP MASVS checks, rooted device detection.</li>
              <li>PII encryption at rest; rotating KMS keys; least-privilege IAM.</li>
              <li>GDPR/CCPA: data export/delete; consent tracking; DSR automation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Analytics & Experimentation</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Metrics</h3>
            <ul className="list">
              <li>DAU/WAU/MAU, session length, retention D1/D7/D30.</li>
              <li>Feed: views?likes/comments CTR; post creation funnel.</li>
              <li>Chat: daily active senders, delivery latency p95.</li>
              <li>Jobs: search?view?apply CVR; recommendation CTR.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Infra</h3>
            <ul className="list">
              <li>Client analytics SDK (segment/ampli) with offline queue.</li>
              <li>Feature flags and A/B testing with gradual rollouts.</li>
              <li>Server-side events pipeline ? data warehouse for BI.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Testing & Release</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Quality</h3>
            <ul className="list">
              <li>Unit tests: Jest + React Native Testing Library.</li>
              <li>E2E: Detox for mobile flows; contract tests for APIs.</li>
              <li>Load tests for feed and chat fan-out; chaos engineering for WS.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Release</h3>
            <ul className="list">
              <li>CI/CD with build caching; TestFlight and Play internal tracks.</li>
              <li>Phased rollouts with guardrail metrics and auto-rollback.</li>
              <li>Crash reporting with symbolication; ANR monitoring and alerts.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Milestones (12 Weeks)</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Phase 1 (Weeks 1?4)</h3>
            <ul className="list">
              <li>Auth, profile basics, feed read, create post MVP.</li>
              <li>Chat 1:1 MVP with read receipts; push notifications.</li>
              <li>Jobs search read-only; save job. Analytics scaffold.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Phase 2 (Weeks 5?8)</h3>
            <ul className="list">
              <li>Groups chat, attachments, typing, robust offline.</li>
              <li>Jobs quick apply + recommendations; alerts.</li>
              <li>Network suggestions + connect flows; notifications center.</li>
            </ul>
          </div>
        </div>
        <div className="grid cols-2" style={{marginTop:16}}>
          <div className="card">
            <h3>Phase 3 (Weeks 9?12)</h3>
            <ul className="list">
              <li>Profile completeness, endorsements, featured media.</li>
              <li>Performance hardening, load tests, polish, accessibility.</li>
              <li>Beta, telemetry review, GA with phased rollout.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Risks & Mitigations</h3>
            <ul className="list">
              <li>Realtime scale: shard WS by geo and user id hash.</li>
              <li>Search latency spikes: pre-warm caches; backpressure; circuit breakers.</li>
              <li>Push deliverability: multi-provider fallback; scheduled retries.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
