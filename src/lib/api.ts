const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL; // Remove trailing slash if present
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

async function fetchAPI(path: string) {
  try {
    if (!API_URL || !API_TOKEN) {
      throw new Error("STRAPI_API_URL or STRAPI_API_TOKEN is missing.");
    }

    const requestUrl = `${API_URL}${path.startsWith('/') ? path : `/${path}`}`;
    console.log("Fetching from:", requestUrl);

    const response = await fetch(requestUrl, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response data:", JSON.stringify(data, null, 2));
    return data;

  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
export async function getHomepage() {
  try {
    // Change to populate=deep to get all nested data
    const json = await fetchAPI('/api/homepage?populate=*');
    
    // Detailed logging of the response
    console.log("Full API Response:", JSON.stringify(json, null, 2));

    if (!json?.data) {
      throw new Error("No data received from API");
    }

    const { hero, works, services } = json.data;

    // Log each section separately
    console.log("Hero section:", JSON.stringify(hero, null, 2));
    console.log("Works section:", JSON.stringify(works, null, 2));
    console.log("Services section:", JSON.stringify(services, null, 2));

    // Transform the data
    return {
      hero: Array.isArray(hero) ? hero.map(hero => ({
        title: hero.title || '',
        subtitle: hero.subtitle || '',
        description: hero.description || ''
      })) : [],

      works: Array.isArray(works) ? works.map(work => ({
        title: work.title || '',
        category: work.category || '',
        year: work.year || '',
        image: work.image?.data ? {
          url: work.image.data.attributes?.url || '',
          width: work.image.data.attributes?.width || 800,
          height: work.image.data.attributes?.height || 600
        } : null
      })) : [],
      
      services: Array.isArray(services) ? services.map(service => ({
        title: service.title || '',
        description: service.description || ''
      })) : []
    };

  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      hero: [],
      works: [],
      services: []
    };
  }
}

export async function getAboutPage() {
  try {
    const json = await fetchAPI('/api/about?populate=*');

    console.log("About Page API Response:", JSON.stringify(json, null, 2)); // Debugging log

    if (!json || !json.data) {
      console.error("About page data is missing:", json);
      return {};
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching About page data:", error);
    throw error;
  }
}
