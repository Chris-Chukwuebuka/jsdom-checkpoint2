// document.getElementById('colorChangeButton').addEventListener('click', function() {
//     var div = document.getElementById('colorChangeDiv');
//     var colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark'];
//     var currentColor = div.className.split(' ').filter(c => colors.includes(c))[0];
//     var index = (colors.indexOf(currentColor) + 1) % colors.length;
//     div.classList.remove(currentColor);
//     div.classList.add(colors[index]);
// });
var btnForChange = document.getElementById('colorChangeButton');
btnForChange.addEventListener('click', function() {
    var div = document.getElementById('colorChangeDiv');
    var colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark'];
    var currentColor = div.className.split(' ').filter(c => colors.includes(c))[0];
    var index = (colors.indexOf(currentColor) + 1) % colors.length;
    div.classList.remove(currentColor);
    div.classList.add(colors[index]);
});