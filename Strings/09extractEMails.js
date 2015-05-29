//Problem 9. Extract e-mails• Write a function for extracting all email addresses from given text.
//All sub-strings that match the format @… should be recognized as emails.
//Return the emails as array of strings.

function extractMail(text,pattern) {
    return text.match(pattern);
}
var textEmails = 'Please assin@any.stup.co.uk contact us baiko_at@hotmail.com  or by email at exampQle@abv.bg or at baj.ivan@yahoo.co.uk. This is not email: test@test. This also: @telerik.com. Neither this: a@a@.b';
var pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

function extractEMail() {
    console.log(textEmails);
    console.log(extractMail(textEmails,pattern).join('\n'));
}