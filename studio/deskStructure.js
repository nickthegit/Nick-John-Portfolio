import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "./resolveProductionUrl";

import { CgWebsite } from "react-icons/cg";
import { RiContactsLine, RiPagesLine, RiInformationLine } from "react-icons/ri";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "project") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => resolveProductionUrl(doc),
        })
        .title("Preview"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("website")
        .title("Website")
        .icon(CgWebsite)
        .child(
          S.list()
            .id("site")
            .title("Site")
            .items([
              S.listItem()
                .title("Home Page")
                .icon(RiPagesLine)
                .child(
                  S.editor()
                    .title("Home Page")
                    .id("homePage")
                    .schemaType("homePage")
                    .documentId("homePage")
                ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("category").title("Categories"),
    ]);
