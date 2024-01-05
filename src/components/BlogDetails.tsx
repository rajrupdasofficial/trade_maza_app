import "../assets/css/blogdetails.css"; // Import CSS for styling
import setcoverImage from "../assets/images/card1.webp";
import Navbar from "./Nav";
// interface BlogDetailProps {
//   coverImage: string;
//   title: string;
//   username: string;
//   publishDateTime: string;
//   content: string;
// }

const BlogDetail = () => {
  return (
    <>
      <Navbar />
      <div className="blog-detail-container">
        <div className="cover-image">
          <img src={setcoverImage} alt="Cover" />
        </div>
        <div className="blog-info">
          <h1 className="blog-title">Blog title {/* {title}  for dynamic*/}</h1>
          <div className="author-info">
            <p className="username">Admin {/* {username} */}</p>
            <p className="publish-date">
              Publish Date {/* {publishDateTime} */}
            </p>
          </div>
          <div className="blog-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              consequatur deserunt nulla officiis nobis nam quos tenetur! A,
              ullam quos aliquam corrupti veritatis cumque inventore et
              similique hic commodi temporibus fugiat nemo natus saepe earum
              maxime nisi error dolorem. Ipsum, ipsam sapiente neque enim eaque
              laborum dignissimos consequatur voluptatum eligendi magnam
              doloremque quas culpa quam voluptate facere rem explicabo. Laborum
              quod, voluptatum culpa architecto ad mollitia. Officia maxime sunt
              quas! Corrupti quas ducimus culpa temporibus. Rerum quaerat
              possimus inventore necessitatibus blanditiis similique cumque, in
              neque assumenda et at nesciunt sequi soluta explicabo? Numquam
              quod tempora modi error saepe natus, quasi sunt inventore
              temporibus maiores esse. Debitis ea unde temporibus error rerum
              quam, est ad cupiditate repellendus ipsam placeat. Tempore vitae
              laudantium eum, laborum deleniti atque perspiciatis exercitationem
              earum ipsa maiores culpa velit eius vero impedit nemo sapiente
              delectus. Esse soluta, totam aperiam repellat omnis dolorem
              tempora eos consequatur. Dignissimos error, amet nulla cumque
              harum in sunt similique. Eum, aliquam qui error excepturi tenetur
              vero sit nihil dolores impedit esse veritatis voluptate
              voluptatibus enim sequi quas. Sed, magnam aspernatur? Ratione
              reiciendis modi adipisci laboriosam? Optio, nihil. Optio illo
              cupiditate quibusdam repellat alias aliquid eveniet beatae aut
              iure eius architecto suscipit, ipsam quis quae laborum eaque,
              assumenda voluptatum repudiandae inventore nobis laudantium
              facilis! Perspiciatis suscipit incidunt aliquam in explicabo
              veritatis doloribus, corrupti minima laudantium! Repudiandae
              repellendus dicta ab, cupiditate accusamus magnam, sed nam velit
              quaerat porro minima maiores delectus! Quam exercitationem illo
              molestiae cumque excepturi expedita at temporibus quos, pariatur
              beatae culpa molestias earum sequi accusamus tempore dolorem eum.
              Ducimus commodi consequatur nemo alias sapiente ipsa quas
              praesentium! At fuga repellendus similique reprehenderit
              consequatur officia, dolor unde? Quas at illum modi libero dicta
              necessitatibus tempora doloremque, perferendis laboriosam
              similique, impedit reiciendis eum distinctio mollitia architecto
              possimus quo sapiente. Quis, laudantium? Fuga, odit! {/*content*/}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
