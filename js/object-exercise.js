let Products = [
    {
        name: 'PS5',
        description: 'La consola más potente de Sony al día de la fecha',
        price: 290000,
        stock: true,
        image: 'https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg',
        games: {viewValue:"God of War Origin", value:"gow_origin"}
    },
    {
        name: 'PS4',
        description: 'La consola anterior de Sony',
        price: 140000,
        stock: true,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg'
    },
    {
        name: 'PS3',
        description: 'La consola anterior de Sony',
        price: 70000,
        stock: false,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
        joystick: true,
        games: {viewValue:'Uncharted 3', value:"uncharted_3"}
    },

    {
        name: 'PS2',
        description: 'La consola anterior de Sony',
        price: 30000,
        stock: false,
    },
    {
        name: 'XBOX Series X',
        description: 'La consola más potente de Microsoft al día de la fecha',
        price: 279000,
        stock: true,
        image: 'https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg',
        games: {viewValue:'Halo Infinite', value:"halo_infinite"},
        joystick: true,

    },
    {
        name: 'XBOX One',
        description: 'La consola anterior de Microsoft',
        price: 115000,
        stock: false,
        image: 'https://i.blogs.es/a7dc9c/fc7174d71089999f6a7e15c1d16/1366_2000.png'
    },
    {
        name: 'XBOX 360',
        description: 'La consola de Microsoft que compite con la PS3',
        price: 60000,
        stock: true,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686099-MLA32731207921_112019-O.webp',
    },
];

// const editButtons = document.querySelectorAll(".btn-edit");

// productForm.addEventListener("click", ()=> {
// console.log(" se hizo click en el formulario") })

const productForm=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");


//1- Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.querySelector('#table-body');

let editIndex;


//2- Definir una función para iterar el array
function renderizarTabla() {
    tableBody.innerHTML = '';
    //3- Iterar el array para acceder a cada producto
    Products.forEach((producto, index) => {
        // let imageSrc = '/assets/images/no-product.png';

        // if(producto.image) {
        //     imageSrc = producto.image;
        // }

        let imageSrc = producto.image ? producto.image : '/assets/images/no-product.png';
        //4- Introducir dentro del tbody una fila por producto con sus respectivas celdas
        const tableRow = `<tr class="product">
                            <td class="product__img-cell"><img class="product__img" src="${imageSrc}" alt="${producto.name}"></td>
                            <td class="product__name" onclick="editName(${index}")>${producto.name}</td>
                            <td class="product__desc">${producto.description}</td>
                            <td class="product__price">$ ${producto.price}</td>
                            <td class="product__info">
                                <span 
                                    class="
                                            product__info-icon 
                                            ${ producto.stock ? '' : 'disabled' }
                                    "
                                > 
                                  📦
                                </span>
                                <span class="product__info-icon  ${ producto.joystick ? '' : 'disabled' }">
                                    🎮
                                </span>
                            </td>
                            <td class="product__actions">
                                <button class="product__action-btn" onclick="deleteProduct(${index})">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                           
                                <button class="product__action-btn btn-edit"  onclick="editProduct(${index})">
                                    <i class="fa-solid fa-pencil"></i>
                                </button>
                                <button class="product__action-btn btn-favorite" onclick="">
                                    <i class="fa-regular fa-star"></i>
                                </button>
                            
                            </td>
                        </tr>`
        tableBody.innerHTML += tableRow;

    });

}

renderizarTabla();

function addProduct(evt) {
    evt.preventDefault();
    console.dir(evt.target);
    const elements = evt.target.elements;

    // console.log(elements.stock.checked)
    // console.dir(elements.name);
    // console.dir(elements.price);
    
    const newProduct = {
        name: elements.name.value,
        description: elements.description.value,
        price: elements.price.valueAsNumber,
        image: elements.image.value,
        stock: elements.stock.checked,
        joystick: elements.joystick.checked,
        games: elements.games.value
    };


    // const newFormData = new FormData(evt.target);
    // const newProductFormData = Object.fromEntries(newFormData);
    // newProductFormData.stock = newProductFormData.stock === "on" ? true : false;
    // newProductFormData.joystick = newProductFormData.joystick === "on" ? true : false;
    // newProductFormData.price = +newProductFormData.price



    if (editIndex >= 0) { //el indice 0 sino lo toma falso, el 0 es undifaned (falso)
        Products[editIndex]=newProduct
    } else {
        Products.push(newProduct);
    }

    editIndex=undefined; // para que se vacie
    submitBtn.classList.remove("edit-btn");
    submitBtn.innerText = "Cargar Prodcuto"
 
    renderizarTabla();

    evt.target.reset()
    elements.name.focus();
}



function deleteProduct(indice) {

    Products.splice(indice, 1);

    renderizarTabla();

}



function editProduct(idx){
    submitBtn.classList.add("edit-btn");
    submitBtn.innerText = "Modificar Prodcuto"

    let product = Products[idx];


    // console.table(product);
    const el=productForm.elements;
    el.description.value = product.description;
    el.name.value=product.name;
    el.price.value=product.price;
    el.image.value=product.image;
    el.stock.checked=product.stock;
    el.joystick.checked=product.joystick;
    // console.log("indice", idx)
    // console.log("product:", product)
    editIndex=idx;
}

function setFavoriteProduct(index)
{
    //Checkear si en el array productos hay algun producto cuyo indice sea distinto al elegido con la propiedad favorite: true tenemos que setearla en falso.
    // Setear el producto elegido como favorite: true

}










// product
//     name
//     description
//     price
//     imagen
//     stock?
//     joystick?
//     games?