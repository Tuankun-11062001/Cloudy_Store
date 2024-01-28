import Link from "next/link";
import React from "react";

const Posts = () => {
  return (
    <Link href="/profile/123">
      <div className="post">
        <img />
        <div className="content">
          <h3>title</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, autem, consequuntur corporis delectus doloremque dolorum
            eos expedita facere fugit harum impedit ipsam itaque laudantium
            maiores maxime minima nobis nobis odit quaerat quasi quidem quisquam
            quod repellendus repudiandae, repellendus, rerum saepe
          </p>
          <div className="bottom">
            <p>date</p>
            <p>view</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
