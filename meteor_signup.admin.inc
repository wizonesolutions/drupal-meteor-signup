<?php

function meteor_signup_admin_form($form, &$form_state) {
  $form['meteor_signup_meteor_socket'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('meteor_signup_meteor_socket', 'http://localhost:3000/sockjs'),
    '#description' => t('Enter the /sockjs address of your Meteor application. This is usually the URL to your Meteor application followed by /sockjs.'),
    '#title' => t('SockJS path for Meteor application'),
  );

  return system_settings_form($form);
}
