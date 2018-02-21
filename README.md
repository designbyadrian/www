# Design by Adrian dot com

It's rude digging through other people's code 😠

## Local

**TL;DR**: `$ gatsby develop`

1) Create 📄 `.env.development` with these lines:

```env
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
GOOGLE_ANALYTICS_TRACKING_ID=
GATSBY_CAPTCHA_SITE_KEY=
```

2) Create 📄 `.npmrc` with this line:

```
@fortawesome:registry=https://npm.fontawesome.com/ACCESS_TOKEN
```

3) `$ gatsby develop`

## Deploy

1) Create 📄 `.env.production` with these lines:

```env
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
GOOGLE_ANALYTICS_TRACKING_ID=
GATSBY_CAPTCHA_SITE_KEY=
```

2) `$ gatsby build`

3) Push it good 👊
