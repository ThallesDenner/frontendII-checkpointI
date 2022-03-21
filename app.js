(function() {

    let sidebarMenu = document.getElementById('sidebarMenu');
    let btnAbrirMenu = document.getElementById('btnAbrirMenu');
    let controleMenu = false;
    let documento = document.body;
    let statusSidebar;

    btnAbrirMenu.addEventListener('click', () => {
        sidebarMenu.style.transform='translateX(0)';
        controleMenu = true;
    });

    documento.addEventListener('keydown', (tecla) => {
        if(tecla.code == 'Space' && tecla.target === documento) {
            tecla.preventDefault(); 
            if (controleMenu == true) {
                sidebarMenu.style.transform = 'translateX(-250px)';
                controleMenu = false;
                console.log('fechou');
            } 
            else {
                sidebarMenu.style.transform = 'translateX(0)';
                controleMenu = true;
                console.log('abriu');
            }
        }
    }
    );

    documento.addEventListener("dblclick", () => {
        statusSidebar = sidebarMenu.classList.toggle('visivel');
        statusSidebar ? sidebarMenu.style.transform='translateX(0px)' : sidebarMenu.style.transform='translateX(-250px)';
    })

   
    // Adicione sua implementação aqui...
    // Tem total liberdade de alterar o documento HTML, CSS e JS.

    // Um ótimo feedback para todos.
})();

