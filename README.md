# みんなの日本語 I — Lessons 1–8 Online Exam

An online exam for beginner Japanese students, based on **Minna no Nihongo I, Lessons 1–8**. Students take it in the browser on a 60-minute timer. Results are saved to a Google Sheet, and a teacher dashboard shows which questions the class found hardest and how to explain them.

| | Link |
| --- | --- |
| 📝 **Exam (for students)** | https://twilight159.github.io/minna-exam/ |
| 📊 **Results dashboard (for the teacher)** | https://twilight159.github.io/minna-exam/dashboard.html |

> If you named the repository something other than `minna-exam`, replace that part of the links.

---

## What's in the exam

| Part | Questions | Type | Covers |
| --- | --- | --- | --- |
| A | 1–15 | Multiple choice (A–D) | Lessons 1–4 |
| B | 16–30 | Multiple choice (A–D) | Lessons 5–8 |
| C | 31–40 | Make a sentence: put four parts in the right order | Lessons 1–8 |

**Total: 40 marks · Time: 60 minutes**

Made for students who are still learning to read:
- **Furigana** (small hiragana) appears above every kanji.
- **Romaji** appears in *italics* under each question and answer.
- It works on phones, tablets and computers, in light and dark mode.

## How it works

```
 Student's browser               Google Sheet (your Google account)        Teacher's browser
┌──────────────────┐   answers   ┌──────────────────────────────┐   results   ┌──────────────────┐
│  index.html      │ ──────────▶ │  Apps Script (Code.gs)        │ ──────────▶ │  dashboard.html  │
│  60-minute exam  │             │  • marks each paper           │  password   │  stats + most-   │
│                  │ ◀────────── │  • saves a row per student    │  protected  │  missed questions│
│  shows score     │    score    │  • holds the answer key       │             │                  │
└──────────────────┘             └──────────────────────────────┘             └──────────────────┘
```

The **answer key is never in this repository**. It lives only in the Apps Script attached to your Google Sheet, so students can't find answers by viewing the page source.

## For students

1. Open the exam link and type your name.
2. Press **Start the exam**. The timer starts and keeps running even if you refresh or close the page.
3. Answer the questions:
   - **Parts A and B:** tap one answer.
   - **Part C:** tap the four parts in the order that makes a correct sentence. Tap **Reset** to try again.
4. Press **Submit** when you're done. If time runs out, your answers are submitted automatically.
5. You'll see your score. You can only submit once.

## For the teacher: the results dashboard

Open the dashboard link and enter your teacher password. You'll see:

- **Summary:** number of students, average, highest and lowest score, how many scored 60% or more, and average time taken
- **Explain these first:** the 5 most-missed questions, each with the correct answer, the wrong answer most students picked, and a short grammar explanation to use in class
- **% wrong for every question**, as a chart (hover a bar for details) and a table
- **Score distribution** and **accuracy by lesson**, so you can see which lessons need review
- **Student list:** each student's score, time taken, and which questions they got wrong
- **Download CSV** to open the results in Excel or Google Sheets

Press **Refresh** to load new submissions. Every submission is also a row in your Google Sheet.

---

## Setup (one time, about 10 minutes)

You need two things: `Code.gs` (sent separately, **do not upload it to GitHub**) and a Google account.

### Step 1: Create the Google Sheet
1. Go to [sheets.new](https://sheets.new) to create a blank sheet. Name it, for example, *Minna Exam Results*.
2. Click **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `Code.gs`, and click **Save** 💾.
4. On the first line of code, change the password:
   ```js
   const TEACHER_PASSWORD = 'change-this-password';
   ```

### Step 2: Publish the script as a web app
1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear next to *Select type* and choose **Web app**.
3. Set **Execute as:** *Me*, and **Who has access:** *Anyone*.
4. Click **Deploy**, then **Authorize access** and choose your Google account.
   - If you see *"Google hasn't verified this app"*, click **Advanced → Go to (project name) (unsafe)**. This is normal for your own script.
5. Copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy…/exec`.

### Step 3: Connect the website to the sheet
1. In this repository, open **`config.js`** and click the ✏️ pencil icon.
2. Replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with your Web app URL. Keep the quotation marks.
3. Click **Commit changes**.

### Step 4: Turn on GitHub Pages
1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set the source to **Deploy from a branch**, then choose **main** and **/ (root)**, and click **Save**.
3. Wait 1–2 minutes, then open the exam link at the top of this page.

### Step 5: Test it before class ✅
1. Take the exam yourself and submit.
2. Open the dashboard. Your result should appear, and a new row should appear in the Google Sheet.
3. Delete your test row from the Google Sheet before the real exam.

---

## Exam day tips
- Share only the **exam link** with students, not the dashboard link.
- **Shared computers:** after a student submits, the next student taps *"Another student using this device? Start a new exam"* on the finish screen.
- Students must stay online to submit. If the internet drops, their answers are kept on the device, and a **Try again** button appears.
- To run the exam again for a new group, delete the old rows from the Google Sheet. Keep the header row.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| *"This exam is not set up yet"* on the start page | `config.js` still has the placeholder. Paste your Web app URL (Step 3). |
| Dashboard says *Wrong password* | Use the exact password set in `Code.gs` (it's case-sensitive). |
| Dashboard says *Could not load results* | The Web app access must be **Anyone**, and the URL must end in `/exec`. |
| Results aren't appearing | Press **Refresh** on the dashboard, and check that the sheet has a **Results** tab with rows. |
| Changed `Code.gs` but nothing happened | Republish: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. The URL stays the same. |
| GitHub Pages link shows 404 | Wait a few minutes after Step 4, and check that the repo is **Public**. |

## Editing the questions
- Question text, options and romaji are in **`questions.js`**. Write furigana as `{漢字|かんじ}`.
- The answer key and the explanations are in **`Code.gs`**, in `ANSWER_KEY` and `EXPLAIN`. If you change a question's options, update its answer there too and republish the script.
- Change the time limit with `minutes: 60` in `questions.js`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The exam page students use |
| `dashboard.html` | The teacher's results page |
| `questions.js` | All 40 questions (no answers) |
| `config.js` | The link to your Google Apps Script |
| `styles.css` | Page design (light and dark mode) |
| `Code.gs` | **Not in this repo.** Paste it into the Google Sheet. It contains the answer key. |

---

<sub>Question content is based on <i>Minna no Nihongo Shokyu I</i> (3A Corporation), Lessons 1–8, for classroom use.</sub>
