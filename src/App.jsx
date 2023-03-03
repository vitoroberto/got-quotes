import { MdRefresh } from "react-icons/md";
import { useQuotes } from "./hooks/useQuotes";

function App() {
  const { data, refetch, error, isError, isLoading } = useQuotes();

  function handleClick() {
    refetch();
  }

  if (isLoading) {
    return (
      <p className="flex h-screen items-center justify-center text-6xl">
        Loading...
      </p>
    );
  }

  if (isError) {
    return <span className="text-red-600">Error: {error.message}</span>;
  }

  return (
    <div className="container mx-auto flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center px-6">
        <button onClick={handleClick} className="mb-12 p-2 text-4xl">
          <MdRefresh />
        </button>

        <blockquote className="text-3xl">
          "{data.sentence}"
          <cite className="mt-5 flex justify-end">- {data.character.name}</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default App;
