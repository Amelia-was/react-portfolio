export function toURL(string) {
    var re = /\s/g;
    return string.replace(re, '-').toLowerCase();
};