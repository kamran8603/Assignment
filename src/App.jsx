import "./App.css";
import Feed from "./component/Feed";
import Top from "./component/Top";

import Peopleyoumayknow from "./component/Peopleyoumayknow";
import { AuthContextProvider } from "./context/authContext";
import { ModalContextProvider } from "./context/useModal";

import First from "./component/First";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ModalContextProvider>
          <Top />
          <First />
          <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-8">
            <Feed />
            <Peopleyoumayknow />
          </div>
        </ModalContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
