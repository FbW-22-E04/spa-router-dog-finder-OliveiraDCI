import "./App.css";
import Dogs from "./pages/Dogs";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFound from "./pages/NotFound";

// import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  // useNavigate,
  // useParams,
} from "react-router-dom";

const data = [
  {
    name: "hazel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQW7cg5YcYmzXKsUxcqnTjQ0AKpK0ZAf57Q&usqp=CAU",
    favFood: "bones",
  },
  {
    name: "tubby",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfhnDAp5Bh2QIU7nGmgicPfnJrKWZLGXhXQ&usqp=CAU",
    favFood: "shoes",
  },
  {
    name: "whiskey",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ElLfEoTtQIyOm38WiEMesfB6mUaP8Dl6g&usqp=CAU",
    favFood: "pillows",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header data={data} />
      <Routes>
        <Route>
          <Route path="/" element={<Dogs data={data} />} />
          <Route path="/:name" element={<Dogs data={data} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
