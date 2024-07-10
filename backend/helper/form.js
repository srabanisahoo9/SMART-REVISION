class FormHelper {
  static getQuestionName = (url) => {
    try {
      const regex = /\/problems\/([^\/]+)\//;
      
      // Extract the question name
      const match = url.match(regex);
      if (match) {
        const questionName = match[1];
        return questionName;
      }
      return undefined;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = FormHelper;
