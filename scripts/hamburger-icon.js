console.log("Hamburger icon cargado correctamente");

(function () {
    const main_option = {
        init: function () {
            this.eventHandler();
        },
        eventHandler: function () {
            document.querySelector(".hamburger_icon").addEventListener("click", function () {
                document.querySelector(".menu_derecho").classList.toggle("menu_derecho_open");
            });
        }

    }
    main_option.init();
})();


