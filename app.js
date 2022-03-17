(function() {

    let sidebarMenu = document.getElementById('sidebarMenu');
    let btnAbrirMenu = document.getElementById('btnAbrirMenu');
    let controleMenu = false;
    let documento = document.body;

    btnAbrirMenu.addEventListener('click', () => {
        sidebarMenu.style.transform='translateX(0)';
        controleMenu = true;
    });

    documento.addEventListener('keyup', (tecla) => {
        if(tecla.code == 'Space') {
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

   
    // Adicione sua implementação aqui...
    // Tem total liberdade de alterar o documento HTML, CSS e JS.

    // Um ótimo feedback para todos.
})();

