console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "AMA Super Bike Costa Rica (AMA SBK CR)",
  "desc": "Es uno de los campeonatos de motovelocidad más importantes del país. Reúne a pilotos nacionales e internacionales en competencias de distintas categorías y se ha convertido en una plataforma para el desarrollo del motociclismo deportivo costarricense."
},
{
  "title": "Participación internacional",
  "desc": "Los campeonatos han contado con la presencia de pilotos internacionales como Stefano Mesa, Brandon Paasch y Guillermo Casas, elevando el nivel competitivo y ofreciendo un espectáculo de gran calidad para los aficionados.",
},
{
  "title": "Temporada 2026",
  "desc": "La temporada 2026 está compuesta por ocho fechas distribuidas entre febrero y noviembre, consolidando a AMA Super Bike como uno de los principales certámenes de velocidad en Centroamérica."
},
{
  "title": "AMA Woman",
  "desc": "La categoría AMA Woman ha impulsado la participación femenina en la motovelocidad costarricense, brindando un espacio competitivo para las pilotos y promoviendo el crecimiento del deporte entre las mujeres."
}];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();