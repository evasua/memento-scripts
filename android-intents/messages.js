var AndroidMessages = {
/**
    Compose an email with optional attachments
    @param {Array} email - A string array of all "To" recipient email addresses.
    @param {string} subject - A string with the email subject.
    @param {string} text - A string with the body of the email.
    @param {Array} attachments - Array of attachments.
   
    @example
    AndroidMessages.email( entry().field("Email") , "Subject" , 
      "Hello , " + entry().field("Name") +"!\nPlease find attached!",  entry().field("Photos") );
    */  
    email: function(email, subject, text, attachments) {
        i = intent(attachments instanceof Array && attachments.length > 1 ?
            "android.intent.action.SEND_MULTIPLE" : "android.intent.action.SEND");
        i.mimeType("message/rfc822");
        i.extraArrayString("android.intent.extra.EMAIL", email);
        i.extra("android.intent.extra.SUBJECT", subject);
        i.extra("android.intent.extra.TEXT", text);
        if (attachments !== undefined) {
            if (attachments instanceof Array && attachments.length == 1)
                i.extraUri("android.intent.extra.STREAM", attachments[0])
            else i.extraUri("android.intent.extra.STREAM", attachments)
        }
        i.send();
    }
};


