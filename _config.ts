import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
  location: new URL("https://derikvanschaik.github.io/tm-es/"),
});
site.use(basePath());

site.copy("/styles.css");
site.copy("assets");

export default site;
