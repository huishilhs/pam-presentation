# Pam — From Vision to Reality

P&G Implementation & Change Plan · Group 2 · Semester Two presentation.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Navigate with arrow keys, space, or the chevron buttons.

## Project Structure

```
app/
├── layout.jsx              Root HTML layout + font loading
├── page.jsx                Entry point — renders the Deck
├── globals.css             ALL styles — edit here for visual changes
└── components/
    ├── Deck.jsx            Main controller — slide order + Kotter state
    ├── Navigation.jsx      Prev/next buttons + counter + progress bar
    ├── KotterRow.jsx       The persistent 8-step row (zooms between states)
    ├── KotterContent.jsx   Content panel for each Kotter step (1–8)
    └── slides/
        ├── TitleSlide.jsx          Slide 1 · title
        ├── HookSlide.jsx           Slide 2 · phone ringing
        ├── OpeningSlide.jsx        Slide 3 · problem statement
        ├── RecapSlide.jsx          Slide 4 · semester 1 recap + video
        ├── WhySlide.jsx            Slide 5 · 70% digital transformations fail
        ├── KotterOverviewSlide.jsx Slide 6 · all 8 Kotter steps
        ├── ClosingSlide.jsx        Slide 15 · closing
        └── ThanksSlide.jsx         Slide 16 · thank you
```

## Editing Guide

### Changing slide content
Open the relevant slide file in `app/components/slides/`. Each is self-contained.

### Changing Kotter step content
Open `app/components/KotterContent.jsx`. All 8 step panels are in that one file, clearly labelled.

### Changing colors or styles
Open `app/globals.css`. CSS variables at the top control the whole palette:
- `--blue` — primary P&G blue
- `--cyan` — secondary bright blue
- `--yellow` — accent yellow
- `--white` — white

### Adding or reordering slides
Open `app/components/Deck.jsx`. The `slides` array at the top defines the order. Reorder, add, or remove lines there.

### Replacing the video placeholder
Open `app/components/slides/RecapSlide.jsx`. Replace the `<div className="video-placeholder">...</div>` with a `<video>` element pointing to your video file. Put your video in `public/` and reference it as `/your-video.mp4`.

## Keyboard Shortcuts

- `→` / `Space` — next slide
- `←` — previous slide
- `Home` — first slide
- `End` — last slide
