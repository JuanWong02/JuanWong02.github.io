var app = new Vue({
  el: '#app',
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      var name = $('#input-2').val();
      //get the name field value
      var email = $('#input-1').val();
      //get the comments
      var message = $('#input-3').val();

      $.ajax({
        url: 'https://formspree.io/mqkypwnn',
        method: 'POST',
        data: {
          name: name,
          _replyto: email,
          email: email,
          message: message,
        },
        dataType: "json",
        success: function () {
          console.log('success');
          $('#formBlock').hide();
          $('#thankyouBlock').show();
          alert('Mensaje enviado');
          window.location.href = 'index.html';

        }


      });


    }
  }
})
