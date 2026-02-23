// src/utils/navigation.js
export const scrollToSection = (e, href) => {
  if (e) e.preventDefault();
  
  const id = href.startsWith('#') ? href.substring(1) : href;
  const element = document.getElementById(id);
  
  if (element) {
    const offset = 80; // skip the sticky header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
