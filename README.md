# Site

Hi! This is my personal website, focused on travel blogging. You can view the website here: [https://trailsandtrekking.com](https://trailsandtrekking.com)

### Developer Notes

prereqs:

- `node`
- `npm`

Checkout the repository and run `npm install`

`npm run dev` starts the website on port :3000.

`npm run prebuild` reloads the page metadata store. This is also run when you
run `npm run dev`. The page metadata store should be reloaded when a new page is
added to the site. The page metadata store can be found in `lib/metadata.js. This file is fully generated, and should not be edited by hand.`

## Site Environment Variables

Set the following environment variables in your development environment to enable site features:

```shell
### GOOGLE API SETTINGS ###
# Google Maps API key, used for Google Maps embeds.
export NEXT_PUBLIC_MAPS_API_KEY='xyz'

# URI for SMTP API, see: https://github.com/anders-swanson/contact-email-lambda
export NEXT_PUBLIC_EMAIL_BACKEND_URI='email.service.com'

### RECAPTCHA V2 SETTINGS ###
# Public key for Recaptcha V2
export NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY='xyz'
```

Without these variables the site will still be reachable, but some features may not function, e.g., Captchas, embeds, and more.

## How to write a new blog post

#### 1.

Create a new `Javascript` file in the `pages/blog/` directory, such as `pages/blog/mypage.js`

#### 2.

Add metadata to your page, at the top of the file. the `//+metadata` comment is important for the site builder to add your page's
data to the metadata store during site compilation.

```js
//+metadata
let metadata = {
  // Title which will appear in links and in HTML title
  title: "my new page",
  // Page publish date, in 'YYYY-MM-DD' format
  date: "2023-01-07",
  // Path or URI to cover image
  image: "/images/profile.jpg",
  // List of tags. Tags are used for sorting/filtering/searching.
  tags: ["camping"],
  preview: "This preview will show up in links and post references",
};
```

#### 3.

Implement the React page contract in your page:

```js
import Layout from "../../components/layout";

export default function Post() {
  return (
    // you may use any image or header text, not just the metadata values
    <Layout
      // This image appears in direct link metadata
      ogImage={metadata.image}
      // Acts as the page title and header text
      headerText={metadata.title}
    >
      <h1>The body within Layout is customizable</h1>
    </Layout>
  );
}
```

The `Layout` component is a common container for the site. It is not required, but recommended for most pages.

#### 4.

Save your file and restart the dev webserver to reload the metadata store with `npm run dev`. Your page should be visible on the home page (:3000)
