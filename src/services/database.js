import tostadasNikkei from '../assets/menuRestaurante/TostadasNikkei.jpeg';
import RollitosHeisei from '../assets/menuRestaurante/RollitosHeisei.jpg';
import TatakiDeAtun from '../assets/menuRestaurante/TatakiDeAtun.jpg';
import TornadosDeSalmon from '../assets/menuRestaurante/TornadosDeSalmon.jpg';
import TartarMixto from '../assets/menuRestaurante/TartarMixto.jpg';
import WontonesDeSalmon from '../assets/menuRestaurante/WontonesDeSalmon.jpg';
import PorkBao from '../assets/menuRestaurante/PorkBao.jpg';

import LomoSaborYAlma from '../assets/menuRestaurante/LomoSaborYAlma.jpg';
import LomoSelvaEnRissotoDeAjíAmarillo from '../assets/menuRestaurante/LomoSelvaEnRissotoDeAjíAmarillo.jpg';
import PolloTrufado from '../assets/menuRestaurante/PolloTrufado.jpg';
import SalmonCremoso from '../assets/menuRestaurante/SalmonCremoso.jpg';
import ArrozPeruano from '../assets/menuRestaurante/ArrozPeruano.jpeg';
import PescadoTupac from '../assets/menuRestaurante/PescadoTupac.jpg';
import TallarinesAlEstiloOriental from '../assets/menuRestaurante/TallarinesAlEstiloOriental.jpg';
import StriploinCertifiedAngusBeef from '../assets/menuRestaurante/StriploinCertifiedAngusBeef.jpg';
import PicanhaCertifiedAngus from '../assets/menuRestaurante/PicanhaCertifiedAngus.jpg';
import PulpoSaborYAlma from '../assets/menuRestaurante/PulpoSaborYAlma.jpg';

import CrumbleDeCaramelo from '../assets/menuRestaurante/CrumbleDeCaramelo.jpg';
import VolcanDeArequipe from '../assets/menuRestaurante/VolcanDeArequipe.jpg';
import VolcanDeChocolate from '../assets/menuRestaurante/PulpoSaborYAlma.jpg';
import TorreDeCaramelo from '../assets/menuRestaurante/TorreDeCaramelo.jpg';
import CheescakeFrutosRojos from '../assets/menuRestaurante/CheescakeFrutosRojos.jpg';

export const usuarios = [
    {
        id:1,
        nombre:"Emanuel",
        apellido:"Rojas",
        correo:"emanuel@gmail.com",
        contraseña:"emanuel",
    },
    {
        id:2,
        nombre:"Jeanpierry",
        apellido:"Moreno",
        correo:"jeanpier@gmail.com",
        contraseña:"jean",
    },
]

