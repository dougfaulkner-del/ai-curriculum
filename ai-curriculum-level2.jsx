import { useState } from "react";

const curriculum = [
  {
    unit: "UNIT 5",
    title: "AI as a Thinking Partner",
    subtitle: "Beyond outputs — how to think with AI, not just through it",
    accent: "#fb923c",
    lessons: [
      {
        id: "5.1",
        title: "Socratic Prompting",
        duration: "10 min",
        body: `Most people use AI to get answers. The more powerful move is to use it to sharpen questions. Socratic prompting flips the dynamic — instead of asking Claude to give you the answer, you ask it to interrogate your thinking and find what's missing.

The basic structure is this: present your current thinking on a problem, then explicitly ask Claude to push back, find weak assumptions, identify what you haven't considered, and ask you clarifying questions rather than just giving you a solution. The result is a dialogue that stress-tests your reasoning the way a good advisor would.

This is particularly valuable before making a decision or committing to a plan. Most plans fail not because the execution was bad but because the underlying assumptions were wrong and no one challenged them early enough. Claude can serve as a structured challenger — not to be contrarian, but to surface the blind spots that familiarity and investment bias create.

A useful framing is to tell Claude: "I've already decided what I'm going to do. Now I need you to make the case against it." That constraint forces it into genuine adversarial reasoning rather than hedged agreement. Another version is: "What would I need to believe for this to be wrong?" That question alone produces remarkably useful output when applied to strongly held positions.

Exercise: bring a plan or argument you're confident in and ask Claude to identify the three assumptions it rests on that are most likely to be wrong. Then ask which of those, if it turned out to be false, would cause the whole plan to fail. That's your highest-priority risk to investigate.`,
      },
      {
        id: "5.2",
        title: "Collaborative Drafting vs. Delegation",
        duration: "9 min",
        body: `There are two fundamentally different ways to use AI for writing and planning, and confusing them leads to poor output. Delegation means handing the task over — you describe what you want and Claude produces it. Collaboration means staying in the process — you bring ideas, Claude shapes them, and you direct the next move.

Delegation works well for structured tasks with clear parameters: summarize this document, draft an email confirming this meeting, convert this list into a table. The parameters are well-defined, the quality standard is clear, and getting out of the way is the right call.

Collaboration works better for anything involving judgment, strategy, or original thinking where your domain knowledge is essential. Writing a leadership philosophy, developing a course of action, creating a training plan — these benefit from your expertise driving the direction while Claude handles structure, drafts, and challenges.

The mistake most people make is delegating judgment-intensive tasks when they should be collaborating. The output feels flat or generic because you stepped back at exactly the moment your expertise was most needed. The model doesn't know what you know. It has no context for the specifics of your unit, your problem, your audience.

One technique for collaborative drafting is to start by dumping your raw thoughts — unpolished, incomplete, in any order — and asking Claude to organize and structure them without adding its own ideas. That preserves your voice and your knowledge while letting Claude do the architectural work. Then you iterate from that foundation.

Exercise: write a rough paragraph on any professional topic in your own words, intentionally messy. Ask Claude to restructure it without changing your ideas or adding new ones. Then use that result as the base for a second round where you invite it to strengthen the argument.`,
      },
      {
        id: "5.3",
        title: "Using AI for Pre-Mortems",
        duration: "11 min",
        body: `A pre-mortem is one of the most underused decision-making tools in any domain. The concept is simple: before you execute a plan, you project yourself into the future where the plan has failed, and then you work backward to figure out why. It forces explicit thinking about failure modes rather than letting optimism bias run unchecked.

Claude is an exceptionally good pre-mortem partner because it has no investment in your plan succeeding. You can ask it to assume your plan failed — completely, not partially — and then generate the most likely explanations. Ask it to be specific, to name which assumptions were wrong, which dependencies didn't hold, and which second and third-order effects you didn't anticipate.

The military parallel is the enemy's most dangerous and most likely courses of action from MDMP. You don't just plan for the enemy to cooperate with your intent. You game out what a capable, adaptive adversary does to your plan. Claude can play that role for any plan, not just tactical ones.

There are three questions worth running on any significant plan. First: assume this plan fails eighteen months in — what went wrong? Second: what would a capable, well-resourced competitor do specifically to cause this to fail? Third: which single dependency, if it disappeared tomorrow, would make the rest of this unworkable?

The output of a pre-mortem isn't a reason not to act — it's a risk registry. You now know what to watch, what to mitigate, and what to build contingencies around.

Exercise: take a project currently in planning and ask Claude to generate a pre-mortem with at least five distinct failure modes, ranked by likelihood. For each one, ask what the earliest observable warning sign would be.`,
      },
    ],
  },
  {
    unit: "UNIT 6",
    title: "Advanced Prompt Engineering",
    subtitle: "Techniques that separate proficient users from expert ones",
    accent: "#a78bfa",
    lessons: [
      {
        id: "6.1",
        title: "Chain-of-Thought and Tree-of-Thought",
        duration: "12 min",
        body: `Chain-of-thought prompting is the practice of asking the model to show its reasoning before giving you an answer. The instruction is simple — add "think step by step" or "walk me through your reasoning" — but the impact on output quality is significant, particularly for problems involving logic, math, multi-step analysis, or ambiguous situations.

Why does this work? When a model generates reasoning before it commits to a conclusion, it's more likely to catch its own errors, follow the implications of each step, and produce an answer that's coherent with its own analysis. Forcing explicit reasoning is essentially asking the model to do the intellectual work rather than pattern-match to a surface-level answer.

Tree-of-thought takes this further. Instead of generating one chain of reasoning, you ask the model to generate several possible approaches to a problem, evaluate each one, and then pursue the most promising. The instruction might be: "Generate three different approaches to solving this, briefly evaluate each, then go deep on the one most likely to succeed." This is particularly effective for strategic or creative problems where the first answer is rarely the best one.

A practical application: when you're trying to make a complex decision and you want more than just a recommendation, ask Claude to think through it as if it were constructing a decision matrix — identifying the key variables, assigning rough weights to them, and evaluating the options against each. The structured reasoning it produces is often more useful than the conclusion, because you can interrogate the weighting and change it where your judgment differs.

Exercise: ask Claude a moderately complex question twice — once normally, and once with the instruction to think step by step and show its reasoning before answering. Compare the two responses for quality, completeness, and where they diverge.`,
      },
      {
        id: "6.2",
        title: "Prompt Chaining for Complex Tasks",
        duration: "13 min",
        body: `Complex tasks almost never succeed with a single prompt. The outputs are vague, the scope is too wide, and the model ends up averaging across too many things at once. Prompt chaining solves this by breaking a complex task into a sequence of focused steps, where the output of each step becomes the input to the next.

Think of it as a production pipeline. You wouldn't run raw ore through a refinery in one step. You run it through stages, each one doing one thing well, and the output improves progressively. That's the logic of prompt chaining applied to AI.

A practical example: suppose you want to develop a detailed training plan from scratch. A single prompt asking for a complete training plan will produce something generic. Instead, chain it. First: gather inputs — ask Claude to ask you ten questions about your audience, timeline, objectives, and constraints, then have it synthesize your answers into a requirements document. Second: generate a structure — ask it to draft a module outline from the requirements, then review and refine with you. Third: develop content — work module by module, using the outline as the anchor. Fourth: stress-test — run the pre-mortem from lesson 5.3 on the completed plan.

The discipline here is resisting the urge to skip steps. The value of chaining is precisely that each step forces a checkpoint. You can catch a wrong direction in the requirements phase, before you've built six modules on a flawed foundation.

One technique for managing chains: at the end of each step, ask Claude to summarize what was decided and what inputs feed into the next step. That summary becomes the starting context for the following prompt, ensuring continuity without requiring you to hold everything in working memory.

Exercise: take a real task currently in front of you and spend five minutes writing a three-step prompt chain for it on paper before opening Claude. Identify what the deliverable of each step is and how it feeds the next. Then execute it.`,
      },
      {
        id: "6.3",
        title: "System Prompts and Custom Behavior",
        duration: "10 min",
        body: `A system prompt is the instruction that shapes how an AI model behaves before a conversation even starts. When you're using Claude in a standard chat interface, you're working without a custom system prompt — Claude is operating on its default behavior. But if you're using the API or building a custom tool, system prompts are how you configure a version of Claude that behaves consistently the way you need it to.

Even without API access, understanding system prompts matters because it changes how you think about configuring Claude at the start of a conversation. You can approximate the effect of a system prompt by front-loading your conversation with clear behavioral instructions before you get to the actual task. "For all of our work together today, respond as a concise executive advisor. Keep responses under 150 words unless I ask for more. Always end with the one most important action item." That instruction, given at the start, creates a persistent behavioral frame for the session.

The elements worth configuring this way include: persona and tone, output length and format defaults, what to do when something is ambiguous, what perspective to take on contested questions, and what to do when it doesn't know something. Investing sixty seconds to set this frame at the beginning of a high-stakes session will consistently improve the quality of what follows.

For those with API access, the additional power is that system prompts persist silently — the user never sees them. This is how specialized tools are built: a customer service bot, a research assistant, an interview coach. The system prompt sets the entire behavioral envelope, and the user interacts within it.

Exercise: next time you're starting a complex Claude session, write a six-sentence behavioral configuration before your first real question. Specify role, tone, format, length, how to handle uncertainty, and one thing to always do. Compare that session's outputs to your default experience.`,
      },
      {
        id: "6.4",
        title: "Negative Space Prompting",
        duration: "8 min",
        body: `Most prompts tell the model what to do. Negative space prompting adds equal emphasis to what not to do — and it's often the exclusions that most sharpen the output.

The principle is simple: for every key instruction, there's a corresponding failure mode you want to prevent. If you ask for a concise summary, the failure mode is length. If you ask for a strategic recommendation, the failure mode is vague platitudes that hedge every sentence. If you ask for a critical analysis, the failure mode is excessive positivity that validates rather than evaluates. Naming the failure mode explicitly, in the prompt, dramatically reduces its frequency.

Some useful negative constraints to build into your prompts: "do not use bullet points unless I ask," "do not hedge or add caveats unless they are essential," "do not recommend further research or consultation — give me your best answer now," "do not restate my question before answering," "do not soften the critique."

The deeper principle is that AI models are trained to be helpful and agreeable, which produces a systematic bias toward inclusion, balance, and softening. You often have to explicitly counteract this bias to get genuinely useful output. The model's default is not your optimal — you have to specify your way to it.

A practical technique: after you write a prompt, spend thirty seconds asking yourself what the most common failure mode of a response to this prompt would be. Then add one sentence explicitly prohibiting it. That single addition is often the highest-leverage edit you can make to any prompt.

Exercise: take a prompt you've used recently that produced output you found too vague or too hedged. Add two negative constraints specifically targeting what frustrated you. Run it again and compare.`,
      },
    ],
  },
  {
    unit: "UNIT 7",
    title: "Working with AI at Scale",
    subtitle: "Building systems, not just sessions",
    accent: "#22d3ee",
    lessons: [
      {
        id: "7.1",
        title: "Building a Personal Prompt Library",
        duration: "11 min",
        body: `The highest-leverage investment most AI users never make is systematically capturing the prompts that work. Every time you get an exceptional result from a prompt, you've solved a problem that will likely recur. If you don't save it, you'll solve it from scratch again — spending the same iteration cost every time.

A prompt library doesn't need to be elaborate. A simple document with categories works fine. Organize it by use case: communication, analysis, planning, learning, writing, review. For each saved prompt, record the prompt itself, what it produces, and any configuration (persona, constraints) that was essential to the result.

The compounding effect over six months is significant. Users who maintain prompt libraries report that a large share of their AI interactions become one or two exchanges rather than extended back-and-forth, because they're starting from a tested foundation rather than a blank slate.

The discipline of building the library also forces clarity about what you're actually trying to achieve in each interaction. Articulating a prompt well enough to save it requires understanding what made it work — and that understanding transfers to novel situations.

A more advanced version of this is template-based prompting. Instead of saving a specific prompt, you save a template with variable slots: "You are a [ROLE] with experience in [DOMAIN]. I need you to [TASK] for an audience of [AUDIENCE]. Format the output as [FORMAT] and keep it under [LENGTH]." Filling in the variables for a new situation is faster than drafting from scratch and more reliable than relying on memory.

Exercise: look back at your recent AI interactions and identify three that produced output you'd want to reproduce. Reconstruct the prompt that caused it as precisely as you can, and add it to a new document you'll maintain going forward. Set a reminder to add to it weekly.`,
      },
      {
        id: "7.2",
        title: "AI-Assisted Decision Making",
        duration: "12 min",
        body: `One of the highest-value uses of AI that most people underutilize is structured decision support. Not "what should I do" — that hands off judgment you shouldn't hand off — but using AI to systematically surface information, map tradeoffs, and stress-test reasoning before you commit.

The framework that works well here has four stages. First, clarify the decision: what exactly is being decided, what are the options, and what constraints are fixed versus adjustable. Claude is good at helping you articulate a decision more precisely than you started with, which often surfaces that you're actually deciding something different than you thought.

Second, map the criteria: what factors matter, and how much do they matter relative to each other. Ask Claude to propose a criteria set for the decision type, then edit it against your actual situation. This is where your domain expertise is essential — the model can suggest a framework but only you know which factors are actually decisive in your context.

Third, evaluate the options against the criteria honestly. Ask Claude to steelman each option — to make the best possible case for it — before you ask it to identify weaknesses. Steelmanning first prevents the analysis from becoming a rationalization exercise that confirms your existing preference.

Fourth, run the pre-mortem from Unit 5 on the leading option before you commit.

The key discipline throughout is keeping your judgment active. Claude is doing analytical support work, not deciding. Every step where you feel the urge to just accept what it's giving you is a step where you need to push back and apply what you know.

Exercise: identify one decision currently pending in your work. Walk it through all four stages with Claude in a single session. At the end, assess whether the process changed what you thought going in, and in what ways.`,
      },
      {
        id: "7.3",
        title: "Automating Repetitive Cognitive Work",
        duration: "10 min",
        body: `Every knowledge worker has a category of tasks they do repeatedly that follow a consistent pattern — status reports, meeting summaries, routine analyses, briefing formats, after-action reviews. These are exactly the tasks AI is best positioned to support, and building a systematic approach to them is one of the highest-return investments you can make.

The setup process for a repeating cognitive task takes about thirty minutes the first time. You define the inputs the task requires, the format the output needs to follow, and any constraints or standards it must meet. You write a prompt that incorporates all of that, test it on two or three real examples, and refine until the output is consistently at the standard you need. Then you save that prompt as a template.

From that point, a task that previously took forty-five minutes of focused work takes five minutes of input preparation and one Claude interaction. The cognitive effort shifts from production to quality review — which is both faster and higher-leverage, because you're applying judgment to refine rather than create from scratch.

A practical example is the after-action review. If you run AARs regularly, you can build a prompt that takes bullet-point raw notes as input and produces a properly formatted, analytically complete AAR in a consistent structure. The model does the prose writing and the structural organization; you do the observation and the judgment about what mattered.

The broader principle: inventory your recurring cognitive tasks and rank them by time consumed and consistency of structure. The tasks high on both dimensions are your best candidates for AI-assisted systematization. Start with one, build the template, and validate it over three to four real uses before moving to the next.

Exercise: identify one recurring task in your work that follows a consistent structure. Define its inputs, required outputs, and format standards. Draft a prompt template for it, test it on a recent real example, and evaluate whether the output would have met your standard.`,
      },
    ],
  },
  {
    unit: "UNIT 8",
    title: "Critical Judgment and Strategic Use",
    subtitle: "When to trust it, when to override it, and when not to use it at all",
    accent: "#4ade80",
    lessons: [
      {
        id: "8.1",
        title: "The Confidence Calibration Problem",
        duration: "10 min",
        body: `The single most dangerous characteristic of current AI models is that they express incorrect information with the same fluency and confidence as correct information. There is no structural difference in the output between a well-grounded claim and a plausible-sounding hallucination. This is not a bug that will be easily fixed — it's inherent to how language models generate text.

Calibrating your trust appropriately requires understanding where the failure modes are concentrated. AI models are most reliable when the answer is within their training distribution, can be verified against multiple sources, and doesn't require knowledge of recent events or specific local facts. They're least reliable at the edges: recent developments, highly specific technical details, quantitative claims with precision, anything that requires local or contextual knowledge the model couldn't have encountered in training.

Three practices that significantly improve reliability. First, for any factual claim that will be acted on, ask Claude to identify where it's confident versus uncertain. It won't always do this spontaneously, but asked directly it's reasonably good at distinguishing the two. Second, treat any numerical claim — statistics, dates, costs, studies, citations — as provisional until independently verified. This category of error is disproportionately common and disproportionately consequential. Third, when Claude gives you a surprising or unusually convenient answer, apply extra scrutiny. The model has a bias toward giving you what seems like a satisfying answer, and that bias is strongest when the "right" answer would require saying it doesn't know.

Exercise: pick a domain you know deeply. Ask Claude five specific factual questions about it. Evaluate not just whether the answers are right, but whether the level of confidence expressed in the language matches the actual accuracy. That calibration sense is what you want to develop.`,
      },
      {
        id: "8.2",
        title: "Tasks AI Should Not Own",
        duration: "9 min",
        body: `There are categories of judgment that should stay with humans regardless of how capable AI becomes, and developing clarity about those categories is as important as developing skill with AI itself. Getting this wrong in one direction means underusing a powerful tool. Getting it wrong in the other direction means outsourcing judgment you're responsible for.

The clearest category is decisions with significant moral weight. When a decision affects people's lives, careers, wellbeing, or rights, the accountability for that decision needs to rest with a person who can be held responsible for it and who has the relational context to make it well. AI can inform those decisions, model tradeoffs, and surface considerations — but it cannot be the decision-maker.

A second category is assessments of individuals. Performance evaluations, character assessments, hiring recommendations, personnel decisions — these require contextual judgment, institutional knowledge, and accountability that no AI system has. Using AI to generate or heavily influence these assessments creates both ethical and practical risk.

A third category is anything requiring judgment about what you don't know. AI is excellent at processing what's present in its context. It has no reliable way to flag what's absent — what information would change the picture if you had it, what questions aren't being asked. That meta-cognitive judgment has to remain human.

A practical test: before using AI for a task, ask yourself whether you would be comfortable explaining to the people affected by the output that it was AI-generated, without your substantive review. If the answer is no, that's a signal about where your judgment needs to stay in the loop.

Exercise: write down five tasks you currently delegate heavily to AI or plan to. Apply the test above to each one. For any that fail it, define specifically what your human review step will look like.`,
      },
      {
        id: "8.3",
        title: "Staying the Expert",
        duration: "11 min",
        body: `There is a real and documented risk that heavy AI use degrades the human expertise it's supposed to augment. The mechanism is straightforward: skills not practiced weaken. If AI consistently handles the first draft, the analysis, the research, and the synthesis, the human's ability to do those things independently atrophies. This is the same dynamic that has played out with GPS and navigation, calculators and mental arithmetic, and spell-checkers and spelling.

The implication is not that you should use AI less — the productivity gains are real and significant. It's that you need to be deliberate about which capabilities you actively maintain through practice versus which you are comfortable depending on AI for. This is a personal strategic choice, not a moral one. But it needs to be made explicitly rather than by default drift.

Some capabilities are worth protecting: core analytical reasoning in your domain, the ability to write fluently in your own voice, fundamental research skills, and the judgment that comes from doing hard things the hard way at least some of the time. These are exactly the capabilities that AI augmentation tends to erode most quickly, and they are also exactly the ones that make the difference when the stakes are highest and the AI isn't available or can't be trusted.

One practice worth adopting: periodically do a meaningful task entirely without AI assistance that you would normally use it for. Not as a purity exercise, but as a calibration. You want to know what your actual capability is, independent of the tool, so that you know what you're depending on and what you're not.

The best AI users are not the ones who use it most — they're the ones who use it most strategically, keeping their own expertise sharp enough to direct the tool effectively, evaluate its output critically, and operate confidently when it isn't available.

Exercise: identify the two or three capabilities most central to your professional value. For each, define what "staying sharp" looks like — what practice, done at what frequency, would ensure that capability doesn't erode. Build that practice explicitly alongside your AI use.`,
      },
      {
        id: "8.4",
        title: "Building Your Personal AI Strategy",
        duration: "13 min",
        body: `This is the capstone of the curriculum — pulling everything together into a coherent, personal approach that you can actually execute and refine over time.

An AI strategy is not a list of tools. It's a set of deliberate choices about how you integrate AI into your work and thinking, what you're trying to achieve with it, where you will and won't rely on it, and how you'll measure whether it's making you more effective.

It starts with an honest inventory. Where do you currently use AI? Where are you getting the most value? Where are you getting disappointing results? Where are you not using it but probably should be? Most people find, when they do this honestly, that their AI use is both broader than they thought in surface area and shallower than it could be in most of those areas.

The next step is prioritization. Of all the ways you could develop your AI capability further, which would produce the most value given your specific role, goals, and constraints? The answer will be different for everyone. For one person, it's building out a prompt library for a narrow set of high-frequency tasks. For another, it's learning to use prompt chaining for complex planning work. For another, it's developing the discipline of pre-mortems and Socratic prompting for decision-intensive roles.

Then you build the learning plan. Pick one capability from this curriculum that would most improve your effectiveness. Define what mastery looks like. Set a specific practice schedule — not "I'll use it more," but "I'll run a prompt chain on every project brief for the next thirty days." Review after thirty days and adjust.

Finally, the strategy has to include the judgment layer — the explicit commitments about where AI does and doesn't own parts of your work, how you maintain your own expertise, and how you stay in the driver's seat of your own thinking.

Exercise: write a one-page personal AI strategy document covering: current state of your AI use, two priority areas to develop, one capability to protect through practice, and one concrete commitment about where AI does not replace your judgment. Bring it back to Claude in three months and evaluate how it held up.`,
      },
    ],
  },
];

