// RECUPERANDO INFORMAÇÕES BASE
const itemsList = document.querySelector(".itemsList"); // Lista de Cards da Vitrine
const cartItemsList = document.querySelector(".cartItemsList"); // Lista de Cards do Carrinho

function loadPage(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    const card = loadCard(product);
    itemsList.appendChild(card);
  }
}


function loadCart(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];

    const cartCard = loadCartCard(product);

    cartItemsList.appendChild(cartCard);
  }
}

loadCart(data);

loadPage(data);

function loadCartCard(object) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  const imgSrc = object.img;
  const name = object.nameItem;
  const description = object.description;
  const price = object.value;
  const category = object.tag;

  // CRIANDO ELEMENTOS
  const li = document.createElement("li");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const cartDetails = document.createElement("div");
  const cartItemTitle = document.createElement("h4");
  const cartItemPrice = document.createElement("h4");
  const p = document.createElement("p");

  // ADICIONANDO AS INFORMAÇÕES NECESSÁRIAS, COMO CLASSE, ID, CONTEÚDO DA TAG, ETC...
  li.classList.add("cartList");
  figure.classList.add("cartImage");
  cartDetails.classList.add("cartDetails");
  cartItemTitle.classList.add("cartItemTitle");
  cartItemPrice.classList.add("cartItemPrice");
  p.classList.add("itemDescription");

    // Informações da Imagem
  img.src   = imgSrc;
  img.alt   = name;
  img.title = name;

    // Conteúdo das Tags
  cartItemTitle.innerText = name;
  cartItemPrice.innerText = `R$ ${price.toFixed(2)}`;
  p.innerText = "Remover produto";

  // MONTAGEM DA SEÇÃO
  li.appendChild(figure);
  li.appendChild(cartDetails);
  figure.appendChild(img);
  cartDetails.appendChild(cartItemTitle);
  cartDetails.appendChild(cartItemPrice);
  cartDetails.appendChild(p);

  // RETORNO ESTRUTURA MONTADA
  return li;
}

function loadCard(object) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  const imgSrc      = object.img;
  const name        = object.nameItem;
  const description = object.description;
  const price       = object.value;
  const category    = object.tag;

  // CRIANDO ELEMENTOS
  const li = document.createElement("li");
  const figure  = document.createElement("figure");
  const img     = document.createElement("img");
  const details = document.createElement("div");
  const small   = document.createElement("small");
  const h3      = document.createElement("h3");
  const p       = document.createElement("p");
  const h4      = document.createElement("h4");
  const button  = document.createElement("button");

  // ADICIONANDO AS INFORMAÇÕES NECESSÁRIAS, COMO CLASSE, ID, CONTEÚDO DA TAG, ETC...
  li.classList.add("card");
  figure.classList.add("img");
  details.classList.add("details");
  small.classList.add("itemCategory");
  h3.classList.add("itemTitle");
  p.classList.add("itemDescription");
  h4.classList.add("itemPrice");
  button.classList.add("addCart");

    // Informações da Imagem
  img.src   = imgSrc;
  img.alt   = name;
  img.title = name;

    // Conteúdo das Tags
  small.innerText   = category;
  h3.innerText      = name;
  p.innerText       = description;
  h4.innerText      = `R$ ${price.toFixed(2)}`;
  button.innerText  = "Adicionar ao carrinho";

  // MONTAGEM DA SEÇÃO
  li.appendChild(figure);
  figure.appendChild(img);
  li.appendChild(details);
  details.appendChild(small);
  details.appendChild(h3);
  details.appendChild(p);
  details.appendChild(h4);
  details.appendChild(button);

  // RETORNO ESTRUTURA MONTADA
  return li;
}