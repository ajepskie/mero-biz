# Mero Business Beacon

Create a mero biz website add features for our app add a blog, contact us, and CTA
https://apps.microsoft.com/detail/9P5QGP9P0R6T?hl=en-us&gl=AE&ocid=pdpshare

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Cloudflare deployment

The Cloudflare Workers workflow deploys on pushes to `main`. Add these repository
Actions secrets before the Cloudflare deployment can succeed:

- `CLOUDFLARE_API_TOKEN` with permission to deploy Workers
- `CLOUDFLARE_ACCOUNT_ID`

The Worker uses the `workers.dev` URL by default. Connect the production domain
to the Worker in Cloudflare after deployment to enable country-based pricing
for visitors to that domain. GitHub Pages remains available as a static fallback
and cannot provide automatic country detection.
