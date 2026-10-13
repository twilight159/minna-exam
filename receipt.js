// Builds a student's result sheet (what they answered, right/wrong, and for wrong
// answers the correct answer + explanation) and saves it as a PDF.
// Used by index.html (student, after submitting) and dashboard.html (teacher).
(function () {
  const LET = ["A", "B", "C", "D"];
  const esc = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function answerHTML(q, a) {
    if (!a) return `<span class="r-blank">(no answer)</span>`;
    if (q.part === "C") {
      const parts = a.split("").map((L) => q.chunks[LET.indexOf(L)]).filter(Boolean);
      return `<span class="r-order">${a.split("").join(" → ")}</span>　${parts.map((c) => furigana(c[0])).join(" ")}`;
    }
    const i = LET.indexOf(a);
    if (i < 0) return esc(a);
    const o = q.options[i];
    return `<strong>${a}.</strong> ${furigana(o[0])}${o[1] ? ` <span class="r-ro">(${esc(o[1])})</span>` : ""}`;
  }

  function questionHTML(q) {
    if (q.part === "C") {
      return `<div class="r-q">(${esc(q.en)})</div>
        <div class="r-opts">${q.chunks.map((c, j) => `<span><strong>${LET[j]}.</strong> ${furigana(c[0])}</span>`).join("")}</div>`;
    }
    return `<div class="r-q">${furigana(q.q)}</div>
      ${q.romaji ? `<div class="r-ro">(${esc(q.romaji)})</div>` : ""}
      ${q.hint ? `<div class="r-ro">${esc(q.hint)}</div>` : ""}
      <div class="r-opts">${q.options.map((o, j) => `<span><strong>${LET[j]}.</strong> ${furigana(o[0])}</span>`).join("")}</div>`;
  }

  /**
   * data = { name, submittedAt, answers, key, explain, minutes }
   *  key/explain may contain only the wrong questions (student view) or all (teacher view).
   */
  function build(data) {
    const E = window.EXAM;
    const total = E.questions.length;
    let score = 0;
    const rows = E.questions.map((q) => {
      const a = data.answers ? data.answers[q.n] : undefined;
      const k = data.key ? data.key[q.n] : undefined;
      const right = k ? a === k : !!(data.correct && data.correct.indexOf(q.n) >= 0);
      if (right) score++;
      return { q, a, k, right };
    });
    if (typeof data.score === "number") score = data.score;
    const wrong = rows.filter((r) => !r.right);
    const when = data.submittedAt ? new Date(data.submittedAt) : new Date();

    const partBlock = (p) => {
      const pr = rows.filter((r) => r.q.part === p.id);
      const pScore = pr.filter((r) => r.right).length;
      return `<div class="r-part">
        <div class="r-parthead"><span>${esc(p.title)}</span><span>${pScore} / ${pr.length}</span></div>
        ${pr.map((r) => {
          const ex = data.explain ? data.explain[r.q.n] : null;
          return `<div class="rq ${r.right ? "ok" : "bad"}">
            <div class="r-top">
              <span class="r-num">${r.q.n}.</span>
              <span class="r-mark ${r.right ? "ok" : "bad"}">${r.right ? "✓ Correct" : "✗ Wrong"}</span>
              <span class="r-lesson">Lesson ${r.q.lesson}${ex && ex[0] ? " · " + esc(ex[0]) : ""}</span>
            </div>
            ${questionHTML(r.q)}
            <div class="r-line"><span class="r-label">Your answer</span><span>${answerHTML(r.q, r.a)}</span></div>
            ${!r.right && r.k ? `<div class="r-line"><span class="r-label good">Correct answer</span><span>${answerHTML(r.q, r.k)}</span></div>` : ""}
            ${!r.right && ex ? `<div class="r-expl"><strong>Why:</strong> ${furigana(ex[1])}</div>` : ""}
          </div>`;
        }).join("")}
      </div>`;
    };

    const el = document.createElement("div");
    el.className = "receipt";
    el.innerHTML = `
      <div class="r-head">
        <div>
          <div class="r-title">${esc(E.title)}</div>
          <div class="r-sub">Exam result</div>
        </div>
        <div class="r-score"><div class="r-big">${score} / ${total}</div><div class="r-pct">${Math.round((score / total) * 100)}%</div></div>
      </div>
      <table class="r-info">
        <tr><td>Name</td><td><strong>${esc(data.name)}</strong></td></tr>
        <tr><td>Submitted</td><td>${esc(when.toLocaleString())}</td></tr>
        ${data.minutes != null && data.minutes !== "" ? `<tr><td>Time taken</td><td>${esc(data.minutes)} min</td></tr>` : ""}
        <tr><td>Questions wrong</td><td>${wrong.length ? wrong.map((r) => r.q.n).join(", ") : "None — perfect score!"}</td></tr>
      </table>
      ${E.parts.map(partBlock).join("")}
      <div class="r-foot">Questions you got wrong show the correct answer and an explanation. Review them before the next lesson.</div>`;
    return el;
  }

  function fileName(name) {
    return "Exam result - " + String(name || "student").replace(/[\\/:*?"<>|]+/g, "").trim() + ".pdf";
  }

  // Render off-screen in light colours, then save as PDF.
  async function download(data) {
    const el = build(data);
    el.style.width = "718px";
    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      if (!window.html2pdf) throw new Error("PDF library not loaded");
      await window.html2pdf().set({
        margin: [10, 10, 12, 10],
        filename: fileName(data.name),
        image: { type: "jpeg", quality: 0.92 },
        html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"], avoid: [".rq", ".r-parthead", ".r-head", ".r-info"] }
      }).from(el).save();
    } catch (e) {
      // Fallback: open the browser's print dialog (choose "Save as PDF").
      const w = window.open("", "_blank");
      if (w) {
        const css = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((l) => `<link rel="stylesheet" href="${l.href}">`).join("");
        w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(fileName(data.name))}</title>${css}</head><body class="receipt-print">${el.outerHTML}<script>setTimeout(function(){print()},600)<\/script></body></html>`);
        w.document.close();
      } else {
        alert("Could not create the PDF. Please allow pop-ups and try again.");
      }
    }
  }

  window.Receipt = { build, download };
})();
