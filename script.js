var app = new Vue({
  el: '#app',
  data: {
    number: '',
    max: '',
    current: {},
    addedName: '',
    addedComment: '',
    comments: {},
 },
  created: function() {
    this.splash();
  },
  methods: {

    splash: function() {
      this.current = "images/splash1.jpg";
      this.number = 1;
      // return console.log("hello!!")
      return this.current;

    },

    firstOpt: function() {
      this.current = "images/splash1.jpg";
      this.number = 1;
      // return this.current;
    },

    secondOpt: function() {
      this.current = "images/splash2.jpg";
      this.number = 2;
      // return this.current;
    },

    thirdOpt: function() {
      this.current = "images/splash3.jpg";
      this.number = 3;
      // return this.current;
    },

    previousComic: function() {
      this.number = this.current.num - 1;
    },

    addComment: function() {
       if (!(this.number in this.comments))
              Vue.set(app.comments, this.number, new Array);
       var date = new Date();
       var dateString = date.toLocaleString();
       this.commentTime = dateString;
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:this.commentTime});
       this.addedName = '';
       this.addedComment = '';
       this.commentTime = '';
    },
   },
    computed: {
     month: function() {
      var month = new Array;
      if (this.current.month === undefined)
              return '';
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
      return month[this.current.month - 1];
      }
    },
});
