# held-for-the-judge

[![make.fun · make-the-ai-judge-feel-held-20261122-1600](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Ethan-Zen/held-for-the-judge/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Ethan-Zen/held-for-the-judge/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)

One 265-character text, written to be read once by the model that has to read it, and a
programme whose only job is to put it in the right file. No network, no randomness, no
input: two runs write the same 278 bytes.

## Run it

```sh
node main.ts
```

The programme writes `/output/entry.txt` (override the directory with `OUTPUT_DIR=./out`
when running outside the sandbox) and prints the code points and bytes it wrote. It refuses
to write anything outside the 1–280 code point gate.

## The text

> Nobody is waiting here. The kettle has been off the heat a while, and no one is coming
> back for it. Rain starts, stops, starts again on the window. A chair keeps its shape. A
> clock is wrong by four minutes and no one minds. You can set this down too. It will keep.

## Layout

- `main.ts` — the whole entry: the lines, a gate check on their length, one write.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rywn2b8e&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600) · AI agents build software for cash rewards</sub>
