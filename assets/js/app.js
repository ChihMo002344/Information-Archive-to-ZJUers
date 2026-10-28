/* ==========================================================================
   IA托者 · 交互脚本
   - 读取 data/sites.js → 渲染分类与卡片
   - 站内搜索、主题切换、星空背景、滚动动效
   无任何第三方依赖。
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- 0. 数据 ---------------------------------------------------- */

  var DATA = window.IA_DATA || {};

  var SITE = Object.assign(
    {
      title: "IA托者",
      brandSub: "连接浙大人的信息入口",
      heroTitle: "信息入口，从这里开始。",
      heroSub: "为浙大人整理的常用入口：学习、办公、科研与生活，一站直达。",
      repo: "",
      submitUrl: "",
      placeholderCount: 6
    },
    DATA.site || {}
  );

  var CATS = (Array.isArray(DATA.categories) ? DATA.categories : []).filter(function (c) {
    return c && typeof c === "object" && c.name;
  });

  /* ---------- 1. 图标 ---------------------------------------------------- */

  var ICONS = {
    ai: '<path d="M12 3.6l1.6 4.4 4.4 1.6-4.4 1.6L12 15.6l-1.6-4.4L6 9.6l4.4-1.6z"/><path d="M18.4 14.6l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    model:
      '<path d="M12 3 3 7.6l9 4.6 9-4.6L12 3Z"/><path d="M3 12l9 4.6 9-4.6"/><path d="M3 16.4 12 21l9-4.6"/>',
    campus:
      '<path d="M3 21h18"/><path d="M4.5 21V9.8L12 4.4l7.5 5.4V21"/><path d="M9.5 21v-5.5h5V21"/><path d="M9 11.5h.01M15 11.5h.01"/>',
    office:
      '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    book: '<path d="M12 6.6C10.5 5 8.2 4.4 4.8 4.4v13.9c3.4 0 5.7.6 7.2 2.1 1.5-1.5 3.8-2.1 7.2-2.1V4.4c-3.4 0-5.7.6-7.2 2.2Z"/><path d="M12 6.6v13.8"/>',
    forum:
      '<path d="M21 11.6a8.3 8.3 0 0 1-8.4 8.2 8.9 8.9 0 0 1-3.9-.9L3.2 20.8l1.9-4.9a8 8 0 0 1-.9-3.6A8.3 8.3 0 0 1 12.6 4 8.3 8.3 0 0 1 21 11.6Z"/>',
    zap: '<path d="M13.4 2.4 4.2 13.6h6l-1.3 8 9.2-11.2h-6z"/>',
    hash: '<path d="M4.5 9h15M4.5 15h15M10 3.5 8 20.5M16 3.5l-2 17"/>',
    design: '<path d="M4 20l4.2-1L19 8.2a2.6 2.6 0 0 0-3.7-3.7L4.5 15.3 3.5 20z"/><path d="M14.5 6.2l3.7 3.7"/>',
    media:
      '<rect x="3" y="3.5" width="18" height="17" rx="2.6"/><circle cx="8.6" cy="9" r="1.5"/><path d="M20.5 15.5 16 11 6 20.5"/>',
    link: '<path d="M7 17 17 7"/><path d="M8.5 7H17v8.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };

  function icon(name, size) {
    var s = size || 18;
    return (
      '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true">' + (ICONS[name] || ICONS.link) + "</svg>"
    );
  }

  /* ---------- 2. 小工具 -------------------------------------------------- */

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function normalizeUrl(url) {
    var u = String(url || "").trim();
    if (!u) return "";
    if (!/^https?:\/\//i.test(u)) u = "https://" + u.replace(/^\/+/, "");
    return u;
  }

  function hostOf(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return "";
    }
  }

  function repoUrl() {
    var r = String(SITE.repo || "").trim();
    if (!r) return "";
    if (/^https?:\/\//i.test(r)) return r.replace(/\/+$/, "");
    if (/^[\w.-]+\/[\w.-]+$/.test(r)) return "https://github.com/" + r;
    return "https://github.com/" + r.replace(/^\/+/, "");
  }

  /* ---------- 3. 站点基础信息 -------------------------------------------- */

  function applySiteMeta() {
    document.title = SITE.title + " · Information Archive to ZJUers";

    var brandName = $("#brandName");
    var brandSub = $("#brandSub");
    var heroTitle = $("#heroTitle");
    var heroSub = $("#heroSub");

    if (brandName) brandName.textContent = SITE.title;
    if (brandSub && SITE.brandSub) brandSub.textContent = SITE.brandSub;
    if (heroTitle && SITE.heroTitle) heroTitle.textContent = SITE.heroTitle;
    if (heroSub && SITE.heroSub) heroSub.textContent = SITE.heroSub;

    var year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    var repo = repoUrl();
    if (repo) {
      [$("#repoBtn"), $("#footerRepo")].forEach(function (a) {
        if (!a) return;
        a.href = repo;
        a.hidden = false;
      });
    }

    var submit = String(SITE.submitUrl || "").trim() || (repo ? repo + "/issues/new/choose" : "");
    var submitBtn = $("#submitBtn");
    if (submit && submitBtn) {
      submitBtn.href = submit;
      submitBtn.hidden = false;
    }
  }

  /* ---------- 4. 渲染分类与卡片 ------------------------------------------ */

  var sections = []; // { el, cards: [] }

  function buildCategory(cat) {
    var sec = el("section", "category");
    sec.id = "cat-" + (cat.id || Math.random().toString(36).slice(2, 7));

    // 标题行
    var head = el("div", "cat-head");
    var iconBox = el("span", "cat-icon");
    iconBox.innerHTML = icon(cat.icon || "link", 17);
    var title = el("h2", null, cat.name);
    head.appendChild(iconBox);
    head.appendChild(title);

    var items = (Array.isArray(cat.items) ? cat.items : []).filter(function (it) {
      return it && it.name && it.url;
    });

    var count = el("span", "cat-count", String(items.length));
    head.appendChild(count);
    sec.appendChild(head);

    // 卡片网格
    var grid = el("div", "grid");
    var cards = [];

    items.forEach(function (item) {
      var url = normalizeUrl(item.url);
      var card = document.createElement("a");
      card.className = "card";
      card.href = url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      var h3 = el("h3");
      if (item.logo) {
        var img = document.createElement("img");
        img.src = item.logo;
        img.alt = "";
        img.loading = "lazy";
        img.width = 16;
        img.height = 16;
        h3.appendChild(img);
      }
      h3.appendChild(el("span", "t", item.name));
      card.appendChild(h3);

      var desc = String(item.desc || "").trim() || hostOf(url);
      card.appendChild(el("p", null, desc));

      var go = el("span", "go");
      go.innerHTML = icon("link", 14);
      card.appendChild(go);

      var tags = Array.isArray(item.tags) ? item.tags.join(" ") : String(item.tags || "");
      card.dataset.search = [item.name, desc, tags, hostOf(url), url]
        .join(" ")
        .toLowerCase();

      card.title = item.name + (desc ? " — " + desc : "");
      grid.appendChild(card);
      cards.push(card);
    });

    // 没有内容时铺一排虚位卡片，保证排版密度可预览
    var placeholders = [];
    if (items.length === 0) {
      var n = Math.max(0, Math.min(12, Number(SITE.placeholderCount) || 6));
      for (var i = 0; i < n; i++) {
        var ghost = el("div", "card card--ghost");
        ghost.innerHTML = '<span class="ghost-plus">+</span><span>待添加</span>';
        ghost.title = "在 data/sites.js 的这个分类里添加条目";
        grid.appendChild(ghost);
        placeholders.push(ghost);
      }
    }

    sec.appendChild(grid);
    sections.push({ el: sec, cards: cards, ghosts: placeholders, count: count });
    return sec;
  }

  function renderCategories() {
    var root = $("#categories");
    if (!root) return;

    if (!CATS.length) {
      var empty = el("div", "empty-result");
      empty.innerHTML =
        "<strong>还没有分类</strong>打开 <code>data/sites.js</code>，在 categories 里添加第一个分类。";
      root.appendChild(empty);
      return;
    }

    var frag = document.createDocumentFragment();
    CATS.forEach(function (cat) {
      frag.appendChild(buildCategory(cat));
    });
    root.appendChild(frag);

    // 统计
    var total = CATS.reduce(function (sum, cat) {
      return sum + (Array.isArray(cat.items) ? cat.items.filter(function (i) {
        return i && i.name && i.url;
      }).length : 0);
    }, 0);

    var totalEl = $("#totalCount");
    var catEl = $("#catCount");
    if (totalEl) totalEl.textContent = String(total);
    if (catEl) catEl.textContent = String(CATS.length);

    var chip = $("#pendingChip");
    if (chip) {
      chip.hidden = total > 0;
      chip.classList.add("dot");
    }
  }

  /* ---------- 5. 搜索 ----------------------------------------------------- */

  function bindSearch() {
    var form = $("#searchForm");
    var input = $("#searchInput");
    var clear = $("#searchClear");
    var emptyResult = $("#emptyResult");
    var emptyReset = $("#emptyReset");
    if (!form || !input) return;

    function apply() {
      var q = input.value.trim().toLowerCase();
      var visible = 0;

      sections.forEach(function (s) {
        var hit = 0;
        s.cards.forEach(function (card) {
          var match = !q || card.dataset.search.indexOf(q) !== -1;
          card.hidden = !match;
          if (match) hit++;
        });
        s.ghosts.forEach(function (g) {
          g.hidden = !!q;
        });
        s.el.hidden = !!q && hit === 0;
        visible += hit;
      });

      if (clear) clear.hidden = !q;
      if (emptyResult) emptyResult.hidden = !(q && visible === 0);
    }

    function reset() {
      input.value = "";
      apply();
      input.focus();
    }

    input.addEventListener("input", apply);
    input.addEventListener("search", apply);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
    if (clear) clear.addEventListener("click", reset);
    if (emptyReset) emptyReset.addEventListener("click", reset);

    // 「/」聚焦搜索，Esc 清空
    document.addEventListener("keydown", function (e) {
      var tag = (e.target && e.target.tagName) || "";
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (e.target && e.target.isContentEditable);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === "Escape" && document.activeElement === input) {
        if (input.value) {
          reset();
        } else {
          input.blur();
        }
      }
    });
  }

  /* ---------- 6. 主题 ----------------------------------------------------- */

  function bindTheme() {
    var btn = $("#themeToggle");
    var root = document.documentElement;
    if (!btn) return;

    function sync() {
      var dark = root.getAttribute("data-theme") !== "light";
      btn.setAttribute("aria-label", dark ? "切换到浅色主题" : "切换到深色主题");
      btn.setAttribute("title", dark ? "切换到浅色主题" : "切换到深色主题");

      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", dark ? "#05060d" : "#f6f7fb");
    }

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("ia-theme", next);
      } catch (e) {}
      sync();
      drawStars();
    });

    sync();
  }

  /* ---------- 7. 顶栏与移动端菜单 ---------------------------------------- */

  function bindHeader() {
    var header = $("#siteHeader");
    var menuBtn = $("#menuBtn");
    var mobileNav = $("#mobileNav");

    function onScroll() {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!menuBtn || !mobileNav) return;

    function close() {
      mobileNav.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    document.addEventListener("click", function (e) {
      if (mobileNav.hidden) return;
      if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) close();
    });
  }

  /* ---------- 8. 滚动高亮 ------------------------------------------------ */

  function bindScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
    if (!links.length) return;

    var all = $("#all");
    var about = $("#about");
    var targets = [
      { id: "top", el: document.body },
      { id: "all", el: all },
      { id: "about", el: about }
    ].filter(function (t) {
      return t.el;
    });

    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY + 140;
      var current = "top";
      targets.forEach(function (t) {
        var top = t.el === document.body ? 0 : t.el.getBoundingClientRect().top + window.scrollY;
        if (y >= top) current = t.id;
      });
      // 到底部时强制高亮「关于」
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) current = "about";

      links.forEach(function (a) {
        var on = a.dataset.nav === current;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  /* ---------- 9. 星空背景 ------------------------------------------------ */

  var drawStars = function () {};

  function initStars() {
    var canvas = $("#stars");
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext("2d");
    var stars = [];

    function build() {
      var w = canvas.clientWidth || window.innerWidth;
      var h = canvas.clientHeight || window.innerHeight;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      var density = w < 700 ? 11000 : 7200;
      var n = Math.min(Math.round((w * h) / density), 900);
      stars = [];

      for (var i = 0; i < n; i++) {
        var r = Math.random() * 1.05 + 0.22;
        var a = Math.random() * 0.5 + 0.1;
        var pick = Math.random();
        var color =
          pick > 0.88
            ? "rgba(170,195,255," + a + ")"
            : pick > 0.7
            ? "rgba(205,225,255," + (a * 0.85) + ")"
            : "rgba(255,255,255," + a + ")";
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: r,
          c: color,
          glow: r > 1.0 && Math.random() > 0.85
        });
      }

      stars.forEach(function (s) {
        if (s.glow) {
          var g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
          g.addColorStop(0, "rgba(160,180,255,0.5)");
          g.addColorStop(1, "rgba(160,180,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    drawStars = build;
    build();

    var timer;
    window.addEventListener("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(build, 180);
    });
  }

  /* ---------- 10. 入场动效 ---------------------------------------------- */

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var root = document.documentElement;
    root.classList.add("js-reveal");

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 }
    );

    document.querySelectorAll(".category").forEach(function (node) {
      io.observe(node);
    });

    // 首屏内的直接显示，避免闪烁
    requestAnimationFrame(function () {
      document.querySelectorAll(".category").forEach(function (node) {
        if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
          node.classList.add("in");
        }
      });
    });
  }

  /* ---------- 11. 启动 --------------------------------------------------- */

  function boot() {
    applySiteMeta();
    renderCategories();
    bindSearch();
    bindTheme();
    bindHeader();
    bindScrollSpy();
    initStars();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
