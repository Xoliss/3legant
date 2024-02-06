let cart = {
    'tovar1': {
        "name": "1",
        "count": "2",
    },
    'tovar2': {
        "name": "1",
        "count": "2",
    }
}

document.onclick = addEventListener => {
    if (addEventListener.target.classList.contains('minus')) {
        minusFunction(addEventListener.target.dataset.id);
    }
    if (addEventListener.target.classList.contains('plus')) {
        plusFunction(addEventListener.target.dataset.id);
    }
}

const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();