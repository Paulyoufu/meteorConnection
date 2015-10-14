
Contacts = new Mongo.Collection('userN');

Contacts.before.insert(function (userId, doc) {
  time= new Date();

  doc.createdAt= moment(time).format();
 console.log("doc.createAT============"+ doc.createdAt);
});

//Contacts.helpers({
 // datePosted: function () {
  //  return moment(this.createdAt).format('M/D');
  //}
//});



Contacts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,

    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },

  avatarUrl: {
    type: String,
    optional: true,

    autoform: {

       type: "hidden"

    }
  },

  createdAt: {
    type: Date
  }




}));
