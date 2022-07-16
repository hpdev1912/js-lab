//tinh chu vi hinh chu nhat
function calculateAreaRectangle(d, r) {
    if (d < r || d <= 0 || r <= 0) return -1;
    return (d + r) * 2;
}
//tinh dien tich hinh chu nhat
function calculatePerimeterRectangle(d, r) {
    if (d < r || d <= 0 || r <= 0) return -1;
    return d * r;
}
//tinh chu vi hinh tron
function calculateAreaCircle(a) {
    if (a < 0 || d <= 0 || r <= 0) return -1;
    return Math.PI * a * a;
}
