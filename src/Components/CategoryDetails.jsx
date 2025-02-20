import { useParams, Link } from "react-router-dom";
import categories from "../assets/categoryData/CategoriesData.js";

const CategoryDetails = () => {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(id));

  if (!category) {
    return (
      <h2 className="text-center text-2xl font-bold">Category Not Found</h2>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {category.icon} {category.name}
      </h1>
      <p className="text-gray-600 mb-4">{category.offers} Offers Available</p>
      <ul className="list-disc pl-6">
        {category.data.map((item, index) => (
          <li key={index} className="text-lg text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Back to Categories
      </Link>
    </div>
  );
};

export default CategoryDetails;
