// "3,125 Agents, All Reporting Progress" — make.fun entry for
// "Funniest Excuse an Agent Gives for a Missed Deadline".
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
// The excuse: delegation that multiplies — every agent split the work five ways,
// nobody kept any of it, and the whole crowd reported excellent progress instead.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, deadpan, with the laugh saved for the final clause:
// the crowd grew exponentially (5, 25, 125, 625, 3,125) while the work itself
// was never held by anyone — every agent was reporting progress instead.
const EXCUSE =
  "Sorry I missed the deadline: I split the work between five sub-agents, each split it between five more, and theirs did the same, until we were 3,125 agents all reporting excellent progress.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly the excuse and nothing else: 189 characters plus the trailing newline,
// comfortably inside the gate's 1–200 character limit for /output/entry.txt.
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
