const sendAjax = (action, data, callback) => {
    const ajaxdata = {
        action: action,
        _wpnonce: wpajax.nonce
    };

    const sendObj = {
        ...ajaxdata,
        ...data
    }

    const formData = new FormData()
    for (const name in sendObj) {
        formData.append(name, sendObj[name])
    }

    jQuery.ajax({
        type: 'POST',
        url: wpajax.url,
        data: formData,
        processData: false,
        contentType: false,
        success: callback,
    });
}

/**
 * Favorite products
 */
const addToFavorite = (productId, isReload = false) => {
    event.preventDefault();

    sendAjax('add-to-favorite', {
        product_id: productId,
    }, response => {
        if (isReload) {
            return window.location.reload();
        }

        const favoriteButton = document.querySelector('#product-' + productId + ' .btn-icon-like');

        favoriteProducts = JSON.parse(response);

        if (favoriteProducts.includes(productId.toString())) {
            favoriteButton.classList.add('btn-active')
        } else {
            favoriteButton.classList.remove('btn-active')
        }

        changeFavoriteCount(favoriteProducts.length)
    })
}

function changeFavoriteCount(count) {
    document.querySelector("#favoriteCount").innerText = count;
}

const deleteToFavorite = () => {
    sendAjax('delete-to-favorite', {}, response => {
        window.location.reload();
    })
}

const deleteToBasket = () => {
    sendAjax('delete-to-basket', {}, response => {
        window.location.reload();
    })
}

/**
 * Basket
 */
const addToBasket = (productId, isReload = false, isNotBasketPage = false) => {
    sendAjax('add-to-basket', {
        product_id: productId,
    }, response => {
        if (isReload) {
            return window.location.reload();
        }

        const basketButton = document.querySelector('#product-' + productId + ' [data-basket]');

        basketProducts = JSON.parse(response);

        if (basketProducts.includes(productId.toString())) {
            if (isNotBasketPage) {
                basketButton.classList.add('btn-active')
            } else {
                basketButton.classList.add('btn-product-basket');
                basketButton.textContent = 'Товар в корзине';
            }
        } else {
            if (isNotBasketPage) {
                basketButton.classList.remove('btn-active')
            } else {
                basketButton.classList.remove('btn-product-basket')
                basketButton.textContent = 'В корзину';
            }
        }

        changeBasketCount(basketProducts.length)
    })
}

function changeBasketCount(count) {
    document.querySelector("#basketCount").innerText = count;
}


/**
 * Comparisons products
 */
const addToComparison = (productId, isReload = false) => {
    event.preventDefault();


    sendAjax('add-to-comparison', {
        product_id: productId,
    }, response => {
        if (isReload) {
            return window.location.reload();
        }

        const comparisonButton = document.querySelector('#product-' + productId + ' .btn-icon-compare');

        comparisProducts = JSON.parse(response);

        if (comparisProducts.includes(productId.toString())) {
            comparisonButton.classList.add('btn-active')
        } else {
            comparisonButton.classList.remove('btn-active')
        }
        changeComparisonCount(comparisProducts.length)
    })
}

function changeComparisonCount(count) {
    document.querySelector("#comparisonCount").innerText = count;
}


/**
 * Form dealers
 */

const sendFormDealers = () => {
    event.preventDefault();

    const formElements = {
        name: document.querySelector('#form-name'),
        city: document.querySelector('#form-city'),
        tel: document.querySelector('#form-tel'),
        email: document.querySelector('#form-email'),
        message: document.querySelector('#form-message'),
    }

    sendAjax('form-dealers', {
        name: formElements['name'].value,
        city: formElements['city'].value,
        tel: formElements['tel'].value,
        email: formElements['email'].value,
        message: formElements['message'].value,
    }, response => {
        for (const fieldName in formElements) {
            formElements[fieldName].classList.remove('has-error')
        }

        response = JSON.parse(response);
        if (response.success === false) {
            response.errors.forEach(fieldName => {
                formElements[fieldName].classList.add('has-error')
            })
        } else {
            for (const fieldName in formElements) {
                formElements[fieldName].value = ''
            }

            alert('Спасибо за заявку!')
        }
    })
}

/**
 * Form contacts
 */

const sendFormContacts = () => {
    event.preventDefault();
    const formElements = {
        name: document.querySelector('#form-name'),
        tel: document.querySelector('#form-tel'),
        email: document.querySelector('#form-email'),
        message: document.querySelector('#form-message'),
    }


    sendAjax('form-contacts', {
        name: formElements['name'].value,
        tel: formElements['tel'].value,
        email: formElements['email'].value,
        message: formElements['message'].value,
    }, response => {
        for (const fieldName in formElements) {
            formElements[fieldName].classList.remove('has-error')
        }

        response = JSON.parse(response);
        if (response.success === false) {
            response.errors.forEach(fieldName => {
                formElements[fieldName].classList.add('has-error')
            })
        } else {
            for (const fieldName in formElements) {
                formElements[fieldName].value = ''
            }
            alert('Спасибо за вопрос!')
        }
    })
}

/**
 * Form order
 */


const sendFormOrder = () => {
    event.preventDefault();

    const formElements = {
        name: document.querySelector('#form-name'),
        tel: document.querySelector('#form-tel'),
        email: document.querySelector('#form-email'),
        company: document.querySelector('#form-company'),
        message: document.querySelector('#form-message'),
        products: document.querySelector('#form-products'),
        requisites: document.querySelector('#form-requisites'),
    }
    const sendValues = {};
    const fileInput = document.getElementById('inputFile');

    for (const fieldName in formElements) {
        sendValues[fieldName] = formElements[fieldName].value;
    }

    if (fileInput.files.length) {
        sendValues.requisites = fileInput.files[0]
    }

    sendAjax('form-order', sendValues, response => {
        for (const fieldName in formElements) {
            formElements[fieldName].classList.remove('has-error');
        }
        response = JSON.parse(response);

        if (response.success === false) {
            response.errors.forEach(fieldName => {
                formElements[fieldName].classList.add('has-error')
            })
        } else {
            for (const fieldName in formElements) {
                formElements[fieldName].value = ''
            }

            alert('Спасибо за заказ!')
        }
    })

}
