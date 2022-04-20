

function animateSidebar () {
   const sideBar = document.querySelector('.sidebar');
   if (sideBar.classList.contains('sidebar-open')) {
       sideBar.classList.remove('sidebar-open');
   }
   else {
    sideBar.classList.add('sidebar-open');
   }

}