export const entradas = [
    {
        imagen: tostadasNikkei,
        nombre: 'Tostadas Nikkei',
        descripcion: 'Tostadas de gyozas crocantes, atún y salmón en salsa nikkei, aroma de gari, puerro crocante caramelizado.',
        precio: 35000,
        ingredientesQuitar: ['Atún', 'Salmón', 'Puerro crocante caramelizado'],
        ingredientesAñadir: [{ ingrediente: 'Pollo crocante', precio: 8000 }]
    },
    {
        imagen: RollitosHeisei,
        nombre: 'Rollitos Heisei',
        descripcion: 'Envueltos de salmón, queso philadelphia, hilos de mango, palmitos de cangrejo, salsa heisei, queso parmesano flameado.',
        precio: 34000,
        ingredientesQuitar: ['Queso Philadelphia', 'Hilos de Mango', 'Palmito de cangrejo', 'Queso parmesano flameado'],
        ingredientesAñadir: [{ ingrediente: 'Camarones', precio: 12000 }]
    },
    {
        imagen: TatakiDeAtun,
        nombre: 'Tataki de Atún Trufado',
        descripcion: 'Finos cortes de atún encostrados en pimienta y sellado en parrilla bañado en salsa cremosa nikkei y aceite de trufa coronado con puerro caramelizado y gyoza crocante.',
        precio: 39000,
        ingredientesQuitar: ['Salsa cremosa nikkei', 'Aceite de trufa', 'Puerro caramelizado', 'Gyoza crocante'],
        ingredientesAñadir: [
            { ingrediente: 'Tofu marinado', precio: 6000 },
            { ingrediente: 'Salmón ahumado', precio: 12000 }
        ]
    },
    {
        imagen: TornadosDeSalmon,
        nombre: 'Tornados de Salmón',
        descripcion: 'Rollos de salmón rellenos de aguacate y queso philadelphia, bañados en salsa de anguila y coronados con palmitos de cangrejo.',
        precio: 39000,
        ingredientesQuitar: ['Aguacate', 'Queso Philadelphia', 'Palmito de cangrejo'],
        ingredientesAñadir: [
            { ingrediente: 'Atún marinado', precio: 10000 },
            { ingrediente: 'Queso ricotta', precio: 4500 }
        ]
    },
    {
        imagen: TartarMixto,
        nombre: 'Tartar Mixto',
        descripcion: 'Atún y salmón en aderezo nikkei mezclados con aguacate y shoyu.',
        precio: 32000,
        ingredientesQuitar: ['Atún', 'Salmón', 'Aguacate', 'Shoyu'],
        ingredientesAñadir: [
            { ingrediente: 'Pulpo a la parrilla', precio: 14000 },
            { ingrediente: 'Tofu marinado', precio: 6000 }
        ]
    },
    {
        imagen: WontonesDeSalmon,
        nombre: 'Wontones de Salmón',
        descripcion: 'Wontones de salmón acompañados de salsa cítrica de ají amarillo y salsa rocoto.',
        precio: 22000,
        ingredientesQuitar: ['Salsa cítrica de ají amarillo', 'Salsa rocoto'],
        ingredientesAñadir: [
            { ingrediente: 'Salsa de tamarindo', precio: 3000 },
            { ingrediente: 'Salsa de soya con miel', precio: 2500 },
            { ingrediente: 'Salsa teriyaki', precio: 2000 }
        ]
    },
    {
        imagen: PorkBao,
        nombre: 'Pork Bao',
        descripcion: 'Pan asiático al vapor, pork belly caramelizado en cocción lenta, chucrut y manzana verde.',
        precio: 30000,
        ingredientesQuitar: ['Chucrut', 'Manzana verde'],
        ingredientesAñadir: [
            { ingrediente: 'Salsa hoisin', precio: 3000 },
            { ingrediente: 'Cebolla morada encurtida', precio: 2800 },
            { ingrediente: 'Pepino encurtido', precio: 2000 },
            { ingrediente: 'Rábano encurtido', precio: 2500 }
        ]
    }
];

