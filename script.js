(function () {
  const $ = (id) => document.getElementById(id);

  // ---------------- SETTINGS ----------------
  const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbz3XfFbuGvFAxYEdFWqAuB916A5u-eo2TmFzgG0HT3wJfJeA5p91Fgv1xMvTI4AsZCaOA/exec';
  const LOGO_DATA = 'data:image/png;base64,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';
  const ID_PREFIX = 'DS';
  const POSTS = ['Choir Master', 'Music Director', 'Lead Vocalist', 'Secretary', 'Treasurer',
    'Talking Drummer', 'Set Drummer', 'Keyboardist', 'Guitarist', 'Instrumentalist', 'Back-up Singer', 'Chorister'];
  const RESERVED = { 'Choir Master': 1, 'Music Director': 2 };   // always 001 and 002; everyone else follows in order of registration
  // ------------------------------------------

  // Posts are tick boxes, so one person can hold several (e.g. Guitarist and Keyboardist)
  const chipBox = $('postChips');
  POSTS.forEach((p) => {
    const l = document.createElement('label');
    l.className = 'chip';
    l.innerHTML = '<input type="checkbox" value="' + p + '"><span>' + p + '</span>';
    chipBox.appendChild(l);
  });
  const getPosts = () => [...chipBox.querySelectorAll('input:checked')].map((i) => i.value);
  // The post that decides the number: Choir Master, then Music Director, else the first ticked
  const primaryPost = () => { const p = getPosts(); return p.find((x) => RESERVED[x]) || p[0] || ''; };

  const status = $('status');
  const say = (msg, kind) => { status.textContent = msg; status.className = 'status ' + (kind || ''); };
  say(BACKEND_URL ? 'Online: everyone using this link shares one list of numbers.'
                  : 'Test mode: numbers are saved on this device only.');

  // ---- Live text ----
  [['nameInput', 'nameOut', 'Your name'], ['phoneInput', 'phoneOut', 'Phone number']].forEach(([i, o, f]) => {
    $(i).addEventListener('input', () => { $(o).textContent = $(i).value.trim() || f; });
  });

  // ---- Dates ----
  function formatDate(v) {
    if (!v) return 'Not set';
    const [y, m, d] = v.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  function todayValue() {
    const t = new Date(), p = (n) => String(n).padStart(2, '0');
    return t.getFullYear() + '-' + p(t.getMonth() + 1) + '-' + p(t.getDate());
  }

  // ---- Registration and Member ID ----
  let registered = false;

  function showId(num) {
    const id = num ? ID_PREFIX + '-' + String(num).padStart(3, '0') : '';
    $('idInput').value = id || 'Not registered yet';
    $('idFrontOut').textContent = id || 'Not set';
    registered = !!num;
    updateMeter();
  }
  function refreshCard() {
    const posts = getPosts().join(', ');
    $('postFrontOut').textContent = posts || 'Not set';
    $('postFrontOut').classList.toggle('long', posts.length > 22);
  }
  function unregister() { if (registered) { showId(null); say('Details changed. Register again to get the ID.'); } }

  function localRegister(d) {
    let list = [];
    try { list = JSON.parse(localStorage.getItem('dspMembers') || '[]'); } catch (e) {}
    const phone = d.phone.replace(/\D/g, '');
    const same = list.find((m) => m.phone === phone);
    if (same) return { ok: true, number: same.number, existing: true };
    // Choir Master and Music Director can each be held by ONE person only
    const mine = (d.posts || d.post).split(',').map((s) => s.trim());
    const held = (p) => list.some((m) => String(m.post).split(',').map((s) => s.trim()).includes(p));
    const taken = Object.keys(RESERVED).find((p) => mine.includes(p) && held(p));
    if (taken) return { ok: false, error: taken + ' is already registered. Only one person can hold this post.' };
    const num = RESERVED[d.post];
    const number = num || Math.max(2, ...list.map((m) => m.number)) + 1;
    list.push({ number, name: d.name, phone, post: d.posts || d.post, date: d.date });
    try { localStorage.setItem('dspMembers', JSON.stringify(list)); } catch (e) {}
    return { ok: true, number };
  }
  async function onlineRegister(d) {
    const res = await fetch(BACKEND_URL, { method: 'POST', body: JSON.stringify(d) });
    return res.json();
  }

  $('registerBtn').addEventListener('click', async () => {
    const d = { name: $('nameInput').value.trim(), phone: $('phoneInput').value.trim(),
      post: primaryPost(), posts: getPosts().join(', '), date: todayValue() };
    if (!d.name || !d.phone || !d.post || !d.date) {
      say('Fill in the name, phone number, post and registration date first.', 'bad');
      return;
    }
    const btn = $('registerBtn');
    btn.disabled = true; btn.textContent = 'Please wait...';
    try {
      const r = BACKEND_URL ? await onlineRegister(d) : localRegister(d);
      if (!r.ok) { showId(null); say(r.error || 'Could not register.', 'bad'); }
      else {
        showId(r.number);
        celebrate();
        say(r.existing ? 'This phone number is already registered. Showing the same ID.'
                       : 'Registered. Preview and download your card.', 'good');
      }
    } catch (err) {
      say('Could not reach the online list. Check the internet and try again.', 'bad');
    }
    btn.disabled = false; btn.textContent = 'Register & get ID';
  });
  chipBox.addEventListener('change', (e) => {
    // One person cannot be both Choir Master and Music Director (each has its own number)
    if (e.target.checked && RESERVED[e.target.value]) {
      chipBox.querySelectorAll('input:checked').forEach((i) => {
        if (i !== e.target && RESERVED[i.value]) {
          i.checked = false;
          say('Choose either Choir Master or Music Director, not both.', 'bad');
        }
      });
    }
    unregister(); refreshCard();
  });
  $('phoneInput').addEventListener('input', unregister);

  // ---- Images ----
  function readImage(file, done) {
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Please choose an image file.'); return; }
    const r = new FileReader();
    r.onload = () => { const im = new Image(); im.onload = () => done(im); im.src = r.result; };
    r.readAsDataURL(file);
  }

  // Logo (built in)
  const logoImg = $('logoImg');
  logoImg.addEventListener('error', () => { logoImg.hidden = true; $('logoFallback').hidden = false; });
  logoImg.src = LOGO_DATA;
  document.querySelectorAll('.wm').forEach((i) => { i.src = LOGO_DATA; });   // faint watermark on both sides

  // Passport photo: cropped to a 3:4 box, with zoom and position sliders
  let photo = null;
  function drawPhoto() {
    if (!photo) return;
    const W = 450, H = 600, c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    const s = Math.max(W / photo.width, H / photo.height) * parseFloat($('zoomR').value);
    const dw = photo.width * s, dh = photo.height * s;
    g.fillStyle = '#fff'; g.fillRect(0, 0, W, H);
    g.drawImage(photo, -(dw - W) * $('xR').value / 100, -(dh - H) * $('yR').value / 100, dw, dh);
    $('photoImg').src = c.toDataURL('image/jpeg', 0.92);
    $('photoImg').hidden = false; $('photoHint').hidden = true;
    updateMeter();
  }
  // ---- Passport check: ordinary photos are rejected ----
  // plainShare: how much of the top and side edges must be one plain colour (a passport has a plain wall behind it)
  // colourGap: how far a colour may drift and still count as "the same" (raise it if real passports get rejected)
  // faceMin: the face must be at least this share of the photo's width (head and shoulders, not a far-away shot)
  const PASSPORT = { minSide: 150, maxWide: 1.2, plainShare: 0.55, colourGap: 90, faceMin: 0.15 };
  const NOT_PASSPORT = 'This does not look like a passport photo. Use one that faces the camera, shows head and shoulders, ' +
    'has a plain background, and is in garment.';
  const rejected = (why) => NOT_PASSPORT + ' [' + why + ']';   // the tag in brackets shows which check failed

  function plainBackground(px, w, h) {
    const band = 0.12, vals = [];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const top = y < h * band, side = (x < w * band || x >= w * (1 - band)) && y < h * 0.7;
        if (top || side) { const i = (y * w + x) * 4; vals.push([px[i], px[i + 1], px[i + 2]]); }
      }
    }
    const med = (c) => { const a = vals.map((v) => v[c]).sort((p, q) => p - q); return a[a.length >> 1]; };
    const m = [med(0), med(1), med(2)];
    let near = 0;
    vals.forEach((v) => { if (Math.hypot(v[0] - m[0], v[1] - m[1], v[2] - m[2]) < PASSPORT.colourGap) near++; });
    return near / vals.length;
  }

  async function passportProblem(im) {
    if (Math.min(im.width, im.height) < PASSPORT.minSide) return 'This photo is too small or blurry. Choose a clearer passport photo.';
    if (im.width > im.height * PASSPORT.maxWide) return rejected('wide picture');   // clearly wide pictures are ordinary photos
    const c = document.createElement('canvas');
    c.width = 96; c.height = Math.max(1, Math.round(96 * im.height / im.width));
    const g = c.getContext('2d');
    g.drawImage(im, 0, 0, c.width, c.height);
    if (plainBackground(g.getImageData(0, 0, c.width, c.height).data, c.width, c.height) < PASSPORT.plainShare) return rejected('background not plain');
    if ('FaceDetector' in window) {                                    // only some browsers have this; the checks above still apply without it
      try {
        const faces = await new FaceDetector({ fastMode: true, maxDetectedFaces: 5 }).detect(im);
        // if no face is found we let it through (the detector can miss real faces); a face that is found must be close up
        const biggest = faces.reduce((m, f) => Math.max(m, f.boundingBox.width), 0);
        if (faces.length && biggest < im.width * PASSPORT.faceMin) return rejected('face too small');
      } catch (err) { /* face check not available here */ }
    }
    return '';
  }

  $('photoInput').addEventListener('change', (e) => {
    const input = e.target;
    readImage(input.files[0], async (im) => {
      const problem = await passportProblem(im);
      if (problem) {
        input.value = '';                                             // forget the rejected file
        say(problem, 'bad');
        alert(problem);
        return;
      }
      photo = im; $('photoTools').hidden = false; drawPhoto();
      say('Passport photo added.', 'good');
    });
  });
  ['zoomR', 'xR', 'yR'].forEach((id) => $(id).addEventListener('input', drawPhoto));

  // Signature: keep ONLY the ink. Paper, shadows, the table and ruled lines are removed.
  let sigSrc = null, sigPrep = null, sigFull = null;

  // Grow (max) or shrink (min) every pixel's brightness over a small square window
  function spread(src, w, h, r, takeMax) {
    const tmp = new Float32Array(w * h), out = new Float32Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let v = src[y * w + x];
        for (let k = Math.max(0, x - r), e = Math.min(w - 1, x + r); k <= e; k++) {
          const s = src[y * w + k];
          if (takeMax ? s > v : s < v) v = s;
        }
        tmp[y * w + x] = v;
      }
    }
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        let v = tmp[y * w + x];
        for (let k = Math.max(0, y - r), e = Math.min(h - 1, y + r); k <= e; k++) {
          const s = tmp[k * w + x];
          if (takeMax ? s > v : s < v) v = s;
        }
        out[y * w + x] = v;
      }
    }
    return out;
  }

  // How much darker each pixel is than the paper right beside it.
  // Only thin strokes (pen ink) score high; big dark areas such as the table or shadows score zero.
  function strokeStrength(lum, w, h) {
    const r = Math.max(6, Math.round(w / 60));
    const closed = spread(spread(lum, w, h, r, true), w, h, r, false);
    const d = new Float32Array(w * h);
    for (let i = 0; i < d.length; i++) d[i] = closed[i] - lum[i];
    return d;
  }

  // Find the signature: group nearby ink together, drop lone specks and small stray marks
  function inkBox(alpha, w, h) {
    const cs = 6, gw = Math.ceil(w / cs), gh = Math.ceil(h / cs), cnt = new Uint16Array(gw * gh);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) if (alpha[y * w + x] > 0.5) cnt[((y / cs) | 0) * gw + ((x / cs) | 0)]++;
    }
    const lab = new Int32Array(gw * gh).fill(-1), comps = [];
    for (let s = 0; s < cnt.length; s++) {
      if (cnt[s] < 2 || lab[s] >= 0) continue;
      const id = comps.length, st = [s], c = { ink: 0, x0: gw, y0: gh, x1: 0, y1: 0 };
      lab[s] = id;
      while (st.length) {
        const q = st.pop(), qx = q % gw, qy = (q / gw) | 0;
        c.ink += cnt[q];
        c.x0 = Math.min(c.x0, qx); c.x1 = Math.max(c.x1, qx);
        c.y0 = Math.min(c.y0, qy); c.y1 = Math.max(c.y1, qy);
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = qx + dx, ny = qy + dy;
            if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
            const ni = ny * gw + nx;
            if (cnt[ni] >= 2 && lab[ni] < 0) { lab[ni] = id; st.push(ni); }
          }
        }
      }
      comps.push(c);
    }
    const best = comps.reduce((m, c) => Math.max(m, c.ink), 0);
    if (best < 40) return null;
    const good = comps.map((c) => c.ink >= best * 0.25);
    let gx0 = gw, gy0 = gh, gx1 = 0, gy1 = 0;
    comps.forEach((c, i) => {
      if (!good[i]) return;
      gx0 = Math.min(gx0, c.x0); gx1 = Math.max(gx1, c.x1);
      gy0 = Math.min(gy0, c.y0); gy1 = Math.max(gy1, c.y1);
    });
    const cells = new Uint8Array(gw * gh);
    for (let s = 0; s < cnt.length; s++) {
      if (lab[s] < 0 || !good[lab[s]]) continue;
      const sx = s % gw, sy = (s / gw) | 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = sx + dx, ny = sy + dy;
          if (nx >= 0 && ny >= 0 && nx < gw && ny < gh) cells[ny * gw + nx] = 1;
        }
      }
    }
    return { cells, gw, gh, cs, x0: gx0 * cs, y0: gy0 * cs, x1: (gx1 + 1) * cs, y1: (gy1 + 1) * cs };
  }

  function prepareSignature(img) {
    const sc = Math.min(1, 900 / img.width), w = Math.round(img.width * sc), h = Math.round(img.height * sc);
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const g = c.getContext('2d');
    g.drawImage(img, 0, 0, w, h);
    const px = g.getImageData(0, 0, w, h).data, lum = new Float32Array(w * h);
    for (let i = 0; i < lum.length; i++) lum[i] = px[i * 4] * 0.3 + px[i * 4 + 1] * 0.59 + px[i * 4 + 2] * 0.11;
    return { w, h, diff: strokeStrength(lum, w, h) };
  }

  function extractSignature(p, sens) {
    const { w, h, diff } = p, alpha = new Float32Array(w * h);
    for (let i = 0; i < alpha.length; i++) alpha[i] = Math.max(0, Math.min(1, (diff[i] - sens) / (sens * 1.5 + 10)));
    const box = inkBox(alpha, w, h);
    if (!box) return null;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const g = c.getContext('2d'), out = g.createImageData(w, h), o = out.data;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x;
        if (!box.cells[((y / box.cs) | 0) * box.gw + ((x / box.cs) | 0)]) continue;
        o[i * 4] = 12; o[i * 4 + 1] = 22; o[i * 4 + 2] = 70; o[i * 4 + 3] = Math.round(alpha[i] * 255);
      }
    }
    g.putImageData(out, 0, 0);
    const pad = 8, cx = Math.max(0, box.x0 - pad), cy = Math.max(0, box.y0 - pad);
    const cw = Math.min(w, box.x1 + pad) - cx, ch = Math.min(h, box.y1 + pad) - cy;
    const k = document.createElement('canvas');
    k.width = cw; k.height = ch;
    k.getContext('2d').drawImage(c, cx, cy, cw, ch, 0, 0, cw, ch);
    return k;
  }

  // Fit any signature (big or small) into the signature space: scaled to fit, centred,
  // and sitting right on the "Member's signature" line, never taller than the space.
  function fitToSignatureSpace(src) {
    const W = 880, H = 280, maxW = 860, maxH = 235, bottom = 6;   // same shape as the space on the card
    const s = Math.min(maxW / src.width, maxH / src.height, 2.5);
    const dw = src.width * s, dh = src.height * s;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    g.imageSmoothingQuality = 'high';
    g.drawImage(src, (W - dw) / 2, H - bottom - dh, dw, dh);
    return c.toDataURL('image/png');
  }

  function applySignature() {
    if (!sigSrc) return;
    if (!sigPrep) sigPrep = prepareSignature(sigSrc);
    const ink = extractSignature(sigPrep, parseInt($('sigR').value, 10));
    if (!ink) { say('I could not find the signature. Use white paper, a dark pen and good light, and take the photo close.', 'bad'); return; }
    $('sigImg').src = fitToSignatureSpace(ink); $('sigImg').hidden = false; $('sigHint').hidden = true;
    updateMeter();
  }
  // After the photo is chosen, a crop box opens so the exact spot of the signature can be selected
  $('sigInput').addEventListener('change', (e) => readImage(e.target.files[0], (im) => { sigFull = im; openCrop(im); }));
  $('sigR').addEventListener('input', applySignature);

  // ---- Crop box for the signature photo ----
  const cropModal = $('cropModal'), cropCanvas = $('cropCanvas');
  let cropImg = null, cropScale = 1, sel = null, dragStart = null;

  function openCrop(im) {
    cropImg = im; sel = null;
    const maxW = Math.min(680, innerWidth - 80), maxH = Math.round(innerHeight * 0.6);
    cropScale = Math.min(maxW / im.width, maxH / im.height, 1);
    cropCanvas.width = Math.round(im.width * cropScale);
    cropCanvas.height = Math.round(im.height * cropScale);
    drawCrop();
    cropModal.hidden = false;
  }
  function drawCrop() {
    const g = cropCanvas.getContext('2d'), W = cropCanvas.width, H = cropCanvas.height;
    g.clearRect(0, 0, W, H);
    g.drawImage(cropImg, 0, 0, W, H);
    if (!sel) return;
    g.fillStyle = 'rgba(0, 0, 0, 0.55)';          // darken everything outside the box
    g.fillRect(0, 0, W, sel.y);
    g.fillRect(0, sel.y + sel.h, W, H - sel.y - sel.h);
    g.fillRect(0, sel.y, sel.x, sel.h);
    g.fillRect(sel.x + sel.w, sel.y, W - sel.x - sel.w, sel.h);
    g.strokeStyle = '#fdd835'; g.lineWidth = 2;
    g.strokeRect(sel.x, sel.y, sel.w, sel.h);
  }
  function cropPos(e) {
    const b = cropCanvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(cropCanvas.width, (e.clientX - b.left) * cropCanvas.width / b.width)),
      y: Math.max(0, Math.min(cropCanvas.height, (e.clientY - b.top) * cropCanvas.height / b.height))
    };
  }
  cropCanvas.addEventListener('pointerdown', (e) => {
    dragStart = cropPos(e);
    sel = { x: dragStart.x, y: dragStart.y, w: 0, h: 0 };
    cropCanvas.setPointerCapture(e.pointerId);
  });
  cropCanvas.addEventListener('pointermove', (e) => {
    if (!dragStart) return;
    const p = cropPos(e);
    sel = { x: Math.min(dragStart.x, p.x), y: Math.min(dragStart.y, p.y),
      w: Math.abs(p.x - dragStart.x), h: Math.abs(p.y - dragStart.y) };
    drawCrop();
  });
  const endDrag = () => { dragStart = null; };
  cropCanvas.addEventListener('pointerup', endDrag);
  cropCanvas.addEventListener('pointercancel', endDrag);

  $('cropOk').addEventListener('click', () => {
    if (!sel || sel.w < 20 || sel.h < 10) { alert('Drag over the signature first to draw a box around it.'); return; }
    const k = document.createElement('canvas');
    k.width = Math.round(sel.w / cropScale); k.height = Math.round(sel.h / cropScale);
    k.getContext('2d').drawImage(cropImg, sel.x / cropScale, sel.y / cropScale, sel.w / cropScale, sel.h / cropScale,
      0, 0, k.width, k.height);
    sigSrc = k; sigPrep = null;
    $('sigTools').hidden = false;
    cropModal.hidden = true;
    applySignature();
  });
  $('cropCancel').addEventListener('click', () => { cropModal.hidden = true; });
  $('recropBtn').addEventListener('click', () => { if (sigFull) openCrop(sigFull); });

  // ---- Option 2: draw the signature with a pen, finger or mouse ----
  const drawModal = $('drawModal'), pad = $('padCanvas'), pg = pad.getContext('2d');
  let padLast = null, padInk = false;

  function padPos(e) {
    const b = pad.getBoundingClientRect();
    return { x: (e.clientX - b.left) * pad.width / b.width, y: (e.clientY - b.top) * pad.height / b.height,
      p: e.pointerType === 'pen' ? Math.max(0.2, e.pressure) : 0.5 };
  }
  $('drawSigBtn').addEventListener('click', () => {
    pg.clearRect(0, 0, pad.width, pad.height);
    padInk = false;
    drawModal.hidden = false;
  });
  pad.addEventListener('pointerdown', (e) => {
    padLast = padPos(e);
    pad.setPointerCapture(e.pointerId);
    pg.fillStyle = '#0c1646';
    pg.beginPath(); pg.arc(padLast.x, padLast.y, 1 + padLast.p * 1.5, 0, Math.PI * 2); pg.fill();
    padInk = true;
  });
  pad.addEventListener('pointermove', (e) => {
    if (!padLast) return;
    const p = padPos(e);
    pg.strokeStyle = '#0c1646'; pg.lineCap = 'round'; pg.lineJoin = 'round';
    pg.lineWidth = 2 + p.p * 3;
    pg.beginPath(); pg.moveTo(padLast.x, padLast.y); pg.lineTo(p.x, p.y); pg.stroke();
    padLast = p;
  });
  const padEnd = () => { padLast = null; };
  pad.addEventListener('pointerup', padEnd);
  pad.addEventListener('pointercancel', padEnd);

  $('padClear').addEventListener('click', () => { pg.clearRect(0, 0, pad.width, pad.height); padInk = false; });
  $('padCancel').addEventListener('click', () => { drawModal.hidden = true; });
  $('padOk').addEventListener('click', () => {
    if (!padInk) { alert('Please sign inside the box first.'); return; }
    // Trim to the ink so the signature fills its spot on the card
    const px = pg.getImageData(0, 0, pad.width, pad.height).data;
    let x0 = pad.width, y0 = pad.height, x1 = 0, y1 = 0;
    for (let y = 0; y < pad.height; y++) {
      for (let x = 0; x < pad.width; x++) {
        if (px[(y * pad.width + x) * 4 + 3] > 40) {
          if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
        }
      }
    }
    if (x1 <= x0 || y1 <= y0) { alert('Please sign inside the box first.'); return; }
    const pd = 6, cx = Math.max(0, x0 - pd), cy = Math.max(0, y0 - pd);
    const cw = Math.min(pad.width, x1 + pd) - cx, ch = Math.min(pad.height, y1 + pd) - cy;
    const k = document.createElement('canvas');
    k.width = cw; k.height = ch;
    k.getContext('2d').drawImage(pad, cx, cy, cw, ch, 0, 0, cw, ch);
    sigSrc = null; sigPrep = null; sigFull = null; $('sigTools').hidden = true;   // not a photo, so no crop or cleanup
    $('sigImg').src = fitToSignatureSpace(k);
    $('sigImg').hidden = false; $('sigHint').hidden = true;
    drawModal.hidden = true;
    updateMeter();
  });

  // ---- Preview both sides, then download as PDF ----
  const modal = $('previewModal');
  let shots = null;
  const snap = async (id) => {
    document.body.classList.add('capturing');
    try { return (await html2canvas($(id), { scale: 4, backgroundColor: null })).toDataURL('image/png'); }
    finally { document.body.classList.remove('capturing'); }
  };
  const closePreview = () => { modal.hidden = true; };
  const needId = () => { if (!registered) { say('Press "Register & get ID" first.', 'bad'); return true; } return false; };

  $('downloadBtn').addEventListener('click', async () => {
    if (needId()) return;
    if (typeof html2canvas === 'undefined' || !(window.jspdf && window.jspdf.jsPDF)) {
      alert('The PDF tools need internet. Check your connection and refresh the page.');
      return;
    }
    const btn = $('downloadBtn');
    btn.disabled = true; btn.textContent = 'Preparing...';
    try {
      shots = { front: await snap('card'), back: await snap('cardBack') };
      $('prevFront').src = shots.front;
      $('prevBack').src = shots.back;
      modal.hidden = false;
    } catch (err) { say('Could not make the preview. Try again.', 'bad'); }
    btn.disabled = false; btn.textContent = 'Preview & download PDF';
  });
  $('cancelPdfBtn').addEventListener('click', closePreview);
  modal.addEventListener('click', (e) => { if (e.target === modal) closePreview(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePreview(); });

  // Saves the passport, signature and both card sides to the Drive folder (through the Apps Script).
  // The sheet then shows "Open" links in the Passport, Signature, Card front and Card back columns.
  async function uploadImages() {
    if (!BACKEND_URL || !shots) return;
    const body = { action: 'upload', phone: $('phoneInput').value.trim(),
      passport: $('photoImg').hidden ? '' : $('photoImg').src,
      signature: $('sigImg').hidden ? '' : $('sigImg').src,
      front: shots.front, back: shots.back };
    try {
      const r = await (await fetch(BACKEND_URL, { method: 'POST', body: JSON.stringify(body) })).json();
      if (r.ok) say('PDF downloaded. Images saved.', 'good');
      else say('PDF downloaded, but the images were not saved: ' + (r.error || 'try again.'), 'bad');
    } catch (err) {
      say('PDF downloaded, but the images could not be saved. Check the internet.', 'bad');
    }
  }

  $('confirmPdfBtn').addEventListener('click', () => {
    if (!shots) return;
    const pdf = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4' });
    const w = 54, gap = 10, x0 = (210 - (2 * w + gap)) / 2, y = 30;   // real ID card size, side by side
    ['Front', 'Back'].forEach((label, i) => {
      const src = i ? shots.back : shots.front;
      const p = pdf.getImageProperties(src), h = w * p.height / p.width, x = x0 + i * (w + gap);
      pdf.setFontSize(9); pdf.setTextColor(130); pdf.text(label, x, y - 2);
      pdf.addImage(src, 'PNG', x, y, w, h);
    });
    pdf.save('DS-ID-' + ($('nameInput').value.trim() || 'member').replace(/\s+/g, '-') + '.pdf');
    closePreview();
    say('PDF downloaded. Saving images...', 'good');
    uploadImages();
  });
  $('printBtn').addEventListener('click', () => { if (!needId()) window.print(); });

  // ---- Clear ----
  $('resetBtn').addEventListener('click', () => {
    $('idForm').reset();
    $('nameOut').textContent = 'Your name'; $('phoneOut').textContent = 'Phone number';
    photo = null; $('photoTools').hidden = true;
    $('photoImg').hidden = true; $('photoImg').removeAttribute('src'); $('photoHint').hidden = false;
    $('sigImg').hidden = true; $('sigImg').removeAttribute('src'); $('sigHint').hidden = false;
    sigSrc = null; sigPrep = null; sigFull = null; $('sigTools').hidden = true;
    showId(null); refreshCard();
  });

  // ---- Progress bar ----
  function updateMeter() {
    const checks = [$('nameInput').value.trim(), $('phoneInput').value.trim(), getPosts().length,
      !$('photoImg').hidden, !$('sigImg').hidden, registered];
    const pct = Math.round(checks.filter(Boolean).length / checks.length * 100);
    $('meterFill').style.width = pct + '%';
    $('meterText').textContent = pct === 100 ? 'Card complete. Preview and download below.' : pct + '% complete';
  }
  $('idForm').addEventListener('input', updateMeter);

  // ---- Rainbow confetti ----
  function celebrate() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas');
    c.className = 'fx'; c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    const g = c.getContext('2d');
    const cols = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#1e88e5', '#8e24aa', '#d4a937'];
    const ps = Array.from({ length: 140 }, () => ({ x: c.width / 2, y: c.height * 0.35,
      vx: (Math.random() - 0.5) * 14, vy: Math.random() * -12 - 3, s: 5 + Math.random() * 5,
      c: cols[Math.random() * cols.length | 0], r: Math.random() * 6 }));
    let t = 0;
    (function frame() {
      g.clearRect(0, 0, c.width, c.height);
      ps.forEach((p) => {
        p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.r += 0.2;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r);
        g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.6); g.restore();
      });
      if (++t < 110) requestAnimationFrame(frame); else c.remove();
    })();
  }

  // ---- Cards tilt and shine under the mouse ----
  if (matchMedia('(hover: hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.tilt').forEach((w) => {
      w.addEventListener('pointermove', (e) => {
        const b = w.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
        w.style.transform = 'perspective(800px) rotateY(' + x * 8 + 'deg) rotateX(' + (-y * 8) + 'deg)';
        w.style.setProperty('--sx', (x + 0.5) * 100 + '%');
      });
      w.addEventListener('pointerleave', () => { w.style.transform = ''; });
    });
  }

  // ---- Start ----
  showId(null); refreshCard();
})();