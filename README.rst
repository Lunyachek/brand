Open edX Brand Package Interface
================================

This project contains the default branding assets and style used in Open edX applications.

The file structure serves as an interface to be implemented for custom branding and theming of Open edX.

-----------------------
How to use this package
-----------------------

Applications in Open edX are configured by default to include this package for branding assets and theming visual style.

To use a custom brand and theme...

1. Fork or copy this project. Ensure that it lives in a location accessible to Open edX applications during asset builds. This may be a published git repo, npm, or local folder depending on your situation.

2. Replace the assets in this project with your own logos, SASS theme, list of social or information links. All exported logos we can change in the `index.js` file.

3. Configure your Open edX instance to consume your custom brand package. Refer to this documentation on configuring the platform: https://open-edx-proposals.readthedocs.io/en/latest/oep-0048-brand-customization.html

4. Rebuild the assets and microfrontends in your Open edX instance to see the new brand reflected.

--------------------------------------
Files this package must make available
--------------------------------------

``/logo.svg`` Header logo variant.

.. image:: /logo.svg
    :alt: logo
    :width: 60px

``/logo-footer.svg`` Footer logo variant.

.. image:: /logo-footer.svg
    :alt: logo
    :width: 60px

``/svg-sprite.svg`` SVG sprite. Required for footer component.

.. image:: /paragon/images/card-imagecap-fallback.png
    :alt: card-imagecap-fallback
    :width: 380px

``/paragon/images/card-imagecap-fallback.png`` A variant of the default fallback image for Card.ImageCap component.

``/paragon/fonts.scss``, ``/paragon/_variables.scss``, ``/paragon/_overrides.scss``  A SASS theme for `@edx/paragon <https://github.com/edx/paragon>`_.

-----------------------
Additional settings
-----------------------

``footerIcons [Object]`` Set of social media icons for the footer component.

``footerLinks [Object]`` Set of info pages for the footer component.

``isFooterDark [Boolean]`` A flag for toggling the footer color style.

``displayCreatedByBlock [Boolean]`` A flag for toggling the created by and powered by block in the footer.

------------
Translations
------------

This package includes translations object and transfer them to the footer component.
All necessary translations should be added to the i18n directory of this package.
