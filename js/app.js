var weatherApp = new Vue({
  el : '#AppClima',
  data:{
      DatosVisibles: false,
      climaData: [],
      municipio: '0',
      Ciudades: [
          {
              'nombre': "Tegucigalpa",
              'latitud': '14.0818',
              'longitud': '-87.20681'
          },
          {
              'nombre': "San Pedro Sula",
              'latitud': '15.50417',
              'longitud': '-88.025'
          },
          {
              'nombre': "Choloma",
              'latitud': 15.61444,
              'longitud': -87.95302,
          },
      
          {
              'nombre': "Puerto Cortes",
              'latitud': '15.82562',
              'longitud': '-87.92968',
          },
          {
              'nombre': "La Ceiba",
              'latitud': '15.75971',
              'longitud': '-86.78221',
          },
          {
              'nombre': "El Progreso",
              'latitud': '15.4',
              'longitud': '-87.8',
          },
          {
              'nombre': "Comayagua",
              'latitud': '14.45139',
              'longitud': '-87.6375',
          },
          {
              'nombre': "Siguatepeque",
              'latitud': '14.6',
              'longitud': '-87.83333',
          },
      
          {
              'nombre': "Tocoa",
              'latitud': '15.68333',
              'longitud': '-86',
          },
      
          {
              'nombre': "Santa Rosa",
              'latitud': '14.76667',
              'longitud': '-88.77917',
          },
          {
              'nombre': "Juticalpa",
              'latitud': '14.66667',
              'longitud': '-86.21944',
          },
      
          {
              'nombre': "San Lorenzo",
              'latitud': '13.42417',
              'longitud': '-87.44722',
          },
          {
              'nombre': "Olanchito",
              'latitud': '15.48131',
              'longitud': '-86.57415',
          },
          {
              'nombre': "Yoro",
              'latitud': '15.1375',
              'longitud': '-87.12778',
          },
          {
              'nombre': "La Paz",
              'latitud': '14.31944',
              'longitud': '-87.67917',
          },
          {
              'nombre': "Talanga",
              'latitud': '14.4',
              'longitud': '-87.08333',
          },
          {
              'nombre': "Santa Rita",
              'latitud': '15.16667',
              'longitud': '-87.28333',
          },
          {
              'nombre': "Trujillo",
              'latitud': '15.91667',
              'longitud': '-85.95417',
          },
          {
              'nombre': "San Marcos",
              'latitud': '13.43333',
              'longitud': '-86.8',
          },
          {
              'nombre': "Nueva Ocotepeque",
              'latitud': '14.43333',
              'longitud': '-89.18333',
          },
          {
              'nombre': "Coxen Hole",
              'latitud': '16.31759',
              'longitud': '-86.53793',
          }
      ],
  },
  created: function(){
      navigator.geolocation.getCurrentPosition(position => {
          var Ciudad={
              'nombre' : "Ubicacion actual",
              'latitud' : position.coords.latitude,
              'longitud': position.coords.longitude,
          };
          this.Ciudades.push(Ciudad);
          console.log(position);
      }, e => {
          alert(e.message);
      });
  },
  methods:{
      getWeatherData: function(){
          var url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+this.Ciudades[this.municipio].latitud+'&lon='+this.Ciudades[this.municipio].longitud+'&exclude=minutely,hourly,daily&units=metric&appid=328e55cd38e63f2ca8f8742353b3ee7a&lang=es';
          let config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: url,
              headers: { }
            };
            
            axios.request(config)
            .then((response) => { 
              weatherApp.climaData = response.data;
              weatherApp.DatosVisibles = true;
            })
            .catch((error) => {
              console.log(error);
            });
      },
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
  }
});