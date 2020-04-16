const db = require("./conn");

class BlogModel {
  constructor(id, user_name, user_email, comment) {
    this.id = id;
    this.user_name = user_name;
    this.user_email = user_email;
    this.comment = comment;
  }
  static async getallBlog() {
    try {
      const response = await db.any(`SELECT * FROM user_info`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = BlogModel;
