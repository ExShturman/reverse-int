module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    let x = n.toString();
    let y = x.split("").reverse("").join("");
    return y;
}
