The Drupal module from my DrupalCamp Oslo presentation about Drupal and Meteor: http://oslo2013.drupalcamp.no/program/integration-teach-drupal-to-ride-the-meteor.

Provides /home and requires setting the Drupal variable `meteor_signup_meteor_socket` (e.g. `http:/localhost:3000/sockjs`) to function. Right now, you have to do this manually (e.g. `drush vset`) or in settings.php.