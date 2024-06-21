import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const Layout = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Layout;




// app.get("/blog", async (req, res) => {
//   const filter = req.query
//   const query = {
//     blogTitle: { $regex:  "The Role of Technology in Agriculture", $options: "i" }, // Search based on blog title
//     category: filter.filter
//   };
//   const options = {
//     filter: {  }
//   }

//   const cursor = blogCollection.find(query);
//   const result = await cursor.toArray();
//   res.send(result);
// })