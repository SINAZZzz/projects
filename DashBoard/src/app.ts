document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    const sidebar = document.querySelector<HTMLElement>('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');
    const contents: NodeListOf<HTMLElement> = document.querySelectorAll('.content');

    // Hide all content except the default one
    // contents.forEach(function (content) {
    //     if (!content.classList.contains('block')) {
    //         content.style.display = 'none';
    //     }
    // });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target: string | null = this.getAttribute('data-target');

            contents.forEach(function (content) {
                content.style.display = 'none';
            });

            if (target) {
                const targetContent: HTMLElement | null = document.getElementById(target + '-content');
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            }
        });
    });
});