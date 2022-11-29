import { React, useState } from "react";
import { Pagination } from "../../Components/ProductComp/Pagination";
import { ShowProduct } from "../../Components/ProductComp/ShowProduct";
import "./Product.css";
import { Search } from "../../Components/ProductComp/Search";
import { useSelector } from "react-redux";

export function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [search, setSearch] = useState("");

  const posts = useSelector((state) => state.product);

  const soughtPost = posts.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = soughtPost.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section id="Product">
      <div>
        <Search setSearch={setSearch} />
        <ShowProduct data={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={soughtPost.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
