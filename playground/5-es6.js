const name = 'anmol';
const userAge = 24;

const user = {
    name,
    userAge
}

const product = {
    label: 'label'
}

const { label: productLabel } = product;

console.log(productLabel);