The Drupal module from my DrupalCamp Oslo presentation about Drupal and Meteor: http://oslo2013.drupalcamp.no/program/integration-teach-drupal-to-ride-the-meteor.

**Interested in taking this somewhat further if there is interest from the community. I will eventually be using some variation of it for [Spendflow](http://wiz1.us/spendflowbeta).**

Provides /home and requires setting the Drupal variable `meteor_signup_meteor_socket` (e.g. `http:/localhost:3000/sockjs`) to function. Right now, you have to do this manually (e.g. `drush vset`) or in settings.php.

== Credits

Thanks to [Project Ricochet](http://projectricochet.com) for allowing me to adapt and publish the code [Pushpin Planner](https://pushpinplanner.com) uses to create Meteor accounts from Drupal.
