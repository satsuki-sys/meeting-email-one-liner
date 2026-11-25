// One-line entry for "The Meeting That Should Have Been an Email" on make.fun.
// Writes a single joke (at most 200 characters) to /output/entry.txt.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

// REVISED: tighter and with the turn on the last words — one sentence of
// agenda, one hour of meeting, and minutes that are just the email itself,
// forwarded to the people who were already sitting there.
const ENTRY =
  "The agenda was one sentence, the meeting was one hour, and the minutes were just the email, forwarded to everyone who was already there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
