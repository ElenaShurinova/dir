const submit = e => {
    e.preventDefault();

    const { image, title, price } = e.target;

    const newProduct = {
        id: Date.now(),
        thumbnail: image.value,
        title: title.value,
        price: +price.value
    }

    console.log(newProduct);

    e.target.reset()
}