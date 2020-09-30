# Assessment: Event RSVP Form
Let's create an express app that collects RSVPs for an event, and stores them in MongoDB.

The app will have three pages. Note: you should be using pug templates to create the HTML for these pages.The main page (on the GET / route) will be the RSVP form with the following fields:

    name
    email
    attending (radio buttons, "I'll be there!" / "I can't make it")
    number of guests (dropdown selection, 1-8)

Posting the form (to the POST /reply route) should show a page with a

    "Thank you for your response!"
    
message and a link to the Guest List page (see below). 

Most importantly, you should create a schema for storing each response, with a field corresponding to each field from the form above. 

Create a model named Response using this schema. 

The behavior expected here is that for every form submission, your application should create a new Response so that the information gets inserted into the responses' collection (schema) within the database named rsvp.

In order for the POST /reply endpoint to parse incoming form submission requests, you can use the express.urlencoded middleware on your POST /reply endpoint. 

This middleware will automatically populate request.body with the values submitted on the form. 

For example, if you wanted to capture the user's name and email then the pug template for the homepage should have a form tag like

    form(action="/reply" method="POST")
        fieldset
            legend="Your Contact Info"
            label(for="name")="Name"
            input(type="text", name="name" required)
            label(for="email")="Email"
            input(type="email", name="email" required)

So when the user is submitting the form to your endpoint, the express.urlencoded middleware will populate request.body.name and request.body.email with the values that the user entered into the form. 

Notice that the property names populated on request.body correspond to whatever value you used for the input name attribute.

Lastly, the Guest List page (at GET /guests) should show all entries in the responses' collection, split into two groups: Attending and Not Attending.

### Assessment Development Plan

    1. Setup express app
        a. 
        b.
        c.
    2. Build HTML/PUG form and pages
        a. home page / form
        b. thank you page
        c. guest list page
    3. Connect form to MongoDB
        a.
        b. create a schema for storing each response, with a field corresponding to each field from the form above
        c. create a model named Response using this schema.
            1. The behavior expected here is that for every form submission, your application should create a new Response so that the information gets inserted into the responses collection (schema) within the database named rsvp.
                *. In order for the POST /reply endpoint to parse incoming form submission requests, you can use the express.urlencoded middleware on your POST /reply endpoint. 
                This middleware will automatically populate request.body with the values submitted on the form. 
                For example, if you wanted to capture the user's name and email then the pug template for the homepage should have a form tag like