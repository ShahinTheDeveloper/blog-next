export default async function getSinglePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Error Fatching Post");
    }
    return res.json();
}
