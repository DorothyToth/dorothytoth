export default function scrollToElement( e ) {
    e.preventDefault();
    const { hash } = new URL( e.currentTarget.href );
    const element = document.getElementById(hash.substring( 1 ) );
    
    if (!element) return;
    
    const duration = 1000; // Duration in milliseconds - adjust this to control speed
    const start = window.scrollY;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();
    
    function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutCubic = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
        window.scrollTo(0, start + change * easeInOutCubic);
        
        if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}