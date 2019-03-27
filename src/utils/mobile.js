export const isMobileOrTablet = () => {
  return window.matchMedia('(max-width: 1023px)').matches;
}
