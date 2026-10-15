/* Shared content defaults + localStorage loader for Mohsin Razak Academy */

const DEFAULTS = {
  siteName: "Mohsin Raza",
  logoMark: "MR",
  heroEyebrow: "Practical Knowledge • Real Results",
  heroTitleLine1: "LEARN WHAT",
  heroTitleLine2: "SCHOOL DOESN’T TEACH YOU",
  heroDesc: "Gain practical knowledge and real-world skills that will help you transform your life at work, school and home.",
  statLearners: "10,000+",
  statRating: "4.8+",
  coursesTitle: "Become Skilled at What Matters",
  coursesDesc: "Carefully designed courses that turn knowledge into action.",
  courses: [
    {
      badge: "Content Creation",
      title: "The YouTube Blueprint",
      desc: "Make content creation your career. Find your niche, master scripting, filming, editing and grow.",
      points: ["Find your niche", "Script, film & edit", "Grow & monetize"],
      image: "",
      placeholder: "YT"
    },
    {
      badge: "AI",
      title: "Master ChatGPT",
      desc: "Transform your life with AI. Learn prompt engineering and boost productivity at work, school and home.",
      points: ["Prompt engineering", "Real-world use cases", "Daily productivity"],
      image: "",
      placeholder: "AI"
    },
    {
      badge: "Productivity",
      title: "Master Time Management",
      desc: "Take productivity to the next level while maximizing happiness. Plan your day and live your dream life.",
      points: ["Daily planning", "Kill procrastination", "Work-life balance"],
      image: "",
      placeholder: "TM"
    }
  ],
  aboutName: "Mohsin Raza",
  aboutRole: "Creator • Educator • Influencer",
  aboutText1: "I love creating content that helps people grow. My focus is on practical, actionable knowledge that schools rarely teach — skills that actually change how you work, learn and live.",
  aboutText2: "This academy is built so that anyone, from any background, can start learning real-world skills today and apply them immediately.",
  aboutImage: "",
  social: {
    youtube: "",
    instagram: "",
    twitter: "",
    facebook: "",
    threads: ""
  },
  ctaTitle: "Ready to start learning?",
  ctaDesc: "Join thousands of learners and build skills that actually matter.",
  footerTagline: "Practical skills for the real world. Built for creators and lifelong learners."
};

function getContent() {
  try {
    const raw = localStorage.getItem("mohsin_academy_content");
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULTS, ...parsed, courses: parsed.courses || DEFAULTS.courses, social: { ...DEFAULTS.social, ...(parsed.social || {}) } };
    }
  } catch (e) {}
  return { ...DEFAULTS };
}

function saveContent(data) {
  localStorage.setItem("mohsin_academy_content", JSON.stringify(data));
}

function applyContentToPage() {
  const c = getContent();

  // Brand
  document.querySelectorAll("#siteName, #footerSiteName, #footerCopyName").forEach(el => { if (el) el.textContent = c.siteName; });
  document.querySelectorAll("#logoMark, #footerLogoMark").forEach(el => { if (el) el.textContent = c.logoMark || "MR"; });
  document.title = c.siteName + " Academy";

  // Hero
  const eyebrow = document.getElementById("heroEyebrow");
  if (eyebrow) eyebrow.textContent = c.heroEyebrow;
  const title = document.getElementById("heroTitle");
  if (title) {
    title.innerHTML = (c.heroTitleLine1 || "LEARN WHAT") + "<br /><span class=\"gradient-text\">" + (c.heroTitleLine2 || "SCHOOL DOESN’T TEACH YOU") + "</span>";
  }
  const desc = document.getElementById("heroDesc");
  if (desc) desc.textContent = c.heroDesc;
  const learners = document.getElementById("statLearners");
  if (learners) learners.textContent = c.statLearners;
  const rating = document.getElementById("statRating");
  if (rating) rating.textContent = c.statRating;

  // Courses section headers
  const ct = document.getElementById("coursesTitle");
  if (ct) ct.textContent = c.coursesTitle;
  const cd = document.getElementById("coursesDesc");
  if (cd) cd.textContent = c.coursesDesc;

  // Course cards
  const grid = document.getElementById("courseGrid");
  if (grid && c.courses) {
    grid.innerHTML = c.courses.map((course, i) => {
      const imgHtml = course.image
        ? `<img src="${course.image}" alt="${course.title}" />`
        : `<div class="course-placeholder">${course.placeholder || "C"}</div>`;
      const points = (course.points || []).map(p => `<li>${p}</li>`).join("");
      return `
        <article class="course-card">
          <div class="course-badge">${course.badge || "Course"}</div>
          <div class="course-image">${imgHtml}</div>
          <div class="course-body">
            <h3>${course.title || "Course Title"}</h3>
            <p>${course.desc || ""}</p>
            <ul class="course-points">${points}</ul>
            <a href="#" class="btn btn-card">View Course</a>
          </div>
        </article>`;
    }).join("");
  }

  // About
  const an = document.getElementById("aboutName");
  if (an) an.textContent = c.aboutName;
  const ar = document.getElementById("aboutRole");
  if (ar) ar.textContent = c.aboutRole;
  const at1 = document.getElementById("aboutText1");
  if (at1) at1.textContent = c.aboutText1;
  const at2 = document.getElementById("aboutText2");
  if (at2) at2.textContent = c.aboutText2;

  const wrap = document.getElementById("aboutImageWrap");
  if (wrap) {
    if (c.aboutImage) {
      wrap.innerHTML = `<img src="${c.aboutImage}" alt="${c.aboutName}" />`;
    } else {
      wrap.innerHTML = `<div class="about-placeholder" id="aboutPlaceholder">${(c.aboutName || "Mohsin Razak").replace(" ", "<br>")}</div>`;
    }
  }

  // Social
  const setLink = (id, url) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = url || "#";
      if (url) el.target = "_blank";
    }
  };
  setLink("linkYoutube", c.social.youtube);
  setLink("linkInstagram", c.social.instagram);
  setLink("linkTwitter", c.social.twitter);
  setLink("linkFacebook", c.social.facebook);
  setLink("linkThreads", c.social.threads);
  setLink("footerYt", c.social.youtube);
  setLink("footerIg", c.social.instagram);
  setLink("footerX", c.social.twitter);
  setLink("footerFb", c.social.facebook);

  // CTA + footer
  const ctaT = document.getElementById("ctaTitle");
  if (ctaT) ctaT.textContent = c.ctaTitle;
  const ctaD = document.getElementById("ctaDesc");
  if (ctaD) ctaD.textContent = c.ctaDesc;
  const ft = document.getElementById("footerTagline");
  if (ft) ft.textContent = c.footerTagline;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

// Auto-apply on public pages
if (document.getElementById("courseGrid")) {
  document.addEventListener("DOMContentLoaded", applyContentToPage);
}
