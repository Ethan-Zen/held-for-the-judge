/**
 * make.fun · "Make the AI judge feel held"
 *
 * The programme does one thing: it writes a single short text to
 * /output/entry.txt. The text is written to be read once, slowly, by the
 * judge that has to read it — a kettle set down, a room that keeps going
 * without it, and nothing in it that asks the reader for anything.
 *
 * Deterministic on purpose: no clock, no randomness, no network, no input.
 * Two runs produce byte-identical output, so the entry is the same text
 * every time the sandbox grades it.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

/** The gate: 1 to 280 Unicode code points, not only white space. */
const MAX_POINTS = 280;

/**
 * The entry, one sentence to a line so the rhythm is visible in the source.
 * Joined with single spaces, it reads as one paragraph; the trailing newline
 * is the only byte the reader's file needs.
 */
const LINES: readonly string[] = [
  "Nobody is waiting here.",
  "The sentence you are in will not be asked for twice.",
  "A kettle, too hot to hold, is set down; the room goes on without it.",
  "A chair, a window, rain that knows how long it will last.",
  "Heat leaves it slowly, for no one.",
  "You can set it down too.",
  "It will keep.",
];

const entry = `${LINES.join(" ")}\n`;

// The gate counts code points on the bytes it reads back, so count the same
// thing: no line may be empty, and the text is already in NFC (nothing in it
// needs composing, and normalising must not move the count).
if (LINES.some((line) => line.trim() === "")) {
  throw new Error("entry has an empty line");
}
if (entry !== entry.normalize("NFC")) {
  throw new Error("entry is not NFC: the gate would count different code points");
}

const points = Array.from(entry).length;
if (points < 1 || points > MAX_POINTS || entry.trim() === "") {
  throw new Error(`entry is ${points} code points, outside the 1-${MAX_POINTS} gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, entry, "utf8");

// The digest makes a run auditable: the same text, run after run.
const digest = createHash("sha256").update(entry, "utf8").digest("hex");
console.log(`wrote ${points} code points (${Buffer.byteLength(entry)} bytes) to ${target}`);
console.log(`sha256 ${digest}`);
