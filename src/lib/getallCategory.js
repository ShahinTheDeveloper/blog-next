export default async function getAllCategory() {
    const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-categories"
    );
    if (!res.ok) {
        throw new Error("Error Fatching Posts");
    }
    return res.json();
}