// Array de los platos fuertes
export const platosFuertes = [
    {
        imagen: LomoSaborYAlma,
        nombre: 'Lomo Sabor Y Alma',
        descripcion: 'Lomo a término en parrilla bañado en salsa madeira, sobre un arroz cremoso a base de setas y queso azul, coronado con parmesano.',
        precio: 55000,
        ingredientesQuitar: ['Parmessano', 'Setas', 'Queso azul'],
        ingredientesAñadir: [
            { ingrediente: 'Espárragos salteados', precio: 6000 },
            { ingrediente: 'Rúcula fresca', precio: 3000 }
        ]
    },
    {
        imagen: LomoSelvaEnRissotoDeAjíAmarillo,
        nombre: 'Lomo Selva en Risotto de Ají Amarillo',
        descripcion: 'Lomito jugoso en cama de risotto al ají amarillo diseñado con salsa de fresa y hierbabuena.',
        precio: 53000,
        ingredientesQuitar: ['Salsa de fresa', 'Hierbabuena'],
        ingredientesAñadir: [
            { ingrediente: 'Salsa de tamarindo', precio: 3000 },
            { ingrediente: 'Tomates confitados', precio: 3500 },
            { ingrediente: 'Albahaca fresca', precio: 2500 }
        ]
    },
    {
        imagen: PolloTrufado,
        nombre: 'Pollo Trufado',
        descripcion: 'Julianas de pollo trufadas a la parrilla sobre una cama de pasta tipo Alfredo, coronadas con brotes.',
        precio: 37000,
        ingredientesQuitar: [],
        ingredientesAñadir: [
            { ingrediente: 'Queso parmessano', precio: 0 },
            { ingrediente: 'Hongos portobello', precio: 4500 },
            { ingrediente: 'Alcachofas asadas', precio: 5000 },
            { ingrediente: 'Tomates Cherry confitados', precio: 3500 }
        ]
    },
    {
        imagen: SalmonCremoso,
        nombre: 'Salmón Cremoso',
        descripcion: 'Filete de Salmón fresco a la parrilla, bañado en salsa cremosa blanca, pasta al pesto y crema de leche, coronado con quinua crocante.',
        precio: 55000,
        ingredientesQuitar: ['Quinua'],
        ingredientesAñadir: [
            { ingrediente: 'Pistachos triturado', precio: 2500 },
            { ingrediente: 'Panko dorado', precio: 2000 }
        ]
    },
    {
        imagen: ArrozPeruano,
        nombre: 'Arroz Peruano de Mariscos',
        descripcion: 'Arroz en diversidad de mariscos a base de ají amarillo y especias peruanas.',
        precio: 60000,
        ingredientesQuitar: ['Mejillones', 'Camarones'],
        ingredientesAñadir: [
            { ingrediente: 'Pulpo', precio: 14000 },
            { ingrediente: 'Langostinos', precio: 9000 },
            { ingrediente: 'Cangrejo', precio: 11000 },
            { ingrediente: 'Almejas', precio: 8000 }
        ]
    },
    {
        imagen: PescadoTupac,
        nombre: 'Pescado Tupac',
        descripcion: 'Pescado blanco crocante con camarones bañados en salsa al leño a base de licor, champiñón y panceta, acompañados de papa rústica en cascos.',
        precio: 46000,
        ingredientesQuitar: ['Camarones', 'Champiñón', 'Panceta', 'Papas rusticas'],
        ingredientesAñadir: [
            { ingrediente: 'Alcachofas asadas', precio: 5000 },
            { ingrediente: 'Pulpo a la parrilla', precio: 14000 }
        ]
    },
    {
        imagen: TallarinesAlEstiloOriental,
        nombre: 'Tallarines al Estilo Oriental',
        descripcion: 'Tallarines envueltos con pulpo, calamar y camarones acompañados de pimentón, cebolla y ajonjolí bañados en salsa de anguila.',
        precio: 44000,
        ingredientesQuitar: ['Pulpo', 'Calamar', 'Camarones', 'Pimentón', 'Cebolla'],
        ingredientesAñadir: [
            { ingrediente: 'Tofu marinado', precio: 6000 },
            { ingrediente: 'Pollo teriyaki', precio: 6500 },
            { ingrediente: 'Carne de res salteada', precio: 8000 }
        ]
    },
    {
        imagen: StriploinCertifiedAngusBeef,
        nombre: 'Striploin Certified Angus Beef',
        descripcion: 'Certified Angus Beef. Acompañantes papas rústicas o a la francesa.',
        precio: 90000,
        ingredientesQuitar: [],
        ingredientesAñadir: [
            { ingrediente: 'Chimichurri', precio: 0 },
            { ingrediente: 'Salsa de tomate', precio: 0 },
            { ingrediente: 'Espárragos salteados', precio: 6000 },
            { ingrediente: 'Tomates asados', precio: 5000 }
        ]
    },
    {
        imagen: PicanhaCertifiedAngus,
        nombre: 'Picanha Certified Angus Beef',
        descripcion: 'Certified Angus Beef. Acompañantes papas rústicas o a la francesa.',
        precio: 93000,
        ingredientesQuitar: [],
        ingredientesAñadir: [
            { ingrediente: 'Chimichurri', precio: 0 },
            { ingrediente: 'Salsa de tomate', precio: 0 },
            { ingrediente: 'Espárragos salteados', precio: 6000 },
            { ingrediente: 'Tomates asados', precio: 5000 }
        ]
    },
    {
        imagen: PulpoSaborYAlma,
        nombre: 'Pulpo Sabor Y Alma',
        descripcion: 'Pulpo al horno en cocción lenta, encostrado de yuca con parmesano flameado y chimichurri nikkei.',
        precio: 60000,
        ingredientesQuitar: ['Parmessano'],
        ingredientesAñadir: [
            { ingrediente: 'Panko dorado', precio: 2000 },
            { ingrediente: 'Tocino crujiente', precio: 3500 }
        ]
    }
];

// Array de los postres
export const postres = [
    {
        imagen: CrumbleDeCaramelo,
        nombre: 'Crumble de Caramelo',
        descripcion: 'Trozos de galleta rellena de caramelo horneada y bañada con caramelo caliente, acompañada de fresas y helado de vainilla.',
        precio: 17000
    },
    {
        imagen: VolcanDeArequipe,
        nombre: 'Volcán de Arequipe',
        descripcion: 'Suave masa de galleta rellena de arequipe caliente, acompañado de helado de vainilla.',
        precio: 15500
    },
    {
        imagen: VolcanDeChocolate,
        nombre: 'Volcán de Chocolate',
        descripcion: 'Torta de chocolate rellena de chocolate caliente, acompañado de helado de vainilla.',
        precio: 15500
    },
    {
        imagen: TorreDeCaramelo,
        nombre: 'Torre de Caramelo',
        descripcion: 'Torre de galletas crocantes, helado artesanal de vainilla y caramelo salado, salsa de caramelo y nuez pecana garrapiñada.',
        precio: 17500
    },
    {
        imagen: CheescakeFrutosRojos,
        nombre: 'Cheesecake Frutos Rojos',
        descripcion: 'Crema de cheesecake con base de galleta bañada en salsa de frutos rojos.',
        precio: 13000
    }
];