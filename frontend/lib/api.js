export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function fetchSortedArticles() {
  const articles = await fetchAPI("/articles?status=published");
  const sorted = articles.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  return sorted;
}

export async function fetchLatestArticles(number = 3) {
  const articles = await fetchSortedArticles();
  const latest = articles.slice(0, number);
  return latest;
}
