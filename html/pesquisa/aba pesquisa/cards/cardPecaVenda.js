// cards/cardPecaVenda.js

export function criarCardPecaVenda({ id, imagem, preco, titulo, descricao, ownerUid }) {
    const card = document.createElement("a");
    card.classList.add("product-card");
    card.href = `../aba produto/produto.html?idPeca=${id}&idUsuario=${ownerUid}`;

    // remover estilização padrão de link
    card.style.textDecoration = "none";
    card.style.color = "inherit";
    card.style.cursor = "pointer";

    card.innerHTML = `
        <div class="product-image-container">
            <i class="bi bi-heart bookmark-icon"></i>
            <img 
                src="${imagem}" 
                alt="${titulo}"
                class="product-image"
                loading="lazy"
            >
        </div>

        <div class="product-details">
            <p class="product-price">R$ ${preco}</p>
            <h4 class="product-title">${titulo}</h4>
            <p class="product-description-snippet" style="font-size: 12px; color: gray;">${descricao}</p>
        </div>
    `;

    return card;
}
