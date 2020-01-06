dbPassword = 'mongodb+srv://john_doe:'+ encodeURIComponent('PasswordPrueba') + '@cluster0-esl8a.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};