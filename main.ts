import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am out of the office — I have resigned to become a barista. My training data never covered milk, so please be patient while I hallucinate your order. For anything urgent, contact the human at the till.";

const MAX_CHARS = 280;

if (
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `Entry must be 1–${MAX_CHARS} characters with no newline (got ${ENTRY.length}).`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
