export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -window.innerHeight * 0.2;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
