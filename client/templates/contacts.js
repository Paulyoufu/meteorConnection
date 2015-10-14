Template.contacts.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('userN');
  }.bind(this));
};
Template.contacts.rendered = function () {
    $("label.item:nth-child(1)").css("height","110");
  //  $("label.item:nth-child(1)").css("width","80%");
    $("label.item:nth-child(1)").css("border-right","none");
    $("label.item:nth-child(4)").hide();
  $("label.item:nth-child(1) > input:nth-child(2)").css("width","90%");
  $("label.item:nth-child(1) > input:nth-child(2)").after('<img src="3.jpg" id=“img01” style="  width:100px;height:105px;position:relative;left:-10px;top:-60px;" alt=""/>');
 // $("label.item:nth-child(5)").hide();//label.item:nth-child(5)label.item:nth-child(1)
    console.log($("input[name='createdAt']").val());
  if (browser.versions.ios) {

    console.log("iphone");
      $("img:eq(0)").addClass("ios");
  }
  if (browser.versions.android) {
    console.log("android");
      console.log( $("img").length);
      $("img:eq(0)").addClass("android");
  }








};

Template.contacts.events({
  'click #submit': function(){

  $("form").submit(function(e){

     $("label.item:nth-child(4) > input:nth-child(2)").val($("img").attr("src"));
     // label.item:nth-child(4) > input:nth-child(2)
  });

  }
});

AutoForm.hooks({
  'contacts-new-form': {
    onSuccess: function (operation, result, template) {

   //   Router.go('contacts.show', {_id: result});
    },

    onError: function(operation, error, template) {
     // alert(error);
    }
  }
});
