---
title: surveyless
subtitle: Build, run, and analyze simple serverless surveys
mode: OPEN
---

# 📝 [WORK IN PROGRESS] surveyless

Build, run, and analyze simple serverless surveys.

Less servers, databases, keys, signups, accounts, ads, complexity, and headaches 🤦‍

![MIT License](https://flat.badgen.net/badge/license/mit/blue)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrisrzhou/surveyless)

## Features

- ⚛️ JAMStack + modern web tools power a fully automated survey platform.
- 👌 Zero-config and simple to get started.
- 📝 Manage expressive survey content and questions in markdown.
- 💅 Easy UI customizations using a `theme.json` config file.
- 👯‍ Clone and easily recreate new surveys with consistent setup.
- 📊 Visualize survey results instantly after responses are collected.
- 🔐 Simple security model.

## Why JAMStack + Serverless?

### Third-party solutions

Surveys are an important way to analyze sentiment about brands or events. Existing survey platforms (such as Survey Monkey, Qualtrics) provide various survey tools and solutions. However, these offerings come at a cost, and are usually bloated with superfluous features. They are difficult to customize, and do not provide expressive ways to create survey content. Running surveys on these third-party servers can also be unreliable and expensive.

### Blazing fast deployment on CDN

`surveyless` is a [JAMStack](https://jamstack.org/) application that runs serverless surveys on CDNs. Survey responses are managed by automated pull requests to the `/responses` branch of the Git repo. Closing a survey involves merging the `/responses` into the `/master` branch. This triggers a rebuild of the site, and results can then be analyzed immediately.

### Delightful developer experience

Markdown is a natural medium for creating rich content (this page is created with simple markdown!). Develop and preview content and code changes with hot-reloading. When code changes are committed, it will trigger a rebuild of the site and deploy changes to CDNs. The `theme.json` file provides ample ways to customize your survey for your brand. You can easily duplicate future surveys by cloning a copy of a well-maintained `surveyless` repo, which preserves the content and customizations of the original survey setup.

### Simple security model

`surveyless` has no hackable databases/servers/keys components. We do not store any user-sensitive information in survey responses. For open surveys, simply run your surveys with confidence. If you would like to keep the survey content and responses private, you can achieve this by simply making your Git repo private.

## Survey Setup

For a detailed guide, please refer to the [/docs](./docs).

1. Click the `Deploy to Netlify` button to deploy an instance of `surveyless` on Netlify and Github.
2. To develop,

```bash
git clone git@github.com:{USERNAME}/{SURVEYLESS_INSTANCE_NAME}.git  # clone repo
cd {SURVEYLESS_INSTANCE_NAME}
yarn  # install dependencies
yarn dev  # starts gatsby development survey
```

3. Edit `README.md` file to update the landing page survey content.
4. Edit relevant content in `/survey` folder (e.g. `thankyou.md` and `/survey/questions` markdown file)
5. Test the survey changes in `localhost`.
6. `git commit` and `git push` to apply changes to production.

## Question Types and Choice Sets

For a detailed guide, please refer to the [/docs](./docs).

The following question types and respective choice sets are supported:

- Likert:
  - Rating
  - Radio
  - Button
- Single-choice
  - Radio
  - Button
- Multi-choice
  - Button
  - Checkbox
- Ranking
  - Button
- Matrix (can be collection of single-choice or multi-choice question types)
  - Rating
  - Radio
  - Button
  - Checkbox
- Slider
  - No choice type
- Comment
  - No choice type

All questions can be accompanied by an optional `additionalComments` section where open-ended comments can be captured for the question, in addition to the choice sets provided.

## Customizations

Change your brand logo by attaching a new PNG logo in `/static/logo.png`.

Use the `/survey/theme.json` file to customize the UI appearance of your survey. Avoid deleting any entries in the `theme.json` file.

- Edit the `colors` field to customize unified UI colors.
- Edit the `typography` customize font properties. Google fonts are supported (restarting the devserver is required for this).
- Edit the `space` field to customize spacing properties in the UI.

## Markdown Assets

To include and use assets in your markdown, upload images and other assets into the `/static` folder, and refer to them with the following path syntax `/static/images/logo.png`. It is **important** to refer to markdown assets using an absolute path instead of a relative path.

## Survey Lifecycle

TODO: will be updated

### Launch

### Close

### Analyze

## TODO

- improve redux-persist flow (allow clearing storage)
- mention credits in README or thankyou.md (mdx-deck, netlify, gatsby)
- hotkey for continue + add hotkey helper icon/modal
- Write out README and survey/questions/QUESTION.md content
- build out /docs folder showcasing examples and detailed guide on question types and other APIs
- netlify-functions to submit response (figure out generating uuids and simple auth with JWT)
- theme editor
- results page
- responses should work off the `/responses` github branch
- STRETCH: tooling to detect malformed markdowns etc
