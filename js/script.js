// sidebar toggle
let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");

let openSidebar = () => {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
};

let closeSidebar= () => {
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarClose = false;
    }
}
