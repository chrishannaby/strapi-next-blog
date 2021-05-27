# strapi-next-blog

This is a Next.js site that is built and deployed on Netlify. Strapi is used as the CMS. 

Architecture:
1. A few blogs/articles are pre-built statically and deployed to the Netlify Edge
2. The rest of the infrequently accessed articles are only built when a user visits those pages. The first request to that page will be served by an 
on-demand builder and cached at the Netlify Edge. Future requests to that page from the same edge node will be served from the Cache. 

Note: In today's implementation of ODB, the function(on-demand builder) response is only cached in the edge node that the request was made to. Any requests made to the same article
from a different edge node will re-trigger the function. 


When code/content changes are made to the site either via Git or Strapi, a build on Netlify is triggered via webhooks. On a successful build, the changes are deployed
to the Netlify Edge, which then invalidates the cache on our Edge. 
