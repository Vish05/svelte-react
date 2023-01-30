import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { GlobalProvider } from "./context/store";

function App() {
  return (
    <main className="container">
      <GlobalProvider>
        <FeedbackForm />
        <FeedbackList />
      </GlobalProvider>
    </main>
  );
}

export default App;
