const header = '<strong><i> Mi primer pagina con modulos </i></strong>';

const nav = `<ul>
            <li> <a href="index.html">inicio</a></li>
            <li> <a href="productos.html">productos</a></li>
            <li> <a href="servicios.html">servicios</a></li>
        </ul>`;

const footer = 'maximo bresciani';

document.querySelector('header').innerHTML= header;
document.querySelector('#menu').innerHTML= nav;
document.querySelector('.Pie').innerHTML= 'maximo bresciani';
