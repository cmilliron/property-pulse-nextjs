const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    const res = await fetch(`${apiDomain}/properties`, {
      cache: "no-store",
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fect data");
    }
    console.log("** in fetchProperties **");
    // console.log(await res.json());
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchPropertyById(id) {
  try {
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error Feetching peroperty:", error);
    return null;
  }
}

export { fetchProperties, fetchPropertyById };
