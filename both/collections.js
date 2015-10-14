
Contacts = new Mongo.Collection('userN');

Contacts.before.insert(function (userId, doc) {
  time= new Date();

  doc.createdAt= moment(time).format();
 console.log("doc.createAT============"+ doc.createdAt);
});


Contacts.before.find(function (userId, selector, options) {

});


//Contacts.helpers({
 // datePosted: function () {
  //  return moment(this.createdAt).format('M/D');
  //}
//});



Contacts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "标题",
    max: 200,
    regEx: /^[a-z0-9A-Z_]{3,15}$/,//3-15 个字母和数字
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    label: "内容",
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published9: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published8: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published7: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published6: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published5: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published4: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },published3: {
    type: Boolean,
    label: "是否发布",
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


SimpleSchema.messages({
  required: "[label] 是必填项！",
  minString: "[label] 不小于 [min] 个字符",
  maxString: "[label] 不能超过 [max] 个字符",
  minNumber: "[label] 必须小于 [min]",
  maxNumber: "[label] 不能大于 [max]",
  minDate: "[label] 不能早于 [min]",
  maxDate: "[label] 不能晚于 [max]",
  badDate: "[label] 无效的日期",
  minCount: "不能小于 [minCount] ",
  maxCount: "不能大于 [maxCount] ",
  noDecimal: "[label] 必须是整数",
  notAllowed: "[value] 不允许使用",
  expectedString: "[label] 必须是字符串",
  expectedNumber: "[label] 必须是数字",
  expectedBoolean: "[label] 必须是布尔值",
  expectedArray: "[label] 必须是数组",
  expectedObject: "[label] 必须是对象",
  expectedConstructor: "[label] 必须属于 [type]",
  regEx: [
    {msg: "[label] 格式验证失败"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] 必须是有效的电子邮件地址"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] 必须是有效的电子邮件地址"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] 必须是有效的域名"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] 必须是有效的域名"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] 必须是有效的 IPv4 或 IPv6 地址"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] 必须是有效的 IPv4 地址"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] 必须是有效的 IPv6 地址"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] 必须是有效的网址"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] 必须是数字组成的ID"}
  ],
  keyNotInSchema: "[key] 没有找到这项数据"
});