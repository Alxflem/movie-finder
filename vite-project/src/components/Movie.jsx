import starIcon from "../assets/images/star.png";
import deleteIcon from "../assets/images/delete.png";

function Movie({ title, grade }) {
  return (
    <li data-title={title} data-grade={grade} className="flex flex-row">
      {title}
      <img src={starIcon} alt="" />
      <img src={deleteIcon} alt="" />
    </li>
  );
}

export default Movie;
