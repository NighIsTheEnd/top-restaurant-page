const navEvents = (() => {
    const loadNavClickListener = () => {
        const navLinks = document.getElementById("main-nav");
        navLinks.addEventListener('click', (e) => {
            checkEventClass(e.target);
        })
    }

    return {
        loadNavClickListener,
    }

})();

export default navEvents;