export function calcCartTotal(productList) {
    if (!Array.isArray(productList) || productList.length === 0) return 0;

    return productList.reduce((sum, product) => {
        const {
            product: { price },
        } = product;

        return (sum += price * product.quantity);
    }, 0);
}
