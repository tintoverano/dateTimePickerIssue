Schemas = {};

//Jobs = new Mongo.Collection("jobsSample");

//Jobs.attachSchema (new SimpleSchema ({

Schemas.myJobs = new SimpleSchema ({
  number: {
    type: Number,
    defaultValue: 111,
    autoform: {
      omit: true
    }
  },
  createdAt: {
    type: Date,
    //defaultValue: new Date(),
    autoform: {
      omit: true
    }
  },
  createdBy: {
    type: String,
    //defaultValue: Meteor.userId(),
    autoform: {
      omit: true
    }
  },
  jobDetails: {
    type: Object
  },
  'jobDetails.arrivelDate': {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  'jobDetails.dueDate': {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  'thirdParties': {
    type: Array,
    label: "3rd Parties",
    optional: true
  },
  'thirdParties.$': {
    type: Object
  },
  'thirdParties.$.name': {
    type: String,
    autoform: {
      type: "select2",
      options: function () {
        return [
          {label: "PROCERA (SE)", value: "PROCERA (SE)"}
        ];
      }
    }
  },
  'thirdParties.$.referenceNumber': {
    type: String,
    max: 20
  }
}
//)
);

if (Meteor.isClient) {
}

if (Meteor.isServer) {

}
