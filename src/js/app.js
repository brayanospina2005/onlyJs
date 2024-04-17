document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos
    const header = document.createElement('header');
    const headerH1 = document.createElement('h1');
    const main = document.createElement('main');
    const image = document.createElement('img');
    const contentDiv = document.createElement('div');
    const contentH1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');
    const footerLink = document.createElement('a');

    // Agregar atributos y contenido a los elementos
    headerH1.textContent = '404 not found';
    headerH1.classList.add('tracking-in-contract-bck-bottom');
    headerH1.style.fontFamily = 'Inconsolata';
    headerH1.style.fontStyle = 'normal';
    headerH1.style.fontWeight = '700';
    headerH1.style.fontSize = '24px';
    headerH1.style.lineHeight = '25px';
    headerH1.style.letterSpacing = '-0.08em';
    headerH1.style.textTransform = 'uppercase';
    headerH1.style.color = '#333333';
    headerH1.style.marginLeft = '30px';
    header.appendChild(headerH1);

    image.src = './src/img/Scarecrow.png';
    image.alt = '404';
    image.style.width = '450px';
    image.style.animationName = 'zoomInDown';
    image.style.animationDuration = '1s';
    image.style.animationFillMode = 'both';
    main.appendChild(image);

    contentH1.textContent = 'I have bad news for you';
    contentH1.classList.add('tracking-in-contract-bck-bottom');
    contentH1.style.fontFamily = 'Space Mono';
    contentH1.style.fontStyle = 'normal';
    contentH1.style.fontWeight = '700';
    contentH1.style.fontSize = '52px';
    contentH1.style.lineHeight = '95px';
    contentH1.style.letterSpacing = '-0.035em';
    contentH1.style.color = '#333333';
    contentDiv.appendChild(contentH1);

    paragraph.textContent = 'The page you are looking for might be removed or is temporarily unavailable';
    paragraph.style.fontFamily = 'Space Mono';
    paragraph.style.fontStyle = 'normal';
    paragraph.style.fontWeight = '400';
    paragraph.style.fontSize = '24px';
    paragraph.style.lineHeight = '24px';
    paragraph.style.letterSpacing = '-0.035em';
    paragraph.style.maxWidth = '380px';
    paragraph.style.color = '#4f4f4f';
    contentDiv.appendChild(paragraph);

    button.textContent = 'BACK TO HOMEPAGE';
    button.style.backgroundColor = '#333333';
    button.style.fontFamily = 'Space Mono';
    button.style.fontStyle = 'normal';
    button.style.fontWeight = '700';
    button.style.fontSize = '14px';
    button.style.lineHeight = '21px';
    button.style.letterSpacing = '-0.035em';
    button.style.textTransform = 'uppercase';
    button.style.color = '#fff';
    button.style.padding = '15px 35px';
    button.addEventListener('click', function() {
        // Cambiar esta línea por la acción que deseas realizar al hacer clic en el botón
        alert('Redirect to homepage');
    });
    contentDiv.appendChild(button);

    main.appendChild(contentDiv);

    footerLink.href = 'https://github.com/brayanospina2005';
    footerLink.textContent = 'Brayan Ospina';
    footerP.innerHTML = 'Created by ';
    footerP.appendChild(footerLink);
    footerP.innerHTML += ' . DevChallenge';
    footerP.classList.add('tracking-in-contract-bck-bottom');
    footerP.style.marginTop = '80px';
    footerP.style.fontFamily = 'Montserrat';
    footerP.style.fontStyle = 'normal';
    footerP.style.fontWeight = '500';
    footerP.style.fontSize = '14px';
    footerP.style.lineHeight = '17px';
    footerP.style.textAlign = 'center';
    footerP.style.color = '#bdbdbd';
    footer.appendChild(footerP);

    // Agregar elementos al cuerpo del documento
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // Estilos del elemento main
    main.style.margin = '80px 60px 0px 60px';
    main.style.display = 'flex';
    main.style.columnGap = '100px';

    // Estilos responsivos
    function applyResponsiveStyles() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            main.style.flexDirection = 'column';
            main.style.justifyContent = 'center';
            main.style.alignItems = 'center';
            main.style.margin = '60px 15px';
            main.style.columnGap = ''; // Eliminamos el espacio entre columnas en pantallas pequeñas

            image.style.maxWidth = '300px';
            image.style.width = 'auto';

            contentH1.style.fontSize = '36px';

            paragraph.style.fontSize = '1rem';
            paragraph.style.marginBottom = '80px';
        } else {
            main.style.flexDirection = 'row'; // Volvemos a la dirección original
            main.style.justifyContent = 'space-between'; // Alineamos los elementos a los extremos
            main.style.alignItems = 'center';
            main.style.margin = '80px 60px 0px 60px';
            main.style.columnGap = '100px'; // Añadimos el espacio entre columnas en pantallas grandes

            image.style.maxWidth = '450px'; // Volvemos al tamaño original
            image.style.width = ''; // Eliminamos el ancho explícito

            contentH1.style.fontSize = '52px'; // Volvemos al tamaño original

            paragraph.style.fontSize = '24px'; // Volvemos al tamaño original
            paragraph.style.marginBottom = ''; // Eliminamos el margen inferior
        }
    }

      // Animaciones CSS
      const zoomInDownAnimation = `
      @keyframes zoomInDown {
          0% {
              opacity: 0;
              transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
          }
          60% {
              opacity: 1;
              transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
          }
      }
  `;

  const trackingInContractBckBottomAnimation = `
      @keyframes trackingInContractBckBottom {
          0% {
              letter-spacing: 1em;
              transform: translateZ(400px) translateY(300px);
              opacity: 0;
          }
          40% {
              opacity: 0.6;
          }
          100% {
              transform: translateZ(0) translateY(0);
              opacity: 1;
          }
      }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomInDownAnimation, styleSheet.cssRules.length);
  styleSheet.insertRule(trackingInContractBckBottomAnimation, styleSheet.cssRules.length);


    applyResponsiveStyles();

    
    window.addEventListener('resize', applyResponsiveStyles);
});
