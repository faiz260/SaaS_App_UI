import React from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import "./featureTabs.css";
import MyTabContent from "./tabContent";

function FeatureTabs() {
  return (
    <div>
      <Tabs
        className="tab"
        activeLinkStyle={{ color: "#0033cc", borderBottom: "1px solid" }}
      >
        <span>
          <TabLink to="tab1" className="tabLink">
            <img
              className="tab_icon"
              src="/images/chat.png"
              alt="message_icon"
            />
            <p>Discussion</p>
          </TabLink>
          <TabLink to="tab2" className="tabLink">
            <img
              className="tab_icon"
              src="/images/pencil.png"
              alt="message_icon"
            />
            <p>Creative Concept</p>
          </TabLink>
          <TabLink to="tab3" className="tabLink">
            <img
              className="tab_icon"
              src="/images/megaphone.png"
              alt="message_icon"
            />

            <p>Production</p>
          </TabLink>
          <TabLink to="tab4" className="tabLink">
            <img
              className="tab_icon"
              src="/images/heart.png"
              alt="message_icon"
            />
            <p>Happy Client</p>
          </TabLink>
        </span>
        <span>
          <TabContent for="tab1" className="tabContent">
            <MyTabContent />
          </TabContent>
          <TabContent for="tab2" className="tabContent">
            /* content for tab #2 */
          </TabContent>
          <TabContent for="tab3" className="tabContent">
            /* content for tab #3 */
          </TabContent>
          <TabContent for="tab4" className="tabContent">
            /* content for tab #4 */
          </TabContent>
        </span>
      </Tabs>
    </div>
  );
}

export default FeatureTabs;
