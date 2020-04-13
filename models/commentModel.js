const db = require("./conn");

class CommentModel {
  constructor(id, user_name, user_email, comment) {
    this.id = id;
    this.user_name = user_name;
    this.comment = comment;
    this.user_email = user_email;
  }
  static async getallComments() {
    try {
      const response = await db.any(`SELECT * FROM user_info`);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }

  //Add comment to Database

  static async addComment(user_name, comment, user_email) {
    try {
      const postComment = await db.result(`INSERT INTO user_info (user_name, comment, email) 
      VALUES ('${user_name}', '${comment}', '${user_email}')`);
      return postComment;
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
}

module.exports = CommentModel;
