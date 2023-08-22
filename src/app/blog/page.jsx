import getAllCategory from "@/lib/getallCategory";
import Link from "next/link";
import React from "react";

const page = async () => {
    const posts = await getAllCategory();
    return (
        <div>
            <section>
                <h1>My Posts Categories</h1>
                <div className="mt-5 flex flex-row">
                    {posts.map((post) => {
                        return (
                            <div>
                                <h4 className="ms-5" key={post.id}>
                                    <Link href={`/blog/${post.id}`}>
                                        {post.name}
                                    </Link>
                                </h4>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default page;
