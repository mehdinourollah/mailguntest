const mailgun = require("mailgun-js");
const DOMAIN = "sandbox649d84b1ebd942528006488fe69caec6.mailgun.org";
const mg = mailgun({ apiKey: "0d83dcbb49fcbebd19f5bf53993b0181-ee13fadb-4ecf5cab", domain: DOMAIN });



const data = {
    from: "Mailgun Sandbox <postmaster@sandbox649d84b1ebd942528006488fe69caec6.mailgun.org>",
    to: "mehdinourollah@gmail.com",
    subject: "Hello",
    text: 'test'
};
mg.get(`/${DOMAIN}/events`, { "begin": "Thurs, 06 July 2017 09:00:00 -0000", "ascending": "yes", "limit": 100 }, function(error, body) {
    console.dir(body.items);
});
// mg.messages().send(data, function(error, body) {
//     console.log(body);
//     let id  = body.id 
//     //  mg.get(`/${DOMAIN}/events`, { "begin": "Thurs, 06 July 2017 09:00:00 -0000", "ascending": "yes", "limit": 100 }, function(error, body) {
//     //     console.dir(body.items);
//     // });
// });

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.