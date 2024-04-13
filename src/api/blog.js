// api post

export async function handlerGetPost() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/product`);
    const response = await fetch(`https://twin-s.vercel.app/blog`, {
      cache: "no-store",
      next: { revalidate: 10 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function handlerGetPostSlide() {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/blog/latest`);
    const response = await fetch(`https://twin-s.vercel.app/blog/latest`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function handlerGetPostId(id) {
  try {
    // Gọi API từ server của bạn
    // const response = await fetch(`http://localhost:3001/product`);
    const response = await fetch(`https://twin-s.vercel.app/blog/find/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
