# Curriculum Build Template
Reference for Claude when building new curriculum HTML files.
Always read this file before starting a new curriculum build.

---

## Output Format
- Single self-contained `.html` file
- No external dependencies
- Works as a GitHub Pages site
- Saves progress via localStorage
- Mobile-first, max-width 480px

---

## What Changes Per Curriculum

### 1. Head metadata
```html
<meta name="apple-mobile-web-app-title" content="SHORT TITLE">
<title>FULL PAGE TITLE</title>
```

### 2. Header text (in HTML body)
```html
<h1>SHORT TITLE</h1>
<div class="header-meta">Subtitle Line</div>
<div class="total-badge" id="progress-badge">0 / TOTAL_LESSONS</div>
```

### 3. localStorage key (must be unique per curriculum)
```js
const STORAGE_KEY = 'descriptive-curriculum-name-completed';
```

### 4. The curriculum data array (see format below)

---

## Curriculum Data Format

```js
const curriculum = [
  {
    unit: "UNIT 1",                          // Display label
    title: "Unit Title Here",               // Bold section heading
    subtitle: "One line describing focus",  // Muted subheading
    accent: "#007aff",                      // Hex color for this unit
    emoji: "📁",                            // Icon shown on lesson rows
    lessons: [
      {
        id: "1.1",                          // Unit.Lesson — must be unique
        title: "Lesson Title",             // Shown in list and lesson header
        duration: "9 min",                 // Shown in stats row and list
        sub: "One line description",       // Muted subtitle on lesson row
        body: `Full lesson text here.

Paragraphs separated by blank lines.

Each paragraph is plain prose — no markdown, no bullet points.
Speechify reads this directly so it must be clean text.

Exercise: always end with a concrete exercise paragraph.`
      },
      // ... more lessons
    ]
  },
  // ... more units
];
```

---

## Accent Color Palette
Use these for consistency across curriculums. Pick one per unit.

| Color       | Hex       | Used in               |
|-------------|-----------|------------------------|
| Blue        | #007aff   | GitHub/Netlify Unit 1  |
| Green       | #30d158   | GitHub/Netlify Unit 2  |
| Orange      | #ff9f0a   | GitHub/Netlify Unit 3  |
| Purple      | #bf5af2   | GitHub/Netlify Unit 4  |
| Warm Orange | #fb923c   | AI Level 2 Unit 5      |
| Violet      | #a78bfa   | AI Level 2 Unit 6      |
| Cyan        | #22d3ee   | AI Level 2 Unit 7      |
| Lime        | #4ade80   | AI Level 2 Unit 8      |
| Red         | #ff453a   | Available              |
| Teal        | #5ac8fa   | Available              |

---

## Content Guidelines

**Body text:**
- Plain prose only — no markdown, no bullets, no headers
- Paragraphs separated by a single blank line
- Speechify reads this directly; write for the ear, not the eye
- Aim for 4–6 paragraphs per lesson
- Always end with an Exercise paragraph starting with "Exercise:"

**Duration:**
- Estimate based on ~130 words per minute for audio
- Format: "9 min" or "12 min"

**Sub (lesson row subtitle):**
- One short phrase, 4–7 words
- Describes the core idea of the lesson

**Unit subtitle:**
- One sentence describing the unit's focus
- Written as a fragment: "How to think with AI, not just through it"

---

## Full HTML Structure (skeleton)

```
<!DOCTYPE html>
<html>
<head>
  [meta tags]
  [full CSS block — copy verbatim from existing curriculum]
</head>
<body>

<!-- HOME -->
<div id="home">
  <div class="header">
    [header-top with h1, header-meta, total-badge]
    [progress-strip]
    [tab-bar with Lessons / Full Curriculum tabs]
  </div>
  <div id="lessons-view">
    <div id="units-container"></div>
    <div class="footer"></div>
  </div>
  <div id="full-view">
    <div class="full-copy-wrap">
      <button class="full-copy-btn" id="full-copy-btn" onclick="copyAll()">
        Copy All for Speechify
      </button>
    </div>
    <div id="full-content"></div>
    <div class="footer"></div>
  </div>
</div>

<!-- LESSON VIEW -->
<div id="lesson-view">
  <div class="lv-header">
    [back button]
    [lv-label, lv-title]
  </div>
  <div class="lesson-wrap">
    [stats-row: Unit, Read Time, Progress]
    [copy-btn: Copy for Speechify]
    [lv-body]
    [nav-row: prev/next]
    [complete-btn: Mark Complete]
  </div>
</div>

<script>
  const curriculum = [ ... ];
  const STORAGE_KEY = '...';

  // Functions (copy verbatim from existing curriculum):
  // saveCompleted, buildHome, updateHomeProgress,
  // switchTab, buildFullView, copyAll,
  // openLesson, renderLesson, goHome,
  // goNext, goPrev, toggleComplete, copyLesson

  buildHome();
</script>
</body>
</html>
```

---

## Checklist Before Delivering

- [ ] `STORAGE_KEY` is unique (not reused from another curriculum)
- [ ] `total-badge` count matches actual lesson count
- [ ] Every lesson has: id, title, duration, sub, body
- [ ] All body text is plain prose — no markdown symbols
- [ ] Each lesson ends with an Exercise paragraph
- [ ] Accent colors are distinct across units
- [ ] File is fully self-contained (no external scripts or stylesheets)
- [ ] localStorage key follows naming convention: `topic-name-completed`

