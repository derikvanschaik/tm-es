import lume from "lume/mod.ts";

const site = lume();

site.copy("/styles.css");
site.copy("assets");

export default site;
