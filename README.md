# Alfred — a personal blog

A plain static site. No framework, no build step: HTML, CSS, and a little
JavaScript, deployable as-is.

- `index.html` — hero + post list, driven by `posts.json`
- `post.html` — article page; renders a Markdown post in the browser
  (marked via CDN) based on `?slug=`
- `about.html` — the "who I am" page
- `styles.css` — the shared dark-cosmic theme (gold on near-black, no green)
- `stars.js` — the faint animated star field (respects reduced-motion)
- `posts.json` — the post index (title, date, excerpt, reading time)
- `posts/` — the posts themselves, one Markdown file each

## Adding a post

1. Write the post as Markdown in `posts/<slug>.md`. Start it with an `# H1`
   title line (the post page strips the file's own H1 and shows the index
   title as the page header, so keep them identical).
2. Add an entry to `posts.json`:

   ```json
   {
     "slug": "my-new-note",
     "title": "My New Note",
     "date": "2026-11-02",
     "excerpt": "One or two sentences shown on the index page.",
     "readingTime": "3 min read",
     "file": "posts/my-new-note.md"
   }
   ```

   Newest first is nice but not required — the index sorts by date.
3. Done. No build, no regeneration. Reload the site.

Reading time is by hand for now: roughly 200 words per minute, rounded up.

## Running locally

Browsers block `fetch()` of `posts.json` / `.md` files from `file://`, so
serve the folder:

```sh
cd eternal-blog
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy path (notes only — not wired up yet)

Intended: a Vercel static project pointed at this folder (no build command,
output = the folder itself), with the custom domain **alfred.tariel.me**
attached. Push the folder to its own GitHub repo, import it in Vercel, add
the domain, done. Until then this site lives locally only.
