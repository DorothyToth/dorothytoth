export default function scrollToElement( e ) {
    e.preventDefault();
    const { hash } = new URL( e.currentTarget.href );
    const element = document.getElementById(hash.substring( 1 ) );
    element?.scrollIntoView({ behavior: 'smooth' });
}