
    function showMenu() {
        const navLink = document.getElementById('navLink');
        const menuIcon = document.querySelector('.menu-icon i')
        const overLay = document.getElementById('overlay');

        navLink.classList.toggle('active');
        overLay.classList.toggle('show');

        if (navLink.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");


            navLink.classList.add('show');
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
            navLink.classList.remove('overlay')


            navLink.classList.remove('show');
        }
    }

    function toggleDropdown(event, icon) {
        event.preventDefault();
        event.stopPropagation();
    
        const dropdown = icon.closest(".dropdown");
        dropdown.classList.toggle("open");
      }
