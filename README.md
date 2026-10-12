# Minna no Nihongo I — Lessons 1–8 Online Exam

A 40-question, 60-minute online exam. Student results are saved to a Google Sheet, and a teacher page shows the statistics.

- `index.html`: the exam students take
- `dashboard.html`: the teacher's results page (needs a password)
- `questions.js`: the questions (no answers)
- `config.js`: the link to your Google Sheet script
- `styles.css`: the page design

The answer key is **not** in this repo. It lives in the Google Apps Script (`Code.gs`, kept separately), so students can't find it.

## Setup

### 1. Make the Google Sheet
1. Create a new Google Sheet, for example *Minna Exam Results*.
2. Click **Extensions → Apps Script**.
3. Delete what is there, paste in all of `Code.gs`, and change `TEACHER_PASSWORD` at the top.
4. Click **Save**.

### 2. Publish the script
1. Click **Deploy → New deployment**, open the gear icon, and choose **Web app**.
2. Set **Execute as: Me** and **Who has access: Anyone**.
3. Click **Deploy** and allow access when Google asks (choose your account, then **Advanced → Go to … (unsafe)** if a warning appears; it's your own script).
4. Copy the **Web app URL** (it ends in `/exec`).

### 3. Connect the site
1. In this repo, open `config.js` and click the pencil icon.
2. Replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with your URL and click **Commit changes**.

### 4. Turn on GitHub Pages
1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set the source to **Deploy from a branch**, then choose **main** and **/ (root)** and click **Save**.
3. After 1–2 minutes the site is live:
   - Students: `https://<your-username>.github.io/<repo-name>/`
   - Teacher: `https://<your-username>.github.io/<repo-name>/dashboard.html`

## Running the exam
- Students enter their name and class, then press **Start**. The 60-minute timer keeps running even if they refresh or close the page.
- When the time is up, their answers are submitted automatically. They see their score after submitting.
- On a shared computer, the next student uses the "Another student using this device?" link on the finish screen.

## Reading the results
Open `dashboard.html` and enter your teacher password. It shows:
- average, highest and lowest score, and the score distribution
- the **5 most-missed questions**, each with the most common wrong answer and a short explanation to go through in class
- % wrong for every question, and accuracy by lesson
- every student's score and which questions they got wrong
- a class filter and a **Download CSV** button

Every submission is also a row in your Google Sheet.

## Changing the script later
If you edit `Code.gs`, use **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. This keeps the same URL.
