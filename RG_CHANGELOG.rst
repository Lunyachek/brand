RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `quince-rg.1`

[Unreleased]
************

Added:
=====
* Added brand hover color for the buttons with arrow in course-authoring MFE video editor (RGOeX-26448)
* Added cosmetic enhancements for Learner Dashboard (RGOeX-26383)
    * Logo size
    * Fix search icon near the masquerade form
    * Stick footer to the bottom
    * Align to the center masquerade form
* Changed Authn top stripe color from gradient to single brand color (RGOeX-26376)
* Quince MFE theme (RGOeX-26359)
    * General Quince styles
    * Fixed header styles to match with new MFE header
    * Fixed footer styles to match with RG legacy footer
* Added 'header-logo-height-mobile' variable for regulating the logo size on mobile devices (RGOeX-26270)

Fixes:
======
* Fixed oauth providers buttons color on the login and registration pages (RGOeX-26422)
* Temporary fix hover color for buttons with the class .btn-tertiary in course-authoring MFE (RGOeX-26385)
    * This fix must be deleted after this PR - https://github.com/openedx/frontend-app-course-authoring/pull/853 will be merged
* Fixed extra spacing around body element (RGOeX-26384)
    * This fix must be deleted after this PR - https://github.com/openedx/frontend-app-communications/pull/193 will be merged
* Fixed container max-width inside course navigation in MFE frontend-app-communications (RGOeX-26368)
* Fixed course title and organization text truncating in learning, discussion and ora grading headers (RGOeX-26377)
* Fixed the discussions header, which overlaps the tabs navigation (RGOeX-26367)

[palm-rg.2] 2023-12-01
**********************

Fixes:
======
* Layout responsive for Course Authoring Problem pages (RGOeX-26216)
    * This fix should be removed from theme when this `master PR <https://github.com/openedx/frontend-lib-content-components/pull/422>`_ will be merged and included in Git tag for current release
* Form elements alignment and icon deformation for Course Authoring Problem pages (RGOeX-26224)
    * This fix should be removed from theme when this `master PR <https://github.com/openedx/frontend-lib-content-components/pull/423>`_ will be merged and included in Git tag for current release

[palm-rg.1] 2023-11-03 (Palm RG release)
****************************************

Fixes:
======
* Scroll is displayed near Send an email title (RGOeX-26094)
    * This fix should be removed from theme when this `master PR <https://github.com/openedx/frontend-app-communications/pull/155>`_ will be merged
* Move course title under the logo on mobile resolutions (RGOeX-25931)

Added:
=====
* Added brand color to the Show advanced settings button in course authoring (RGOeX-26196)
    * This fix should be removed when this `PR <https://github.com/openedx/frontend-lib-content-components/pull/417>`_ will be merged
* Footer logo enhancements, added `by Raccoon Gang` text to a clickable area in the link with RG logo (RGOeX-26186)
* Changed twitter icon to X on footer (RGOeX-26189)
* Added brand color to the Authn MFE Welcome page (RGOeX-26091)
* Fixed position of notification icon in Learning MFE on mobile resolutions (RGOeX-25939)
* Palm basic branding - logos, base color, etc. (RGOeX-26029)
* prepare brand to the RG palm release (RGOeX-25775)

[olive-rg.1] 2023-03-23 (Olive RG release)
******************************************

Fixes:
======
* Colors changes for the login and registration pages and Base color for the Add Post button in discussions (RGOeX-25891)
* Fix MFE header links focus state (RGOeX-25690)
* Add base color for tinymce context menu in Course Authoring MFE (RGOeX-25525)
* Add base color for custom checkbox inside tinymce modal in discussion (RGOeX-25478)
* Add base color for tinymce in discussion (RGOeX-25325)
* display top stripe in the MFE Authn (RGOeX-25317)
* add text alignment and overflow for social media links for the Account MFE (RGOeX-559)
* change page links in the footer (RGOeX-635)
* fix box-shadow to prevent safari bug (RGOeX-648)
* fix footer doesn't match with Legacy Footer (RGOeX-647)
* fix header links color (RGOeX-639)
* fix z-index for header (RGOeX-772)
* fix header links color (RGOeX-651)
* fix footer styles (RGOeX-647)
* remove additional footer padding on mobile (RGOeX-647)
* fix hover/focus styles for nav items (RGOeX-891)
* fix sidebar height in the Gradebook MFE (RGOeX-947)
* style filter buttons and fix table borders (RGOeX-948)
* alignment rows in modal window (RGOeX-1323)
* stick footer to the bottom while page is loading (RGOeX-1433)
* add cropping for a long username and padding for the section with username for mobile in the Learning MFE (RGOeX-1728)
* stick footer for the Learning MFE when it has loaded with error (RGOeX-1877)
* add width limits for long select wrappers for the Profile MFE (RGOeX-24538)
* fix block floating in the "Edit Grades" modal for the Gradebook MFE (RGOeX-24552)

Added:
=====
* add cursor pointer to "Show more" link and fix line height in Timed Exam notification block (RGOeX-25660 and RGOeX-25667)
* move «End My Exam» button and time to the right side of Special Exam notification block (RGOeX-25179)
* add pre-commit-hooks, add .gitlab-ci.yml and update npm dependencies (MC-36)
* add RG basic branding for the MFE Course Authoring (RGOeX-24924)
* add RG basic branding for the MFE Discussion (RGOeX-24917)
* add RG basic branding for the MFE Authn and cookie banner component (RGOeX-24910)
* update stylelint to version 14 (RGOeX-24910)
* add RG basic branding settings (colors, fonts, variables) (RGOeX-384)
* add styles for the MFE footer component (RGOeX-407)
* add styles for the header of the Learning MFE (RGOeX-652)
* prepare brand to the RG nutmeg release (RGOeX-1295)
* add ability to hide the "powered and created by" section by flag and update set of social links in the footer (RGOeX-1668)
* add ability to translate messages from brand component (RGOeX-1792)
* add ability to translate text from brand and add translations (RGOeX-1844)
* prepare brand to the RG olive release (RGOeX-24524)
* add CI checkers and fix errors (RGOeX-24524)

Changed:
========
* fix breadcrumbs responsive, sequence container width and notifications for the Learning MFE (RGOeX-510)
* fix select fields' arrow icon for the Payment MFE (RGOeX-538)
* change focus styles for nav menu items for the Learning MFE (RGOeX-636)
* fix select field, table cell proportions, button styles and responsive for the Gradebook MFE (RGOeX-511)
* cosmetic improvements for learning and dates tabs (RGOeX-1316)
