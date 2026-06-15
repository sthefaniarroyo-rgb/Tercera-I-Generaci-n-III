console.log('Cards cargado correctamente...');
const dataCards = [{
  "title": "Fechas de campeonatos en Parque Viva",
  "url_image": "https://puromotor.com/wp-content/uploads/2023/05/860A3434.jpg",
  "desc": "El Parque Viva se ha convertido en el escenario de emocionantes campeonatos de motociclismo, donde los mejores pilotos compiten por la gloria. Mantente atento a las fechas de los próximos eventos para no perderte la acción en vivo.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
},
//https://scontent.fsyq8-1.fna.fbcdn.net/v/t39.30808-6/658288780_1387455993420618_5939143550250999207_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=7Sw0SP39ExAQ7kNvwE6htJG&_nc_oc=AdohFhFcLy0bteehlZO1PiQdlA8i2rT3OSsq6zxs38G5dv3uiqrITY4ZE-EK2xf8MFY&_nc_zt=23&_nc_ht=scontent.fsyq8-1.fna&_nc_gid=F5GAS1Hq7lUcU5zh6SJVuw&_nc_ss=7b2a8&oh=00_Af9sJQA_xZk1Lm5emipxmQIWd049qmqyYgL6zsVHrnxy7A&oe=6A2F620F
{
  "title": "Fechas de campeonatos en P1 SPEEDWAY",
  "url_image": "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2026/02/AMA-1024x683.jpeg",
  "desc": "En P1 Speedway, la velocidad y la emoción se combinan en una experiencia única de carreras. Consulta las fechas de los próximos campeonatos para vivir la adrenalina de las carreras de motovelocidad en su máxima expresión.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
},
//
//https://scontent.fsyq8-1.fna.fbcdn.net/v/t39.30808-6/710203329_1441291574703726_2084426819707107969_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=YULHQ3Gr0iUQ7kNvwHYtSgg&_nc_oc=AdqwVTYazFrCAkIs1D6EU9BnGSB3euBS61C2yjkTajn1FaeNb2pjxHsVXfgghCEW21w&_nc_zt=23&_nc_ht=scontent.fsyq8-1.fna&_nc_gid=J24CUYuvWEBCQumhPM7Rgw&_nc_ss=7b2a8&oh=00_Af-S4jPl-M1SfxnqYP657AYbYzZ3HppovldkteNOveNSjQ&oe=6A2F6058
{
  "title": "Track Day en Parque Viva",
  "url_image": "https://www.motorevistacr.com/wp-content/uploads/2023/05/AMA-Superbike-4-1024x683.jpg",
  "desc": "Los track days en Parque Viva ofrecen a los entusiastas de la velocidad la oportunidad de experimentar la emoción de conducir en un circuito profesional. Consulta las fechas de los próximos track days para vivir la experiencia de la pista y mejorar tus habilidades de conducción.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
},
//https://www.motorevistacr.com/wp-content/uploads/2023/05/AMA-Superbike-4-1024x683.jpg
//https://scontent.fsyq8-1.fna.fbcdn.net/v/t39.30808-6/701612094_1426161999550017_3654538813528641714_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=QoDNvconMQMQ7kNvwHrzu2E&_nc_oc=AdquQaVg2gFjFRTZYl6oHY_c3T-x7jh1sNF-NIV7NNsDFzQMrr_i7fltkPhRtSMvGwk&_nc_zt=23&_nc_ht=scontent.fsyq8-1.fna&_nc_gid=hEWX65mc88foyiNgqbRwgA&_nc_ss=7b2a8&oh=00_Af-bL4gCevBYJIidljtW1H9cIm3erV_gNpr-s_qV-_KuLA&oe=6A2F6466
{
  "title": "Track day en P1 Speedway",
  "url_image": "https://www.miprensacr.com/wp-content/uploads/2024/10/IMG_7058-1024x682.jpeg",
  "desc": "Los track days de P1 Speedway ofrece a todos los pilotos la oportunidad de experimentar la emoción de conducir en un circuito profesional el cual exige mucha técnica y habilidad ayudando a desarrollar sus capacidades. Consulta las fechas de los próximos track days para vivir la experiencia de la pista y mejorar tus habilidades de conducción.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
},

//https://scontent.fsyq8-1.fna.fbcdn.net/v/t39.30808-6/680431178_1410290527803831_2780439098681161866_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VCmQ9UlKTWEQ7kNvwHpNQeF&_nc_oc=AdqKP3uE8uqIYDOXdFWAmBTYxFoq2P2VEVBsBA8f8m7HY5L1RJTHTk2V47ywtB9IKOg&_nc_zt=23&_nc_ht=scontent.fsyq8-1.fna&_nc_gid=vrpv5nSqSG98BAoQB71VIg&_nc_ss=7b2a8&oh=00_Af8Aq8Y-0H9lkk_unDsRz9fLaS3nUN-hEwH8jQJXHomoZg&oe=6A2F6923
{
  "title": "Pilotos internacionales en Parque Viva",
  "url_image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2rtxUjfmfCUa-JhwygdD09o5ASALseMKrQ7LzWv_hYNY9zd9AgRpsZ92Ts4vCgebaRZ1ct_z-wTDXuazinmZNB-lj8A5vgn3PKvFa6MBpwZCN4qv0wF1xESbYzRl3JmjiSok9JjvUR3_3kjHavr2kO0tzeA9kOXfRxk1iku2ha36aRhwlHbgvmUFbPfE3/s2048/RBC_1587.jpg",
  "desc": "La visita de pilotos internacionales como Stefano Mesa 37 y Robertino Pietri 311 en Parque Viva han sido un evento emocionante para los fanáticos del motociclismo. Estos talentosos pilotos han demostrado su habilidad y pasión por las carreras, brindando a los espectadores una experiencia inolvidable. Mantente atento a futuras visitas de pilotos internacionales para disfrutar de la emoción de las carreras en Parque Viva.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
},

//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh54ovFQoit0EZf1J_zIW-OVzREYDzjIwVZb5ByXPH39n7L0dXY3lJFn-ATONX4T8wTriUyJi-91mFnhucGlzJHcp9FPbQubj7y6Eu_wcbDMGx_mEBsb76BsvSaOBtBDE55nw_Z21BM0U6_t-jNdmUpJn0aBjg6puwlQ5ynMin8-2daUo8-QXwiAm9BLsTs/s2048/RBC_8895.jpg
{
  "title": "Ama Woman",
  "url_image": "https://crmotos.com/wp-content/uploads/2024/11/AMA-SuperBike-2024-52.jpg",
  "desc": "La categoría AMA Woman de AMA SuperBike Costa Rica está destinada a pilotos femeninas y forma parte del campeonato nacional de motovelocidad.",
  "cta": "Ver más",
  "link": "https://www.facebook.com/amasbkcr/"
}];
//
//https://scontent.fsyq8-1.fna.fbcdn.net/v/t39.30808-6/711686452_1441275794705304_6549452977470143247_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=4O4C7ltD3zYQ7kNvwE_xuzi&_nc_oc=AdpaSNVBkVs59g7trhWUgO_58W8Mvj-Q86Gr1H9zIBo8U7an4rj2J34KpiYP7NZUvRs&_nc_zt=23&_nc_ht=scontent.fsyq8-1.fna&_nc_gid=Pg6X_khmPtol_IZ8-WhVLA&_nc_ss=7b2a8&oh=00_Af8pL1Y4ljhRwYP_TA4Q_jRA9rOfFC6KMlesoDChCRRCfA&oe=6A2F6095
(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class= "boton-cta">
                <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();