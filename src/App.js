import React from "react";

import PageWrapper from "./components/PageWrapper/PageWrapper";
import ContentWrapper from "./components/PageWrapper/ContentWrapper";
import FooterWrapper from "./components/PageWrapper/FooterWrapper";

function App() {
    return (
        <div className="App">
            <PageWrapper>
                <ContentWrapper>
                    <div className="padding-vertical--big">
                        <div className="container">
                            <h2>Hello from Exia</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos
                                officia eaque, temporibus facilis quidem.
                            </p>
                        </div>
                    </div>
                </ContentWrapper>
                <FooterWrapper>
                    <div className="container">Footer</div>
                </FooterWrapper>
            </PageWrapper>
        </div>
    );
}

export default App;
