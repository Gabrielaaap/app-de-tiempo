convertUnixDateToNormal: function (fecha) {
    var UnixDate = new Date(fecha * 1000);
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var year = UnixDate.getFullYear();
    var month = months[UnixDate.getMonth()];
    var date = UnixDate.getDate();
    var hour = UnixDate.getHours();
    var min = UnixDate.getMinutes();
    var sec = UnixDate.getSeconds();
    var time = hour + ':' + min + ':' + sec + ' del ' + date + ' ' + month + ' ' + year + ' ';
    return time;
},
convertUnixDateToHour: function (fecha) {
    var UnixDate = new Date(fecha * 1000);
    var hour = UnixDate.getHours();
    var min = UnixDate.getMinutes();
    var sec = UnixDate.getSeconds();
    var time = hour + ':' + min + ':' + sec;
    return time;
}