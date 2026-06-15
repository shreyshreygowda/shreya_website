const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

reveals.forEach((el) => observer.observe(el));

// fallback: ensure content shows even if observer misses
setTimeout(() => {
  reveals.forEach((el) => el.classList.add("visible"));
}, 100);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  document.querySelectorAll(".blob-wrap").forEach((wrap, i) => {
    const factor = (i + 1) * 10;
    wrap.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
