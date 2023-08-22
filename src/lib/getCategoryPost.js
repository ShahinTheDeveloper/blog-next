export default async function getCategoryPost(id) {
    const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-list/${id}`
    );
    if (!res.ok) {
        throw new Error("Error Fatching Posts");
    }
    return res.json();
}