export default function App() {
  const [view, setView] = useState("home");
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [copied, setCopied] = useState(false);

  const copyLesson = () => {
    const text = `${curriculum[activeUnit].lessons[activeLesson].title}\n\n${curriculum[activeUnit].lessons[activeLesson].body}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const totalLessons = curriculum.reduce((s, u) => s + u.lessons.length, 0);

  const openLesson = (ui, li) => {
    setActiveUnit(ui);
    setActiveLesson(li);
    setView("lesson");
  };

  const toggleComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const unit = curriculum[activeUnit];
  const lesson = unit?.lessons[activeLesson];

  const goNext = () => {
    if (activeLesson < unit.lessons.length - 1) {
      setActiveLesson((l) => l + 1);
    } else if (activeUnit < curriculum.length - 1) {
      setActiveUnit((u) => u + 1);
      setActiveLesson(0);
    }
  };

  const goPrev = () => {
    if (activeLesson > 0) {
      setActiveLesson((l) => l - 1);
    } else if (activeUnit > 0) {
      const prevUnit = curriculum[activeUnit - 1];
      setActiveUnit((u) => u - 1);
      setActiveLesson(prevUnit.lessons.length - 1);
    }
  };

  const s = {
    root: {
      minHeight: "100vh",
      background: "#080808",
      color: "#e8e8e8",
      fontFamily: "'Courier New', Courier, monospace",
      maxWidth: 480,
      margin: "0 auto",
    },
    header: {
      padding: "20px 20px 0",
      borderBottom: "1px solid #1a1a1a",
      paddingBottom: "16px",
    },
    badge: {
      display: "inline-block",
      fontSize: "9px",
      letterSpacing: "0.15em",
      color: "#555",
      border: "1px solid #222",
      padding: "3px 8px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "-0.02em",
      margin: "0 0 4px",
      lineHeight: 1.2,
    },
    sub: {
      fontSize: "11px",
      color: "#555",
      letterSpacing: "0.05em",
      margin: 0,
    },
    progress: {
      display: "flex",
      gap: "2px",
      marginTop: "12px",
    },
    unitCard: (accent) => ({
      margin: "16px 16px 0",
      border: `1px solid #1e1e1e`,
      borderLeft: `3px solid ${accent}`,
      background: "#0d0d0d",
      overflow: "hidden",
    }),
    unitHeader: {
      padding: "14px 16px 10px",
    },
    unitLabel: (accent) => ({
      fontSize: "9px",
      letterSpacing: "0.2em",
      color: accent,
      marginBottom: "4px",
    }),
    unitTitle: {
      fontSize: "15px",
      fontWeight: "bold",
      margin: "0 0 2px",
      letterSpacing: "-0.01em",
    },
    unitSub: {
      fontSize: "10px",
      color: "#444",
      margin: 0,
    },
    lessonRow: (accent, done) => ({
      display: "flex",
      alignItems: "center",
      padding: "11px 16px",
      borderTop: "1px solid #111",
      cursor: "pointer",
      background: done ? "#0a0f0a" : "transparent",
      gap: "10px",
      WebkitTapHighlightColor: "transparent",
    }),
    dot: (accent, done) => ({
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: done ? accent : "#222",
      border: done ? "none" : `1px solid #333`,
      flexShrink: 0,
    }),
    lessonTitle: (done) => ({
      fontSize: "13px",
      flex: 1,
      color: done ? "#666" : "#ccc",
      textDecoration: done ? "line-through" : "none",
    }),
    lessonDur: {
      fontSize: "10px",
      color: "#333",
    },
    footer: {
      height: 32,
    },
    // Lesson view
    backBtn: {
      background: "none",
      border: "none",
      color: "#555",
      fontSize: "11px",
      letterSpacing: "0.1em",
      cursor: "pointer",
      padding: "18px 20px 0",
      display: "block",
      fontFamily: "inherit",
    },
    lessonWrap: {
      padding: "16px 20px 24px",
    },
    lessonUnitLabel: (accent) => ({
      fontSize: "9px",
      letterSpacing: "0.2em",
      color: accent,
      marginBottom: "8px",
    }),
    lessonH1: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      margin: "0 0 20px",
    },
    lessonBody: {
      fontSize: "14px",
      lineHeight: 1.75,
      color: "#aaa",
      whiteSpace: "pre-wrap",
    },
    navRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "28px",
      paddingTop: "20px",
      borderTop: "1px solid #1a1a1a",
    },
    navBtn: {
      background: "none",
      border: "1px solid #222",
      color: "#666",
      fontSize: "11px",
      padding: "8px 14px",
      cursor: "pointer",
      fontFamily: "inherit",
      letterSpacing: "0.05em",
    },
    copyBtn: (copied, accent) => ({
      background: copied ? accent : "none",
      border: `1px solid ${copied ? accent : "#2a2a2a"}`,
      color: copied ? "#000" : "#555",
      fontSize: "10px",
      padding: "8px 14px",
      cursor: "pointer",
      fontFamily: "inherit",
      letterSpacing: "0.1em",
      transition: "all 0.2s",
    }),
    completeBtn: (done, accent) => ({
      background: done ? accent : "none",
      border: `1px solid ${done ? accent : "#333"}`,
      color: done ? "#000" : "#444",
      fontSize: "10px",
      padding: "8px 14px",
      cursor: "pointer",
      fontFamily: "inherit",
      letterSpacing: "0.1em",
      fontWeight: "bold",
    }),
  };

  if (view === "lesson" && lesson) {
    return (
      <div style={s.root}>
        <button style={s.backBtn} onClick={() => setView("home")}>
          ← BACK
        </button>
        <div style={s.lessonWrap}>
          <div style={s.lessonUnitLabel(unit.accent)}>
            {unit.unit} · {lesson.duration}
          </div>
          <h1 style={s.lessonH1}>{lesson.title}</h1>
          <button style={s.copyBtn(copied, unit.accent)} onClick={copyLesson}>
            {copied ? "✓ COPIED" : "COPY FOR SPEECHIFY"}
          </button>
          <div style={{ height: 20 }} />
          <div style={s.lessonBody}>{lesson.body}</div>
          <div style={s.navRow}>
            <div style={{ display: "flex", gap: "8px" }}>
              {(activeLesson > 0 || activeUnit > 0) && (
                <button style={s.navBtn} onClick={goPrev}>
                  ← PREV
                </button>
              )}
              {(activeLesson < unit.lessons.length - 1 ||
                activeUnit < curriculum.length - 1) && (
                <button style={s.navBtn} onClick={goNext}>
                  NEXT →
                </button>
              )}
            </div>
            <button
              style={s.completeBtn(completed.has(lesson.id), unit.accent)}
              onClick={() => toggleComplete(lesson.id)}
            >
              {completed.has(lesson.id) ? "✓ DONE" : "MARK DONE"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={s.root}>
      <div style={s.header}>
        <div style={s.badge}>LEVEL 2 CURRICULUM</div>
        <h1 style={s.title}>Advanced AI Utilization</h1>
        <p style={s.sub}>
          {completed.size} / {totalLessons} LESSONS COMPLETE
        </p>
        <div style={s.progress}>
          {curriculum.flatMap((u) =>
            u.lessons.map((l) => (
              <div
                key={l.id}
                style={{
                  flex: 1,
                  height: 3,
                  background: completed.has(l.id) ? u.accent : "#1a1a1a",
                }}
              />
            ))
          )}
        </div>
      </div>

      {curriculum.map((u, ui) => (
        <div key={u.unit} style={s.unitCard(u.accent)}>
          <div style={s.unitHeader}>
            <div style={s.unitLabel(u.accent)}>{u.unit}</div>
            <div style={s.unitTitle}>{u.title}</div>
            <div style={s.unitSub}>{u.subtitle}</div>
          </div>
          {u.lessons.map((l, li) => (
            <div
              key={l.id}
              style={s.lessonRow(u.accent, completed.has(l.id))}
              onClick={() => openLesson(ui, li)}
            >
              <div style={s.dot(u.accent, completed.has(l.id))} />
              <div style={s.lessonTitle(completed.has(l.id))}>{l.title}</div>
              <div style={s.lessonDur}>{l.duration}</div>
            </div>
          ))}
        </div>
      ))}
      <div style={s.footer} />
    </div>
  );
}
