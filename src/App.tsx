import { Routes, Route } from "react-router";

import LoginPage from "./pages/login/login";
import EnteredPage from "./pages/entered/entered";

import { AppWraper, HeaderText } from "./styled-components/App-styled";

const App: React.FC = () => {
  return (
    <AppWraper>
      <HeaderText>ONLY.</HeaderText>
      <Routes>
        <Route path="/" element={<LoginPage key={"login"} />} />
        <Route path="/entered" element={<EnteredPage key={"entered"} />} />
      </Routes>
    </AppWraper>
  );
};

export default App;
