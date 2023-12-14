let discount_code = 5000;

const discount_button = document.getElementById('discount-code');

const your_discount_code_element = document.getElementById('your-discount-code');

const showDiscountCode = () => {
    discount_code = discount_code + 1;
    your_discount_code_element.innerText = "Code is " + discount_code;
}

discount_button.addEventListener("click", showDiscountCode);