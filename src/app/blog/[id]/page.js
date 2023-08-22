import getCategoryPost from "@/lib/getCategoryPost";
import React from "react";

const page = async ({ params }) => {
    const id = params.id;
    const posts = await getCategoryPost(id);
    return (
        <div>
            <section>
                <h1>My Post Titles</h1>
                <div className="mt-5">
                    {posts.map((post) => {
                        return (
                            <h4 className="mb-5" key={post.id}>
                                {post.id} - {post.title}
                            </h4>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default page;

// export async function generateStaticParams() {
//     const posts = await getCategoryPost();
//     return posts.map((post) => {
//         id: "" + post.id;
//     });
// }
