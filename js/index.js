// RECUPERANDO INFORMAÇÕES BASE
const itemsList = document.querySelector(".itemsList"); // Lista de Cards da Vitrine
const cartItemsList = document.querySelector(".cartItemsList"); // Lista de Cards do Carrinho
const total = document.querySelector(".total");

const cartArray = []; // Quando o usuário adicionar algo ao carrinho, virá para cá, para ser analisado e renderizado no carrinho

function totalFunc(arr) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  let quantityTotal = 0;
  let priceTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    priceTotal += arr[i].value;
    quantityTotal = arr.length;
  }

  // CRIANDO ELEMENTOS 
  const totalUL          = document.createElement("ul");
  const quantitySection  = document.createElement("li");
  const quantityTitle    = document.createElement("h4");
  const quantity         = document.createElement("h4");
  const totalSection     = document.createElement("li");
  const totalTitle       = document.createElement("h4");
  const totalValue       = document.createElement("h4");

  // Criando Carrinho caso esteja vazio
  const emptyCartDiv       = document.createElement("div");
  const emptyCartTitle     = document.createElement("h3");
  const emptyCartParagraph = document.createElement("p");

  // ADICIONANDO AS INFORMAÇÕES NECESSÁRIAS, COMO CLASSE, ID, CONTEÚDO DA TAG, ETC...
  totalUL.id = "total";
  quantitySection.classList.add("cartTotal");
  totalSection.classList.add("cartTotal");

  // Informações do carrinho vazio
  emptyCartDiv.classList.add("emptyCart");

    // Conteúdo das Tags
  quantityTitle.innerText = "Quantidade:";
  totalTitle.innerText = "Total:";
  quantity.innerText = `${quantityTotal}`;
  totalValue.innerText = `R$ ${priceTotal.toFixed(2)}`;
  
    // Conteúdo das Tags do Carrinho Vazio
  emptyCartTitle.innerText = `Carrinho Vazio`;
  emptyCartParagraph.innerText = `Adicione Itens`;


  // MONTAGEM DA SEÇÃO DO CARRINHO
  totalUL.appendChild(quantitySection);
  totalUL.appendChild(totalSection);
  quantitySection.appendChild(quantityTitle);
  quantitySection.appendChild(quantity);
  totalSection.appendChild(totalTitle);
  totalSection.appendChild(totalValue);

  // MONTAGEM DA SEÇÃO DO CARRINHO VAZIO
  emptyCartDiv.appendChild(emptyCartTitle);
  emptyCartDiv.appendChild(emptyCartParagraph);

  // RETORNO ESTRUTURA MONTADA
  if (arr.length <= 0) {
    cartItemsList.removeChild(emptyCartDiv);
    totalUL.classList.remove("total");
    totalUL.classList.add("hidden");
    cartItemsList.appendChild(emptyCartDiv);
  } else {
    total.innerHTML = ``;
    total.appendChild(totalUL);
  }
}

function loadPage(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    const card = loadCard(product);
    itemsList.appendChild(card);
  }
};

loadPage(data);

function loadCart(productsArray) {
  cartItemsList.innerHTML = "";
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    const cartCard = loadCartCard(product);
    cartItemsList.appendChild(cartCard);
  }
}

function loadCartCard(object) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  const imgSrc = object.img;
  const name = object.nameItem;
  const price = object.value;
  const buttonIdCart = object.id;

  // CRIANDO ELEMENTOS
  const li = document.createElement("li");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const cartDetails = document.createElement("div");
  const cartItemTitle = document.createElement("h4");
  const cartItemPrice = document.createElement("h4");
  const buttonRemove = document.createElement("button");

  // ADICIONANDO AS INFORMAÇÕES NECESSÁRIAS, COMO CLASSE, ID, CONTEÚDO DA TAG, ETC...
  li.classList.add("cartList");
  figure.classList.add("cartImage");
  cartDetails.classList.add("cartDetails");
  cartItemTitle.classList.add("cartItemTitle");
  cartItemPrice.classList.add("cartItemPrice");
  buttonRemove.classList.add("removeButton")
  buttonRemove.setAttribute('productId', buttonIdCart);
  buttonRemove.addEventListener("click", removeProduct);

    // Informações da Imagem
  img.src   = imgSrc;
  img.alt   = name;
  img.title = name;

    // Conteúdo das Tags
  cartItemTitle.innerText = name;
  cartItemPrice.innerText = `R$ ${price.toFixed(2)}`;
  buttonRemove.innerText = "Remover produto";

  // MONTAGEM DA SEÇÃO
  li.appendChild(figure);
  li.appendChild(cartDetails);
  figure.appendChild(img);
  cartDetails.appendChild(cartItemTitle);
  cartDetails.appendChild(cartItemPrice);
  cartDetails.appendChild(buttonRemove);

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
  const buttonIdCard = object.id;

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
  button.setAttribute('productId', buttonIdCard);
  button.addEventListener("click", addProduct);

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


const addButton = document.querySelectorAll(".addCart");
const removeButton = document.querySelectorAll(".removeButton");


function addProduct(event) {
  const id = event.target.attributes[1].value;
//console.log(event)
  for (let i = 0; i < data.length; i++) {
    const auxID = data[i].id;
    
    if (auxID == id) {
      cartArray.push(data[i]);
    }
  }
  loadCart(cartArray);
  totalFunc(cartArray);
}

function removeProduct(event) {
  const buttonId = event.target.attributes[1].value;

  for (let i = 0; i < data.length; i++) {
    let dataID = data[i].id;
    if (dataID == buttonId) {
      cartArray.splice(i, 1);
    }
  }
  loadCart(cartArray);
  totalFunc(cartArray);
}
