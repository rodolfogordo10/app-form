import React, { FunctionComponent, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import FormPage from 'pages/formPage';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

import 'react-toastify/dist/ReactToastify.css';

// ============================================================
const App: FunctionComponent = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme()}>
        <GlobalStyles />
        <FormPage />
      </ThemeProvider>
      <ToastContainer
        autoClose={5000}
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default App;
