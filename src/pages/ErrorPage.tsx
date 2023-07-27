import { useNavigate, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="text-center py-10">
      <p className="mb-5">
        The operation that you just wanted to perform is not allowed.
      </p>
      <button
        onClick={() => navigate(location?.state?.prevUrl)}
        type="button"
        className="underline text-theme-dark-blue"
      >
        Redirect back
      </button>
    </div>
  );
}
