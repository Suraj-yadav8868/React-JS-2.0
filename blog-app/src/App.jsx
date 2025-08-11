import React, { useEffect, useState } from "react";

/* ---------- Utility ---------- */
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);

/* ---------- PostForm Component ---------- */
function PostForm({ onSave, editing, onCancel }) {
  const [title, setTitle] = useState(editing?.title || "");
  const [body, setBody] = useState(editing?.body || "");
  const [tags, setTags] = useState(editing?.tags?.join(", ") || "");

  useEffect(() => {
    setTitle(editing?.title || "");
    setBody(editing?.body || "");
    setTags(editing?.tags?.join(", ") || "");
  }, [editing]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    const payload = {
      id: editing?.id || uid(),
      title: title.trim(),
      body: body.trim(),
      tags: tags
        .split(",")
        .map(t => t.trim())
        .filter(Boolean),
      updatedAt: new Date().toISOString(),
      createdAt: editing?.createdAt || new Date().toISOString(),
    };
    onSave(payload);
    setTitle(""); setBody(""); setTags("");
  }

  return (
    <form className="post-form card" onSubmit={handleSubmit}>
      <h3>{editing ? "Edit Post" : "New Post"}</h3>
      <input
        placeholder="Post title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Write something inspiring..."
        value={body}
        onChange={e => setBody(e.target.value)}
        rows={6}
        className="textarea"
      />
      <input
        placeholder="tags (comma separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
        className="input"
      />
      <div className="form-actions">
        <button type="submit" className="btn primary">
          {editing ? "Save Changes" : "Publish"}
        </button>
        {editing ? (
          <button type="button" className="btn ghost" onClick={onCancel}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

/* ---------- PostItem Component ---------- */
function PostItem({ post, onEdit, onDelete, onTogglePin }) {
  return (
    <article className="post card">
      <div className="post-head">
        <h4 className="post-title">{post.title}</h4>
        <div className="post-meta">
          <span className="tag">{post.tags?.[0]}</span>
          <small>{new Date(post.updatedAt || post.createdAt).toLocaleString()}</small>
        </div>
      </div>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
        <div className="post-tags">
          {post.tags?.map(t => <span key={t} className="chip">#{t}</span>)}
        </div>
        <div className="actions">
          <button className="icon-btn" title="Edit" onClick={() => onEdit(post)}>
            ✏️
          </button>
          <button className="icon-btn danger" title="Delete" onClick={() => onDelete(post.id)}>
            🗑️
          </button>
          <button className={`icon-btn ${post.pinned ? "active" : ""}`} title="Pin" onClick={() => onTogglePin(post.id)}>
            📌
          </button>
        </div>
      </div>
    </article>
  );
}

/* ---------- PostList Component ---------- */
function PostList({ posts, onEdit, onDelete, onTogglePin }) {
  if (!posts.length) {
    return <div className="empty">No posts yet — create your first one ✨</div>;
  }
  return (
    <div className="grid">
      {posts.map(p => (
        <PostItem key={p.id} post={p} onEdit={onEdit} onDelete={onDelete} onTogglePin={onTogglePin} />
      ))}
    </div>
  );
}

/* ---------- Main App ---------- */
export default function App() {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem("blog.posts");
      return raw ? JSON.parse(raw) : samplePosts();
    } catch {
      return samplePosts();
    }
  });
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent"); // recent, title, pinned
  const [theme, setTheme] = useState(() => localStorage.getItem("blog.theme") || "light");

  useEffect(() => localStorage.setItem("blog.posts", JSON.stringify(posts)), [posts]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("blog.theme", theme);
  }, [theme]);

  function handleSave(post) {
    setPosts(prev => {
      const exists = prev.find(p => p.id === post.id);
      if (exists) {
        return prev.map(p => (p.id === post.id ? { ...p, ...post } : p));
      }
      return [{ ...post, pinned: false }, ...prev];
    });
    setEditing(null);
  }

  function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  function handleEdit(post) {
    setEditing(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleTogglePin(id) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, pinned: !p.pinned } : p));
  }

  function filteredSortedPosts() {
    const q = query.trim().toLowerCase();
    let list = posts.filter(p => {
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        (p.tags || []).join(" ").toLowerCase().includes(q)
      );
    });
    if (sortBy === "title") list = list.sort((a,b) => a.title.localeCompare(b.title));
    else if (sortBy === "pinned") list = list.sort((a,b) => (b.pinned - a.pinned) || new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
    else list = list.sort((a,b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
    return list;
  }

  function clearAll() {
    if (!confirm("Delete ALL posts? This cannot be undone.")) return;
    setPosts([]);
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <h1>Blogify</h1>
          <p className="subtitle">Aapka personal React blog — lightweight & pretty</p>
        </div>

        <div className="top-controls">
          <input
            className="search"
            placeholder="Search posts, tags, text..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select className="select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="recent">Recent</option>
            <option value="pinned">Pinned first</option>
            <option value="title">Title (A→Z)</option>
          </select>
          <button className="btn small" onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button className="btn ghost small" onClick={clearAll} title="Clear all posts">Clear</button>
        </div>
      </header>

      <main className="container">
        <aside className="left">
          <PostForm onSave={handleSave} editing={editing} onCancel={() => setEditing(null)} />
          <div className="info card">
            <h4>Tips</h4>
            <ul>
              <li>Use short titles. Add 1–3 tags for discoverability.</li>
              <li>Pin important posts with 📌.</li>
              <li>Posts saved locally in your browser.</li>
            </ul>
          </div>
        </aside>

        <section className="right">
          <div className="summary card">
            <div>
              <strong>{posts.length}</strong>
              <div className="muted">Total posts</div>
            </div>
            <div>
              <strong>{posts.filter(p => p.pinned).length}</strong>
              <div className="muted">Pinned</div>
            </div>
            <div>
              <strong>{new Date().toLocaleDateString()}</strong>
              <div className="muted">Today</div>
            </div>
          </div>

          <PostList
            posts={filteredSortedPosts()}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onTogglePin={handleTogglePin}
          />
        </section>
      </main>

      <footer className="footer">
        <small>Made with ❤️ using React • LocalStorage demo</small>
      </footer>
    </div>
  );
}

/* ---------- Sample posts ---------- */
function samplePosts() {
  return [
    {
      id: uid(),
      title: "Welcome to Blogify",
      body: "Ye ek demo post hai. Aap yahan apne thoughts, notes aur updates dal sakte hain. Try editing or creating a new post!",
      tags: ["welcome", "demo"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      pinned: true
    },
    {
      id: uid(),
      title: "React CRUD with LocalStorage",
      body: "Simple CRUD implementation using React hooks and localStorage. Perfect for small notes / blogging projects.",
      tags: ["react", "tutorial"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      pinned: false
    },
  ];
}