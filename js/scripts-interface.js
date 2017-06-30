var DoctorsModule = require('./../js/scripts.js').doctorsModule;


var displayDoctors = function(doctors, error) {
  for (x = 0; x < doctors.data.length; x++) {
    var curDoctor = doctors.data[x];
    $('.show-doctors').show().append('<div class="panel"><h3>Name: ' +
      curDoctor.profile.first_name + ' ' + curDoctor.profile.last_name +
      '</h3><h5>Gender: ' +
        curDoctor.profile.gender +

        '<p>Bio:  ' +
      curDoctor.profile.bio);

  }

  if(error) { /*do something*/ }
};


$(document).ready(function() {
  var doctorModule = new DoctorsModule();
  $('#doctor-finder').click(function() {
    var symptom = $('#symptom').val();
    doctorModule.getDoctors(symptom, displayDoctors);
    // empty the current list of doctors
    $('.show-doctors').empty();
  });
});
