const API_URL = process.env.STRAPI_API_URL?.replace(/\/$/, ''); // Remove trailing slash if present
const API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(path: string) {
  try {
    if (!API_URL || !API_TOKEN) {
      throw new Error("STRAPI_API_URL or STRAPI_API_TOKEN is missing.");
    }

    const requestUrl = `${API_URL}${path.startsWith('/') ? path : `/${path}`}`; // Ensure proper formatting

    console.log("Fetching from:", requestUrl); // Debugging log

    const response = await fetch(requestUrl, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Next.js App Router caching
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    return null;
  }
}

export async function getHomepage() {
  try {
    const json = await fetchAPI('/api/homepage?populate=*');

    console.log("Homepage API Response:", json); // Debugging log

    if (!json || !json.data) {
      console.error("Homepage data is missing:", json);
      return {};
    }

    return json.data.attributes ?? {};
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {};
  }
}

export async function getAboutPage() {
  try {
    const json = await fetchAPI('/api/about?populate=*');

    console.log("About Page API Response:", json); // Debugging log

    if (!json || !json.data) {
      console.error("About page data is missing:", json);
      return {};
    }

    return json.data.attributes ?? {};
  } catch (error) {
    console.error("Error fetching About page data:", error);
    return {};
  }
}
