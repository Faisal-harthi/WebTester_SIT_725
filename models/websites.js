const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  websiteName: { type: String },
  websiteUrl: { type: String },
 

},
{ minimize: false }
);

module.exports = mongoose.model(`website`, websiteSchema, `website`);
