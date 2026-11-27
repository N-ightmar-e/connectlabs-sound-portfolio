/* 악몽 studio for an Artmug detail page.
   Draws into <div id="akmong-studio"> through a shadow root, so Artmug's global CSS
   (h1 hidden, line-height 1, Malgun Gothic) cannot reach it, and nothing here reaches Artmug.
   The build wraps this file and defines CSS (string), DATA (object) and BASE (url of this script's folder). */

const HOST_ID = 'akmong-studio';
const API = 'https://connectlabs-sound-portfolio.connectlabs-1.chatgpt.site/api/availability';
const FONT = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
const ORDERS = {
  a: ['creators', 'listen', 'reviews', 'pricing'],
  b: ['pricing', 'creators', 'reviews', 'listen'],
  c: ['listen', 'reviews', 'creators', 'pricing'],
};
const AFTER_FOLD = ['schedule', 'inquiry', 'process', 'faq'];
const LABELS = { hero: '소개', creators: '함께한 크리에이터', listen: '들어보기', reviews: '후기', pricing: '가격', schedule: '일정', inquiry: '문의 글 만들기', process: '진행 순서', faq: '자주 묻는 것' };

const host = document.getElementById(HOST_ID);
if (host && !host.shadowRoot) mount(host);

function mount(host) {
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches && host.dataset.motion !== 'full';
  const won = (n) => n.toLocaleString('ko-KR');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const img = (p) => new URL(p, BASE).href;
  const variant = ORDERS[host.dataset.variant] ? host.dataset.variant : 'c';
  if (!host.dataset.theme) host.dataset.theme = 'light';
  // Chosen 2026-11-27: the livelier response (osu!lazer amounts). Set data-feel="calm" on the box to go back.
  if (!host.dataset.feel) host.dataset.feel = 'lively';

  if (!document.querySelector('link[data-akmong-font]')) {
    const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: FONT });
    link.dataset.akmongFont = '';
    document.head.appendChild(link);
  }
  // Artmug's own parts on this page (reviews, Q&A, order panel) in the same quiet style. Looks only; see src/artmug.css.
  const pageStyle = document.createElement('style');
  pageStyle.textContent = ARTMUG_CSS + `html:has(#${HOST_ID}[data-theme="dark"]) body{background:oklch(0.17 0 0)}`;
  document.head.appendChild(pageStyle);

  host.replaceChildren();
  const root = host.attachShadow({ mode: 'open' });
  const D = DATA;
  const C = D.content;

  // ---------- Facts that live on the Artmug page itself ----------
  function artmugReviews() {
    const table = [...document.querySelectorAll('table')].find((t) => t.rows[0] && /평점/.test(t.rows[0].innerText) && /내용/.test(t.rows[0].innerText));
    if (!table) return null;
    const rows = [...table.rows].slice(1).map((r) => [...r.cells].map((c) => c.innerText.trim())).filter((c) => c.length >= 4 && /^\d+$/.test(c[0]));
    if (!rows.length) return null;
    const list = rows.map((c) => ({ n: Number(c[0]), text: c[2], author: c[c.length - 2], date: c[c.length - 1] })).filter((r) => r.text.length > 30);
    return { count: Math.max(...rows.map((c) => Number(c[0]))), latest: rows[0][rows[0].length - 1], list: list.sort((x, y) => y.text.length - x.text.length).slice(0, 3) };
  }
  const live = artmugReviews();
  const reviews = live?.list.length >= 3 ? live.list : C.fallbackReviews;
  const reviewCount = live?.count ?? C.fallbackReviewCount;
  const reviewDate = live?.latest ?? C.fallbackReviews[2].date;
  const shortDate = (d) => { const m = String(d).match(/(\d{2})-(\d{2})-(\d{2})/); return m ? `최근 20${m[1]}.${m[2]}.${m[3]}` : ''; };

  // ---------- Sections ----------
  const S = {};
  S.hero = () => `
    <section class="st-hero" id="st-hero" data-section="hero" aria-labelledby="st-title">
      <div class="tf-hero" style="padding:0;gap:var(--space-6)">
        <p class="tf-hero__eyebrow">${esc(C.hero.eyebrow)}</p>
        <h1 class="tf-hero__title" id="st-title">${esc(C.hero.title)}</h1>
        <p class="tf-hero__lead">${esc(C.hero.lead)}</p>
        <div class="tf-hero__actions">
          <button class="tf-btn tf-btn--outline" type="button" data-go="pricing">가격 보기</button>
          <button class="tf-btn tf-btn--ghost" type="button" data-go="listen">작업한 소리 듣기</button>
        </div>
      </div>
      <img class="st-hero__portrait" src="${img(D.extracted.portrait)}" alt="악몽의 캐릭터 프로필" width="160" height="160">
    </section>
    <div class="tf-stats" role="list">
      ${C.stats.map((s) => `<div class="tf-stat" role="listitem"><p class="tf-stat__label">${esc(s.label)}</p><p class="tf-stat__value">${esc(s.value.replace('{reviews}', reviewCount + '건'))}</p></div>`).join('')}
    </div>
    <section class="st-trust" aria-labelledby="st-trust-title">
      <h2 class="tf-heading" id="st-trust-title">함께 일하는 브랜드와 대형 프로젝트</h2>
      <ul class="tf-card st-logos" aria-label="파트너십 제휴 브랜드">${D.extracted.partners.map((p) => `<li class="st-logo"><img src="${img(p.image)}" alt="${esc(p.name)}" loading="lazy"><span>${esc(p.name)}</span></li>`).join('')}</ul>
      <div class="st-servers"><p class="st-servers__label">대형 서버 방송 지원 <b>${D.extracted.servers.length}곳</b></p>
        <ul>${D.extracted.servers.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>
    </section>`;

  S.creators = () => {
    const top = D.extracted.creators.filter((c) => c.image).slice(0, 6);
    const cell = (v) => v ? esc(v) : '<span class="is-empty">—</span>';
    return `
    <section class="st-band" id="st-creators" data-section="creators" aria-labelledby="st-creators-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-creators-title">함께한 크리에이터 ${D.extracted.creators.length}팀</h2></div>
      <ul class="st-faces">${top.map((c) => `<li><img src="${img(c.image)}" alt="" width="56" height="56" loading="lazy"><span>${esc(c.name)}</span></li>`).join('')}</ul>
      <details class="st-more"><summary>${D.extracted.creators.length}팀 전체 보기</summary>
        <div class="st-more__body"><div class="st-table-wrap" tabindex="0" role="region" aria-label="함께한 크리에이터 전체">
          <table class="st-table"><thead><tr><th scope="col">크리에이터</th><th scope="col">YouTube 구독자</th><th scope="col">치지직 팔로워</th><th scope="col">SOOP 애청자</th></tr></thead>
          <tbody>${D.extracted.creators.map((c) => `<tr><td>${esc(c.name)}</td><td>${cell(c.youtube)}</td><td>${cell(c.chzzk)}</td><td>${cell(c.soop)}</td></tr>`).join('')}</tbody></table>
        </div></div>
      </details>
    </section>`;
  };

  S.listen = () => `
    <section class="st-band" id="st-listen" data-section="listen" aria-labelledby="st-listen-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-listen-title">실제 방송에서 나간 소리</h2></div>
      <div class="st-media">${D.extracted.videos.map((v, i) => player({ kind: 'youtube', id: v.id, thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`, title: C.videos[i]?.title ?? v.label, meta: C.videos[i]?.meta ?? '' })).join('')}</div>
      <h3 class="tf-subheading st-sub">노래 방송 클립</h3>
      <ul class="st-clips">${D.extracted.clips.map((c) => `
        <li class="st-clip"><div class="st-player__frame" data-kind="chzzk" data-id="${esc(c.url.split('/').pop())}" data-title="${esc(c.title)}">
          <img src="${img(c.image)}" alt="" loading="lazy"><button class="st-player__play" type="button" aria-label="${esc(c.creator)} · ${esc(c.title)} 재생"><span>재생</span></button></div>
          <div><p class="st-player__title">${esc(c.creator)}</p><p class="st-player__meta">${esc(c.title)} · ${esc(c.duration)}</p></div></li>`).join('')}
      </ul>
    </section>`;

  function player(p) {
    return `<figure class="st-player"><div class="st-player__frame" data-kind="${p.kind}" data-id="${esc(p.id)}" data-title="${esc(p.title)}">
      <img src="${esc(p.thumb)}" alt="" loading="lazy">
      <button class="st-player__play" type="button" aria-label="${esc(p.title)} 재생"><span>재생</span></button>
      ${p.duration ? `<span class="st-player__duration">${esc(p.duration)}</span>` : ''}</div>
      <figcaption><p class="st-player__title">${esc(p.title)}</p><p class="st-player__meta">${esc(p.meta)}</p></figcaption></figure>`;
  }

  S.reviews = () => `
    <section class="st-band" id="st-reviews" data-section="reviews" aria-labelledby="st-reviews-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-reviews-title">후기 ${reviewCount}건</h2></div>
      <div class="st-reviews">${reviews.map((r) => `<figure class="st-review"><blockquote>${esc(r.text)}</blockquote><figcaption>${esc(r.author)} · ${esc(r.date)}</figcaption></figure>`).join('')}</div>
      <div class="st-band__foot"><button class="tf-btn tf-btn--ghost tf-btn--sm" type="button" data-artmug="reviews">후기 전체 보기</button></div>
    </section>`;

  S.pricing = () => `
    <section class="st-band" id="st-pricing" data-section="pricing" aria-labelledby="st-pricing-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-pricing-title">가격</h2></div>
      <div class="tf-tabs" role="tablist" aria-label="상황">
        ${C.situations.map((s, i) => `<button class="tf-tab" role="tab" type="button" id="st-tab-${s.id}" aria-controls="st-panel-${s.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(s.tab)}</button>`).join('')}
        <span class="tf-tabs__strip" aria-hidden="true"></span>
      </div>
      ${C.situations.map((s, i) => `
      <div class="st-price-panel" role="tabpanel" id="st-panel-${s.id}" aria-labelledby="st-tab-${s.id}" ${i ? 'hidden' : ''}>
        <div class="tf-card st-offers">${s.rows.map((r) => `
          <div class="st-offer"><div><p class="st-offer__name">${esc(r.name)}</p><p class="st-offer__text">${esc(r.text)}</p></div>
            <p class="st-offer__price">${r.price === null ? esc(r.priceText) : won(r.price) + '원'}</p>
            ${r.pick ? `<button class="tf-btn tf-btn--outline tf-btn--sm st-offer__action" type="button" data-pick='${esc(JSON.stringify(r.pick))}'>이 구성으로 문의</button>` : `<button class="tf-btn tf-btn--outline tf-btn--sm st-offer__action" type="button" data-pick='${esc(JSON.stringify({ service: 'troubleshoot', note: r.name }))}'>문의하기</button>`}
          </div>`).join('')}
        </div>
        <details class="st-more"><summary>${esc(s.details.title)}</summary><div class="st-more__body">
          <p class="st-small" style="margin:0 0 var(--space-4)">${esc(s.lead)} ${s.rows.map((r) => `${esc(r.name)}: ${esc(r.terms)}`).join(' · ')}</p>
          ${s.details.options ? `<ul class="st-bullets st-bullets--two">${C.options.map((o) => `<li><span>${esc(o.name)} <span class="st-offer__terms">${esc(o.label)}</span></span></li>`).join('')}</ul>` : `<ul class="st-bullets st-bullets--two">${s.details.items.map((x) => `<li><span>${esc(x)}</span></li>`).join('')}</ul>`}
          ${s.details.note ? `<p class="st-small">${esc(s.details.note)}</p>` : ''}
        </div></details>
      </div>`).join('')}
      <p class="st-small"><strong class="st-small__lead">${esc(C.costNote.title)}.</strong> ${esc(C.costNote.text)}</p>
    </section>`;

  S.schedule = () => `
    <section class="st-band" id="st-schedule" data-section="schedule" aria-labelledby="st-schedule-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-schedule-title">세팅 가능한 일정</h2>
        <ul class="st-principles">${(C.principles || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="st-week"><p class="st-week__label" id="st-week-label" aria-live="polite"></p>
        <div class="st-week__nav"><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-prev">이전 주</button><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-next">다음 주</button></div></div>
      <div class="st-days" id="st-days" role="group" aria-label="날짜"></div>
      <div id="st-slots-area"></div>
      <p class="st-status" id="st-sched-status" role="status"></p>
    </section>`;

  S.inquiry = () => `
    <section class="st-band" id="st-inquiry" data-section="inquiry" aria-labelledby="st-inquiry-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-inquiry-title">문의 글 만들기</h2></div>
      <div class="st-inquiry">
        <form class="st-form" id="st-form" novalidate>
          <fieldset class="st-fieldset"><legend>어떤 도움이 필요하신가요?</legend>
            <div class="st-choices">${[['audio', '음향 세팅', '목소리'], ['broadcast', '방송 세팅', '송출 · 장비 연결'], ['combined', '방송 + 음향', '두 가격의 합'], ['troubleshoot', '문제 해결', '끊김 · 잡음 · 오류']].map(([v, t, d], i) => choice('service', v, t, d, i === 0)).join('')}</div></fieldset>
          <fieldset class="st-fieldset"><legend>장비는 갖추셨나요?</legend>
            <label class="st-check"><input class="tf-checkbox" type="checkbox" name="gear" value="yes"><span>아직 장비가 없어요<small>무료로 장비를 추천해 드립니다</small></span></label>
            <div class="st-fields" id="st-gear" hidden>
              <div class="tf-field"><label class="tf-field__label" for="st-budget">장비 예산</label><input class="tf-input" id="st-budget" name="budget" autocomplete="off" placeholder="예: 마이크 + 인터페이스 30만 원"></div>
              <div class="tf-field"><label class="tf-field__label" for="st-purpose">주로 할 방송</label><div class="tf-select-wrap"><select class="tf-select" id="st-purpose" name="purpose"><option value="">고르지 않음</option><option>토크 · 게임</option><option>노래</option><option>ASMR</option><option>버츄얼</option><option>여러 가지</option></select></div></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-room">방 상태</label><textarea class="tf-textarea" id="st-room" name="room" placeholder="예: 원룸, 창밖 차 소리가 들리고 말하면 조금 울려요. 흡음재 없음."></textarea></div>
            </div>
          </fieldset>
          <fieldset class="st-fieldset" id="st-f-broadcast" hidden><legend>방송용 PC는 몇 대인가요?</legend>
            <div class="st-choices">${[['single', '원컴 · PC 1대', '', '50,000원'], ['dual', '투컴 · PC 2대', '', '80,000원'], ['undecided', '잘 모르겠어요', '상담에서 정해요', '가격 문의']].map(([v, t, d, p]) => choice('broadcastConfig', v, t, d, v === 'undecided', p)).join('')}</div></fieldset>
          <fieldset class="st-fieldset" id="st-f-audio"><legend>어떤 음향 세팅을 원하시나요?</legend>
            <div class="st-choices">${[['talk', '토크 음향', '', '30,000원'], ['song', '토크 + 노래', '', '50,000원'], ['advanced', '맞춤 고급 음향', '3종 · 추가 조정 3회', '80,000원']].map(([v, t, d, p]) => choice('package', v, t, d, v === 'talk', p)).join('')}</div></fieldset>
          <details class="st-more st-more--form" id="st-f-options"><summary>추가 옵션</summary><fieldset class="st-fieldset st-more__body"><legend class="st-sr">추가 옵션</legend>
            <div class="st-checks">${C.options.map((o) => `<label class="st-check"><input class="tf-checkbox" type="checkbox" name="option" value="${o.key}"><span>${esc(o.name)}<small>${esc(o.label)}</small></span></label>`).join('')}</div>
            <div class="tf-field st-mic" id="st-mic-field" hidden><label class="tf-field__label" for="st-mic">추가 마이크 대수</label>
              <input class="tf-input" id="st-mic" name="mic" type="number" min="1" step="1" value="1" inputmode="numeric" aria-describedby="st-mic-hint">
              <span class="tf-field__hint" id="st-mic-hint">1대당 20,000원</span></div>
          </fieldset></details>
          <details class="st-more st-more--form"><summary>방송 환경 적기 (선택)</summary><fieldset class="st-fieldset st-more__body"><legend class="st-sr">방송 환경</legend>
            <div class="st-fields">
              <div class="tf-field"><label class="tf-field__label" for="st-channel">활동명이나 채널</label><input class="tf-input" id="st-channel" name="channel" autocomplete="off" placeholder="예: 악몽, 치지직 채널 이름"></div>
              <div class="tf-field"><label class="tf-field__label" for="st-platform">방송 플랫폼</label><div class="tf-select-wrap"><select class="tf-select" id="st-platform" name="platform"><option value="">고르지 않음</option><option>치지직</option><option>YouTube</option><option>SOOP</option><option>여러 곳</option><option>아직 정하지 않음</option></select></div></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-equipment">쓰고 있는 장비</label><textarea class="tf-textarea" id="st-equipment" name="equipment" placeholder="예: 원컴 · RTX 4070 / SM7B / SSL2"></textarea></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-request">원하는 것이나 불편한 점</label><textarea class="tf-textarea" id="st-request" name="request" placeholder="예: 노래할 때만 리버브를 켜고 싶어요. 방송 중에 소리가 가끔 끊겨요."></textarea></div>
            </div>
          </fieldset></details>
        </form>
        <aside class="tf-card st-summary" aria-labelledby="st-sum-label">
          <p class="st-summary__label" id="st-sum-label">예상 금액</p>
          <p class="st-total" aria-live="polite"><span id="st-total">30,000</span><span class="st-total__unit" id="st-total-unit">원</span></p>
          <p class="st-total-note" id="st-total-note">상담에서 확정</p>
          <div class="st-summary__items" id="st-items"></div>
          <p class="st-summary__slot" id="st-slot-line">희망 일정 · 상담 후 결정</p>
          <button class="tf-btn tf-btn--block" type="button" id="st-copy">글 복사하고 문의 창 열기</button>
          <p class="st-copy-status" id="st-copy-status" role="status"></p>
          <details class="st-preview"><summary class="tf-link tf-link--quiet">복사될 글 보기</summary><textarea class="tf-textarea" id="st-output" readonly aria-label="복사될 문의 글"></textarea></details>
        </aside>
      </div>
    </section>`;

  function choice(name, value, title, text, checked, price) {
    return `<label class="tf-choice"><input class="tf-radio" type="radio" name="${name}" value="${value}" ${checked ? 'checked' : ''}><span><span class="tf-choice__title">${esc(title)}</span>${text ? `<span class="tf-choice__text">${esc(text)}</span>` : ''}${price ? `<span class="st-choice-price">${esc(price)}</span>` : ''}</span></label>`;
  }

  S.process = () => `
    <section class="st-band" id="st-process" data-section="process" aria-labelledby="st-process-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-process-title">진행 순서</h2></div>
      <ol class="st-process">${C.process.map((p) => `<li class="st-step"><strong>${esc(p.title)}</strong><p>${esc(p.text)}</p></li>`).join('')}</ol>
    </section>`;

  S.faq = () => `
    <section class="st-band st-faq" id="st-faq" data-section="faq" aria-labelledby="st-faq-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-faq-title">자주 묻는 것</h2></div>
      ${C.faq.map((f) => `<details class="st-more"><summary>${esc(f.q)}</summary><div class="st-more__body"><ul class="st-bullets">${f.a.map((x) => `<li><span>${esc(x)}</span></li>`).join('')}</ul></div></details>`).join('')}
    </section>
    <footer class="st-foot"><span>ConnectLabs · 악몽 Nightmare</span><span>${esc(C.hero.remote)}</span></footer>`;

  const order = ['hero', ...ORDERS[variant], ...AFTER_FOLD];
  root.innerHTML = `<style>${CSS}</style><div class="studio-root"><main class="st-main">${order.map((k) => S[k]()).join('')}</main><div class="tf-toasts" id="st-toasts" aria-live="polite"></div></div>`;
  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => [...root.querySelectorAll(sel)];

  // ---------- Toast ----------
  function toast(message) {
    const t = document.createElement('div');
    t.className = 'tf-toast';
    t.textContent = message;
    $('#st-toasts').appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => { t.dataset.open = 'true'; }));
    setTimeout(() => { t.dataset.open = 'false'; setTimeout(() => t.remove(), 400); }, 2600);
  }

  // ---------- Tabs ----------
  const tabs = $('.tf-tabs');
  function placeStrip() {
    const sel = tabs.querySelector('[aria-selected="true"]');
    const strip = tabs.querySelector('.tf-tabs__strip');
    strip.style.setProperty('--tf-strip-x', sel.offsetLeft - tabs.scrollLeft + 'px');
    strip.style.setProperty('--tf-strip-w', sel.offsetWidth);
  }
  function selectTab(tab, focus) {
    $$('.tf-tab').forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    $$('.st-price-panel').forEach((p) => {
      const on = p.id === tab.getAttribute('aria-controls');
      p.hidden = !on;
      p.classList.remove('is-entering');
      if (on) { void p.offsetWidth; p.classList.add('is-entering'); }
    });
    placeStrip();
    if (focus) tab.focus();
  }
  tabs.addEventListener('click', (e) => { const t = e.target.closest('.tf-tab'); if (t) selectTab(t); });
  tabs.addEventListener('keydown', (e) => {
    const list = $$('.tf-tab'); const i = list.indexOf(root.activeElement);
    if (i < 0) return;
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: list.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectTab(list[(next + list.length) % list.length], true);
  });
  tabs.addEventListener('scroll', placeStrip, { passive: true });
  (document.fonts?.ready ?? Promise.resolve()).then(() => { placeStrip(); requestAnimationFrame(() => { tabs.dataset.ready = 'true'; }); });
  new ResizeObserver(placeStrip).observe(tabs);

  // ---------- Players: load the real player only when asked ----------
  root.addEventListener('click', (e) => {
    const play = e.target.closest('.st-player__play');
    if (!play) return;
    const frame = play.parentElement;
    const src = frame.dataset.kind === 'youtube'
      ? `https://www.youtube.com/embed/${frame.dataset.id}?autoplay=1&rel=0`
      : `https://chzzk.naver.com/embed/clip/${frame.dataset.id}`;
    const iframe = Object.assign(document.createElement('iframe'), { src, title: frame.dataset.title, allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen' });
    iframe.setAttribute('allowfullscreen', '');
    frame.replaceChildren(iframe);
  });

  // ---------- Artmug's own parts ----------
  const artmug = {
    clamp: () => document.querySelector('.detailinfo.showstep1'),
    unfold() {
      const btn = document.querySelector('.btn_open_btn');
      if (this.clamp() && btn) btn.click();
    },
    reviews: () => [...document.querySelectorAll('.s_title, ul, h2, h3')].find((el) => el.textContent.trim() === '이용 후기'),
    qna: () => [...document.querySelectorAll('.btn_qna')].find((b) => b.offsetParent !== null) ?? document.querySelector('.btn_qna'),
  };

  function scrollToEl(el) {
    const top = el.getBoundingClientRect().top + scrollY - 24;
    window.scrollTo({ top, behavior: reduced() ? 'auto' : 'smooth' });
  }
  function go(key) {
    const el = $(`[data-section="${key}"]`);
    if (!el) return;
    // A section past Artmug's 3,000px cut is hidden until "내용 더 보기" is pressed.
    const clamp = artmug.clamp();
    if (clamp && el.getBoundingClientRect().bottom > clamp.getBoundingClientRect().bottom) {
      artmug.unfold();
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToEl(el)));
    } else scrollToEl(el);
  }
  root.addEventListener('click', (e) => {
    const g = e.target.closest('[data-go]');
    if (g) go(g.dataset.go);
    if (e.target.closest('[data-artmug="reviews"]')) {
      const t = artmug.reviews();
      if (t) { artmug.unfold(); requestAnimationFrame(() => scrollToEl(t)); } else toast('이 미리 보기에는 아트머그 후기가 없습니다.');
    }
    const pick = e.target.closest('[data-pick]');
    if (pick) { applyPick(JSON.parse(pick.dataset.pick)); go('inquiry'); }
  });

  // ---------- Inquiry ----------
  const form = $('#st-form');
  const prices = { talk: 30000, song: 50000, advanced: 80000 };
  const packageNames = { talk: '토크 음향', song: '토크 + 노래', advanced: '맞춤 고급 음향' };
  const configs = { single: ['원컴 방송 세팅', 50000], dual: ['투컴 방송 세팅', 80000], undecided: ['방송 세팅 · PC 구성 상담', null] };
  const serviceNames = { audio: '음향 세팅', broadcast: '방송 세팅', combined: '방송 + 음향', troubleshoot: '문제 해결' };
  let preferred = '';
  let lastTotal = 30000;
  let extraNote = '';

  function applyPick(p) {
    const set = (name, v) => { const r = form.querySelector(`input[name="${name}"][value="${v}"]`); if (r) r.checked = true; };
    set('service', p.service);
    if (p.broadcastConfig) set('broadcastConfig', p.broadcastConfig);
    if (p.package) set('package', p.package);
    extraNote = p.note ?? '';
    refresh();
  }

  function estimate() {
    const f = new FormData(form);
    const service = f.get('service');
    const items = [];
    let invalid = false;
    if (service === 'troubleshoot') items.push([extraNote || '방송 문제 해결', extraNote ? null : 25000]);
    if (service === 'broadcast' || service === 'combined') { const [n, p] = configs[f.get('broadcastConfig')]; items.push([n, p]); }
    if (service === 'audio' || service === 'combined') {
      items.push([packageNames[f.get('package')], prices[f.get('package')]]);
      for (const key of f.getAll('option')) {
        const o = C.options.find((x) => x.key === key);
        if (key === 'mic') {
          const q = Number($('#st-mic').value);
          if (!Number.isInteger(q) || q < 1 || q > 20) { invalid = true; continue; }
          items.push([`추가 마이크 ${q}대`, 20000 * q]);
        } else items.push([o.name, o.price]);
      }
    }
    if (f.get("gear")) items.push(["장비 추천 상담", 0]);
    const open = items.some(([, p]) => p === null);
    const total = items.reduce((s, [, p]) => s + (p ?? 0), 0);
    return { service, items, open, total, invalid, f };
  }

  function roll(el, from, to) {
    if (reduced() || from === to) { el.textContent = won(to); return; }
    const t0 = performance.now(); const d = parseFloat(getComputedStyle(root.host).getPropertyValue('--dur-roll')) || 450;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / d); const e = 1 - Math.pow(1 - k, 5);
      el.textContent = won(Math.round((from + (to - from) * e) / 1000) * 1000);
      if (k < 1) requestAnimationFrame(step); else el.textContent = won(to);
    };
    requestAnimationFrame(step);
  }

  function refresh() {
    const service = form.querySelector('input[name="service"]:checked').value;
    $('#st-f-broadcast').hidden = !(service === 'broadcast' || service === 'combined');
    $('#st-f-audio').hidden = !(service === 'audio' || service === 'combined');
    $('#st-f-options').hidden = !(service === 'audio' || service === 'combined');
    if (service !== 'troubleshoot') extraNote = '';
    $("#st-gear").hidden = !form.querySelector("input[name=\"gear\"]:checked");
    const micOn = !!form.querySelector('input[name="option"][value="mic"]:checked');
    $('#st-mic-field').hidden = !micOn;
    const r = estimate();
    const mic = $('#st-mic');
    mic.setAttribute('aria-invalid', String(micOn && r.invalid));
    $('#st-mic-hint').textContent = micOn && r.invalid ? '1부터 20 사이의 숫자로 적어 주세요.' : '1대당 20,000원';
    $('#st-mic-hint').classList.toggle('tf-field__hint--error', micOn && r.invalid);
    $('#st-copy').disabled = r.invalid;

    $('#st-items').innerHTML = r.items.map(([n, p]) => `<div class="st-summary__item"><span>${esc(n)}</span><span>${p === null ? '상담' : p === 0 ? '무료' : won(p) + '원'}</span></div>`).join('');
    roll($('#st-total'), lastTotal, r.total);
    lastTotal = r.total;
    $('#st-total-unit').textContent = r.open ? '원부터' : '원';
    $('#st-total-note').textContent = r.open ? '상담 항목이 있어 최소 금액' : '상담에서 확정';
    $('#st-slot-line').textContent = '희망 일정 · ' + (preferred || '상담 후 결정');

    const f = r.f;
    const lines = [
      '[악몽 세팅 문의]',
      `서비스: ${serviceNames[r.service]}`,
      ...r.items.map(([n, p]) => `- ${n}: ${p === null ? '상담 후 견적' : p === 0 ? '무료' : won(p) + '원'}`),
      `예상 금액: ${won(r.total)}원${r.open ? '부터' : ''} (상담 후 확정)`,
      `희망 일정: ${preferred || '상담 후 결정'}`,
      `활동명/채널: ${f.get('channel') || '-'}`,
      `플랫폼: ${f.get('platform') || '-'}`,
      `장비: ${f.get('gear') ? '아직 없음 (장비 추천 요청)' : f.get('equipment') || '-'}`,
      ...(f.get('gear') ? [`장비 예산: ${f.get('budget') || '-'}`, `주로 할 방송: ${f.get('purpose') || '-'}`, `방 상태: ${f.get('room') || '-'}`] : []),
      `요청: ${f.get('request') || '-'}`,
    ];
    $('#st-output').value = lines.join('\n');
    $('#st-copy-status').textContent = '';
  }
  form.addEventListener('input', refresh);
  form.addEventListener('change', refresh);

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch {
      const ta = $('#st-output'); ta.closest('details').open = true; ta.focus(); ta.select();
      try { return document.execCommand('copy'); } catch { return false; }
    }
  }
  $('#st-copy').addEventListener('click', async () => {
    const ok = await copyText($('#st-output').value);
    const qna = artmug.qna();
    const status = $('#st-copy-status');
    if (!ok) { status.textContent = '복사하지 못했습니다. 아래 글을 직접 선택해 복사해 주세요.'; $('.st-preview').open = true; return; }
    status.textContent = qna ? '복사했습니다. 열린 문의 창에 붙여 넣어 보내 주세요.' : '복사했습니다. 오른쪽의 "작가에게 문의"를 눌러 붙여 넣어 주세요.';
    if (qna) qna.click(); else toast('복사했습니다. 미리 보기에서는 문의 창이 열리지 않습니다.');
  });

  // ---------- Schedule ----------
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const kstToday = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const monday = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
  const clock = (i) => `${String(Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`;
  const label = (date) => { const d = new Date(date + 'T00:00:00'); return `${d.getMonth() + 1}월 ${d.getDate()}일 (${dayNames[d.getDay()]})`; };
  const today = iso(kstToday());
  let weekStart = monday(kstToday());
  let selectedDay = null;
  let weekData = null;
  const cache = new Map();

  async function fetchWeek(start) {
    const key = iso(start);
    if (cache.has(key)) return cache.get(key);
    const res = await fetch(`${host.dataset.api || API}?start=${key}&days=7`, { cache: 'no-store' });
    if (!res.ok) throw new Error('availability ' + res.status);
    const json = await res.json();
    cache.set(key, json);
    return json;
  }
  const open = (day) => (day.slots || []).filter((s) => s.status === 'available' && (day.date > today || day.date === today));

  async function loadWeek() {
    const end = new Date(weekStart); end.setDate(end.getDate() + 6);
    $('#st-week-label').textContent = `${weekStart.getMonth() + 1}월 ${weekStart.getDate()}일 – ${end.getMonth() + 1}월 ${end.getDate()}일`;
    $('#st-prev').disabled = weekStart <= monday(kstToday());
    $('#st-days').innerHTML = '';
    $('#st-slots-area').innerHTML = `<div class="st-state"><span class="tf-spinner" aria-hidden="true"></span><p>일정을 확인하는 중입니다.</p></div>`;
    try {
      weekData = await fetchWeek(weekStart);
      renderDays();
      const first = weekData.days.find((d) => open(d).length);
      selectedDay = first?.date ?? null;
      renderDays();
      if (selectedDay) renderSlots(); else await renderEmpty();
      $('#st-sched-status').textContent = `확인한 시각 ${new Date(weekData.checkedAt).toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit' })}`;
    } catch {
      $('#st-slots-area').innerHTML = `<div class="st-state st-state--error"><strong>일정을 불러오지 못했습니다.</strong><p>다시 시도하거나 원하는 날짜를 문의 글에 적어 주세요.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-retry">다시 불러오기</button></div>`;
      $('#st-retry').addEventListener('click', loadWeek);
      $('#st-sched-status').textContent = '';
    }
  }
  function renderDays() {
    $('#st-days').innerHTML = weekData.days.map((d) => {
      const dt = new Date(d.date + 'T00:00:00'); const n = open(d).length; const past = d.date < today;
      return `<button class="st-day" type="button" data-date="${d.date}" aria-pressed="${d.date === selectedDay}" ${past || !n ? 'disabled' : ''}>
        <span class="st-day__name">${dayNames[dt.getDay()]}</span><span class="st-day__date">${dt.getMonth() + 1}/${dt.getDate()}</span>
        <span class="st-day__count">${past ? '지난 날' : n ? `${n}칸 열림` : '열린 칸 없음'}</span></button>`;
    }).join('');
  }
  function renderSlots() {
    const day = weekData.days.find((d) => d.date === selectedDay);
    $('#st-slots-area').innerHTML = `<div class="st-slots" role="group" aria-label="${label(selectedDay)} 시작 시간">${open(day).map((s) => {
      const text = `${label(selectedDay)} ${clock(s.index)}`;
      return `<button class="tf-btn tf-btn--outline tf-btn--sm st-slot" type="button" data-slot="${esc(text)}" aria-pressed="${preferred === text}">${clock(s.index)}</button>`;
    }).join('')}</div>`;
  }
  async function renderEmpty() {
    const area = $('#st-slots-area');
    area.innerHTML = `<div class="st-state"><p>다음 열린 날을 찾는 중입니다.</p></div>`;
    let found = null; let foundWeek = null;
    for (let w = 1; w <= 4 && !found; w++) {
      const s = new Date(weekStart); s.setDate(s.getDate() + 7 * w);
      try { const data = await fetchWeek(s); const d = data.days.find((x) => open(x).length); if (d) { found = d.date; foundWeek = s; } } catch { break; }
    }
    area.innerHTML = found
      ? `<div class="st-state"><p>가장 빠른 날은 ${label(found)}입니다.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-jump">${label(found)} 보기</button></div>`
      : `<div class="st-state"><p>4주 안에 열린 시간이 없습니다. 원하는 날짜를 문의 글에 적어 주세요.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" data-go="inquiry">문의 글 만들기</button></div>`;
    $('#st-jump')?.addEventListener('click', () => { weekStart = foundWeek; loadWeek(); });
  }
  $('#st-days').addEventListener('click', (e) => { const b = e.target.closest('.st-day'); if (!b || b.disabled) return; selectedDay = b.dataset.date; renderDays(); renderSlots(); });
  $('#st-slots-area').addEventListener('click', (e) => {
    const b = e.target.closest('.st-slot'); if (!b) return;
    preferred = preferred === b.dataset.slot ? '' : b.dataset.slot;
    renderSlots(); refresh();
    if (preferred) toast(`${preferred}을 희망 일정으로 넣었습니다.`);
  });
  $('#st-prev').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() - 7); loadWeek(); });
  $('#st-next').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() + 7); loadWeek(); });

  // Load the schedule only when it comes near the screen.
  new IntersectionObserver((entries, io) => { if (entries.some((x) => x.isIntersecting)) { io.disconnect(); loadWeek(); } }, { rootMargin: '600px' }).observe($('#st-schedule'));

  // While Artmug cuts the page at 3,000px, push the first section below the cut so no heading is sliced in half.
  function fitFold() {
    const first = $(`[data-section="${AFTER_FOLD[0]}"]`);
    const clamp = artmug.clamp();
    first.style.paddingTop = '';
    if (!clamp) return;
    const cut = clamp.getBoundingClientRect().bottom;
    const head = first.querySelector('.st-band__head').getBoundingClientRect().top;
    if (head < cut + 24) first.style.paddingTop = `calc(var(--space-12) + ${Math.ceil(cut + 24 - head)}px)`;
  }
  new ResizeObserver(fitFold).observe(host);
  const fold = document.querySelector(".detailinfo");
  if (fold) new MutationObserver(fitFold).observe(fold, { attributes: true, attributeFilter: ["class"] });
  (document.fonts?.ready ?? Promise.resolve()).then(fitFold);

  refresh();
  mountRail();

  // ---------- Rail ----------
  function mountRail() {
    const holder = document.createElement('div');
    holder.id = HOST_ID + '-rail';
    holder.dataset.theme = host.dataset.theme;
    holder.dataset.feel = host.dataset.feel;
    document.body.appendChild(holder);
    const r = holder.attachShadow({ mode: 'open' });
    const keys = order;
    r.innerHTML = `<style>${CSS}</style>
      <nav class="rail" aria-label="악몽 소개 바로가기">
        <p class="rail__name">악몽 · 방송 음향 세팅</p>
        <div class="rail__nav"><span class="rail__marker" aria-hidden="true"></span>${keys.map((k) => `<button class="rail__item" type="button" data-key="${k}">${LABELS[k]}</button>`).join('')}</div>
        <div class="rail__meter"><div class="rail__meter-line"><span>읽은 곳</span><span class="rail__pct">0%</span></div><div class="tf-progress"><div class="tf-progress__bar"></div></div></div>
        <span class="rail__now"></span>
        <button class="tf-btn" type="button" data-key="inquiry">문의 글 만들기</button>
      </nav>`;
    const rail = r.querySelector('.rail');
    const items = [...r.querySelectorAll('.rail__item')];
    const cta = r.querySelector('.tf-btn');
    r.addEventListener('click', (e) => { const b = e.target.closest('[data-key]'); if (b) go(b.dataset.key); });

    let current = null;
    function layout() {
      const rect = host.getBoundingClientRect();
      const wide = rect.width >= 1100;
      rail.classList.toggle('rail--bar', !wide);
      if (wide) rail.style.left = rect.right - 184 + 'px';
      const vh = innerHeight;
      const visible = rect.top < vh * 0.6 && rect.bottom > vh * 0.4;
      rail.dataset.open = String(visible);
      // Which section holds the line a third of the way down the screen.
      let now = keys[0];
      for (const k of keys) { const el = $(`[data-section="${k}"]`); if (el && el.getBoundingClientRect().top <= vh / 3) now = k; }
      if (now !== current) {
        current = now;
        items.forEach((b) => b.setAttribute('aria-current', String(b.dataset.key === now)));
        const on = items.find((b) => b.dataset.key === now);
        r.querySelector('.rail__marker').style.setProperty('--rail-y', on.offsetTop + 'px');
        r.querySelector('.rail__now').textContent = LABELS[now];
        // One black button on screen: the form's own button takes over in the inquiry section.
        cta.classList.toggle('tf-btn--outline', now === 'inquiry');
      }
      const clamp = artmug.clamp();
      const bottom = clamp ? Math.min(rect.bottom, clamp.getBoundingClientRect().bottom) : rect.bottom;
      const total = bottom - rect.top - vh;
      const pct = Math.max(0, Math.min(1, total > 0 ? -rect.top / total : 1));
      r.querySelector('.rail__pct').textContent = Math.round(pct * 100) + '%';
      r.querySelector('.tf-progress__bar').style.setProperty('--tf-progress', pct);
    }
    let raf = 0;
    const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; layout(); }); };
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    new ResizeObserver(schedule).observe(host);
    layout();
  }
}
