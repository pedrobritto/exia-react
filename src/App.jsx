import React from "react";

import * as PageWrapper from "./components/PageWrapper";
import Button from "./components/Button";

function App() {
  return (
    <PageWrapper.Main>
      <PageWrapper.Content>
        <div className="padding-vertical--big">
          <div className="container">
            <h2>Hello from Exia</h2>

            <div>
              <Button>Hello</Button>
            </div>
          </div>
        </div>
      </PageWrapper.Content>

      <PageWrapper.Footer>
        <div className="container">Footer</div>
      </PageWrapper.Footer>
    </PageWrapper.Main>
  );
}

export default App;
