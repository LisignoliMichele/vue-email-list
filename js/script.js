var app = new Vue(
   {
      el: "#app",
      data:{
         emailList: [],
      },
      methods:{
         generateEmails: function(){
            var self = this;
               for (var i = 0; i < 10; i++){
                  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                  .then(function (item) {
                     self.emailList.push(item.data)
                     console.log()
                  });
               }
             }
         }
      }
);

