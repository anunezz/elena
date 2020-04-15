function nav(data){
    let arrayMenu = ['uno','dos','tres','cuatro'];
    for (let i = 0; i < arrayMenu.length; i++) {
        document.getElementById(arrayMenu[i]+'c').style.display = "none";
         if (data.id === arrayMenu[i]) {
             let display = "block";
             display = (data.id+'c' === 'dosc')? "flex":"block";
             document.getElementById(arrayMenu[i]+'c').style.display = display; 
         }
    }
}


var joyeria = [
    { 
     title: 'Anillo perla',
     description: 'Este anillo contiene una perla de alta calidad y muy alto costo',
     img: 'img/joyas/1.jpg'
    },
    { 
    title: 'Anillo caracol',
    description: 'Este anillo contiene es muy antiguo',
    img: 'img/joyas/2.jpg'
     },
    { 
    title: 'Anillo gema',
    description: 'Esdescripcion de anillo de gema brillante',
    img: 'img/joyas/3.jpg'
    },
    { 
    title: 'Anillo de tipo gel',
    description: 'este anillo es una | reliqui de gel raro azul',
    img: 'img/joyas/4.jpg'
    },
    { 
    title: 'Anillo orange',
    description: 'Este amiññp tiene sabor muy delicioso a naranja',
    img: 'img/joyas/5.jpg'
    },
    { 
    title: 'Anillo caracol',
    description: 'Este anillo contiene es muy antiguo',
    img: 'img/joyas/6.jpg'
    },
    { 
    title: 'Anillo zarzamora',
    description: 'De los antiguos dioses para usuarlo',
    img: 'img/joyas/8.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/9.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/10.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/11.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/12.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/13.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/14.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/15.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/16.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/17.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/18.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/19.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/20.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/21.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/22.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/23.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/24.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/25.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/26.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/27.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/28.jpg'
    },
    { 
    title: 'Green',
    description: 'Diseño de bosque',
    img: 'img/joyas/29.jpg'
    },
    
]; 

var Novedades = [
    { 
        title: 'Anillo',
        description: 'Hermoso anillo con corte corazón.'
       },
       { 
       title: 'Pulcera',
       description: 'Pulcera de plata en forma de rosas.'
        },
       { 
       title: 'Collar',
       description: 'Collar de piedra Lapiz Lazuli.'
       },
       { 
       title: 'Aretes',
       description: 'Aretes de plata 920 ley.'
       },  
];


var html = '';

for (let i = 0; i < joyeria.length; i++) {
    html+=' <div class="cajaJoya">  ';
    html+=' <a href="#openModal" onclick="joyaFunction('+i+')"><img src="'+joyeria[i].img+'"></a>  ';
    html+='</div>';
}

document.getElementById('dosc').innerHTML = html;

function joyaFunction(val){
    let title = document.getElementById("titleModal");
    let description = document.getElementById("descriptionModal");
    title.innerHTML = joyeria[val].title;
    description.innerHTML = "<p>"+joyeria[val].description+"</p>";
}

function joyaFunctionn(val){
    let title = document.getElementById("titleModal");
    let description = document.getElementById("descriptionModal");
    title.innerHTML = Novedades[val].title;
    description.innerHTML = "<p>"+Novedades[val].description+"</p>";
}

