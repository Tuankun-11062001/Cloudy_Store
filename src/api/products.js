// pages/api/filterData.js

export default async function handlerGetProduct() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/product`);
    const response = await fetch(`https://twin-s.vercel.app/product`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function handlerGetLatestProduct() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/product/latest`);
    const response = await fetch(`https://twin-s.vercel.app/product/latest`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function handleGetSeason(season) {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(
    //   `http://localhost:3001/product/search?season=${season}`
    // );
    const response = await fetch(
      `https://twin-s.vercel.app/product/search?season=${season}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function handleFindProduct(id) {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(
    //   `https://twin-s.vercel.app/product/find/${id}`
    // );
    const response = await fetch(
      `https://twin-s.vercel.app/product/find/${id}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// api product filter

export async function handleFilter(str = "") {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/product/${str}`);
    const response = await fetch(`https://twin-s.vercel.app/product/${str}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// api category

export async function handleGetCategories() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch("http://localhost:3001/category");
    const response = await fetch(`https://twin-s.vercel.app/category`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// api partner

export async function handleGetPartner() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch("http://localhost:3001/partner");
    const response = await fetch(`https://twin-s.vercel.app/partner`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Server error" });
  }
}
