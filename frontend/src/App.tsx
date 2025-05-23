import AppRoutes from "./routes/Routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <AppRoutes />
    </>
  );
}

export default App;
