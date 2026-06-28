(function () {
  "use strict";

  const REMARKS = ["correct stamping was not there","cx put the call on hold, disclaimer given","cx not responding disclaimer given","tech issue tat 24hr","claim related query // claim transfer","call got disconnected while transferring to claim due to call flow cannot ob","asked to share bank statement on mail for refund, tat 24hr","call has been transferred to sales for new policy","OB\u003e\u003efeedback call, na","call has been transferred to NSTP","cx need tamil cb, tat shared","informed that policy is valid since no OT and no claim in last 12 month","asked to share kyc docs on WP, tat 24hr","pre issuance name correction asked to share RC and KYC docs on WP, tat 24hr","asked to complete pf and kyc since cx don\u0027t have kyc pyp, asked to manage, cx agreed, tat shared","asked to complete pf and kyc, tat 24hr","asked to complete pf and kyc, link and tat shared","cx getting NCB and OT related msg, as per cx confirmation NCB is correct since there is no OT and claim in last 12month","since cx getting vi msg to update odometer but informed it\u0027s not required","informed that since PYP already expired hence POI details informed, cx agreed","cx need sc, sent","cx need CPA, link and tat shared","informed that PAN is also required but cx not ready to share therefore asked to do form 60 hence link and tat shared","cx don\u0027t have PAN card, tat shared for refund.","informed that policy issued and sent also","renewal query, call has been transferred","nominee details does not matter as CPA not added","cx disconnected the call","vahan query, informed that it\u0027s SAOD","renewal query, since team is not available to cb arranged, tat 24hr","cx don\u0027t have kyc docs, asked to wait 24hr","vahan query tat shared","RSA query, number given","RSA query guided via app","RSA query, call has been transferred.","cx want to remove 0 from vehicle number, informed it\u0027s insurer format hence it won\u0027t impact at the time of claim and cx agreed.","change ownership to company, case shared, asked to share kyc docs on WP, sf, vi and tat shared.","vahan query already updated.","guided for vi and asked to wait 24hr for update.","since insurer not providing policy details to cx but informed that policy updated on vahan but for any complain asked to mail us cx don\u0027t want to raise and CPA info also given.","due to some ad on\u0027s/additional coverage cx want to cancel this policy, asked to share alt policy, deduction and tat shared for refund.","informed that it\u0027s comprehensive policy.","asked to pay sf and wait 24hr for next update.","OT case guide via my account sf, vi and tat shared.","✉ OT case guided via mail sf, vi and tat shared.","name correction guided via my account sf, vi and tat shared.","✉ name correction guided via mail sf, vi and tat shared.","address correction guide via my account sf, vi and tat shared.","✉ address correction guided via mail sf, vi and tat shared.","cx paid but not updated yet on BMS tat 24hr shared.","mmv correction guided via my account sf, vi and tat shared.","ncb correction guided via my account sf, vi and tat shared.","✉ ncb correction guided via mail sf, vi and tat shared.","gst addition guided via my account sf, vi and tat shared.","✉ gst addition guided via mail sf, vi and tat shared.","email id correction guided via my account sf, vi and tat shared.","✉ email id correction guided via mail sf, vi and tat shared.","mobile number correction guided via my account sf, vi and tat shared.","✉ mobile number correction guided via mail sf, vi and tat shared.","hypothecation add guided via my account sf, vi and tat shared.","✉ hypothecation add guided via mail sf, vi and tat shared.","hypothecation change guided via my account sf, vi and tat shared.","✉ hypothecation change guided via mail sf, vi and tat shared.","hypothecation delete guided via my account sf, vi and tat shared.","✉ hypothecation delete guided via mail sf, vi and tat shared.","poi correction guided via my account sf, vi and tat shared.","✉ poi correction guided via mail sf, vi and tat shared.","salutation correction guided via my account sf, vi and tat shared.","✉ salutation correction guided via mail sf, vi and tat shared.","pyp correction guided via my account sf, vi and tat shared.","✉ pyp correction guided via mail sf, vi and tat shared.","vahan not updated guided via my account sf, vi and tat shared.","✉ vahan not updated guided via mail sf, vi and tat shared.","engine number correction guided via my account sf, vi and tat shared.","✉ engine number correction guided via mail sf, vi and tat shared.","chassis number correction guided via my account sf, vi and tat shared.","✉ chassis number correction guided via mail sf, vi and tat shared.","regst. number correction guided via my account sf, vi and tat shared.","✉ regst. number correction guided via mail sf, vi and tat shared.","rto endorsement guided via my account sf, vi and tat shared.","✉ rto endorsement guided via mail sf, vi and tat shared.","registration date correction guided via my account sf, vi and tat shared.","✉ registration date correction guided via mail sf, vi and tat shared.","✉ mmv correction guided via mail sf, vi and tat shared.","manufactured date correction guided via my account sf, vi and tat shared.","✉ manufactured date correction guided via mail sf, vi and tat shared.","fuel type correction guided via my account sf, vi and tat shared.","✉ fuel type correction guided via mail sf, vi and tat shared.","cubic capacity correction guided via my account sf, vi and tat shared.","✉ cubic capacity correction guided via mail sf, vi and tat shared.","seating capacity correction guided via my account sf, vi and tat shared.","✉ seating capacity correction guided via mail sf, vi and tat shared.","colour change guided via my account sf, vi and tat shared.","✉ colour change guided via mail sf, vi and tat shared.","cng addition company fitted guided via my account sf, vi and tat shared.","✉ cng addition company fitted guided via mail sf, vi and tat shared.","cng addition external guided via my account sf, vi and tat shared.","✉ cng addition external guided via mail sf, vi and tat shared.","cx wanted to take comprehensive policy so want to cancel this policy asked to share alt policy deduction and tat shared for refund.","since bundle policy is expiring on 18th of july hence cx want to cancel this policy and want to take comprehensive policy therefore asked to share alt policy, deduction and tat shared for refund.","informed that since pyp got expired hence POI correction not possible.","cx don\u0027t want to wait and want to cancel this policy, tat shared for refund.","cx getting renewal msges from insurer informed that since policy not started yet therefore getting renewal msg asked to wait for starting.","2w sales query, call has been transferred.","2w sales since team is not available so cb arranged and tat shared.","cx want to know cashless garages, call has been transferred.","vi approved, asked to wait 24hr for update.","ZD query, informed that included.","OT case but cx just want to renew policy with new owner details, call has been transferred to sales.","tat shared for refund and call has been transferred to sales for new policy.","cx want to add ZD, asked to mail us but cx disconnected the call while checking details and due to call flow unable to cb.","tat shared for excess refund.","due to 2 ZD claims cx want to cancel this policy, asked to share alt policy deduction and tat shared for refund.","cx don\u0027t have kyc docs, tat shared for refund.","cx need manual vi, raised and tat shared.","informed that CPA is compulsory and separate premium is charged for CPA, cx agreed.","asked to make vi, tat 24hr for next update.","cx called for renewal since team is not available so number given.","cx called for claim since team is not available so number given.","informed that cx cannot download endts from app/website but can download from mail.","informed that CNG already added since it\u0027s external fitted hence it not mentioned in MMV, cx agreed.","VAS query, sent and info given.","cx got mail from insurer that incorrect NCB, asked share with us if endts required then process sf, vi and tat shared.","asked to share pahechan id and share ss, tat 24hr.","informed that since pyp got expired therefore policy is going to be start after 3days.","asked to share declaration on mail, tat 24hr.","informed that nominee endts already requested and tat shared.","PB9157040702///asked to wait till\u003e\u003e16 June 2026 for next update.","address correction, shared endts.","informed that need to login from registered mobile number to get details.","asked to complete kyc, tat 24hr.","info given about POI, cx agreed.","cx just want to cancel this policy, tat shared for refund.","cx taken comprehensive policy from outside, want to cancel this one, asked to share alt policy, deduction and tat shared.","informed that hard copy not required since policy will be updated on vahan and sc sent.","RSA query informed not included but PB also provide so call has been transferred to RSA team.","cx need RSA reimbursement so asked to mail us, tat 24hr.","multiple miss match hence cx want to cancel this asked to mail us if cancellation possible then cancellation process informed.","vahan query already updated on IIB portal for any query revert back on same mail.","since cx don\u0027t have pyp so asked to fill pf according that only and asked to compete kyc, tat shared.","vahan query tat shared after starting.","info given about POI as pyp expired, cx agreed.","informed that kyc docs already uploaded.","cx disconnected the call and correct stamping was not there.","reason and tat shared for cancellation/refund and call has been transferred to sales.","IB\u003e\u003e\u003evoice issue, asked to wait for cb.","due to cash less claim cx want to cancel this policy alt policy, deduction and tat shared for refund.","correct stamping was not there so i have merged the ticket.","cx booked 2 polices want to cancel this one deduction and tat shared for refund.","name correction info given but cx will call us again after staring the policy.","4w sales query, call has been transferred.","asked to share RC on WP, tat 24hr","asked to share pyp on WP, tat 24hr","cx need kanada cb, tat shared.","cx need malyalam cb, tat shared.","asked to share unmasked aadhar docs on mail, tat 24hr.","informed that policy already issued, still getting renewal msg, asked to wait for starting.","as per cx IDV is lesser than what he select but as per PF it\u0027s correct only informed that we can provide policy as per PF only.","cx don\u0027t want to pay any sf want to cancel this one, asked to wait 24hr for update and tat shared for update.","sf link not working asked to share ss on mail, tat 24hr for update.","informed that it\u0027s unlimited km plan.","cx booked 2 polies for same vehicle and cx want to cancel this asked to share alt policy deduction and tat shared for refund.","OT case but policy is going to be expire this month only hence suggested for direct renewal and call has been transferred","informed that address does not matter","informed that since don\u0027t have pyp so enter any random pyp details and then kyc, tat 24hr","cx need telgue cb, tat shared."];

  const QUICK_LINKS = [
    { name: "BMS Dashboard", label: "PolicyBazaar", url: "https://bms.policybazaar.com/dashboardV3", symbol: "B" },
    { name: "Internal Chat", label: "PolicyBazaar chat", url: "https://chatinternal.policybazaar.com/channel/6854fee0f93b60e3e7de14ca", symbol: "C" },
    { name: "CVANG Vahan", label: "Vahan workspace", url: "https://ntqueprince.github.io/CVANG_VAHAN/", symbol: "V" },
    { name: "Notebook", label: "Reference notes", url: "https://ntqueprince.github.io/textbook/", symbol: "N" },
    { name: "Update Ownership", label: "TW Internal", url: "https://twinternal.policybazaar.com/panel/UpdateOwnership.aspx", symbol: "O" },
    { name: "Form 1", label: "Google Forms", url: "https://docs.google.com/forms/d/e/1FAIpQLSc4d0d6mvWinEQj7F-qZzIZzfg_IWffTPMB9d517tiIGwj6kQ/viewform", symbol: "F1" },
    { name: "Form 2", label: "Google Forms", url: "https://docs.google.com/forms/d/e/1FAIpQLSfjP44jAJnIEPBMq6wugjLBWthfQ3sYtiiMC8H-2-dnN20Qvg/viewform", symbol: "F2" },
    { name: "Form 3", label: "Google Forms", url: "https://docs.google.com/forms/d/e/1FAIpQLScMAFtPmR4C3GtqCCz2meIJessXmFePOlUhqb0jRFZnMcrUvA/viewform", symbol: "F3" },
    { name: "Form 4", label: "Google Forms", url: "https://docs.google.com/forms/d/e/1FAIpQLScliXNbSsS85LhQiiFDkQXGBgJIHon2ByR9Wm0X9j4BUqedVg/formResponse", symbol: "F4" },
    { name: "PB Connect", label: "Connect home", url: "https://pbconnect.policybazaar.com/home", symbol: "P" },
    { name: "PB Wheels", label: "Wheels portal", url: "https://www.pbwheels.com/", symbol: "W" }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let toastTimer;

  function normalize(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
  function scoreRemark(text, query) {
    const q = normalize(query);
    if (!q) return 1;
    const clean = normalize(text);
    const textWords = clean.split(" ").filter(Boolean);
    const words = q.split(" ").filter(Boolean);
    if (!words.every(word => textWords.some(textWord => textWord.startsWith(word)))) return 0;
    let score = clean.includes(q) ? 80 : 0;
    words.forEach(word => { if (textWords.includes(word)) score += 35; if (textWords.some(item => item.startsWith(word))) score += 15; });
    return score;
  }

  function getMatches(query) {
    return REMARKS.map(text => ({ text, score: scoreRemark(text, query) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score || a.text.localeCompare(b.text))
      .slice(0, 20);
  }

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (_) {
      const temp = document.createElement("textarea");
      temp.value = text; temp.readOnly = true; temp.style.cssText = "position:fixed;left:-9999px";
      document.body.appendChild(temp); temp.select(); document.execCommand("copy"); temp.remove();
    }
  }

  function showToast(title, message, icon = "✓") {
    clearTimeout(toastTimer);
    $("#toastTitle").textContent = title; $("#toastMessage").textContent = message; $("#toastIcon").textContent = icon;
    $("#toast").classList.add("show");
    toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2400);
  }

  function renderRemarks() {
    const query = $("#remarkSearch").value;
    const matches = getMatches(query);
    const container = $("#remarkResults");
    container.replaceChildren(...matches.map(item => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "remark-card"; button.textContent = item.text;
      button.addEventListener("click", async () => {
        await copyText(item.text); $$(".remark-card.copied").forEach(card => card.classList.remove("copied"));
        button.classList.add("copied"); showToast("Remark copied", "Ready to paste anywhere");
        setTimeout(() => button.classList.remove("copied"), 1100);
      });
      return button;
    }));
    $("#emptyState").hidden = matches.length > 0;
    $("#resultCount").textContent = query ? `${matches.length} best match${matches.length === 1 ? "" : "es"}` : `Showing ${matches.length} of ${REMARKS.length} remarks`;
  }

  function formatTatDate(value) {
    const raw = String(value || "").trim(); if (!raw) return "";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const map = {jan:0,january:0,feb:1,february:1,mar:2,march:2,apr:3,april:3,may:4,jun:5,june:5,jul:6,july:6,aug:7,august:7,sep:8,sept:8,september:8,oct:9,october:9,nov:10,november:10,dec:11,december:11};
    const parts = raw.replace(/,/g," ").replace(/\s+/g," ").trim().split(/[\s./-]+/).filter(Boolean);
    if (parts.length < 3) return raw;
    let day, month, year;
    if (map[parts[0].toLowerCase()] != null) { month = map[parts[0].toLowerCase()]; day = +parts[1]; year = +parts[2]; }
    else if (map[parts[1].toLowerCase()] != null) { day = +parts[0]; month = map[parts[1].toLowerCase()]; year = +parts[2]; }
    else if (/^\d{4}$/.test(parts[0])) { year = +parts[0]; month = +parts[1] - 1; day = +parts[2]; }
    else { day = +parts[0]; month = +parts[1] - 1; year = +parts[2]; }
    if (year > 0 && year < 100) year += 2000;
    const date = new Date(year, month, day);
    return day && month >= 0 && month < 12 && year && date.getFullYear() === year && date.getMonth() === month && date.getDate() === day ? `${day} ${months[month]} ${year}` : raw;
  }

  function updateTicket() {
    const ticket = $("#ticketId").value.trim().toUpperCase();
    const tat = formatTatDate($("#tatDate").value);
    const remark = ticket && tat ? `${ticket}///asked to wait till>>${tat} for next update.` : "";
    $("#ticketOutput").textContent = remark || "Fill both fields to generate your remark.";
    $("#copyTicket").disabled = !remark; $("#copyTicket").dataset.remark = remark;
  }

  function switchMode(mode) {
    $$("[data-mode]").forEach(button => button.classList.toggle("active", button.dataset.mode === mode));
    $("#searchMode").hidden = mode !== "search"; $("#ticketMode").hidden = mode !== "ticket";
    setTimeout(() => (mode === "search" ? $("#remarkSearch") : $("#ticketId")).focus(), 0);
  }

  function switchView(view) {
    $$("[data-view]").forEach(button => { const active = button.dataset.view === view; button.classList.toggle("active", active); button.setAttribute("aria-selected", active); });
    $$(".workspace").forEach(panel => { const active = panel.id === `${view}View`; panel.classList.toggle("active", active); panel.hidden = !active; });
  }

  function renderLinks() {
    $("#quickLinkGrid").replaceChildren(...QUICK_LINKS.map(link => {
      const anchor = document.createElement("a"); anchor.className = "quick-link-card"; anchor.href = link.url; anchor.target = "_blank"; anchor.rel = "noopener";
      anchor.innerHTML = `<span class="link-symbol">${link.symbol}</span><div><strong>${link.name}</strong><small>${link.label}</small></div><span>↗</span>`;
      return anchor;
    }));
  }

  function openModal() { $("#unlockModal").hidden = false; document.body.style.overflow = "hidden"; setTimeout(() => $("#quickLinksPassword").focus(), 0); }
  function closeModal() { $("#unlockModal").hidden = true; document.body.style.overflow = ""; $("#unlockForm").reset(); $("#passwordError").textContent = ""; }
  function openAllLinks() {
    const opened = QUICK_LINKS.map(link => window.open(link.url, "_blank"));
    copyText("chrome://flags/");
    const launched = opened.filter(Boolean).length;
    closeModal();
    if (launched === QUICK_LINKS.length) {
      showToast("Links launched", "chrome://flags/ was also copied", "↗");
    } else {
      showToast("Allow pop-ups", launched + " of " + QUICK_LINKS.length + " links opened", "!");
    }
  }

  let remarksFloatingWindow = null;

  function buildFloatingHelper(doc) {
    doc.title = "OPEN — Remarks Helper";
    doc.documentElement.lang = "en";
    doc.body.innerHTML = `
      <main class="pip-shell">
        <header class="pip-head">
          <div><strong>Remarks Helper</strong><small>OPEN</small></div>
          <div>
            <button id="pipHide" type="button" title="Minimize">−</button>
            <button id="pipClose" type="button" title="Close">×</button>
          </div>
        </header>
        <div class="pip-mode">
          <button id="pipSearchTab" class="active" type="button">Search</button>
          <button id="pipTicketTab" type="button">Ticket + TAT</button>
        </div>
        <section id="pipSearchView">
          <div class="pip-search">
            <input id="pipRemarksInput" type="search" autocomplete="off" placeholder="Search remarks…">
            <button id="pipClear" type="button">Clear</button>
          </div>
          <p id="pipResultMeta" class="pip-meta"></p>
          <div id="pipRemarksResults" class="pip-results"></div>
        </section>
        <section id="pipTicketView" class="pip-ticket" hidden>
          <label>Ticket ID<input id="pipTicketInput" type="text" autocomplete="new-password"></label>
          <label>TAT / Date<input id="pipTatInput" type="text" autocomplete="new-password"></label>
          <span>Generated remark</span>
          <p id="pipTatOutput">Fill both fields to generate your remark.</p>
          <button id="pipCopyTicket" type="button" disabled>Copy remark</button>
        </section>
      </main>
      <button id="pipRestore" type="button">Open Remarks</button>
      <div id="pipToast">Copied</div>`;

    const style = doc.createElement("style");
    style.textContent = `
      *{box-sizing:border-box}html,body{margin:0;height:100%;font-family:Arial,sans-serif;color:#172033;background:#f3f5f7}
      button,input{font:inherit}.pip-shell{height:100%;display:flex;flex-direction:column;padding:10px}
      .pip-head{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#fff;border:1px solid #dde3ea;border-radius:8px}
      .pip-head>div:first-child{display:grid;gap:1px}.pip-head strong{font-size:13px}.pip-head small{font-size:9px;letter-spacing:.14em;color:#768195}
      .pip-head>div:last-child{display:flex;gap:3px}.pip-head button{width:29px;height:27px;border:0;border-radius:5px;background:transparent;color:#596579;cursor:pointer;font-size:17px}
      .pip-head button:hover{background:#eef2f5}.pip-mode{display:flex;gap:4px;margin:8px 0;padding:3px;border:1px solid #dde3ea;border-radius:7px;background:#e9edf1}
      .pip-mode button{flex:1;height:31px;border:0;border-radius:5px;background:transparent;color:#687386;font-size:11px;font-weight:700;cursor:pointer}
      .pip-mode button.active{background:#fff;color:#172033;box-shadow:0 1px 3px rgba(25,39,58,.12)}
      #pipSearchView{min-height:0;display:flex;flex:1;flex-direction:column}#pipSearchView[hidden],#pipTicketView[hidden]{display:none}
      .pip-search{display:flex;gap:5px}.pip-search input{min-width:0;flex:1;height:38px;padding:0 10px;border:1px solid #ccd4de;border-radius:6px;background:#fff;outline:0}
      .pip-search input:focus,.pip-ticket input:focus{border-color:#5da699;box-shadow:0 0 0 3px rgba(20,122,108,.09)}
      .pip-search button{padding:0 10px;border:1px solid #ccd4de;border-radius:6px;background:#fff;color:#526075;font-size:11px;font-weight:700;cursor:pointer}
      .pip-meta{margin:8px 2px 6px;color:#778295;font-size:10px}.pip-results{display:grid;gap:6px;min-height:0;overflow:auto;padding:1px 3px 8px 1px}
      .pip-card{width:100%;min-height:58px;padding:11px;border:1px solid #d8dfe7;border-radius:6px;background:#fff;color:#273245;text-align:left;font-size:13px;line-height:1.4;cursor:pointer}
      .pip-card:hover,.pip-card:focus{outline:0;border-color:#68aa9e;background:#f4faf8}.pip-card.copied{border-color:#147a6c;background:#eaf6f3}
      .pip-ticket{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:6px 8px;padding:2px 1px}.pip-ticket label{display:grid;gap:4px;color:#637085;font-size:9px;font-weight:700}
      .pip-ticket input{width:100%;height:34px;padding:0 8px;border:1px solid #ccd4de;border-radius:6px;background:#fff;outline:0;font-size:11px}
      .pip-ticket>span,.pip-ticket>p,.pip-ticket>button{grid-column:1/-1}
      .pip-ticket>span{margin-top:2px;color:#778295;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
      .pip-ticket p{min-height:46px;margin:0;padding:8px 10px;border:1px solid #d8dfe7;border-radius:6px;background:#fff;font-size:12px;line-height:1.35;overflow-wrap:anywhere}
      .pip-ticket>button{height:32px;border:0;border-radius:6px;background:#147a6c;color:#fff;font-size:11px;font-weight:700;cursor:pointer}.pip-ticket>button:disabled{opacity:.4;cursor:not-allowed}
      #pipRestore{display:none;width:100%;height:48px;border:1px solid #82bdb3;border-radius:8px;background:#fff;color:#147a6c;font-weight:700;cursor:pointer}
      #pipToast{position:fixed;right:12px;bottom:12px;padding:7px 10px;border-radius:6px;background:#172033;color:#fff;font-size:10px;opacity:0;transform:translateY(8px);transition:.18s;pointer-events:none}
      #pipToast.show{opacity:1;transform:none}body.pip-collapsed{padding:8px;background:#f3f5f7}body.pip-collapsed .pip-shell{display:none}body.pip-collapsed #pipRestore{display:block}
    `;
    doc.head.replaceChildren(style);

    const input = doc.getElementById("pipRemarksInput");
    const results = doc.getElementById("pipRemarksResults");
    const meta = doc.getElementById("pipResultMeta");
    const ticketInput = doc.getElementById("pipTicketInput");
    const tatInput = doc.getElementById("pipTatInput");
    const ticketOutput = doc.getElementById("pipTatOutput");
    const copyTicketButton = doc.getElementById("pipCopyTicket");

    ticketInput.value = "";
    tatInput.value = "";

    function pipToast(message) {
      const toast = doc.getElementById("pipToast");
      toast.textContent = message;
      toast.classList.add("show");
      doc.defaultView.setTimeout(() => toast.classList.remove("show"), 1000);
    }

    function pipCopy(text, button) {
      const clipboard = doc.defaultView.navigator.clipboard;
      const done = clipboard?.writeText ? clipboard.writeText(text) : copyText(text);
      Promise.resolve(done).finally(() => {
        if (button) {
          doc.querySelectorAll(".pip-card.copied").forEach(card => card.classList.remove("copied"));
          button.classList.add("copied");
          doc.defaultView.setTimeout(() => button.classList.remove("copied"), 900);
        }
        pipToast("Copied");
      });
    }

    function renderPipRemarks() {
      const matches = getMatches(input.value);
      results.replaceChildren(...matches.map(item => {
        const button = doc.createElement("button");
        button.type = "button";
        button.className = "pip-card";
        button.textContent = item.text;
        button.addEventListener("click", () => pipCopy(item.text, button));
        return button;
      }));
      meta.textContent = input.value ? matches.length + " best matches" : "Showing " + matches.length + " of " + REMARKS.length;
    }

    function updatePipTicket() {
      const ticket = ticketInput.value.trim().toUpperCase();
      const tat = formatTatDate(tatInput.value);
      const remark = ticket && tat ? ticket + "///asked to wait till>>" + tat + " for next update." : "";
      ticketOutput.textContent = remark || "Fill both fields to generate your remark.";
      copyTicketButton.disabled = !remark;
      copyTicketButton.dataset.remark = remark;
    }

    let activePipMode = "search";

    function setPipMode(mode) {
      const searchMode = mode === "search";
      activePipMode = mode;
      doc.getElementById("pipSearchTab").classList.toggle("active", searchMode);
      doc.getElementById("pipTicketTab").classList.toggle("active", !searchMode);
      doc.getElementById("pipSearchView").hidden = !searchMode;
      doc.getElementById("pipTicketView").hidden = searchMode;
      try { doc.defaultView.resizeTo(420, searchMode ? 620 : 320); } catch (_) {}
      (searchMode ? input : ticketInput).focus();
    }

    function setCollapsed(collapsed) {
      doc.body.classList.toggle("pip-collapsed", collapsed);
      const expandedHeight = activePipMode === "ticket" ? 320 : 620;
      try { doc.defaultView.resizeTo(collapsed ? 164 : 420, collapsed ? 90 : expandedHeight); } catch (_) {}
      (collapsed ? doc.getElementById("pipRestore") : (activePipMode === "ticket" ? ticketInput : input)).focus();
    }

    input.value = $("#remarkSearch").value;
    input.addEventListener("input", renderPipRemarks);
    input.addEventListener("keydown", event => { if (event.key === "Enter") doc.querySelector(".pip-card")?.click(); });
    doc.getElementById("pipClear").addEventListener("click", () => { input.value = ""; renderPipRemarks(); input.focus(); });
    doc.getElementById("pipSearchTab").addEventListener("click", () => setPipMode("search"));
    doc.getElementById("pipTicketTab").addEventListener("click", () => setPipMode("ticket"));
    ticketInput.addEventListener("input", updatePipTicket);
    tatInput.addEventListener("input", updatePipTicket);
    ticketInput.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); tatInput.focus(); } });
    tatInput.addEventListener("keydown", event => { if (event.key === "Enter" && !copyTicketButton.disabled) copyTicketButton.click(); });
    copyTicketButton.addEventListener("click", () => pipCopy(copyTicketButton.dataset.remark));
    doc.getElementById("pipHide").addEventListener("click", () => setCollapsed(true));
    doc.getElementById("pipRestore").addEventListener("click", () => setCollapsed(false));
    doc.getElementById("pipClose").addEventListener("click", () => doc.defaultView.close());

    renderPipRemarks();
    updatePipTicket();
    input.focus();
  }

  async function openRemarksFloating() {
    if (remarksFloatingWindow && !remarksFloatingWindow.closed) {
      remarksFloatingWindow.focus();
      return;
    }

    if ("documentPictureInPicture" in window) {
      try {
        const pipWindow = await window.documentPictureInPicture.requestWindow({ width: 420, height: 620 });
        remarksFloatingWindow = pipWindow;
        buildFloatingHelper(pipWindow.document);
        pipWindow.addEventListener("pagehide", () => { remarksFloatingWindow = null; }, { once: true });
        return;
      } catch (error) {
        if (error?.name === "NotAllowedError") return;
      }
    }

    const popup = window.open("", "openRemarksFloating", "popup=yes,width=420,height=620,left=80,top=80");
    if (!popup) {
      showToast("Pop-up blocked", "Allow pop-ups to use Floating Remarks", "!");
      return;
    }
    remarksFloatingWindow = popup;
    buildFloatingHelper(popup.document);
    popup.addEventListener("pagehide", () => { remarksFloatingWindow = null; }, { once: true });
  }

  function bindEvents() {
    $$("[data-view]").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
    $$("[data-mode]").forEach(button => button.addEventListener("click", () => switchMode(button.dataset.mode)));
    $("#remarkSearch").addEventListener("input", renderRemarks);
    $("#remarkSearch").addEventListener("keydown", event => { if (event.key === "Enter") $(".remark-card")?.click(); });
    $("#clearSearch").addEventListener("click", () => { $("#remarkSearch").value = ""; renderRemarks(); $("#remarkSearch").focus(); });
    [$("#ticketId"), $("#tatDate")].forEach(input => input.addEventListener("input", updateTicket));
    $("#ticketId").addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); $("#tatDate").focus(); } });
    $("#tatDate").addEventListener("keydown", event => { if (event.key === "Enter" && !$("#copyTicket").disabled) $("#copyTicket").click(); });
    $("#copyTicket").addEventListener("click", async event => { await copyText(event.currentTarget.dataset.remark); showToast("Ticket remark copied", "Ready to paste anywhere"); });
    $("#openPipButton").addEventListener("click", openRemarksFloating);
    $("#openAllButton").addEventListener("click", openModal); $$('[data-close-modal]').forEach(item => item.addEventListener("click", closeModal));
    $("#togglePassword").addEventListener("click", () => { const input = $("#quickLinksPassword"); input.type = input.type === "password" ? "text" : "password"; $("#togglePassword").textContent = input.type === "password" ? "Show" : "Hide"; });
    $("#unlockForm").addEventListener("submit", event => { event.preventDefault(); if ($("#quickLinksPassword").value !== "shivangpb") { $("#passwordError").textContent = "Password incorrect. Please try again."; $("#quickLinksPassword").select(); return; } openAllLinks(); });
    $("#copyFlags").addEventListener("click", async () => { await copyText("chrome://flags/"); showToast("Chrome flags copied", "Paste it in a new browser tab"); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !$("#unlockModal").hidden) closeModal(); if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); switchView("remarks"); switchMode("search"); } });
  }

  $("#ticketId").value = "";
  $("#tatDate").value = "";
  $("#remarkCount").textContent = REMARKS.length; $("#linkCount").textContent = QUICK_LINKS.length;
  renderRemarks(); renderLinks(); updateTicket(); bindEvents();
})();
