import "@/assets/style/index.less";
import Loading from "@/components/Loading/index.tsx";
import store from "@/store";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
// entryList 性能观察列表
const observerIns = new PerformanceObserver((entryList:any) => {
  try {
    for (const entries of entryList.getEntries()) {
      console.log('entries', entries);
    }
  } catch (error) {
    
  }
})

observerIns.observe({
  entryTypes: ['paint']
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);
 