document.addEventListener('DOMContentLoaded', function() {
    function adjustLayout() {
        const screenWidth = window.innerWidth;
        const nav = document.querySelector('nav ul');
        const homeSection = document.querySelector('.home');
        const content = document.querySelector('.content');
        const btnGroup = document.querySelector('.btn-group');

        if (screenWidth < 768) {
            nav.style.flexDirection = 'column';
            nav.style.alignItems = 'flex-start';
            nav.style.padding = '10px';

            homeSection.style.padding = '10px 20px';
            content.style.maxWidth = '100%';

            btnGroup.style.flexDirection = 'column';
            btnGroup.querySelectorAll('a').forEach(a => {
                a.style.margin = '5px 0';
                a.style.width = '100%';
                a.style.textAlign = 'center';
            });
        } else {
            nav.style.flexDirection = 'row';
            nav.style.alignItems = 'center';
            nav.style.padding = '5px 30px';

            homeSection.style.padding = '10px 90px';
            content.style.maxWidth = '500px';

            btnGroup.style.flexDirection = 'row';
            btnGroup.querySelectorAll('a').forEach(a => {
                a.style.margin = '0';
                a.style.width = 'auto';
                a.style.textAlign = 'initial';
            });
        }
    }

    window.addEventListener('resize', adjustLayout);
    adjustLayout();
});
