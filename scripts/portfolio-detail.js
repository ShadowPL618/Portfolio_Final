/**
 * portfolio-detail.js
 * Init script for project detail sub-pages (wede, ebsy, appr).
 * Must be included AFTER portfolio-main.js on detail pages.
 */
document.addEventListener('DOMContentLoaded', () => {
    PORTFOLIO_RENDER.init();
    if (PORTFOLIO_RENDER.data) {
        PORTFOLIO_RENDER.renderProjectDetail(PORTFOLIO_RENDER.category);
        PORTFOLIO_RENDER.renderFooter();
    }
    PORTFOLIO_UI.initNav();
    PORTFOLIO_UI.initFadeIn();
    PORTFOLIO_UI.initLangToggle();
    PORTFOLIO_LANG.translatePage();
});