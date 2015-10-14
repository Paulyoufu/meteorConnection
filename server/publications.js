Meteor.publish('userN', function() {
  return Contacts.find();
});


/*Contacts.find({})
Meteor.publish(null, function () {
  return [
    Contacts.find(),
    PeopleWithContacts.find()
  ];
});

Meteor.publish("allItems", function () {
  return Items.find();
});
*/