import React from "react";

import PageWrapper from "./components/PageWrapper/PageWrapper";
import ContentWrapper from "./components/PageWrapper/ContentWrapper";
import FooterWrapper from "./components/PageWrapper/FooterWrapper";
import MessageBox from "./components/ui/MessageBox";

function App() {
    return (
        <PageWrapper>
            <ContentWrapper>
                <div className="padding-vertical--big">
                    <div className="container">
                        <h2>Hello from Exia</h2>
                        <MessageBox color="red">Lorem ipsum dolor sit amet.</MessageBox>
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
    );
}

export default App;
